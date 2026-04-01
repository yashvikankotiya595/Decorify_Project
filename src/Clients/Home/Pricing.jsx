import { Box, Typography, Card, CardContent, Button, createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";

const btncolor = "#a17a7a";

const packages = [
  {
    title: "Haldi Setup",
    price: "₹4,999",
    features: [
      "Backdrop Decoration",
      "Floral Setup",
      "Bajot Seating",
      "Basic Lighting",
    ],
  },
  {
    title: "Birthday Setup",
    price: "₹3,499",
    features: [
      "Balloon Decoration",
      "LED Numbers",
      "Throne Chair",
      "Photo Setup",
    ],
    popular: true,
  },
  {
    title: "Wedding Entry",
    price: "₹6,999",
    features: [
      "Flower Arch",
      "Welcome Board",
      "Lighting Setup",
      "Carpet Entry",
    ],
  },
];

const Pricing = () => {
  const theme = createTheme({
    breakpoints:{
      values:{
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints
        B334: 334,
      }
    }
  })
  return (
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        py: { xs: 6, md: 9 },
        px: { xs: 2, sm: 4 },
        textAlign: "center",
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
          Inspiration
        </Typography>
        <Box sx={{ width: 28, height: "1px", bgcolor: subcolor, display: {
                      sm: "flex",
                      xs: "none",
                    }, }} />
      </Box>

      {/* ── Title ── */}
      <Typography
        sx={{
          fontFamily: fontSerif,
          fontSize: { xs: "30px", B334: "35px", sm: "40px", md: "50px" },
          fontWeight: 400,
          color: slate,
          lineHeight: 1.1,
          mb: 2,
          letterSpacing: "-0.5px",
        }}
      >
        Our Packages
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
          mb: { xs: 5, md: 7 },
        }}
      >
        Choose the perfect decoration package for your special event
      </Typography>

      {/* ── Cards ── */}
      <Box
        sx={{
          display: "flex",
          gap: 3,
          justifyContent: "center",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        {packages.map((pkg, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "100%", sm: 290 },
              maxWidth: 320,
              borderRadius: "16px",
              border: pkg.popular
                ? `2px solid ${subcolor}`
                : "1px solid #ede0e0",
              boxShadow: pkg.popular
                ? "0 20px 48px rgba(196,154,154,0.25)"
                : "0 4px 20px rgba(47,47,47,0.07)",
              position: "relative",
              transform: pkg.popular
                ? { xs: "scale(1)", md: "scale(1.06)" } // ✅ mobile ma scale nai
                : "none",
              transition: "all 0.3s ease",
              backgroundColor: pkg.popular ? "#fff" : "#fdfaf9",
              "&:hover": {
                transform: pkg.popular
                  ? {
                      xs: "translateY(-4px)",
                      md: "scale(1.06) translateY(-4px)",
                    }
                  : "translateY(-6px)",
                boxShadow: "0 24px 52px rgba(196,154,154,0.3)",
              },
            }}
          >
            {/* ── Popular Badge ── */}
            {pkg.popular && (
              <Box
                sx={{
                  position: "absolute",
                  itop: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  overflow: "visible",
                }}
              >
                {/* ── Triangle corner ── */}

                <Box
                  sx={{
                    position: "absolute",
                    top: "15px",
                    right: "-39px",
                    width: "158px",
                    height: "30px",
                    transform: "rotate(45deg)",
                    backgroundColor: subcolor,
                  }}
                >
                  <Typography
                    sx={{
                      position: "absolute",
                      top: "9px",
                      right: "21px",
                      width: "102px",
                      textAlign: "center",
                     
                      transformOrigin: "center",
                      fontFamily: fontSans,
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    Most Popular
                  </Typography>
                </Box>
              </Box>
            )}

            <CardContent sx={{ pt: pkg.popular ? 4 : 3, pb: 3, px: 3 }}>
              {/* ── Package Title ── */}
              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  color: slate,
                  mb: 0.5,
                  mt: 2,
                }}
              >
                {pkg.title}
              </Typography>

              {/* ── Divider ── */}
              <Box
                sx={{
                  width: 40,
                  height: "1.5px",
                  bgcolor: subcolor,
                  mx: "auto",
                  mb: 2,
                }}
              />

              {/* ── Price ── */}
              <Typography
                sx={{
                  fontFamily: fontSerif,
                  fontSize: "2.4rem",
                  fontWeight: 700,
                  color: pkg.popular ? subcolor : slate,
                  lineHeight: 1,
                  mb: 0.5,
                }}
              >
                {pkg.price}
              </Typography>
              <Typography
                sx={{
                  fontFamily: fontSans,
                  fontSize: "0.7rem",
                  color: muted,
                  letterSpacing: "0.1em",
                  mb: 3,
                }}
              >
                per event
              </Typography>

              {/* ── Features ── */}
              <Box sx={{ mb: 3, textAlign: "left" }}>
                {pkg.features.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      mb: 1.2,
                    }}
                  >
                    {/* Checkmark */}
                    <Box
                      sx={{
                        width: 20,
                        height: 20,
                        borderRadius: "50%",
                        backgroundColor: pkg.popular ? subcolor : "#ede0e0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: "0.6rem",
                          color: pkg.popular ? "#fff" : slate,
                          lineHeight: 1,
                          fontWeight: 700,
                        }}
                      >
                        ✓
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: "0.82rem",
                        color: muted,
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* ── Book Now Button ── */}
              <Button
                variant="contained"
                fullWidth
                sx={{
                  fontFamily: fontSans,
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  py: 1.4,
                  backgroundColor: pkg.popular ? subcolor : btncolor,
                  color: "#fff",
                  boxShadow: pkg.popular
                    ? "0 6px 18px rgba(196,154,154,0.4)"
                    : "0 6px 18px rgba(115,95,95,0.25)",
                  "&:hover": {
                    backgroundColor: pkg.popular ? "#b08080" : "#5a4a4a",
                    transform: "translateY(-1px)",
                    boxShadow: "0 8px 24px rgba(196,154,154,0.4)",
                  },
                  transition: "all 0.25s ease",
                }}
              >
                Book Now
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
    </ThemeProvider>
  );
};

export default Pricing;
