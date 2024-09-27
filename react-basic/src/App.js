// 项目的根组件
// App -> index.js -> public/index.html(root)

function App() {
    // 基础绑定
    // const handleClick = () => {
    //     console.log("on button click");
    // }

    // 事件参数 e
    // const handleClick = (e) => {
    //     console.log("on button click", e);
    // }

    // 传递自定义参数
    // const handleClick = (name) => {
    //     console.log("on button click", name);
    // }

    // 传递自定义参数和事件对象 e
    const handleClick = (name, e) => {
        console.log("on button click", name, e);
    }

    return (
        <div className="App">
            <button onClick={(e) => handleClick("React", e)}>click me</button>
        </div>
    );
}

export default App;
