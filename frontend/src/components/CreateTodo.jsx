export function CreateTodo(){
    return <div style={{backgroundColor:'navy'}}>
        <input style={
            {padding:10,
            margin:10,
            backgroundColor:'',
            }
        } type="text" placeholder="title" /><br />
        <input style={{
            padding:10,
            margin:10,
            backgroundColor:"",
            
        }} type="text" placeholder="description" /><br />
        <button style={{padding:10, margin:10, backgroundColor:'grey'}}>Add a todo</button>
    </div>
}