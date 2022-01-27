import React from "react";
import  ReactDOM from "react-dom";

/**
 * 
 * @param {组件传值：父 =>> 子} props 
 * @returns 
 */

class Parent extends React.Component{
  state={
    name:'老王'
  }
  render (){
    return (
      <div>
        <h3>父组件<Son name={this.state.name}/></h3>
      </div>
    )
  }
}

class Son extends React.Component{
  render(){
    return(
      <div>
        <p>子组件接收到父组件的数据: {this.props.name}</p>
      </div>
    )
  }
}
/**
 * 子向父传值
 */
class Big extends React.Component{
  state={
    p:''
  }
  // 回调函数接受数据
  getMsg= date=>{
    console.log('拿到子组件的值是：', date);
    this.setState({
      p:date
    })
  }
  render(){
    return(
      <div>
        <div>
        父组件:{this.state.p}
        </div>
        子组件:<Bigs getMsg={this.getMsg}/>
      </div>
    )
  }
}
class Bigs extends React.Component{
  state={
    bigsNum:66666
  }
  handClick =()=>{
    // 调用父组件函数传值
    this.props.getMsg(this.state.bigsNum)
  }
  render(){
    return (
      <button onClick={this.handClick}>点击向父组件传值</button>
    )
  }
}

/**
 * 兄弟组件
 */
 class A extends React.Component{
   state={
     cont:0
   }
   addCont =()=>{
     this.setState({
      cont:this.state.cont +1
     })
   }
  render(){
    return (
      <div>
        <B1 cont={this.state.cont}></B1>
        <B2 addCont={this.addCont}></B2>
      </div>
    )
  }
}
class B1 extends React.Component{
  render(){
    return (
      <h1>计数器: {this.props.cont}</h1>
      )
  }
}
class B2 extends React.Component{
  render(){
    return (
      <button onClick={()=>this.props.addCont()}>+1</button>
    )
  }
}

// ReactDOM.render(<Parent name="hello"/>, document.getElementById('root'))
// ReactDOM.render(<Big />, document.getElementById('root'))
ReactDOM.render(<A />, document.getElementById('root'))