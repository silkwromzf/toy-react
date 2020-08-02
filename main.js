import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            {/* {this.children} */}
            {true}
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
/**
 * 测试发现  读取的jsx 文件都会被解析
 * 如果div 未用children获取  也是会按照解析规则进行dom解析
 * 当作为children 获取时候 才会被父元素 appendChilren 加入
 */
let a = <MyComponent name='a' id='ida'>
    <div>1123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)