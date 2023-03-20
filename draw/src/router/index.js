import VueRouter from "vue-router";
import Content from "@/pages/Content";
import Login from "@/pages/login"
import Logon from "@/pages/logon"
import Article from "@/pages/ArticleList"
import Article2 from "@/pages/ArticleList2"
import NoticeList from "@/pages/NoticeList"
import NoticeList2 from "@/pages/NoticeList2"
import NoticeList3 from "@/pages/NoticeList3"
import NoticeList4 from "@/pages/NoticeList4"
import NoticeList5 from "@/pages/NoticeList5"
import ShouYe from "@/pages/shouye"
import Search from "@/pages/Search"
import Drugstore from "@/pages/Drugstore"
import Detail from "@/pages/Detail"
import Shopping from "@/pages/MyShopping"
import Article21 from "@/components/ArticleLists/ArticleList1"
import Article22 from "@/components/ArticleLists/ArticleList22"
import Article23 from "@/components/ArticleLists/ArticleList23"
import Article24 from "@/components/ArticleLists/ArticleList24"
import Article25 from "@/components/ArticleLists/ArticleList25"
import LiShi from "@/pages/lishi.vue"

const router = new VueRouter({
    routes : [
        {
            path: '/',
            redirect:'/home/shouye',
        },
        {   
            path:'/home',
            component: Content,
            children:[
                {
                    path:'shouye',
                    component: ShouYe
                },
                {
                    path:'articleone',
                    component: Article
                },
                {
                    path:'articletwo',
                    component: Article2,
                    redirect:'/home/articletwo/articletwoone',
                    children:[
                        {
                            path:'articletwoone',
                            component: Article21
                        },
                        {
                            path:'articletwotwo',
                            component: Article22
                        },
                        {
                            path:'articletwothree',
                            component: Article23
                        },
                        {
                            path:'articletwofour',
                            component: Article24
                        },
                        {
                            path:'articletwofive',
                            component: Article25
                        },
                        
                    ]
                },
                // {
                //     path:'articletwotwo',
                //     component: Article22
                // },
                {
                    path:'noticeone',
                    component: NoticeList
                },
                {
                    path:'noticetwo',
                    component: NoticeList2
                },
                {
                    path:'noticethree',
                    component: NoticeList3
                },
                {
                    path:'noticefour',
                    component: NoticeList4
                },
                {
                    path:'noticefive',
                    component: NoticeList5
                },
                {
                    path:'search',
                    component: Search
                },
                {
                    path:'drugstore',
                    component: Drugstore
                },
                {
                    path:'detail',
                    name:'detail',
                    component: Detail,
                    //在这里接收一下传来的参数,然后包装一下再传给组件
                    props($route){
                        return {id:$route.query.id}
                    },
                },
                {
                    path:'shopping',
                    name:'shopping',
                    component: Shopping,
                    props($route){
                        return {id:$route.query.id}
                    },
                },
                {
                    path:'lishi',
                    name:'lishi',
                    component: LiShi
                }
            ]
        },
        {
            path:'/login',
            component: Login
        },
        {
            path:'/logon',
            component: Logon
        },

    ],

    mode:'history'
})

export default router