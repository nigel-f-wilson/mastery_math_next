import React, { useContext } from "react"
import PropTypes from 'prop-types';

// THIRD PARTY
import { Box, Fade, IconButton } from '@mui/material';
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
// import { ButtonLabel } from "./";
import { LayoutContext, SettingsContext } from "../../contexts";
import { useScrollPosition } from "../../hooks";

export default function ScrollToTopButton() {
  const { narrowScreen } = useContext(LayoutContext)
  
  const { colorTheme } = useContext(SettingsContext)
  const { fontColor, bgColor } = colorTheme

  let iconSize = narrowScreen ? "2x" : "4x"
  let insetFromCorner = narrowScreen ? "1.0rem" : "2.0rem"
  let scrolledDown = (useScrollPosition() > 500)

  const handleScrollToTopClick = () => { window.scrollTo({ top: 0, behavior: 'smooth' })}

  return (
    <Fade in={scrolledDown} >
      <Box 
        display="flex"
        position='fixed' 
        bottom={insetFromCorner} 
        right={insetFromCorner} 
      >
        {/* <HashLink smooth to="#top" style={{ borderRadius: "50%", backgroundColor: bgColor }} > */}
          <IconButton onClick={handleScrollToTopClick} >
            <FontAwesomeIcon icon={faArrowCircleUp} color={fontColor} size='lg' />
          </IconButton>
        {/* </HashLink> */}
      </Box>
    </Fade>
  );
}