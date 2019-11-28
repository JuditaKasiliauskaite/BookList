const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3000;
const cors = require('cors');
const mongoose = require('mongoose');

const mongoDB = 'mongodb+srv://admin:admin@cluster0-z0agm.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoDB, {useNewUrlParser:true});

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  bookTitle:String,
  author:String,
  img:String,

});

const BookModel = mongoose.model('book',bookSchema);
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
  "Origin, X-Requested-With, Content-Type, Accept");
  next();
  });


app.get('/api/books', (req,res,next) => {

  console.log("get request")
  BookModel.find((err,data)=>{
    res.json({books:data});
  })
})


app.delete('/api/books/:id', (req,res) =>{
  console.log(req.params.id);

  BookModel.deleteOne({_id:req.params.id},(error,data)=>{
    if(error)
      res.json(error);
     
    res.json(data);
  })
})




app.post('/api/books', (req,res) =>{
console.log('post Sucessfull');

BookModel.create({
bookTitle: req.body.bookTitle,
author: req.body.author,
img: req.body.img,
});
res.json('data uploaded')


})


app.get('/api/books/:id',(req,res)=>{
  console.log(req.params.id);

  BookModel.findById(req.params.id, (err, data)=>{
    res.json(data);
  })
})


app.put('/api/books/:id', (req, res)=>{
  console.log(req.body);
  console.log("Edit "+req.params.id);

  BookModel.findByIdAndUpdate(req.params.id,
    req.body, {new:true}, (error, data)=>{
      res.send(data);
    })
})

app.listen(PORT, function () {
  console.log('Server is running on Port: ', PORT);
});