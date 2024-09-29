// React 中获取 DOM

// 1. useRef 生成 ref 对象 绑定到 dom 标签上

// 2. dom 可用时， ref.current 获取 dom
// 渲染完成之后 dom 生成之后才可用

import {useRef} from "react";

function App() {
    const inputRef = useRef();
    const showDom = ()=>{
        console.dir(inputRef.current);
    };

    return (
        <div className="App">
            <input type={"text"} ref={inputRef}/>
            <button onClick={showDom}>获取 dom</button>
        </div>
    );
}

export default App;
