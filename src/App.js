import "./App.css";

import ReactFCC from "react-fcctest";
import data from "./quotes.json"
import React from "react";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { FiRefreshCcw } from 'react-icons/fi'
import { IconContext } from "react-icons";


// const proverbes = data.quotes;
const api =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends React.Component {
  state = {
    quotes: [
      {
        "quote": "First say to yourself what you would be;\nand then do what you have to do.",
        "author": "Epictetus"
    }
    ], // object avec les proverbes
    index: 0, // index des proverbes
  };
  componentDidMount() {
    // j'appelle "l'api/fichier json que j'ai crèe"
    // call the json file that I made
    fetch('./quotes.json')
      .then((res) => res.json())
      .then((res) => {
        this.setState(
          {
            quotes: res.quotes
          },
          this.getProverbe
        );
      });
  }
  getProverbe = () => {
    const { quotes } = this.state;
    //  si le nombre d elem dans l'array est sup à 0, math random (un nombre au hassard 0 to 1) * 102 la longeur de l'array, math floor pour formater l'output--> result est l'index
    if (quotes.length > 0) {
      const index = Math.floor(Math.random() * quotes.length);
      this.setState({
        index,
      });
    }
  };
  render() {
   
    const { quotes, index } = this.state;
    const quote = quotes[index];
    const tweetURL = `https://twitter.com/intent/tweet?text=${quote.quote}-${quote.author}`;
  
    // console.log(index)
    return (
      <div className="App">
        <div className="App-header">
          <div>
            <ReactFCC />
          </div>
          <h1> Stoic Quotes </h1>
        </div>
        
        
  
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <div className="wrapper d-flex align-items-center justify-content-center">
            <div className="col-6 rounded p-5" id="quote-box">
              {quote && (
                <div className="mb-5">
          
                  <h5 id="text" className="text-large">
                  <IconContext.Provider value={{ color:"#1D3557", size:"3em", className: "global-class-name p-3" }}>
                    
                    <FaQuoteLeft />
                    
                  
                  </IconContext.Provider>
                    {quote.quote}
                    
                    <IconContext.Provider value={{ color:"#1D3557", size:"3em", className: "global-class-name p-3" }}>
                    
                    <FaQuoteRight/>
                    
                  
                  </IconContext.Provider>
                    </h5>
                 
                  <cite className="text-center d-block" id="author"> - {quote.author} -</cite>
                </div>
              )}

               <div className="d-flex justify-content-between btn-toolbar" >
                <a  id="tweet-quote" href={tweetURL} target="_blank" className=" mr-3 btn btn-sm mr-3">
                <FaTwitter /> twitter
                </a>
          
                <button id="new-quote" className="mr-3 btn btn-sm btn-dark ml-3" onClick={this.getProverbe}>New quote <FiRefreshCcw /></button>
              </div>
            </div>
          </div>
          
        </div>
       
      </div>
      
    );
  }
}


export default App;

{
  /* testing local method        */
}
{
  /* {proverbes.map(post => { return (
    <div>
      <h1>{post.quote}</h1>
  <p>{post.author}</p>
    </div>
  )}
)} */
}
