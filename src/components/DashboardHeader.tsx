// src/components/DashboardHeader.tsx
"use client";

/**
 * DashboardHeader
 * - Renders the large greeting and centered filter chips (pills).
 * - Fully responsive: chips wrap on small screens.
 *
 * Props: none (this component is presentational).
 *
 * Uses MUI components and respects theme (dark/light).
 */

import React from "react";
import { Box, Typography, Stack, Chip } from "@mui/material";

export default function DashboardHeader() {
    return (
        <Box
            component="section"
            aria-labelledby="dashboard-greeting"
            sx={{
                textAlign: "center",
                mb: { xs: 3, md: 4 },
                mt: { xs: 0, md: 0 },
            }}
        >
            {/* Large greeting */}
            <Typography
                id="dashboard-greeting"
                variant="h3"
                component="h1"
                sx={{
                    fontWeight: 700,
                    mb: 2,
                    lineHeight: 1.05,
                    // Responsive font sizing
                    fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.6rem" },
                }}
            >
                Hello Ahmed
            </Typography>

            {/* Centered chip filters */}
            <Stack
                direction="row"
                spacing={1.5}
                justifyContent="center"
                alignItems="center"
                sx={{ flexWrap: "wrap", gap: 1 }}
                role="tablist"
                aria-label="dashboard filters"
            >
                <Chip
                    label="Electricity"
                    clickable
                    variant="filled"
                    color="primary"
                    aria-pressed="false"
                />
                <Chip label="Network" clickable variant="outlined" />
                <Chip label="Temperature" clickable variant="outlined" />
            </Stack>
        </Box>
    );
}
