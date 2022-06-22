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
            <div className="cvarriere">






   
<div  onClick={() => this.hideComponent("shchild17")} className="topteam2" >
<span>Janvier 2019  à Janvier 2021  :</span>   Prestataire de service chez le client Carrefour
      
     
           
     
       
    
       
         
        </div>


        {shchild17 && <Child17 />}


 

<div  onClick={() => this.hideComponent("shchild18")}className="topteam2" >
<span> Décembre 2017  à Janvier 2019 : </span>
Prestataire de service chez le client Natixis



 {shchild18 && <Child18 />}


</div>
      
 
      <div onClick={() => this.hideComponent("shchild19")} className="topteam2"> <span> Décembre 2016  à Décembre 2017 : </span> Prestataire de service chez le client BNP Paribas
     
       
      
      
       {shchild19 && <Child19 />}
      
      
      </div> 


      <div onClick={() => this.hideComponent("shchild20")} className="topteam2" > <span> Septembre 2016  à Decembre 2016  :  </span>Prestataire de service chez le client Sanofi 
     
       
      
      
       {shchild20 && <Child20 />}
      
      
      </div> 
      
     
      </div>
  
 
 
);
}
}
  
  
export default Child5;
