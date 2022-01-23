// 导入react 报
import React from 'react'
import  ReactDOM  from 'react-dom'
import './css/index.css'

// 函数组件 函数名需要大写开头
function SayHi (){
  return (
    <div>Hi~ I am Leo</div>
  )
}
// calss 组件
class Hello extends React.Component {
  render(){
    return <div>Hi ~   '这是class 组件渲染'</div>
  }
}


// ReactDOM.render(title,document.getElementById('root'))
// ReactDOM.render(<SayHi/>,document.getElementById('root'))
ReactDOM.render(<Hello/>,document.getElementById('root'))