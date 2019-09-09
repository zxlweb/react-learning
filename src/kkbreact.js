import { stringify } from "querystring";

import { log } from "util";

function createElement(type, props, ...children) {
    props.children = children;
    let obj = {
            type,
            props
        }
        // eslint-disable-next-line
    console.log(JSON.stringify(obj, null, 2))
    return obj

}

class Component {
    // 却别class 组件和 function 组件的参数
    static isReactComponent = true;
    setState() {

    }
}
class Updater {
    constructor() {

    }
}
export default { createElement }