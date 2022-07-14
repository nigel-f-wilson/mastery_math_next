import React, { useContext } from 'react'

// THIRD PARTY
// import { useAuth0 } from "@auth0/auth0-react";
import { Box, Drawer , IconButton, Typography } from '@mui/material';

// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

// CUSTOM
import { LightDarkModeToggle } from "./";
// import { LoginButton, LogoutButton } from '../buttons';
// import { ProfileSummary } from '../auth';
import { SettingsContext, LayoutContext } from '../../contexts';
import { FlexRow } from "../layout";

export default function MenuDrawer(props) {
  const { drawerOpen, toggleDrawer } = props

  // const { isAuthenticated, user } = useAuth0()
  const isAuthenticated = false
  const user = undefined

  const { navbarHeightPx } = useContext(LayoutContext)
  const { colorTheme } = useContext(SettingsContext)
  const { fontColor, bgColor } = colorTheme

  return (
   <Drawer 
      open={drawerOpen} 
      anchor='right' 
      role="navigation"
      // onClick={toggleDrawer}
      // onKeyDown={toggleDrawer}
    >
      <Box
        width='320px'
        height='100vh' 
        paddingX='1rem'
        color={fontColor}
        bgcolor={bgColor}
      >
        <Box display='flex' justifyContent='end' height={`${navbarHeightPx}px`}   >
          <IconButton  onClick={toggleDrawer} aria-controls="main-menu" aria-haspopup="true" sx={{ padding: 0 }} >
            <FontAwesomeIcon icon={faTimes} color={fontColor} size='lg' />
          </IconButton>
        </Box>

        {/* <FlexRow height="80px" >
          {!isAuthenticated && ( <ButtonLabel text="You are not signed in." /> )}
          {isAuthenticated && ( <ProfileSummary user={user} /> )}
        </FlexRow>
        <FlexRow height="5rem" border >
          {!isAuthenticated && ( <LoginButton /> )}
          {isAuthenticated && ( <LogoutButton /> )}
        </FlexRow>   */}

        <Typography variant='h3' >About</Typography>

        <Typography variant='h3' >Services</Typography>
        
        <Typography variant='h3' >Resources</Typography>

        
        
        <LightDarkModeToggle />
      
      </Box>
    </Drawer>
  )
}