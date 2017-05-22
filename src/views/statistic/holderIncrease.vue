<template xmlns:v-on="http://www.w3.org/1999/xhtml" xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="container-fluid">
    <div class="page-header mb-0 mt-0">
      <div class="pull-left">
        <h4>用户增长统计</h4>
        <breadcrumb
                v-bind:items="[{text: '统计管理'},{text:'用户增长统计',active:true}]"/>
      </div>
    </div>
    <div class="panel panel-white">
      <div class="panel-body">
        <form class="form-inline dk-search-list-bar holder-increase-form">
          <div class="form-group">
            <label>年</label>
            <select class="form-control" id="year" name="year">
              <option value="">--请选择--</option>
              <option v-for="y in yearList">
                {{y}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <label>月</label>
            <select class="form-control" id="month" name="month">
              <option value="">--请选择--</option>
              <option v-for="m in monthList">
                {{m}}
              </option>
            </select>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-default" v-on:click.prevent="search()">搜索</button>
            <a class="btn btn-primary" v-bind:href="exportCompany()">导出</a>
          </div>
        </form>
        <div class="table-overflow">
        <table id="js-datatable_example" class="table table-bordered table-middle table-hover mt-1-5">
          <thead>
          <tr>
            <th>年</th>
            <th>月</th>
            <th>当月增长总数</th>
            <th>实名用户数</th>
            <th>真实投资用户数</th>
            <th>提现用户数</th>
            <th>来自PC数</th>
            <th>来自微信数</th>
            <th>来自APP数</th>
            <th>来自线下数</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in pageList.list">
            <td>{{item.year}}</td>
            <td>{{item.month}}</td>
            <td><a href="#" v-on:click.prevent="showHolderNew(item.year,item.month)">{{item.totalCount}}</a></td>
            <td><a href="#" v-on:click.prevent="showHolderNewTwo(item.year,item.month)">{{item.realNameCount}}</a></td>
            <td>{{item.investCount}}</td>
            <td>{{item.withdrawCount}}</td>
            <td>{{item.pcCount}}</td>
            <td>{{item.wechatCount}}</td>
            <td>{{item.appCount}}</td>
            <td>{{item.offlineCount}}</td>
          </tr>
          </tbody>
        </table>
        <pagination size="md"
                    :total-rows="pageList.totalRecord"
                    :per-page="pageList.pageSize"
                    v-model="currentIndex"
        >
        </pagination>
        </div>
      </div>
    </div>


    <!--信息列表-->
    <template>
      <div class="panel-body" id="vehicle" style="display: none">
        <div class="form-inline form-group clearfix">
          <form>

          <a v-bind:href="exportCompany1()" class="btn btn-primary pull-right">导出</a>
          </form>
        </div>
        <table class="table table-bordered table-hover mt-1">
            <thead>
            <tr>
              <th class="text-center" width="30">
                序号
              </th>
              <th>用户名</th>
              <th>姓名</th>
              <th>身份证号</th>
              <th>手机号</th>
              <th>所在区域</th>
              <th>注册时间</th>
              <th>目前积分总数</th>
              <th>可兑换积分</th>
              <th>可提现积分</th>
              <th>已兑换积分</th>
              <th>已提现积分</th>
              <th>邀请码</th>
              <th>状态</th>
            </tr>
            </thead>
          <tbody>
          <tr v-for="item in pageList1.list">

            <td align="center">
              {{ item.id }}
            </td>
            <td>{{ item.userName }}</td>
            <td>{{ item.realName }}</td>
            <td>{{ item.idNumber }}</td>
            <td>{{ item.mobile }}</td>
            <td>{{ item.areaName }}</td>
            <td>{{ item.createTime | formatDate }}</td>
            <td>{{ item.exchangePoint + item.withdrawalPoint }}</td>
            <td>{{ item.exchangePoint }}</td>
            <td>{{ item.withdrawalPoint }}</td>
            <td>{{ item.hasExchangePoint }}</td>
            <td>{{ item.hasWithdrawalPoint }}</td>
            <td>{{ item.inviteCode }}</td>
            <td>{{ item.locked ? '已锁定' : '正常'}}</td>
          </tr>
          </tbody>
        </table>
        <pagination size="md"
                    :total-rows="pageList.totalRecord"
                    :per-page="pageList.pageSize"
                    v-model="currentIndex"
        >
        </pagination>
      </div>
    </template>
    <!--信息列表-->

  </div>

</template>

<script>
  import pagination from "@/components/bootstrap/pagination"
  import breadcrumb from "@/components/bootstrap/breadcrumb"

  export default{
    data: function () {
      return {

        pageList: {
          pageSize: 1,
          pageIndex: 1,
          totalRecord: 0,
          totalPage: 1,
          list: [],
        },
        pageList1: {
          pageSize: 1,
          pageIndex: 1,
          totalRecord: 0,
          totalPage: 1,
          list: [],
        },
        currentIndex: 1,

        yearList: _.range(2017, 2021),
        monthList: _.range(1, 13),

        year:0,
        month:0,
        idNumber:null,
      }
    },
    components1: {
      breadcrumb: breadcrumb,
      pagination: pagination,
    },
    components: {
      breadcrumb: breadcrumb,
      pagination: pagination,
    },
    created: function () {
      this.getHolderIncrease();
    },
    mounted: function () {
    },
    methods: {
      exportCompany: function (data) {
        if (data == null) {
          data = {};
        }
        let formData = $('.holder-increase-form').serialize();
          var url = api.statistic.holder.url;
          console.log(url);
          console.log(formData);
          return url + '?' + formData;
      },
      exportCompany1: function (data) {
          let self=this;
        var url = api.statistic.holderNewExport.url;

        return url + '?year='+self.year+'&month='+self.month+'&idNumber='+self.idNumber;
      },
      getHolderIncrease: function (data) {
        let self = this;
        self.ajax({
          url: api.statistic.holderIncrease.url,
          data: data,
          success: function (res) {
            self.pageList = res.statisticPageList;
            self.currentIndex = res.statisticPageList.pageIndex;
          }
        });
      },
      // 搜索
      search: function (data) {
        if (data == null) {
          data = {};
        }
        let formData = commonApp.tools.getFromData($('.holder-increase-form'));
        _.assign(data, formData);
        this.getHolderIncrease(data);
      },

      // 获取新增用户信息
      getHolderNew: function (year,month) {
        let self = this;
        self.ajax({
          url: api.statistic.holderNew.url,
          data: {year:self.year,month: self.month,idNumber: self.idNumber},
          success: function (res) {
            self.pageList1 = res.holderPageList;
            self.currentIndex1 = res.holderPageList.pageIndex;
          }
        });
      },
      //新增用户信息弹框
      showHolderNew: function (year,month) {
        let self = this;
        self.year =year;
        self.month=month;
        self.idNumber=false;
        console.log( self.year);
        console.log(self.month);
        console.log(self.idNumber);
        layer.open({
          type: 1,
          area: ['80%', '800px'],
          title: false,
          shade: 0,
          content: $('#vehicle'),
          success: function (layero, index) {
            self.getHolderNew(year,month);
            $(layero).show();
          }
        });
      },

      // 获取实名认证用户信息
      getHolderNewTwo: function (year,month) {
        let self = this;
        self.ajax({
          url: api.statistic.holderNew.url,
          data: {year:self.year,month:self.month,idNumber:self.idNumber},
          success: function (res) {
            self.pageList1 = res.holderPageList;
            self.currentIndex1 = res.holderPageList.pageIndex;
          }
        });
      },
      //获取实名认证用户信息
      showHolderNewTwo: function (year,month) {
        let self = this;
        self.year =year;
        self.month=month;
        self.idNumber=true;
        layer.open({
          type: 1,
          area: ['80%', '800px'],
          title: false,
          shade: 0,
          content: $('#vehicle'),
          success: function (layero, index) {
            self.getHolderNewTwo(year,month);
            $(layero).show();
          }
        });
      },
    },
    watch: {
      currentIndex: function (newIndex) {
        let self = this;
        let query = {
          pageIndex: newIndex
        };
        self.search(query);
      }
    }
  }
</script>
