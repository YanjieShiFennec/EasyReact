// 项目的根组件
// App -> index.js -> public/index.html(root)

const isLogin = false;

function App() {
    return (
        <div className="App">
            {/*{逻辑与 &&}*/}
            {isLogin && <span>this is span</span>}

            {/*{三元运算}*/}
            {isLogin ? <span>React</span> : <span>Loading...</span>}
        </div>
    );
}

export default App;
