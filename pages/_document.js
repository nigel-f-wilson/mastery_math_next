import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" /> */}
          {/* <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin /> */}
          <link 
            rel="stylesheet" 
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" 
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"  
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Merriweather&family=Walter+Turncoat&display=swap"  
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Patrick+Hand+SC&display=swap"  
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Special+Elite&display=swap"  
          />
          <link 
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Walter+Turncoat&display=swap"  
          />

          {/* <script src="https://kit.fontawesome.com/c5fa8af2f7.js" crossorigin="anonymous"></script> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument