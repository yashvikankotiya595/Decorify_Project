import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  createTheme,
} from "@mui/material";
import React from "react";
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme";

// icon
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const Login = () => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,

        //custom breakpoints

        B1140: 1140,
        B700: 700,
        B450: 450,
        B370: 370,
        B340: 340,
        B300: 300,
      },
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hasError = !!emailError || !!passwordError;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    let isValid = true;

    // 1. Email Validation Logic
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

    // 2. Password Validation (Frontend mockup)
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
      console.log("Login details:", { email, password });
    }
  };

  const subFamily = "'Montserrat', sans-serif";
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* background image */}
        <Box
          sx={{
            height: "auto",

            backgroundImage: "url('/Authentication_bgimg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* main box */}
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            {/* sub box */}
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
                my: hasError ? 3.7 : 5,
                borderRadius: 6,
                height: hasError ? "500px" : "478px",
                boxShadow: 9,
              }}
            >
              {/* logo */}
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "'Cinzel', serif",
                  mt: 3,
                  fontWeight: 400,
                  fontSize: "20px",
                  color: "#735f5f",
                  letterSpacing: "0.11em",
                  textTransform: "uppercase",
                }}
              >
                Decorify
              </Typography>

              {/* welcome back */}
              <Typography
                sx={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#735f5f",
                  fontSize: {
                    xs: "26px",
                    B300: "28px",
                  },
                  mt: 2,
                }}
              >
                Welcome Back
              </Typography>

              {/* slogan */}
              <Typography
                sx={{
                  fontSize: {
                    xs: "12px",
                    B300: "13px",
                  },
                  fontFamily: subFamily,
                 fontWeight: 200,
                  color: "#9a8888",
                  letterSpacing: {
                    xs: 0,
                    B340: "0.11em",
                  },
                }}
              >
                Soft,Luxurious Decor Rentals Await You
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  mx: 2,
                  px: 1,

                  height: hasError ? "340px" : "310px",
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(200, 150, 150, 0.18)",
                }}
              >
                {/* Email */}
                
                <Box
                  sx={{
                    width: {
                      xs: "96%",
                      B300: "90%",
                    },
                    pl: {
                      xs: 0,
                      B300: 1.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: "#a17a7a",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "14px",
                      pt: 2,
                    }}
                  >
                    Email Address
                  </Typography>


                  <TextField
                    fullWidth
                    placeholder="johndoe@example.com"
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!emailError}
                    helperText={emailError}
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Box
                            sx={{
                              backgroundColor:" #a17a7a",
                              color: "white",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRadius: "4px",
                              width: 28,
                              height: 20,
                            }}
                          >
                            <EmailIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: "#FBF7F4",
                      borderRadius: "8px",
                      width: "104%",

                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",

                        "& .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#a38a8a",
                        },

                        "&:hover .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#a38a8a",
                        },

                        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                          borderColor: "#a38a8a",
                        },
                      },

                      "& input": {
                        color: "#8C6D5A",
                        fontSize: {
                          xs: "12px",
                          B300: "14px",
                        },
                        padding: "10px 0",
                      },
                    }}
                  />
                </Box>

                {/* password */}

                <Box
                  sx={{
                    width: {
                      xs: "96%",
                      B300: "90%",
                    },
                    pl: {
                      xs: 0,
                      B300: 1.5,
                    },
                  }}
                >
                  <Typography
                    sx={{
                      textAlign: "left",
                      color: " #a17a7a",
                      fontFamily: "'Roboto', sans-serif",
                      fontSize: "14px",
                      pt: 2,
                    }}
                  >
                    Password
                  </Typography>

                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    variant="outlined"
                    onChange={(e) => setPassword(e.target.value)}
                    error={!!passwordError}
                    helperText={passwordError}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
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
                            <LockIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
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
                        "&:hover fieldset": {
                          borderColor: "#a38a8a !important",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#a38a8a !important",
                        },
                        input: {
                          color: "#8C6D5A",
                          fontSize: {
                            xs: "12px",
                            B300: "14px",
                          },
                          padding: "10px 0",
                        },
                      },
                    }}
                  />
                </Box>

                {/* forgot password */}
                <Typography
                  component="a"
                  href="#"
                  sx={{
                    mt: 1,
                    display: "flex",
                    justifyContent: "right",
                    width: {
                      xs:"100%",
                      B300: "90%"
                    },
                    color: " #757575",
                    textDecoration: "none",
                    textAlign: "right",
                    fontSize: "12px",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Forgot Password?
                </Typography>

                {/* continue button */}
                <Button
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign:"center",
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
                    "&:hover": {
                        background: "#735f5f",}
                  }}
                >
                  Sign in
                </Button>

                {/* sign up link */}
                <Box sx={{ mt: 2, textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: subFamily,
                      color: " #757575",
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
                      Sign in
                    </Typography>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Login;
