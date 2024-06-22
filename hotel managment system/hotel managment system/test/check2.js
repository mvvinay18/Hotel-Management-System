const { urlencoded } = require("express");
const express = require("express");
const sqlconnection = require("../connection/sql_connect");
const Router = express.Router();

 
 
 Router.get("/",(req,res)=>{
    res.render("ticket")
     })
    



Router.post("/", (req, res) => {
  
  console.log(name, planeno,packagename,airlinesname,cid,cost,from_city,to_city);
   sqlconnection.query(`select cid  ,from_city,to_city,airlinesname,cost from airline join package on airline.planeno=package.planeno where cid=${req.body.cid} `)
   sqlconnection.query(`select name,airlinesname,planeno from airline join customer on airline.cid=customer.cid where name='${req.body.name}'`,
 (err, rows, fields) => {
  console.log(rows);
  res.render("details", { data:rows });
})
})

module.exports = Router;