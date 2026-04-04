import { useState } from "react";
import { Box, Typography, TextField } from "@mui/material";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a";
const muted = "#735f5f";
const bg = "#F4F8FC";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: "13px",
    borderRadius: "10px",
    background: "#fff",
    "& fieldset": { borderColor: "rgba(161,122,122,0.25)" },
    "&:hover fieldset": { borderColor: slate },
    "&.Mui-focused fieldset": { borderColor: slate, borderWidth: "1.5px" },
  },
  "& .MuiInputLabel-root": {
    fontFamily: fontSans,
    fontSize: "12px",
    color: muted,
    "&.Mui-focused": { color: slate },
  },
};

export default function Settings() {
  const [form, setForm] = useState({
    name: "Admin User",
    email: "admin@skillbridge.com",
    phone: "+91 98765 00000",
    address: "Ahmedabad, Gujarat",
    currentPassword: "",
    newPassword: "",
    notes: "",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 3.5 }, background: bg, minHeight: "100vh" }}>
      {/* Header */}
      <Box sx={{ display: { xs: "none", md: "block" }, mb: 3, textAlign: "left" }}>
        <Typography sx={{ fontFamily: fontSerif, fontWeight: 600, fontSize: "28px", color: muted }}>
          Settings
        </Typography>
        <Typography sx={{ fontFamily: fontSans, fontSize: "13px", color: "#9a8888", mt: 0.3 }}>
          Manage your admin account
        </Typography>
      </Box>

      {/* Form Card */}
      <Box sx={{
        background: "#fff",
        borderRadius: "20px",
        border: "1px solid rgba(161,122,122,0.15)",
        boxShadow: "0 4px 20px rgba(161,122,122,0.08)",
        p: { xs: 2.5, md: 4 },
        maxWidth: 860,
      }}>

        {/* Top accent */}
        <Box sx={{
          height: 3,
          background: `linear-gradient(90deg, ${slate}, #c49a9a, ${slate})`,
          borderRadius: "2px",
          mb: 3.5,
        }} />

        {/* Name + Email */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }}>
          <TextField label="Full Name" name="name" value={form.name} onChange={handleChange} size="small" fullWidth sx={inputSx} />
          <TextField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} size="small" fullWidth sx={inputSx} />
        </Box>

        {/* Phone + Address */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }}>
          <TextField label="Phone Number" name="phone" value={form.phone} onChange={handleChange} size="small" fullWidth sx={inputSx} />
          <TextField label="Address" name="address" value={form.address} onChange={handleChange} size="small" fullWidth sx={inputSx} />
        </Box>

        {/* Current + New Password */}
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" }, gap: 2, mb: 2 }}>
          <TextField label="Current Password" name="currentPassword" type="password" value={form.currentPassword} onChange={handleChange} size="small" fullWidth sx={inputSx} />
          <TextField label="New Password" name="newPassword" type="password" value={form.newPassword} onChange={handleChange} size="small" fullWidth sx={inputSx} />
        </Box>

        {/* Notes */}
        <Box sx={{ mb: 3 }}>
          <TextField
            label="Notes / Description"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            multiline rows={4}
            fullWidth
            sx={inputSx}
          />
        </Box>

        {/* Save Button */}
        <Box
          onClick={handleSave}
          sx={{
            background: saved ? "#2e7d32" : muted,
            color: "#fff",
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: "13px",
            letterSpacing: "0.5px",
            textAlign: "center",
            py: 1.6,
            borderRadius: "10px",
            cursor: "pointer",
            transition: "all 0.25s",
            "&:hover": { background: slate },
          }}
        >
          {saved ? "✅ Changes Saved!" : "💾 Save Changes"}
        </Box>
      </Box>
    </Box>
  );
}
