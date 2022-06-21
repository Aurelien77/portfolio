import React from 'react'
import { CopyToClipboard } from "react-copy-to-clipboard"
const Contact = () => {
  return (
    <div className='contact'>
        
        <div className='contactContent'>

<div className='header'></div>
<div className='contactBox'>


    <div>
   <h1>Contactez-moi</h1> 
    </div>
    <div>
    <i className='fas fa-map-marker-alt'>Ma ville : 77700</i>
</div>


<div>
<i className='fas fa-mobile-alt'></i> 
<CopyToClipboard text= "07 82 36 60 20">

 <span className='clickInput' onClick = {() =>  { alert ('Le numéro de téléphone à été copié dans le press papier');}}    > 07 .. .. .. .. </span>

</CopyToClipboard>
</div> 


<div>

<i className='fas fa-envelope' href="aurelien.monceau@gmail.com">aurelien.monceau@gmail.com</i>

</div>


<div className='socialNetwork'>
<ul>
    <div>
  
<a href="https://fr.linkedin.com/in/aurelien-monceau-87144651?original_referer=https%3A%2F%2Fwww.google.com%2F">
<h2><i className='fab fa-linkedin'/>LinkedIn</h2></a>

</div>
<div>
<a href="https://twitter.com/AurelienMonceau"> <h2><i className='fab fa-twitter'/>
Twitter </h2></a>

</div>
<div>
    
<a href="https://twitter.com/AurelienMonceau"> <h2><i className='fab fa-github'/>
Github </h2></a>
</div>

    
    
    
    </ul>
        </div>
       



       </div>
        
    </div></div>
  )
}

export default Contact;