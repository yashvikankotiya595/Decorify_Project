import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import {
  Box,
  Typography,
  IconButton,
  Chip,
  Modal,
  Fade,
  Backdrop,
  Container,
  createTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const btncolor = "#a17a7a";
const bg = "#1a1212";
const bgCard = "#221818";
const border = `1px solid ${slate}44`;

const images = [
  {
    id: 1,
    src: "/W_bajoth.png",
    title: "Elegant Wedding",
    category: "Wedding",
    span: { xs: "span 2", md: "span 2" },
    height: { xs: 460, md: 500 },
  },
  {
    id: 2,
    src: "/selfie_booth.png",
    title: "Selfie Booth Stand",
    category: "Birthday",
    span: { xs: "span 1", md: "span 1" },
    height: { xs: 400, md: 500 },
  },
  {
    id: 3,
    src: "https://i.pinimg.com/1200x/49/02/72/490272a9bade315d76f8eb8e00dad452.jpg",
    title: "Mini Throne Chair",
    category: "Birthday",
    span: { xs: "span 1", md: "span 1" },
    height: { xs: 400, md: 500 },
  },
  {
    id: 4,
    src: "/B_banner_stand.png",
    title: "Banner Stand",
    category: "Corporate",
    span: { xs: "span 2", md: "span 2" },
    height: { xs: 640, md: 500 },
  },
  {
    id: 5,
    src: "/Ringlight.png",
    title: "Ringlight",
    category: "Corporate",
    span: { xs: "span 1", md: "span 1" },
    height: { xs: 500, md: 500 },
  },
  {
    id: 6,
    src: "https://i.pinimg.com/736x/4a/d0/e8/4ad0e88a6bcac3562f21fdf61368debb.jpg",
    title: "Hanging Chandeliers",
    category: "Wedding",
    span: { xs: "span 1", md: "span 1" },
    height: { xs: 500, md: 500 },
  },
  // {
  //   id: 7,
  //   src: "/kalash_decoration.png",
  //   title: "Kalash",
  //   category: "Housewarming",
  //   span: { xs: "span 1", md: "span 1" },
  //   height: { xs: 400, md: 500 },
  // },
];

const categories = ["All", "Wedding", "Birthday", "Corporate"];

const Gallary = () => {
  const [active, setActive] = useState("All");
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const filtered =
    active === "All" ? images : images.filter((i) => i.category === active);

  const openModal = (idx) => {
    setCurrent(idx);
    setOpen(true);
  };
  const prev = () =>
    setCurrent((c) => (c - 1 + filtered.length) % filtered.length);
  const next = () => setCurrent((c) => (c + 1) % filtered.length);

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
        <Container maxWidth="xl">
          <Box sx={{ minHeight: "100vh", py: 7 }}>
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

            {/* ── Header ── */}
            <Box textAlign="center" mb={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 1,
                  mb: 1,
                }}
              >
                <Box
                  sx={{
                    width: 28,
                    height: "1px",
                    bgcolor: subcolor,
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
                  Inspiration
                </Typography>
                <Box
                  sx={{
                    width: 28,
                    height: "1px",
                    bgcolor: subcolor,
                    display: {
                      sm: "flex",
                      xs: "none",
                    },
                  }}
                />
              </Box>

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
                  color: slate,
                  lineHeight: 1.1,
                  mb: 2,
                  letterSpacing: "-0.5px",
                }}
              >
                Gallery &amp; Inspiration
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
                Real setups from real events — get inspired for your upcoming
                celebration.
              </Typography>
            </Box>

            {/* ── Filter Chips ── */}
            <Box
              display="flex"
              justifyContent="center"
              flexWrap="wrap"
              gap={1.5}
              mb={5}
            >
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  onClick={() => setActive(cat)}
                  sx={{
                    fontFamily: fontSans,
                    fontWeight: 500,
                    fontSize: 12,
                    letterSpacing: 1.5,
                    px: 1,
                    background: active === cat ? btncolor : "transparent",
                    color: active === cat ? "#fff" : muted,
                    border: `1px solid ${active === cat ? btncolor : slate + "55"}`,
                    borderRadius: "2px",
                    transition: "all 0.25s ease",
                    "&:hover": {
                      background: active === cat ? btncolor : `${slate}22`,
                      borderColor: btncolor,
                    },
                  }}
                />
              ))}
            </Box>

            {/* ── Masonry Grid ── */}
            {/* ✅ Image width vadharvी: span "span 2" → "span 3" (full width)  */}
            {/* ✅ Image height vadharvī: height md: 500 → md: 700             */}
            {/* ✅ Columns vadharvā: repeat(3, 1fr) → repeat(4, 1fr)           */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  sm: "1fr",
                  md: "repeat(3, 1fr)",
                },
                gap: 2,
              }}
            >
              {filtered.map((img, idx) => (
                <Box
                  key={img.id}
                  onClick={() => openModal(idx)}
                  sx={{
                    gridColumn: { xs: "span 1", sm: "span 1", md: img.span },
                    height: img.height,
                    borderRadius: "4px",
                    overflow: "hidden",
                    position: "relative",
                    cursor: "pointer",
                    border: border,
                    transition: "border-color 0.3s, box-shadow 0.3s",
                    "&:hover .overlay": { opacity: 1 },
                    "&:hover img": { transform: "scale(1.06)" },
                    "&:hover": {
                      borderColor: `${subcolor}88`,
                      boxShadow: `0 8px 40px ${slate}44`,
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={img.src}
                    alt={img.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.55s ease",
                      filter: "brightness(0.85) saturate(0.8)",
                    }}
                  />

                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      inset: 0,
                      background: `linear-gradient(to top, ${bg}ee 0%, ${bg}44 55%, transparent 100%)`,
                      opacity: 0,
                      transition: "opacity 0.35s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      p: 2.5,
                    }}
                  >
                    <Box
                      display="flex"
                      alignItems="flex-end"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: fontSans,
                            fontWeight: 500,
                            fontSize: 10,
                            letterSpacing: 3,
                            color: muted,
                            textTransform: "uppercase",
                            mb: 0.5,
                          }}
                        >
                          {img.category}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: fontSerif,
                            fontWeight: 600,
                            fontSize: { xs: 16, md: 20 },
                            color: subcolor,
                            textShadow: `0 2px 8px ${slate}99`,
                            lineHeight: 1.2,
                          }}
                        >
                          {img.title}
                        </Typography>
                      </Box>
                      <ZoomInIcon
                        sx={{
                          color: subcolor,
                          fontSize: 22,
                          opacity: 0.8,
                          mb: 0.3,
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>

            {/* ── Lightbox Modal ── */}
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              closeAfterTransition
              slots={{ backdrop: Backdrop }}
              slotProps={{ backdrop: { timeout: 300 } }}
            >
              <Fade in={open}>
                <Box
                  sx={{
                    position: "fixed",
                    inset: 0,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${bg}f2`,
                    backdropFilter: "blur(16px)",
                  }}
                >
                  <IconButton
                    onClick={() => setOpen(false)}
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 24,
                      color: muted,
                      background: `${bgCard}cc`,
                      border: border,
                      "&:hover": { color: subcolor, borderColor: subcolor },
                    }}
                  >
                    <CloseIcon fontSize="small" />
                  </IconButton>

                  <IconButton
                    onClick={prev}
                    sx={{
                      position: "absolute",
                      left: { xs: 8, md: 32 },
                      color: muted,
                      background: `${bgCard}cc`,
                      border: border,
                      "&:hover": { color: subcolor, borderColor: subcolor },
                    }}
                  >
                    <ArrowBackIosNewIcon fontSize="small" />
                  </IconButton>

                  <Box
                    sx={{
                      maxWidth: { xs: "90vw", md: "68vw" },
                      borderRadius: "4px",
                      overflow: "hidden",
                      border: `1px solid ${slate}55`,
                      boxShadow: `0 32px 80px ${slate}22`,
                    }}
                  >
                    <Box
                      component="img"
                      src={filtered[current]?.src}
                      alt={filtered[current]?.title}
                      sx={{
                        width: "100%",
                        maxHeight: "68vh",
                        objectFit: "cover",
                        display: "block",
                        filter: "brightness(0.9) saturate(0.85)",
                      }}
                    />
                    <Box
                      sx={{
                        background: bgCard,
                        borderTop: border,
                        px: 3,
                        py: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Box>
                        <Typography
                          sx={{
                            fontFamily: fontSans,
                            fontSize: 10,
                            letterSpacing: 3,
                            color: muted,
                            textTransform: "uppercase",
                            mb: 0.3,
                          }}
                        >
                          {filtered[current]?.category}
                        </Typography>
                        <Typography
                          sx={{
                            fontFamily: fontSerif,
                            fontWeight: 600,
                            fontSize: 22,
                            color: subcolor,
                            textShadow: `0 2px 8px ${slate}88`,
                          }}
                        >
                          {filtered[current]?.title}
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 12,
                          color: muted,
                          letterSpacing: 2,
                        }}
                      >
                        {current + 1} / {filtered.length}
                      </Typography>
                    </Box>
                  </Box>

                  <IconButton
                    onClick={next}
                    sx={{
                      position: "absolute",
                      right: { xs: 8, md: 32 },
                      color: muted,
                      background: `${bgCard}cc`,
                      border: border,
                      "&:hover": { color: subcolor, borderColor: subcolor },
                    }}
                  >
                    <ArrowForwardIosIcon fontSize="small" />
                  </IconButton>
                </Box>
              </Fade>
            </Modal>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Gallary;
