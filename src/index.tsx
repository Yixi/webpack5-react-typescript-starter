import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from '@root/App'
import './styles/style.scss'

const root = createRoot(document.getElementById('app'))

root.render(<App/>)
