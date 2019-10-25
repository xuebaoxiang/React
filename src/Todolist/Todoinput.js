import React, { Component } from 'react'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state = {
            val : ''
        }
    }
   handleinput = (e) => {
       if(e.keyCode === 13){
           this.props.addtodo(e.target.value);
           this.setState({
               val : ''
           })
       }
   }
   handlechange = (e) => {
       this.setState({
           val : e.target.value
       })
        console.log(this.state.val);
   }
    render() {
        return (
            <div style ={{backgroundColor : 'black', width : 'auto', height : 50}}>
                <label style = {{color : 'white',marginLeft:'35%',paddingRight : '10%' ,fontSize : 20 ,marginTop :10}} htmlFor = 'head'>ToDoList </label>
                <input onChange = {(e) =>this.handlechange(e)}  value = {this.state.val} type = 'text'  id = 'head' placeholder = '添加Todo' style = {{borderRadius : 5,width : 200,height : 20,marginTop :10}} onKeyDown = {(e) => {this.handleinput(e)}}></input>
            </div>
        )
    }
}
