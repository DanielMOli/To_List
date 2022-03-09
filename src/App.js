import React, { Component } from "react";
import styled from "styled-components";
import benso from "./web/bestressado.jpeg";
import bensoc from "./web/benson.webp";
import pin from "./web/red-pin-md.png";
import trash from"./web/Andy-Trash-Can.svg";
import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle `
*{
  padding: 0;
  margin:  0;
  box-sizing: border-box;
  list-style: none;
  color: white;
}
`
const Back = styled.div `
  width: 100%;
  min-height: 100vh;
  background-image: url('${benso}');
  background-repeat: repeat-y;
  background-size: cover;
  filter: saturate(120%);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`
const Title = styled.h1 `
  color: #af002a;
  text-shadow: 0px 0px 6px #fdfcce
`
const Button = styled.button `
  margin-left: 4px;
  padding: 2px;
  border: 1px solid black;
  border-radius: 3px;
  background-color: #3a3232;
  color: #fdfcce;
`
const Form = styled.form `
  min-width: 24vw;
  margin-top: 5px;
  padding: 1vw 1vw 2vw 1vw;
  border-radius: 5px;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  background-color: #cf974f;
`
const Paper = styled.div `
max-width: 80vw;
padding: 5px;
border-radius: 5px;
background-color: #fdfcce;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`
const Ul = styled.ul`
display:flex;
align-items:center;
justify-content: flex-start;
flex-direction: row;
`
const Li = styled.li`
color:#020331;
border-bottom: 1px #3a3232a8 dashed;
text-transform: capitalize;
margin-top: 1px;
display: flex;
align-items: center;
justify-content: space-between;
flex-direction: row;
width: 100%;
`

const Values = styled.div `
  margin: 1em;
  margin-top: 1px;
`
const Input = styled.input`
border: 1px groove #c0d8d8;
border-radius: 5px;
padding: 3px;
color: #020331;
`
const Benso = styled.div`
width: 1vw;
height: 35vw;
padding-top: 15vw;
display: flex;
align-items: center;
justify-content: flex-start;
`
const Pin = styled.div`
margin: -0.8vw 3vw 0px 0px;
position: fixed;
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

  add = (event) => {
    let { tarefa, list } = this.state;
    if ( list.length < 30 ) {
    if (tarefa !== "") {
      this.setState({
        list: list.concat({
          tarefa,
          id: Date.now()
        }),
        tarefa: ""
      })
    }};
    event.preventDefault();
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
       <Globalstyle />
      <Back>
      <Pin><img src={pin}/></Pin>
         <Form onSubmit={this.add}>
          <Title> React App To-Do List {this.state.nome}</Title>
          <Paper>
          <Values>
            <Input onChange={this.handleChange} type="text" value={this.state.tarefa}/>
            <Button onClick={this.add} type="text" >Add</Button>
            <Button onClick={this.clean} type="text">Clean</Button>
            <Button onClick={this.clear} type="text">Clear</Button>
          </Values>
          <div>{this.state.list.map((x) => (
            <Ul>
              <Li>{x.tarefa} <button onClick={()=>{this.remove(x.id)}}><img src={trash} alt="X"/></button></Li>
            </Ul>
       ))}
       </div>
       </Paper>
     </Form>
     <Benso>
       <img src={bensoc} alt="Benson"/>
     </Benso>
     </Back>
     </div>
   );
 }
}
export default Todo;
