import request from "request";

//request
const URL="https://www.worldometers.info/coronavirus"
request(URL,cb)
 function cb(error,response,html){
    console.error("Error:", error);
    console.log('statusCode:',response&&response.statusCode);
    setTimeout(() => {
        console.log('Html:',html);
        
    }, 2000);
 }