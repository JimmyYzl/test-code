let myStyle = {
  height: 100,
  background: "#f00"
}
ReactDOM.render(
  <div>
    <h1 style={myStyle}>你好世界</h1>
    <p>{2+4}</p>
    <input type="text"/>
    <button>点击</button>
  </div>,
  document.getElementById("root")
)