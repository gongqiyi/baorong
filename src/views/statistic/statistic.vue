<template>
  <div id="invest">
    <aside class="dk-main-aside">
      <a id="js-toggle-aside-nav" class="dk-nav-shrink-btn" href="javascript:;"><span
              class="ion ion-navicon-round"></span></a>
      <nav class="dk-nav-aside scroll-bar">
        <ul id="js-aside-collapse">
          <li>
            <router-link to="/statistic/holderIncrease"><span>用户增长统计</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/investInstallmentReport"><span>分期购数据统计报表</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/investFullReport"><span>全额数据统计报表</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/integralReport"><span>用户积分兑换情况统计报表</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/holderIntegralReport"><span>用户虚拟商品消费统计报表</span></router-link>
          </li>

          <li>
            <router-link to="/statistic/holderWithdrawalReport"><span>用户提现统计报表</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/investRepaymentReport"><span>分期用户还款统计报表</span></router-link>
          </li>
        <!--  <li>
            <router-link to=""><span>分期逾期用户统计报表</span></router-link>
          </li>
          <li>
            <router-link to=""><span>保险手续费统计报表</span></router-link>
          </li>-->
          <li>
            <router-link to="/statistic/salesInvite"><span>客户经理邀请统计</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/invite"><span>用户邀请统计</span></router-link>
          </li>

          <li>
            <router-link to="/statistic/investFull"><span>全额投保统计</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/investInstallment"><span>分期投保统计</span></router-link>
          </li>
          <li>
            <router-link to="/statistic/storeInvest"><span>线下门店业绩统计</span></router-link>
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
    name: 'statistic',
  }



</script>
