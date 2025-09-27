"use client";

import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
    Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircle from "@mui/icons-material/AccountCircle";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import Link from "next/link";
import Image from "next/image";

interface AppBarProps {
    onMenuToggle: () => void;
    onDarkModeToggle: () => void;
    darkMode: boolean;
}

export default function AppBarComponent({
                                            onMenuToggle,
                                            onDarkModeToggle,
                                            darkMode,
                                        }: AppBarProps) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar
            position="fixed"
            sx={{
                zIndex: 1201,
                backgroundColor: darkMode ? "grey.900" : "white",
                color: darkMode ? "white" : "black",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
        >
            <Toolbar>
                {/* Hamburger */}
                <IconButton edge="start" onClick={onMenuToggle} sx={{ color: darkMode ? "white" : "black" }}>
                    <MenuIcon />
                </IconButton>

                {/* Logo */}
                <Box sx={{ flexGrow: 1, ml: 2 }}>
                    <Link href="/dashboard">
                        <Image
                            src="/BitfactoryLogo.webp"
                            alt="BitFactory Logo"
                            width={140}
                            height={40}
                            priority
                            style={{ cursor: "pointer", height: "auto" }}
                        />
                    </Link>
                </Box>

                {/* Dark Mode Toggle */}
                <IconButton onClick={onDarkModeToggle} sx={{ color: darkMode ? "white" : "black" }}>
                    {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
                </IconButton>

                {/* Settings */}
                <IconButton component={Link} href="/settings" sx={{ color: darkMode ? "white" : "black" }}>
                    <SettingsIcon />
                </IconButton>

                {/* Account Menu */}
                <IconButton onClick={handleMenu} sx={{ color: darkMode ? "white" : "black" }}>
                    <AccountCircle />
                </IconButton>
                <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
                    <MenuItem component={Link} href="/profile" onClick={handleClose}>
                        Profile
                    </MenuItem>
                    <MenuItem component={Link} href="/account-settings" onClick={handleClose}>
                        Account Settings
                    </MenuItem>
                    <MenuItem component={Link} href="/login" onClick={handleClose}>
                        Sign Out
                    </MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}
