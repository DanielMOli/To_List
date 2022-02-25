import React, { Component } from "react";
import styled from "styled-components"

const Title = styled.h1`
color: white
`

class Todo extends Component {

  state={
    tarefa:'',
    list: [],
  }

  handleChange = (event) => {
    this.setState({
      tarefa: event.target.value
    })
  }

  add = () => {
    if (this.state.tarefa != ''){
    this.setState({
        list: this.state.list.concat({
        tarefa: this.state.tarefa,
        id: Date.now()
      })
    })}
  }

  clean = () => {
    this.setState ({
      tarefa: ''
    })
  }
  clear = () => {
    this.setState ({
      list: []
    })
  }
  
  remove = (id) => {
    this.setState ({
      list: this.state.list.filter((x)=>{
        return x.id != id
      })
    })
  }

 render() {
   return (
     <div>
       <h1> React App To-Do List {this.state.nome}</h1>
       <input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
       <button onClick={this.add} type="text" >Add</button>
       <button onClick={this.clean} type="text">Clean</button>
       <button onClick={this.clear} type="text">Clear</button>
       <div>{this.state.list.map((x) => (
         <ul>
           <li>{x.tarefa} <button onClick={()=>{this.remove(x.id)}}>X</button></li>
         </ul>
       ))}
       </div>
     </div>
   );
 }
}
export default Todo;
