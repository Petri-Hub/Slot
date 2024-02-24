import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainWindow } from './windows/MainWindow'

import './assets/styles/reset.css'
import './assets/styles/base.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MainWindow />
  </React.StrictMode>
)
