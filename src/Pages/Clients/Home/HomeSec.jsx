import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Category from "./Category";  //done
import PopularItem from "./PopularItem"; //done
import WhyChooseUs from "./WhyChooseUs";
import Gallary from "./Gallary"; //done
import Testimonials from "./Testimonials"; //done
import Services from "./Services"; //done
import {
  Box,
  Typography,
  Button,
  Stack,
  createTheme,
  Container,

} from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";

const fontSerif = "'Cormorant Garamond', serif";
const fontSans = "'Raleway', sans-serif";
const bg = "#a17a7a";

const HomeSec = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints

        B490: 490,
        B400: 400,
        B336: 336,
        B307: 307,
      },
    },
  });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: bg,
          }}
        >
          {/* ── Soft darker overlay — depth deva mate ── */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: `linear-gradient(135deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 60%, rgba(0,0,0,0.22) 100%)`,
              pointerEvents: "none",
            }}
          />

          {/* ── Dot pattern ── */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)`,
              backgroundSize: "32px 32px",
              pointerEvents: "none",
            }}
          />

          {/* ── Left edge line ── */}
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: "3px",
              background: `linear-gradient(to bottom, transparent, rgba(255,255,255,0.5), transparent)`,
              opacity: visible ? 1 : 0,
              transition: "opacity 1.2s ease 0.6s",
            }}
          />

          {/* ── Glow top right ── */}
          <Box
            sx={{
              position: "absolute",
              top: "-120px",
              right: "-120px",
              width: "480px",
              height: "480px",
              borderRadius: "50%",
              background: `radial-gradient(circle, rgba(255,240,235,0.22) 0%, transparent 70%)`,
              pointerEvents: "none",
            }}
          />
          <Container maxWidth="xl">
            {/* ── Content ── */}
            <Box
              sx={{
                position: "relative",
                zIndex: 2,
                py: {
                  md: 7,
                  sm: 5,
                  xs: 4,
                },
              }}
            >
              {/* Eyebrow */}

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1.5,
                  mb: 3,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.7s ease 0.2s",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    mb: {
                      sx: 1,
                      xs: 0,
                    },
                  }}
                >
                  {/* Line — left */}
                  <Box
                    sx={{
                      width: 36,
                      height: "1px",
                      bgcolor: "#f5e6e6",
                      display: {
                        sm: "flex",
                        xs: "none",
                      },
                    }}
                  />

                  {/* Text */}
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "#f5e6e6",
                    }}
                  >
                    Premium Decor Rentals
                  </Typography>

                  {/* Line — right ✅ */}
                  <Box
                    sx={{
                      width: 36,
                      height: "1px",
                      bgcolor: "#f5e6e6",
                      display: {
                        sm: "flex",
                        xs: "none",
                      },
                    }}
                  />
                </Box>
              </Box>

              {/* Main Heading */}
              <Typography
                component="h1"
                sx={{
                  fontFamily: fontSerif,
                  fontSize: {
                    xs: "34px",
                    B307: "38px",
                    B336: "42px",
                    B400: "48px",
                    B490: "53px",
                    sm: "64px",
                    md: "83px",
                  },
                  fontWeight: 300,
                  lineHeight: 1.08,
                  color: "#fdf0f0", // ── very light pinkish white — pure white nai
                  letterSpacing: "-0.5px",
                  mb: 3,
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(28px)",
                  transition: "all 0.8s ease 0.35s",
                }}
              >
                Decor That Makes
                <br />
                <Box
                  component="em"
                  sx={{
                    fontStyle: "italic",
                    color: "#ffe8e8", // ── italic word — slightly warmer light
                  }}
                >
                  Moments
                </Box>
              </Typography>

              {/* Subtext */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: { xs: "0.88rem", md: "0.95rem" },
                    fontWeight: 300,
                    lineHeight: 1.85,
                    color: "rgba(255,230,230,0.72)", // ── light pinkish muted
                    maxWidth: 480,
                    mb: 5,
                    letterSpacing: "0.04em",

                    opacity: visible ? 1 : 0,
                    transform: visible ? "translateY(0)" : "translateY(24px)",
                    transition: "all 0.8s ease 0.5s",
                  }}
                >
                  From dreamy weddings to vibrant birthdays — we bring your
                  vision to life with curated, affordable decoration packages.
                </Typography>
              </Box>

              {/* Buttons */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 0.65s",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {/* Primary */}
                <Button
                 component={Link}
                  to="/login"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#a17a7a",
                    backgroundColor: "#fdf0f0",
                    borderRadius: "2px",
                    px: 4.5,
                    py: 1.6,
                    "&:hover": {
                      backgroundColor: "#fff5f5",
                      boxShadow: `0 8px 28px rgba(0,0,0,0.15)`,
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  Join Now
                </Button>

                {/* Secondary */}
                <Button
                component={Link}
                to="/decorRental"
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#fdf0f0",
                    backgroundColor: "transparent",
                    border: `1px solid rgba(253,240,240,0.5)`,
                    borderRadius: "2px",
                    px: 4.5,
                    py: 1.6,
                    "&:hover": {
                      backgroundColor: "rgba(253,240,240,0.1)",
                      borderColor: "#fdf0f0",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.25s ease",
                  }}
                >
                  Rent Now
                </Button>
              </Stack>
            </Box>
          </Container>
        </Box>
        {/* ── Sections ── */}

        <Container maxWidth="xl" disableGutters>
          <Category/>
          <PopularItem />
          <WhyChooseUs/>
          <Gallary />
          <Testimonials />
          <Services />
        </Container>
      </ThemeProvider>
    </>
  );
};

export default HomeSec;
