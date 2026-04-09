import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Chip,
  Button,
  TextField,
  Divider,
  Stack,
  Drawer,
  IconButton,
} from "@mui/material";
import {
  Person,
  Favorite,
  ShoppingBag,
  TrackChanges,
  LocationOn,
  Logout,
  Edit,
  Email,
  Phone,
  Search,
  Menu as MenuIcon,
  Close as CloseIcon,
} from "@mui/icons-material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom/cjs/react-router-dom";
import axios from 'axios';

// ── Theme ──────────────────────────────────────────────────────────────────
const theme = createTheme({
  palette: { background: { default: "#F8F3F1" }, primary: { main: "#a17a7a" } },
  typography: { fontFamily: "'Montserrat', sans-serif" },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900, // This is our breakpoint
      lg: 1200,
      xl: 1536,

      B290: 290,
    },
  },
});

// ── Content area colors ────────────────────────────────────────────────────
const C = {
  slate: "#735f5f",
  muted: "#9a8888",
  sub: "#C49A9A",
  btn: "#a17a7a",
  bg: "#F8F3F1",
  card: "#ffffff",
  bdr: "#ecddd8",
};

// ── Sidebar colors ─────────────────────────────────────────────────────────
const S = {
  grad: "linear-gradient(160deg, #3d2a2a 0%, #735f5f 100%)",
  text: "#ffffff",
  textMuted: "rgba(255,255,255,0.55)",
  divider: "rgba(255,255,255,0.12)",
  activeBg: "rgba(255,255,255,0.18)",
  hoverBg: "rgba(255,255,255,0.09)",
  hamBg: "rgba(255,255,255,0.12)",
  hamBdr: "rgba(255,255,255,0.22)",
  hamLine: "rgba(255,255,255,0.88)",
  logoutClr: "#ffaaaa",
  logoutHov: "rgba(255,100,100,0.14)",
};

// ── Static Data ────────────────────────────────────────────────────────────
const ORDERS = {
  ORD001: {
    item: "Floral Bajot",
    date: "12 Apr 2024",
    price: "₹1,200",
    status: "Delivered",
    statusColor: "success",
    steps: [
      {
        label: "Order Placed",
        date: "12 Apr 2024, 10:30 AM",
        desc: "Your order was confirmed.",
        done: true,
      },
      {
        label: "Payment Confirmed",
        date: "12 Apr 2024, 10:32 AM",
        desc: "Payment of ₹1,200 received.",
        done: true,
      },
      {
        label: "Preparing",
        date: "13 Apr 2024, 2:00 PM",
        desc: "Items being prepared.",
        done: true,
      },
      {
        label: "Shipped",
        date: "14 Apr 2024, 9:00 AM",
        desc: "Dispatched via BlueDart. AWB: BD9874561",
        done: true,
      },
      {
        label: "Out for Delivery",
        date: "15 Apr 2024, 11:00 AM",
        desc: "Out for delivery in your area.",
        done: true,
      },
      {
        label: "Delivered",
        date: "15 Apr 2024, 3:45 PM",
        desc: "Package delivered successfully.",
        done: true,
      },
    ],
  },
  ORD002: {
    item: "Ring Light",
    date: "02 May 2024",
    price: "₹700",
    status: "Processing",
    statusColor: "warning",
    steps: [
      {
        label: "Order Placed",
        date: "02 May 2024, 6:15 PM",
        desc: "Your order was confirmed.",
        done: true,
      },
      {
        label: "Payment Confirmed",
        date: "02 May 2024, 6:16 PM",
        desc: "Payment of ₹700 received.",
        done: true,
      },
      {
        label: "Preparing",
        date: "03 May 2024",
        desc: "Items being prepared.",
        done: false,
        active: true,
      },
      { label: "Shipped", date: "—", desc: "", done: false },
      { label: "Out for Delivery", date: "—", desc: "", done: false },
      { label: "Delivered", date: "—", desc: "", done: false },
    ],
  },
  ORD003: {
    item: "Balloon Arch Setup",
    date: "18 May 2024",
    price: "₹1,800",
    status: "Confirmed",
    statusColor: "info",
    steps: [
      {
        label: "Order Placed",
        date: "18 May 2024, 3:00 PM",
        desc: "Your order was confirmed.",
        done: true,
      },
      {
        label: "Payment Confirmed",
        date: "18 May 2024, 3:01 PM",
        desc: "Payment of ₹1,800 received.",
        done: true,
      },
      { label: "Preparing", date: "—", desc: "", done: false, active: true },
      { label: "Shipped", date: "—", desc: "", done: false },
      { label: "Out for Delivery", date: "—", desc: "", done: false },
      { label: "Delivered", date: "—", desc: "", done: false },
    ],
  },
};

const ORDER_LIST = [
  {
    id: "ORD001",
    name: "Floral Bajot",
    date: "12 Apr 2024",
    price: "₹1,200",
    status: "Delivered",
    statusColor: "success",
  },
  {
    id: "ORD002",
    name: "Ring Light",
    date: "02 May 2024",
    price: "₹700",
    status: "Processing",
    statusColor: "warning",
  },
  {
    id: "ORD003",
    name: "Balloon Arch Setup",
    date: "18 May 2024",
    price: "₹1,800",
    status: "Confirmed",
    statusColor: "info",
  },
];

const WISHLIST = [
  { name: "Hanging Chandelier", price: "₹2,500", tag: "Premium" },
  { name: "Selfie Booth Stand", price: "₹800", tag: "Trending" },
  { name: "Flower Arch", price: "₹3,500", tag: "Popular" },
];

const ADDRESSES = [
  { label: "Home", address: "12, Patel Nagar, Navrangpura, Ahmedabad 380009" },
  { label: "Office", address: "501, Business Hub, CG Road, Ahmedabad 380006" },
];

const NAV_ITEMS = [
  { id: "profile", label: "My Profile", icon: <Person fontSize="small" /> },
  { id: "wishlist", label: "Wishlist", icon: <Favorite fontSize="small" /> },
  { id: "orders", label: "My Orders", icon: <ShoppingBag fontSize="small" /> },
  {
    id: "track",
    label: "Track Order",
    icon: <TrackChanges fontSize="small" />,
  },
  { id: "address", label: "Address", icon: <LocationOn fontSize="small" /> },
];

// ═══════════════════════════════════════════════════════════════════════════
// SMALL REUSABLE COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

function StatusBadge({ status, color }) {
  return (
    <Chip
      label={status}
      color={color}
      size="small"
      sx={{ fontSize: 10, fontWeight: 700, height: 20 }}
    />
  );
}

function InfoRow({ icon, label, value }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1.5,
        py: 1.5,
        borderBottom: `1px solid ${C.bdr}`,
        "&:last-child": { borderBottom: "none", pb: 0 },
      }}
    >
      <Box
        sx={{
          width: 36,
          height: 36,
          borderRadius: "10px",
          background: C.bg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: C.btn,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography
          sx={{
            fontSize: 10,
            fontWeight: 600,
            color: C.muted,
            letterSpacing: 0.6,
            textTransform: "uppercase",
            mb: 0.4,
          }}
        >
          {label}
        </Typography>
        <Typography sx={{ fontSize: 13, fontWeight: 500, color: C.slate }}>
          {value}
        </Typography>
      </Box>
    </Box>
  );
}

function OrderRow({ order, onTrack }) {
  return (
    <Box
      onClick={() => onTrack(order.id)}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: "12px 13px",
        background: C.bg,
        border: `1px solid ${C.bdr}`,
        borderRadius: "10px",
        gap: 1,
        cursor: "pointer",
        mb: 1.2,
        transition: "border-color .2s",
        "&:hover": { borderColor: C.sub },
        "&:last-child": { mb: 0 },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
        <Box
          sx={{
            width: 38,
            height: 38,
            borderRadius: "9px",
            background: C.card,
            border: `1px solid ${C.bdr}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <ShoppingBag sx={{ fontSize: 15, color: C.sub }} />
        </Box>
        <Box>
          <Typography sx={{ fontSize: 12, fontWeight: 600, color: C.slate }}>
            {order.name}
          </Typography>
          <Typography
            sx={{ fontSize: 10, color: C.muted, fontWeight: 300, mt: 0.3 }}
          >
            #{order.id} · {order.date}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "right", flexShrink: 0 }}>
        <Typography sx={{ fontSize: 13, fontWeight: 600, color: C.btn }}>
          {order.price}
        </Typography>
        <StatusBadge status={order.status} color={order.statusColor} />
      </Box>
    </Box>
  );
}

function CardHeader({ icon, title }) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.3, mb: 2.2 }}>
      <Box
        sx={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          background: C.bg,
          border: `1px solid ${C.bdr}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: C.btn,
        }}
      >
        {icon}
      </Box>
      <Typography sx={{ fontSize: 14, fontWeight: 600, color: C.slate }}>
        {title}
      </Typography>
    </Box>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE SECTIONS
// ═══════════════════════════════════════════════════════════════════════════

function ProfileSection({ onNav }) {
  const [open, setOpen] = useState(false); // Form open/close state
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  // Pehli var data fetch karva mate (Autofill)
  useEffect(() => {
    const fetchUserData = async () => {
      const res = await axios.get("/api/user/profile");
      setFormData({
        name: res.data.name,
        email: res.data.email,
        phone: res.data.phone || "",
        location: res.data.location || "",
      });
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    setSaving(true);
    try {
        await axios.put("/api/user/update-profile", formData);
        setOpen(false);
        alert("Profile Updated!");
    } catch (error) {
        console.error("Error updating profile:", error);
        alert("Something went wrong!");
    } finally {
        setSaving(false); // Loading stop (Success hoy ke Error, aa thavu joie)
    }
  };
  return (
    <Box>
      {/* ── Header ── */}
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          mb: 0.8,
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 26,
              fontWeight: 500,
              color: C.slate,
              lineHeight: 1.1,
            }}
          >
            My Profile
          </Typography>
          <Typography
            sx={{ fontSize: 12, color: C.muted, mt: 0.5, fontWeight: 300 }}
          >
            View and manage your profile
          </Typography>
        </Box>
        <Button
          onClick={() => setOpen(true)}
          variant="contained"
          startIcon={<Edit sx={{ fontSize: 11 }} />}
          sx={{
            background: C.btn,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            borderRadius: "8px",
            px: 2.2,
            py: 1.2,
            "&:hover": { background: C.slate },
            whiteSpace: "nowrap",
            flexShrink: 0,
            display: { xs: "none", sm: "flex" },
          }}
        >
          Edit Profile
        </Button>
      </Box>

      <Divider sx={{ borderColor: C.bdr, my: 2.2 }} />

      {/* ── Stats ── */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        {[
          ["3", "Total Orders"],
          ["3", "Wishlist Items"],
          ["3", "Recent Orders"],
        ].map(([num, lbl]) => (
          <Grid item size={{ xs: 12, sm: 4 }} key={lbl}>
            <Paper
              variant="outlined"
              sx={{
                borderColor: C.bdr,
                borderRadius: "16px",
                px: { xs: 2, sm: 3, md: 10 },
                py: 4,
                textAlign: "center",
                background: C.card,
                boxShadow: "0 1px 6px rgba(115,95,95,0.06)",
                transition: "all 0.2s ease",
                "&:hover": { transform: "translateY(-2px)" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 30, sm: 36 },
                  fontWeight: 700,
                  color: C.slate,
                }}
              >
                {num}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: 13, sm: 15 },
                  color: C.muted,
                  fontWeight: 400,
                }}
              >
                {lbl}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* ── Info Card ── */}
      <Paper
        variant="outlined"
        sx={{
          borderColor: C.bdr,
          borderRadius: "13px",
          p: "20px 22px",
          mb: 2.2,
          textAlign: "left",
        }}
      >
        <CardHeader
          icon={<Person sx={{ fontSize: 15 }} />}
          title="Basic Info"
        />
        <InfoRow
          icon={<Person sx={{ fontSize: 15 }} />}
          label="Full Name"
          value={formData.name || "N/A"}
        />
        <InfoRow
          icon={<Email sx={{ fontSize: 15 }} />}
          label="Email"
          value={formData.email || "N/A"}
        />
        <InfoRow
          icon={<Phone sx={{ fontSize: 15 }} />}
          label="Phone"
          value={formData.phone}
        />
        <InfoRow
          icon={<LocationOn sx={{ fontSize: 15 }} />}
          label="Location"
          value={formData.location}
        />
      </Paper>

      {/* ── Edit Profile Modal ── */}
      {open && (
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
            zIndex: 1300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            p: 2,
          }}
        >
          <Paper
            sx={{
              borderRadius: "16px",
              p: "28px 28px",
              width: "100%",
              maxWidth: 420,
              background: C.card,
              boxShadow: "0 24px 64px rgba(115,95,95,0.18)",
            }}
          >
            {/* Modal Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2.5,
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 500,
                  color: C.slate,
                }}
              >
                Edit Profile
              </Typography>
              <IconButton
                onClick={() => setOpen(false)}
                size="small"
                sx={{ color: C.muted }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            <Divider sx={{ borderColor: C.bdr, mb: 2.5 }} />

            {/* Form Fields */}
            <Stack spacing={2}>
              {[
                {
                  name: "name",
                  label: "Full Name",
                  icon: <Person sx={{ fontSize: 16, color: C.muted }} />,
                },
                {
                  name: "email",
                  label: "Email",
                  icon: <Email sx={{ fontSize: 16, color: C.muted }} />,
                },
                {
                  name: "phone",
                  label: "Phone Number",
                  icon: <Phone sx={{ fontSize: 16, color: C.muted }} />,
                  placeholder: "e.g. +91 98765 43210",
                },
                {
                  name: "location",
                  label: "Location",
                  icon: <LocationOn sx={{ fontSize: 16, color: C.muted }} />,
                  placeholder: "e.g. Ahmedabad, Gujarat",
                },
              ].map((field) => (
                <TextField
                  key={field.name}
                  name={field.name}
                  label={field.label}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder || ""}
                  size="small"
                  fullWidth
                  InputProps={{
                    startAdornment: <Box sx={{ mr: 1 }}>{field.icon}</Box>,
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "10px",
                      background: C.bg,
                      fontSize: 13,
                      "& fieldset": { borderColor: C.bdr },
                      "&:hover fieldset": { borderColor: C.sub },
                      "&.Mui-focused fieldset": { borderColor: C.btn },
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: C.btn },
                  }}
                />
              ))}
            </Stack>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 1.5, mt: 3 }}>
              <Button
                onClick={() => setOpen(false)}
                fullWidth
                variant="outlined"
                sx={{
                  borderColor: C.bdr,
                  color: C.muted,
                  borderRadius: "10px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  "&:hover": { borderColor: C.sub, color: C.btn },
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={(e) => handleSave(e)}
                fullWidth
                variant="contained" 
                disabled={saving}
                sx={{
                  background: C.btn,
                  borderRadius: "10px",
                  fontSize: 12,
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                  "&:hover": { background: C.slate },
                }}
              >
                {saving ? "Saving..." : "Save"}
              </Button>
            </Box>
          </Paper>
        </Box>
      )}
    </Box>
  );
}

function WishlistSection() {
  return (
    <Box>
      <Typography
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 26,
          fontWeight: 500,
          color: C.slate,
          mb: 2.8,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
        }}
      >
        Wishlist
      </Typography>
      <Stack spacing={1.3}>
        {WISHLIST.map((item) => (
          <Paper
            key={item.name}
            variant="outlined"
            sx={{
              borderColor: C.bdr,
              borderRadius: "12px",
              p: "15px 18px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "22px",
              flexWrap: { xs: "wrap", sm: "nowrap" },
              transition: "border-color .2s",
              "&:hover": { borderColor: C.sub },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.7 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: "9px",
                  background: "rgba(196,154,154,.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Favorite sx={{ fontSize: 17, color: C.sub }} />
              </Box>
              <Box>
                <Typography
                  sx={{ fontSize: 13, fontWeight: 600, color: C.slate }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                    color: C.btn,
                    mt: 0.3,
                    textAlign: "left",
                  }}
                >
                  {item.price}
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                flexWrap: { xs: "wrap", sm: "nowrap" }, // 👈 important
                width: { xs: "100%", sm: "auto" }, // 👈 mobile ma full width
                justifyContent: { xs: "space-between", sm: "flex-start" },
              }}
            >
              <Chip
                label={item.tag}
                size="small"
                sx={{
                  fontSize: 10,
                  fontWeight: 600,
                  height: 22,
                  background: "rgba(196,154,154,.14)",
                  color: C.btn,
                  border: `1px solid rgba(196,154,154,.25)`,
                }}
              />
              <Button
                component={Link}
                to="/rentItem"
                size="small"
                variant="contained"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  flexWrap: { xs: "wrap", sm: "nowrap" }, // 👈 important
                  justifyContent: { xs: "space-between", sm: "flex-start" }, // 👈 spacing fix
                }}
              >
                Book Now
              </Button>
            </Box>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

function OrdersSection({ onTrack }) {
  return (
    <Box>
      <Typography
        sx={{
          display: { xs: "none", md: "flex" },
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 26,
          fontWeight: 500,
          color: C.slate,
          mb: 2.8,
        }}
      >
        My Orders
      </Typography>
      <Stack spacing={1.4}>
        {ORDER_LIST.map((o) => (
          <Paper
            key={o.id}
            variant="outlined"
            sx={{
              borderColor: C.bdr,
              borderRadius: "12px",
              p: "17px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: 1,
              transition: "all .2s",
              "&:hover": { borderColor: C.sub },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: C.slate,
                  mb: 0.4,
                  textAlign: "left",
                }}
              >
                {o.name}
              </Typography>
              <Typography
                sx={{ fontSize: 11, color: C.muted, fontWeight: 300, mb: 0.9 }}
              >
                #{o.id} · {o.date}
              </Typography>
              <Button
                onClick={() => onTrack(o.id)}
                size="small"
                variant="contained"
                sx={{
                  background: C.btn,
                  display: "flex",
                  color: "#fff",
                  fontSize: 10,
                  fontWeight: 600,
                  letterSpacing: 0.8,
                  textTransform: "uppercase",
                  borderRadius: "6px",
                  px: 1.4,
                  py: 0.5,

                  "&:hover": { background: C.slate },
                }}
              >
                Track Order
              </Button>
            </Box>
            <Typography
              sx={{
                fontSize: 18,
                fontWeight: 700,
                color: C.btn,
                flexShrink: 0,
              }}
            >
              {o.price}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

function TrackSection({ initialId }) {
  const [inputVal, setInputVal] = useState(initialId || "");
  const [searchId, setSearchId] = useState(initialId || "");
  const order = ORDERS[searchId];

  return (
    <Box>
      <Typography
        sx={{
          display: { xs: "none", md: "flex" },
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 26,
          fontWeight: 500,
          color: C.slate,
          mb: 2.8,
        }}
      >
        Track Order
      </Typography>
      <Box sx={{ display: "flex", gap: 1.3, mb: 2.8 }}>
        <TextField
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={(e) =>
            e.key === "Enter" && setSearchId(inputVal.trim().toUpperCase())
          }
          placeholder="Enter Order ID  e.g. ORD001"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              background: C.bg,
              fontSize: 13,
              "& fieldset": { borderColor: C.bdr },
              "&:hover fieldset": { borderColor: C.sub },
              "&.Mui-focused fieldset": { borderColor: C.sub },
            },
          }}
        />
        <Button
          onClick={() => setSearchId(inputVal.trim().toUpperCase())}
          variant="contained"
          sx={{
            background: C.btn,
            borderRadius: "8px",
            px: 2.5,
            flexShrink: 0,
            "&:hover": { background: C.slate },
          }}
        >
          <Search sx={{ fontSize: 18 }} />
        </Button>
      </Box>

      {searchId && !order && (
        <Typography sx={{ color: C.muted, fontSize: 13 }}>
          Order not found. Try ORD001, ORD002 or ORD003.
        </Typography>
      )}

      {searchId && order && (
        <Paper
          variant="outlined"
          sx={{
            borderColor: C.bdr,
            borderRadius: "13px",
            p: "20px 22px",
            textAlign: "left",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 2,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Box>
              <Typography
                sx={{ fontSize: 11, color: C.muted, fontWeight: 300 }}
              >
                #{searchId} · {order.date}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 20,
                  color: C.slate,
                  fontWeight: 500,
                  mt: 0.3,
                }}
              >
                {order.item}
              </Typography>
            </Box>
            <Box>
              <Typography sx={{ fontSize: 18, fontWeight: 700, color: C.btn }}>
                {order.price}
              </Typography>
              <StatusBadge status={order.status} color={order.statusColor} />
            </Box>
          </Box>
          <Divider sx={{ borderColor: C.bdr, mb: 2 }} />
          <Box sx={{ position: "relative", pl: 3 }}>
            <Box
              sx={{
                position: "absolute",
                left: 7,
                top: 0,
                bottom: 0,
                width: 2,
                background: C.bdr,
              }}
            />
            {order.steps.map((step, i) => (
              <Box
                key={i}
                sx={{ position: "relative", mb: 2, "&:last-child": { mb: 0 } }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    left: -24,
                    top: 3,
                    width: 11,
                    height: 11,
                    borderRadius: "50%",
                    border: `2px solid ${step.done || step.active ? C.btn : C.bdr}`,
                    background: step.done ? C.btn : C.card,
                    boxShadow: step.active
                      ? "0 0 0 3px rgba(161,122,122,.2)"
                      : "none",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: step.done || step.active ? 600 : 400,
                    color: step.done || step.active ? C.slate : C.muted,
                  }}
                >
                  {step.label}
                </Typography>
                {step.date && step.date !== "—" && (
                  <Typography sx={{ fontSize: 10, color: C.muted, mt: 0.2 }}>
                    {step.date}
                  </Typography>
                )}
                {step.desc && (
                  <Typography
                    sx={{
                      fontSize: 11,
                      color: C.muted,
                      mt: 0.3,
                      lineHeight: 1.6,
                    }}
                  >
                    {step.desc}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Paper>
      )}
    </Box>
  );
}

function AddressSection() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2.8,
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "flex" },
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 26,
            fontWeight: 500,
            color: C.slate,
          }}
        >
          Addresses
        </Typography>
        <Button
          variant="contained"
          sx={{
            display: { xs: "none", md: "flex" },
            background: C.btn,
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: 1,
            textTransform: "uppercase",
            borderRadius: "8px",
            px: 2.2,
            py: 1.2,
            "&:hover": { background: C.slate },
          }}
        >
          + Add New
        </Button>
      </Box>
      <Stack spacing={1.4}>
        {ADDRESSES.map((a) => (
          <Paper
            key={a.label}
            variant="outlined"
            sx={{
              borderColor: C.bdr,
              borderRadius: "12px",
              p: "17px 20px",
              display: "flex",
              gap: 1.7,
              alignItems: "flex-start",
              transition: "all .2s",
              "&:hover": { borderColor: C.sub },
            }}
          >
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: "9px",
                background: "rgba(196,154,154,.13)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <LocationOn sx={{ fontSize: 16, color: C.btn }} />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography
                sx={{ fontSize: 13, fontWeight: 600, color: C.slate, mb: 0.5 }}
              >
                {a.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: 13,
                  color: C.muted,
                  lineHeight: 1.7,
                  fontWeight: 300,
                }}
              >
                {a.address}
              </Typography>
            </Box>
            <Typography
              sx={{
                fontSize: 11,
                color: C.btn,
                cursor: "pointer",
                fontWeight: 500,
                flexShrink: 0,
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Edit
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// SIDEBAR CONTENT - Reusable for both Desktop and Drawer
// ═══════════════════════════════════════════════════════════════════════════
function SidebarContent({
  activeSection,
  onNav,
  onClose,
  showCloseButton = false,
}) {
  const userName = localStorage.getItem("userName") || "User Name";
  const userEmail = localStorage.getItem("userEmail") || "user@example.com";
  const firstLetter = userName.charAt(0).toUpperCase();
  return (
    <Box
      sx={{
        background: S.grad,
        width: 260,

        pt: {
          sm: 0,
          md: 2.4,
        },
        pb: 2.4,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Close button for mobile drawer */}
      {showCloseButton && (
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}>
          <IconButton onClick={onClose} sx={{ color: S.text }}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}

      {/* Avatar + Name */}
      <Box
        sx={{
          p: {
            xs: "0px 20px 20px 0px",
            sm: "0px 20px 20px 0px",
            md: "24px 20px",
          },
          textAlign: "center",
          borderBottom: `1px solid ${S.divider}`,
        }}
      >
        <Avatar
          sx={{
            width: 60,
            height: 60,
            mx: "auto",
            mb: 1.3,
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.35)",
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 24,
            fontWeight: 600,
            color: "#fff",
          }}
        >
          {firstLetter}
        </Avatar>
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond',serif",
            fontSize: 16,
            color: S.text,
            fontWeight: 600,
          }}
        >
          {userName}
        </Typography>
        <Typography sx={{ fontSize: 11, color: S.textMuted, mt: 0.3 }}>
          {userEmail}
        </Typography>
      </Box>

      {/* Nav Links */}
      <List sx={{ p: 1.5, flex: 1 }}>
        {NAV_ITEMS.map((item) => (
          <ListItemButton
            key={item.id}
            selected={activeSection === item.id}
            onClick={() => {
              onNav(item.id);
              if (onClose) onClose();
            }}
            sx={{
              borderRadius: "10px",
              mb: 0.5,
              py: 1.3,
              px: 1.8,
              borderLeft: `3px solid ${activeSection === item.id ? "#fff" : "transparent"}`,
              color: activeSection === item.id ? S.text : S.textMuted,
              fontWeight: activeSection === item.id ? 600 : 400,
              "&.Mui-selected": {
                background: S.activeBg,
                "&:hover": { background: S.activeBg },
              },
              "&:hover": { background: S.hoverBg, color: S.text },
              transition: "all .2s",
            }}
          >
            <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.label}
              primaryTypographyProps={{ fontSize: 13, fontWeight: "inherit" }}
            />
          </ListItemButton>
        ))}

        <Divider sx={{ borderColor: S.divider, my: 1.5 }} />

        {/* Logout */}
        <ListItemButton
          sx={{
            borderRadius: "10px",
            py: 1.3,
            px: 1.8,
            borderLeft: "3px solid transparent",
            color: S.logoutClr,
            "&:hover": { background: S.logoutHov },
            transition: "all .2s",
          }}
        >
          <ListItemIcon sx={{ minWidth: 30, color: "inherit" }}>
            <Logout fontSize="small" />
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            primaryTypographyProps={{ fontSize: 13 }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// DESKTOP SIDEBAR — Shows only on screens >= 900px
// ═══════════════════════════════════════════════════════════════════════════
function DesktopSidebar({ activeSection, onNav }) {
  return (
    <Box
      sx={{
        display: { xs: "none", md: "block" },
        position: "sticky",
        top: 0,
        alignSelf: "flex-start",
        height: "100vh",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      <SidebarContent activeSection={activeSection} onNav={onNav} />
    </Box>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MOBILE TOP BAR — Shows only on screens < 900px with hamburger menu
// ═══════════════════════════════════════════════════════════════════════════
function MobileTopBar({ activeSection, onNav }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const currentLabel =
    NAV_ITEMS.find((n) => n.id === activeSection)?.label || "Profile";

  return (
    <>
      {/* Top Bar */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          background: S.grad,
          borderRadius: "14px",
          px: 2,
          py: 1.3,
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        {/* Hamburger Menu Button */}
        <IconButton
          onClick={() => setDrawerOpen(true)}
          sx={{
            width: {
              xs: 33,
              B290: 40,
              md: 40,
            },
            height: {
              xs: 33,
              B290: 40,
              md: 40,
            },
            borderRadius: "10px",
            background: S.hamBg,
            border: `1px solid ${S.hamBdr}`,
            color: S.text,
            "&:hover": { background: "rgba(255,255,255,0.2)" },
          }}
        >
          <MenuIcon />
        </IconButton>

        {/* Page Title */}
        <Typography
          sx={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: {
              xs: "17px",
              B290: "18px",
              md: "18px",
            },
            fontWeight: 600,
            color: S.text,
          }}
        >
          {currentLabel}
        </Typography>

        {/* Edit Button */}
        {activeSection === "profile" && (
          <Button
            variant="contained"
            startIcon={<Edit sx={{ fontSize: 11 }} />}
            sx={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              borderRadius: "8px",
              px: 1.5,
              py: 0.9,
              boxShadow: "none",
              "&:hover": { background: "rgba(255,255,255,0.3)" },
            }}
          >
            Edit
          </Button>
        )}

        {activeSection === "address" && (
          <Button
            variant="contained"
            sx={{
              background: "rgba(255,255,255,0.2)",
              border: "1px solid rgba(255,255,255,0.3)",
              color: "#fff",
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 0.8,
              textTransform: "uppercase",
              borderRadius: "8px",
              px: 1.5,
              py: 0.9,
              boxShadow: "none",
              "&:hover": { background: "rgba(255,255,255,0.3)" },
            }}
          >
            + Add New
          </Button>
        )}
      </Box>

      {/* Drawer with Sidebar */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            minHeight: "100vh",
            background: S.grad,
            boxShadow: "none",
            overflowY: "auto",
          },
        }}
      >
        <SidebarContent
          activeSection={activeSection}
          onNav={onNav}
          onClose={() => setDrawerOpen(false)}
          showCloseButton={true}
        />
      </Drawer>
    </>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// ROOT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════
export default function User_profile() {
  const [userData, setUserData] = useState({
    name: localStorage.getItem("userName") || "",
    email: localStorage.getItem("userEmail") || "",
  });

  useEffect(() => {
    const handleAuthChange = () => {
      setUserData({
        name: localStorage.getItem("userName") || "Guest",
        email: localStorage.getItem("userEmail") || "guest@example.com",
      });
    };
    window.addEventListener("authChange", handleAuthChange);
    return () => window.removeEventListener("authChange", handleAuthChange);
  }, []);

  // 3. firstLetter define karo
  const firstLetter = userData.name
    ? userData.name.charAt(0).toUpperCase()
    : "G";

  // Avatar mate name no first letter kadhva mate:

  const [activeSection, setActiveSection] = useState("profile");
  const [trackId, setTrackId] = useState("");

  function handleNav(section, id = "") {
    setActiveSection(section);
    if (section === "track") setTrackId(id);
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: "#F8F3F1", minHeight: "100vh", display: "flex" }}>
        {/* Desktop Sidebar — only shows on md and up (>= 900px) */}
        <DesktopSidebar activeSection={activeSection} onNav={handleNav} />

        {/* Main Content Area */}
        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Mobile Top Bar with Drawer — only shows below 900px */}
          <Box sx={{ display: { xs: "block", md: "none" }, p: "16px 16px 0" }}>
            <MobileTopBar activeSection={activeSection} onNav={handleNav} />
          </Box>

          {/* Page Content */}
          <Box sx={{ flex: 1, p: { xs: "16px", md: "32px 36px" } }}>
            {activeSection === "profile" && (
              <ProfileSection onNav={handleNav} />
            )}
            {activeSection === "wishlist" && <WishlistSection />}
            {activeSection === "orders" && (
              <OrdersSection onTrack={(id) => handleNav("track", id)} />
            )}
            {activeSection === "track" && <TrackSection initialId={trackId} />}
            {activeSection === "address" && <AddressSection />}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
