import React, { useContext } from "react";

import { SettingsContext } from '../../contexts';

// THIRD PARTY
import { Typography } from '@mui/material';
// ICONS

// INTERNAL

export default function ButtonLabel(props) {
  const { label } = props

  const { colorTheme } = useContext(SettingsContext)
  const { fontColor } = colorTheme


  return (
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
  );
};