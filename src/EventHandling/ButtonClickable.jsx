function ButtonClikable(){
    function handleClick(){
        alert("Button Is clicked");
    }

    return(
        <button onClick={handleClick}>Clickk me</button>
    )
}

export default ButtonClikable;


