import React from "react"

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';

import styles from '../styles/Home.module.css'

// THIRD PARTY
import { Box, Container } from '@mui/material';
// ICONS

// INTERNAL
import { Title, Subtitle  } from "../components/text";
import { PageBackground } from "../components/layout";

export default function Dashboard() {
  
  return (
    <div>
      <Head>
        <title>Mastery Math Dashboard</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <Box >
          {/* <Navbar /> */}
          <PageBackground >
            <FullscreenLandingSection id={id} disableNavbarPadding >
              <Box pt={3} pb={4}  >
                <Title text="Dashboard"  gutterBottom />
                
                <Subtitle text="in mental computation."  />
              </Box>
            </FullscreenLandingSection>
          </PageBackground>
        </Box>
        


      </main>
      <footer className={styles.footer}>
        <Link href={`/next-welcome`}>
          <a>It&rsquo;s a NEXT app</a>
        </Link>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}





function FullscreenLandingSection(props) {
  const { id, children  } = props
  // const { navbarHeightPx } = useContext(LayoutContext)
  // const paddingTop = (disableNavbarPadding) ? "0" : `${navbarHeightPx}px`
  
  return (
    <Box id={id} 
      height="auto"
      minHeight='100vh'
      width="100vw"
      display='flex'
      flexDirection="column"
      
      paddingX={2}
      // paddingTop={paddingTop}
      paddingTop={0}
      // border="solid green 1px"
    >
      <Container maxWidth="md" 
        // sx={{border: "solid red 1px"}}
       >
        {children}
      </Container>
    </Box>
  )
}
