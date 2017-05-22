<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <div class="container-fluid">
      <div class="page-header mb-0 mt-0">
        <div class="pull-left">
          <h2>平台运营数据</h2>

        </div>
      </div>
      <div class="panel panel-white do-width lf">
        <div class="panel-body">
          <div class="row widget-box-inline" >
            <div class="widget-box-item text-center col-lg-3 col-sm-6 do-border-right do-width">
              <h3><span class="text-primary ion ion-android-cart"></span><span class="widget-box-counter">{{orderInfo.totalFull}}单</span></h3>
              <h4 class="text-muted">合计全额保单数</h4>
            </div>

            <div class="widget-box-item text-center col-lg-3 col-sm-6 do-width">
              <h3><i class="text-success ion ion-social-usd"></i><span class="widget-box-counter">{{orderInfo.totalAmountFull}}元</span></h3>
              <h4 class="text-muted">合计投保总额</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="panel panel-white do-width rt">
        <div class="panel-body">
          <div class="row widget-box-inline" >
            <div class="widget-box-item text-center col-lg-3 col-sm-6 do-border-right do-width">
              <h3><span class="text-primary ion ion-android-cart"></span><span class="widget-box-counter">{{orderInfo.totalInstallment}}单</span></h3>
              <h4 class="text-muted">合计分期保单数</h4>
            </div>

            <div class="widget-box-item text-center col-lg-3 col-sm-6 do-width">
              <h3><i class="text-success ion ion-social-usd"></i><span class="widget-box-counter">{{orderInfo.totalAmountInstallment}}元</span></h3>
              <h4 class="text-muted">合计分期总额</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="page-header mb-0 mt-0">
        <div class="pull-left">
          <h2>信息预览</h2>
          <!--<p>欢迎进入稻壳互联内容管理中心！</p>-->
        </div>
      </div>
      <div class="row">
      <div class="col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading">你好admin</div>
          <div class="panel-body">
            <p>欢迎来到保融后台管理系统</p>
            <p>共注册会员数：{{orderInfo.totalPeople}}人</p>
            <p>保单总数：{{orderInfo.totalOrder}}单</p>
          </div>
        </div>
      </div>
        <div class="col-md-4">
          <div class="panel panel-default">
            <div class="panel-heading">本月新增用户</div>
            <div class="panel-body">
              <p>共注册会员数：{{orderInfo.totalPeople}}人</p>
              <p>保单总数：{{orderInfo.totalOrder}}单</p>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>
<script>

  import breadcrumb from "@/components/bootstrap/breadcrumb"

  export default{
    data: function () {
      return {
        orderInfo: {}
      }
    },
    components: {
      breadcrumb: breadcrumb,
    },
    created: function () {
      this.getHome();
    },
    mounted: function () {

    },
    methods: {
      getHome: function (data) {
        var self = this;
        self.ajax({
          url: api.home.order.get.url,
          data: data,
          success: function (res) {
            self.orderInfo = res.homeModel;
          }
        });
      },
    },
    watch: {}
  }

</script>
