import React, { useContext } from "react"
import PropTypes from 'prop-types';

// THIRD PARTY
import { Grid, Button, Typography } from '@mui/material';
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { SettingsContext } from "../../contexts";

export default function ScrollToSectionButton(props) {
  const { label, refToScrollTo } = props

  const { colorTheme } = useContext(SettingsContext)
  const { fontColor } = colorTheme

  const border = `solid ${fontColor} 1px`
  const faIcon = (<FontAwesomeIcon icon={faArrowCircleDown} color={fontColor} size='lg' />)
  
  const handleScrollButtonClick = () => { refToScrollTo.current.scrollIntoView({ behavior: 'smooth' })}

  return (
    <Grid item xs={6} sm={3} display='flex' justifyContent="center" alignItems="top" >
      {/* <a href={to} > */}
        <Button 
          onClick={handleScrollButtonClick}
          // href={to}
          // ref={ref}
          // component="a" 
          startIcon={faIcon}
          sx={{ border: border, height: '2.7rem', width: '90%'}}
        >
          <Typography 
            children={label}
            color={fontColor}
            sx={{
              textTransform: 'none',
              fontWeight: 400,
              // letterSpacing: '2px',
              fontSize: '1.4rem',
              lineHeight: '2.0rem',
            }}
          />
        </Button>
      {/* </a> */}
    </Grid>
      
  )
}
ScrollToSectionButton.propTypes = {
  label: PropTypes.string.isRequired,
  refToScrollTo: PropTypes.node.isRequired
}