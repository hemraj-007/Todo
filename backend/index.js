const express=require('express');
const {createTodo,updateTodo} =require('./types');
const {todo} =require('./db');
const app =express();
const cors=require('cors');

app.use(express.json());
app.use(cors());

/*body{
    title:
    description:
}*/

app.post('/todo',async (req,res)=>{
    const createPayLoad=req.body
    const parsePayLoad=createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        return res.status(400).json({ msg: 'Invalid input data' });
    }
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed:false
    })
    res.json({
        msg:'completed'
    })
})

app.get('/todos',async (req,res)=>{
    const todos= await todo.find({});
    res.json({
        todos
    })
})

app.put('/completed',async (req,res)=>{
    const updatePayLoad=req.body;
    const parsePayLoad=updateTodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg:'wrong'
        });
        return ;
    }
    await todo.update({
        _id: req.body.id
    },{
        completed:true
    })
    res.json({
        msg:'complete marked'
    })
})

app.listen(3000,()=> console.log('server running'));