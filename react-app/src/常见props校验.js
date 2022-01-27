import React from "react";
import  ReactDOM from "react-dom";

import propTypes from 'prop-types'

/**
 * 
 * @param {props校验} props 
 * yarn add prop-types
 * @returns 
 */

const Apps =(props)=>{
  const arr = this.props.color
    const list = arr.map((item,index) => 
      <li key={index}>{item}</li>
    )
    return(
        <ul>{list}</ul>
    )
}
// class App extends React.Component{
//   constructor(props){
//     super(props)

//   }
//   render(){
//     const arr = this.props.color
//     const list = arr.map((item,index) => 
//       <li key={index}>{item}</li>
//     )
//     return(
//         <ul>{list}</ul>
//     )
//   }
// }
Apps.propTypes={
  color:propTypes.array,
  a:propTypes.number, // 数字
  fn:propTypes.func.isRequired, // 校验必填
  filter:propTypes.shape({
    area:propTypes.string,
    price:propTypes.number
  }) // {area:'XXXX',price:12} 特定对象结构 shape
}
/**
 * 传入默认值
 */
// Apps.defaulProps = {
//   pageSize:10
// }

ReactDOM.render(<Apps color={666}/>,document.getElementById('root'))