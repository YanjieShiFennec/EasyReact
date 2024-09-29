// 核心：崽子组件中调用父组件中的函数并传递实参

// {onGetMsg} 结构赋值
import {useState} from "react";

function Son({onGetMsg}) {
    // Son 组件中的数据
    const sonMsg = 'this is son msg'
    return (
        <div>
            this is Son
            <button onClick={() => onGetMsg(sonMsg)}>sendMsg</button>
        </div>
    )
}

function App() {
    const [msg, setMsg] = useState('');
    const getMsg = (msg) => {
        console.log(msg);
        setMsg(msg);
    };

    return (
        <div className="App">
            this is App, {msg}
            <Son onGetMsg={getMsg}/>
        </div>
    );
}

export default App;
