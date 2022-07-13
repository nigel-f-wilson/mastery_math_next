import '../styles/globals.css'

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
