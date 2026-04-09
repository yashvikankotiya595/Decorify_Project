import { useState } from "react";
import { Box, Typography, TextField, Button, Grid } from "@mui/material";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const bg = "#F5EFEc";
const slate = "#a17a7a";
const muted = "#735f5f";
const border = "rgba(196,154,154,0.25)";

const COLOR_OPTIONS = ["#C49A9A", "#7a9ec4", "#7ac47a", "#c4a87a", "#a87ac4"];

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
  { id: 4, name: "Carnival", description: "Fun carnival setups", count: 9 },
  {
    id: 5,
    name: "Festival Decor",
    description: "Navratri, Diwali & all festivals",
    count: 11,
  },
];

const BLANK = { name: "", color: "#C49A9A", description: "" };

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: 13,
    borderRadius: "10px",
    background: bg,
    "& fieldset": { borderColor: border },
    "&:hover fieldset": { borderColor: slate },
    "&.Mui-focused fieldset": { borderColor: slate, borderWidth: "1px" },
  },
  "& .MuiInputBase-input": { padding: "11px 14px", color: slate },
};

export default function Admin_category() {
  const [categories, setCategories] = useState(INIT_CATEGORIES);
  const [form, setForm] = useState({ ...BLANK });
  const [editingId, setEditingId] = useState(null);

  const handleSave = () => {
    if (!form.name.trim()) return;
    if (editingId) {
      setCategories(
        categories.map((c) =>
          c.id === editingId
            ? {
                ...c,
                name: form.name,
                color: form.color,
                description: form.description,
              }
            : c,
        ),
      );
      setEditingId(null);
    } else {
      setCategories([...categories, { ...form, id: Date.now(), count: 0 }]);
    }
    setForm({ ...BLANK });
  };

  const handleEdit = (cat) => {
    setEditingId(cat.id);
    setForm({
      name: cat.name,
      color: cat.color || "#C49A9A",
      description: cat.description,
    });
  };

  const handleDelete = (id) => {
    setCategories(categories.filter((c) => c.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setForm({ ...BLANK });
    }
  };

  const handleCancel = () => {
    setEditingId(null);
    setForm({ ...BLANK });
  };

  return (
    // ── No minHeight here — parent/admin layout handles height ──
    <Box>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap');`}</style>

      {/* ── HEADER ── */}
      <Typography
        sx={{
          fontFamily: fontSerif,
          fontSize: { xs: 26, sm: 30, md: 34 },
          fontWeight: 600,
          color: slate,
          lineHeight: 1,
        }}
      >
        Categories
      </Typography>
      <Typography
        sx={{
          fontFamily: fontSans,
          fontSize: { xs: 11, sm: 12 },
          color: muted,
          mt: 0.5,
          mb: { xs: 2.5, md: 3 },
        }}
      >
        Manage product categories for your decoration business
      </Typography>

      {/* ── TWO COLUMN LAYOUT ── */}
      <Box
        sx={{
          display: "flex",
          gap: { xs: 2, md: 3 },
          alignItems: "flex-start",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {/* ══ LEFT — Category List ══ */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: 1.5,
          }}
        >
          {categories.map((cat) => (
            <Box
              key={cat.id}
              sx={{
                background: "#fff",
                borderRadius: "14px",
                border: `1px solid ${editingId === cat.id ? `${slate}88` : border}`,
                px: { xs: 2, sm: 3 },
                py: { xs: 1.8, sm: 2.2 },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "0 2px 8px rgba(161,122,122,0.07)",
                transition: "border-color 0.2s, box-shadow 0.2s",
                "&:hover": {
                  borderColor: `${slate}55`,
                  boxShadow: "0 4px 16px rgba(161,122,122,0.12)",
                },
              }}
            >
              {/* Name + count */}
              <Box>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: { xs: 13, sm: 14 },
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

              {/* Edit + Del */}
              <Box sx={{ display: "flex", gap: 0.8, flexShrink: 0 }}>
                <Button
                  onClick={() => handleEdit(cat)}
                  size="small"
                  variant="contained"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: { xs: 10, sm: 11 },
                    fontWeight: 700,
                    background: slate,
                    borderRadius: "8px",
                    px: { xs: 1.5, sm: 2 },
                    py: 0.7,
                    minWidth: 0,
                    boxShadow: "none",
                    "&:hover": { background: muted, boxShadow: "none" },
                  }}
                >
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(cat.id)}
                  size="small"
                  variant="contained"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: { xs: 10, sm: 11 },
                    fontWeight: 700,
                    background: "#c03030",
                    borderRadius: "8px",
                    px: { xs: 1.5, sm: 2 },
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

        {/* ══ RIGHT — Form (sticky, no extra scroll) ══ */}
        <Box
          id="cat-form"
          sx={{
            // Fixed width on desktop, full width on mobile
            width: { xs: "100%", md: 340 },
            flexShrink: 0,
            background: "#fff",
            borderRadius: "16px",
            border: `1px solid ${border}`,
            p: { xs: 2.5, sm: 3 },
            boxShadow: "0 4px 20px rgba(161,122,122,0.08)",
            // Sticky — stays beside list while scrolling
            position: { md: "sticky" },
            top: { md: 80 }, // 80px = navbar height, adjust as needed
            // ── KEY: form should NOT create its own scroll ──
            // It just sizes to its content
          }}
        >
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: { xs: 20, sm: 22 },
              fontWeight: 600,
              color: muted,
              mb: 2,
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
          <Box sx={{ mb: 2.5 }}>
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
              rows={3}
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
                  "&:hover fieldset": { borderColor: slate },
                  "&.Mui-focused fieldset": {
                    borderColor: slate,
                    borderWidth: "1px",
                  },
                },
                "& .MuiInputBase-input": { padding: "11px 14px", color: slate },
              }}
            />
          </Box>

          {/* Save button */}
          <Button
            fullWidth
            variant="contained"
            disabled={!form.name.trim()}
            onClick={handleSave}
            sx={{
              fontFamily: fontSans,
              fontSize: 13,
              fontWeight: 700,
              background: slate,
              borderRadius: "10px",
              py: 1.4,
              boxShadow: "none",
              "&:hover": { background: muted, boxShadow: "none" },
              "&.Mui-disabled": { background: `${slate}55`, color: "#fff" },
            }}
          >
            {editingId ? "Update Category" : "Save Category"}
          </Button>

          {/* Cancel — only in edit mode */}
          {editingId && (
            <Button
              fullWidth
              variant="outlined"
              onClick={handleCancel}
              sx={{
                mt: 1.5,
                fontFamily: fontSans,
                fontSize: 12,
                fontWeight: 600,
                color: slate,
                borderColor: border,
                borderRadius: "10px",
                py: 1.2,
                "&:hover": { borderColor: slate, color: slate },
              }}
            >
              Cancel
            </Button>
          )}
        </Box>


        
      </Box>
    </Box>
  );
}
