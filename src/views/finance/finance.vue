<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div id="invest">
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
    <div class="dk-main-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'finance',

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
            name: "提现管理", url: "",active:false,
            children:[
              { name: "提现记录列表", url: "/finance/withdrawal/list"},
              { name: "提现相关配置", url: "/finance/withdrawal/setting"}
            ]
          },{
            name: "积分记录", url: "/finance/point/list",children:[],active:false
          },

        ],
        icon:'<span class="ion-chevron-right"></span>',
        active:""
      }
    },

  }
</script>
