import { Box, Typography, Container } from "@mui/material";

// icon
import DiamondIcon from '@mui/icons-material/Diamond';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import { Link } from "react-router-dom/cjs/react-router-dom";


const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const bg = "#F8F3F1";
const btncolor = "#a17a7a";

const stats = [
  { number: "500+", label: "Events Decorated", icon: "🎪" },
  { number: "5+", label: "Years Experience", icon: "✨" },
  { number: "98%", label: "Happy Clients", icon: "💛" },
  { number: "20+", label: "Cities Served", icon: "📍" },
];

const values = [
  {
    icon: <DiamondIcon sx={{ fontSize: 50, color: subcolor}}/>,
    title: "Premium Quality",
    desc: "Every item carefully selected and maintained to meet the highest standards of elegance.",
  },
  {
    icon: <LocalShippingIcon sx={{ fontSize: 50, color: subcolor}}/>,
    title: "On-Time Delivery",
    desc: "Our team arrives early, sets up perfectly, and collects after your event — zero hassle.",
  },
  {
    icon: <AutoFixHighIcon sx={{ fontSize: 50, color: subcolor}}/>,
    title: "Custom Creations",
    desc: "We tailor every setup to your unique vision, theme, and personal style.",
  },
  {
    icon: <CurrencyExchangeIcon sx={{ fontSize: 50, color: subcolor}}/>,
    title: "Refundable Deposit",
    desc: "Security deposit ensures item safety and is refunded after safe item return.",
  },
];


function SectionLabel({ text }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 1.5,
        mb: 1.5,
      }}
    >
      <Box sx={{ width: 28, height: "1px", bgcolor: subcolor }} />
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
        {text}
      </Typography>
      <Box sx={{ width: 28, height: "1px", bgcolor: subcolor }} />
    </Box>
  );
}

export default function About_Us() {
  return (
    <Box sx={{ background: bg }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

      {/* ── 1. HERO ── */}
      <Box sx={{ pt: { xs: 8, md: 10 }, pb: { xs: 4, md: 6 } }}>
        <Container maxWidth="lg">
          {/* Header */}
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
                Our Story
              </Typography>
              <Box sx={{ width: 32, height: "1px", bgcolor: subcolor }} />
            </Box>
            <Typography
              sx={{
                fontFamily: fontSerif,
                fontSize: { xs: "44px", sm: "58px", md: "72px" },
                fontWeight: 400,
                color: slate,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 300,
                fontSize: { xs: "0.82rem", md: "0.9rem" },
                color: muted,
                maxWidth: 480,
                mx: "auto",
                lineHeight: 1.9,
              }}
            >
              Founded in 2026, Decorify is Gujarat's trusted premium decor
              rental brand — turning ordinary spaces into extraordinary
              memories.
            </Typography>
          </Box>

          {/* ── 2. WHO WE ARE + QUOTE ── */}

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: { xs: 4, md: 6 },
              alignItems: "center",
              mb: { xs: 8, md: 12 },
            }}
          >
            {/* Image */}

            <Box>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}
              >
                <Box sx={{ width: 24, height: "1px", bgcolor: subcolor }} />
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
                  Who We Are
                </Typography>
              </Box>
              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: { xs: "28px", md: "40px" },
                  fontWeight: 400,
                  color: slate,
                  lineHeight: 1.2,
                  mb: 3,
                }}
              >
                A Passion for{" "}
                <Box
                  component="span"
                  sx={{ fontStyle: "italic", color: subcolor }}
                >
                  Beautiful Events
                </Box>
              </Typography>
              {[
                "Decorify was born from a simple belief — every celebration deserves to look extraordinary, regardless of budget.",
                "Our team of designers and logistics experts work tirelessly to ensure that every setup reflects your vision.",
                "We believe in sustainable celebrations — rental over purchase means less waste, lower cost, and beautiful results.",
              ].map((text, i) => (
                <Typography
                  key={i}
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 300,
                    fontSize: "13.5px",
                    color: muted,
                    lineHeight: 2,
                    mb: 1.5,
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Box>
            <Box
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                height: { xs: 280, md: 290 },
                boxShadow: `0 16px 48px ${subcolor}22`,
                border: `1px solid #ecddd8`,
              }}
            >
              <Box
                component="img"
                src="/about_usimg.png"
                alt="About Decorify"
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.95) saturate(0.9)",
                }}
              />
            </Box>

            {/* Text */}
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg">
      
        
        {/* ── 3. VALUES ── */}
        <Box mb={{ xs: 8, md: 14 }}>
          <Box textAlign="center" mb={7}>
            <SectionLabel text="What Drives Us" />
            <Typography
              sx={{
                fontFamily: fontSerif,
                fontSize: { xs: "30px", md: "44px" },
                fontWeight: 300,
                color: slate,
              }}
            >
              Our Core Values
            </Typography>
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "1fr 1fr",
                md: "repeat(4, 1fr)",
              },
              gap: 3,
            }}
          >
            {values.map((v, i) => (
              <Box
                key={v.title}
                sx={{
                  background: "white",
                border:"1px solid #fff ",
                  borderRadius: "16px",
                  p: 3.5,
                  textAlign: "center",
                  transition: "all 0.35s",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: `0 20px 48px ${subcolor}33`,
                  },
                }}
              >
                <Typography>
                  {v.icon}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 600,
                    fontSize: "13px",
                    color: slate,
                    mb: 1.5,
                  }}
                >
                  {v.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 300,
                    fontSize: "12.5px",
                    color: slate,
                    lineHeight: 1.8,
                  }}
                >
                  {v.desc}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>

        
        {/* ── 7. CTA ── */}
        <Box
          sx={{
            background: `linear-gradient(135deg, #2a1a1a 0%, #4a3030 50%, #735f5f 100%)`,
            borderRadius: "24px",
            p: { xs: 5, md: 8 },
            textAlign: "center",
            mb: { xs: 6, md: 8 },
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -50,
              right: -50,
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: `1px solid ${subcolor}18`,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: -70,
              left: -70,
              width: 300,
              height: 300,
              borderRadius: "50%",
              border: `1px solid ${subcolor}12`,
            }}
          />

          <Typography
            sx={{
              fontFamily: fontSans,
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: subcolor,
              mb: 2,
              position: "relative",
              zIndex: 1,
            }}
          >
            Let's Work Together
          </Typography>
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: { xs: "28px", md: "48px" },
              fontWeight: 300,
              color: "#fff",
              mb: 2,
              lineHeight: 1.15,
              position: "relative",
              zIndex: 1,
            }}
          >
            Ready to Create Your{" "}
            <Box component="span" sx={{ fontStyle: "italic", color: subcolor }}>
              Dream Event?
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: fontSans,
              fontWeight: 300,
              fontSize: "13px",
              color: "rgba(255,255,255,0.5)",
              mb: 4,
              lineHeight: 1.9,
              position: "relative",
              zIndex: 1,
            }}
          >
            Let Decorify handle the décor while you focus on making memories.
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
              position: "relative",
              zIndex: 1,
            }}
          >
            <Box
            component={Link}
            to="/decorRental"
              sx={{
                textDecoration:"none",
                background: subcolor,
                color: "#fff",
                fontFamily: fontSans,
                fontWeight: 600,
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                px: 5,
                py: 1.6,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.25s",
                "&:hover": {
                  background: "#fff",
                  color: btncolor,
                  transform: "translateY(-2px)",
                },
              }}
            >
              Explore Rentals
            </Box>
            <Box
            component={Link} 
            to="/contact"
              sx={{
                textDecoration:"none",
                border: `1px solid rgba(255,255,255,0.25)`,
                color: "rgba(255,255,255,0.6)",
                fontFamily: fontSans,
                fontWeight: 400,
                fontSize: "12px",
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                px: 5,
                py: 1.6,
                borderRadius: "8px",
                cursor: "pointer",
                transition: "all 0.25s",
                "&:hover": { borderColor: subcolor, color: subcolor },
              }}
            >
              Contact Us
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
