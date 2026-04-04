import { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Button,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import { CheckCircle, Warning, ArrowForward } from "@mui/icons-material";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a"; // as per user's tokens
const muted = "#735f5f"; // as per user's tokens
const bg = "#F5EFEc";
const border = "rgba(196,154,154,0.22)";
const sub = "#C49A9A";
const primary = "#3d2a2a";

// ── Flow steps ──
const FLOW_STEPS = [
  { label: "1. Booking", done: true },
  { label: "2. Product Rented", done: true },
  { label: "3. Return Received", current: true },
  { label: "4. Damage Check", done: false },
  { label: "5. Refund Process", done: false },
];

// ── Initial return cards ──
const INIT_RETURNS = [
  {
    id: "r1",
    emoji: "🌸",
    item: "Flower Arch",
    booking: "#BK0091",
    customer: "Ankit Modi",
    returnDate: "Mar 31, 2026",
    deposit: 1000,
    damageAmt: 200,
    status: "damage",
    note: "📷 Damage photos uploaded · Description: Petal frame bent, 2 flowers missing",
    processed: false,
  },
  {
    id: "r2",
    emoji: "📸",
    item: "Photo Booth",
    booking: "#BK0088",
    customer: "Sneha Raval",
    returnDate: "Apr 1, 2026",
    deposit: 2000,
    damageAmt: 0,
    status: "good",
    note: "✓ No damage found — Full deposit to be refunded",
    processed: false,
  },
  {
    id: "r3",
    emoji: "💡",
    item: "LED Curtain",
    booking: "#BK0085",
    customer: "Dev Trivedi",
    returnDate: "Mar 29, 2026",
    deposit: 1500,
    damageAmt: 0,
    status: "damage",
    note: "📷 2 LED strips not working",
    processed: false,
  },
  {
    id: "r4",
    emoji: "🎈",
    item: "Balloon Setup",
    booking: "#BK0082",
    customer: "Hinal Jain",
    returnDate: "Apr 1, 2026",
    deposit: 500,
    damageAmt: 0,
    status: "good",
    note: "",
    processed: false,
  },
];

// ── Shared label sx ──
const labelSx = {
  fontFamily: fontSans,
  fontSize: 10,
  fontWeight: 700,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  color: muted,
  mb: 0.5,
  display: "block",
};

export default function Returns() {
  const [returns, setReturns] = useState(INIT_RETURNS);

  // Update damage amount for a card
  const handleDamageChange = (id, value) => {
    setReturns(
      returns.map((r) =>
        r.id === id
          ? { ...r, damageAmt: Math.max(0, Math.min(Number(value), r.deposit)) }
          : r,
      ),
    );
  };

  // Mark as processed
  const handleProcess = (id) => {
    setReturns(
      returns.map((r) => (r.id === id ? { ...r, processed: true } : r)),
    );
  };

  const pendingCount = returns.filter((r) => !r.processed).length;

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ── PAGE HEADER ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
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
              color: primary,
              lineHeight: 1,
            }}
          >
            Returns & Damage Inspection
          </Typography>
          <Typography
            sx={{ fontFamily: fontSans, fontSize: 12, color: muted, mt: 0.5 }}
          >
            Inspect returned items and decide refund amounts
          </Typography>
        </Box>

        {/* Pending badge */}
        <Box
          sx={{
            background: "#fdf0e0",
            color: "#a16a20",
            fontFamily: fontSans,
            fontWeight: 700,
            fontSize: 12,
            px: 2,
            py: 0.8,
            borderRadius: 20,
            border: "1px solid #f0d0a0",
            alignSelf: "flex-start",
          }}
        >
          {pendingCount} Pending Inspection
        </Box>
      </Box>

      {/* ── FLOW STEPS ── */}
      <Box
        sx={{
          display: "flex",
          gap: 0,
          mb: 4,
          background: bg,
          borderRadius: "12px",
          border: `1px solid ${border}`,
          overflow: "hidden",
          flexWrap: { xs: "wrap", sm: "nowrap" },
        }}
      >
        {FLOW_STEPS.map((step, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              py: 1.4,
              px: 1.5,
              textAlign: "center",
              fontFamily: fontSans,
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.3px",
              background: step.current
                ? slate
                : step.done
                  ? `${sub}22`
                  : "#fff",
              color: step.current ? "#fff" : step.done ? slate : muted,
              borderRight:
                i < FLOW_STEPS.length - 1 ? `1px solid ${border}` : "none",
              position: "relative",
            }}
          >
            {step.label}
            {/* Arrow indicator */}
            {step.current && (
              <Box
                sx={{
                  position: "absolute",
                  right: -10,
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: 0,
                  height: 0,
                  borderTop: "12px solid transparent",
                  borderBottom: "12px solid transparent",
                  borderLeft: `10px solid ${slate}`,
                  zIndex: 1,
                  display: { xs: "none", sm: "block" },
                }}
              />
            )}
          </Box>
        ))}
      </Box>

      {/* ── RETURN CARDS ── */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {returns.map((item) => {
          const refundAmt = item.deposit - item.damageAmt;
          const isGood = item.status === "good";

          return (
            <Box
              key={item.id}
              sx={{
                background: "#fff",
                border: `1px solid ${item.processed ? "#c0e0c0" : border}`,
                borderRadius: "14px",
                p: { xs: 2, md: 2.5 },
                boxShadow: "0 2px 12px rgba(161,122,122,0.07)",
                opacity: item.processed ? 0.65 : 1,
                transition: "opacity 0.3s",
              }}
            >
              {/* ── Card Header ── */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  mb: 1.5,
                  flexWrap: "wrap",
                  gap: 1.5,
                }}
              >
                {/* Left — item info */}
                <Box>
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: 20,
                      fontWeight: 600,
                      color: primary,
                      lineHeight: 1.2,
                    }}
                  >
                    {item.emoji} {item.item} — Booking {item.booking}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: 12,
                      color: muted,
                      mt: 0.4,
                    }}
                  >
                    Returned by:{" "}
                    <strong style={{ color: primary }}>{item.customer}</strong>{" "}
                    · Returned on: {item.returnDate}
                  </Typography>
                </Box>

                {/* Right — deposit badge + status chip */}
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.2,
                    flexWrap: "wrap",
                  }}
                >
                  {/* Deposit paid badge */}
                  <Box
                    sx={{
                      textAlign: "center",
                      px: 2,
                      py: 0.8,
                      background: `${sub}18`,
                      border: `1px solid ${sub}44`,
                      borderRadius: "10px",
                    
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: 15,
                        fontWeight: 700,
                        color: slate,
                      }}
                    >
                      ₹{item.deposit.toLocaleString()}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: 9,
                        color: muted,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                      }}
                    >
                      Deposit Paid
                    </Typography>
                  </Box>
                  

                  {/* Status chip */}
                  {item.processed ? (
                    <Chip
                      icon={
                        <CheckCircle sx={{ fontSize: "14px !important" }} />
                      }
                      label="Processed"
                      size="small"
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 700,
                        fontSize: 10,
                        background: "#e8f5ee",
                        color: "#2d7a50",
                        border: "1px solid #a0d0b0",
                      }}
                    />
                  ) : isGood ? (
                    <Chip
                      icon={
                        <CheckCircle sx={{ fontSize: "14px !important" }} />
                      }
                      label="Good Condition"
                      size="small"
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 700,
                        fontSize: 10,
                        background: "#e8f5ee",
                        color: "#2d7a50",
                        border: "1px solid #a0d0b0",
                      }}
                    />
                  ) : (
                    <Chip
                      icon={<Warning sx={{ fontSize: "14px !important" }} />}
                      label="Damage Found"
                      size="small"
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 700,
                        fontSize: 10,
                        background: "#fce8e8",
                        color: "#a14040",
                        border: "1px solid #e0a0a0",
                      }}
                    />
                  )}
                </Box>
              </Box>

              {/* ── Damage note ── */}
              {item.note && (
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: 11,
                    color: isGood ? "#2d7a50" : muted,
                    textAlign: "left",
                    mb: 1.5,
                    pl: 0.5,
                  }}
                >
                  {item.note}
                </Typography>
              )}

              {/* ── Damage input row ── */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, md: 2 },
                  flexWrap: "wrap",
                  background: bg,
                  borderRadius: "10px",
                  px: 2,
                  py: 1.5,
                  border: `1px solid ${border}`,
                }}
              >
                {/* Label */}
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: 12,
                    fontWeight: 600,
                    color: muted,
                    whiteSpace: "nowrap",
                  }}
                >
                  Damage Amount (₹):
                </Typography>

                {/* Input */}
                <TextField
                  size="small"
                  type="number"
                  value={item.damageAmt}
                  onChange={(e) => handleDamageChange(item.id, e.target.value)}
                  disabled={item.processed}
                  inputProps={{ min: 0, max: item.deposit }}
                  sx={{
                    width: 120,
                    "& .MuiOutlinedInput-root": {
                      fontFamily: fontSans,
                      fontSize: 13,
                      borderRadius: "8px",
                      background: "#fff",
                      "& fieldset": { borderColor: border },
                      "&:hover fieldset": { borderColor: sub },
                      "&.Mui-focused fieldset": {
                        borderColor: slate,
                        borderWidth: "1px",
                      },
                    },
                    "& .MuiInputBase-input": {
                      padding: "7px 12px",
                      color: primary,
                      textAlign: "center",
                    },
                  }}
                />

                {/* Refund display */}
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Typography
                    sx={{ fontFamily: fontSans, fontSize: 11, color: muted }}
                  >
                    Refund:
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: 20,
                      fontWeight: 600,
                      color: refundAmt === item.deposit ? "#2d7a50" : "#a14040",
                    }}
                  >
                    ₹{refundAmt.toLocaleString()}
                  </Typography>
                </Box>

                {/* Process button */}
                <Box sx={{ ml: { xs: 0, md: "auto" } }}>
                  <Button
                    onClick={() => handleProcess(item.id)}
                    disabled={item.processed}
                    variant="contained"
                    endIcon={
                      <ArrowForward sx={{ fontSize: "14px !important" }} />
                    }
                    sx={{
                      fontFamily: fontSans,
                      fontSize: 11,
                      fontWeight: 700,
                      background: item.processed ? "#c0e0c0" : "#4a8a5a",
                      color: "#fff",
                      borderRadius: "8px",
                      px: 2.5,
                      py: 0.9,
                      boxShadow: "none",
                      "&:hover": { background: "#3a7a4a", boxShadow: "none" },
                      "&.Mui-disabled": {
                        background: "#c0e0c0",
                        color: "#fff",
                      },
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.processed
                      ? "Processed ✓"
                      : refundAmt === item.deposit
                        ? "Full Refund →"
                        : "Process Refund →"}
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}
