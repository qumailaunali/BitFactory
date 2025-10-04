"use client";

import React, { useState } from "react";
import AppBarComponent from "@/components/AppBar";
import UserFooter from "@/components/UserFooter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme = createTheme({ palette: { mode: "dark" } });

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(!darkMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <AppBarComponent
                    onDarkModeToggle={toggleDarkMode}
                    darkMode={darkMode}
                />
                <main style={{ flexGrow: 1, padding: "24px", marginTop: "64px", overflow: "auto" }}>
                    {children}
                </main>
                <UserFooter />
            </div>
        </ThemeProvider>
    );
}
