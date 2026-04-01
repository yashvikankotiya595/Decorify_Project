// ─────────────────────────────────────────────────────────────
//  Sidebar.jsx  —  DecorRent Admin
// ─────────────────────────────────────────────────────────────
//
//  Props:
//    activePage    {string}    current active page id
//    onNavigate    {function}  called with (pageId) on click
//    collapsed     {boolean}   desktop collapsed state
//    mobileOpen    {boolean}   mobile drawer open?
//    onMobileClose {function}  close mobile drawer
//    isMobile      {boolean}   viewport <= 900 px?
//
//  Usage:
//    import Sidebar from './Sidebar';
//
//    <Sidebar
//      activePage={activePage}
//      onNavigate={setActivePage}
//      collapsed={collapsed}
//      mobileOpen={mobileOpen}
//      onMobileClose={() => setMobileOpen(false)}
//      isMobile={isMobile}
//    />
// ─────────────────────────────────────────────────────────────

import {
  Box,
  Drawer,
  ListItemButton,
  ListItemText,
  Typography,
  Divider,
  Tooltip,
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

// ── Widths ──────────────────────────────────────────────────
export const DRAWER_WIDTH = 240;
export const COLLAPSED_WIDTH = 68;

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
        id: "gallery",
        label: "Gallery",
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

// ── Sidebar palette ──────────────────────────────────────────
const SB = {
  from: "#2a1a1a",
  to: "#6b5050",
  active: "rgba(255,255,255,0.15)",
  hover: "rgba(255,255,255,0.08)",
  muted: "rgba(255,255,255,0.5)",
  divider: "rgba(255,255,255,0.1)",
};

// ─────────────────────────────────────────────────────────────
//  Inner content (shared between mobile & desktop drawers)
// ─────────────────────────────────────────────────────────────
function SidebarContent({ activePage, onNavigate, collapsed }) {
  return (
    <Box
      sx={{
        height: "100%",
        background: `linear-gradient(165deg, ${SB.from} 0%, ${SB.to} 100%)`,
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Brand ── */}
      <Box
        sx={{
          px: collapsed ? 1 : 2.25,
          py: 2.25,
          borderBottom: `1px solid ${SB.divider}`,
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          overflow: "hidden",
          whiteSpace: "nowrap",
          flexShrink: 0,
          justifyContent: collapsed ? "center" : "flex-start",
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "9px",
            flexShrink: 0,
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 18,
            fontWeight: 700,
            color: "#fff",
          }}
        >
          D
        </Box>

        {!collapsed && (
          <Box>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              DecorRent
            </Typography>
            <Typography
              sx={{
                fontSize: 10,
                color: SB.muted,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Admin Panel
            </Typography>
          </Box>
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
                px: collapsed ? 0 : 2.5,
                py: 0.5,
                mt: 0.75,
                opacity: collapsed ? 0 : 1,
                height: collapsed ? "10px" : "auto",
                transition: "opacity 0.2s",
                overflow: "hidden",
              }}
            >
              {section.label}
            </Typography>

            {section.items.map((item) => {
              const isActive = activePage === item.id;
              return (
                <Tooltip
                  key={item.id}
                  title={collapsed ? item.label : ""}
                  placement="right"
                  arrow
                >
                  <ListItemButton
                    onClick={() => onNavigate(item.id)}
                    sx={{
                      px: collapsed ? 0 : 2.25,
                      py: 1.25,
                      justifyContent: collapsed ? "center" : "flex-start",
                      position: "relative",
                      background: isActive ? SB.active : "transparent",
                      "&:hover": { background: SB.hover },
                      "&::before":
                        isActive && !collapsed
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
                    {/* Icon */}
                    <Box
                      sx={{
                        width: 30,
                        height: 30,
                        borderRadius: "7px",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive
                          ? "rgba(255,255,255,0.12)"
                          : "transparent",
                        color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                        transition: "all 0.15s",
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Label + Badge */}
                    {!collapsed && (
                      <>
                        <ListItemText
                          primary={item.label}
                          sx={{
                            ml: 1.375,
                            "& .MuiListItemText-primary": {
                              fontSize: 12.5,
                              fontWeight: 500,
                              fontFamily: "'Montserrat', sans-serif",
                              color: isActive ? "#fff" : SB.muted,
                              transition: "color 0.15s",
                            },
                          }}
                        />
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
                      </>
                    )}
                  </ListItemButton>
                </Tooltip>
              );
            })}
          </Box>
        ))}
      </Box>

      {/* ── Logout ── */}
      <Box sx={{ flexShrink: 0 }}>
        <Divider sx={{ borderColor: SB.divider }} />
        <Tooltip title={collapsed ? "Logout" : ""} placement="right" arrow>
          <ListItemButton
            sx={{
              px: collapsed ? 0 : 2.25,
              py: 1.25,
              justifyContent: collapsed ? "center" : "flex-start",
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
            {!collapsed && (
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
            )}
          </ListItemButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

// ─────────────────────────────────────────────────────────────
//  Sidebar — default export
// ─────────────────────────────────────────────────────────────
export default function Sidebar({
  activePage,
  onNavigate = () => {},
  collapsed,
  mobileOpen,
  onMobileClose,
  isMobile,
}) {
  const drawerWidth = isMobile
    ? DRAWER_WIDTH
    : collapsed
      ? COLLAPSED_WIDTH
      : DRAWER_WIDTH;

  const content = (
    <SidebarContent
      activePage={activePage}
      onNavigate={(id) => {
        onNavigate(id);
        if (isMobile) onMobileClose();
      }}
      collapsed={collapsed && !isMobile}
    />
  );

  // Mobile → temporary drawer (slides over content)
  if (isMobile) {
    return (
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: DRAWER_WIDTH,
            border: "none",
            boxShadow: "4px 0 24px rgba(61,42,42,0.2)",
          },
        }}
      >
        {content}
      </Drawer>
    );
  }

  // Desktop → permanent drawer (animates width on collapse)
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        transition: "width 0.28s cubic-bezier(0.4,0,0.2,1)",
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          border: "none",
          overflow: "hidden",
          transition: "width 0.28s cubic-bezier(0.4,0,0.2,1)",
        },
      }}
    >
      {content}
    </Drawer>
  );
}
