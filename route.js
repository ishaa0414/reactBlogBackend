const route=require("express").Router();
const data=require("./data");
route.get("/bollywood",data.bollywood);
route.get("/book",data.book);
route.get("/hollywood",data.hollywood);
route.get("/gardening",data.gardening);
route.get("/food",data.food);

module.exports=route