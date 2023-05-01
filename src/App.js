import Navbar from './components/Navbar';
import TextForm from './routes/TextForm';
import About from './routes/About';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState("light");
  const [color, setColor] = useState({bgc:"#4a4d5d",btnc:"dark"})
  
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
    
  }
  
  const changeColor=(bgc,btnc)=>{
    setColor({
      bgc:bgc,
      btnc:btnc
    })
    if(mode==="light"){
      showAlert('Theme Cannot be changed in light mode','warning')
    }
    else{
      showAlert('Theme changed','success')
      document.body.style.backgroundColor=color.bgc 
    }
    
  }
  
  
  
  
  const changeMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor=color.bgc
      showAlert('Dark Mode has been enabled','success')
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert('Light Mode has been enabled','success')
    }
  }
  
  
  return (
    <BrowserRouter>
    <Navbar title="TextUtils" aboutText="About Us" changeColor={changeColor} changeMode={changeMode} mode={mode} />
    <Alert alert={alert} />
    <div className="container my-2" >
      <Routes>
        <Route path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} color={color}/>}/>
         <Route path="about" element={<About mode={mode} />}/>
          <Route path="*" element={<h1>This Page does not exist</h1>}/>
         <Route/>


      </Routes>

    </div>
  </BrowserRouter>
  );
}

export default App;
