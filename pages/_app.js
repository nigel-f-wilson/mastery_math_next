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

//  copied from the next auth sample

// import { SessionProvider } from "next-auth/react"
// import "./styles.css"

// import type { AppProps } from "next/app"

// // Use of the <SessionProvider> is mandatory to allow components that call
// // `useSession()` anywhere in your application to access the `session` object.
// export default function App({ Component, pageProps }: AppProps) {
//   return (
//     <SessionProvider session={pageProps.session} refetchInterval={0}>
//       <Component {...pageProps} />
//     </SessionProvider>
//   )
// }