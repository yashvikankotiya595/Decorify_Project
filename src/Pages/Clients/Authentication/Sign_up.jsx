import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Button,
  createTheme,
} from "@mui/material";
import axios from 'axios'
import { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
// import theme from "./theme";

// icon
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

const Sign_up = () => {
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Error States
  const [nameerror, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const hasError = !!emailError || !!passwordError;

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    let isValid = true;
    const nameRegex = /^[A-Za-z\s]+$/;

    // 1. name Validation Logic
    if (!name.trim()) {
      setNameError("Name is required");
      isValid = false;
    } else if (!nameRegex.test(name)) {
      setNameError("Numbers not allowed");
      isValid = false;
    } else if (name.trim().length < 3) {
      setNameError("Minimum 3 letters");
      isValid = false;
    } else if (name.trim().length > 20) {
      setNameError("Maximum 20 letters");
      isValid = false;
    } else {
      setNameError("");
    }

    // 2. Email Validation Logic
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

    // 3. Password Validation
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{6}$/;

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (!regex.test(password)) {
      setPasswordError("Use 6+ chars with upper,lower,number.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      
      try{
        const res = await axios.post("http://localhost:3100/signUp/create",{
          name,email,password
        })
        console.log("saved data",res.data);
        setName("")
        setEmail("")
        setPassword("")
      }
      catch (error) {
        console.log(error);
        
      }
    }
  };

  const subFamily = "'Poppins', sans-serif";
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* background image */}
        <Box
          sx={{
            height: "auto",
            background: "url('/Authentication_bgimg.png')",
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
                my: hasError ?  1.8 : 3.7,
                borderRadius: 6,
                height: hasError ? "530px" : "500px",  //main box
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
                  mt: hasError ? 1 : 2,
                }}
              >
                Create an Account
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
                  height: hasError ? "385px" : "340px", //sub box
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(200, 150, 150, 0.18)",
                }}
              >
                {/* name */}
                <Box
                  sx={{
                    width: {
                      xs: "100%",
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
                      pt: 1,
                      Pt: hasError ? 0 : 1,
                    }}
                  >
                    Name
                  </Typography>

                  <TextField
                    fullWidth
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    error={!!nameerror}
                    helperText={nameerror}
                    placeholder="johndoe"
                    variant="outlined"
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
                            <PersonIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: "#FBF7F4",
                      borderRadius: "8px",

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

                <Box
                  sx={{
                    width: {
                      xs: "100%",
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
                    onChange={(e) => setEmail(e.target.value)}
                     value={email}
                    error={!!emailError}
                    helperText={emailError}
                    placeholder="johndoe@example.com"
                    variant="outlined"
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
                            <EmailIcon sx={{ fontSize: 16 }} />
                          </Box>
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      backgroundColor: "#FBF7F4",
                      borderRadius: "8px",

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
                      xs: "100%",
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
                    Password
                  </Typography>

                  <TextField
                    fullWidth
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    variant="outlined"
                    value={password}
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
                    }}
                    sx={{
                      backgroundColor: "#FBF7F4",
                      borderRadius: "8px",
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "8px",
                        "& fieldset": { borderColor: "#a38a8a" },
                        "&:hover fieldset": { borderColor: "#a38a8a" },
                        "&.Mui-focused fieldset": { borderColor: "#a38a8a" },
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

                {/* continue button */}
                <Button
                  fullWidth
                  onClick={handleLogin}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: hasError ? 1 : 3,
                    ml:1,
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
                  Sign Up
                </Button>

                {/* sign up link -- mt: hasError ? 0 : 2*/}
                <Box sx={{ mt: hasError ? 1 : 2, textAlign: "center" }}> 
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: subFamily,
                      color: " #757575",
                      fontSize: { xs: "13px", B370: "15px" },
                    }}
                  >
                    Already have an account?
                    <Typography
                      component="a"
                      href="/Login"
                      sx={{
                        color: "#a38a8a",
                        textDecoration: "none",
                        fontSize: { xs: "14px", B370: "16px" },
                        ml: 1,
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

export default Sign_up;
