import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {PostContextProvider} from './context/PostContext.jsx'
import { ChatContextProvider } from './context/ChatContext.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PostContextProvider>
      <ChatContextProvider>
        <App />
      </ChatContextProvider>
    </PostContextProvider>
  </React.StrictMode>
)
