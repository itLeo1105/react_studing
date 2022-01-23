// 导入react 报
import React from 'react'
import  ReactDOM  from 'react-dom'

import './css/index.css'

/**
 * {} 可以写js代码
 */
const address = 'CS'

/**
 * 条件渲染
 */
const isLoading = true
// const loaDate =()=>{
//   if(isLoading) {
//     return <div>Loading...</div>
//   } 
//   return <div>数据加载完毕</div>
// }

/**
 * 逻辑与运算
 */
const loaDate =()=>{
 return isLoading && (<div>Loading...</div>)
}

const songList = [
  {name:'稻香',a:1},
  {name:'千里香',a:2},
  {name:'酒香',a:3}
]
/**
 * 渲染一组数据使用 map 方法
 */
const lists  = (
  <ul>
    {songList.map(item=><li className='title' key={item.a}>{item.name}</li>)}
  </ul>
)

// JSX创建元素
const title = ( // 使用小括号避免自动插入分号的问题
  <h1 className='title'>
    {/* ---JSXx---
    {address} */}
    {/* {loaDate()} */}
    {lists}
  </h1>
)

ReactDOM.render(title,document.getElementById('root'))