// 组合子模块，导出 store 实例
import billReducer from "@/store/modules/billStore";
import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        bill: billReducer
    }
});

export default store;