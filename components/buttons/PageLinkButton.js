import React from "react";
import Link from 'next/link'

// THIRD PARTY
import { Button, Typography } from '@mui/material';
// ICONS
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// INTERNAL

export default function PageLinkButton(props) {
  const { to, label } = props
  return (
    <Link to={to} style={{ textDecoration: 'none', width: "100%" }} >
      <Button 
          endIcon={faArrowCircleRight}
          sx={{ border: border, height: '2.7rem', width: '90%'}}
        >
          <Typography 
            color={fontColor}
            sx={{
              textTransform: 'none',
              fontWeight: 400,
              // letterSpacing: '2px',
              fontSize: '1.4rem',
              lineHeight: '2.0rem',
            }}
          >
            {label}
          </Typography>
        </Button>
    </Link>
  );
};