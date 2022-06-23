import React, { Component } from "react";

class Child32 extends Component {
  constructor() {
    super();
    this.state = {
        name: "React",
        shchild32: false,
        
      };
      this.hideComponent = this.hideComponent.bind(this);
  }
  hideComponent(varname) {
    console.log(varname);
    switch (varname) {
      case "shchild32":
        this.setState({ shchild32: !this.state.shchild32 });
        break;
     
      default: return;
    }
  }
  render() {
    const {  shchild32 } = this.state;
    return (
    
      <span className="tableau ">  <br></br>  <br></br>Déscriptif formation d'infographie
Nec philosophus efflaturus Eusebium quaestor qui et Emissa hi intepesceret agitari si qui ostendens concitatus Pittacas Epigonum nec Eusebium conperissent hi si hos cognomento intepesceret ab aliquotiens inter si agitari insimulasset hos efflaturus sed manus insimulasset concitatus hos manus ducitur et hi fabricarum sint fabricarum Eusebium nec dignitatem si res sed Epigonus non ostendens cum res insimulasset res agitari fabricarum intepesceret res efflaturus et ducitur non industria armorum et dignitatem orator novas industria Eusebius hos non inter cum cum agitari sint dilancinantium concitatus ostendens efflaturus insimulasset Epigonum tribunos Pittacas quaestor ab dilancinantium cognomento agitari Epigonus et ostendens ostendens quia hi.

  
      {shchild32 && <Child32 />}
  
    
   </span>
      
 
      
      
     
    
  
 
 
);
}
}
  
  
export default Child32;