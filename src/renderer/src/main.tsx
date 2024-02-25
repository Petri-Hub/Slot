import React from 'react'
import ReactDOM from 'react-dom/client'

import { MainWindow } from './pages/MainWindow'
import { TriggersWindow } from './pages/TriggersWindow'

import './assets/styles/reset.css'
import './assets/styles/base.css'

declare global {
   interface Window { 
      callEvent: (event: string, params?: any) => void; 
   }
}


const params = new URLSearchParams(window.location.search)
const choosedWindow = params.get('window') as ('main' | 'triggers')

const windows = {
   'main': <MainWindow />,
   'triggers': <TriggersWindow />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      {windows[choosedWindow]}
   </React.StrictMode>
)
