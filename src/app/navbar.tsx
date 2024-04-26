"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Works", path: "/works" },
];

function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Initially checks for the user's preference for dark mode
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return prefersDarkMode;
  });

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: isDarkMode ? "#333" : "transparent",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 300,
              color: isDarkMode ? "white" : "inherit",
              textDecoration: "none",
            }}
          >
            KevinElyan
          </Typography>

          {isMobile ? (
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ flexGrow: 1, textAlign: "center" }}>
              {" "}
              {/* Center align for web version */}
              {pages.map((page) => (
                <Button
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  sx={{ mr: 1, color: "inherit" }}
                  href={page.path}
                >
                  {page.label}
                </Button>
              ))}
            </Box>
          )}

          <Box sx={{ ml: "auto" }}>
            <IconButton
              edge="end"
              aria-label="toggle dark mode"
              onClick={toggleDarkMode}
              color="inherit"
            >
              {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu */}
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
      >
        {pages.map((page) => (
          <MenuItem key={page.label} onClick={handleCloseNavMenu}>
            <Typography
              component="a"
              href={page.path}
              textAlign="center"
              color="inherit"
              sx={{ textDecoration: "none" }}
            >
              {page.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
}

export default Navbar;
