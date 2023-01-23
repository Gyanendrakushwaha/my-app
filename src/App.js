import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";


function App(){

  const [mode,setMode] = useState('light'); //whether dark mode is enabled. 
  const [alert,setAlert]= useState(null);
  
  const showAlert= (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    //set timer after function
    setTimeout(()=>{
      setAlert(null);
      
    },1500)
  }
  
  const toggleMode= ()=>{
    console.log("clicked");
  if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#042743';
    showAlert("Dark Mode Enabled","success");
  }else{
    setMode('light');  
    document.body.style.backgroundColor='white';
    showAlert("light Mode Enabled","success");
  }
 };
  return (
    <>
     <Router>
    
    {/* variable or function can be accesed by props */}
    <Navbar title="TextUtils" mode={mode} togglemode={toggleMode}/> 
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Routes >
          <Route path="/About"
          element={<About />} />
            
            <Route path="/"
          element={<TextForm showAlert={showAlert} heading="Enter The Details Below" mode={mode}/> } />
          
          
         
        </Routes>

    </div>
   
    </Router>
    </>
  );
}

export default App;
