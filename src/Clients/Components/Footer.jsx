import { Box, Typography, Container, Divider } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const bg = "#a17a7a";

// light version of bg
const footerBg = "#f5eeeb";
const textDark = "#735f5f";
const textMuted = "#9a7a7a";
const borderColor = "#e8d5d0";

const quickLinks = ["Home", "Decor rental", "FAQ", "About Us", "Contact Us"];

const categories = [
  { label: "Wedding Décor" },
  { label: "Birthday Party" },
  { label: "Corporate Event" },
  { label: "Baby Shower" },
  { label: "Festival Décor" },
  { label: "Furniture & Props" },
];

const contacts = [
  { text: "123, Decor Lane, Ahmedabad, Gujarat 380001" },
  { text: "+91 98765 43210" },
  { text: "hello@decorify.in" },
  { text: "Mon–Sat: 9am – 7pm" },
];

const socials = [
  { icon: <InstagramIcon />, label: "Instagram" },
  { icon: <FacebookIcon />, label: "Facebook" },
  { icon: <YouTubeIcon />, label: "YouTube" },
  { icon: <WhatsAppIcon />, label: "WhatsApp" },
];

export default function Footer() {
  return (
    <Box sx={{ background: footerBg, pt: { xs: 6, md: 8 }, pb: 0 }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

      <Container maxWidth="xl">
        {/* ── Main Row ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "2fr 1.2fr 1.2fr 1.4fr",
            },
            gap: { xs: 5, md: 4 },
            pb: { xs: 5, md: 6 },
          }}
        >
          {/* ── Col 1: Brand ── */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              flexWrap: "wrap",
            }}
          >
            <Typography
              sx={{
                fontFamily:fontSerif,
                fontWeight: 400,
                fontSize: { xs: "27px", B400: "23px" },
                // fontSize:"27px",
                color: textDark,
                letterSpacing: "4px",
                userSelect: "none",
                textTransform: "uppercase",
                display: "flex",
                justifyContent: "start",
              }}
            >
              Decorify
            </Typography>

            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 300,
                fontSize: "13px",
                color: textMuted,
                lineHeight: 1.9,
                maxWidth: 300,
                mb: 3,
                textAlign: "left",
              }}
            >
              Premium decor rental service for weddings, birthdays, corporate
              events and all special occasions. Making your moments beautiful
              since 2019.
            </Typography>

            {/* Social Icons */}
            <Box display="flex" gap={1.5}>
              {socials.map((s, i) => (
                <Box
                  key={i}
                  title={s.label}
                  sx={{
                    width: 40,
                    height: 40,
                    color: bg,
                    borderRadius: "50%",
                    background: `${subcolor}22`,
                    border: `1px solid ${bg}44`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    cursor: "pointer",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: subcolor,
                      transform: "translateY(-3px)",
                      boxShadow: `0 6px 16px ${subcolor}44`,
                      color: "white",
                    },
                  }}
                >
                  {s.icon}
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Col 2: Quick Links ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 600,
                letterSpacing: "0.05em",
                fontSize: "14px",
                color: textDark,
                mb: 2.5,
                display: "flex",
                justifyContent: "start",
              }}
            >
              Quick Links
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {quickLinks.map((link) => (
                <Typography
                  key={link}
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 400,

                    fontSize: "13px",
                    color: textMuted,
                    cursor: "pointer",
                    position: "relative",
                    width: "fit-content",
                    transition: "color 0.2s",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -1,
                      left: 0,
                      width: 0,
                      height: "1px",
                      background: subcolor,
                      transition: "width 0.25s ease",
                    },
                    "&:hover": { color: bg },
                    "&:hover::after": { width: "100%" },
                  }}
                >
                  {link}
                </Typography>
              ))}
            </Box>
          </Box>

          {/* ── Col 3: Categories ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: "14px",
                color: textDark,
                letterSpacing: "0.05em",
                mb: 2.5,
                display: "flex",
                justifyContent: "start",
              }}
            >
              Categories
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 1.4 }}>
              {categories.map((cat) => (
                <Box
                  key={cat.label}
                  display="flex"
                  alignItems="center"
                  gap={1}
                  sx={{
                    cursor: "pointer",
                    "&:hover .cat-label": { color: bg },
                  }}
                >
                  <Typography sx={{ fontSize: "14px", lineHeight: 1 }}>
                    {cat.icon}
                  </Typography>
                  <Typography
                    className="cat-label"
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 400,
                      fontSize: "13px",
                      color: textMuted,
                      transition: "color 0.2s",
                    }}
                  >
                    {cat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* ── Col 4: Contact ── */}
          <Box>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: "14px",
                color: textDark,
                letterSpacing: "0.05em",
                mb: 2.5,
                display: "flex",
                justifyContent: "start",
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              {contacts.map((c, i) => (
                <Box key={i} display="flex" justifyContent={"start"} gap={1.5}>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 300,
                      fontSize: "13px",
                      color: textMuted,
                      lineHeight: 1.7,
                      textAlign: "left",
                    }}
                  >
                    {c.text}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>

        {/* ── Divider ── */}
        <Divider sx={{ borderColor: borderColor }} />

        {/* ── Bottom Bar ── */}
        <Box
          sx={{
            py: 2.5,
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "center", sm: "center" },
            gap: 1.5,
          }}
        >
          <Typography
            sx={{
              fontFamily: fontSans,
              fontSize: "12px",
              fontWeight: 300,
              color: textMuted,
            }}
          >
            © 2024 Decorify. All rights reserved.
          </Typography>

          <Box display="flex" gap={2} alignItems="center">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (item, i) => (
                <Box key={item} display="flex" alignItems="center" gap={2}>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "12px",
                      fontWeight: 400,
                      color: textMuted,
                      cursor: "pointer",
                      "&:hover": { color: bg },
                      transition: "color 0.2s",
                    }}
                  >
                    {item}
                  </Typography>
                  {i < 2 && (
                    <Box
                      sx={{
                        width: "3px",
                        height: "3px",
                        borderRadius: "50%",
                        background: textMuted,
                      }}
                    />
                  )}
                </Box>
              ),
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
