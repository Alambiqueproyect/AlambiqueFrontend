import React from 'react'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from './components/Login';
import { RegisterViewComponent } from './components/RegisterViewComponent';
import { useState } from 'react'
function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (formName) =>{
    setCurrentForm(formName);
  }
  return (
    < div>
      {
        currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <RegisterViewComponent onFormSwitch={toggleForm}/>
      }
      {/* <RegisterViewComponent /> */}
    </div>
  )
}
export default App



