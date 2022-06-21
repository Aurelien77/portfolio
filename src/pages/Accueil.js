
import image from "../logos/herbe.gif";

import cv from "../logos/cv.pdf";



function Acuueil() {
  

  return (
    <>
   
   <div className="accueil">
    
          

            
          <img src={ image} /> 
        <div className="back">
          <a href={cv} target="_blank"> Télécharger une version papier du C.V.</a>
          
          
          
          </div>
        
                   <div className="presentationtitre">Bienvenue  </div> <br></br>
                  <div className="presentation">  <div className="arriereplanpres">   <span className="transparent">
                    Bonjour à tous,  😊
                    Ce site à pour vocation de mieux représenter mon parcours auprès des différents clients pour lesquels j'ai travaillé, bonne lecture 💻😀 

           
  
        
       
        
        </span>

       </div>
                  
<br></br>
                 {/*  <div className="">Les trois derniers s

        
                
                  </div> */} 
        
                  </div>
       
    </div> </>
  );
}

export default Acuueil