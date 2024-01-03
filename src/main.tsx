import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import GlobalStyle from './styles/GlobalStyle.ts'
import ClimaProvider from './contexts/ClimaContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ClimaProvider>
      <GlobalStyle />
      <App />
    </ClimaProvider>
  </React.StrictMode>,
)
