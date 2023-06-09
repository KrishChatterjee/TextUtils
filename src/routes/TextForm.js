import React, { useState }  from 'react';

export default function TextForm(props) {
    const [text, setText] = useState('');

   const  handelUpClick=()=>{
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Text Changed to UpperCase','success');
    }

    const  handelLoClick=()=>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert('Text Changed to LowerCase','success');
      }

      const  handelTiClick=()=>{
        let arr=text.toLowerCase().split(" ");
        const newArr = arr.map(myFunction);
        function myFunction(e) {
          return e.charAt(0).toUpperCase() + e.substring(1,e.length);
          
        }
        setText(newArr.join(" "));
        props.showAlert('Text Changed to TitleCase','success');
        }

      const  clearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert('Text is cleared','success');
        }

      const  extraSpClick=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces has been removed','success');

          }
          
      const  handelCopy=()=>{
        document.getSelection().removeAllRanges()
        navigator.clipboard.writeText(text)
        props.showAlert('Text has been copied','success');

          }


    const  handleOnChange=(event)=>{
        setText(event.target.value);
        }
  return (
    <>
    <div className={`container text-${props.mode==="dark"?"light":"dark"}`}>
    <h1>{props.heading}</h1>
   <div className="mb-3">
  <textarea className={`form-control bg-${props.mode==="dark"?"secondary":"light"} text-${props.mode==="dark"?"light":"dark"}`} id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
  </div>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={handelUpClick} disabled={text.length===0} >Convert to UpperCase </button>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={handelLoClick} disabled={text.length===0}>Convert to LowerCase </button>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={handelTiClick} disabled={text.length===0}>Convert to TitleCase </button>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={extraSpClick} disabled={text.length===0}>Clear Extra Spaces</button>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={clearClick} disabled={text.length===0}>Clear </button>
  <button type="button" className={`btn btn-${props.mode==="light"?"primary":props.color.btnc} mx-1 my-1`} onClick={handelCopy} disabled={text.length===0}>Copy text </button>


  </div>

  <div className={`container my-2 text-${props.mode==="dark"?"light":"dark"} `}>
    <h1>Your text summary</h1>
    <p>{text.split(/\s+/).filter(word => word !== '').length} word and {text.length} charactes</p>
    <p>{text.length>0?text.split(" ").length * 0.005:0} minutes to read</p>
  </div>
  <div className={`container my-2 text-${props.mode==="dark"?"light":"dark"} `}>
      <h1>Preview</h1>
      <pre>{text.length>0?text:"No text to preview"}</pre>
    </div>
  </>
  )
}
