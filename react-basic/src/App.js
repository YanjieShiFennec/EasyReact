// useState 实现一个计数器按钮
import {useState} from "react";

function App() {
    let [count, setCount] = useState(0);

    const handleClick = () => {
        // 直接修改无法引发视图更新
        // count++;
        // console.log(count);
        setCount(count + 1);
    }

    // 修改对象状态
    const [form, setForm] = useState({name: "React"});

    const changeForm = () => {
        // 错误写法：直接修改
        // form.name = "Vue";

        // 正确写法：setForm 传入一个全新的对象
        setForm({
            ...form, // ... 为展开运算符，可将数组和对象合并或展开
            name: "Vue"
        });
    }

    return (
        <div className="App">
            <button onClick={handleClick}>{count}</button>
            <button onClick={changeForm}>修改 form{form.name}</button>
        </div>
    );
}

export default App;
