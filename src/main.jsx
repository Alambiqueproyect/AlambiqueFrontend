import React from 'react'
import ReactDOM from 'react-dom/client'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Route } from 'react-router-dom'
import './index.css'
import Router from './router/router'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Router />
)
