import { ToyReact, Component } from './ToyReact'

class App extends Component {
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            {this.children}
            {true}
        </div>
    }
}
let app = <App />

ToyReact.render(
    app,
    document.body
)