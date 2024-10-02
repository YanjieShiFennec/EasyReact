// 编写store

import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const foodsStore = createSlice({
    name: 'foods',
    initialState: {
        // 商品列表
        foodsList: []
    },
    reducers: {
        setFoodsList(state, action) {
            state.foodsList = action.payload;
        }
    }
});

// 异步获取部分
const {setFoodsList} = foodsStore.actions;
const fetchFoodsList = ()=>{
    return async (dispatch)=>{
        // 编写异步逻辑
        const res = await axios.get('http://localhost:3004/takeaway');
        // 调用 dispatch 函数提交 action
        dispatch(setFoodsList(res.data));
    };
}

export {fetchFoodsList};
const reducer = foodsStore.reducer;
export default reducer;