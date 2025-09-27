"use client";

import React from "react";
import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(to bottom right, #1a202c, #2d3748, #4a5568)",
                color: "white",
                textAlign: "center",
                p: 2,
            }}
        >
            <Box sx={{ maxWidth: 600 }}>
                <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
                    🚧 Work in Progress
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                    Our CryptoMiner Dashboard is under construction.
                    Stay tuned for something amazing!
                </Typography>
                <Button
                    variant="contained"
                    color="warning"
                    size="large"
                    component={Link}
                    href="/login"
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
}
