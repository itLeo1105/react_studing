import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{
  // const dom = (
  //   <div>
  //     <a href="www.baidu.com" onClick={this.lineClick}>www.百度.com</a>
  //     <button onClick={this.clickDiv}>点击弹出</button>
  //   </div>
  // )
  clickDiv(){
    alert('6666666')
  }
  lineClick(e){
    e.preventDefault()
    console.log('过不去吧  就不让你过');
  }
  render(){
    return(
      <div>
        <button onClick={this.clickDiv}>点击弹出</button> <br/>
        <a href="www.baidu.com" onClick={this.lineClick}>www.百度.com</a>
      </div>
    )
  }
}
function ClickApp (){
  function alertAbc () {
    alert('ABX')
  }
  return (
    // 函数组件没有this
    <button onClick={alertAbc}>点我弹出</button>
  )
}
ReactDOM.render(<App/>, document.getElementById('root'))
// ReactDOM.render(<ClickApp/>,document.getElementById('root'))
