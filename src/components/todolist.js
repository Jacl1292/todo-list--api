import React from 'react';
import propTypes from 'prop-types'
import ToDoItem from'./todoitem'
const ToDoList = props =>{
    return(
        <>
        <div className="list-group">
            {  props.todos.length >0?
                props.todos.map((todo,i)=>{
                    return<ToDoItem todo={todo}
                     key={i} 
                     handleClickTrash={props.handleClickTrash}
                      pos={i}
                     completeToDo={props.completeToDo}/>
                }):(
                    <a href="#" className="list-group-item list-group-item-action text-center disabled">
                        Lista de tareas vacias
                    </a>
                )
            }
            </div>

       
            </>
    )
}
ToDoList.propTypes = {
    todos: propTypes.array.isRequired
}
export default ToDoList;