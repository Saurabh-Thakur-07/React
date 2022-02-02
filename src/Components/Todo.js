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
    render() {
        return (<div>
            <input type="text" />
            <button>Submit</button>
            <ul>
                {
                    this.state.tasks.map((taskObj)=>(
                        <li key={taskObj.id}>
                            <p>{taskObj.task}</p>
                            <button>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>);
    }
}
