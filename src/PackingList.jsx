function Item({name, isDone}){

    if(isDone){
        return <li style={{color:"green"}}>{name}</li>
    }else{
        return <li style={{color:"red"}}>{name}</li>
    }
}

function PackingList(){
    return(
        <section>
            <h1>Todo List</h1>
            <ul>
                <Item name={"Complete Assignment"} isDone={true}/>
                <Item name={"Complete React"} isDone={true}/>
                <Item name={"Complete JavaScript"} isDone={false}/>
            </ul>
        </section>
    )}

export default PackingList;