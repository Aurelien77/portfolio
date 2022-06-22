
import React, { Component } from "react";       //EXPERIENCE PROFESSIONELLES
import Child5 from "./Child5";
import Child6 from "./Child6";
import Child7 from "./Child7";
import Child8 from "./Child8";
import Child9 from "./Child9";
class Child1 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild5: false,
        shchild6: false,
        shchild5: false,
        shchild7: false,
        shchild8: false,
        shchild9: false,
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
            this.setState({ shchild7: !this.state.shchild7 });
            break;

            case "shchild8":
              this.setState({ shchild8: !this.state.shchild8 });
              break;

              case "shchild9":
                this.setState({ shchild9: !this.state.shchild9 });
                break;
      default: return;
    }
  }
  render() {
    const {  shchild5 , shchild6, shchild7, shchild8,shchild9 } = this.state;
    return (
            
<div className="cvarriere">

            <div  onClick={() => this.hideComponent("shchild5")} className="inback" id="topteam">
          Septembre 2016 à janvier 2011 : TOPTEAM filiale du groupe DEVOTEAM
           
     
       
         
       
         
        </div>
           
        {shchild5 && <Child5/>}
           
           <div  onClick={() => this.hideComponent("shchild9")}id="videlio">
          Février 2013 à Septembre 2016 : VIDELIO ancienement IEC
           
     
       
        
       
         
        </div> {shchild9 && <Child9 />}

        <div  onClick={() => this.hideComponent("shchild7")} id="jek">
          Septembre 2007 à Aout 2008 : JEK INFORMATIQUE ET SERVICES
           
     
       
        
       
         
        </div>
        {shchild7 && <Child7 />}
         
        </div>
      
      
    );
  }
}
  
  
export default Child1;
