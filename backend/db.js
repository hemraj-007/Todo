const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://hemrajbhatia988:l9pBh1W3Hf0YP54y@cluster0.n8vxoep.mongodb.net/');
const todoSchema=mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
});
const todo=mongoose.model('todos',todoSchema);
module.exports={
    todo
}