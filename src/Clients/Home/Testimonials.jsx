import { useState } from "react";
import { useMediaQuery } from "@mui/material";  
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Container,
  IconButton,
  Avatar,
  createTheme,
} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1526,

      //custome breakpoint
      B1060: 1060,
      B950: 950,
      B490: 490, //py:0
      B388: 388,
      B331: 331,
    },
  },
});

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#a17a7a";
const muted = "#9a8888";

const testimonials = [
  {
    stars: "★★★★★",
    text: "Amazing decoration service. My wedding looked absolutely beautiful! Every detail was perfect and the team was so professional.",
    name: "Rhea Shah",
    role: "Wedding · Mumbai",
    letter: "R",
    bg: "linear-gradient(135deg,#0097A7,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "My daughter's birthday party was a dream! The balloon setup and flower arch were stunning. Highly recommend Decorify!",
    name: "Karan Patel",
    role: "Birthday Party · Ahmedabad",
    letter: "K",
    bg: "linear-gradient(135deg,#0A1628,#0D2D4A)",
  },
  {
    stars: "★★★★★",
    text: "Our corporate event looked world-class thanks to Decorify. The stage backdrop and lighting setup were exceptional quality.",
    name: "Priya Nair",
    role: "Corporate Event · Surat",
    letter: "P",
    bg: "linear-gradient(135deg,#4A6080,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "The engagement setup was absolutely stunning. Every corner was beautifully decorated. Our guests couldn't stop complimenting!",
    name: "Amit Sharma",
    role: "Engagement · Vadodra",
    letter: "A",
    bg: "linear-gradient(135deg,#0097A7,#072047)",
  },
  {
    stars: "★★★★★",
    text: "The housewarming decoration was elegant and traditional. The welcome board and floral setup looked beautiful and welcoming.",
    name: "Sneha Joshi",
    role: "Housewarming · Rajkot",
    letter: "S",
    bg: "linear-gradient(135deg,#00ACC1,#0A1628)",
  },
  {
    stars: "★★★★★",
    text: "Everything was delivered on time and the decoration items were in perfect condition. Our event looked very premium.",
    name: "Raj Mehta",
    role: "Private Event · Mumbai",
    letter: "R",
    bg: "linear-gradient(135deg,#072047,#0097A7)",
  },
];

const VISIBLE = 3;

const Testimonials = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));   // < 600
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900

  const VISIBLE = isMobile ? 1 : isTablet ? 2 : 3;

  const [index, setIndex] = useState(0);
  const total = testimonials.length;

 const prev = () => setIndex((i) => (i === 0 ? total - VISIBLE : i - 1));
  const next = () => setIndex((i) => (i >= total - VISIBLE ? 0 : i + 1));

  const visible = testimonials.slice(index, index + VISIBLE);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box sx={{ background: "#ffff", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl">
            <Box sx={{ px: { xs: 0, B490: 3 } }}>
              <Box textAlign="center">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    mb: 1,
                  }}
                >
                  <Box sx={{ width: 28, height: "1px", bgcolor: subcolor, display: {
                      sm: "flex",
                      xs: "none",
                    }, }} />
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
                    Testimonials
                  </Typography>
                  <Box sx={{ width: 28, height: "1px", bgcolor: subcolor, display: {
                      sm: "flex",
                      xs: "none",
                    }, }} />
                </Box>
              </Box>

              <Typography
                sx={{
                  fontFamily: fontSerif,
                  color: slate,
                  fontSize: { xs: "30px", B331: "35px", sm: "40px", md: "50px" },
                  fontWeight: 400,
                  lineHeight: 1.1,
                  mb: 2,
                  letterSpacing: "-0.5px",
                }}
              >
                What Our Clients Say
              </Typography>

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
                Real experiences from real customers who trusted us with their
                special moments.
              </Typography>

             

                {/* 3 Cards */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateColumns: {
                      xs: "repeat(1, 1fr)", // 600 થી નીચે — 1 card
                      sm: "repeat(2, 1fr)", // 600-900 — 2 cards
                      md: "repeat(3, 1fr)", // 900 પછી — 3 cards
                    },
                    gap: 3,
                    flex: 1,
                   height: { xs: "auto", md: "285px" },
                    overflow: "visible",
                  }}
                >
                  {visible.map((t, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        background: "#fff8f5",
                        borderRadius: "22px",
                        p: 3.5,
                        border: "1px solid rgba(7,32,71,0.07)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: "0 16px 40px rgba(7,32,71,0.10)",
                          borderColor: "#fdfaf9",
                        },
                      }}
                    >
                      {/* Stars */}
                      <Typography
                        sx={{
                          color: subcolor,
                          fontSize: "16px",
                          letterSpacing: "2px",
                          mb: 2,
                        }}
                      >
                        {t.stars}
                      </Typography>

                      {/* Text */}
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: "14.4px",
                          color: subcolor,
                          textAlign: "left",
                          lineHeight: 1.7,
                          mb: 3,
                          fontStyle: "italic",
                          flex: 1,
                        }}
                      >
                        "{t.text}"
                      </Typography>

                      {/* User */}
                      <Box
                        sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
                      >
                        <Avatar
                          sx={{
                            width: 44,
                            height: 44,
                            background: slate,
                            fontFamily: fontSans,
                            fontWeight: 800,
                            fontSize: "14.4px",
                          }}
                        >
                          {t.letter}
                        </Avatar>
                        <Box>
                          <Typography
                            sx={{
                              fontFamily: fontSans,
                              fontWeight: 700,
                              fontSize: "14.08px",
                              color: muted,
                              textAlign: "left",
                            }}
                          >
                            {t.name}
                          </Typography>
                          <Typography
                            sx={{
                              fontFamily: fontSans,
                              fontSize: "12px",
                              color: subcolor,
                            }}
                          >
                            {t.role}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  ))}
                  </Box>
                
<Box sx={{ display: "flex", justifyContent: "center", gap: 2,mt: 3 }}>
    <IconButton
      onClick={prev}
      sx={{
        width: 44,
        height: 44,
        border: "1px solid #a17a7a",
        color: subcolor,
        transition: "all 0.2s ease",
        "&:hover": { background: muted, color: "white" },
      }}
    >
      <ArrowBackIosNewIcon sx={{ fontSize: 16 }} />
    </IconButton>

    <IconButton
      onClick={next}
      sx={{
        width: 44,
        height: 44,
        border: "1px solid #a17a7a",
        color: subcolor,
        transition: "all 0.2s ease",
        "&:hover": { background: muted, color: "white" },
      }}
    >
      <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
    </IconButton>
  </Box>



                {/* Right Button */}
                {/* <IconButton
                  onClick={next}
                  sx={{
                    flexShrink: 0,
                    width: 44,
                    height: 44,
                    border: "1px solid rgba(7,32,71,0.15)",
                    color: subcolor,
                    transition: "all 0.2s ease",
                    "&:hover": { background: muted, color: "white" },
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                </IconButton> */}
              
            </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </div>
  );
};

export default Testimonials;
