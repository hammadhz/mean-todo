const express = require("express");
const router = express.Router();

const Todo = require("../models/Todo");

router.post("/", async (req,res)=> {
    var todo = new Todo({
        todo: req.body.todo
    });
    
    try{
     await todo.save().then( value => console.log(value))
     .catch(e => console.log(e))
     res.redirect("/");
    }catch(e){
        console.log(e);
        res.redirect("/")
    }
});

router.get("/api", (req,res)=> {
    Todo.find({}, (err,data)=> {
        if(err) throw err;
        else console.log("Todos:"+ data);
        res.json(data);
    });
})

module.exports = router;