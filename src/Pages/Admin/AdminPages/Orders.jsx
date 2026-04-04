import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  createTheme,
  InputAdornment,
  Button,
} from "@mui/material";

import { ThemeProvider } from "@mui/material/styles";
import { Search } from "@mui/icons-material";

import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a";
const muted = "#735f5f";

// ── Data ──

const BOOKINGS = [
  {
    bookingId:"#BK0120",
    name: "Riya Patel",
    init: "R",
    clr: ["#6a3a3a", "#c49a9a"],
    product: "Flower Arch",
    dates: "Apr 3–5",
    amount: "₹1,500",
    status: "Confirmed",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    bookingId:"#BK0120",
    name: "Mehul Shah",
    init: "M",
    clr: ["#2a4a6a", "#5a80a0"],
    product: "LED Curtain",
    dates: "Apr 6–7",
    amount: "₹2,000",
    status: "Booked",
    sClr: { bg: "rgba(196,154,154,0.15)", tx: "#7a4a4a" },
  },
  {
    bookingId:"#BK0120",
    name: "Priya Desai",
    init: "P",
    clr: ["#4a2a6a", "#9a70c0"],
    product: "Balloon Setup",
    dates: "Apr 4",
    amount: "₹800",
    status: "Out for Del.",
    sClr: { bg: "rgba(120,90,180,0.13)", tx: "#5a3a9a" },
  },
  {
    bookingId:"#BK0120",
    name: "Ankit Modi",
    init: "A",
    clr: ["#3d2a2a", "#6b5050"],
    product: "Photo Booth",
    dates: "Mar 30–31",
    amount: "₹3,200",
    status: "Returned",
    sClr: { bg: "rgba(80,120,200,0.13)", tx: "#3050a0" },
  },
  {
    bookingId:"#BK0120",
    name: "Kavita Joshi",
    init: "K",
    clr: ["#3a5a2a", "#80b060"],
    product: "Fairy Lights",
    dates: "Apr 8–10",
    amount: "₹1,200",
    status: "Pending",
    sClr: { bg: "rgba(220,160,50,0.15)", tx: "#7a5800" },
  },
];

export default function Orders() {
  const [search, setSearch] = useState("");

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints
      },
    },
  });
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {/* ── Page Header ── */}
        <Typography
          sx={{
            fontFamily: fontSerif,
            fontSize: 34,
            fontWeight: 600,
            color: slate,
            lineHeight: 1,
            textAlign: "left",
          }}
        >
          Orders
        </Typography>
        <Typography
          sx={{
            fontFamily: fontSans,
            fontSize: 12,
            color: muted,
            textAlign: "left",
            letterSpacing: 1,
            mt: 0.5,
            mb: 3.5,
          }}
        >
          Track all customer bookings and manage their status
        </Typography>

        {/* ── Main Grid ── */}
        <Grid container spacing={2.25}>
          <Grid item size={{ xs: 12 }}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid rgba(196,154,154,0.22)",
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: 4,
              }}
            >
              {/* Header (Direct implementation instead of PanelHead) */}
              <Box
                sx={{
                  px: 2.5,
                  py: 2,
                  borderBottom: "1px solid rgba(196,154,154,0.22)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: 18,
                    fontWeight: 600,
                    color: muted,
                  }}
                >
                  All Bookings
                </Typography>

                {/* 🔍 Search Bar */}
                <Box
                  sx={{
                    border: "1px solid rgba(196,154,154,0.3)",
                    borderRadius: "8px",

                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <TextField
                    size="small"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Bookings.."
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Search sx={{ fontSize: 15, color: muted }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      width: 200,
                      "& .MuiOutlinedInput-root": {
                        fontFamily: fontSans,
                        fontSize: 13,
                        borderRadius: "8px",
                        background: "#F5EFEc",
                        "& fieldset": { borderColor: "#F5EFEc" },
                        "&:hover fieldset": { borderColor: slate },
                        "&.Mui-focused fieldset": {
                          borderColor: slate,
                          borderWidth: "1px",
                        },
                      },
                      "& .MuiInputBase-input": {
                        padding: "9px 13px",
                        color: slate,
                      },
                    }}
                  />
                </Box>
              </Box>

              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                        <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Booking Id
                      </TableCell>
                         
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Customer
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Product
                      </TableCell>
                      {!isMobile && (
                        <TableCell
                          sx={{
                            color: muted,
                            fontWeight: 600,
                          }}
                        >
                          Dates
                        </TableCell>
                      )}
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Amount
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Status
                      </TableCell>

                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Actions
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {BOOKINGS.filter((item) =>
                      item.product.toLowerCase().includes(search.toLowerCase()),
                    ).map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:hover td": { background: "rgba(245,239,236,0.6)" },
                        }}
                      >
                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: slate,
                                fontFamily: fontSans,
                              }}
                            >
                              {row.bookingId}
                            </Typography>
                            
                          </Box>
                        </TableCell>

                        <TableCell>
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                            }}
                          >
                            <Typography
                              sx={{
                                fontSize: 13,
                                fontWeight: 600,
                                color: slate,
                                fontFamily: fontSans,
                              }}
                            >
                              {row.name}
                            </Typography>
                            
                          </Box>
                        </TableCell>

                        <TableCell
                          sx={{ fontSize: 13, color: slate, fontWeight: 600 }}
                        >
                          {row.product}
                        </TableCell>

                        {!isMobile && (
                          <TableCell
                            sx={{ fontSize: 13, color: slate, fontWeight: 600 }}
                          >
                            {row.dates}
                          </TableCell>
                        )}

                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: slate,
                              fontFamily: fontSans,
                            }}
                          >
                            {row.amount}
                          </Typography>
                        </TableCell>

                        <TableCell>
                          <Box
                            sx={{
                              background: row.sClr.bg,
                              color: row.sClr.tx,
                              fontSize: 12,
                              fontWeight: 700,
                              px: 1.125,
                              py: 0.375,
                              borderRadius: 20,
                              display: "inline-block",
                              fontFamily: fontSans,
                            }}
                          >
                            {row.status}
                          </Box>
                        </TableCell>

                        <TableCell>
  <Box
    onClick={() => {/* pachi backend sathe connect karjo */}}
    sx={{
      display: "inline-block",
      px: 2, py: 0.6,
      borderRadius: "20px",
      fontSize: "12px",
      fontWeight: 700,
      fontFamily: fontSans,
      background: slate,
      color: "#fff",
      cursor: "pointer",
      transition: "background 0.2s",
      "&:hover": { background: muted },
    }}
  >
    {/* Status mujab button label */}
    {row.status === "Confirmed" ? "View" :
     row.status === "Booked" ? "Approve" :
     row.status === "Out for Del." ? "Track" :
     row.status === "Returned" ? "Inspect" :
     "Approve"}
  </Box>
</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}
