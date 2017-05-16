/**
 * Created by gy on 2016/12/5.
 */


function getRandomStr(len){
    let x = "123456789poiuytrewqasdfghjklmnbvcxzQWERTYUIPLKJHGFDSAZXCVBNM",
     str = "";
    for (let i = 0; i < len; i++) {
        str += x.charAt(Math.ceil(Math.random() * 100000000) % x.length);
    }
    return str;
}
function getRandom(){
     return (Math.random()/+new Date()).toString(36).replace(/\d/g,'').slice(1);
}
function getReactKey(){
    return getRandom()+"-"+getRandom();
}
export {
    getReactKey,
    getRandomStr
}