import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraBaseProvider, extendTheme } from '@chakra-ui/react'

// extending the theme
const colors = {
  brand: {
    50: '#ffe4fa',
    100: '#ffb4e5',
    200: '#fa85d1',
    300: '#f755be',
    400: '#f325ab',
    500: '#da0c92',
    600: '#aa0571',
    700: '#7a0252',
    800: '#4c0032',
    900: '#1e0013',
  },
}
const fonts = {
  body: 'Montserrat',
  heading: 'Courier New',
}
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ colors, fonts, config })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraBaseProvider theme={theme}>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>
)
