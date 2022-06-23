import React, { Component } from "react";   //JEK INFORMATIQUE ET SERVICES
import Child26 from "./Child26";
import Child27 from "./Child27";
import Child28 from "./Child28";
class Child2 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild26: false,
        shchild27: false,
        shchild28: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild26":
        this.setState({ shchild26: !this.state.shchild26 });
        break;


        case "shchild27":
            this.setState({ shchild27: !this.state.shchild27});
            break;

            case "shchild28":
              this.setState({ shchild28: !this.state.shchild28});
              break;
     
      default: return;
    }
  }
  render() {
    const {shchild26, shchild27, shchild28,  } = this.state;
    return (


<div className="cvform">

<div  onClick={() => this.hideComponent("shchild26")} >
Formation de dévellopement informatique
     Child 14






</div>






{shchild26 && <Child26/>}





<div  onClick={() => this.hideComponent("shchild27")}>
Formation de support informatique
      Child 15






</div> {shchild27 && <Child27 />}

<div  onClick={() => this.hideComponent("shchild28")} >
Formation aux outils de création assistés par ordinateur
       child 16






</div>
{shchild28 && <Child28 />}

</div>


);
}
}















      
 
    


    
  
 

  
  
export default Child2;