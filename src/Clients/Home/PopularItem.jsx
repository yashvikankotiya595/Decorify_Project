import { Box, Typography, Button, createTheme,Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom/cjs/react-router-dom";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#735f5f";
const muted = "#9a8888";
const btncolor = "#a17a7a";

const items = [
  {
    img: "/popularimg1.png",
    name: "Flower Arch",
    price: "₹1,200 / day",
    deposit: "₹2,000",
  },
  {
    img: "/popularimg3.png",
    name: "Kandhi Set",
    price: "₹2000 / day",
    deposit: "₹3,000",
  },
  {
    img: "/popularimg2.png",
    name: "Decorative Toran",
    price: "₹500 / day",
    deposit: "₹1,000",
  },

  {
    img: "https://i.pinimg.com/736x/fc/90/e4/fc90e4a741bd66679041c18d2adf872c.jpg",
    name: "Jute Frame Decor",
    price: "₹1,500 / day",
    deposit: "₹2,000",
  },
];

const PopularItem = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints
        B950: 950,
        B750: 750,
        B700: 700,
        B500: 500,
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
            py: { xs: 5, md: 10 },
            px: 2,
            my: { xs: 5, md: 7 },
            backgroundColor: "#F8F3F1",
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
              Most Rented
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
              fontSize: { xs: "30px", B334: "35px", sm: "40px", md: "50px" },
              fontWeight: 400,
              color: slate,
              lineHeight: 1.1,
              mb: 2.5,
              letterSpacing: "-0.5px",
            }}
          >
            Popular Rental Items
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
            Our most loved decoration pieces — booked again and again for their
            stunning visual impact.
          </Typography>

         <Grid container spacing={2}>
            
          
            {items.map((item, i) => (
              <Grid 
      key={item.id} 
      size={{ 
        xs: 12,     // 0-600px માં 1 કાર્ડ
        B500: 6,      // 600-900px માં 2 કાર્ડ (તમારા 500px ની નજીક)
        md: 3       // 900px+ માં 4 કાર્ડ
      }}
    >
              <Box
                key={i}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  overflow: "hidden",
                  border: "1px solid #ede0e0",
                  display: "flex",
                  flexDirection: "column",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 20px 48px rgba(47,79,79,0.1)",
                    borderColor: muted,
                  },
                }}
              >
                {/* ── Image ── */}

                <Box sx={{ overflow: "hidden" }}>
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.name}
                    sx={{
                      width: "100%",
                      height: {
                        xs: "300px",
                        sm: "300px",
                        B700: "350px",
                        B750: "400px",
                        md: "300px",
                      },
                      objectFit: "cover",
                      display: "block",
                      filter: "saturate(0.88)",
                      transition: "transform 0.5s ease, filter 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        filter: "saturate(1.1)",
                      },
                    }}
                  />
                </Box>

                {/* ── Body ── */}

                <Box
                  sx={{
                    p: 2,
                    pb: 1,
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: { xs: "16px", md: "17px" },
                      fontWeight: 600,
                      color: slate,
                      mb: "6px",
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "13px",
                      fontWeight: 600,
                      color: subcolor,
                      letterSpacing: "0.7px",
                    }}
                  >
                    {item.price}
                  </Typography>
                </Box>

                {/* ── Rent Now Button ── */}
                <Box sx={{ px: 2, pb: 2, mt: "auto" }}>
                  <Button
                  component={Link}
                  to="/rentItem"
                    fullWidth
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "0.72rem",
                      fontWeight: 700,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      borderRadius: "6px",
                      py: 1.4,
                      backgroundColor: btncolor,
                      color: "#fff",
                      boxShadow: "0 6px 18px rgba(47,79,79,0.25)",

                      transition: "all 0.25s ease",
                      "&:hover": {
                        backgroundColor: slate,
                        transform: "translateY(-1px)",
                      },
                      "&.Mui-disabled": {
                        backgroundColor: "#d0d0d0",
                        color: "#aaa",
                      },
                    }}
                  >
                    Rent Now
                  </Button>
                </Box>
              </Box>
               </Grid>
            ))}
          </Grid>



        </Box>
      </ThemeProvider>
    </>
  );
};

export default PopularItem;
