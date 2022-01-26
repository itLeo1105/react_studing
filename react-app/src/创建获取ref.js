import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{
 constructor(){
   super()
   this.txtRef = React.createRef()
 }
  getText=()=>{
    console.log('文本框的值为：' + this.txtRef.current.value);
  }
  render(){
    return(
      <div>
        <input type="text" ref={this.txtRef}></input><br></br>      
        <button onClick={this.getText}>点击获取值</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
