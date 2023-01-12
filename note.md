# umiJS 使用
## 路由
路由文件 `.umirc.ts`, 路由增加在`routes:[]` 数组中
```tsx
  routes: [
    {
      exact:true,           // 严格匹配    
      path: '/',
      redirect: '/home',    // 重定向
      routes:[              // 子路由
          {
            path:'/home/user',
            components:'@/pages/Home/user'    // 文件路径
          }       
        ],
       wrappers:[            // 进入 /home 要经过 中间件验证
          '@/wrappers/auth'
        ]     
    },
  ],
```
在文件 `layouts` 中可以渲染全局模板文件。  
### 路由跳转  
第一种跳转方式：
```html
    <Link to="'">跳转地点</Link>
    <NavLink to="'">跳转地点</NavLink>
```
第二种跳转方式
 ```tsx
import {history} from '@umijs/max'
const User = () => {
  useEffect(()=>{
    setTimeout(()=>{
      history.push('/home')
    },10000)
  },[])
```
### HTML 模板文件
React 的html 模板文件存放在 `node-modules/@umljs/core/lib/HTML/document.ejs`。千万不要在这里引入任何文件，因为无效。
但是在 umijs/max 中已经没有这个文件，主页面为`src/components/Guide/Guide.tsx`，模板文件需要 `yarn eject`

### Mock 数据
一般在 umijs 默认启动为模拟数据，也可以在 .umirc.ts 中关闭，配置环境变量关闭。
```tsx
// 配置 .umirc.ts 关闭
export default {
  mock: false,
};

// 环境变量关闭
```
