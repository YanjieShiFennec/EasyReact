// 项目的根组件
// App -> index.js -> public/index.html(root)

const message = 'this is message'

function getAge() {
    return 18;
}

function App() {
    return (
        <div className="App">
            this is App
            {/*{引号传递字符串}*/}
            {'this is str'}

            {/*{变量识别}*/}
            {message}

            {/*{函数调用，渲染为函数的返回值}*/}
            {getAge()}

            {/*{方法调用，即通过对象调用}*/}
            {new Date().getDate()}

            {/*{使用 js 对象，外层花括号识别 js，内层花括号表示对象结构}*/}
            <div style={{color: "red"}}>this is div</div>
        </div>
    );
}

export default App;
