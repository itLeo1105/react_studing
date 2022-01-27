import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{
  constructor(props){
    super(props)
    console.log(props);
  }
  render(){
    return(
      <div>
        <h1>Children子节点标签</h1>
        {this.props.children}
      </div>
    )
  }
}


ReactDOM.render(<App>子节点</App>,document.getElementById('root'))