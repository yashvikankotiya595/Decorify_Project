import React, { useState, useEffect } from "react"; // ✅ single import

import Fab from "@mui/material/Fab";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link,useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Feedback from "./Feedback";
import MenuIcon from "@mui/icons-material/Menu";

const primaryColor = "#a17a7a";
const fontFamily = "'Cormorant Garamond', serif";
const subFamily = "'Montserrat', sans-serif";
const bgColor = "#F8F3F1";
const darkColor = "#2F4F4F";
const mauve = "#735f5f";
const slate = "#735f5f";
const subcolor = "#C49A9A";

const navItems = [
  { label: "HOME", path: "/" },
  { label: "DECOR RENTAL", path: "/decorRental" },
  { label: "FAQ", path: "/faq" },
  { label: "ABOUT US", path: "/about" },
  { label: "CONTACT US", path: "/contact" },
];

export default function Header() {
  const theme2 = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        B400: 400,
      },
    },
  });
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [drawerOpen, setDrawerOpen] = useState(false);

  // ✅ Fab state + ref
  const [showFab, setShowFab] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setShowFab(window.scrollY > 300);
  };
  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

const location = useLocation();

  const navButtonSx = (path) => ({
    subFamily,
    fontSize: "13px",
    fontWeight: 500,
    color: location.pathname === path ? primaryColor : mauve,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    px: 1.5,
    py: 1,
    minWidth: "auto",
    borderRadius: 0,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: 4,
      left: "50%",
      transform: "translateX(-50%) scaleX(0)",
      width: "60%",
      height: "1.5px",
      backgroundColor: primaryColor,
      transition: "transform 0.25s ease",
    },
    "&:hover": {
      backgroundColor: "transparent",
      color: primaryColor,
    },
    "&:hover::after": {
      transform: "translateX(-50%) scaleX(1)",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme2}>
        <AppBar
          position="sticky"
          elevation={0}
          sx={{
            backgroundColor: bgColor,
            borderBottom: `1px solid #e8e0e0`,
            color: darkColor,
            height: "70px",
          }}
        >
          <Container maxWidth="xl" disableGutters>
            <Toolbar
              sx={{
                justifyContent: "space-between",
                minHeight: "70px !important",
              }}
            >
              {/* ── Logo ── */}
              <Typography
        component={Link}
                  to="/"
                sx={{
                  textDecoration:"none",
                  fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "23px", B400: "27px" },
                  color: mauve,
                  letterSpacing: "4px",
                  userSelect: "none",
                  textTransform: "uppercase",
                  display: "flex",
                  justifyContent: "start",
                }}
              >
                Decorify
              </Typography>

              {/* ── Center Nav ── */}
              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {navItems.map((item) => (
                    <Button 
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={navButtonSx(item.path)}>
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* ── Right: Login Button ── */}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {!isMobile ? (
                  <Button
                    component={Link}
                    to="/login"
                    sx={{
                      subFamily,
                      fontSize: "14px",
                      fontWeight: 600,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: "#fff",
                      backgroundColor: primaryColor,
                      borderRadius: "5px",
                      px: 3,
                      py: 1,
                      "&:hover": { backgroundColor: primaryColor },
                      transition: "background 0.25s ease",
                    }}
                  >
                    Login
                  </Button>
                ) : (
                  <IconButton
                    onClick={() => setDrawerOpen(true)}
                    sx={{ color: darkColor }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ── Mobile Drawer ── */}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 260, pt: 3 }}>
            <List>
              {navItems.map((item) => (
                <ListItem
                  button
                  key={item.label}
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      subFamily,
                      fontSize: "13px",
                      fontWeight: 500,
                      color: mauve,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  />
                </ListItem>
              ))}
            </List>
            <Divider sx={{ borderColor: "#f0e8e8" }} />
            <Box sx={{ px: 3, pt: 2 }}>
              <Button
                fullWidth
                sx={{
                  subFamily,
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: "#fff",
                  backgroundColor: primaryColor,
                  borderRadius: "2px",
                  py: 1.2,
                  "&:hover": { backgroundColor: primaryColor },
                  transition: "background 0.25s ease",
                }}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Drawer>
      </ThemeProvider>
      {/* <HomeSec></HomeSec> */}

      {/* ✅ Animated Fab */}
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 32,
          zIndex: 999, 
          opacity: showFab ? 1 : 0,
          transform: showFab
            ? "scale(1) translateY(0)"
            : "scale(0.6) translateY(20px)",
          transition:
            "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
          pointerEvents: showFab ? "auto" : "none",
        }}
      >
        {/* Main Fab */}
        <Fab
          onClick={() => setFeedbackOpen(true)}
          sx={{
            background: slate,
            padding: 0.5,
            color: "#fff",
             
            boxShadow: `0 8px 32px ${subcolor}55`,

            "@keyframes bounceFloat": {
              "0%, 100%": { transform: "translateY(0px)" },
              "50%": { transform: "translateY(-10px)" },
            },
            animation: "bounceFloat 2s ease-in-out infinite",

            "&:hover": {
              background: slate,
              animationPlayState: "paused", // hover પર animation pause
            },
            transition: "background 0.3s",
          }}
        >
          <FeedbackIcon />
        </Fab>
      </Box>
      <Feedback open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}
