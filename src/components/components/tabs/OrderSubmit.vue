<template>
  <div>
    <el-row>
      <el-col :span="6">
        <el-input
          style="margin-top: 10px"
          placeholder="工单内容查询"
          prefix-icon="el-icon-search"
          v-model="input2"
        >
        </el-input>
      </el-col>
    </el-row>

    <el-table :data="tableData" style="width: 100%; margin-top: 20px">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="BPMSID">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="工单标题">
              <span>{{ props.row.shop }}</span>
            </el-form-item>
            <el-form-item label="ECID">
              <span>{{ props.row.id }}</span>
            </el-form-item>
            <el-form-item label="产品单号">
              <span>{{ props.row.shopId }}</span>
            </el-form-item>
            <el-form-item label="业务线">
              <span>{{ props.row.category }}</span>
            </el-form-item>
            <el-form-item label="提单时间">
              <span>{{ props.row.address }}</span>
            </el-form-item>
            <el-form-item label="提单人">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="处理人">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="优先级">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="到期日期">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="结果通知">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="HA预处理">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="下载/预览">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="工单描述">
              <span>{{ props.row.desc }}</span>
            </el-form-item>
            <el-form-item label="流程图">
              <el-button
                type="primary"
                size="small"
                plain
                @click="
                  {
                    drawer = true;
                  }
                "
                >流程图</el-button
              >
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="BPMSID" prop="id"> </el-table-column>
      <el-table-column label="工单标题" prop="name"> </el-table-column>
      <el-table-column label="ECID" prop="desc"> </el-table-column>
      <el-table-column label="产品单号" prop="desc"> </el-table-column>
      <el-table-column label="处理工单">
        <el-tooltip
          class="item"
          effect="dark"
          content="工单处理"
          placement="top"
        >
          <el-button
            type="primary"
            size="mini"
            icon="iconfont icon-bianjisekuai"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="工单分享"
          placement="top"
        >
          <el-button
            type="success"
            size="mini"
            icon="iconfont icon-fenxiangfangshi"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="服务沟通"
          placement="top"
        >
          <el-button
            type="info"
            size="mini"
            icon="iconfont icon-icon_zhanghao"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="工单回退"
          placement="top"
        >
          <el-button
            type="warning"
            size="mini"
            icon="iconfont icon-chehuisekuai"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="工单删除"
          placement="top"
        >
          <el-button
            type="danger"
            size="mini"
            icon="iconfont icon-cuocha_kuai"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="工单下载"
          placement="top"
        >
          <el-button
            size="mini"
            icon="iconfont icon-xiazai6"
            circle
          ></el-button>
        </el-tooltip>

        <el-tooltip
          class="item"
          effect="dark"
          content="催单"
          placement="top"
        >
          <el-button
            size="mini"
            type="warning"
            icon="iconfont icon-rentijiance"
            circle
          ></el-button>
        </el-tooltip>

      </el-table-column>
    </el-table>

    <el-row v-if="1">
      <el-col :span="24" style="text-align: center; margin-top: 30px">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          v-if="pagenation"
        ></el-pagination>
      </el-col>
    </el-row>

    <Drawer :drawer="drawer" />
  </div>
</template>



<script>
import Drawer from "../Drawer/Drawer";
export default {
  props: ["pagenation"],
  data() {
    return {
      drawer: false,
      tableData: [
        {
          id: "12987122",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
        {
          id: "12987123",
          name: "好滋好味鸡蛋仔",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333",
        },
      ],
      activities: [
        {
          content: "支持使用图标",
          timestamp: "2018-04-12 20:46",
          size: "large",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "支持自定义颜色",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "支持自定义尺寸",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "默认样式的节点",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
  components: {
    Drawer,
  },
};
</script>


<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>