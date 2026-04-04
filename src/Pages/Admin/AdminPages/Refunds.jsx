import { useState } from "react";
import {
  Box, Typography, Button, Chip, Avatar,
} from "@mui/material";
import { ArrowForward, Remove, DragHandle } from "@mui/icons-material";

// ── Design Tokens ──
const fontSans  = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate     = "#a17a7a";
const muted     = "#735f5f";
const bg        = "#F5EFEc";
const border    = "rgba(196,154,154,0.22)";
const sub       = "#C49A9A";
const primary   = "#3d2a2a";

// ── Stat cards data ──
const STATS = [
  { label: "Pending",        value: "3",    sub: "Action needed", accent: "#d08060", subDown: true  },
  { label: "Processing",     value: "1",    sub: "",              accent: "#7090c0", subDown: false },
  { label: "Completed",      value: "34",   sub: "",              accent: "#80b870", subDown: false },
  { label: "Total Refunded", value: "₹42K", sub: "",              accent: "#C49A9A", subDown: false },
];

// ── Refund queue data ──
const INIT_REFUNDS = [
  {
    id:       1,
    name:     "Ankit Modi",
    letter:   "A",
    avBg:     "linear-gradient(135deg,#6a3a3a,#c49a9a)",
    booking:  "#BK0091",
    item:     "Flower Arch",
    deposit:  1000,
    damage:   200,
    refund:   800,
    status:   "pending",
  },
  {
    id:       2,
    name:     "Sneha Raval",
    letter:   "S",
    avBg:     "linear-gradient(135deg,#3a5a4a,#70a080)",
    booking:  "#BK0088",
    item:     "Photo Booth",
    deposit:  2000,
    damage:   0,
    refund:   2000,
    status:   "pending",
  },
  {
    id:       3,
    name:     "Hinal Jain",
    letter:   "H",
    avBg:     "linear-gradient(135deg,#5a3a6a,#9070b0)",
    booking:  "#BK0082",
    item:     "Balloon Setup",
    deposit:  500,
    damage:   0,
    refund:   500,
    status:   "pending",
  },
  {
    id:       4,
    name:     "Kavita Joshi",
    letter:   "K",
    avBg:     "linear-gradient(135deg,#3a5a2a,#70a050)",
    booking:  "#BK0079",
    item:     "Fairy Lights",
    deposit:  1500,
    damage:   400,
    refund:   1100,
    status:   "processing",
  },
  {
    id:       5,
    name:     "Raj Mehta",
    letter:   "R",
    avBg:     "linear-gradient(135deg,#3a3a5a,#6070a0)",
    booking:  "#BK0070",
    item:     "Mandap Setup",
    deposit:  3000,
    damage:   0,
    refund:   3000,
    status:   "completed",
  },
];

// ── Status chip config ──
const STATUS_CONFIG = {
  pending:    { label: "Pending",    bg: "#fdf0e0", color: "#a16a20", border: "#f0d0a0" },
  processing: { label: "Processing", bg: "#e8edf5", color: "#2d4a7a", border: "#a0b0d0" },
  completed:  { label: "Completed",  bg: "#e8f5ee", color: "#2d7a50", border: "#a0d0b0" },
};

export default function Refunds() {

  const [refunds, setRefunds] = useState(INIT_REFUNDS);

  // Stats computed live
  const pendingCount    = refunds.filter((r) => r.status === "pending").length;
  const processingCount = refunds.filter((r) => r.status === "processing").length;
  const completedCount  = refunds.filter((r) => r.status === "completed").length;
  const totalRefunded   = refunds.filter((r) => r.status === "completed").reduce((s, r) => s + r.refund, 0);

  const liveStats = [
    { label: "Pending",        value: String(pendingCount),    sub: "Action needed", accent: "#d08060", subDown: pendingCount > 0 },
    { label: "Processing",     value: String(processingCount), sub: "",              accent: "#7090c0", subDown: false },
    { label: "Completed",      value: String(completedCount),  sub: "",              accent: "#80b870", subDown: false },
    { label: "Total Refunded", value: `₹${(totalRefunded / 1000).toFixed(0)}K`, sub: "", accent: "#C49A9A", subDown: false },
  ];

  // Process: pending → processing
  const handleProcess = (id) => {
    setRefunds(refunds.map((r) =>
      r.id === id && r.status === "pending" ? { ...r, status: "processing" } : r
    ));
  };

  // Mark done: processing → completed
  const handleMarkDone = (id) => {
    setRefunds(refunds.map((r) =>
      r.id === id && r.status === "processing" ? { ...r, status: "completed" } : r
    ));
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, background: "#fff", minHeight: "100vh" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ── PAGE HEADER ── */}
      <Box sx={{ mb: 3 }}>
        <Typography sx={{ fontFamily: fontSerif, fontSize: 34, fontWeight: 600, color: primary, lineHeight: 1 }}>
          Refund Management
        </Typography>
        <Typography sx={{ fontFamily: fontSans, fontSize: 12, color: muted, mt: 0.5 }}>
          Process and track all customer deposit refunds
        </Typography>
      </Box>

      {/* ── STAT CARDS ── */}
      <Box sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr 1fr", md: "repeat(4, 1fr)" },
        gap: 2, mb: 3,
      }}>
        {liveStats.map((s, i) => (
          <Box key={i} sx={{
            background: "#fff",
            border: `1px solid ${border}`,
            borderRadius: "14px",
            p: 2.5,
            boxShadow: "0 2px 10px rgba(161,122,122,0.07)",
            borderTop: `3px solid ${s.accent}`,
            transition: "transform 0.2s",
            "&:hover": { transform: "translateY(-3px)" },
          }}>
            <Typography sx={{ fontFamily: fontSans, fontSize: 10, fontWeight: 700, color: muted, letterSpacing: "0.8px", textTransform: "uppercase", mb: 0.5 }}>
              {s.label}
            </Typography>
            <Typography sx={{ fontFamily: fontSerif, fontSize: 28, fontWeight: 600, color: primary, lineHeight: 1 }}>
              {s.value}
            </Typography>
            {s.sub && (
              <Typography sx={{ fontFamily: fontSans, fontSize: 10, color: s.subDown ? "#c05a5a" : "#5a9a6e", mt: 0.5 }}>
                {s.subDown ? "↓ " : "↑ "}{s.sub}
              </Typography>
            )}
          </Box>
        ))}
      </Box>

      {/* ── REFUND QUEUE PANEL ── */}
      <Box sx={{
        background: "#fff",
        border: `1px solid ${border}`,
        borderRadius: "16px",
        boxShadow: "0 2px 12px rgba(161,122,122,0.07)",
        overflow: "hidden",
      }}>

        {/* Panel header */}
        <Box sx={{
          px: 3, py: 2,
          borderBottom: `1px solid ${border}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <Typography sx={{ fontFamily: fontSerif, fontSize: 22, fontWeight: 600, color: primary }}>
            Refund Queue
          </Typography>
          <Typography sx={{ fontFamily: fontSans, fontSize: 11, color: muted }}>
            {refunds.length} entries
          </Typography>
        </Box>

        {/* ── Refund rows ── */}
        <Box>
          {refunds.map((item, idx) => {
            const cfg       = STATUS_CONFIG[item.status];
            const isCompleted  = item.status === "completed";
            const isProcessing = item.status === "processing";
            const damageColor  = item.damage > 0 ? "#c05a5a" : "#5a9a6e";

            return (
              <Box
                key={item.id}
                sx={{
                  px: { xs: 2, md: 3 }, py: 2,
                  borderBottom: idx < refunds.length - 1 ? `1px solid ${border}` : "none",
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1.5, md: 2 },
                  flexWrap: { xs: "wrap", md: "nowrap" },
                  opacity: isCompleted ? 0.65 : 1,
                  transition: "opacity 0.3s, background 0.2s",
                  "&:hover": { background: isCompleted ? "transparent" : bg },
                }}
              >
                {/* Avatar */}
                <Avatar sx={{
                  width: 38, height: 38, flexShrink: 0,
                  background: item.avBg,
                  fontFamily: fontSans, fontSize: 14, fontWeight: 700,
                }}>
                  {item.letter}
                </Avatar>

                {/* Name + booking */}
                <Box sx={{ minWidth: 140, flexShrink: 0 }}>
                  <Typography sx={{ fontFamily: fontSans, fontSize: 13, fontWeight: 700, color: primary }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontFamily: fontSans, fontSize: 10, color: muted }}>
                    Booking {item.booking} · {item.item}
                  </Typography>
                </Box>

                {/* Amount breakdown: Deposit → Damage = Refund */}
                <Box sx={{
                  display: "flex", alignItems: "center",
                  gap: 1, flex: 1,
                  flexWrap: "wrap",
                  justifyContent: { xs: "flex-start", md: "center" },
                }}>
                  {/* Deposit */}
                  <Box sx={{ textAlign: "center", minWidth: 60 }}>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 14, fontWeight: 700, color: primary }}>
                      ₹{item.deposit.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 9, color: muted, textTransform: "uppercase" }}>
                      Deposit
                    </Typography>
                  </Box>

                  {/* Arrow → */}
                  <Typography sx={{ color: muted, fontSize: 16, fontWeight: 300 }}>→</Typography>

                  {/* Damage */}
                  <Box sx={{ textAlign: "center", minWidth: 60 }}>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 14, fontWeight: 700, color: damageColor }}>
                      ₹{item.damage.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 9, color: muted, textTransform: "uppercase" }}>
                      Damage
                    </Typography>
                  </Box>

                  {/* Equals = */}
                  <Typography sx={{ color: muted, fontSize: 16, fontWeight: 300 }}>=</Typography>

                  {/* Refund */}
                  <Box sx={{
                    textAlign: "center", minWidth: 70,
                    background: "#e8f5ee",
                    border: "1px solid #a0d0b0",
                    borderRadius: "8px", px: 1.5, py: 0.4,
                  }}>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 15, fontWeight: 700, color: "#2d7a50" }}>
                      ₹{item.refund.toLocaleString()}
                    </Typography>
                    <Typography sx={{ fontFamily: fontSans, fontSize: 9, color: "#2d7a50", textTransform: "uppercase" }}>
                      Refund
                    </Typography>
                  </Box>
                </Box>

                {/* Status chip */}
                <Chip
                  label={cfg.label}
                  size="small"
                  sx={{
                    fontFamily: fontSans, fontWeight: 700, fontSize: 10,
                    background: cfg.bg, color: cfg.color,
                    border: `1px solid ${cfg.border}`,
                    flexShrink: 0,
                  }}
                />

                {/* Action button */}
                {isCompleted ? (
                  <Button
                    disabled
                    size="small"
                    variant="outlined"
                    sx={{
                      fontFamily: fontSans, fontSize: 10, fontWeight: 700,
                      color: "#9a8888", borderColor: border,
                      borderRadius: "8px", px: 2, py: 0.7,
                      flexShrink: 0,
                    }}
                  >
                    Done
                  </Button>
                ) : isProcessing ? (
                  <Button
                    onClick={() => handleMarkDone(item.id)}
                    size="small"
                    variant="contained"
                    sx={{
                      fontFamily: fontSans, fontSize: 10, fontWeight: 700,
                      background: "#4a8a5a", color: "#fff",
                      borderRadius: "8px", px: 2, py: 0.7,
                      boxShadow: "none", flexShrink: 0,
                      "&:hover": { background: "#3a7a4a", boxShadow: "none" },
                    }}
                  >
                    Mark Done
                  </Button>
                ) : (
                  <Button
                    onClick={() => handleProcess(item.id)}
                    size="small"
                    variant="contained"
                    sx={{
                      fontFamily: fontSans, fontSize: 10, fontWeight: 700,
                      background: slate, color: "#fff",
                      borderRadius: "8px", px: 2, py: 0.7,
                      boxShadow: "none", flexShrink: 0,
                      "&:hover": { background: muted, boxShadow: "none" },
                    }}
                  >
                    Process
                  </Button>
                )}

              </Box>
            );
          })}
        </Box>

      </Box>
    </Box>
  );
}
