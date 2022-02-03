import React, { Component } from 'react';

export default class Todo extends Component {
    constructor(){
        super();
        this.state={
            currTask:'',
            tasks:[{task:"read mails",id:1},
            {task:"go for a run",id:2}
            ,{task:"do react and attend lect",id:3}]
        }
    }
    handleChange =(e)=>{
        this.setState({
                currTask:e.target.value
        })
    }
    handleSubmit =()=>{
        this.setState({
            tasks: [...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length+1}],
            currTask: ''
        })
    }
    handleDelete =(id)=>{
        let taskList = this.state.tasks.filter((task)=>{
            return task.id != id ;
        })
        this.setState(
            {
                tasks: [...taskList]
            }
        )
    }
    render() {
        return (<div>
            <input type="text" onChange={this.handleChange} value={this.state.currTask} />
            <button onClick={this.handleSubmit}>Submit</button>
            <ul>
                {
                    this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button onClick={()=>this.handleDelete(taskObj.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>);
    }
}
