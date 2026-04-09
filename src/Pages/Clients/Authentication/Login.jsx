import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  createTheme,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { useHistory } from "react-router-dom";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const subFamily = "'Montserrat', sans-serif";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      B1140: 1140,
      B700: 700,
      B450: 450,
      B370: 370,
      B340: 340,
      B300: 300,
    },
  },
});

// ── Shared input icon box ──
const IconBox = ({ children }) => (
  <Box
    sx={{
      backgroundColor: "#a17a7a",
      color: "white",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "4px",
      width: 28,
      height: 20,
    }}
  >
    {children}
  </Box>
);

// ── Shared input sx ──
const inputSx = {
  backgroundColor: "#FBF7F4",
  borderRadius: "8px",
  width: "100%",
  "& .MuiOutlinedInput-root": {
    borderRadius: "8px",
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "#a38a8a" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#a38a8a" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#a38a8a",
    },
  },
  "& input": {
    color: "#8C6D5A",
    fontSize: { xs: "12px", B300: "14px" },
    padding: "10px 0",
  },
};

const labelSx = {
  textAlign: "left",
  color: "#a17a7a",
  fontFamily: "'Roboto', sans-serif",
  fontSize: "14px",
  pt: 2,
};

const fieldWrapSx = {
  width: { xs: "96%", B300: "90%" },
  pl: { xs: 0, B300: 1.5 },
};

export default function Login() {
  const history = useHistory();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hasError = !!emailError || !!passwordError;
  const formHeight = hasError ? "auto" : "300px";

  const handleLogin = async () => {
    let isValid = true;

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ac\.in)$/;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Invalid email!");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
     try {
      // 1. Port check karjo (3100 ke 5000?)
      const res = await axios.post("http://localhost:3100/signUp/login", {
        email: email,
        password: password,
      });

      if (res.data.status === "Success") {
        const user = res.data.data;

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userName", user.name);
        localStorage.setItem("userEmail", user.email);
        localStorage.setItem("userId", user._id);
        
        // Jo akkho user object save karvo hoy to:
        localStorage.setItem("userData", JSON.stringify(res.data.user));

        window.dispatchEvent(new Event("authChange"));
        history.push("/");
      }
    } catch (error) {
      console.error("Login Error:", error);
      if (error.response) {
        // Backend mathi avti error message set karo
        const serverMsg = error.response.data.message;
        if (serverMsg.toLowerCase().includes("email")) {
          setEmailError(serverMsg);
        } else if (serverMsg.toLowerCase().includes("password")) {
          setPasswordError(serverMsg);
        } else {
          alert(serverMsg);
        }
      } else {
        alert("Network Error: start backend");
      }
    }
  }
};

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: "555px",
          backgroundImage: "url('/Authentication_bgimg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "90%",
                B370: "80%",
                B450: "70%",
                sm: "55%",
                B700: "50%",
                md: "40%",
                B1140: "30%",
                lg: "30%",
              },
              my: 5,
              borderRadius: 6,
              boxShadow: 9,
            }}
          >
            {/* Logo */}
            <Typography
              sx={{
                fontFamily: "'Cinzel', serif",
                mt: 2,
                fontWeight: 400,
                fontSize: "20px",
                color: "#735f5f",
                letterSpacing: "0.11em",
                textTransform: "uppercase",
              }}
            >
              Decorify
            </Typography>

            {/* Welcome */}
            <Typography
              sx={{
                fontFamily: "'Playfair Display', serif",
                color: "#735f5f",
                fontSize: { xs: "26px", B300: "28px" },
                mt: 1,
              }}
            >
              Welcome Back
            </Typography>

            {/* Slogan */}
            <Typography
              sx={{
                fontSize: { xs: "12px", B300: "13px" },
                fontFamily: subFamily,
                fontWeight: 200,
                color: "#9a8888",
                letterSpacing: { xs: 0, B340: "0.11em" },
              }}
            >
              Soft, Luxurious Decor Rentals Await You
            </Typography>

            {/* Form card */}
            <Box
              sx={{
                my: 1,
                mx: "16px",
                px: "8px",
                pb: 2,
                minHeight: formHeight,
                borderRadius: "20px",
                boxShadow: "0 15px 35px rgba(200, 150, 150, 0.18)",
              }}
            >
              {/* ── Email ── */}
              <Box sx={fieldWrapSx}>
                <Typography sx={labelSx}>Email Address</Typography>
                <TextField
                  fullWidth
                  placeholder="johndoe@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  error={!!emailError}
                  helperText={emailError}
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconBox>
                          <EmailIcon sx={{ fontSize: 16 }} />
                        </IconBox>
                      </InputAdornment>
                    ),
                  }}
                  sx={inputSx}
                />
              </Box>

              {/* ── Password ── */}
              <Box sx={fieldWrapSx}>
                <Typography sx={labelSx}>Password</Typography>
                <TextField
                  fullWidth
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  error={!!passwordError}
                  helperText={passwordError}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconBox>
                          <LockIcon sx={{ fontSize: 16 }} />
                        </IconBox>
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          edge="end"
                        >
                          {showPassword ? (
                            <VisibilityOff sx={{ fontSize: 18 }} />
                          ) : (
                            <Visibility sx={{ fontSize: 18 }} />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                    sx: {
                      backgroundColor: "#FBF7F4",
                      borderRadius: "8px",
                      width: "104%",
                      "& fieldset": { borderColor: "#a38a8a" },
                      "&:hover fieldset": { borderColor: "#a38a8a !important" },
                      "&.Mui-focused fieldset": {
                        borderColor: "#a38a8a !important",
                      },
                      input: {
                        color: "#8C6D5A",
                        fontSize: { xs: "12px", B300: "14px" },
                        padding: "10px 0",
                      },
                    },
                  }}
                />
              </Box>

              {/* Forgot password */}
              <Typography
                component="a"
                href="#"
                sx={{
                  mt: 1,
                  display: "flex",
                  justifyContent: "right",
                  width: { xs: "100%", B300: "90%" },
                  color: "#757575",
                  textDecoration: "none",
                  textAlign: "right",
                  fontSize: "12px",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Forgot Password?
              </Typography>

              {/* Sign In button */}
              <Button
                fullWidth
                onClick={handleLogin}
                sx={{
                  mt: 3,
                  ml: 1,
                  padding: "7px 0",
                  borderRadius: "12px",
                  fontFamily: subFamily,
                  fontSize: "16px",
                  fontWeight: 500,
                  width: "95%",
                  color: "#fff",
                  boxShadow: "0 8px 20px rgba(201, 143, 143, 0.35)",
                  backgroundColor: "#a17a7a",
                  "&:hover": { background: "#735f5f" },
                }}
              >
                Sign in
              </Button>

              {/* Sign up link */}
              <Box sx={{ mt: 2, textAlign: "center" }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: subFamily,
                    color: "#757575",
                    fontSize: { xs: "13px", B370: "15px" },
                  }}
                >
                  Don't have an account?{" "}
                  <Typography
                    component="a"
                    href="/Sign_Up"
                    sx={{
                      color: "#a38a8a",
                      textDecoration: "none",
                      fontSize: { xs: "15px", B370: "16px" },
                    }}
                  >
                    Sign up
                  </Typography>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
