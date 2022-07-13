import '../styles/globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

// App Context
import { SettingsContextProvider, LayoutContextProvider } from '../contexts';

function MyApp({ Component, pageProps }) {
  return (
    <SettingsContextProvider >
      <LayoutContextProvider >
        <Component {...pageProps} />
      </LayoutContextProvider>
    </SettingsContextProvider>
  )
}

export default MyApp
