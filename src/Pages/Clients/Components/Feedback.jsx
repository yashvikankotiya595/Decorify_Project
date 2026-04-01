  import { useState } from "react";
  import {
    Box,
    Typography,
    Modal,
    Fade,
    Backdrop,
    TextField,
    MenuItem,
    IconButton,
    Button,
  } from "@mui/material";
  import CloseIcon from "@mui/icons-material/Close";
  import StarIcon from "@mui/icons-material/Star";
  import StarBorderIcon from "@mui/icons-material/StarBorder";

  // ── Design Tokens ──
  const fontSans = "'Montserrat', sans-serif";
  const fontSerif = "'Cormorant Garamond', serif";
  const subcolor = "#C49A9A";
  const slate = "#a17a7a";
  const muted = "#735f5f";
  const cardBg = "#fdf8f6";
  const border = `1px solid #e8cfc9`;


  const eventTypes = [
    "Wedding",
    "Birthday Party",
    "Corporate Event",
    "Engagement",
    "Anniversary",
    "Housewarming",
    "Baby Shower",
    "Other",
  ];

  export default function FeedbackForm({ open, onClose }) {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
      name: "",
      eventType: "",
      city: "",
      message: "",
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = () => {
      if (!form.name || !rating || !form.message) return;
      setSubmitted(true);
    };

    const handleClose = () => {
      onClose();
      setTimeout(() => {
        setSubmitted(false);
        setRating(0);
        setHover(0);
        setForm({ name: "", eventType: "", city: "", message: "" });
      }, 400);
    };

    const inputSx = {
      "& .MuiOutlinedInput-root": {
        fontFamily: fontSans,
        fontSize: "13px",
        borderRadius: "8px",
        background: "#fff",
        "& fieldset": { borderColor: "#e8cfc9" },
        "&:hover fieldset": { borderColor: subcolor },
        "&.Mui-focused fieldset": { borderColor: subcolor, borderWidth: "1.5px" },
      },
      "& .MuiInputLabel-root": {
        fontFamily: fontSans,
        fontSize: "12px",
        color: muted,
        "&.Mui-focused": { color: subcolor },
      },
    };

    return (
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 400,
            sx: {
              backdropFilter: "blur(8px)",
              background: "rgba(26,18,18,0.45)",
            },
          },
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "92vw", sm: 460 },
              background: cardBg,
              borderRadius: "20px",
              border: border,
              boxShadow: `0 32px 80px rgba(115,95,95,0.2)`,
              outline: "none",
              overflow: "hidden",
            }}
          >
            <style>{`@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>

            {/* ── Top accent bar ── */}
            <Box
              sx={{
                height: 4,
                background: `linear-gradient(90deg, ${subcolor}, #e8b4b4, ${subcolor})`,
              }}
            />

            {/* ── Header ── */}
            <Box
              sx={{
                px: 3.5,
                pt: 3,
                pb: 0,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box>
                
                <Typography
                  sx={{
                    fontFamily: fontSerif,
                    fontSize: { xs: "24px", sm: "25px" },
                    fontWeight: 500,
                    color: slate,
                    lineHeight: 1.1,
                  }}
                >
                  Share Your Experience
                </Typography>
                <Typography
                  sx={{
                    fontFamily: fontSans,
                    fontSize: "12px",
                    fontWeight: 300,
                    color: muted,
                    mt: 0.5,
                  }}
                >
                  Your feedback helps us create better moments.
                </Typography>
              </Box>
              <IconButton
                onClick={handleClose}
                size="small"
                sx={{
                  color: muted,
                  mt: -0.5,
                  "&:hover": { color: slate, background: "#f0e8e8" },
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>

            {/* ── Content ── */}
            <Box sx={{ px: 3.5, pt: 2.5, pb: 3.5 }}>
              {!submitted ? (
                <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                  {/* Star Rating */}
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: fontSans,
                        fontSize: "11px",
                        fontWeight: 500,
                        color: muted,
                        textTransform: "uppercase",
                        letterSpacing: "0.15em",
                        mb: 0.8,
                      }}
                    >
                      Rating
                    </Typography>
                    <Box display="flex" gap={0.5}>
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Box
                          key={s}
                          onMouseEnter={() => setHover(s)}
                          onMouseLeave={() => setHover(0)}
                          onClick={() => setRating(s)}
                          sx={{
                            cursor: "pointer",
                            transition: "transform 0.15s",
                            "&:hover": { transform: "scale(1.2)" },
                          }}
                        >
                          {s <= (hover || rating) ? (
                            <StarIcon sx={{ fontSize: 28, color: subcolor }} />
                          ) : (
                            <StarBorderIcon
                              sx={{ fontSize: 28, color: "#e0d0cc" }}
                            />
                          )}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Name */}
                  <TextField
                    label="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    size="small"
                    fullWidth
                    sx={inputSx}
                  />

                  {/* Event Type + City — row */}
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 2,
                    }}
                  >
                    <TextField
                      select
                      label="Event Type"
                      name="eventType"
                      value={form.eventType}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    >
                      {eventTypes.map((e) => (
                        <MenuItem
                          key={e}
                          value={e}
                          sx={{ fontFamily: fontSans, fontSize: "13px" }}
                        >
                          {e}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label="City"
                      name="city"
                      value={form.city}
                      onChange={handleChange}
                      size="small"
                      fullWidth
                      sx={inputSx}
                    />
                  </Box>

                  {/* Message */}
                  <TextField
                    label="Your Feedback"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    multiline
                    rows={3}
                    fullWidth
                    sx={inputSx}
                  />

                  {/* Submit */}
                  <Button
                    onClick={handleSubmit}
                    fullWidth
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 600,
                      fontSize: "13px",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      background: slate,
                      color: "#fff",
                      borderRadius: "8px",
                      py: 1.3,
                      mt: 0.5,
                      "&:hover": { background: muted },
                      transition: "background 0.25s ease",
                    }}
                  >
                    Submit Feedback
                  </Button>
                </Box>
              ) : (
                /* ── Thank You Screen ── */
                <Box textAlign="center" py={3}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      background: "#fce8e8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mx: "auto",
                      mb: 2.5,
                    }}
                  >
                    <StarIcon sx={{ fontSize: 32, color: subcolor }} />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: fontSerif,
                      fontSize: "28px",
                      fontWeight: 500,
                      color: slate,
                      mb: 1,
                    }}
                  >
                    Thank You!
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: fontSans,
                      fontSize: "13px",
                      fontWeight: 300,
                      color: muted,
                      lineHeight: 1.8,
                      maxWidth: 300,
                      mx: "auto",
                      mb: 3,
                    }}
                  >
                    Your feedback means a lot to us. We'll use it to make every
                    event more beautiful.
                  </Typography>
                  <Button
                    onClick={handleClose}
                    sx={{
                      fontFamily: fontSans,
                      fontWeight: 500,
                      fontSize: "12px",
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: subcolor,
                      border: `1px solid ${subcolor}`,
                      borderRadius: "6px",
                      px: 3,
                      py: 0.8,
                      "&:hover": { background: "#fce8e8" },
                    }}
                  >
                    Close
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Fade>
      </Modal>
    );
  }
