"use client";

import React from "react";
import { Box, Typography, Paper, Grid } from "@mui/material";

export default function WalletPage() {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 3,
                mt: 2,
                backgroundColor: (theme) =>
                    theme.palette.mode === "light" ? "#f5f5f5" : theme.palette.grey[900],
                minHeight: "100vh",
            }}
        >
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                My Wallet
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                Overview of your mining earnings and transactions.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light" ? "#2196f3" : "#1565c0",
                            color: "white",
                        }}
                    >
                        <Typography variant="subtitle1">Total Earnings</Typography>
                        <Typography variant="h5" fontWeight="bold">
                            $0.00
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light" ? "#4caf50" : "#2e7d32",
                            color: "white",
                        }}
                    >
                        <Typography variant="subtitle1">Pending Payouts</Typography>
                        <Typography variant="h5" fontWeight="bold">
                            $0.00
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper
                        sx={{
                            p: 3,
                            borderRadius: 2,
                            backgroundColor: (theme) =>
                                theme.palette.mode === "light" ? "#ffb300" : "#ff8f00",
                            color: "white",
                        }}
                    >
                        <Typography variant="subtitle1">Wallet Address</Typography>
                        <Typography variant="h6">0x1234...abcd</Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
}
