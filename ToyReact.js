class ElementWrapper {
    // 对于不是原生type 的dom做包装
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
        if(name.match(/^on([\s\S]+)$/)) {
            let eventName = RegExp.$1.replace(/^[\s\S]/, (s) => s.toLowerCase());
            this.root.addEventListener(eventName, value)
        }
        this.root.setAttribute(name, value);
    }
    appendChild(vchild) {
        // this.root.appendChild(vchild); 错误 每次添加元素调用的是元素的mountTo方法
        vchild.mountTo(this.root)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}
class TextWrapper {
    constructor(content) {
        this.root = document.createTextNode(content)
    }
    mountTo(parent) {
        parent.appendChild(this.root)
    }
}

export class Component {
    constructor() {
        this.children = [];
        this.props = Object.create(null);
    }
    setAttribute(name, value) {
      
        this.props[name] = value;
        this[name] = value;
    }
    appendChild(child) {
        this.children.push(child)
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent)
    }
}
export let ToyReact = {
    // 读取到
    createElement(type, attributes, ...children) {
        let element;
        if(typeof type === 'string')
            element = new ElementWrapper(type);
        else 
            element = new type;

        for(let name in attributes) {
            element.setAttribute(name, attributes[name]);
        }

        let insertChildren = (children) => {
            for (let child of children) {
                if(typeof child === 'object' && child instanceof Array) {
                    insertChildren(child);
                } else {
                    if(!(child instanceof Component) 
                        && !(child instanceof ElementWrapper) 
                        && !(child instanceof TextWrapper)) {
                        child = String(child);
                    }
                    if( typeof child === 'string')
                        child = new TextWrapper(child)
                    element.appendChild(child);
                }
            }
        }
        insertChildren(children);
        return element;
    },
    render(vdom, element) {
+        vdom.mountTo(element)
    }
}