"use client";

import { Box, Typography, Paper } from "@mui/material";

export default function Miners() {
    return (
        <Box sx={{ p: 3, mt: 2, minHeight: "100vh" }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                My Miners
            </Typography>
            <Paper sx={{ p: 3, mt: 2 }}>
                <Typography>
                    You have no miners yet. Add your mining rigs to see their status here.
                </Typography>
            </Paper>
        </Box>
    );
}
