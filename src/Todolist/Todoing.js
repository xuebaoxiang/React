import React, { Component } from 'react'

export default class Todoing extends Component {

    handledelete = (idx) => {
        this.props.todo(idx);
    }
    delete = (idx) => {
        this.props.todelete(idx);
    }
    render() {
        return (
            <div>
                 <div>
                    <div style = {{width : '100%'}}><h2 style = {{width : '20%',float : "left",marginLeft : '35%'}}>正在进行</h2><div style = {{backgroundColor : 'grey',width: 30, height :30,float : "left",marginTop : 20,marginLeft : 200,textAlign :'center'}}>{this.props.todolist1 == null ? 0:this.props.todolist1.length}</div></div>
                    <ul>
                        {this.props.todolist1 == null ? '' :(this.props.todolist1.length > 0?this.props.todolist1.map((item1,index1) => {
                            return <li key = {'1' + index1} style = {{float : "left",marginLeft : '40%' ,width : 200,height : 50}}><input type = 'checkbox' checked = {false}  onChange = {() => this.props.tosubmit(index1)}/>{item1}<button onClick = {() => this.handledelete(index1)}>删除</button></li>
                        }):'')}
                    </ul>
                </div>
                <div>
                    <div style = {{width : '100%'}}><h2 style = {{width : '20%',float : "left",marginLeft : '35%'}}>已经完成</h2><div style = {{backgroundColor : 'grey',width: 30, height :30,float : "left",marginTop : 20,marginLeft : 200,textAlign :'center'}}>{this.props.todolist2== null ? 0:this.props.todolist2.length}</div></div>
                    <ul>
                        {this.props.todolist2 == null?'':(this.props.todolist2.length > 0?this.props.todolist2.map((item2,index2) => {
                            return <li key = {'2' + index2} style = {{float : "left",marginLeft : '40%',width : 200,height : 50}}><input type = 'checkbox'  checked = {true} onChange = {() =>  this.props.toreturns(index2)}/>{item2}<button onClick = {() => {this.delete(index2)}}>删除</button></li>
                        }):'')}
                    </ul>
                </div>
            </div>
        )
    }
}
