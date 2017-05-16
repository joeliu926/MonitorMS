/**
 * Created by gy on 2016/12/5.
 */
import {getReactKey,getRandomStr} from './stringUtil.js';
function clone(o){
    return JSON.parse(JSON.stringify(o));
}
export {
    getReactKey,
    getRandomStr,
    clone
}