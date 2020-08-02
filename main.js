import { ToyReact, Component } from './ToyReact'

/**
 * dom 渲染是 从上到下  同级则第一个的所有子节点渲染结束 到这个子节点渲染结束进入下一个同级元素
 * 插件@babel/plugin-transform-react-jsx 预设了在读取到jsx时候使用createElement 函数  入参为解析的jsx 对象
 * 所以下面的组件执行顺序是
 *  xx
            ToyReact.js:108 render MyComponent {name: "a", id: "ida"}
            ToyReact.js:71 Component_start
            ToyReact.js:87 type, attributes, ...children sapn null ["span1"]
            ToyReact.js:50 2
            ToyReact.js:87 type, attributes, ...children span null (2) ["text1", ElementWrapper]
            ToyReact.js:50 2
            ToyReact.js:32 1
            ToyReact.js:87 type, attributes, ...children span null ["World"]
            ToyReact.js:50 2
            ToyReact.js:87 type, attributes, ...children sapn null ["span2"]
            ToyReact.js:50 2
            ToyReact.js:87 type, attributes, ...children span null (2) ["text2", ElementWrapper]
            ToyReact.js:50 2
            ToyReact.js:32 1
            ToyReact.js:87 type, attributes, ...children div null (4) [ElementWrapper, ElementWrapper, ElementWrapper, "！"]
            3ToyReact.js:32 1
            ToyReact.js:50 2
            ToyReact.js:73 Component_end ElementWrapper {root: div}
            ToyReact.js:32 1
 */
class MyComponent extends Component {
    render() {
        return <div>
            <span>
                text1
                <sapn>span1</sapn>
                {/* 注释1 */}
            </span>
            <span>World</span>
            <span>
                text2
                <sapn>span2</sapn>
                {/* 注释2 */}
            </span>
            ！
            {/* {this.children} */}
        </div>
    }
}
class MyChildComponent extends Component {
    render() {
        return <div>
            <span>MyChildComponent</span>
        </div>
    }
}
let a = <MyComponent name='a' id='ida'>
</MyComponent>
console.log('xx')

ToyReact.render(
    a,
    document.body
)