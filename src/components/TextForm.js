import React, {useState} from 'react'



export default function TextForm(props) {
  const handleupclick =()=>{
    console.log("uppercase cli");
    let newtext=text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase","success");
  }

  const handlelowclick =()=>{
    console.log("uppercase cli");
    let newtext=text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lower Case","success");

  }

  const handleclearclick =()=>{
    console.log("uppercase cli");
    
    setText("");
    props.showAlert("Text Cleared","success");

  }
  

  const handleonchange=(event) =>{
    console.log("on change");
    setText(event.target.value);
  }

  
  const [text, setText] = useState("");
  

 // text="new text"; //wrong way to chane text
// setText("new text"); //correct way to set text
  return (
    <>
    <div className='container'>
      <h1 style={{ color:props.mode==='dark'?'white':'#212529'}}>{props.heading}</h1>
       <div className="mb-3">
         <textarea className="form-control" style={{color:props.mode==='dark'?'white':'#212529', backgroundColor:props.mode==='dark'?'#212529':'white'}} onChange={handleonchange} value={text} id="myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
       <button className="btn btn-primary mx-2" onClick={handlelowclick}>convert to LowerCase</button>
       <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>

    </div>
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>reading speed {0.008 * text.length}</p>
      <h3>{text}</h3>
    </div>



    </>
  )
}
