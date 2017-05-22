<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="content">
    <!--2.内容管理的侧边导航条  开始-->
    <aside class="dk-main-aside">
      <a id="js-toggle-aside-nav" class="dk-nav-shrink-btn" href="javascript:;"><span
              class="ion ion-navicon-round"></span></a>
      <nav class="dk-nav-aside scroll-bar">
        <ul id="js-aside-collapse">

          <li  v-for="menu in menuList">
            <a @click="toUrl(menu)" v-bind:href="'#'+menu.url"  @click.prevent="menu.active = !menu.active"  :class="menu.active?'':'collapsed'"><span class=""></span>
              <span>{{menu.name}}  </span>
              <span class="ion-chevron-right" v-show="menu.children.length>0"></span>
            </a>
            <ul :class="menu.active?'collapse in':''">
              <li v-for="menu2 in menu.children">
                <a href="javascript:void(0);" @click="toUrl(menu2)"><span>{{menu2.name}}</span></a>
              </li>
            </ul>
          </li>

        </ul>
      </nav>
    </aside>
    <!--2.内容管理的侧边导航条  结束-->
    <div class="dk-main-container">
      <router-view></router-view>
    </div>
  </div>

</template>

<script>
  export default{
    name: 'content',
    mounted: function () {
    },
    methods:{
      toUrl:function(menu){
        if(!menu.children || menu.children.length==0){
          this.$router.push(menu.url);
        }
      }
    },
    data: function () {
      return {
        menuList: [
          {
            name: "新闻资讯管理", url: "",active:false,
            children:[
              { name: "内容管理", url: "/content/content/list"},
              { name: "类别管理", url: "/content/category/list"}
            ]
          },{
            name: "广告内容管理", url: "/content/link/list",children:[],active:false
          },
          {
          name: "站内信管理", url: "",active:false,
        children:[
        { name: "发站内信", url: "/content/message/create"},
        { name: "站内信列表", url: "/content/message/list"}
               ]
          },
          {
            name: "短信管理", url: "/content/sms/list",children:[],active:false
          },
          {
            name: "城市区域管理", url: "/content/area/list",children:[],active:false
          },
          {
            name: "访客管理", url: "/content/visitor/list",children:[],active:false
          },
          {
            name: "意见反馈管理", url: "/content/feedback/list",children:[],active:false
          },
        ],
        icon:'<span class="ion-chevron-right"></span>',
        active:""
      }
    },

  }



</script>
