// 项目的根组件
// App -> index.js -> public/index.html(root)

const list = [
    {id: 1001, name: "Vue"},
    {id: 1002, name: "React"},
    {id: 1003, name: "Angular"},
];

function App() {
    return (
        <div className="App">
            this is App

            {/*{渲染列表，map 循环}*/}
            {/*{React 中遍历渲染需要绑定唯一 key}*/}
            {/*{key 的作用： React 框架内部使用，提升更新性能}*/}
            <ul>
                {list.map(item => <li key={item.id}>{item.name}</li>)}
            </ul>
        </div>
    );
}

export default App;
