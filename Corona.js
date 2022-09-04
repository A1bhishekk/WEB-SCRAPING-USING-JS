import request from "request";

//request
const URL="https://www.worldometers.info/coronavirus"
request(URL,cb)
 function cb(error,response,html){
    if(error){
        console.error("Error:", error);
    }else{
        // console.log('statusCode:',response&&response.statusCode);
        console.log('Html:',html);
    }
    
 }