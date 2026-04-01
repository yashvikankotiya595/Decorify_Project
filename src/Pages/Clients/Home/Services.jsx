import {
  Box,
  Typography,
  Container,
  createTheme,
  ThemeProvider,
  Grid,
} from "@mui/material";

//icons
// import CelebrationIcon from '@mui/icons-material/Celebration';
import EventIcon from "@mui/icons-material/Event";
import TheaterComedyIcon from "@mui/icons-material/TheaterComedy";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PaletteIcon from "@mui/icons-material/Palette";
import BusinessIcon from "@mui/icons-material/Business";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const bg = "#a17a7a";
const cardBg = "rgba(255,255,255,0.07)";
const cardBorder = "rgba(255,255,255,0.1)";

const services = [
  {
    icon: <EventIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />,
    title: "Event Decoration",
    desc: "Complete decoration setup for weddings, birthdays, and all special occasions.",
  },
  {
    icon: (
      <TheaterComedyIcon
        sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }}
      />
    ),
    title: "Stage Setup",
    desc: "Professional stage design with backdrops, lighting rigs, and floral arrangements.",
  },
  {
    icon: (
      <CelebrationIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />
    ),
    title: "Balloon Decoration",
    desc: "Custom balloon arches, columns, ceiling fills, and organic balloon art.",
  },
  {
    icon: (
      <LightbulbIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />
    ),
    title: "Lighting Setup",
    desc: "Fairy lights, fairy canopies, LED setups, and ambient mood lighting.",
  },
  {
    icon: (
      <PhotoCameraIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />
    ),
    title: "Photo Booth",
    desc: "Themed photo booth setups with props, backdrops, and instant print options.",
  },
  {
    icon: (
      <FavoriteIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />
    ),
    title: "Wedding Decor",
    desc: "Elegant floral mandaps, entrance arches, and complete wedding venue styling.",
  },
  {
    icon: <PaletteIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />,
    title: "Theme Parties",
    desc: "Creative theme-based decorations tailored to your party concept and vision.",
  },
  {
    icon: (
      <BusinessIcon sx={{ fontSize: 50, color: "rgba(255,255,255,0.5)" }} />
    ),
    title: "Corporate Events",
    desc: "Sophisticated setups for conferences, product launches, and corporate gatherings.",
  },
];

const Services = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints
        B334: 334,
      },
    },
  });
  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: bg, py: { xs: 8, md: 12 } }}>
          <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

          <Container maxWidth="xl">
            {/* ── Header ── */}
            <Box textAlign="center" mb={8}>
              {/* Eyebrow */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 2,
                  mb: 2,
                }}
              >
                <Box
                  sx={{
                    width: 36,
                    height: "1.5px",
                    background: "rgba(255,255,255,0.5)",
                    display: {
                      sm: "flex",
                      xs: "none",
                    },
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    textTransform: "uppercase",
                    letterSpacing: "0.28em",
                    fontSize: "10px",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                  }}
                >
                  What We Offer
                </Typography>
                <Box
                  sx={{
                    width: 36,
                    height: "1.5px",
                    background: "rgba(255,255,255,0.5)",
                    display: {
                      sm: "flex",
                      xs: "none",
                    },
                  }}
                />
              </Box>

              {/* Title */}
              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: {
                    xs: "30px",
                    B334: "35px",
                    sm: "40px",
                    md: "50px",
                  },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  color: "#fff",
                  mb: 1,
                  letterSpacing: "-0.5px",
                }}
              >
                Our Services
              </Typography>

              {/* Subtitle */}
              <Typography
                sx={{
                  fontFamily: fontSans,
                  fontWeight: 300,
                  fontSize: { xs: "0.82rem", md: "0.92rem" },
                  color: "rgba(255,255,255,0.5)",
                  maxWidth: 480,
                  mx: "auto",
                  lineHeight: 1.9,
                }}
              >
                End-to-end decoration solutions tailored to make your event
                unforgettable.
              </Typography>
            </Box>

            {/* ── Cards Grid ── */}
            <Grid container spacing={2}>
              {services.map((s, idx) => (
                <Grid
                  size={{
                    xs: 12, // 0 થી 500px -> 1 Card (100% width)
                    sm: 6, // 500 થી 900px -> 2 Cards (50% width) ✅
                    md: 3, // 900px થી ઉપર -> 4 Cards (25% width) ✅
                  }}
                >
                  <Box
                    key={idx}
                    sx={{
                      background: cardBg,
                      border: `1px solid ${cardBorder}`,
                      borderRadius: "16px",
                      p: { xs: 3, md: 3.5 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      cursor: "default",
                      backdropFilter: "blur(8px)",
                      transition:
                        "background 0.3s, border-color 0.3s, transform 0.3s",
                      "&:hover": {
                        background: "rgba(255,255,255,0.12)",
                        borderColor: `${subcolor}66`,
                        transform: "translateY(-2px)",
                        boxShadow: `0 16px 48px rgba(0,0,0,0.25)`,
                      },
                    }}
                  >
                    {/*  Icon */}
                    <Box
                      sx={{
                        mb: 2.5,
                        lineHeight: 1,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    >
                      {s.icon}
                    </Box>

                    {/* Title */}
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 600,
                        fontSize: { xs: "15px", md: "16px" },
                        color: "#ffffff",
                        mb: 1.5,
                        letterSpacing: "0.02em",
                      }}
                    >
                      {s.title}
                    </Typography>

                    {/* Description */}
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.55)",
                        lineHeight: 1.8,
                      }}
                    >
                      {s.desc}
                    </Typography>
                  </Box>{" "}
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Services;
