import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  Select,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Fade,
} from "@mui/material";
import { Search, Add, Close, Edit, Delete } from "@mui/icons-material";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const sub = "#C49A9A";
const muted = "#735f5f";
const bg = "#F5EFEc";
const slate = "#a17a7a";
const border = "rgba(196,154,154,0.22)";

const labelStyle = {
  fontFamily: fontSans,
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  color: slate,
  mb: 0.8,
  display: "block",
};

const inputStyle = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: 13,
    mb:2,
    borderRadius: "8px",
    background: bg,
    "& fieldset": { borderColor: border },
    "&:hover fieldset": { borderColor: sub },
    "&.Mui-focused fieldset": { borderColor: sub, borderWidth: "1px" },
  },
  "& .MuiInputBase-input": { padding: "10px 14px", color: slate },
};

const selectStyle = {
  fontFamily: fontSans,
  fontSize: 13,
  borderRadius: "8px",
  background: bg,
   mb:2,
  "& .MuiOutlinedInput-notchedOutline": { borderColor: border },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: sub },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: sub,
    borderWidth: "1px",
  },
};

const TAGS = ["", "Popular", "Trending", "New", "Premium"];
const CATEGORIES = [
  "Wedding",
  "Birthday",
  "Corporate",
  "Housewarming",
  "Engagement",
  "Festival",
];

const INIT_PRODUCTS = [
  {
    id: 1,
    name: "Floral Bajot",
    category: "Wedding",
    price: 1200,
    deposit: 2000,
    qty: 3,
    tag: "Popular",
    image: "W_floral_canopy.png",
    description: "Traditional floral bajot for wedding ceremonies.",
  },
  {
    id: 2,
    name: "Selfie Booth Stand",
    category: "Birthday",
    price: 800,
    deposit: 1500,
    qty: 2,
    tag: "Trending",
    image: "B_kids_chair.png",
    description: "Fun selfie booth stand for birthday parties.",
  },
  {
    id: 3,
    name: "Mini Throne Chair",
    category: "Birthday",
    price: 1500,
    deposit: 3000,
    qty: 1,
    tag: "",
    image:
      "https://i.pinimg.com/1200x/49/02/72/490272a9bade315d76f8eb8e00dad452.jpg",
    description: "Luxurious mini throne for the birthday star.",
  },
  {
    id: 4,
    name: "Banner Stand",
    category: "Corporate",
    price: 600,
    deposit: 1000,
    qty: 5,
    tag: "",
    image: "B_banner_stand.png",
    description: "Professional banner stand for corporate events.",
  },
  {
    id: 5,
    name: "Diya Stand",
    category: "Housewarming",
    price: 700,
    deposit: 1200,
    qty: 4,
    tag: "New",
    image: "Diya_stand.png",
    description: "Professional ring light for reels.",
  },
  {
    id: 6,
    name: "Hanging Chandelier",
    category: "Wedding",
    price: 2500,
    deposit: 5000,
    qty: 2,
    tag: "Premium",
    image:
      "https://i.pinimg.com/736x/4a/d0/e8/4ad0e88a6bcac3562f21fdf61368debb.jpg",
    description: "Elegant chandelier for wedding halls.",
  },
];

const BLANK = {
  name: "",
  category: "Wedding",
  price: "",
  deposit: "",
  qty: "",
  tag: "",
  image: "",
  description: "",
};

export default function Product() {
  const [products, setProducts] = useState(INIT_PRODUCTS);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [formOpen, setFormOpen] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ ...BLANK });

  const filtered = products.filter(
    (p) =>
      (filter === "All" || p.category === filter) &&
      p.name.toLowerCase().includes(search.toLowerCase()),
  );

  const filterChips = ["All", ...CATEGORIES];

  // Open Add form
  const handleAddClick = () => {
    setEditingId(null);
    setForm({ ...BLANK });
    setFormOpen(true);
  };

  // Open Edit form
  const handleEditClick = (item) => {
    setEditingId(item.id);
    setForm({ ...item });
    setFormOpen(true);
  };

  // Save — add or update
  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editingId) {
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? {
                ...p,
                ...form,
                price: Number(form.price),
                deposit: Number(form.deposit),
                qty: Number(form.qty),
              }
            : p,
        ),
      );
    } else {
      setProducts([
        ...products,
        {
          ...form,
          id: Date.now(),
          price: Number(form.price),
          deposit: Number(form.deposit),
          qty: Number(form.qty),
        },
      ]);
    }
    setFormOpen(false);
  };

  return (
    <Box sx={{ background: "#fff", minHeight: "100vh" }}>
      <style>{`
            @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap');

            /* Image zoom on card hover */
            .pc-img { transition: transform 0.5s ease !important; }
            .pc-card:hover .pc-img { transform: scale(1.06) !important; }

            /* Overlay hidden by default, shows on card hover */
            .pc-overlay {
            opacity: 0;
            transition: opacity 0.35s ease !important;
            position: absolute;
            inset: 0;
            z-index: 3;
            }
            .pc-card:hover .pc-overlay { opacity: 1 !important; }
        `}</style>

      {/* ── PAGE HEADER ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          mb: 3,
          flexWrap: "wrap",
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: 34,
              fontWeight: 600,
              color: slate,
              lineHeight: 1,
            }}
          >
            Products
          </Typography>
          <Typography
            sx={{ fontFamily: fontSans, fontSize: 11, color: muted, mt: 0.5 }}
          >
            {filtered.length} items{" "}
            {filter !== "All" ? `in ${filter}` : "total"}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 1.5,
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <TextField
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products…"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ fontSize: 15, color: muted }} />
                </InputAdornment>
              ),
            }}
            sx={{
              width: 200,
              "& .MuiOutlinedInput-root": {
                fontFamily: fontSans,
                fontSize: 13,
                borderRadius: "8px",
                background: bg,
                "& fieldset": { borderColor: border },
                "&:hover fieldset": { borderColor: sub },
                "&.Mui-focused fieldset": {
                  borderColor: sub,
                  borderWidth: "1px",
                },
              },
              "& .MuiInputBase-input": { padding: "9px 13px", color: slate },
            }}
          />

          <Button
            onClick={handleAddClick}
            variant="contained"
            startIcon={<Add />}
            sx={{
              fontFamily: fontSans,
              fontSize: 11,
              fontWeight: 700,
              background: slate,
              borderRadius: 2.5,
              px: 2.5,
              py: 1.1,
              boxShadow: `0 4px 16px ${slate}55`,
              "&:hover": { background: "#8a6060" },
            }}
          >
            Add Product
          </Button>
        </Box>
      </Box>

      {/* ── CATEGORY FILTER CHIPS ── */}
      <Box sx={{ display: "flex", gap: 1, mb: 3, flexWrap: "wrap" }}>
        {filterChips.map((cat) => (
          <Box
            key={cat}
            onClick={() => setFilter(cat)}
            sx={{
              px: 2,
              py: 0.7,
              borderRadius: 20,
              cursor: "pointer",
              border: `1px solid ${filter === cat ? sub : border}`,
              background: filter === cat ? `${sub}22` : bg,
              color: filter === cat ? muted : slate,
              fontFamily: fontSans,
              fontSize: 11,
              fontWeight: 600,
              transition: "all .2s",
              "&:hover": { borderColor: sub },
            }}
          >
            {cat}
          </Box>
        ))}
      </Box>

      {/* ── PRODUCT GRID — exactly 3 per row, equal width ── */}
      <Grid container spacing={2.5}>
        {filtered.map((item) => (
          <Grid size={{ md: 4, sm: 6, xs: 12 }} key={item.id}>
            <Box
              className="pc-card"
              sx={{
                background: "#fff",
                borderRadius: "16px",
                border: `1px solid ${border}`,
                overflow: "hidden",
                height: "100%", // equal height cards
                boxShadow: "0 2px 12px rgba(161,122,122,0.08)",
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: `0 20px 48px ${sub}28`,
                  borderColor: `${sub}66`,
                },
              }}
            >
              {/* ── IMAGE + OVERLAY (hover) ── */}
              <Box
                sx={{
                  position: "relative",
                  height: 330,
                  overflow: "hidden",
                }}
              >
                {/* Product image */}
                <Box
                  className="pc-img"
                  component="img"
                  src={
                    item.image ||
                    "https://placehold.co/600x400/f5ecea/C49A9A?text=No+Image"
                  }
                  alt={item.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Tag badge — top left */}
                {/* {item.tag && (
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      zIndex: 2,
                      background: TAG_COLORS[item.tag]?.bg,
                      color: TAG_COLORS[item.tag]?.color,
                      fontFamily: fontSans,
                      fontWeight: 700,
                      fontSize: 10,
                      px: 1.2,
                      py: 0.5,
                      borderRadius: "5px",
                    }}
                  >
                    {item.tag}
                  </Box>
                )} */}

                {/* Qty badge — top right */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    zIndex: 2,
                    background: "rgba(255,255,255,0.92)",
                    color: slate,
                    fontFamily: fontSans,
                    fontWeight: 700,
                    fontSize: 10,
                    px: 1.2,
                    py: 0.5,
                    borderRadius: "5px",
                  }}
                >
                  Qty: {item.qty}
                </Box>

                {/* ── HOVER OVERLAY ──
                        Shows on image hover:
                        - name, category, description, price, deposit
                        - Edit + Delete buttons (only here, not in card body)
                    */}
                <Box
                  className="pc-overlay"
                  sx={{
                    background: "rgba(42,22,22,0.92)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 2.5,
                    gap: 0.9,
                  }}
                >
                  {/* Name */}
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: 20,
                      fontWeight: 600,
                      color: "#fff",
                      textAlign: "center",
                      lineHeight: 1.2,
                    }}
                  >
                    {item.name}
                  </Typography>

                  {/* Category */}
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: 10,
                      color: sub,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                    }}
                  >
                    {item.category}
                  </Typography>

                  {/* Description */}
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: 11,
                      color: "rgba(255,255,255,0.70)",
                      textAlign: "center",
                      lineHeight: 1.6,
                      px: 1,
                    }}
                  >
                    {item.description}
                  </Typography>

                  {/* Price & Deposit */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                      alignItems: "center",
                      mt: 0.3,
                    }}
                  >
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        ₹{item.price}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 9,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                        }}
                      >
                        per day
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "1px",
                        height: 30,
                        background: "rgba(255,255,255,0.18)",
                      }}
                    />
                    <Box sx={{ textAlign: "center" }}>
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 18,
                          fontWeight: 700,
                          color: "#fff",
                        }}
                      >
                        ₹{item.deposit}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 9,
                          color: "rgba(255,255,255,0.45)",
                          textTransform: "uppercase",
                        }}
                      >
                        deposit
                      </Typography>
                    </Box>
                  </Box>

                  {/* ── EDIT + DELETE — only here on hover ── */}
                  <Box sx={{ display: "flex", gap: 1.2, mt: 0.5 }}>
                    <Button
                      onClick={() => handleEditClick(item)}
                      size="small"
                      variant="contained"
                      startIcon={<Edit sx={{ fontSize: "12px !important" }} />}
                      sx={{
                        fontFamily: fontSans,
                        fontSize: 10,
                        fontWeight: 700,
                        background: slate,
                        borderRadius: "8px",
                        px: 2,
                        py: 0.8,
                        boxShadow: "none",
                        "&:hover": {
                          background: "#fff",
                          color: slate,
                          boxShadow: "none",
                        },
                      }}
                    >
                      Edit
                    </Button>
                    <Button
                      size="small"
                      variant="outlined"
                      startIcon={
                        <Delete sx={{ fontSize: "12px !important" }} />
                      }
                      sx={{
                        fontFamily: fontSans,
                        fontSize: 10,
                        fontWeight: 700,
                        color: "#ffaaaa",
                        borderColor: "#ffaaaa66",
                        borderRadius: "8px",
                        px: 2,
                        py: 0.8,
                        "&:hover": {
                          background: "#d63030",
                          color: "#fff",
                          borderColor: "#d63030",
                        },
                      }}
                    >
                      Delete
                    </Button>
                  </Box>
                </Box>
                {/* ── HOVER OVERLAY END ── */}
              </Box>
            </Box>
          </Grid>
        ))}

        {/* Empty state */}
        {filtered.length === 0 && (
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center", py: 10 }}>
              <Typography
                sx={{ fontFamily: fontSerif, fontSize: 28, color: muted }}
              >
                No items found
              </Typography>
            </Box>
          </Grid>
        )}
      </Grid>
      {/* ── PRODUCT GRID END ── */}

      {/* ══════════════════════════════
            ADD / EDIT FORM DIALOG
        ══════════════════════════════ */}
      <Dialog
        open={formOpen}
        onClose={() => setFormOpen(false)}
        maxWidth="sm"
        fullWidth
        TransitionComponent={Fade}
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle
          sx={{
            fontFamily: fontSerif,
            fontSize: 24,
            fontWeight: 600,
            color: slate,
            borderBottom: `1px solid ${border}`,
            pb: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {editingId ? "Edit Product" : "Add New Product"}
          <Box
            onClick={() => setFormOpen(false)}
            sx={{
              cursor: "pointer",
              color: muted,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Close fontSize="small" />
          </Box>
        </DialogTitle>

        <DialogContent sx={{ pt: "24px !important", pb: 1 }}>
          <Grid container spacing={2.5}>
            {/* Row 1: Name and Category */}
            <Grid size={{xs:12,sm:12}}>
              <Box component="label" sx={labelStyle}>
                Product Name *
              </Box>
              <TextField
                fullWidth
                size="small"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="e.g. Flower Arch"
                sx={inputStyle}
              />
          
              <Box component="label" sx={labelStyle}>
                Category
              </Box>
              <Select
                fullWidth
                size="small"
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value })}
                sx={selectStyle}
              >
                {CATEGORIES.map((c) => (
                  <MenuItem
                    key={c}
                    value={c}
                    sx={{ fontFamily: fontSans, fontSize: 13 }}
                  >
                    {c}
                  </MenuItem>
                ))}
              </Select>
           

            {/* Row 2: Price and Deposit */}
           
              <Box component="label" sx={labelStyle}>
                Price / Day (₹)
              </Box>
              <TextField
                fullWidth
                size="small"
                type="number"
                value={form.price}
                onChange={(e) => setForm({ ...form, price: e.target.value })}
                placeholder="1200"
                sx={inputStyle}
              />
          
              <Box component="label" sx={labelStyle}>
                Deposit (₹)
              </Box>
              <TextField
                fullWidth
                size="small"
                type="number"
                value={form.deposit}
                onChange={(e) => setForm({ ...form, deposit: e.target.value })}
                placeholder="2000"
                sx={inputStyle}
              />
          

            {/* Row 3: Qty and Tag */}
      
              <Box component="label" sx={labelStyle}>
                Qty Available
              </Box>
              <TextField
                fullWidth
                size="small"
                type="number"
                value={form.qty}
                onChange={(e) => setForm({ ...form, qty: e.target.value })}
                placeholder="3"
                sx={inputStyle}
              />
           
              <Box component="label" sx={labelStyle}>
                Tag / Badge
              </Box>
              <Select
                fullWidth
                size="small"
                value={form.tag}
                onChange={(e) => setForm({ ...form, tag: e.target.value })}
                sx={selectStyle}
              >
                {TAGS.map((t) => (
                  <MenuItem
                    key={t}
                    value={t}
                    sx={{ fontFamily: fontSans, fontSize: 13 }}
                  >
                    {t || "— No Tag —"}
                  </MenuItem>
                ))}
              </Select>
          

            {/* Row 4: Image URL (Full Width for symmetry or 6 if you prefer) */}
            
              <Box component="label" sx={labelStyle}>
                Image URL
              </Box>
              <TextField
                fullWidth
                size="small"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                placeholder="https://..."
                sx={inputStyle}
              />
           

            {/* Row 5: Description (Full Width) */}
            
              <Box component="label" sx={labelStyle}>
                Description
              </Box>
              <TextField
                fullWidth
                multiline
                rows={3}
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                placeholder="Describe the item, material, dimensions..."
                sx={inputStyle}
              />
            </Grid>
          </Grid>
        </DialogContent>

        {/* Submit Button Section */}
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 3 }}
        >
          <Button
            onClick={handleAddClick}
            variant="contained"
            startIcon={<Add />}
            sx={{
              fontFamily: fontSans,
              fontSize: 11,
              fontWeight: 700,
              background: slate,
              borderRadius: 2.5,
              px: 3, // પેડિંગ વધાર્યું જેથી બટન મોટું અને વ્યવસ્થિત લાગે
              py: 1.2,
              boxShadow: `0 4px 16px ${slate}55`,
              "&:hover": {
                background: muted,
                boxShadow: `0 6px 20px ${slate}77`,
              },
            }}
          >
            {editingId ? "Update Product" : "Add Product"}
          </Button>
        </Grid>
      </Dialog>
      {/* ══ FORM DIALOG END ══ */}
    </Box>
  );
}
