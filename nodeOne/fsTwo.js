const fs= require('fs');
fs.readFile('9.jpg',(err,data)=>{
  fs.writeFile('8.jpg',data.toString,()=>{
    //图片类型不需要toString
  })
});
