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
    name: "Riya Patel",
    email: "Riya@gmail.com",
    join: "Apr 2021",
    amount: "₹1,500",
    status: "Active",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    name: "Mehul Shah",
    email: "mehul@gmail.com",
    join: "Apr 2022",
    amount: "₹2,000",
    status: "Active",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    name: "Priya Desai",
    email: "priya@gmail.com",
    join: "Apr 2021",
    amount: "₹800",
    status: "Active",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    name: "Ankit Modi",
    email: "ankit@gmail.com",
    join: "Mar 2024",
    amount: "₹3,200",
    status: "Active",
    sClr: { bg: "rgba(90,154,110,0.14)", tx: "#2e7050" },
  },
  {
    name: "Kavita Joshi",
    email: "kavita@gmail.com",
    join: "Apr 2025",
    amount: "₹1,200",
    status: "Inactive",
    sClr: { bg: "rgba(220, 50, 50, 0.15)", tx: "#8b0202" },
  },
   {
    name: "Diya Joshi",
    email: "diya@gmail.com",
    join: "Apr 2026",
    amount: "₹1,200",
    status: "Inactive",
    sClr: { bg: "rgba(220, 50, 50, 0.15)", tx: "#8b0202" },
  },
];

export default function Users() {
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
          Users
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
          Manage all users and their status
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
                  All Users
                </Typography>

               
            
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
                        Customer
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                        }}
                      >
                        Email
                      </TableCell>
                      {!isMobile && (
                        <TableCell
                          sx={{
                            color: muted,
                            fontWeight: 600,
                          }}
                        >
                          Joined
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
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {BOOKINGS.filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase()),
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
                              {row.name}
                            </Typography>
                          </Box>
                        </TableCell>

                        <TableCell
                          sx={{ fontSize: 13, color: slate }}
                        >
                          {row.email}
                        </TableCell>

                        {!isMobile && (
                          <TableCell
                            sx={{ fontSize: 13, color: slate }}
                          >
                            {row.join}
                          </TableCell>
                        )}

                        <TableCell>
                          <Typography
                            sx={{
                              fontSize: 13,
                          
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
