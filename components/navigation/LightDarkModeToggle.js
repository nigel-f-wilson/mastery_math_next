// Source --> https://www.youtube.com/watch?v=ad9f-EYtWPo&ab_channel=WebDevEducation
import React, { useContext } from "react";
import styles from  "../../styles/lightDarkModeToggle.module.css";

import { Box } from '@mui/material';

import { SettingsContext } from '../../contexts';
import { ButtonLabel } from "../text";

export default function LightDarkModeToggle(props) {
  const { colorTheme, toggleColorTheme } = useContext(SettingsContext)
  
  let toggled = (colorTheme.name === "dark") ? true : false
  let label = (colorTheme.name === "dark") ? "Dark Theme" : "Light Theme"
  let toggleClass = `${styles.toggle} ${toggled ? styles.night : ""}`

  return (
    <Box position='absolute' bottom='1.0rem'  display='flex' flexDirection='row' justifyContent='start' alignItems='center' >
      <Box width='50px' height="25px" mr={2} >
        <div onClick={toggleColorTheme} className={toggleClass} >
          <div className={`${styles.notch}`}>
              <div className={`${styles.crater}`} />
              <div className={`${styles.crater}`} />
          </div>
          <div>
              <div className={`${styles.shape} ${styles.sm}`} />
              <div className={`${styles.shape} ${styles.sm}`} />
              <div className={`${styles.shape} ${styles.md}`} />
              <div className={`${styles.shape} ${styles.lg}`} />
          </div>
        </div>
      </Box>
      <ButtonLabel label={label} />
    </Box>
  );
}