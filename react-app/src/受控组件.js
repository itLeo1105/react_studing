import React from "react";
import  ReactDOM from "react-dom";

class App extends React.Component{
 
  state = {
    txt: '',
    content:'',
    city:'bj',
    ischeck: false
  }
  /**
   * 
   * @param {统一处理事件} 
   * @param {先定义name} 
   * 判断值的类型
   * 使用[name]：value 形式
   */
  changValue=e=>{
    const target = e.target
    const value = target.type === 'checked' ? target.checked : target.value

    const name = target.name
    this.setState({
      [name]:value
    })
  }

  // txetareaChange=(e)=>{
  //   this.setState({
  //     content:e.target.value
  //   })
  // }
  // changeCity=e=>{
  //   this.setState({
  //     city:this.state.city
  //   })
  // }
  // changeCheck=e=>{
  //   this.setState({
  //     ischeck: e.target.checked
  //   })
  // }
  render(){
    return(
      <div>
         {/* 受控组件 */}
        <input type="text" name="txt" value={this.state.txt} onChange={this.changValue}></input>
        <br></br>
        <br></br>
        <textarea name="content" value={this.state.content} onChange={this.changValue}></textarea>
        <br></br>
        <select name="city" value={this.state.city} onChange={this.changValue}>
          <option value="sh">上海</option>
          <option value="bj">北京</option>
          <option value="cs">长沙</option>
        </select>
        <br></br>
        <input name="ischeck" type="checkbox" checked={this.state.ischeck} onChange={this.changValue}></input>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
