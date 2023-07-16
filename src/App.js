//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react';
import Alert from './components/Alert';
//import About from './components/About';
import React from 'react';
//import {
//  BrowserRouter as Router,
  //Routes,
 // Route,
  //Link
//} from "react-router-dom";

function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState();

  const showAlert=()=>{
    setAlert(
     "Hurray! Glad to help you dear."
    );
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-dark')
  }
  const toggleMode=(cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert();
      document.title='CreaText-Dark mode';
      setInterval(()=>{
       document.title='Install Creatext now';
      },2000);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert();
      document.title='CreaText-Light mode';
    }
  }
  return (
    <>
    {/*<Navbar title="TextUtils" aboutText="About us"/>*/}
    {/*<Navbar>*/}
    {/*<Router>*/}
    <Navbar title="CreaTe'xt" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    {/*<Routes>
          <Route exact path="/about" element={<About mode={mode}/>}>
  </Route>*/}
          {/*<Route exact path="/" element={*/}
          <TextForm showAlert={showAlert} heading="Enter your text here..." mode={mode}/>
          {/*</Route>
        </Routes>*/}
        
{/*<About/>*/}
    </div>
   {/*} </Router>*/}
    </>
  );
}

export default App;
