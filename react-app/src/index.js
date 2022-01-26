import React from "react";
import  ReactDOM from "react-dom";

import './index.css'

class App extends React.Component{

  state={
    comment:[],
    userName:'',
    userContent:''
  }
  renderList(){
    return this.state.comment.length===0 ?
      (<div className="no-commet">暂无评论，快发表叭~</div>) :
        (<ul>
          {
            this.state.comment.map(item => (
              <li key={item.id}>
                <h3>评论人：{item.name}</h3>
                <p>评论内容：{item.content}</p>
              </li>
            ))
          }
        </ul>)
  }
  handerFrom =e =>{
    const {name, value} = e.target
    this.setState({
      [name]:value
    })
  }
  submit=()=>{
    const {comment,userName,userContent} = this.state
    if(userName.trim()===''|| userContent.trim()===''){
      return alert('请输入评论人和评论内容！')
    }
    const newComment = [{
      id:Math.random(),
      name:userName,
      content:userContent
    },...comment]
    // 清空条件 制空state状态
    this.setState({
      comment:newComment,
      userName:'',
      userContent:''
    })
  }
  render(){
    const {userName,userContent} = this.state
    return(
      <div className="app">
        <div>
          <input className="user" type="text" placeholder="请输入评论者名称" value={userName} name="userName" onChange={this.handerFrom}/><br/>
          <textarea 
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={userContent}
            name="userContent"
            onChange={this.handerFrom}
          ></textarea><br/>
          <button onClick={this.submit}>发表评论</button>
        </div>

        {this.renderList()}
        
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('root'))
