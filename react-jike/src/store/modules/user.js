// 和用户相关的状态管理
import {createSlice} from "@reduxjs/toolkit";
import {request, setToken as _setToken,  getToken} from "@/utils";

const userStore = createSlice({
    name: "user",
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setToken(state, action) {
            state.token = action.payload;

            // localStorage 存一份
            _setToken(action.payload);
        },
        setUserInfo(state, action){
            state.userInfo = action.payload;
        }
    }
});

// 解构出 actionCreater
const {setToken, setUserInfo} = userStore.actions;

// 获取 reducer 函数
const userReducer = userStore.reducer;

// 异步方法
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        // 1. 发送异步请求
        const res = await request.post('/authorizations', loginForm);
        // 2. 提交同步 action 进行 token  的存入
        dispatch(setToken(res.data.token));
    };
};

// 获取个人用户信息异步方法
const fetchUserInfo = (loginForm) => {
    return async (dispatch) => {
        const res = await request.get('/user/profile');
        dispatch(setUserInfo(res.data));
    };
};

export {setToken, fetchLogin, fetchUserInfo};
export default userReducer;