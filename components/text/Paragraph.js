import React, { useContext } from 'react'
import { Typography } from '@mui/material';

import theme from "../../theme";
import { SettingsContext } from "../../contexts";

export default function Paragraph(props) {
  const { 
    text,
    fontFamily = "roboto",
    gutterBottom = false
  } = props

  const { colorTheme } = useContext(SettingsContext)
  const { fontColor } = colorTheme


  return (
    <Typography 
      color={fontColor}
      fontFamily={fontFamily}
      align="justify" 
      variant="body1"
      gutterBottom={gutterBottom}
      sx={{
        fontSize: '0.9rem',
        [theme.breakpoints.up('sm')]: {
          fontSize: '1.1rem',
        },
        // [theme.breakpoints.up('md')]: {
        //   fontSize: '1.3rem',
        // },
      }}
    >
      {text}
    </Typography>
  )
}