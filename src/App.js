import React, { useEffect,useState} from 'react';
import axios from "axios";
import './App.css';

const url = "https://api.adviceslip.com/advice";
function App() {
 const[quote,setQuote] = useState([]);

  
  const getQuote = async () =>{
    const res = await axios.get(url);
    const quoteData = res.data.slip;
    //console.log(quoteData);
    setQuote(quoteData);
  } ;
  
  useEffect(()=>{
    getQuote();
  },[])

  return (
    <div className="App">
        
      <div className='body'>
      <h1 className='heading'>Quote</h1>
      {/* <div className='image-bg' style={{
        backgroundImage:`url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh'
        // backgroundSize:'contain',
        // backgroundRepeat:'no-repeat',
        // width:'120%',
        // height:'100vh',
        }}></div> */}
      
        <div className='quote-container'>
          <h4 className='quote-text'>{quote.advice}</h4>
          <button className='click-btn' onClick={getQuote}>Next Quote</button>
        </div>
      </div>
    </div>
  );
}

export default App;
