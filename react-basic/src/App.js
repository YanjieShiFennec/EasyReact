// App -> A -> B

import {createContext, useContext} from "react";

// 1. createContext 方法创建一个上下文对象
const MsgContext = createContext();
// 2. 顶层组件 通过 Provider 组件提供数据
// 3. 在底层组件通过 useContext 钩子函数使用数据

function A() {
    const name = 'this is A name'
    return (
        <div>
            this is A component,
            <B/>
        </div>
    )
}

function B() {
    const msg = useContext(MsgContext);
    return (
        <div>
            this is B component, {msg}
        </div>
    )
}

function App() {
    const msg = 'this is app msg';
    return (
        <div className="App">
            <MsgContext.Provider value={msg}>
                this is App
                <A/>
            </MsgContext.Provider>
        </div>
    );
}

export default App;
