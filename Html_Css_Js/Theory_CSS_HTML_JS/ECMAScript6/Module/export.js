import { 
    TYPE_LOG,
    TYPE_ERROR,
    TYPE_WARN
} from './constants.js'
function logger(log,type = TYPE_LOG) {
    console[type](log);
}
// syntax: import {list} from file_js 
export default logger;