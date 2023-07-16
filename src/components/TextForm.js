import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
  const handleUpClick=()=>{
    //console.log("Uppercase was clicked"+text);
    let newText=text.toUpperCase();
    setText(newText)
  props.showAlert();
  }
  const handleLoClick=()=>{
    //console.log("Lowercase was clicked"+text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert();
  }
  const handleClear=()=>{
    //console.log("Clear text was clicked"+text);
    let newText='';
    setText(newText)
    props.showAlert();
  }
  const handleOnChange=(event)=>{
    //console.log("On change");
    setText(event.target.value);

      }
  const handleCopy=()=>{
    //console.log("I am copy");
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert();
  }
  const handleExtraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert();
  }
    const [text,setText]=useState('');
//setText("new text");
  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
        <h3 className='mb-4'>{props.heading}</h3>
            <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra spaces</button>
        </div>
        <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
<h3>Count words and characters:</h3>
<p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
<p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
<h4>Preview</h4>
<p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
  )
}
