<template>
  <div>
    <div class="api-headers">
      <div class="api-brand">柠檬数据服务 | Lemon API</div>
      <div class="api-num">
        当前提供 <span>20</span> 在线接口调用， <span>12</span> 个数据Mock生成
      </div>
      <div class="api-descr">
        柠檬数服将进行最小化迁移至柠檬数服，此后将内嵌柠檬数服平台的页面进行服务，
        如涉及权限、接口接入等，请前往柠檬数服进行设置。（管理员@易儒/@筠笛）
      </div>
      <div class="api-backup">
        <span>柠檬数说 <i class="iconfont icon-guanbi1"></i> 坚果</span>
      </div>
    </div>
    <el-row>
      <el-col :span="6">
        <el-input
          placeholder="请输入应用名称"
          suffix-icon="el-icon-search"
          v-model="input1"
        >
        </el-input>
      </el-col>
      <el-col
        :span="2"
        offset="16"
        style="text-align: right; line-height: 40px; color: #1890ff"
      >
        创建应用列表
      </el-col>
    </el-row>

    <el-row style="margin-top: 20px">
      <el-col :span="16">
        <el-col :span="24">
          应用列表
          <Toptips
            content="无权限？点击前往柠檬数说平台申请"
            placement="top-start"
          />
        </el-col>

        <List />
      </el-col>
      <el-col :span="7" offset="1">
        <el-col :span="24"> 我的收藏 </el-col>
        <el-col :span="24"> 
          <Collection/>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>


<script>
import Toptips from "./Toptips";
import List from "./List";
import Collection from "./Collection";
export default {
  props:["changepage"],
  components: {
    Toptips,
    List,
    Collection,
  },
};
</script>



<style>
.api-headers {
  margin-top: 10px;
  margin-bottom: 20px;
  position: relative;
  background: url("../../../../assets/api-back1.png");
  background-size: cover;
  width: 100%;
  height: 200px;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
  border-radius: 6px;
  overflow: hidden;
}

.api-headers .api-brand {
  position: absolute;
  top: 16%;
  left: 80px;
  color: #fff;
  font-size: 36px;
  text-shadow: 1px 1px 0 #111;
}

.api-num {
  position: absolute;
  top: 46%;
  left: 80px;
  color: #fff;
}

.api-num > span {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  text-shadow: 1px 1px 0 #000;
}

.api-descr {
  position: absolute;
  color: #f9f9f9;
  bottom: 20px;
  left: 80px;
  width: 600px;
}

.api-backup {
  position: absolute;
  bottom: 4px;
  right: 8px;
  color: #f9f9f9;
}
</style>