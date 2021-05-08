/**ajax 请求模块 */
import axios from 'axios'
export default function ajax(url,data={},type='GET'){
 return new Promise((resolve,reject)=>{
//执行异步ajax 异步请求

let promise
if(type==='GET'){
    //准备url query参数 数据 
    let dataStr=''//数据拼接字符串 
    Object.keys(data).forEach(
        key=>{
            dataStr +=key+"="+data[key]+"&"
        }
    )
}
if(dataStr !==''){
    dataStr =dataStr.substring(0,dataStr.lastIndexOf("&"))//查找所有字符串 知道&的时候结束
    url=url+"?"+dataStr

    //发送get 请求 
    promise =axios.get(url)
}else{
//发送post请求 
promise =axios.post(url,data)

}
promise.then(function(response){
//成功调用 resolve （）
resolve(response.data)


}).catch(function(error){
//失败调用 reject（）
reject(error)
})



})
 

    
}