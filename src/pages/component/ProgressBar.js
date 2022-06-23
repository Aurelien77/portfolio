import React from 'react';

const ProgressBar = (props) => {
    console.log("console log de props");
    console.log(props);
    return (
        <div className= {props.className}>
         <h3 >{props.title}</h3>
         < div className='years'><span>Expériences</span>
         <span>1 an</span>
         <span>2 ans</span>
         
         </div>


<div>
    
    {

props.languages.map((items) => {

let xpYears = 2;
let progressBar = items.xp / xpYears * 100 + '%' ;

return (

<div key= {items.id} className ="languagesList">
    
    <li>{items.value}</li>
   
    <div className="progressBar" style={{width:progressBar}} ></div>
</div>
)

} )



    }
    
    
    
    </div> 



        </div>
    );
};

export default ProgressBar;