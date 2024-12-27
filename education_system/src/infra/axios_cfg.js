import axios from 'axios'
import {ElMessage} from "element-plus";

//构建统一 axios 实例
export const ax = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 5000,
    withCredentials: true // 允许携带 cookies（包括 sessionID）
});

ax.interceptors.response.use(
    resp => {
        // 如果响应中的 ok 为 false，显示错误信息
        if (!resp.data.ok) {
            ElMessage.error(resp.data.msg);  // 显示错误信息
            // 抛出一个错误来阻止后续处理
            return Promise.reject(new Error(resp.data.msg || '未知错误'));
        }
        // 如果没有错误，返回响应的数据部分
        return resp.data;
    },
    error => {
        // 捕获其他错误
        ElMessage.error(error.message || '请求失败');
        return Promise.reject(error);
    }
);