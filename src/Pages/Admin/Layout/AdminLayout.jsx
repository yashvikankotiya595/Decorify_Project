// AdminLayout.jsx
//
// Desktop >= 900px:
//   [Sidebar | Topbar + Content]
//
// Mobile < 900px:
//   [Gradient TopBar with ☰ menu icon + page title]
//   [Content]
//   ☰ click karo → full sidebar drawer slide in thay

import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Badge,
  Avatar,
  useMediaQuery,
} from "@mui/material";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import Sidebar, { MobileDrawer, NAV_SECTIONS } from "./Sidebar";

import Dashboard from "../AdminPages/Dashboard";
import Product from "../AdminPages/Product";
import Admin_category from "../AdminPages/Admin_category";
import Orders from "../AdminPages/Orders";
import Returns from "../AdminPages/Returns";
import Refunds from "../AdminPages/Refunds";
import Users from "../AdminPages/Users";
import Payment from "../AdminPages/Payment";
import Contact from "../AdminPages/Contact";
import Settings from "../AdminPages/Settings";
// Page id → label
const getPageLabel = (id) =>
  NAV_SECTIONS.flatMap((s) => s.items).find((i) => i.id === id)?.label ??
  "Dashboard";

// ── Topbar colors ────────────────────────────────────────────
const border = "rgba(196,154,154,0.22)";

const AdminLayout = () => {
  const [activePage, setActivePage] = useState("dashboard");
  const [drawerOpen, setDrawerOpen] = useState(false); // mobile drawer
  const [collapsed, setCollapsed] = useState(false); // desktop collapse (optional)

  const isMobile = useMediaQuery("(max-width:900px)");
  const pageLabel = getPageLabel(activePage) || "Dashboard";

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* ══ DESKTOP SIDEBAR (>= 900px) ══════════════════════ */}
      <Sidebar activePage={activePage} onNavigate={setActivePage} />

      {/* ══ MOBILE DRAWER (< 900px) — hamburger click thay tyare open ══ */}
      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activePage={activePage}
        onNavigate={setActivePage}
      />

      {/* ══ MAIN AREA ════════════════════════════════════════ */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        {/* ── MOBILE TOPBAR (< 900px) ───────────────────────── */}
        {/* Gradient strip with hamburger + page title */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            alignItems: "center",
            justifyContent: "space-between",
            background: "linear-gradient(160deg, #2a1a1a 0%, #6b5050 100%)",
            px: 2,
            py: 1.5,
            flexShrink: 0,
          }}
        >
          {/* Hamburger button */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              width: 38,
              height: 38,
              borderRadius: "10px",
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.22)",
              color: "#fff",
              "&:hover": { background: "rgba(255,255,255,0.2)" },
            }}
          >
            <MenuRoundedIcon sx={{ fontSize: 20 }} />
          </IconButton>

          {/* Page title */}
          <Typography
            sx={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              fontWeight: 600,
              color: "#fff",
            }}
          >
            {pageLabel}
          </Typography>
        </Box>

        {/* ── PAGE CONTENT ─────────────────────────────────── */}
        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            p: { xs: "16px", md: "24px 28px" },
            "&::-webkit-scrollbar": { width: 5 },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(196,154,154,0.3)",
              borderRadius: 10,
            },
          }}
        >
          {activePage === "dashboard" && <Dashboard />}
          {/* Baaki pages add karo same pattern ma: */}
          {activePage === "products" && <Product />}
          {activePage === "categories" && <Admin_category />}
          {activePage === "orders" && <Orders />}
          {activePage === "returns" && <Returns />}
          {activePage === "refunds" && <Refunds />}
          {activePage === "users" && <Users />}
          {activePage === "payments" && <Payment />}
          {activePage === "contact" && <Contact />}
          {activePage === "settings" && <Settings />}
        </Box>
      </Box>
    </Box>
  );
};

export default AdminLayout;
