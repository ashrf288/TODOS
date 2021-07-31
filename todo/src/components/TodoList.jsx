import React from 'react';


class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            done:this.props.isDone,
            animate:false
        }
    }

    clickHandl=()=>{
        this.props.trash(this.props.id)
        let state=this.state;
        state.animate=true;
        this.setState(state)
    }
    completeHandler=()=>{
        this.props.complete(this.props.id)
      
    }
    render(){
        return(
            <div className={`todo  ${this.state.animate ? 'fall':''} `}>
                <li className={`todo-item ${this.props.isDone ? 'completed':''}`}>{this.props.data}</li>
                <button className='complete-btn' onClick={this.completeHandler}>
                    <i className="fas fa-check"></i>
                </button>
                <button className='trash-btn' onClick={this.clickHandl }>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
           
        )
    }
}

export default TodoList;