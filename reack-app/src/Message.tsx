function Message(){
    const name = "";
    if (name){
        return <h1> Hello {name}</h1>
    } else{
        return "hello world"
    }
}

export default Message;