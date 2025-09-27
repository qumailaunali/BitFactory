"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import AppBarComponent from "@/components/AppBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const handleSidebarToggle = () => setCollapsed(!collapsed);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div style={{ display: "flex", height: "100vh" }}>
                <Sidebar collapsed={collapsed} onToggleCollapse={handleSidebarToggle} />
                <div style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                    <AppBarComponent
                        onMenuToggle={handleSidebarToggle}
                        onDarkModeToggle={toggleDarkMode}
                        darkMode={darkMode}
                    />
                    <main style={{ flexGrow: 1, padding: "24px", marginTop: "64px" }}>
                        {children}
                    </main>
                </div>
            </div>
        </ThemeProvider>
    );
}
