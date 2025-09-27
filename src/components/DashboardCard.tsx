"use client";

import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface DashboardCardProps {
    title: string;
    value: string;
    color?: string;
}

export default function DashboardCard({ title, value, color }: DashboardCardProps) {
    return (
        <Card
            sx={{
                background: color || "linear-gradient(to right, #2196f3, #21cbf3)",
                color: "white",
                borderRadius: "12px",
            }}
        >
            <CardContent>
                <Typography variant="subtitle1" fontWeight="bold">
                    {title}
                </Typography>
                <Typography variant="h5" fontWeight="bold">
                    {value}
                </Typography>
            </CardContent>
        </Card>
    );
}
