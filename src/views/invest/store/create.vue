<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
  <div class="container-fluid">
    <div class="page-header mb-0 mt-0">
      <div class="pull-left">
        <h4>门店管理</h4>
        <breadcrumb
                v-bind:items="[{text: '投保管理'},{text:'门店管理'},{text:'添加门店', active: true}]"/>
      </div>
      <div class="pull-right">
        <router-link class="btn btn-primary mt-1-5 w-10-5" to="/invest/store/list">返回</router-link>
      </div>
    </div>
    <div class="panel panel-white">
      <div class="panel-body">
        <h4>添加门店</h4>
        <hr>
        <form class="form-horizontal mt-2 create-store-form" method="post" novalidate="novalidate">
          <div class="form-group ">
            <label for="name" class="control-label col-lg-2">名称</label>
            <div class="col-lg-10">
              <input class="form-control" id="name" name="name" type="text" required="" aria-required="true">
            </div>
          </div>
          <div class="form-group ">
            <label for="areaId" class="control-label col-lg-2">所在地区</label>
            <div class="col-lg-10">
              <select class="form-control" id="areaId" name="areaId">
              </select>
            </div>
          </div>
          <div class="form-group ">
            <label for="address" class="control-label col-lg-2">地址</label>
            <div class="col-lg-10">
              <input class="form-control" id="address" name="address" type="text">
            </div>
          </div>
          <div class="form-group ">
            <label for="tel" class="control-label col-lg-2">电话</label>
            <div class="col-lg-10">
              <input class="form-control" id="tel" name="tel" type="text" required="" aria-required="true">
            </div>
          </div>
          <div class="form-group">
            <div class="col-lg-offset-2 col-lg-10">
              <button class="btn btn-inverse" type="submit">添加</button>
              <button class="btn btn-default" type="reset">取消</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import 'jquery-validation'
  import '../../../../static/js/plugins/select2/js/select2.min'
  import '../../../../static/js/plugins/select2/js/i18n/zh-CN'
  import '../../../../static/js/plugins/select2/css/select2.min.css'
  import breadcrumb from "@/components/bootstrap/breadcrumb"

  export default{
    data: function () {
      return {}
    },
    components: {
      breadcrumb: breadcrumb,
    },
    created: function () {
    },
    mounted: function () {
      this.initAreaSelect2();
      this.submitForm();
    },
    destroyed: function () {
    },
    methods: {
      submitForm: function () {
        let self = this;
        $.each($('.create-store-form'), function (i, obj) {
          $(obj).validate({
            rules: {
              name: {
                required: true
              },
              areaId: {
                required: true
              },
              address: {
                required: true
              },
              tel: {
                required: true
              }
            },
            submitHandler: function (form) {
              self.ajax({
                type: 'POST',
                url: api.invest.store.create.url,
                data: commonApp.tools.getFromData($(form)),
                success: function (res) {
                  layer.msg(res.message, {time: 1000}, function () {
                    if (res.code === 200) {
                      self.$router.push('/invest/store/list');
                    }
                  });
                }
              });
            }
          });
        })
      },
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
    },
    watch: {}
  }
</script>
