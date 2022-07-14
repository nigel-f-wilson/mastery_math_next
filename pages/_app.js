import '../styles/globals.css'

// FONT AWESOME
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// NEXT AUTH
import { SessionProvider } from "next-auth/react"

// App Context
import { SettingsContextProvider, LayoutContextProvider } from '../contexts';

function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <SettingsContextProvider >
        <LayoutContextProvider >
          <Component {...pageProps} />
        </LayoutContextProvider>
      </SettingsContextProvider>
    </SessionProvider>
  )
}

export default MyApp
