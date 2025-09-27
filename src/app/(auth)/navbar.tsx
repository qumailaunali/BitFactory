"use client";

import React from "react";
import {
    AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Box
} from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import Link from "next/link";

export default function Navbar() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Toolbar>
                {/* Logo */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link href="/">MyApp</Link>
                </Typography>

                {/* Settings */}
                <IconButton component={Link} href="/settings" color="inherit">
                    <SettingsIcon />
                </IconButton>

                {/* Account Menu */}
                <div>
                    <IconButton
                        size="large"
                        color="inherit"
                        onClick={handleMenu}
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem component={Link} href="/profile">Profile</MenuItem>
                        <MenuItem component={Link} href="/account-settings">Account Settings</MenuItem>
                        <MenuItem onClick={() => alert("Signing out...")}>Sign out</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
}
