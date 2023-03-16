import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import Router from './router/router'
import './components/styles/footer.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router/>
)
