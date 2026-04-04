// Sidebar.jsx
// Desktop >= 900px → permanent sidebar
// Mobile  <  900px → sidebar hidden, hamburger button AdminLayout ma show thay
//                    click karo → full sidebar drawer open thay

import { useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";

import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import Inventory2RoundedIcon from "@mui/icons-material/Inventory2Rounded";
import CategoryRoundedIcon from "@mui/icons-material/CategoryRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import ReplayRoundedIcon from "@mui/icons-material/ReplayRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import CreditCardRoundedIcon from "@mui/icons-material/CreditCardRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

// ── Nav config ───────────────────────────────────────────────
export const NAV_SECTIONS = [
  {
    label: "Main",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        icon: <DashboardRoundedIcon sx={{ fontSize: 18 }} />,
      },
      {
        id: "products",
        label: "Products",
        icon: <Inventory2RoundedIcon sx={{ fontSize: 18 }} />,
        badge: 85,
      },
      {
        id: "categories",
        label: "Categories",
        icon: <CategoryRoundedIcon sx={{ fontSize: 18 }} />,
      },
    ],
  },
  {
    label: "Operations",
    items: [
      {
        id: "orders",
        label: "Orders",
        icon: <AssignmentRoundedIcon sx={{ fontSize: 18 }} />,
        badge: 120,
      },
      {
        id: "returns",
        label: "Returns",
        icon: <ReplayRoundedIcon sx={{ fontSize: 18 }} />,
        badge: 4,
      },
      {
        id: "refunds",
        label: "Refunds",
        icon: <CurrencyRupeeRoundedIcon sx={{ fontSize: 18 }} />,
        badge: 3,
      },
    ],
  },
  {
    label: "Management",
    items: [
      {
        id: "users",
        label: "Users",
        icon: <PeopleRoundedIcon sx={{ fontSize: 18 }} />,
      },
      {
        id: "payments",
        label: "Payments",
        icon: <CreditCardRoundedIcon sx={{ fontSize: 18 }} />,
      },
      {
        id: "contact",
        label: "Contact",
        icon: <PhotoLibraryRoundedIcon sx={{ fontSize: 18 }} />,
      },
      {
        id: "settings",
        label: "Settings",
        icon: <SettingsRoundedIcon sx={{ fontSize: 18 }} />,
      },
    ],
  },
];

// Page label lookup helper
export const getPageLabel = (id) =>
  NAV_SECTIONS.flatMap((s) => s.items).find((i) => i.id === id)?.label ?? "";

// ── Colors ───────────────────────────────────────────────────
const SB = {
  grad: "linear-gradient(165deg, #2a1a1a 0%, #6b5050 100%)",
  active: "rgba(255,255,255,0.15)",
  hover: "rgba(255,255,255,0.08)",
  muted: "rgba(255,255,255,0.5)",
  divider: "rgba(255,255,255,0.1)",
};

// ─────────────────────────────────────────────────────────────
//  SidebarContent — actual nav UI, reused in both drawers
// ─────────────────────────────────────────────────────────────
function SidebarContent({ activePage, onNavigate, onClose, showClose }) {
  return (
    <Box
      sx={{
        width: 240,
        height: "100%",
        background: SB.grad,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Brand ── */}
      <Box
        sx={{
          px: 2.25,
          py: 2.25,
          borderBottom: `1px solid ${SB.divider}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexShrink: 0,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* Logo box */}
          <Box
            sx={{
              width: 36,
              height: 36,
              borderRadius: "9px",
              background: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18,
              fontWeight: 700,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            D
          </Box>
          <Box>
            <Typography
              sx={{
                textDecoration: "none",
                fontWeight: 400,
                fontSize: "16px",
                color: "#fff",
                letterSpacing: "4px",
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
              }}
            >
              Decorify
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                color: SB.muted,
                fontFamily: "'Montserrat', sans-serif",
                textAlign: "left",
              }}
            >
              Admin Panel
            </Typography>
          </Box>
        </Box>

        {/* Close button — mobile only */}
        {showClose && (
          <IconButton
            onClick={onClose}
            sx={{
              color: "#fff",
              width: 30,
              height: 30,
              borderRadius: "7px",
              background: "rgba(255,255,255,0.1)",
              "&:hover": { background: "rgba(255,255,255,0.2)" },
            }}
          >
            <CloseRoundedIcon sx={{ fontSize: 17 }} />
          </IconButton>
        )}
      </Box>

      {/* ── Nav items ── */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden",
          py: 0.75,
          "&::-webkit-scrollbar": { width: 0 },
        }}
      >
        {NAV_SECTIONS.map((section) => (
          <Box key={section.label}>
            {/* Section label */}
            <Typography
              sx={{
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "1.4px",
                color: SB.muted,
                textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif",
                px: 2.5,
                py: 0.5,
                mt: 0.75,
              }}
            >
              {section.label}
            </Typography>

            {section.items.map((item) => {
              const isActive = activePage === item.id;
              return (
                <ListItemButton
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    if (onClose) onClose(); // mobile: drawer band karo
                  }}
                  sx={{
                    px: 2.25,
                    py: 1.25,
                    position: "relative",
                    background: isActive ? SB.active : "transparent",
                    "&:hover": { background: SB.hover },
                    // Active left indicator
                    "&::before": isActive
                      ? {
                          content: '""',
                          position: "absolute",
                          left: 0,
                          top: 6,
                          bottom: 6,
                          width: 3,
                          background: "#C49A9A",
                          borderRadius: "0 3px 3px 0",
                        }
                      : {},
                  }}
                >
              
                 

                  {/* Label */}
                  <ListItemText
                    primary={item.label}
                    sx={{
                      ml: 1.375,
                      "& .MuiListItemText-primary": {
                        fontSize: 12.5,
                        fontWeight: 500,
                       letterSpacing: 1,
                        fontFamily: "'Montserrat', sans-serif",
                        color: isActive ? "#fff" : SB.muted,
                        transition: "color 0.15s",
                      },
                    }}
                  />

                  {/* Badge */}
                  {item.badge && (
                    <Box
                      sx={{
                        ml: "auto",
                        background: "#C49A9A",
                        color: "#fff",
                        fontSize: 9,
                        fontWeight: 700,
                        px: 0.875,
                        borderRadius: 20,
                        lineHeight: "20px",
                        flexShrink: 0,
                        fontFamily: "'Montserrat', sans-serif",
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </ListItemButton>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* ── Logout ── */}
      <Box sx={{ flexShrink: 0 }}>
        <Divider sx={{ borderColor: SB.divider }} />
        <ListItemButton
          sx={{
            px: 2.25,
            py: 1.25,
            "&:hover": { background: "rgba(255,80,80,0.1)" },
          }}
        >
          <Box
            sx={{
              width: 30,
              height: 30,
              borderRadius: "7px",
              flexShrink: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffaaaa",
            }}
          >
            <LogoutRoundedIcon sx={{ fontSize: 18 }} />
          </Box>
          <ListItemText
            primary="Logout"
            sx={{
              ml: 1.375,
              "& .MuiListItemText-primary": {
                fontSize: 12.5,
                fontWeight: 500,
                fontFamily: "'Montserrat', sans-serif",
                color: "#ffaaaa",
              },
            }}
          />
        </ListItemButton>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────
//  Sidebar — default export
//
//  Desktop >= 900px → permanent sidebar (Box, no Drawer)
//  Mobile  <  900px → nothing render here
//                     hamburger AdminLayout topbar ma che
// ─────────────────────────────────────────────────────────────
export default function Sidebar({ activePage, onNavigate }) {
  return (
    // display:none on mobile, flex on desktop
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        flexDirection: "column",
        width: 240,
        minWidth: 240,
        height: "100vh",
        position: "sticky",
        top: 0,
        flexShrink: 0,
        overflow: "hidden",
      }}
    >
      <SidebarContent
        activePage={activePage}
        onNavigate={onNavigate}
        showClose={false}
      />
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────
//  MobileDrawer — AdminLayout import kare
//
//  Props:
//    open        {boolean}   drawer open che?
//    onClose     {function}  drawer band karo
//    activePage  {string}
//    onNavigate  {function}
// ─────────────────────────────────────────────────────────────
export function MobileDrawer({ open, onClose, activePage, onNavigate }) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      PaperProps={{
        sx: {
          width: 240,
          border: "none",
          background: "transparent",
          boxShadow: "4px 0 24px rgba(61,42,42,0.22)",
        },
      }}
    >
      <SidebarContent
        activePage={activePage}
        onNavigate={onNavigate}
        onClose={onClose}
        showClose={true}
      />
    </Drawer>
  );
}
