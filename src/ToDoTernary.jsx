function Todo({todo,isDone}){
    return(
        <li className="item">
            {isDone ? (<span style={{textDecoration:"line-through"}}>{todo}</span>) : 
            (todo)}
        </li>
    )
}


function TodoTernary(){
    return(
        <section>
            <h1>Todo List</h1>
            <ul>
                <Todo todo={"Complete Assignment"} isDone={true}/>
                <Todo todo={"Complete React"} isDone={true}/>
                <Todo todo={"Complete JavaScript"} isDone={false}/>
            </ul>
        </section>)
}

export default TodoTernary;