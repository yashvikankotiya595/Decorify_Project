import { useState } from "react";
import { Box, Typography, Container, TextField } from "@mui/material";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const bg = "#F8F3F1";
const btncolor = "#a17a7a";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    lines: ["123, Decor Lane, Navrangpura,", "Ahmedabad, Gujarat 380009"],
  },
  {
    icon: "📞",
    title: "Call Us",
    lines: ["+91 98765 43210", "+91 91234 56789"],
  },
  {
    icon: "✉️",
    title: "Email Us",
    lines: ["hello@decorify.in", "support@decorify.in"],
  },
  {
    icon: "🕐",
    title: "Working Hours",
    lines: ["Mon – Sat: 9am – 7pm", "Sunday: 10am – 4pm"],
  },
];

const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: fontSans,
    fontSize: "13px",
    borderRadius: "10px",
    background: "#fff",
    "& fieldset": { borderColor: "#e8cfc9" },
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

export default function Contact_us() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  return (
    <Box sx={{ background: bg, minHeight: "100vh" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

      <Container maxWidth="lg">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          {/* ── Header ── */}
          <Box textAlign="center" mb={8}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Box sx={{ width: 32, height: "1px", bgcolor: subcolor }} />
              <Typography
                sx={{
                  fontFamily: fontSans,
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: subcolor,
                }}
              >
                Get In Touch
              </Typography>
              <Box sx={{ width: 32, height: "1px", bgcolor: subcolor }} />
            </Box>
            <Typography
              sx={{
                fontFamily: fontSerif,
                fontSize: { xs: "36px", sm: "50px", md: "62px" },
                fontWeight: 400,
                color: slate,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 300,
                fontSize: { xs: "0.82rem", md: "0.9rem" },
                color: muted,
                maxWidth: 440,
                mx: "auto",
                lineHeight: 1.9,
              }}
            >
              Have a question or ready to book? We'd love to hear from you. Our
              team usually responds within 24 hours.
            </Typography>
          </Box>

          {/* ── Main Grid — Form + Info ── */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.4fr 1fr" },
              gap: { xs: 5, md: 6 },
              mb: { xs: 8, md: 12 },
            }}
          >
            {/* ── Contact Form ── */}
            <Box
              sx={{
                background: "#fff",
                border: `1px solid #ecddd8`,
                borderRadius: "20px",
                p: { xs: 3, md: 4.5 },
              }}
            >
              {/* Top accent */}
              <Box
                sx={{
                  height: 3,
                  background: `linear-gradient(90deg, ${subcolor}, #e8b4b4, ${subcolor})`,
                  borderRadius: "2px",
                  mb: 3.5,
                }}
              />

              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: { xs: "22px", md: "28px" },
                  fontWeight: 500,
                  color: slate,
                  mb: 0.5,
                }}
              >
                Send Us a Message
              </Typography>
              <Typography
                sx={{
                  fontFamily: fontSans,
                  fontWeight: 300,
                  fontSize: "12px",
                  color: muted,
                  mb: 3,
                }}
              >
                Fill in the form and we'll get back to you shortly.
              </Typography>

              {!submitted ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Name + Email row */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <TextField
                      label="Full Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      required
                      sx={inputSx}
                    />
                    <TextField
                      label="Email Address"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      required
                      sx={inputSx}
                    />
                  </Box>

                  {/* Phone + Subject row */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
                      gap: 2,
                    }}
                  >
                    <TextField
                      label="Phone Number"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                    <TextField
                      label="Subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                  </Box>

                  {/* Message */}
                  <TextField
                    label="Your Message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    fullWidth
                    required
                    sx={inputSx}
                  />

                  {/* Submit */}
                  <Box
                    onClick={handleSubmit}
                    sx={{
                      background: btncolor,
                      color: "#fff",
                      fontFamily: fontSans,
                      fontWeight: 600,
                      fontSize: "12px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      textAlign: "center",
                      py: 1.6,
                      borderRadius: "10px",
                      cursor: "pointer",
                      mt: 0.5,
                      transition: "all 0.25s",
                      "&:hover": {
                        background: slate,
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 24px ${subcolor}44`,
                      },
                    }}
                  >
                    Send Message
                  </Box>
                </Box>
              ) : (
                /* Thank You */
                <Box textAlign="center" py={4}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: `${subcolor}22`,
                      border: `2px solid ${subcolor}55`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2.5,
                      fontSize: "28px",
                    }}
                  >
                    ✉️
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: "26px",
                      fontWeight: 500,
                      color: slate,
                      mb: 1,
                    }}
                  >
                    Message Sent!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 300,
                      fontSize: "13px",
                      color: muted,
                      lineHeight: 1.9,
                      maxWidth: 300,
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </Typography>
                  <Box
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        subject: "",
                        message: "",
                      });
                    }}
                    sx={{
                      display: "inline-block",
                      border: `1px solid ${subcolor}`,
                      color: btncolor,
                      fontFamily: fontSans,
                      fontWeight: 500,
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      px: 3,
                      py: 1,
                      borderRadius: "6px",
                      cursor: "pointer",
                      "&:hover": { background: `${subcolor}15` },
                    }}
                  >
                    Send Another
                  </Box>
                </Box>
              )}
            </Box>

            {/* ── Contact Info ── */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              {contactInfo.map((c) => (
                <Box
                  key={c.title}
                  sx={{
                    background: "#fff",
                    border: `1px solid #ecddd8`,
                    borderRadius: "14px",
                    p: 3,
                    display: "flex",
                    textAlign:"left",
                    gap: 2.5,
                    alignItems: "flex-start",
                    transition: "all 0.3s",
                    "&:hover": {
                      borderColor: subcolor,
                      transform: "translateX(4px)",
                      boxShadow: `0 8px 32px ${subcolor}18`,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: "10px",
                      background: `${subcolor}18`,
                      border: `1px solid ${subcolor}33`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      flexShrink: 0,
                    }}
                  >
                    {c.icon}
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 600,
                        fontSize: "12px",
                        color: slate,
                        letterSpacing: "0.5px",
                        mb: 0.8,
                        textTransform: "uppercase",
                      }}
                    >
                      {c.title}
                    </Typography>
                    {c.lines.map((line, i) => (
                      <Typography
                        key={i}
                        sx={{
                          fontFamily: fontSans,
                          fontWeight: 300,
                          fontSize: "13px",
                          color: muted,
                          lineHeight: 1.8,
                        }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              ))}

              
            </Box>
          </Box>

          {/* ── Map placeholder ── */}
          <Box
            sx={{
              borderRadius: "20px",
              overflow: "hidden",
              border: `1px solid #ecddd8`,
              height: { xs: 260, md: 380 },
              background: `linear-gradient(135deg, #f5ebe8, #ecddd8)`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mb: { xs: 6, md: 8 },
              position: "relative",
            }}
          >
           <iframe
  src="https://maps.google.com/maps?q=Ahmedabad&output=embed"
  width="100%" height="100%" style={{ border: 0 }}
/>
          </Box>

          
        </Box>
      </Container>
    </Box>
  );
}
