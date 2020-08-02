import { ToyReact, Component } from './ToyReact'

class MyComponent extends Component {
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            {this.children}
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
let a = <MyComponent name='a' id='ida'>
    <div>1123</div>
</MyComponent>

ToyReact.render(
    a,
    document.body
)