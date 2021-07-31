import React from 'react';

class Form extends React.Component{

constructor(props){
    super(props)
    this.state={
      
        todo:'',
        isDone:false,
        id: 0
     
    }
}
    changeHandler=(e)=>{
      let state=this.state
     state[e.target.name]=e.target.value;
         this.setState(state)
         
     }
     submitHandler=(e)=>{
       e.preventDefault();
       let state=this.state;
       state.id=Math.random()*1000;
       this.setState(state)
       this.props.handler(this.state)
       let form= document.getElementById("form")
       form.reset();
  
    }

    filter=(e)=>{
      let filter=e.target.value
      this.props.filtering(filter)
    
    }

    render(){
        return (
             <div>
            <form onSubmit={this.submitHandler} id='form'>
            <input type="text" name='todo' onChange={this.changeHandler} className="todo-input" />
            <button className="todo-button" type="submit">
              <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
              <select name="todos" className="filter-todo" onChange={this.filter}>
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="uncompleted">Uncompleted</option>
              </select>
            </div>
          </form>
          </div>
        )
}

}
export default Form;