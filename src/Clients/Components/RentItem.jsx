import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Checkbox,
  FormControlLabel,
  IconButton,
  Divider,
  TextField,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const btncolor = "#a17a7a";
const bg = "#F8F3F1";
const cardBg = "#ffffff";
const border = "#ecddd8";
const deep = "#3d2a2a";
const softRed = "#f5eeec";

// ── Theme — outside component ──
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      B280: 280,
      B360: 360,
      B470: 470,
      B511: 511,
    },
  },
});

const product = {
  name: "Wedding Flower Arch",
  desc: "Beautiful floral arch perfect for wedding entrance and stage decoration.",
  rentPrice: 500,
  depositAmount: 2000,
  days: 3,
  images: [
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  ],
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: "12px",
    borderRadius: "6px",
    background: softRed,
    "& fieldset": { borderColor: border },
    "&:hover fieldset": { borderColor: subcolor },
    "&.Mui-focused fieldset": { borderColor: subcolor, borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: fontSans,
    fontSize: "12px",
    color: muted,
    "&.Mui-focused": { color: subcolor },
  },
};

export default function RentItem() {
  const [currentImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [depositAgreed, setDepositAgreed] = useState(false);
  const [address, setAddress] = useState({ event: "", city: "", pincode: "" });
  const [hov, setHov] = useState(false);

  const rentTotal = product.rentPrice * product.days * qty;
  const grandTotal = rentTotal + product.depositAmount;

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ background: bg, minHeight: "100vh" }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');`}</style>

        <Container maxWidth="lg" sx={{ py: { xs: 2, B360: 3, md: 5 } }}>
          {/* ══════════════════════════════
              MAIN GRID
          ══════════════════════════════ */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 400px" },
              gap: { xs: 3, B511: 4, md: 6 },
              mb: { xs: 4, B511: 5, md: 6 },
            }}
          >
            {/* ───── LEFT COLUMN ───── */}
            <Box>
              {/* Main Image */}
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "6px",
                  overflow: "hidden",
                  // B280 → B360 → B511 → md — all 4 steps
                  height: { xs: 200, B280: 220, B360: 260, B511: 320, md: 440 },
                  mb: { xs: 1, B360: 1.5 },
                  border: `1px solid ${border}`,
                }}
              >
                <Box
                  component="img"
                  src={product.images[currentImg]}
                  alt={product.name}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Scrim */}
                <Box
                  sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to top, rgba(61,42,42,0.58) 0%, transparent 48%)",
                    pointerEvents: "none",
                  }}
                />

                {/* Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: { xs: 10, B360: 16 },
                    left: { xs: 10, B360: 16 },
                    background: `linear-gradient(135deg, ${deep}, ${slate})`,
                    px: { xs: 1.2, B360: 2 },
                    py: 0.6,
                    borderRadius: "2px",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: { xs: "10px", B360: "12px" },
                      color: "#fff",
                      fontStyle: "italic",
                    }}
                  >
                    Premium Decor
                  </Typography>
                </Box>

                {/* Bottom overlay — name + tagline */}
                <Box
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    px: { xs: 1.5, B360: 2, B511: 3 },
                    py: { xs: 1.5, B360: 2, B511: 2.5 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      textAlign:"left",
                      // xs → B280 → B360 → B511 — 4 steps
                      fontSize: {
                        xs: "16px",
                        B280: "18px",
                        B360: "22px",
                        B511: "28px",
                      },
                      color: "#fff",
                      fontWeight: 600,
                      lineHeight: 1.1,
                    }}
                  >
                    {product.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      textAlign:"left",
                      fontSize: { xs: "8px", B360: "9px" },
                      color: "rgba(255,255,255,0.6)",
                      letterSpacing: { xs: 1, B360: 1.5, B511: 2.5 },
                      textTransform: "uppercase",
                      mt: { xs: 0.3, B360: 0.5 },
                    }}
                  >
                    Floral Decor · Entrance & Stage
                  </Typography>
                </Box>
              </Box>

              {/* Description quote */}
              <Box
                sx={{
                  borderLeft: `4px solid ${subcolor}`,
                  pl: { xs: 2, B360: 2.5, B511: 3 },
                  mb: { xs: 3, B360: 3.5, B511: 4 },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: { xs: "14px", B360: "16px", B511: "18px" },
                    color: slate,
                    fontStyle: "italic",
                    lineHeight: 1.8,
                  }}
                >
                  "{product.desc}"
                </Typography>
              </Box>

              {/* Stats bar */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
                  border: `1.5px solid ${border}`,
                  borderRadius: "8px",
                  overflow: "hidden",
                  background: cardBg,
                }}
              >
                {[
                  {
                    label: "Rent Per Day",
                    val: `₹${product.rentPrice}`,
                    sub: "per unit",
                  },
                  {
                    label: "Min. Rental",
                    val: `${product.days} Days`,
                    sub: "minimum booking",
                  },
                  {
                    label: "Deposit",
                    val: `₹${product.depositAmount.toLocaleString()}`,
                    sub: "refundable",
                  },
                ].map((s, i) => (
                  <Box
                    key={i}
                    sx={{
                      // padding — xs → B360 → B511, all 3 steps
                      p: {
                        xs: "14px 10px",
                        B360: "18px 12px",
                        B511: "20px 15px",
                      },
                      textAlign: "center",
                      background: i === 1 ? "#F9F1F0" : "transparent",
                      borderRight: {
                        xs: "none",
                        sm: i < 2 ? `1.5px solid ${border}` : "none",
                      },
                      borderBottom: {
                        xs: i < 2 ? `1.5px solid ${border}` : "none",
                        sm: "none",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "8px", B360: "9px", B511: "10px" },
                        color: muted,
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        mb: { xs: 1, B511: 1.5 },
                      }}
                    >
                      {s.label}
                    </Typography>
                    {/* value font — xs → B280 → B360 → B511 */}
                    <Typography
                      sx={{
                        fontFamily: fontSerif,
                        fontSize: {
                          xs: "20px",
                          B280: "22px",
                          B360: "24px",
                          B511: "28px",
                        },
                        color: slate,
                        fontWeight: 500,
                        lineHeight: 1,
                      }}
                    >
                      {s.val}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "10px", B511: "11px" },
                        color: muted,
                        mt: 1,
                        fontWeight: 300,
                        fontStyle: "italic",
                      }}
                    >
                      {s.sub}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* ───── RIGHT COLUMN — Booking Card ───── */}
            <Box
              sx={{
                alignSelf: "flex-start",
                position: { md: "sticky" },
                top: 24,
              }}
            >
              {/* Card header */}
              <Box
                sx={{
                  background: `linear-gradient(135deg, ${deep}, ${slate})`,
                  borderRadius: "6px 6px 0 0",
                  px: { xs: 2, B360: 2.5, B511: 3.5 },
                  py: { xs: 2, B360: 2.5, B511: 3 },
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "9px",
                    color: subcolor,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontWeight: 600,
                    mb: 0.8,
                  }}
                >
                  Reserve Your Date
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: { xs: "17px", B360: "19px", B511: "22px" },
                    color: bg,
                    fontWeight: 600,
                  }}
                >
                  {product.name}
                </Typography>
              </Box>

              {/* Card body */}
              <Box
                sx={{
                  border: `1.5px solid ${border}`,
                  borderTop: "none",
                  borderRadius: "0 0 6px 6px",
                  p: { xs: "14px", B280: "18px", B360: "22px", B511: "28px" },
                  background: cardBg,
                }}
              >
                {/* Quantity */}
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 600,
                    fontSize: "9px",
                    color: muted,
                    letterSpacing: 2.5,
                    textTransform: "uppercase",
                    mb: 1.5,
                  }}
                >
                  Quantity
                </Typography>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    border: `1.5px solid ${border}`,
                    borderRadius: "5px",
                    overflow: "hidden",
                    mb: { xs: 2, B360: 3 },
                  }}
                >
                  <IconButton
                    onClick={() => setQty(Math.max(1, qty - 1))}
                    size="small"
                    disableRipple
                    sx={{
                      background: softRed,
                      borderRadius: 0,
                      borderRight: `1.5px solid ${border}`,
                      px: { xs: 1, B360: 1.5 },
                      py: 1,
                      "&:hover": { background: border },
                    }}
                  >
                    <RemoveIcon sx={{ fontSize: 14, color: btncolor }} />
                  </IconButton>
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: { xs: "18px", B360: "20px", B511: "22px" },
                      fontWeight: 700,
                      color: slate,
                      minWidth: { xs: 36, B360: 42, B511: 48 },
                      textAlign: "center",
                      lineHeight: 1,
                    }}
                  >
                    {qty}
                  </Typography>
                  <IconButton
                    onClick={() => setQty(qty + 1)}
                    size="small"
                    disableRipple
                    sx={{
                      background: softRed,
                      borderRadius: 0,
                      borderLeft: `1.5px solid ${border}`,
                      px: { xs: 1, B360: 1.5 },
                      py: 1,
                      "&:hover": { background: border },
                    }}
                  >
                    <AddIcon sx={{ fontSize: 14, color: btncolor }} />
                  </IconButton>
                </Box>

                {/* Price Summary Box */}
                <Box
                  sx={{
                    background: softRed,
                    border: `1.5px solid ${border}`,
                    borderRadius: "5px",
                    // xs → B280 → B360 → B511 — all 4 breakpoints
                    p: { xs: "10px", B280: "12px", B360: "16px", B511: "20px" },
                    mb: { xs: "14px", B360: "18px", B511: "20px" },
                  }}
                >
                  <Typography
                    sx={{
                      
                      fontFamily: fontSans,
                      fontWeight: 800,
                      fontSize: "12px",
                      color: muted,
                      textTransform: "uppercase",
                      letterSpacing: 2.5,
                      mb: "10px",
                    }}
                  >
                    Pricing Summary
                  </Typography>

                  {/* Row: Rent */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      mb: 1.2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 300,
                        fontSize: { xs: "12px", B360: "13px", B511: "14px" },
                        color: muted,
                      }}
                    >
                      ₹{product.rentPrice} × {product.days} days × {qty} qty
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 500,
                       fontSize: { xs: "12px", B360: "13px", B511: "14px" },
                        color: slate,
                      }}
                    >
                      ₹{rentTotal.toLocaleString()}
                    </Typography>
                  </Box>

                  {/* Row: Security Deposit */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                      mb: 1.2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 300,
                       fontSize: { xs: "12px", B360: "13px", B511: "14px" },
                        color: muted,
                      }}
                    >
                      Security Deposit
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 500,
                       fontSize: { xs: "12px", B360: "13px", B511: "14px" },
                        color: slate,
                      }}
                    >
                      ₹{product.depositAmount.toLocaleString()}
                    </Typography>
                  </Box>

                  <Divider
                    sx={{ borderColor: border, my: { xs: 1, B360: 1.5 } }}
                  />

                  {/* Row: Grand Total */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "baseline",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 700,
                       fontSize: { xs: "12px", B360: "13px", B511: "14px" },
                        color: slate,
                        letterSpacing: { xs: 0.5, B280: 1, B360: 1.5 },
                        textTransform: "uppercase",
                      }}
                    >
                      Grand Total
                    </Typography>
                    {/* xs → B280 → B360 — 3 steps */}
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 600,
                        fontSize: { xs: "16px", B280: "18px", B360: "20px" },
                        color: deep,
                        lineHeight: 1,
                      }}
                    >
                      ₹{grandTotal.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>

                {/* Deposit Checkbox */}
                <Box
                  onClick={() => setDepositAgreed(!depositAgreed)}
                  sx={{
                    background: depositAgreed ? `${subcolor}14` : softRed,
                    border: `1.5px solid ${depositAgreed ? subcolor : border}`,
                    borderRadius: "5px",
                    p: { xs: "10px", B280: "12px", B360: "14px", B511: "16px" },
                    cursor: "pointer",
                    transition: "all 0.25s",
                    mb: { xs: 1.5, B360: 2, B511: 2.5 },
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={depositAgreed}
                        onChange={(e) => {
                          e.stopPropagation();
                          setDepositAgreed(e.target.checked);
                        }}
                        sx={{
                          color: subcolor,
                          "&.Mui-checked": { color: btncolor },
                          p: 0.5,
                          mr: 1,
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontWeight: 600,
                          fontSize: { xs: "11px", B360: "12px" },
                          color: slate,
                        }}
                      >
                        Deposit Required
                      </Typography>
                    }
                    sx={{ mb: 0.8, ml: 0, alignItems: "center" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 300,
                      fontSize: { xs: "11px", B360: "12px" },
                      color: muted,
                      lineHeight: 1.8,
                      textAlign: "justify",
                    }}
                  >
                    ₹{product.depositAmount.toLocaleString()} refundable
                    deposit. Returned after item is received safely. Damage
                    charges may apply.
                  </Typography>
                </Box>

                {/* Rent Now Button */}
                <Box
                  onClick={() => depositAgreed && alert("Booking confirmed!")}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  sx={{
                    background: depositAgreed
                      ? hov
                        ? slate
                        : btncolor
                      : `${muted}44`,
                    color: depositAgreed ? "#fff" : muted,
                    fontFamily: fontSans,
                    fontWeight: 700,
                    fontSize: { xs: "9px", B360: "10px", B511: "11px" },
                    letterSpacing: { xs: 2, B360: 2.5, B511: 3 },
                    textTransform: "uppercase",
                    textAlign: "center",
                    py: { xs: 1.5, B360: 1.8, B511: 2 },
                    borderRadius: "5px",
                    cursor: depositAgreed ? "pointer" : "not-allowed",
                    transition: "all 0.25s",
                    transform:
                      depositAgreed && hov ? "translateY(-2px)" : "none",
                    boxShadow:
                      depositAgreed && hov
                        ? `0 10px 28px ${subcolor}55`
                        : "none",
                    mb: 1,
                  }}
                >
                  Rent Now
                </Box>
                {!depositAgreed && (
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: { xs: "10px", B360: "11px" },
                      color: subcolor,
                      textAlign: "center",
                      fontWeight: 400,
                    }}
                  >
                    ☝ Please accept the deposit condition to proceed
                  </Typography>
                )}

                {/* Trust badges */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                    mt: { xs: 2, B511: 2.5 },
                    pt: { xs: 1.5, B511: 2 },
                    borderTop: `1px solid ${border}`,
                  }}
                >
                  {["✦ Verified", "✦ Insured", "✦ Refundable"].map((t) => (
                    <Typography
                      key={t}
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "8px", B360: "9px" },
                        color: muted,
                        letterSpacing: { xs: 1, B360: 1.5 },
                        fontWeight: 500,
                      }}
                    >
                      {t}
                    </Typography>
                  ))}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* ══════════════════════════════
              DELIVERY INFORMATION
          ══════════════════════════════ */}
          <Box
            sx={{
              background: cardBg,
              border: `1.5px solid ${border}`,
              borderRadius: "6px",
              overflow: "hidden",
              mb: { xs: 4, B511: 5, md: 6 },
            }}
          >
            {/* Section header */}
            <Box
              sx={{
                background: softRed,
                px: { xs: 2, B470: 3, B511: 4 },
                py: { xs: 2, B511: 2.5 },
                borderBottom: `1.5px solid ${border}`,
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, B360: 1.5 },
              }}
            >
              <Box
                sx={{
                  width: { xs: 28, B360: 32, B511: 34 },
                  height: { xs: 28, B360: 32, B511: 34 },
                  borderRadius: "50%",
                  background: subcolor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <LocationOnOutlinedIcon
                  sx={{ fontSize: { xs: 14, B511: 17 }, color: "#fff" }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    // xs → B280 → B470 → B511 — all used
                    fontSize: {
                      xs: "16px",
                      B280: "18px",
                      B470: "19px",
                      B511: "22px",
                    },
                    color: slate,
                    fontWeight: 600,
                    // textAlign:"left"
                  }}
                >
                  Delivery Information
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: { xs: "12px", B360: "13px" },
                    color: muted,
                    mt: 0.2,
                  }}
                >
                  Where should we bring the magic?
                </Typography>
              </Box>
            </Box>

            <Box sx={{ p: { xs: "12px", B470: "18px", B511: "24px", md: 4 } }}>
              {/* Address inputs */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: { xs: "1fr", md: "1fr 1fr 200px" },
                  gap: { xs: 1.5, B360: 2 },
                  mb: { xs: 2.5, B511: 3.5 },
                }}
              >
                {[
                  { label: "Event address...", key: "event" },
                  { label: "Enter city...", key: "city" },
                  { label: "Enter pincode...", key: "pincode" },
                ].map((f) => (
                  <Box
                    key={f.key}
                    sx={{ display: "flex", alignItems: "center", gap: 1.2 }}
                  >
                    <LocationOnOutlinedIcon
                      sx={{
                        color: subcolor,
                        fontSize: { xs: 14, B511: 16 },
                        flexShrink: 0,
                      }}
                    />
                    <TextField
                      placeholder={f.label}
                      value={address[f.key]}
                      onChange={(e) =>
                        setAddress({ ...address, [f.key]: e.target.value })
                      }
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                  </Box>
                ))}
              </Box>

              {/* Price + Deposit + Button */}
              <Box
                sx={{
                  background: softRed,
                  border: `1.5px solid ${border}`,
                  borderRadius: "5px",
                  p: { xs: "12px", B280: "14px", B470: "18px", B511: "24px" },
                }}
              >
                {/* Price summary row */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    // xs → B360 → B511 gap steps
                    gap: { xs: "14px", B360: "20px", B511: "32px" },
                    mb: { xs: 2, B511: 2.5 },
                    flexWrap: "wrap",
                  }}
                >
                  {/* Rent */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                      
                         fontSize: { xs: "11px", B360: "12px" },
                        color: muted,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Rent (₹{product.rentPrice} × {product.days}d)
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "13px", B360: "16px", B511: "18px" },
                        color: slate,
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      ₹{rentTotal.toLocaleString()}
                    </Typography>
                  </Box>

                  {/* Security Deposit */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "11px", B360: "12px" },
                        color: muted,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Security Deposit
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "13px", B360: "16px", B511: "18px" },
                        color: slate,
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      ₹{product.depositAmount.toLocaleString()}
                    </Typography>
                  </Box>

                  {/* Grand Total */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                      fontSize: { xs: "11px", B360: "12px" },
                        color: muted,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        fontWeight: 600,
                        mb: 0.5,
                      }}
                    >
                      Grand Total
                    </Typography>
                    {/* xs → B280 → B511 — 3 steps */}
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: { xs: "16px", B280: "18px", B511: "22px" },
                        color: deep,
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                    >
                      ₹{grandTotal.toLocaleString()}
                    </Typography>
                  </Box>
                </Box>

                <Divider
                  sx={{ borderColor: border, mb: { xs: 1.5, B511: 2.5 } }}
                />

                {/* Deposit Checkbox */}
                <Box
                  onClick={() => setDepositAgreed(!depositAgreed)}
                  sx={{
                    background: depositAgreed ? `${subcolor}14` : cardBg,
                    border: `1.5px solid ${depositAgreed ? subcolor : border}`,
                    borderRadius: "5px",
                    p: { xs: "10px", B280: "12px", B360: "14px", B511: "16px" },
                    cursor: "pointer",
                    transition: "all 0.25s",
                    mb: { xs: 1.5, B360: 2, B511: 2.5 },
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={depositAgreed}
                        onChange={(e) => {
                          e.stopPropagation();
                          setDepositAgreed(e.target.checked);
                        }}
                        sx={{
                          color: subcolor,
                          "&.Mui-checked": { color: btncolor },
                          p: 0.5,
                          mr: 1,
                        }}
                      />
                    }
                    label={
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontWeight: 600,
                          fontSize: { xs: "11px", B360: "12px" },
                          color: slate,
                        }}
                      >
                        Deposit Required
                      </Typography>
                    }
                    sx={{ mb: 0.8, ml: 0, alignItems: "center" }}
                  />
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 300,
                      fontSize: { xs: "11px", B360: "12px" },
                      color: muted,
                      lineHeight: 1.8,
                      textAlign: "center",
                    }}
                  >
                    ₹{product.depositAmount.toLocaleString()} refundable
                    deposit. Returned after item is received safely. Damage
                    charges may apply.
                  </Typography>
                </Box>

                {/* Rent Now Button */}
                <Box
                  onClick={() => depositAgreed && alert("Booking confirmed!")}
                  onMouseEnter={() => setHov(true)}
                  onMouseLeave={() => setHov(false)}
                  sx={{
                    background: depositAgreed
                      ? hov
                        ? slate
                        : btncolor
                      : `${muted}44`,
                    color: depositAgreed ? "#fff" : muted,
                    fontFamily: fontSans,
                    fontWeight: 700,
                    fontSize: { xs: "9px", B360: "10px", B511: "11px" },
                    letterSpacing: { xs: 2, B360: 2.5, B511: 3 },
                    textTransform: "uppercase",
                    textAlign: "center",
                    py: { xs: 1.5, B360: 1.8, B511: 2 },
                    borderRadius: "5px",
                    cursor: depositAgreed ? "pointer" : "not-allowed",
                    transition: "all 0.25s",
                    transform:
                      depositAgreed && hov ? "translateY(-2px)" : "none",
                    boxShadow:
                      depositAgreed && hov
                        ? `0 10px 28px ${subcolor}55`
                        : "none",
                    mb: 1,
                  }}
                >
                  Rent Now
                </Box>
                {!depositAgreed && (
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: { xs: "10px", B360: "11px" },
                      color: subcolor,
                      textAlign: "center",
                      fontWeight: 400,
                    }}
                  >
                    ☝ Please accept the deposit condition to proceed
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
