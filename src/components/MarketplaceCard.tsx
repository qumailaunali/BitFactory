// src/components/MarketplaceCard.tsx
"use client";

/**
 * MarketplaceCard
 *
 * Props:
 * - runningCount: number
 * - comingSoon: boolean
 *
 * Visual:
 * - Title + icon
 * - subtitle
 * - thin progress bar
 * - "COMING SOON" label when comingSoon is true (right aligned)
 */

import React from "react";
import {
    Box,
    Card,
    CardContent,
    Typography,
    LinearProgress,
    Chip,
    useTheme,
    SvgIcon,
} from "@mui/material";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";

export interface MarketplaceCardProps {
    runningCount: number;
    comingSoon?: boolean;
}

export default function MarketplaceCard({
                                            runningCount,
                                            comingSoon = false,
                                        }: MarketplaceCardProps) {
    const theme = useTheme();

    const progressSx = {
        height: 6,
        borderRadius: 3,
        "& .MuiLinearProgress-bar": {
            borderRadius: 3,
            backgroundColor: theme.palette.mode === "dark" ? "#90caf9" : "#90caf9",
        },
        backgroundColor:
            theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
    };

    return (
        <Card
            sx={{
                borderRadius: 2,
                boxShadow: "0px 6px 18px rgba(2,6,23,0.06)",
                height: "100%",
                display: "flex",
                flexDirection: "column",
            }}
            role="region"
            aria-label="Hashpower Marketplace"
        >
            <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 1 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <SvgIcon component={CloudQueueIcon} sx={{ fontSize: 28, color: "primary.main" }} aria-hidden />
                    <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Hashpower Marketplace
                    </Typography>

                    {/* spacer */}
                    <Box sx={{ flex: 1 }} />

                    {/* Coming soon label on the right */}
                    {comingSoon && (
                        <Chip
                            label="COMING SOON"
                            color="default"
                            variant="outlined"
                            sx={{ fontWeight: 700 }}
                            aria-hidden
                        />
                    )}
                </Box>

                <Typography variant="body2" color="text.secondary">
                    {runningCount} running
                </Typography>

                <Box sx={{ width: "100%", mt: 1 }}>
                    <LinearProgress variant="determinate" value={0} sx={progressSx} aria-hidden />
                </Box>

                <Box sx={{ flex: 1 }} />
            </CardContent>
        </Card>
    );
}
