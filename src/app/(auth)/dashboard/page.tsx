"use client";

import { Box, Grid, Typography } from "@mui/material";
import DashboardCard from "@/components/DashboardCard";

export default function Dashboard() {
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
                Dashboard
            </Typography>
            <Typography variant="body1" color="text.secondary" gutterBottom>
                Welcome to BitFactory! Your CryptoMiner Dashboard is ready.
            </Typography>

            <Grid container spacing={3} sx={{ mt: 1 }}>
                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Mining Status"
                        value="Active"
                        color="linear-gradient(to right, #2196f3, #21cbf3)"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Hash Rate"
                        value="125.4 MH/s"
                        color="linear-gradient(to right, #4caf50, #81c784)"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <DashboardCard
                        title="Earnings"
                        value="$0.00"
                        color="linear-gradient(to right, #ffb300, #ffca28)"
                    />
                </Grid>
            </Grid>
        </Box>
    );
}
