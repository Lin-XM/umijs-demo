import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  history: {
    // 路由模式，默认 browser
    type: 'browser',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    {
      path: '/user',
      component:'@/pages/User/index.tsx'
    },
  ],
  fastRefresh: {},
});
