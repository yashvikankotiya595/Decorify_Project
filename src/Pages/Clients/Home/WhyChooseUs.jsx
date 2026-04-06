import { Box, Typography, Container, Grid } from "@mui/material";
import {
  VerifiedUser,
  AccessTime,
  CurrencyRupee,
  LocationOn,
  Groups,
  SupportAgent,
} from "@mui/icons-material";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const muted = "#735f5f";
const bg = "#F5EFEc";
const slate = "#a17a7a";
const border = "rgba(196,154,154,0.22)";

const FEATURES = [
  {
    icon: <VerifiedUser />,
    title: "100% Verified Items",
    desc: "Every decor piece is inspected before delivery — clean, undamaged, and event-ready.",
  },
  {
    icon: <AccessTime />,
    title: "On-Time Delivery",
    desc: "We deliver and pick up on schedule so your event day stays completely stress-free.",
  },
  {
    icon: <CurrencyRupee />,
    title: "Affordable Pricing",
    desc: "Premium decor at rental prices — no hidden charges, transparent deposit system.",
  },
  {
    icon: <LocationOn />,
    title: "Ahmedabad-Wide Service",
    desc: "We deliver across all major areas of Ahmedabad — home, hall, or outdoor venue.",
  },
  {
    icon: <Groups />,
    title: "500+ Happy Customers",
    desc: "Trusted by families, planners, and corporates across hundreds of events.",
  },
  {
    icon: <SupportAgent />,
    title: "Dedicated Support",
    desc: "Our team is available before and after your event — just call or message us anytime.",
  },
];

const STATS = [
  { num: "500+", label: "Events Completed" },
  { num: "100+", label: "Decor Items" },
  { num: "4.9★", label: "Average Rating" },
  { num: "3+", label: "Years in Ahmedabad" },
];

export default function WhyChooseUs() {
  return (
    <Box sx={{ background: bg, py: { xs: 7, md: 10 } }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        .wcu-card:hover {
          transform: translateY(-6px) !important;
          box-shadow: 0 16px 40px rgba(196,154,154,0.18) !important;
        }
      `}</style>

      <Container maxWidth="lg">
        {/* ── HEADER ── */}
        <Box sx={{ textAlign: "center", mb: { xs: 5, md: 7 } }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              mb: 1,
            }}
          >
            <Box sx={{ width: 28, height: "1px", background: slate }} />
            <Typography
              sx={{
                fontFamily: fontSans,
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: slate,
              }}
            >
              Why Choose Us
            </Typography>
            <Box sx={{ width: 28, height: "1px", background: slate }} />
          </Box>

          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: { xs: 30, sm: 38, md: 46 },
              fontWeight: 400,
              color: muted,
              lineHeight: 1.15,
              mb: 1.5,
            }}
          >
            Decor You Can Trust
          </Typography>

          <Typography
            sx={{
              fontFamily: fontSans,
              fontWeight: 300,
              fontSize: { xs: 12, sm: 13 },
              color: muted,
              maxWidth: 420,
              mx: "auto",
              lineHeight: 1.8,
            }}
          >
            From first click to final setup — we make every event effortless,
            elegant, and affordable.
          </Typography>
        </Box>

        {/* ── FEATURE CARDS GRID ──
            KEY FIX:
            - Grid item sx={{ display:"flex" }}  → makes item a flex container
            - Card sx={{ width:"100%" }}          → card fills the flex item fully
            - Card sx={{ display:"flex", flexDirection:"column" }} → equal height cards
        */}
        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3 }}
          
          sx={{ mb: { xs: 5, md: 7 } }}
        >
          {FEATURES.map((f, i) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={i}
              sx={{ display: "flex" }} 
            >
              <Box
                className="wcu-card"
                sx={{
                  background: "#fff",
                  borderRadius: "16px",
                  border: `1px solid ${border}`,
                  p: { xs: 2.5, md: 3.5 },
                  textAlign: "center",
                  width: "100%", // ← fills grid item fully
                  display: "flex",
                  flexDirection: "column", // ← equal height cards
                  alignItems: "center",
                  boxSizing: "border-box",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
              >
                {/* Icon circle */}
                <Box
                  sx={{
                    width: { xs: 50, md: 56 },
                    height: { xs: 50, md: 56 },
                    borderRadius: "50%",
                    background: `${slate}18`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mb: 2.5,
                    flexShrink: 0,
                    "& svg": { fontSize: { xs: 22, md: 24 }, color: slate },
                  }}
                >
                  {f.icon}
                </Box>

                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: { xs: 18, md: 20 },
                    fontWeight: 600,
                    color: muted,
                    mb: 1,
                    lineHeight: 1.2,
                  }}
                >
                  {f.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 300,
                    fontSize: { xs: 11, sm: 12 },
                    color: slate,
                    lineHeight: 1.8,
                  }}
                >
                  {f.desc}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* ── STATS BAR ── */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
            border: `1px solid ${border}`,
            borderRadius: "14px",
            overflow: "hidden",
            background: "#fff",
          }}
        >
          {STATS.map((s, i) => (
            <Box
              key={i}
              sx={{
                textAlign: "center",
                py: { xs: 2.5, md: 3 },
                px: 1,
                borderRight: {
                  xs: i % 2 === 0 ? `1px solid ${border}` : "none",
                  sm: i < STATS.length - 1 ? `1px solid ${border}` : "none",
                },
                borderBottom: {
                  xs: i < 2 ? `1px solid ${border}` : "none",
                  sm: "none",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: { xs: 30, md: 38 },
                  fontWeight: 500,
                  color: slate,
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {s.num}
              </Typography>
              <Typography
                sx={{
                  fontFamily: fontSans,
                  fontSize: { xs: 10, sm: 11 },
                  fontWeight: 500,
                  color: slate,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
