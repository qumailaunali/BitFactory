    // src/app/(auth)/dashboard/page.tsx
    "use client";

    /**
     * Dashboard page (authenticated)
     *
     * Composes:
     * - DashboardHeader
     * - HostedMinersCard
     * - MarketplaceCard
     * - Four GradientStatCard instances
     *
     * Notes:
     * - This page provides demo/hardcoded values for now.
     * - Individual components are fully data-driven via props.
     *
     * Layout:
     * - Container maxWidth="lg"
     * - Grid breakpoints used to meet responsive requirements
     */

    import React from "react";
    import { Container, Grid, Box } from "@mui/material";
    import DashboardHeader from "@/components/DashboardHeader";
    import HostedMinersCard from "@/components/HostedMinersCard";
    import MarketplaceCard from "@/components/MarketplaceCard";
    import GradientStatCard from "@/components/GradientStatCard";
    import EuroSymbolIcon from "@mui/icons-material/EuroSymbol";
    import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
    import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
    import ShowChartIcon from "@mui/icons-material/ShowChart";

    export default function DashboardPage() {
        // demo/hardcoded values (page-level only)
        const hosted = {
            runningCount: 3,
            progress: 66,
            errorCount: 2,
        };

        const marketplace = {
            runningCount: 0,
            comingSoon: true,
        };

        return (
            <Box component="main" sx={{ pt: 2, pb: 4 }}>
                <Container maxWidth="lg">
                    {/* Header */}
                    <DashboardHeader />

                    {/* Top two horizontal cards */}
                    <Grid container spacing={3} sx={{ mb: 1 }}>
                        <Grid item xs={12} md={7}>
                            {/* Hosted miners: left wide card on desktop */}
                            <HostedMinersCard
                                runningCount={hosted.runningCount}
                                progress={hosted.progress}
                                errorCount={hosted.errorCount}
                                onAddMiner={() => {
                                    // stub for now, later wire to modal / route
                                    console.log("ADD MINER clicked from DashboardPage");
                                }}
                            />
                        </Grid>

                        <Grid item xs={12} md={5}>
                            {/* Marketplace card */}
                            <MarketplaceCard
                                runningCount={marketplace.runningCount}
                                comingSoon={marketplace.comingSoon}
                            />
                        </Grid>
                    </Grid>

                    {/* Row of 4 gradient info cards */}
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={6} md={3}>
                            <GradientStatCard
                                title="EUR Account"
                                value="€ 0.00"
                                caption="yesterday"
                                gradient="linear-gradient(135deg, #00C6FF 0%, #0072FF 100%)"
                                icon={<EuroSymbolIcon fontSize="small" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <GradientStatCard
                                title="COSTS"
                                value="€ 12.34"
                                caption="yesterday"
                                gradient="linear-gradient(135deg, #00BFA6 0%, #1DE9B6 100%)"
                                icon={<AttachMoneyIcon fontSize="small" />}
                            />
                        </Grid>

                        <Grid item xs={12} sm={6} md={3}>
                            <GradientStatCard
                                title="Estimated mining days left"
                                value="7 days"
                                caption="days"
                                gradient="linear-gradient(135deg, #2196F3 0%, #21CBF3 100%)"
                                icon={<CalendarTodayIcon fontSize="small" />}
                            />
                        </Grid>
    
                        <Grid item xs={12} sm={6} md={3}>
                            <GradientStatCard
                                title="Estimate monthly cost"
                                value="€ 45.60"
                                caption="month"
                                gradient="linear-gradient(135deg, #FFB300 0%, #FFCA28 100%)"
                                icon={<ShowChartIcon fontSize="small" />}
                            />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }
