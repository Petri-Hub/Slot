import React from 'react'
import ReactDOM from 'react-dom/client'

import { TriggersWindow } from './windows/TriggersWindow'

import './assets/styles/reset.css'
import './assets/styles/base.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TriggersWindow />
  </React.StrictMode>
)
