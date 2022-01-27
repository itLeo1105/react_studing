import React from "react";
import  ReactDOM from "react-dom";

/**
 * 
 * @param {函数组件} props 
 * props 只读不能修改
 * @returns 
 */
// const App = (props)=>{
//   return (
//     <div>
//       <h2>props:{props.name}</h2>
//     </div>
//   )
// }
// ReactDOM.render(<App name="Leo"/>, document.getElementById('root'))
/**
 * class 类组件
 */

class Hello extends React.Component{
  render (){
    return (
      <div>
        <h3>props:{this.props.name}</h3>
      </div>
    )
  }
}
ReactDOM.render(<Hello name="hello"/>, document.getElementById('root'))