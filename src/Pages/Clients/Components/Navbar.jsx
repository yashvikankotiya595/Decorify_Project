import React, { useState, useEffect } from "react";
import Fab from "@mui/material/Fab";
import FeedbackIcon from "@mui/icons-material/Feedback";
import { Link, useLocation, useHistory } from "react-router-dom";
import {
  AppBar, Toolbar, Box, Typography, Button, IconButton,
  Drawer, List, ListItem, ListItemText, Divider,
  useMediaQuery, useTheme, Container,
  Avatar, Menu, MenuItem,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Feedback   from "./Feedback";
import MenuIcon   from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

const primaryColor = "#a17a7a";
const fontFamily   = "'Cormorant Garamond', serif";
const subFamily    = "'Montserrat', sans-serif";
const bgColor      = "#F8F3F1";
const darkColor    = "#2F4F4F";
const mauve        = "#735f5f";
const slate        = "#735f5f";
const subcolor     = "#C49A9A";

const navItems = [
  { label: "HOME",         path: "/" },
  { label: "DECOR RENTAL", path: "/decorRental" },
  { label: "FAQ",          path: "/faq" },
  { label: "ABOUT US",     path: "/about" },
  { label: "CONTACT US",   path: "/contact" },
];

const readAuth = () => ({
  loggedIn:  localStorage.getItem("isLoggedIn") === "true",
  userName:  localStorage.getItem("userName")   || "",
  userEmail: localStorage.getItem("userEmail")  || "",
});

export default function Navbar() {
  const theme2 = createTheme({
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536, B400: 400 },
    },
  });

  const [feedbackOpen,  setFeedbackOpen]  = useState(false);
  const [drawerOpen,    setDrawerOpen]    = useState(false);
  const [showFab,       setShowFab]       = useState(false);
  const [profileAnchor, setProfileAnchor] = useState(null);
  const [auth,          setAuth]          = useState(readAuth);

  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const history  = useHistory();

  useEffect(() => {
    const sync = () => setAuth(readAuth());
    window.addEventListener("authChange", sync);
    window.addEventListener("storage",    sync);
    return () => {
      window.removeEventListener("authChange", sync);
      window.removeEventListener("storage",    sync);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const avatarLetter = auth.userName ? auth.userName.charAt(0).toUpperCase() : "";

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userEmail");
    setProfileAnchor(null);
    setDrawerOpen(false);
    setAuth({ loggedIn: false, userName: "", userEmail: "" });
    window.dispatchEvent(new Event("authChange"));
    history.push("/");
  };

  const navButtonSx = (path) => ({
    fontFamily: subFamily,
    fontSize: "13px", fontWeight: 500,
    color: location.pathname === path ? primaryColor : mauve,
    letterSpacing: "0.14em", textTransform: "uppercase",
    px: 1.5, py: 1, minWidth: "auto", borderRadius: 0,
    position: "relative",
    "&::after": {
      content: '""', position: "absolute",
      bottom: 4, left: "50%",
      transform: "translateX(-50%) scaleX(0)",
      width: "60%", height: "1.5px",
      backgroundColor: primaryColor,
      transition: "transform 0.25s ease",
    },
    "&:hover": { backgroundColor: "transparent", color: primaryColor },
    "&:hover::after": { transform: "translateX(-50%) scaleX(1)" },
  });

  return (
    <>
      <ThemeProvider theme={theme2}>
        <AppBar position="sticky" elevation={0}
          sx={{ backgroundColor: bgColor, borderBottom: "1px solid #e8e0e0", color: darkColor, height: "70px" }}>
          <Container maxWidth="xl" disableGutters>
            <Toolbar sx={{ justifyContent: "space-between", minHeight: "70px !important" }}>

              {/* Logo */}
              <Typography component={Link} to="/" sx={{
                textDecoration: "none", fontFamily, fontWeight: 400,
                fontSize: { xs: "23px", B400: "27px" },
                color: mauve, letterSpacing: "4px",
                userSelect: "none", textTransform: "uppercase",
              }}>
                Decorify
              </Typography>

              {/* Center Nav — desktop */}
              {!isMobile && (
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  {navItems.map((item) => (
                    <Button key={item.label} component={Link} to={item.path} sx={navButtonSx(item.path)}>
                      {item.label}
                    </Button>
                  ))}
                </Box>
              )}

              {/* Right side */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                {!isMobile ? (
                  auth.loggedIn ? (
                    <>
                      <Avatar
                        onClick={(e) => setProfileAnchor(e.currentTarget)}
                        sx={{
                          width: 40, height: 40,
                          backgroundColor: primaryColor,
                          fontFamily: subFamily, fontSize: 16, fontWeight: 700,
                          cursor: "pointer",
                          boxShadow: `0 4px 16px ${subcolor}55`,
                          border: `2px solid ${subcolor}`,
                          transition: "box-shadow 0.2s, border-color 0.2s",
                          "&:hover": { boxShadow: `0 6px 20px ${primaryColor}66`, borderColor: primaryColor },
                        }}>
                        {avatarLetter}
                      </Avatar>

                      <Menu
                        anchorEl={profileAnchor}
                        open={Boolean(profileAnchor)}
                        onClose={() => setProfileAnchor(null)}
                        transformOrigin={{ horizontal: "right", vertical: "top" }}
                        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                        PaperProps={{ sx: { mt: 1.2, borderRadius: "14px", minWidth: 220, boxShadow: "0 8px 36px rgba(161,122,122,0.18)", overflow: "hidden" } }}
                      >
                        <Box sx={{ px: 2.5, py: 2, textAlign: "center", borderBottom: "1px solid #f0e8e8" }}>
                          <Avatar sx={{ width: 52, height: 52, mx: "auto", mb: 1, backgroundColor: primaryColor, fontFamily: subFamily, fontSize: 22, fontWeight: 700, boxShadow: `0 4px 16px ${subcolor}55` }}>
                            {avatarLetter}
                          </Avatar>
                          <Typography sx={{ fontFamily: subFamily, fontSize: 14, fontWeight: 700, color: mauve, lineHeight: 1.2 }}>
                            {auth.userName}
                          </Typography>
                          <Typography sx={{ fontFamily: subFamily, fontSize: 11, color: "#9a8888", mt: 0.3, wordBreak: "break-all" }}>
                            {auth.userEmail}
                          </Typography>
                        </Box>
                        <MenuItem component={Link} to="/profile" onClick={() => setProfileAnchor(null)}
                          sx={{ fontFamily: subFamily, fontSize: 13, fontWeight: 500, color: mauve, gap: 1.5, py: 1.4, px: 2.5, "&:hover": { background: "#f8f3f1" } }}>
                          <PersonIcon sx={{ fontSize: 18, color: primaryColor }} />
                          My Profile
                        </MenuItem>
                        <Divider sx={{ borderColor: "#f0e8e8" }} />
                        <MenuItem onClick={handleLogout}
                          sx={{ fontFamily: subFamily, fontSize: 13, fontWeight: 500, color: "#c03030", gap: 1.5, py: 1.4, px: 2.5, "&:hover": { background: "#fce8e8" } }}>
                          <LogoutIcon sx={{ fontSize: 18 }} />
                          Logout
                        </MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <Button component={Link} to="/login" sx={{
                      fontFamily: subFamily, fontSize: "14px", fontWeight: 600,
                      letterSpacing: "1.5px", textTransform: "uppercase",
                      color: "#fff", backgroundColor: primaryColor,
                      borderRadius: "5px", px: 3, py: 1,
                      "&:hover": { backgroundColor: "#8a6060" },
                      transition: "background 0.25s ease",
                    }}>
                      Login
                    </Button>
                  )
                ) : (
                  <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: darkColor }}>
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        {/* ══════════════════════════════════════
            MOBILE DRAWER
            Order:
            1. User info card (if logged in) / Login button (if not)
            2. Divider
            3. Nav links
            4. Divider
            5. My Profile + Logout (if logged in)
        ══════════════════════════════════════ */}
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
          <Box sx={{ width: 270, display: "flex", flexDirection: "column", height: "100%" }}>

            {/* ── 1. TOP: User info OR Login button ── */}
            <Box sx={{ px: 2.5, pt: 3, pb: 2 }}>
              {auth.loggedIn ? (
                // Logged in — show avatar + name + email card
                <Box sx={{
                  display: "flex", alignItems: "center", gap: 1.5,
                  p: 1.8, background: "#f8f3f1",
                  borderRadius: "12px",
                  border: `1px solid ${subcolor}33`,
                }}>
                  <Avatar sx={{
                    width: 44, height: 44,
                    backgroundColor: primaryColor,
                    fontFamily: subFamily, fontSize: 18, fontWeight: 700,
                    flexShrink: 0,
                  }}>
                    {avatarLetter}
                  </Avatar>
                  <Box sx={{ minWidth: 0 }}>
                    <Typography sx={{ fontFamily: subFamily, fontSize: 14, fontWeight: 700, color: mauve, lineHeight: 1.2 }}>
                      {auth.userName}
                    </Typography>
                    <Typography sx={{ fontFamily: subFamily, fontSize: 10, color: "#9a8888", wordBreak: "break-all", mt: 0.2 }}>
                      {auth.userEmail}
                    </Typography>
                  </Box>
                </Box>
              ) : (
                // Not logged in — Login button at top
                <Button
                  component={Link} to="/login"
                  onClick={() => setDrawerOpen(false)}
                  fullWidth
                  sx={{
                    fontFamily: subFamily, fontSize: "0.72rem", fontWeight: 600,
                    letterSpacing: "1.5px", textTransform: "uppercase",
                    color: "#fff", backgroundColor: primaryColor,
                    borderRadius: "8px", py: 1.3,
                    "&:hover": { backgroundColor: "#8a6060" },
                  }}
                >
                  Login
                </Button>
              )}
            </Box>

            {/* ── 2. Divider ── */}
            <Divider sx={{ borderColor: "#f0e8e8" }} />

            {/* ── 3. Nav Links ── */}
            <List sx={{ flex: 1, py: 0.5 }}>
              {navItems.map((item) => (
                <ListItem
                  button key={item.label}
                  component={Link} to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    py: 1.4, px: 2.5,
                    background: location.pathname === item.path ? `${subcolor}14` : "transparent",
                    borderLeft: location.pathname === item.path ? `3px solid ${primaryColor}` : "3px solid transparent",
                    "&:hover": { background: "#f8f3f1" },
                  }}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: subFamily, fontSize: "12px", fontWeight: 600,
                      color: location.pathname === item.path ? primaryColor : mauve,
                      letterSpacing: "0.14em", textTransform: "uppercase",
                    }}
                  />
                </ListItem>
              ))}
            </List>

            {/* ── 4. Divider + 5. Profile/Logout (only if logged in) ── */}
            {auth.loggedIn && (
              <>
                <Divider sx={{ borderColor: "#f0e8e8" }} />
                <Box sx={{ px: 2.5, py: 2, display: "flex", flexDirection: "column", gap: 1 }}>
                  <Button
                    component={Link} to="/profile"
                    onClick={() => setDrawerOpen(false)}
                    fullWidth
                    startIcon={<PersonIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      fontFamily: subFamily, fontSize: "0.72rem", fontWeight: 600,
                      letterSpacing: "1px", textTransform: "uppercase",
                      color: mauve, border: `1px solid ${subcolor}55`,
                      borderRadius: "8px", py: 1,
                      justifyContent: "flex-start", px: 2,
                      "&:hover": { background: "#f8f3f1" },
                    }}
                  >
                    My Profile
                  </Button>

                  <Button
                    onClick={handleLogout}
                    fullWidth
                    startIcon={<LogoutIcon sx={{ fontSize: 16 }} />}
                    sx={{
                      fontFamily: subFamily, fontSize: "0.72rem", fontWeight: 600,
                      letterSpacing: "1px", textTransform: "uppercase",
                      color: "#fff", backgroundColor: "#c03030",
                      borderRadius: "8px", py: 1,
                      justifyContent: "flex-start", px: 2,
                      "&:hover": { backgroundColor: "#a02020" },
                    }}
                  >
                    Logout
                  </Button>
                </Box>
              </>
            )}

          </Box>
        </Drawer>
      </ThemeProvider>

      {/* Animated FAB */}
      <Box sx={{
        position: "fixed", bottom: 20, right: 32, zIndex: 999,
        opacity: showFab ? 1 : 0,
        transform: showFab ? "scale(1) translateY(0)" : "scale(0.6) translateY(20px)",
        transition: "opacity 0.4s ease, transform 0.4s cubic-bezier(0.34,1.56,0.64,1)",
        pointerEvents: showFab ? "auto" : "none",
      }}>
        <Fab onClick={() => setFeedbackOpen(true)} sx={{
          background: slate, padding: 0.5, color: "#fff",
          boxShadow: `0 8px 32px ${subcolor}55`,
          "@keyframes bounceFloat": {
            "0%, 100%": { transform: "translateY(0px)" },
            "50%":      { transform: "translateY(-10px)" },
          },
          animation: "bounceFloat 2s ease-in-out infinite",
          "&:hover": { background: slate, animationPlayState: "paused" },
        }}>
          <FeedbackIcon />
        </Fab>
      </Box>

      <Feedback open={feedbackOpen} onClose={() => setFeedbackOpen(false)} />
    </>
  );
}
