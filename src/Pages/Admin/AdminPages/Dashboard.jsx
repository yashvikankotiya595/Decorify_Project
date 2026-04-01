import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Avatar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
} from "@mui/material";

import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const subcolor = "#C49A9A";
const slate = "#a17a7a";
const muted = "#735f5f";

// ── Data ──
const STAT_CARDS = [
  {
    label: "Total Revenue",
    value: "₹2.4L",
    sub: "12% this month",
    trend: "up",
    accentColor: "#C49A9A",
    iconBg: "rgba(196,154,154,0.12)",
    iconColor: "#C49A9A",
    icon: <CurrencyRupeeRoundedIcon sx={{ fontSize: 17 }} />,
  },
  {
    label: "Total Orders",
    value: "120",
    sub: "5 today",
    trend: "up",
    accentColor: "#7090c0",
    iconBg: "rgba(100,130,200,0.1)",
    iconColor: "#5a80c0",
    icon: <AssignmentRoundedIcon sx={{ fontSize: 17 }} />,
  },
  {
    label: "Total Products",
    value: "85",
    sub: "6 categories · 3 low stock",
    accentColor: "#80b870",
    iconBg: "rgba(100,180,100,0.1)",
    iconColor: "#60a050",
    icon: <Inventory2RoundedIcon sx={{ fontSize: 17 }} />,
  },
  {
    label: "Pending Returns",
    value: "4",
    sub: "3 need inspection",
    trend: "down",
    accentColor: "#d08060",
    iconBg: "rgba(210,130,80,0.12)",
    iconColor: "#c07050",
    icon: <ReplayRoundedIcon sx={{ fontSize: 17 }} />,
  },
];

const BOOKINGS = [
  {
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

export default function Dashboard() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box>
      {/* ── Page Header ── */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          mb: 2.75,
          flexWrap: "wrap",
          gap: 1.5,
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: fontSerif,
              fontSize: 22,
              fontWeight: 600,
              color: slate,
            }}
          >
            Welcome back, Admin 👋
          </Typography>
          <Typography
            sx={{
              fontSize: 11,
              color: muted,
              mt: 0.25,
              fontFamily: "'Montserrat',sans-serif",
            }}
          >
            Here's what's happening with your business today.
          </Typography>
        </Box>
        <Button
          startIcon={<DownloadRoundedIcon sx={{ fontSize: 15 }} />}
          sx={{
            background: slate,
            color: "#fff",
            borderRadius: "8px",
            px: 1,
            py: 1,
            fontSize: 13,
            fontWeight: 600,
            fontFamily: fontSans,
            textTransform: "none",
            "&:hover": { background: muted },
          }}
        >
          Export Report
        </Button>
      </Box>

      {/* ── Stat Cards (Mapped directly) ── */}
      <Grid container spacing={2} sx={{ mb: 2.75 }}>
        {STAT_CARDS.map((card, index) => (
          <Grid item size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <Card
              elevation={0}
              sx={{
                border: "1px solid rgba(196,154,154,0.22)",
                borderRadius: "14px",
                p: "16px",
                height: "auto",

                position: "relative",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                transition: "transform 0.2s, box-shadow 0.2s",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 32px rgba(61,42,42,0.12)",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: card.accentColor,
                },
              }}
            >
              <CardContent sx={{ p: "0 !important" }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    width: 40, // સાઈઝ થોડી વધારી શકાય
                    height: 40,
                    borderRadius: "9px",
                    background: card.iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: card.iconColor,
                  }}
                >
                  {card.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: slate,
                    mb: 1,
                    fontFamily: fontSans,
                    textAlign: "left",
                  }}
                >
                  {card.label}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: 30,
                    fontWeight: 600,
                    color: muted,
                    lineHeight: 1,
                    textAlign: "left",
                  }}
                >
                  {card.value}
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                    mt: 0.75,
                  }}
                >
                  {card.trend === "up" && (
                    <TrendingUpRoundedIcon
                      sx={{ fontSize: 13, color: "#5a9a6e" }}
                    />
                  )}
                  {card.trend === "down" && (
                    <TrendingDownRoundedIcon
                      sx={{ fontSize: 13, color: "#c05a5a" }}
                    />
                  )}
                  <Typography
                    sx={{
                      fontSize: 10,
                      fontFamily: fontSans,
                      color:
                        card.trend === "up"
                          ? "#5a9a6e"
                          : card.trend === "down"
                            ? "#c05a5a"
                            : "#9a8888",
                    }}
                  >
                    {card.sub}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* ── Main Grid ── */}
      <Grid container spacing={2.25}>
        <Grid item size={{ xs: 12 }}>
          <Card
            elevation={0}
            sx={{
              border: "1px solid rgba(196,154,154,0.22)",
              borderRadius: "14px",
              overflow: "hidden",
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
                Recent Bookings
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                
                <Button
                  variant="outlined"
                  size="small"
                  sx={{
                    color: "#fff",
                    background: slate,
                    fontSize: 12,
                    py: 0.5,
                    px: 1.5,
                    border:"none",
                    borderRadius: "6px",
                    textTransform: "none",
                    fontFamily: fontSans,
                    "&:hover": {
                      background: muted,
                    },
                  }}
                >
                  View All
                </Button>
              </Box>
            </Box>

            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      sx={{
                        color: muted,
                        fontWeight:600
                      }}
                    >
                      Customer
                    </TableCell>
                    <TableCell
                      sx={{
                        color: muted,
                        fontWeight:600
                      }}
                    >
                      Product
                    </TableCell>
                    {!isMobile && (
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight:600
                        }}
                      >
                        Dates
                      </TableCell>
                    )}
                    <TableCell
                      sx={{
                        color: muted,
                        fontWeight:600
                      }}
                    >
                      Amount
                    </TableCell>
                    <TableCell
                      sx={{
                        color: muted,
                        fontWeight:600
                      }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {BOOKINGS.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "&:hover td": { background: "rgba(245,239,236,0.6)" },
                      }}
                    >
                      <TableCell>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          <Avatar
                            sx={{
                              width: 26,
                              height: 26,
                              fontSize: 11,
                              fontFamily: fontSerif,
                              fontWeight: 600,
                              background: `linear-gradient(135deg,${row.clr[0]},${row.clr[1]})`,
                            }}
                          >
                            {row.init}
                          </Avatar>
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
                      <TableCell sx={{ fontSize: 13, color: slate, fontWeight: 600, }}>
                        {row.product}
                      </TableCell>
                      {!isMobile && (
                        <TableCell sx={{ fontSize: 13, color: slate, fontWeight: 600, }}>
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
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
