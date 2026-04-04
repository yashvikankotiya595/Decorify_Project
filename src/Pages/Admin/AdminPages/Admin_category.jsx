import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const bg = "#F5EFEc";
const slate = "#a17a7a";
const muted = "#735f5f";
const btnColor = "#a17a7a";
const border = "rgba(196,154,154,0.25)";

// ── Initial categories ──
const INIT_CATEGORIES = [
  {
    id: 1,
    name: "Wedding Decor",
    description: "Wedding ceremonies & functions",
    count: 28,
  },
  {
    id: 2,
    name: "Birthday Decor",
    description: "Birthday parties & celebrations",
    count: 18,
  },
  {
    id: 3,
    name: "Corporate Event",
    description: "Corporate events & seminars",
    count: 12,
  },
  {
    id: 4,
    name: "Carnival",
    description: "Fun carnival setups",
    count: 9,
  },
  {
    id: 5,
    name: "Festival Decor",
    description: "Navratri, Diwali & all festivals",
    count: 11,
  },
];

const BLANK = { name: "", color: "#C49A9A", description: "" };

// ── Shared input sx ──
const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: 13,
    borderRadius: "10px",
    background: bg,
    "& fieldset": { borderColor: border },
    "&:hover fieldset": { borderColor: btnColor },
    "&.Mui-focused fieldset": { borderColor: btnColor, borderWidth: "1px" },
  },
  "& .MuiInputBase-input": { padding: "11px 14px", color: slate },
};

export default function CategoryPage() {
  const [categories, setCategories] = useState(INIT_CATEGORIES);
  const [form, setForm] = useState({ ...BLANK });
  const [editingId, setEditingId] = useState(null); // null = add new

  // ─────────────────────────────────────────
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap');
      `}</style>

      {/* ── PAGE HEADER ── */}
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
        Categories
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
        Manage product categories for your decoration business
      </Typography>

      {/* ── TWO COLUMN LAYOUT ── */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          alignItems: "flex-start",
          flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {/* ══════════════════════════════
            LEFT — Category List
        ══════════════════════════════ */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
            minWidth: 0,
            textAlign: "left",
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat.id}
              sx={{
                background: "#fff",
                borderRadius: "14px",
                border: `1px solid ${editingId === cat.id ? `${btnColor}88` : border}`,
                px: 3,
                py: 2.2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(161,122,122,0.07)",
                transition: "border-color 0.2s, box-shadow 0.2s",
                "&:hover": {
                  borderColor: `${btnColor}55`,
                  boxShadow: "0 4px 16px rgba(161,122,122,0.12)",
                },
              }}
            >
              {/* Left — dot + name + count */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: 14,
                      fontWeight: 700,
                      color: slate,
                    }}
                  >
                    {cat.name}
                  </Typography>
                  <Typography
                    sx={{ fontFamily: fontSans, fontSize: 11, color: muted }}
                  >
                    {cat.count} products
                  </Typography>
                </Box>
              </Box>

              {/* Right — Edit + Del buttons */}
              <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: 11,
                    fontWeight: 700,
                    background: btnColor,
                    borderRadius: "8px",
                    px: 2,
                    py: 0.7,
                    minWidth: 0,
                    boxShadow: "none",
                    "&:hover": { background: "#8a6060", boxShadow: "none" },
                  }}
                >
                  Edit
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: 11,
                    fontWeight: 700,
                    background: "#c03030",
                    borderRadius: "8px",
                    px: 2,
                    py: 0.7,
                    minWidth: 0,
                    boxShadow: "none",
                    "&:hover": { background: "#a02020", boxShadow: "none" },
                  }}
                >
                  Del
                </Button>
              </Box>
            </Box>
          ))}

          {/* Empty state */}
          {categories.length === 0 && (
            <Box sx={{ textAlign: "center", py: 8 }}>
              <Typography
                sx={{ fontFamily: fontSerif, fontSize: 22, color: muted }}
              >
                No categories yet
              </Typography>
            </Box>
          )}
        </Box>
        {/* ══ LEFT END ══ */}

        {/* ══════════════════════════════
            RIGHT — Add / Edit Form
        ══════════════════════════════ */}
        <Box
          sx={{
            width: 420,
            flexShrink: 0,
            background: "#fff",
            borderRadius: "16px",
            border: `1px solid ${border}`,
            p: 3,
            boxShadow: "0 2px 12px rgba(161,122,122,0.08)",
            position: { md: "sticky" },
            top: { md: 24 },
          }}
        >
          {/* Form title */}
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: 24,
              fontWeight: 600,
              color: muted,
              mb: 1.5,
              textAlign: "left",
            }}
          >
            {editingId ? "Edit Category" : "Add New Category"}
          </Typography>

          {/* Category Name */}
          <Box sx={{ mb: 2 }}>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: slate,
                mb: 0.8,
                textAlign: "left",
              }}
            >
              Category Name
            </Typography>
            <TextField
              fullWidth
              size="small"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="e.g. Outdoor Decor"
              sx={inputSx}
            />
          </Box>

          {/* Description */}
          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                color: slate,
                mb: 0.8,
                textAlign: "left",
              }}
            >
              Description
            </Typography>
            <TextField
              fullWidth
              multiline
              rows={4}
              value={form.description}
              onChange={(e) =>
                setForm({ ...form, description: e.target.value })
              }
              placeholder="Describe this category..."
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontFamily: fontSans,
                  fontSize: 13,
                  borderRadius: "10px",
                  background: bg,
                  "& fieldset": { borderColor: border },
                  "&:hover fieldset": { borderColor: btnColor },
                  "&.Mui-focused fieldset": {
                    borderColor: btnColor,
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": {
                  padding: "11px 14px",
                  color: slate,
                },
              }}
            />
          </Box>

          {/* Save button */}
          <Button
            fullWidth
            variant="contained"
            disabled={!form.name.trim()}
            sx={{
              fontFamily: fontSans,
              fontSize: 13,
              fontWeight: 700,
              background: slate,
              borderRadius: "10px",
              py: 1.4,
              boxShadow: "none",
              letterSpacing: "0.3px",
              "&:hover": { background: muted, boxShadow: "none" },
              "&.Mui-disabled": { background: `${btnColor}55`, color: "#fff" },
            }}
          >
            {editingId ? "Update Category" : "Save Category"}
          </Button>

          {/* Cancel button (only when editing) */}
          {editingId && (
            <Button
              fullWidth
              variant="outlined"
              sx={{
                mt: 1.5,
                fontFamily: fontSans,
                fontSize: 12,
                fontWeight: 600,
                color: slate,
                borderColor: border,
                borderRadius: "10px",
                py: 1.2,
                "&:hover": { borderColor: btnColor, color: btnColor },
              }}
            >
              Cancel
            </Button>
          )}
        </Box>
        {/* ══ RIGHT END ══ */}
      </Box>
    </Box>
  );
}
