// 1. 组件外使用 Hook
// 2. if for 组件内部函数

import {useState} from "react";

// useState('')

function App() {
    if (Math.random() > 0.5) {
        useState();
    }

    return (
        <div className="App">
            this is App
        </div>
    );
}

export default App;
