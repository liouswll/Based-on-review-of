const crypto = require('crypto');
function md5(str){
  let obj =crypto.createHash('md5');
  obj.update(str);

  return obj.digest('hex');
}
console.log(md5(md5('123456')));
//防止暴力破解
console.log(md5(md5('123456')+'guihergno'));
