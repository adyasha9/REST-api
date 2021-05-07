const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fetch = require('node-fetch');
const User = require('./models/index.js');

let url = "https://clinicalapi-cptac.esacinc.com/api/tcia/clinical_data/tumor_code/CCRCC";
let settings = {method:"GET"}

mongoose.connect('mongodb://localhost/user');
mongoose.Promise = global.Promise;

var router = express.Router();
app.use('/api', router);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/', (req, res) => {
fetch(url,settings)
    .then(res=>res.json())
    .then((json)=>{
     User.create(json)
     .then(res.send({"message":"success"}))
     .catch(err => res.status(404).json({ success: false }));
    });


});

app.get('/search',async function(req,res){
         var result = await User.find({
             case_id: req.body.case_id
         })
         console.log("result",result);
         res.send(result);
        });


app.listen(3000);
console.log('listening on 3000');
