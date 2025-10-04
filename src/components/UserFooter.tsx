"use client";

import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function UserFooter() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        px: 2,
        mt: 'auto',
        backgroundColor: theme.palette.mode === 'dark' 
          ? 'rgba(0, 0, 0, 0.8)' 
          : 'rgba(248, 249, 250, 0.8)',
        borderTop: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      {/* Logo */}
      <Link href="/dashboard">
        <Image
          src="/BitfactoryLogo.webp"
          alt="BitFactory Logo"
          width={180}
          height={50}
          priority
          style={{ 
            cursor: "pointer", 
            height: "auto",
            filter: theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none'
          }}
        />
      </Link>

      {/* Copyright Text */}
      <Typography 
        variant="body2" 
        sx={{ 
          color: theme.palette.text.secondary,
          textAlign: 'center',
          fontSize: '0.875rem'
        }}
      >
        © {new Date().getFullYear()} BitFactory. All rights reserved.
      </Typography>
    </Box>
  );
}