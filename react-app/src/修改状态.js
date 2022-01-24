import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{
  // 2.硬绑定bind处理this 指向
  // constructor(){
  //   super()
  //   this.state = {
  //     cont:0
  //   }
  //   this.clickDiv = this.clickDiv.bind(this)
  // }
  // 简化语法
  state = {
    cont:0
  }
  // 3.class 实例方法处理this 指向
  clickDiv=()=>{
    this.setState({
      cont:this.state.cont+1
    })
  }
  render(){
    return(
      <div>
        <h3>当前记数：{this.state.cont}</h3>
        {/**1.箭头函数处理this 指向 */}
        {/* <button onClick={()=>{this.clickDiv()}}>点击 + 1</button> <br/> */}
        {/**2.硬绑定bind处理this 指向 */}
        <button onClick={this.clickDiv}>点击 + 1</button> <br/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
