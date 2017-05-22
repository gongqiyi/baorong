import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import content from '@/views/content/content'
import areaList from '@/views/content/area/list'
import areaCreate from '@/views/content/area/create'
import categoryList from '@/views/content/category/list'
import categoryCreate from '@/views/content/category/create'
import contentList from '@/views/content/content/list'
import contentCreate from '@/views/content/content/create'
import contentUpdate from '@/views/content/content/update'
import linkList from '@/views/content/link/list'
import linkCreate from '@/views/content/link/create'
import linkUpdate from '@/views/content/link/update'
import visitorList from '@/views/content/visitor/list'
import feedbackList from '@/views/content/feedback/list'
import messageList from '@/views/content/message/list'
import messageCreate from '@/views/content/message/create'
import smsList from '@/views/content/sms/list'
import holder from '@/views/holder/holder'
import holderList from '@/views/holder/list'
import holderCreate from '@/views/holder/create'
import holderUpdate from '@/views/holder/update'
import salesList from '@/views/holder/sales/list'
import salesCreate from '@/views/holder/sales/create'
import salesUpdate from '@/views/holder/sales/update'
import invest from '@/views/invest/invest'
import productFullList from '@/views/invest/product/full-list'
import productFullCreate from '@/views/invest/product/full-create'
import productFullUpdate from '@/views/invest/product/full-update'
import productInstallmentList from '@/views/invest/product/installment-list'
import productInstallmentCreate from '@/views/invest/product/installment-create'
import productInstallmentUpdate from '@/views/invest/product/installment-update'
import orderFullList from '@/views/invest/order/full/list'
import orderFullCreate from '@/views/invest/order/full/create'
import orderFullImport from '@/views/invest/order/full/import'
import orderFullExceptionList from '@/views/invest/order/full/list-exception'
import orderInstallmentList from '@/views/invest/order/installment/list'
import orderInstallmentCreate from '@/views/invest/order/installment/create'
import storeList from '@/views/invest/store/list'
import storeCreate from '@/views/invest/store/create'
import storeUpdate from '@/views/invest/store/update'
import consumption from '@/views/consumption/consumption'
import merchantList from '@/views/consumption/merchant/list'
import merchantCreate from '@/views/consumption/merchant/create'
import merchantUpdate from '@/views/consumption/merchant/update'
import merchantAward from '@/views/consumption/merchant/award'
import productList from '@/views/consumption/product/list'
import productCreate from '@/views/consumption/product/create'
import consumptionOrderList from '@/views/consumption/order/list'
import market from '@/views/market/market'
import investPointRuleList from '@/views/market/investPointRule/list'
import investPointRuleCreate from '@/views/market/investPointRule/create'
import investPointRuleUpdate from '@/views/market/investPointRule/update'
import invitePointRuleList from '@/views/market/invitePointRule/list'
import invitePointRuleCreate from '@/views/market/invitePointRule/create'
import invitePointRuleUpdate from '@/views/market/invitePointRule/update'
import salesAwardRuleList from '@/views/market/salesAwardRule/list'
import salesAwardRuleCreate from '@/views/market/salesAwardRule/create'
import salesAwardRuleUpdate from '@/views/market/salesAwardRule/update'
import inviteRecordList from '@/views/market/inviteRecord/list'
import activityList from '@/views/market/activity/list'
import activityCreate from '@/views/market/activity/create'
import activityUpdate from '@/views/market/activity/update'
import finance from '@/views/finance/finance'
import withdrawalList from '@/views/finance/withdrawal/list'
import withdrawalSetting from '@/views/finance/withdrawal/setting'
import pointList from '@/views/finance/point/list'
import statistic from '@/views/statistic/statistic'
import statisticHolderIncrease from '@/views/statistic/holderIncrease'
import statisticInvite from '@/views/statistic/invite'
import statisticSalesInvite from '@/views/statistic/salesInvite'
import statisticInvestFull from '@/views/statistic/investFull'
import statisticInvestInstallment from '@/views/statistic/investInstallment'
import statisticStoreInvest from '@/views/statistic/storeInvest'
import statisticHolderNew from '@/views/statistic/holderIncrease'
import statisticInvestInstallmentReport from '@/views/statistic/investInstallmentReport'
import statisticInvestFullReport from '@/views/statistic/investFullReport'
import statisticHolderIntegralReport from '@/views/statistic/holderIntegralReport'
import statisticIntegralReport from '@/views/statistic/integralReport'
import statisticHolderWithdrawal from '@/views/statistic/holderWithdrawalReport'
import statisticIntegralRepayment from '@/views/statistic/investRepaymentReport'
import orderInstallmentImport from'@/views/invest/order/installment/import'
import listInstallmentException from'@/views/invest/order/installment/listException'

Vue.use(Router)

export default new Router({
  routes: [
    // 首页
    {
      path: '/',
      component: home,
    },
    // 内容管理
    {
      path: '/content',
      component: content,
      children: [
        // 地区
        {path: '', redirect: '/content/area/list'},
        {path: 'area/list', component: areaList},
        {path: 'area/create', component: areaCreate},
        // 分类
        {path: 'category/list', component: categoryList},
        {path: 'category/create', component: categoryCreate},
        // 内容
        {path: 'content/list', component: contentList},
        {path: 'content/create', component: contentCreate},
        {path: 'content/update/:id', component: contentUpdate},
        // 广告
        {path: 'link/list', component: linkList},
        {path: 'link/create', component: linkCreate},
        {path: 'link/update/:id', component: linkUpdate},
        // 访客
        {path: 'visitor/list', component: visitorList},
        // 意见反馈
        {path: 'feedback/list', component: feedbackList},
        // // 站内信
        {path: 'message/list', component: messageList},
        {path: 'message/create', component: messageCreate},
        // // 短信
        {path: 'sms/list', component: smsList},
      ]
    },
    // 用户管理
    {
      path: '/holder',
      component: holder,
      children: [
        {path: '', redirect: '/holder/list'},
        {path: 'list', component: holderList},
        {path: 'create', component: holderCreate},
        {path: 'update/:id', component: holderUpdate},
        {path: 'sales/list', component: salesList},
        {path: 'sales/create', component: salesCreate},
        {path: 'sales/update/:id', component: salesUpdate},
      ]
    },
    // 投保管理
    {
      path: '/invest',
      component: invest,
      children: [
        {path: '', redirect: '/invest/product/full/list'},
        // 全额产品
        {path: 'product/full/list', component: productFullList},
        {path: 'product/full/create', component: productFullCreate},
        {path: 'product/full/update/:id', component: productFullUpdate},
        // 分期产品
        {path: 'product/installment/list', component: productInstallmentList},
        {path: 'product/installment/create', component: productInstallmentCreate},
        {path: 'product/installment/update/:id', component: productInstallmentUpdate},
        // 全额订单
        {path: 'order/full/list', component: orderFullList},
        {path: 'order/full/handCreate', component: orderFullCreate},
        {path: 'order/full/import', component: orderFullImport},
        {path: 'order/full/listException', component: orderFullExceptionList},
        // 分期订单
        {path: 'order/installment/list', component: orderInstallmentList},
        {path: 'order/installment/create', component: orderInstallmentCreate},
        {path: 'order/installment/import', component: orderInstallmentImport},
        {path: 'order/installment/listException', component: listInstallmentException},
        {path: 'store/list', component: storeList},
        {path: 'store/create', component: storeCreate},
        {path: 'store/update/:id', component: storeUpdate},
      ]
    },
    // 消费管理
    {
      path: '/consumption',
      component: consumption,
      children: [
        {path: '', redirect: '/consumption/merchant/list'},
        // 商户管理
        {path: 'merchant/list', component: merchantList},
        {path: 'merchant/create', component: merchantCreate},
        {path: 'merchant/update/:id', component: merchantUpdate},
        {path: 'merchant/award', component: merchantAward},
        // 消费券管理
        {path: 'product/list', component: productList},
        {path: 'product/create', component: productCreate},
        // 兑换记录
        {path: 'order/list', component: consumptionOrderList},
      ]
    },
    // 推广管理
    {
      path: '/market',
      component: market,
      children: [
        // 投保积分规则
        {path: '', redirect: '/market/investPointRule/list'},
        {path: 'investPointRule/list', component: investPointRuleList},
        {path: 'investPointRule/create', component: investPointRuleCreate},
        {path: 'investPointRule/update/:id', component: investPointRuleUpdate},
        // 邀请积分规则
        {path: 'invitePointRule/list', component: invitePointRuleList},
        {path: 'invitePointRule/create', component: invitePointRuleCreate},
        {path: 'invitePointRule/update/:id', component: invitePointRuleUpdate},
        // 客户经理奖励规则
        {path: 'salesAwardRule/list', component: salesAwardRuleList},
        {path: 'salesAwardRule/create', component: salesAwardRuleCreate},
        {path: 'salesAwardRule/update/:id', component: salesAwardRuleUpdate},
        // 邀请记录
        {path: 'inviteRecord/list', component: inviteRecordList},
        // 活动管理
        {path: 'activity/list', component: activityList},
        {path: 'activity/create', component: activityCreate},
        {path: 'activity/update/:id', component: activityUpdate},
      ]
    },
    // 财务管理
    {
      path: '/finance',
      component: finance,
      children: [
        {path: '', redirect: '/finance/withdrawal/list'},
        // 提现
        {path: 'withdrawal/list', component: withdrawalList},
        // 提现相关配置
        {path: 'withdrawal/setting', component: withdrawalSetting},
        // 积分记录
        {path: 'point/list', component: pointList},
      ],
    },
    // 统计管理
    {
      path: '/statistic',
      component: statistic,
      children: [
        {path: '', redirect: '/statistic/holderIncrease'},
        {path: 'holderIncrease', component: statisticHolderIncrease},
        {path:'holderWithdrawalReport',component:statisticHolderWithdrawal},
        {path:'investRepaymentReport',component:statisticIntegralRepayment},
        {path: 'investInstallmentReport', component: statisticInvestInstallmentReport},
        {path: 'investFullReport', component: statisticInvestFullReport},
        {path:'holderIntegralReport',component:statisticHolderIntegralReport},
        {path:'integralReport',component:statisticIntegralReport},
        {path: 'holderNew', component: statisticHolderNew},
        {path: 'investFull', component: statisticInvestFull},
        {path: 'investInstallment', component: statisticInvestInstallment},
        {path: 'invite', component: statisticInvite},
        {path: 'salesInvite', component: statisticSalesInvite},
        {path: 'storeInvest', component: statisticStoreInvest},
      ]
    }
  ]
})
