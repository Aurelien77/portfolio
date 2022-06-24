import React, { Component } from "react";   //TOPTEAM FILAILE DU GROUPE DEVOTEAM

import Child8 from "./Child8";

import Child17 from "./Child17";

import Child18 from "./Child18";

import Child19 from "./Child19";


import Child20 from "./Child20";


class Child5 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild5: false,
        shchild6: false,
        shchild7: false,
        shchild8: false,
        shchild17: false,
        shchild18: false,
        shchild19: false,
        shchild20: false,
        
        
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild5":
        this.setState({ shchild5: !this.state.shchild5 });
        break;

        case "shchild6":
        this.setState({ shchild6: !this.state.shchild6 });
        break;

        case "shchild7":
          this.setState({ shchild7: !this.state.shchild7});
          break;
        case "shchild8":
        this.setState({ shchild8: !this.state.shchild8});
        break;

        case "shchild17":
          this.setState({ shchild17: !this.state.shchild17});
          break;

          case "shchild18":
            this.setState({ shchild18: !this.state.shchild18});
            break;
            case "shchild19":
              this.setState({ shchild19: !this.state.shchild19});
              break;

              case "shchild20":
                this.setState({ shchild20: !this.state.shchild20});
                break;
     
      default: return;
    }
  }
  render() {
    const {  shchild5, shchild6, shchild7, shchild8,  shchild17,shchild18,shchild19,shchild20,} = this.state;
    return (
            <div id="listeclients" className="textcv3">






   
<span  onClick={() => this.hideComponent("shchild17")}  >
<span  className="textcv2">👉 1- Janvier 2019  à Janvier 2021  : Prestataire de service chez le client<span className="entreprise"><span> Carrefour, Evry.</span></span>



</span>
      
     
           
     
       
    
       
         
        </span>


        {shchild17 && <Child17 />}


 <br></br>

<span  onClick={() => this.hideComponent("shchild18")}  >
<span  className="textcv2">👉 2- Décembre 2017  à Janvier 2019 :
Prestataire de service chez le client<span className="entreprise"><span> Natixis, Charenton-le-pont.</span> </span></span>



 {shchild18 && <Child18 />}


</span>
      <br></br>
 
      <span onClick={() => this.hideComponent("shchild19")} > <span  className="textcv2"> 👉 3- Décembre 2016  à Décembre 2017 : Prestataire de service chez le client<span className="entreprise"> <span> BNP Paribas, Paris 75009. </span> </span></span>

     {shchild19 && <Child19 />}
    
      </span>   <br></br>


      <span onClick={() => this.hideComponent("shchild20")}  > <span  className="textcv2"> 👉 4- Septembre 2016  à Decembre 2016  :   Prestataire de service chez le client<span className="entreprise"> <span> Sanofi, La croix Berny</span>  </span> </span>
     
       
      
      
       {shchild20 && <Child20 />}
      
      
      </span> 
      
     
      </div>
  
 
 
);
}
}
  
  
export default Child5;
