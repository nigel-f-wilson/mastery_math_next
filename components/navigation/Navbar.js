import React, { useContext, useState } from 'react'

// THIRD PARTY
import { Box, AppBar , IconButton } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

// INTERNAL
import { SettingsContext, LayoutContext } from '../../contexts';
import { MenuDrawer } from "./";

export default function Navbar(props) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const { navbarHeightPx } = useContext(LayoutContext)


  const { colorTheme } = useContext(SettingsContext)
  const { bgAccentColor, fontColor } = colorTheme

  const toggleDrawer = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen((prev) => !prev)
  };

  return (
    <AppBar position='sticky' >
      <Box height={`${navbarHeightPx}px`} bgcolor={bgAccentColor} display='flex' justifyContent='end' alignItems='center' paddingX='0.5rem' >
        <IconButton onClick={toggleDrawer} aria-controls="main-menu" aria-haspopup="true" sx={{ mr: 2 }} >
          <FontAwesomeIcon icon={faBars} color={fontColor} />
        </IconButton>
        <MenuDrawer 
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
        />
      </Box>
    </AppBar>
  )
}