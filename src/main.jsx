import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route } from 'react-router-dom'
import './index.css'
import Router from './router/router'
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router/>
)
