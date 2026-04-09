import { useState } from "react";
import { Box, Typography, Container, Chip } from "@mui/material";
import { Link } from "react-router-dom/cjs/react-router-dom";

// ── Design Tokens ──
const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const bg = "#F8F3F1";
const btncolor = "#a17a7a";

const categories = [
  "All",
  "Wedding",
  "Birthday",
  "Corporate",
  "Housewarming",
  "Engagement",
];

const products = [
  {
    id: 1,
    name: "Toran",
    category: "Wedding",
    price: "1200/day",
    image: "/W_toran.png",
    tag: "Popular",
  },
  {
    id: 2,
    name: "Bell Hanging",
    category: "Housewarming",
    price: "800/day",
    image: "H_bell_hanging.png",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Party Tent",
    category: "Birthday",
    price: "1000/day",
    image:
      "/B_party_tent.png",
    tag: "",
  },
  {
    id: 4,
    name: "Banner Stand",
    category: "Birthday",
    price: "600/day",
    image: "/B_banner_stand.png",
    tag: "",
  },
  {
    id: 5,
    name: "Table number",
    category: "Corporate",
    price: "700/day",
    image: "/C_table_number.png",
    tag: "New",
  },
  {
    id: 6,
    name: "Hanging Chandelier",
    category: "Wedding",
    price: "2500/day",
    image:
      "/W_Hanging Chandeliers.png",
    tag: "Premium",
  },
  {
    id: 7,
    name: "Kalash Decoration",
    category: "Housewarming",
    price: "900/day",
    image: "/H_kalash_decoration.png",
    tag: "",
  },
  {
    id: 8,
    name: "Table Center",
    category: "Engagement",
    price: "3500/day",
    image:
      "/E_table_center.png",
    tag: "Popular",
  },
  {
    id: 9,
    name: "Decorative Toran",
    category: "Engagement",
    price: "1800/day",
    image:
      "/E_decorative_toran.jpg",
    tag: "",
  },
  {
    id: 10,
    name: "Flower centerpieces",
    category: "Corporate",
    price:"4000/day",
    image:
      "C_flower_centerpieces.png",
    tag: "Premium",
  },
  {
    id: 11,
    name: "Lightholder",
    category: "Housewarming",
    price: "800/day",
    image:
      "H_light_holder.png",
    tag: "",
  },
  {
    id: 12,
    name: "Floral hoop",
    category: "Engagement",
    price: "2200/day",
    image:
      "/E_Floral_hoop.png",
    tag: "Trending",
  },
];

const tagColors = {
  Popular: { bg: "#fce8e8", color: "#a14040" },
  Trending: { bg: "#fdf0e0", color: "#a16a20" },
  New: { bg: "#e8f5ee", color: "#2d7a50" },
  Premium: { bg: "#ede8fd", color: "#5a3a9a" },
};

export default function DecorRental() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <Box sx={{ background: bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');
        .decor-card:hover .card-img { transform: scale(1.07); }
        .decor-card:hover .card-overlay { opacity: 1; }
      `}</style>

      <Container maxWidth="xl">
        <Box sx={{ py: { xs: 6, md: 10 } }}>
          {/* ── Header ── */}
          <Box textAlign="center" mb={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mb: 1.5,
              }}
            >
              <Box
                sx={{
                  width: 32,
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
                  fontSize: "10px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: subcolor,
                }}
              >
                Browse Collection
              </Typography>
              <Box
                sx={{
                  width: 32,
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
                fontSize: { xs: "34px", sm: "46px", md: "58px" },
                fontWeight: 400,
                color: slate,
                lineHeight: 1.1,
                mb: 2,
              }}
            >
              Decor Rental
            </Typography>
            <Typography
              sx={{
                fontFamily: fontSans,
                fontWeight: 300,
                fontSize: { xs: "0.82rem", md: "0.9rem" },
                color: muted,
                maxWidth: 440,
                mx: "auto",
                lineHeight: 1.9,
              }}
            >
              Rent premium décor items for your special occasions — delivered,
              set up, and collected.
            </Typography>
          </Box>

          {/* ── Filter Chips ── */}
          <Box
            display="flex"
            justifyContent="center"
            flexWrap="wrap"
            gap={1.5}
            mb={6}
          >
            {categories.map((cat) => (
              <Chip
                key={cat}
                label={cat}
                onClick={() => setActive(cat)}
                sx={{
                  fontFamily: fontSans,
                  fontWeight: 500,
                  fontSize: "12px",
                  letterSpacing: "1px",
                  px: 1,
                  height: 34,
                  background: active === cat ? btncolor : "transparent",
                  color: active === cat ? "#fff" : muted,
                  border: `1px solid ${active === cat ? btncolor : subcolor + "55"}`,
                  borderRadius: "4px",
                  transition: "all 0.25s ease",
                  "&:hover": {
                    background: active === cat ? btncolor : `${subcolor}22`,
                    borderColor: btncolor,
                    color: active === cat ? "#fff" : btncolor,
                  },
                }}
              />
            ))}
          </Box>

          {/* ── Product Grid ── */}
          {/* ── Product Grid ── */}
<Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "repeat(4, 1fr)",
    },
    gap: { xs: 2, md: 3 },
  }}
>
  {filtered.map((item) => (
    <Box
      key={item.id}
      className="decor-card"
      sx={{
        position: "relative",
        borderRadius: "16px",
        border: `1px solid #ecddd8`,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(161,122,122,0.08)",
        transition: "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s",
        aspectRatio: "3/4",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: `0 20px 56px ${subcolor}30`,
          borderColor: `${subcolor}99`,
        },
        "&:hover .card-img": { transform: "scale(1.07)" },
        "&:hover .card-overlay": { opacity: 1 },
      }}
    >
      {/* ── Full Image ── */}
      <Box
        className="card-img"
        component="img"
        src={item.image}
        alt={item.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.55s ease",
        }}
      />

      {/* Always-on subtle gradient at bottom */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(115,95,95,0.18) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* Tag */}
      {item.tag && (
        <Box
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            background: tagColors[item.tag]?.bg,
            color: tagColors[item.tag]?.color,
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: "10px",
            letterSpacing: "0.5px",
            px: 1.2,
            py: 0.5,
            borderRadius: "4px",
            zIndex: 2,
          }}
        >
          {item.tag}
        </Box>
      )}

      {/* ── Hover Overlay with Details ── */}
      <Box
        className="card-overlay"
        sx={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(60,30,30,0.93) 0%, rgba(60,30,30,0.6) 45%, transparent 75%)",
          opacity: 0,
          transition: "opacity 0.35s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          p: { xs: 2, md: 2.5 },
          zIndex: 3,
        }}
      >
        {/* Category pill */}
        <Box
          sx={{
            display: "inline-block",
            alignSelf: "center",
            background: "rgba(196,154,154,0.25)",
            color: "#f0cece",
            fontFamily: fontSans,
            fontWeight: 500,
            fontSize: "10px",
            letterSpacing: "0.8px",
            textTransform: "uppercase",
            px: 1,
            py: 0.3,
            borderRadius: "3px",
            mb: 0.8,
          }}
        >
          {item.category}
        </Box>

        {/* Name */}
        <Typography
          sx={{
            fontFamily: fontSerif,
            fontWeight: 500,
            fontSize: { xs: "20px", md: "22px" },
            color: "#fff",
            lineHeight: 1.2,
            mb: 0.5,
         
          }}
        >
          {item.name}
        </Typography>

        {/* Price */}
        <Typography
          sx={{
            fontFamily: fontSans,
            fontWeight: 700,
            fontSize: "15px",
            color: "#f0cece",
            mb: 1.5,
            
          }}
        >
          ₹{item.price}
        </Typography>

        {/* Book Now Button */}
        <Box
          component={Link}
          to="/rentItem"
          sx={{
            textDecoration: "none",
            display: "block",
            width: "100%",
            background: btncolor,
            color: "#fff",
            fontFamily: fontSans,
            fontWeight: 600,
            fontSize: "11px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textAlign: "center",
            py: 1.2,
            borderRadius: "8px",
            border: `1px solid ${subcolor}55`,
            cursor: "pointer",
            transition: "all 0.25s ease",
            "&:hover": {
              background: slate,
              borderColor: slate,
              boxShadow: `0 4px 16px ${btncolor}44`,
            },
          }}
        >
          Book Now
        </Box>
      </Box>
    </Box>
  ))}
</Box>



          {/* Empty state */}
          {filtered.length === 0 && (
            <Box textAlign="center" py={10}>
              <Typography
                sx={{ fontFamily: fontSerif, fontSize: "28px", color: muted }}
              >
                No items found
              </Typography>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}
