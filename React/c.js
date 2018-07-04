// class Welecome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }

// let el = <Welecome name="yzliang"></Welecome>

// ReactDOM.render(el, document.getElementById('root'));

class Welecome extends React.Component {
  render() {
    return (
      <h1>hello, {this.props.name}</h1>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Welecome name="世界"/>
        <Welecome name="梦想"/>
        <Welecome name="宇宙"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));