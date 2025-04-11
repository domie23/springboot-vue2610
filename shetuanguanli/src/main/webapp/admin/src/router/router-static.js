import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import dictionary from '@/views/modules/dictionary/list'
    import shetuan from '@/views/modules/shetuan/list'
    import shetuanChengyuan from '@/views/modules/shetuanChengyuan/list'
    import shetuanCollection from '@/views/modules/shetuanCollection/list'
    import shetuanLiuyan from '@/views/modules/shetuanLiuyan/list'
    import shetuanOrder from '@/views/modules/shetuanOrder/list'
    import shetuanhuodong from '@/views/modules/shetuanhuodong/list'
    import shetuanhuodongCollection from '@/views/modules/shetuanhuodongCollection/list'
    import shetuanhuodongLiuyan from '@/views/modules/shetuanhuodongLiuyan/list'
    import shetuanhuodongOrder from '@/views/modules/shetuanhuodongOrder/list'
    import tuanzhang from '@/views/modules/tuanzhang/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import config from '@/views/modules/config/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShetuan from '@/views/modules/dictionaryShetuan/list'
    import dictionaryShetuanCollection from '@/views/modules/dictionaryShetuanCollection/list'
    import dictionaryShetuanOrderYesno from '@/views/modules/dictionaryShetuanOrderYesno/list'
    import dictionaryShetuanhuodong from '@/views/modules/dictionaryShetuanhuodong/list'
    import dictionaryShetuanhuodongCollection from '@/views/modules/dictionaryShetuanhuodongCollection/list'
    import dictionaryShetuanhuodongOrderYesno from '@/views/modules/dictionaryShetuanhuodongOrderYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShetuan',
        name: '社团类型',
        component: dictionaryShetuan
    }
    ,{
        path: '/dictionaryShetuanCollection',
        name: '收藏表类型',
        component: dictionaryShetuanCollection
    }
    ,{
        path: '/dictionaryShetuanOrderYesno',
        name: '审核状态',
        component: dictionaryShetuanOrderYesno
    }
    ,{
        path: '/dictionaryShetuanhuodong',
        name: '社团活动类型',
        component: dictionaryShetuanhuodong
    }
    ,{
        path: '/dictionaryShetuanhuodongCollection',
        name: '收藏表类型',
        component: dictionaryShetuanhuodongCollection
    }
    ,{
        path: '/dictionaryShetuanhuodongOrderYesno',
        name: '审核状态',
        component: dictionaryShetuanhuodongOrderYesno
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/shetuan',
        name: '社团',
        component: shetuan
      }
    ,{
        path: '/shetuanChengyuan',
        name: '社团成员',
        component: shetuanChengyuan
      }
    ,{
        path: '/shetuanCollection',
        name: '社团收藏',
        component: shetuanCollection
      }
    ,{
        path: '/shetuanLiuyan',
        name: '社团留言',
        component: shetuanLiuyan
      }
    ,{
        path: '/shetuanOrder',
        name: '社团申请',
        component: shetuanOrder
      }
    ,{
        path: '/shetuanhuodong',
        name: '社团活动',
        component: shetuanhuodong
      }
    ,{
        path: '/shetuanhuodongCollection',
        name: '社团活动收藏',
        component: shetuanhuodongCollection
      }
    ,{
        path: '/shetuanhuodongLiuyan',
        name: '社团活动留言',
        component: shetuanhuodongLiuyan
      }
    ,{
        path: '/shetuanhuodongOrder',
        name: '社团活动申请',
        component: shetuanhuodongOrder
      }
    ,{
        path: '/tuanzhang',
        name: '团长',
        component: tuanzhang
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
