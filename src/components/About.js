import React, { useState } from 'react';

export default function About() {
    const [mystyle,setMyStyle]= useState({
        color: "white",
        backgroundColor: "black"
    })
    const [btnText,setBtntext]= useState('Enable light Mode');
   
    const toggleStyle= ()=> {
        if(mystyle.color === 'white'){
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
                
            })
            setBtntext("Enable Dark Mode");
        }else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black',
                border: "1px solid white"
            })
            setBtntext("Enable Light Mode");
        }
    }
    
        

    
  return (
    <div className='container' style={mystyle}>
        <h1 className='my-2'>About Us</h1>
                    <div id="accordion">
            <div className="card">
                <div className="card-header" style={mystyle} id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Collapsible Group Item #1
                    </button>
                </h5>
                </div>

                <div id="collapseOne" style={mystyle} className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" style={mystyle} id="headingTwo">
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Collapsible Group Item #2
                    </button>
                </h5>
                </div>
                <div id="collapseTwo" style={mystyle} className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
            <div className="card">
                <div className="card-header" id="headingThree" style={mystyle}>
                <h5 className="mb-0">
                    <button className="btn btn-link collapsed" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Collapsible Group Item #3
                    </button>
                </h5>
                </div>
                <div id="collapseThree" style={mystyle} className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
                <div className="card-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
                </div>
                </div>
            </div>
        </div>

    <div className='container my-3'>
    <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>

    </div>
    </div>
  )
}
