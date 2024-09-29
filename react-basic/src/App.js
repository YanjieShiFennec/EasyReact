// 父传子
// 1. 父组件传递数据 子组件标签身上绑定属性
// 2. 子组件接收数据 props 参数

function Son(props) {
    // props: 对象里面包含了父组件传递过来的所有数据
    console.log(props);
    return <div>this is son {props.name}</div>
}

function App() {
    const name = "this is app name";
    return (
        <div className="App">
            <Son name={name}/>
        </div>
    );
}

export default App;
