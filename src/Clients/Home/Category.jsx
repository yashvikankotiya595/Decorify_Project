import { Box, createTheme, Typography } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import WeekendIcon from "@mui/icons-material/Weekend";
import BedIcon from "@mui/icons-material/Bed";
import InventoryIcon from "@mui/icons-material/Inventory";
import TableRestaurantIcon from "@mui/icons-material/TableRestaurant";
import LightIcon from "@mui/icons-material/Light";
import ChairIcon from "@mui/icons-material/Chair";
import CelebrationIcon from "@mui/icons-material/Celebration";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { ThemeProvider } from "@mui/material/styles";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const bgcolor = "#F8F3F1";

const categories = [
  { icon: <LightIcon />, label: "Lighting & Lamps" },
  { icon: <LocalFloristIcon />, label: "Flower Pots & Planters" },
  { icon: <WeekendIcon />, label: "Sofas & Seating" },
  { icon: <BedIcon />, label: "Bedroom Furniture" },
  { icon: <InventoryIcon />, label: "Storage & Organization" },
  { icon: <TableRestaurantIcon />, label: "Tables" },
  { icon: <ChairIcon />, label: "Chairs & Stools" },
  { icon: <CelebrationIcon />, label: "Event Decor" },
  { icon: <CameraAltIcon />, label: "Photo Booth" },
  { icon: <AutoAwesomeIcon />, label: "Festival Décor" },
];

const Category = () => {
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
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 5, md: 7 },
            px: 2,
            my: { xs: 5, md: 7 },
            backgroundColor: "#fff",
          }}
        >
          {/* ── Eyebrow ── */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1.5,
              mb: 1,
            }}
          >
            <Box
              sx={{
                bgcolor: subcolor,
                width: 28,
                height: "1px",
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
                color: subcolor,
              }}
            >
              Browse by Event
            </Typography>
            <Box
              sx={{
                bgcolor: subcolor,
                width: 28,
                height: "1px",
                display: {
                  sm: "flex",
                  xs: "none",
                },
              }}
            />
          </Box>

          {/* ── Title ── */}
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: { xs: "28px", B334: "35px", sm: "40px", md: "50px" },
              fontWeight: 400,
              color: slate,
              lineHeight: 1.1,
              mb: 2.5,
              letterSpacing: "-0.5px",
            }}
          >
            Our Decor Categories
          </Typography>

          {/* ── Subtitle ── */}
          <Typography
            sx={{
              fontFamily: fontSans,
              fontWeight: 300,
              fontSize: { xs: "0.82rem", md: "0.88rem" },
              color: muted,
              maxWidth: 440,
              mx: "auto",
              lineHeight: 1.8,
              mb: { xs: 3, md: 4 },
            }}
          >
            Find the perfect decoration for your special occasion from our wide
            range of curated collections.
          </Typography>

          {/* ── Marquee Slider ── */}
          <Box
            sx={{
              width: "100%",
              overflow: "hidden",
              py: 1,
              maskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "14px",
                animation: "marquee 28s linear infinite",
                whiteSpace: "nowrap",
                width: "max-content",
                "&:hover": { animationPlayState: "paused" },
                "@keyframes marquee": {
                  "0%": { transform: "translateX(0)" },
                  "100%": { transform: "translateX(-50%)" },
                },
              }}
            >
              {/* ── Cards — 2 copies for seamless loop ── */}
              {[...categories, ...categories].map((cat, i) => (
                <Box
                  key={i}
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1.8,
                    backgroundColor: bgcolor,
                    borderColor: subcolor,
                    borderRadius: "50px",
                    px: {
                      xs: "6px",
                      B334: 2.5,
                    },
                    py: {
                      xs: "6px",
                      B334: 1.4,
                    },
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    border: "1.5px solid #C49A9A",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      transform: "translateY(-3px)",
                      boxShadow: "0 8px 22px rgba(196,154,154,0.25)",
                    },
                  }}
                >
                  {/* Icon circle */}
                  <Box
                    className="cat-icon-wrap"
                    sx={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      backgroundColor: subcolor,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      transition: "background-color 0.25s ease",
                      flexShrink: 0,
                      "& svg": {
                        fontSize: "1.25rem",
                        color: "#fff",
                        transition: "color 0.25s ease",
                      },
                    }}
                  >
                    {cat.icon}
                  </Box>

                  {/* Label */}
                  <Typography
                    className="cat-label"
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: subcolor,
                      transition: "color 0.25s ease",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {cat.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Category;
