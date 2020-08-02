class ElementWrapper {
    // 对于不是原生type 的dom做包装
    constructor(type) {
        this.root = document.createElement(type)
    }
    setAttribute(name, value) {
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

export let ToyReact = {
    createElement(type, attributes, ...children) {
        let element;
        if(typeof type === 'string')
            element = new ElementWrapper(type);
        else 
            element = new type;

        for(let name in attributes) {
            element.setAttribute(name, attributes[name]);
        }
        for (let child of children) {
            if( typeof child === 'string')
                child = new TextWrapper(child)
            // else 
            //     child = new child;
            element.appendChild(child);
        }
        return element;
    },
    render(vdom, element) {
        vdom.mountTo(element)
    }
}