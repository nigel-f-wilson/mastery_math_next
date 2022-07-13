import React, { useContext } from "react"
import PropTypes from 'prop-types';

// THIRD PARTY
import Link from 'next/link'
import { Button, Typography } from '@mui/material';
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { SettingsContext } from "../../contexts";


export default function PageLinkButton(props) {
  const { label, href } = props

  const { colorTheme } = useContext(SettingsContext)
  const { fontColor } = colorTheme

  const border = `solid ${fontColor} 1px`
  const faIcon = (<FontAwesomeIcon icon={faArrowCircleRight} color={fontColor} size='lg' />)


  return (
    <Link href={href} style={{ textDecoration: 'none', width: "100%" }} >
      <Button 
        component="a"
        endIcon={faIcon}
        sx={{ border: border, height: '2.7rem', width: '90%'}}
      >
        <Typography 
          color={fontColor}
          sx={{
            textTransform: 'none',
            fontWeight: 400,
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