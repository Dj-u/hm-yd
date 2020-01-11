import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/views/layout') // 布局组件
const Home = () => import('@/views/home')// 首页组件
const Article = () => import('@/views/article')// 文章详情
const Login = () => import('@/views/login')// 登录模块
const Question = () => import('@/views/question')// 问答模块
const Search = () => import('@/views/search')// 搜索模块
const SearchResult = () => import('@/views/search/result')// 搜索模块
const User = () => import('@/views/user')// 用户模块
const Chat = () => import('@/views/user/chat')// 用户模块
const Profile = () => import('@/views/user/profile')// 用户模块
const Video = () => import('@/views/video')// 视频模块

Vue.use(VueRouter)

const router = new VueRouter({
  // routes:[] 固定 不能改变
  routes: [ {
    path: '/',
    // name: 'home',
    component: Layout, // 一级路由
    children: [
      {
        path: '/',
        component: Home // 二级路由 首页
      },
      {
        path: '/user',
        component: User // 二级路由  个人中心
      },

      {
        path: '/question',
        component: Question // 二级路由 问答组件
      },
      {
        path: '/video',
        component: Video // 二级路由  视频组件
      }]
  },
  {
    // 编辑资料
    path: '/user/profile',
    component: Profile
  },
  {
    // 小智同学
    path: '/user/chat',
    component: Chat
  },
  {
    // 搜索中心
    path: '/search',
    component: Search
  },
  {
    // 搜索结果
    path: '/search/result',
    component: SearchResult
  },
  {
    // 文章详情
    path: '/article',
    component: Article
  },
  {
    // 登录组件
    path: '/login',
    component: Login
  }
  ]
})
export default router
