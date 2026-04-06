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

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a";
const muted = "#735f5f";

// ── Data ──

const BOOKINGS = [
  {
    transactionId: "TXN8821",
    bookingId: "#BK0120",
    name: "Riya Patel",
    method: "UPI",
    dates: "Apr 1",
    amount: "₹1,500",
    status: "Paid",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    transactionId: "TXN8820",
    bookingId: "#BK0120",
    name: "Mehul Shah",
    method: "Card",
    dates: "Apr 6",
    amount: "₹2,000",
    status: "Refunded",
    sClr: { bg: "rgba(196,154,154,0.15)", tx: "#7a4a4a" },
  },
  {
    transactionId: "TXN8819",
    bookingId: "#BK0120",
    name: "Priya Desai",
    method: "UPI",
    dates: "Apr 4",
    amount: "₹800",
    status: "Paid",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    transactionId: "TXN8818",
    bookingId: "#BK0120",
    name: "Ankit Modi",
    method: "Net Banking",
    dates: "Mar 30",
    amount: "₹3,200",
    status: "Failed",
    sClr: { bg: "rgba(220, 50, 50, 0.15)", tx: "#8b0202" },
  },
  {
    transactionId: "TXN8810",
    bookingId: "#BK0120",
    name: "Kavita Joshi",
    method: "UPI",
    dates: "Apr 10",
    amount: "₹1,200",
    status: "Pending",
    sClr: { bg: "rgba(220,160,50,0.15)", tx: "#7a5800" },
  },
];

export default function Payment() {
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
          Payment
        </Typography>
        <Typography
          sx={{
            fontFamily: fontSans,
            fontSize: 12,
            color: muted,
            textAlign: "left",
            mt: 0.5,
            mb: 3.5,
          }}
        >
          View all transaction history and payment status
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
                  All Orders
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
                    placeholder="Search Payment"
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
                        "& fieldset": { borderColor: "rgba(196,154,154,0.22)" },
                        "&:hover fieldset": { borderColor: "#C49A9A" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#C49A9A",
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
                        Transaction Id
                      </TableCell>
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
                        Amount
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Method
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
                        Status
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {BOOKINGS.filter((item) =>
                      item.method.toLowerCase().includes(search.toLowerCase()),
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
                                color: slate,
                                fontFamily: fontSans,
                              }}
                            >
                              {row.transactionId}
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

                                color: slate,
                                fontFamily: fontSans,
                              }}
                            >
                              {row.name}
                            </Typography>
                          </Box>
                        </TableCell>

                        <TableCell sx={{ fontSize: 13, color: slate }}>
                          {row.amount}
                        </TableCell>

                        <TableCell sx={{ fontSize: 13, color: slate }}>
                          {row.method}
                        </TableCell>

                        {!isMobile && (
                          <TableCell sx={{ fontSize: 13, color: slate }}>
                            {row.dates}
                          </TableCell>
                        )}

                        <TableCell>
                          <Box
                            sx={{
                              background: row.sClr.bg,
                              color: row.sClr.tx,
                              fontSize: 13,
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
