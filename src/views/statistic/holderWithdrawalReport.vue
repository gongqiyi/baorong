<template xmlns:v-bind="http://www.w3.org/1999/xhtml" xmlns:v-on="http://www.w3.org/1999/xhtml">
  <div class="container-fluid">
    <div class="page-header mb-0 mt-0">
      <div class="pull-left">
        <h4>统计管理</h4>
        <breadcrumb
          v-bind:items="[{text: '统计管理'},{text:'用户提现统计报表',active:true}]"/>
      </div>
    </div>
    <div class="panel panel-white">
      <div class="panel-body">
        <div role="tabpanel" class="tab-pane active" id="tab-base-style-1">
          <form class="form-inline dk-search-list-bar holder-form">
            <div class="form-group mt-1-5">
              <label for="realName">姓名</label>
              <input type="text" class="form-control" id="realName" name="realName">
            </div>
            <div class="form-group mt-1-5">
              <label for="idNumber">身份证号</label>
              <input type="text" class="form-control" id="idNumber" name="idNumber">
            </div>
            <div class="form-group mt-1-5">
              <label>所属区域</label>
              <select class="form-control" id="areaId" name="areaId">
              </select>
            </div>
            <div class="form-group mt-1-5">
              <label>注册时间</label>
              <input type="text" class="form-control" id="createTimeStart" name="createTimeStart"
                     onclick="laydate({istime: false, format: 'YYYY-MM-DD'})">
              -
              <input type="text" class="form-control" id="createTimeEnd" name="createTimeEnd"
                     onclick="laydate({istime: false, format: 'YYYY-MM-DD'})">
            </div>
            <div class="form-group mt-1-5">
              <button type="submit" class="btn btn-default" v-on:click.prevent="search()">搜索</button>
            </div>
            <div class="form-group mt-1-5">
              <router-link to="/holder/create" class="btn btn-default btn-info ueser-more">添加用户</router-link>
            </div>
            <div class="form-group mt-1-5">
              <a class="btn btn-default btn-info"v-bind:href="exportCompany()">数据导出</a>
            </div>
          </form>
          <div class="table-overflow">
            <table class="table table-bordered table-middle table-hover mt-2-5 mb-1">
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
                <th>银行卡</th>
                <th>目前积分总数</th>
                <th>可提现积分</th>
                <th>可提现金额</th>
                <th>已提现积分</th>
                <th>已提现金额</th>
                <th>剩余可提现积分</th>
              </tr>
              </thead>
              <tbody>
              <tr v-for="item in pageList.list">
                <td align="center">
                  {{ item.id }}
                </td>
                <td>{{ item.userName }}</td>
                <td>{{ item.realName }}</td>
                <td>{{ item.idNumber }}</td>
                <td>{{ item.mobile }}</td>
                <td>{{ item.areaName }}</td>
                <td><a href="#" v-on:click.prevent="showBankList(item.id)">查看</a></td>
                <td>{{ item.exchangePoint + item.withdrawalPoint }}</td>
                <td>{{ item.withdrawalPoint }}</td>
                <td>{{ item.withdrawalMoney }}</td>
                <td>{{ item.hasWithdrawalPoint }}</td>
                <td>{{ item.hasWithdrawalPointMoney }}</td>
                <td>{{ item.withdrawalPoint }}</td>
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
    </div>


    <!--银行卡列表-->
    <template>
      <div id="bank" class="panel-body" style="display: none;">
        <table class="table table-bordered table-hover mt-1">
          <thead>
          <tr>
            <th>卡号</th>
            <th>银行</th>
            <th>城市</th>
            <th>开户行</th>
            <th>添加时间</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="item in bankList">
            <td>{{item.bankNumber}}</td>
            <td>{{item.bankType | enumToDescription(bankTypeList)}}</td>
            <td>{{item.city}}</td>
            <td>{{item.address}}</td>
            <td>{{item.createTime | formatDate}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </template>
    <!--银行卡列表-->



  </div>
</template>


<script>
  import 'jquery-validation'
  import '../../../static/js/plugins/select2/js/select2.min'
  import '../../../static/js/plugins/select2/js/i18n/zh-CN'
  import '../../../static/js/plugins/select2/css/select2.min.css'
  import '../../../static/js/plugins/laydate/laydate'
  import '../../../static/js/plugins/uploadUeditor'
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
        currentIndex: 1,
        currentVehicleHolderId: 0,
        vehicleList: [],
        currentVehicle: {},
        bankList: [],
        bankTypeList: [],
      }
    },
    components: {
      pagination: pagination,
      breadcrumb: breadcrumb,
    },
    created: function () {
      this.getHolderList();
      this.getBankTypeList();
    },
    mounted: function () {
      this.initAreaSelect2();
      this.upload();
      this.saveVehicleForm();
    },
    updated: function () {
      this.upload();
    },
    methods: {
      exportCompany: function (data) {
        if (data == null) {
          data = {};
        }
        let formData = $('.holder-form').serialize();
        var url = api.statistic.exportWithdrawal.url;
        console.log(url);
        console.log(formData);
        return url + '?' + formData;
      },
      // 获取用户列表
      getHolderList: function (data) {
        let self = this;
        self.ajax({
          url: api.statistic.holderWithdrawal.url,
          data: data,
          success: function (res) {
            self.pageList = res.statisticPageList;
            self.currentIndex = res.statisticPageList.pageIndex;
          }
        });
      },
      // 筛选
      search: function (data) {
        if (data == null) {
          data = {};
        }
        let formData = commonApp.tools.getFromData($('.holder-form'));
        _.assign(data, formData);
        this.getHolderList(data);
      },

      // 初始化地区选择
      initAreaSelect2: function () {
        $('#areaId').select2({
          language: 'zh-CN',
          width: '100px',
          placeholder: {
            id: '',
            text: '--请选择--'
          },
          allowClear: true,
          ajax: {
            data: function (params) {
              return {
                city: params.term,
                pageIndex: params.page,
              };
            },
            url: api.content.area.list.url,
            dataType: 'json',
            delay: 250,
            processResults: function (data, params) {
              let areaList = data.areaList;
              let results = _.map(areaList.list, function (area) {
                return {id: area.id, text: area.city};
              });
              return {
                results: results,
                pagination: {
                  more: data.areaList.hasNextPage,
                }
              };
            },
            cache: true
          },
        });
      },
      // 获取银行卡类型列表
      getBankTypeList: function () {
        let self = this;
        self.ajax({
          url: api.holder.bank.type.url,
          success: function (res) {
            self.bankTypeList = res.bankTypeList;
          }
        });
      },
      // 获取用户银行卡列表
      getBankList: function (id) {
        let self = this;
        self.ajax({
          url: api.holder.bank.list.url(id),
          success: function (res) {
            self.bankList = res.bankList;
          }
        });
      },
      // 展示用户银行卡列表
      showBankList: function (id) {
        let self = this;
        layer.open({
          type: 1,
          area: ['800px', '500px'],
          title: false,
          shade: 0.01,
          shadeClose: true,
          content: $('#bank'),
          success: function (layero, index) {
            self.getBankList(id);
            $(layero).show();
          }
        });
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
  }
</script>


