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
    name: 'invest',
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
          name: "产品管理", url: "",active:false,
          children:[
            { name: "全额投保产品管理", url: "/invest/product/full/list"},
            { name: "分期投保产品管理", url: "/invest/product/installment/list"}
          ]
        },
        {
          name: "全额投保管理", url: "",active:false,
          children:[
            { name: "订单列表", url: "/invest/order/full/list"},
            { name: "匹配异常订单", url: "/invest/order/full/listException"}
          ]
        },
        {
          name: "分期投保管理", url: "",active:false,
          children:[
            { name: "订单列表", url: "/invest/order/installment/list"},
            { name: "匹配异常订单", url: "/invest/order/installment/listException"}
          ]
        },
        {
          name: "门店管理", url: "/invest/store/list",children:[],active:false
        },
      ],
      icon:'<span class="ion-chevron-right"></span>',
      active:""
    }
  },
  }
</script>
