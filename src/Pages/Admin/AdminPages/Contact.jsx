import { useState } from "react";
import { Box, Typography, TextField, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a";
const muted = "#735f5f";
const bg = "#F4F8FC";

const initialMessages = [
  {
    id: 1,
    name: "Rohan Desai",
    email: "rohan@email.com",
    date: "30 Mar 2026",
    phone: "9076798634",
    subject: "Skill swap",
    message: "How do I list my skill on the platform?",
    status: "Unread",
  },
  {
    id: 2,
    name: "Nisha Verma",
    email: "nisha@email.com",
    date: "29 Mar 2026",
    phone: "9076798634",
    subject: "Complaint",
    message: "I have a complaint about a swap deal.",
    status: "Read",
  },
  {
    id: 3,
    name: "Pooja Shah",
    email: "pooja@email.com",
    date: "27 Mar 2026",
    phone: "9876543210",
    subject: "Payment",
    message: "Payment not received after swap completion.",
    status: "Unread",
  },
  {
    id: 4,
    name: "Yash Trivedi",
    email: "yash@email.com",
    date: "28 Mar 2026",
    phone: "9123456789",
    subject: "Query",
    message: "Can I swap multiple skills at the same time?",
    status: "Read",
  },
];

export default function Contact() {
  const [messages, setMessages] = useState(initialMessages);
  const [search, setSearch] = useState("");

  const markAsRead = (id) => {
    setMessages((prev) =>
      prev.map((m) => (m.id === id ? { ...m, status: "Read" } : m)),
    );
  };

  const filtered = messages.filter(
    (m) =>
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()),
  );

  const unreadCount = messages.filter((m) => m.status === "Unread").length;

  return (
    <Box sx={{ background: "#fff", minHeight: "100vh" }}>
      {/* Header */}
      <Box
        sx={{ display: { xs: "none", md: "block" }, mb: 3, textAlign: "left" }}
      >
        <Typography
          sx={{
            fontFamily: fontSerif,
            fontSize: 34,
            fontWeight: 600,
            color: slate,
            lineHeight: 1,
            textAlign: "left",
          }}
        >
          Contact Messages
        </Typography>
        <Typography
          sx={{
            fontFamily: fontSans,
            fontSize: 12,
            color: muted,
            textAlign: "left",
            mt: 0.5,
            mb: 3.5,
          }}
        >
          {unreadCount} unread message{unreadCount !== 1 ? "s" : ""}
        </Typography>
      </Box>

      {/* Search */}
      <TextField
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        size="small"
        sx={{
          mb: 3,
          width: { xs: "100%", sm: 400 },
          "& .MuiOutlinedInput-root": {
            fontFamily: fontSans,
            fontSize: 13,
            borderRadius: "8px",
            background: "#F5EFEc",
            "& fieldset": { borderColor: "rgba(196,154,154,0.22)" },
            "&:hover fieldset": { borderColor: "#C49A9A" },
            "&.Mui-focused fieldset": {
              borderColor: "#C49A9A",
              borderWidth: "1px",
            },
          },
          "& .MuiInputBase-input": { padding: "9px 13px", color: slate },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 18, color: "#9a8888" }} />
            </InputAdornment>
          ),
        }}
      />

      {/* Message Cards */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          textAlign: "left",
        }}
      >
        {filtered.map((m) => (
          <Box
            key={m.id}
            sx={{
              background: "#fff",
              borderRadius: "16px",
              border: `1px solid ${m.status === "Unread" ? "rgba(161,122,122,0.4)" : "rgba(161,122,122,0.15)"}`,
              boxShadow:
                m.status === "Unread"
                  ? "0 4px 20px rgba(161,122,122,0.1)"
                  : "0 2px 12px rgba(161,122,122,0.05)",
              p: { xs: 2, md: 3 },
              transition: "all 0.25s",
              "&:hover": {
                boxShadow: "0 8px 28px rgba(161,122,122,0.12)",
                transform: "translateY(-2px)",
              },
            }}
          >
            {/* Top row */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                flexWrap: "wrap",
                gap: 1,
                mb: 1,
              }}
            >
              <Box>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 700,
                    fontSize: "15px",
                    color: slate,
                  }}
                >
                  {m.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "12px",
                    color: "#9a8888",
                    mt: 0.2,
                  }}
                >
                  {m.email} · {m.date}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "12px",
                    color: "#9a8888",
                  }}
                >
                  {m.phone}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "12px",
                    color: slate,
                    fontWeight: 600,
                    mt: 0.3,
                  }}
                >
                  {m.subject}
                </Typography>
              </Box>

              {/* Status Chip */}
              <Box
                sx={{
                  px: 1.5,
                  py: 0.4,
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: 600,
                  fontFamily: fontSans,
                  background:
                    m.status === "Unread"
                      ? "rgba(161,122,122,0.1)"
                      : "rgba(7,32,71,0.06)",
                  color: m.status === "Unread" ? slate : "#735f5f",
                  flexShrink: 0,
                }}
              >
                {m.status}
              </Box>
            </Box>

            {/* Message */}
            <Typography
              sx={{
                fontFamily: fontSans,
                fontSize: "13px",
                textAlign: "left",
                color: "#9a8888",
                lineHeight: 1.7,
                mb: m.status === "Unread" ? 1.5 : 0,
              }}
            >
              {m.message}
            </Typography>

            {/* Mark as Read Button */}
            {m.status === "Unread" && (
              <Box
                onClick={() => markAsRead(m.id)}
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 0.6,
                  px: 1.8,
                  py: 0.6,
                  borderRadius: "8px",
                  background: "rgba(161,122,122,0.08)",
                  border: "1px solid rgba(161,122,122,0.2)",
                  color: slate,
                  fontSize: "12px",
                  fontFamily: fontSans,
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": { background: "rgba(161,122,122,0.18)" },
                }}
              >
                ✓ Mark as Read
              </Box>
            )}
          </Box>
        ))}

        {filtered.length === 0 && (
          <Box sx={{ textAlign: "center", py: 8 }}>
            <Typography
              sx={{
                fontFamily: fontSerif,
                fontSize: "20px",
                color: muted,
                mb: 0.5,
              }}
            >
              No messages found
            </Typography>
            <Typography
              sx={{ fontFamily: fontSans, fontSize: "13px", color: "#9a8888" }}
            >
              Try a different search
            </Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
}
