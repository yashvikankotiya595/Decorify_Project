import axios from "axios";
import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Card,
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
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  FormControlLabel,
  Radio,
  Fade,
  IconButton,
} from "@mui/material";
import { Close, Edit, Block } from "@mui/icons-material";
import { ThemeProvider } from "@mui/material/styles";

const fontSans = "'Montserrat', sans-serif";
const fontSerif = "'Cormorant Garamond', serif";
const slate = "#a17a7a";
const muted = "#735f5f";
const border = "rgba(196,154,154,0.22)";
const bg = "#F5EFEc";
const sub = "#C49A9A";

export default function Users() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  // ── Edit dialog state ──
  const [editOpen, setEditOpen] = useState(false);
  const [editUser, setEditUser] = useState(null); // original user object
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formRole, setFormRole] = useState("user"); // "user" | "admin"

  // ── Local role/block overrides (so UI updates without backend) ──
  const [overrides, setOverrides] = useState({}); // { [userId]: { role, blocked } }

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3100/signUp/view");
      setUsers(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    },
  });
  const isMobile = useMediaQuery("(max-width:600px)");

  // ── Helpers ──
  const getOverride = (row) => overrides[row._id] || {};

  const getRole = (row) => {
    // જો overrides માં નવો ડેટા હોય તો એ લો, નહીતર row.role (DB ડેટા) લો, અને કંઈ ન હોય તો "user"
    return getOverride(row).role || row.role || "user";
  };
  const isBlocked = (row) => getOverride(row).blocked ?? false;

  // ── Open edit form — prefill name, email, role ──
  const handleEditClick = (row) => {
    setEditUser(row);
    setFormName(row.name || "");
    setFormEmail(row.email || "");
    setFormRole(getRole(row));
    setEditOpen(true);
  };

  // ── Save edit ──
  const handleEditSave = async () => {
    if (!editUser) return;

    try {
      // 1. બેકએન્ડમાં API કોલ કરો
      await axios.patch(`http://localhost:3100/signUp/update/${editUser._id}`, {
        name: formName,
        email: formEmail,
        role: formRole, // અહીંથી નવો રોલ ડેટાબેઝમાં જશે
      });

      // 2. સક્સેસ થયા પછી ડાયલોગ બંધ કરો અને ડેટા ફરીથી ફેચ કરો
      setEditOpen(false);
      
      // (ઓપ્શનલ) લોકલ ઓવરરાઈડ કાઢી નાખવું હોય તો:
      setOverrides((prev) => {
        const newOverrides = { ...prev };
        delete newOverrides[editUser._id];
        return newOverrides;
      });
      await fetchUsers();
    } catch (error) {
      console.error("Update failed:", error);
      alert("ડેટા અપડેટ કરવામાં ભૂલ આવી!");
    }
  };

  // ── Handle block ──
  const handleBlock = async (id, currentStatus) => {
    try {
      const newStatus = currentStatus === "Blocked" ? "Active" : "Blocked";
      await axios.patch(`http://localhost:3100/signUp/update/${id}`, {
        status: newStatus,
      });
      fetchUsers();
    } catch (error) {
      alert("Status update failed!");
    }
  };

  const filtered = users.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase()),
  );

  // ── Input sx (reused in dialog) ──
  const inputSx = {
    "& .MuiOutlinedInput-root": {
      fontFamily: fontSans,
      fontSize: 13,
      borderRadius: "8px",
      background: bg,
      "& fieldset": { borderColor: border },
      "&:hover fieldset": { borderColor: sub },
      "&.Mui-focused fieldset": { borderColor: slate, borderWidth: "1px" },
    },
    "& .MuiInputBase-input": { padding: "9px 13px", color: "#3d2a2a" },
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "100%" }}>
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
          <Grid item xs={12} sx={{ width: "100%" }}>
            <Card
              elevation={0}
              sx={{
                border: `1px solid ${border}`,
                borderRadius: "14px",
                overflow: "hidden",
                boxShadow: 4,
                width: "100%",
              }}
            >
              {/* Card Header */}
              <Box
                sx={{
                  px: 2.5,
                  py: 2,
                  borderBottom: `1px solid ${border}`,
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
                {/* Search */}
                <TextField
                  size="small"
                  placeholder="Search users..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  sx={{ ...inputSx, width: 200 }}
                />
              </Box>

              <TableContainer sx={{ width: "100%" }}>
                <Table sx={{ width: "100%", tableLayout: "fixed" }}>
                  <TableHead>
                    <TableRow>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                          fontFamily: fontSans,
                          width: "10%",
                          textAlign: "center",
                        }}
                      >
                        Id
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                          fontFamily: fontSans,
                          width: "20%",
                          textAlign: "center",
                        }}
                      >
                        Customer
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                          fontFamily: fontSans,
                          width: "25%",
                          textAlign: "center",
                        }}
                      >
                        Email
                      </TableCell>
                      {!isMobile && (
                        <TableCell
                          sx={{
                            color: muted,
                            fontWeight: 600,
                            fontFamily: fontSans,
                            width: "17%",
                            textAlign: "center",
                          }}
                        >
                          Joined
                        </TableCell>
                      )}
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                          fontFamily: fontSans,
                          width: "12%",
                          textAlign: "center",
                        }}
                      >
                        Amount
                      </TableCell>
                      <TableCell
                        sx={{
                          color: muted,
                          fontWeight: 600,
                          fontFamily: fontSans,
                          width: "23%",
                          textAlign: "center",
                        }}
                      >
                        Action
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    {filtered.map((row, index) => {
                      const role = getRole(row);
                      const blocked = isBlocked(row);

                      return (
                        <TableRow
                          key={index}
                          sx={{
                            opacity: blocked ? 0.55 : 1,
                            transition: "opacity 0.3s",
                            "&:hover td": {
                              background: "rgba(245,239,236,0.6)",
                            },
                          }}
                        >
                          <TableCell>
                            <Typography
                              sx={{
                                fontSize: 13,
                                color: slate,
                                fontFamily: fontSans,
                                textAlign: "center",
                              }}
                            >
                              {row._id.substring(0, 5)}
                            </Typography>
                          </TableCell>
                          {/* Name + role badge */}
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                gap: 1,
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: 13,
                                  color: slate,
                                  fontFamily: fontSans,
                                  textAlign: "center",
                                }}
                              >
                                {row.name}
                              </Typography>
                              {/* Role badge — shows only if role is set */}
                              <Box
                                sx={{
                                  fontSize: 10,
                                  fontWeight: 700,
                                  fontFamily: fontSans,
                                  px: 1,
                                  py: 0.2,
                                  borderRadius: 20,
                                  background:
                                    role === "admin"
                                      ? "rgba(100,80,200,0.12)"
                                      : "rgba(90,154,110,0.13)",
                                  color:
                                    role === "admin" ? "#4a38a0" : "#2e7050",
                                  border: `1px solid ${role === "admin" ? "rgba(100,80,200,0.2)" : "rgba(90,154,110,0.2)"}`,
                                }}
                              >
                                {role}
                              </Box>
                            </Box>
                          </TableCell>

                          {/* Email */}
                          <TableCell
                            sx={{
                              fontSize: 13,
                              color: slate,
                              fontFamily: fontSans,
                              textAlign: "center",
                            }}
                          >
                            {row.email}
                          </TableCell>

                          {/* Joined */}
                          {!isMobile && (
                            <TableCell
                              sx={{
                                fontSize: 13,
                                color: slate,
                                fontFamily: fontSans,
                                textAlign: "center",
                              }}
                            >
                              {row.createdAt
                                ? new Date(row.createdAt).toLocaleDateString()
                                : "N/A"}
                            </TableCell>
                          )}

                          {/* Amount */}
                          <TableCell
                            sx={{
                              fontSize: 13,
                              color: slate,
                              fontFamily: fontSans,
                              textAlign: "center",
                            }}
                          >
                            ₹0
                          </TableCell>

                          {/* ── Action: Edit + Block ── */}
                          <TableCell>
                            <Box
                              sx={{
                                display: "flex",
                                gap: 0.8,
                                justifyContent: "center",
                                alignItems: "center",
                              }}
                            >
                              {/* Edit button */}
                              <Button
                                onClick={() => handleEditClick(row)}
                                size="small"
                                variant="contained"
                                startIcon={
                                  <Edit sx={{ fontSize: "12px !important" }} />
                                }
                                sx={{
                                  fontFamily: fontSans,
                                  fontSize: 10,
                                  fontWeight: 700,
                                  background: slate,
                                  color: "#fff",
                                  borderRadius: "7px",
                                  px: 1.5,
                                  py: 0.6,
                                  boxShadow: "none",
                                  whiteSpace: "nowrap",
                                  "&:hover": {
                                    background: muted,
                                    boxShadow: "none",
                                  },
                                }}
                              >
                                Edit
                              </Button>

                              {/* Block button */}
                              <Button
                                onClick={() => handleBlock(row._id, row.status)}
                                size="small"
                                variant="outlined"
                                startIcon={
                                  <Block sx={{ fontSize: "12px !important" }} />
                                }
                                sx={{
                                  fontFamily: fontSans,
                                  fontSize: 10,
                                  fontWeight: 700,
                                  color: blocked ? "#2e7050" : "#c03030",
                                  borderColor: blocked
                                    ? "rgba(90,154,110,0.4)"
                                    : "rgba(200,50,50,0.35)",
                                  borderRadius: "7px",
                                  px: 1.5,
                                  py: 0.6,
                                  whiteSpace: "nowrap",
                                  "&:hover": {
                                    background: blocked
                                      ? "rgba(90,154,110,0.08)"
                                      : "rgba(200,50,50,0.06)",
                                    borderColor: blocked
                                      ? "#2e7050"
                                      : "#c03030",
                                  },
                                }}
                              >
                                {row.status === "Blocked" ? "Unblock" : "Block"}
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                      );
                    })}

                    {/* Empty state */}
                    {filtered.length === 0 && (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          sx={{
                            textAlign: "center",
                            py: 5,
                            color: muted,
                            fontFamily: fontSans,
                            fontSize: 13,
                          }}
                        >
                          No users found
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </Grid>
        </Grid>

        {/* ══════════════════════════════════
            EDIT USER DIALOG
        ══════════════════════════════════ */}
        <Dialog
          open={editOpen}
          onClose={() => setEditOpen(false)}
          maxWidth="xs"
          fullWidth
          TransitionComponent={Fade}
          PaperProps={{ sx: { borderRadius: 3 } }}
        >
          <DialogTitle
            sx={{
              fontFamily: fontSerif,
              fontSize: 22,
              fontWeight: 600,
              color: slate,
              borderBottom: `1px solid ${border}`,
              pb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Edit User
            <IconButton
              onClick={() => setEditOpen(false)}
              size="small"
              sx={{ color: muted }}
            >
              <Close fontSize="small" />
            </IconButton>
          </DialogTitle>

          <DialogContent
            sx={{
              pt: "20px !important",
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            {/* Name */}
            <Box>
              <Box
                component="label"
                sx={{
                  fontFamily: fontSans,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: muted,
                  mb: 0.6,
                  display: "block",
                }}
              >
                Full Name
              </Box>
              <TextField
                fullWidth
                size="small"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="e.g. Yashvi Patel"
                sx={inputSx}
              />
            </Box>

            {/* Email */}
            <Box>
              <Box
                component="label"
                sx={{
                  fontFamily: fontSans,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: muted,
                  mb: 0.6,
                  display: "block",
                }}
              >
                Email Address
              </Box>
              <TextField
                fullWidth
                size="small"
                value={formEmail}
                onChange={(e) => setFormEmail(e.target.value)}
                placeholder="e.g. yashvi@gmail.com"
                sx={inputSx}
              />
            </Box>

            {/* Role radio */}
            <Box>
              <Box
                component="label"
                sx={{
                  fontFamily: fontSans,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                  color: muted,
                  mb: 1,
                  display: "block",
                }}
              >
                Role
              </Box>
              <RadioGroup
                row
                value={formRole}
                onChange={(e) => setFormRole(e.target.value)}
                sx={{ gap: 2 }}
              >
                {/* User option */}
                <FormControlLabel
                  value="user"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: `${sub}88`,
                        "&.Mui-checked": { color: slate },
                      }}
                    />
                  }
                  label={
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 13,
                          fontWeight: 600,
                          color: formRole === "user" ? slate : muted,
                        }}
                      >
                        User
                      </Typography>
                      {formRole === "user" && (
                        <Box
                          sx={{
                            fontSize: 10,
                            fontWeight: 700,
                            fontFamily: fontSans,
                            px: 1,
                            py: 0.2,
                            borderRadius: 20,
                            background: "rgba(90,154,110,0.13)",
                            color: "#2e7050",
                            border: "1px solid rgba(90,154,110,0.2)",
                          }}
                        >
                          user
                        </Box>
                      )}
                    </Box>
                  }
                />

                {/* Admin option */}
                <FormControlLabel
                  value="admin"
                  control={
                    <Radio
                      size="small"
                      sx={{
                        color: `${sub}88`,
                        "&.Mui-checked": { color: slate },
                      }}
                    />
                  }
                  label={
                    <Box
                      sx={{ display: "flex", alignItems: "center", gap: 0.8 }}
                    >
                      <Typography
                        sx={{
                          fontFamily: fontSans,
                          fontSize: 13,
                          fontWeight: 600,
                          color: formRole === "admin" ? slate : muted,
                        }}
                      >
                        Admin
                      </Typography>
                      {formRole === "admin" && (
                        <Box
                          sx={{
                            fontSize: 10,
                            fontWeight: 700,
                            fontFamily: fontSans,
                            px: 1,
                            py: 0.2,
                            borderRadius: 20,
                            background: "rgba(100,80,200,0.12)",
                            color: "#4a38a0",
                            border: "1px solid rgba(100,80,200,0.2)",
                          }}
                        >
                          admin
                        </Box>
                      )}
                    </Box>
                  }
                />
              </RadioGroup>
            </Box>
          </DialogContent>

          <DialogActions
            sx={{ px: 3, py: 2, gap: 1.5, borderTop: `1px solid ${border}` }}
          >
            <Button
              onClick={() => setEditOpen(false)}
              variant="outlined"
              sx={{
                fontFamily: fontSans,
                fontSize: 11,
                fontWeight: 600,
                color: muted,
                borderColor: border,
                borderRadius: 2,
                px: 3,
              }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleEditSave}
              variant="contained"
              sx={{
                fontFamily: fontSans,
                fontSize: 11,
                fontWeight: 600,
                background: slate,
                borderRadius: 2,
                px: 3,
                boxShadow: "none",
                "&:hover": { background: muted, boxShadow: "none" },
              }}
            >
              Save Changes
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
}
