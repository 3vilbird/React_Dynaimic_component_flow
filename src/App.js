
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Master} from './componentMaster/Master'

function App() {

const[nav,setNav] = useState(["one","two","three","four"]);
const[page,setPage] = useState(0);


const IncreamentPage = ()=>{
  if(page < nav.length-1){
    setPage(page+1);  
  }
    else{
      setPage(0);     
    }
}



const GetContenent = ()=> Master(IncreamentPage ,nav[page]);  //
  return (
    <div className="App">
      <header className="App-header">
     {GetContenent()}
      </header>
    </div>
  );
}

export default App;
