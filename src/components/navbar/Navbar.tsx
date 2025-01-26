import { useState, ReactNode } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Menu,
  MenuItem,
  Stack,
  IconButton,
  Box,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
  useMediaQuery,
  Divider,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

interface NavbarProps {
  children?: ReactNode;
}

const Navbar = ({ children }: NavbarProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerClose = () => {
    setMobileOpen(false);
  };

  const navItems = [
    { label: "Home", href: "#Home" },
    { label: "Experience", href: "#Experience" },
    { label: "Education", href: "#Education" },
    { label: "Skills", href: "#Skills" },
    {
      label: "Projects",
      subItems: [{ label: "All Projects", href: "#Projects" }],
    },
  ];

  const socialLinks = [
    {
      icon: <LinkedInIcon />,
      href: "https://www.linkedin.com/in/raheem-tiamiyu-aa7511230/",
      label: "LinkedIn",
    },
    {
      icon: <GitHubIcon />,
      href: "https://github.com/Tosvng",
      label: "GitHub",
    },
  ];

  const renderNavItems = (mobile: boolean = false) =>
    navItems.map((item) =>
      item.subItems ? (
        <Box key={item.label}>
          {mobile ? (
            <>
              <ListItem>
                <ListItemText
                  primary={item.label}
                  sx={{ color: "text.secondary" }}
                />
              </ListItem>
              <List sx={{ pl: 2 }}>
                {item.subItems.map((subItem) => (
                  <ListItem
                    key={subItem.label}
                    component="a"
                    href={subItem.href}
                    onClick={handleDrawerClose}
                    sx={{
                      color: "text.primary",
                      "&:hover": {
                        color: "primary.main",
                      },
                    }}
                  >
                    <ListItemText primary={subItem.label} />
                  </ListItem>
                ))}
              </List>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={handleClick}
              aria-controls={open ? "projects-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              {item.label}
            </Button>
          )}
        </Box>
      ) : (
        <Box key={item.label}>
          {mobile ? (
            <ListItem
              component="a"
              href={item.href}
              onClick={handleDrawerClose}
              sx={{
                color: "text.primary",
                "&:hover": {
                  color: "primary.main",
                },
              }}
            >
              <ListItemText primary={item.label} />
            </ListItem>
          ) : (
            <Button color="inherit" href={item.href}>
              {item.label}
            </Button>
          )}
        </Box>
      )
    );

  return (
    <AppBar
      position="fixed"
      color="inherit"
      sx={{ borderRadius: 0, borderTop: 0, borderLeft: 0, borderRight: 0 }}
    >
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1 }} />
          </>
        ) : (
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1 }}>
            {renderNavItems()}
            <Menu
              id="projects-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
            >
              {navItems
                .find((item) => item.subItems !== undefined)
                ?.subItems.map((subItem) => (
                  <MenuItem
                    key={subItem.label}
                    onClick={handleClose}
                    component="a"
                    href={subItem.href}
                  >
                    {subItem.label}
                  </MenuItem>
                ))}
            </Menu>
          </Stack>
        )}

        <Stack direction="row" spacing={1} alignItems="center">
          {socialLinks.map((link) => (
            <IconButton
              key={link.label}
              color="inherit"
              href={link.href}
              target="_blank"
              aria-label={link.label}
            >
              {link.icon}
            </IconButton>
          ))}
          {children}
        </Stack>
      </Toolbar>

      <SwipeableDrawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerClose}
        onOpen={handleDrawerToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            background: theme.palette.background.default,
          },
        }}
      >
        <Toolbar />
        <Divider />
        <List>{renderNavItems(true)}</List>
      </SwipeableDrawer>
    </AppBar>
  );
};

export default Navbar;
