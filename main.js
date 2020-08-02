import { ToyReact } from './ToyReact'

class MyComponent {
    render() {
        return <div>cool</div>
    }
    setAttribute(name, value) {
        this[name] = value;
    }
    mountTo(parent) {
        let vdom = this.render();
        vdom.mountTo(parent)
    }
}
let a = <MyComponent name='a' id='ida'>
    {/* <span>Hello</span>
    <span>World</span>
    <span>!</span> */}
</MyComponent>

ToyReact.render(
    a,
    document.body
)