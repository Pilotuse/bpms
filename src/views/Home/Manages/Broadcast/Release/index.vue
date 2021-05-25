<template>
  <div>
    <el-row>
      <el-col :span="24" class="notice-setting">
        <h3>发布预览</h3>
      </el-col>
    </el-row>
    <el-card class="box-card" shadow="never">
      <Notice :text="notice" :title="title" :icon="icon" mode="" />
    </el-card>

    <el-row>
      <el-col :span="24" class="notice-setting">
        <h3>信息填报</h3>
      </el-col>
    </el-row>
    <div>
      <el-card class="box-card" shadow="never">
        <el-steps :active="0" finish-status="success" simple>
          <el-step title="信息填写" icon="el-icon-loading"></el-step>
          <el-step title="广播选项"></el-step>
          <el-step title="校验(自动)"></el-step>
          <el-step title="发布审批"></el-step>
          <el-step title="确认发布"></el-step>
          <el-step title="埋点上报"></el-step>
        </el-steps>
      </el-card>
      <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item name="1">
          <template slot="title" class="collapse">
            信息填写<i class="header-icon el-icon-check"></i>
          </template>

          <el-row class="Information-filling">
            <el-col :span="2">广播令牌</el-col>
            <el-col :span="22"> 202105222051001</el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">签约发布人</el-col>
            <el-col :span="22"> 范鸿宇</el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">创建时间</el-col>
            <el-col :span="22"> 2021年5月22日21:47:15</el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">广播内容</el-col>
            <el-col :span="22">
              <el-input
                type="textarea"
                placeholder="请输入内容"
                v-model="textarea"
                maxlength="30"
                show-word-limit
              >
              </el-input>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">广播类型</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">起止日期</el-col>
            <el-col :span="22">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
              >
              </el-date-picker>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">是否支持关闭</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">优先推送</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">广播ICON</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-collapse-item>

        <el-collapse-item name="2">
          <template slot="title" class="collapse">
            广播选项<i class="header-icon el-icon-loading"></i>
          </template>

          <el-row class="Information-filling">
            <el-col :span="2">广播人群</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <span class="release-add-list">
                <Toptips
                  content="新增广播人群"
                  icon="el-icon-plus"
                  placement="top"
                />
              </span>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">组合推送方式</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>

              <span class="release-add-list">
                <Toptips
                  content="新增推送组合"
                  icon="el-icon-plus"
                  placement="top"
                />
              </span>
            </el-col>
          </el-row>

          <el-row class="Information-filling">
            <el-col :span="2">审批完成后自动发布</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>
          
        </el-collapse-item>
        <el-collapse-item name="3">
          <template slot="title" class="collapse">
            发布审批<i class="header-icon el-icon-loading"></i>
          </template>

          <el-row class="Information-filling">
            <el-col :span="2">审批领导</el-col>
            <el-col :span="22">
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </el-col>
          </el-row>

          <el-button type="primary">提交审批</el-button>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template slot="title" class="collapse">
            确认发布<i class="header-icon el-icon-loading"></i>
          </template>
          <el-button type="primary">确认发布</el-button>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
import Notice from "@/components/Notice";
import Toptips from "@/components/Toptips";
export default {
  data() {
    return {
      notice: "群体广播数据设置中...",
      title: "设置中",
      icon: "el-icon-loading",
    };
  },
  components: {
    Notice,
    Toptips,
  },
};
</script>

<style scoped>
h3 {
  position: relative;
  padding-left: 20px;
  font-size: 22px;
}

h3::after {
  content: "☇";
  position: absolute;
  left: 0;
  top: 0;
  width: 2px;
  height: 100%;
  color: #1890ff;
  font-size: 20px;
}

.box-card {
  margin-bottom: 20px;
}
.header-icon {
  margin-left: 20px;
  color: #67c23a;
  font-size: 16px;
}

.Information-filling {
  margin-bottom: 20px;
}

.release-add-list {
  box-sizing: border-box;
  margin-left: 20px;
  display: inline-block;
  border: 1px solid #d9d9d9;
  color: #d9d9d9;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  line-height: 18px;
  text-align: center;
  cursor: pointer;
}
</style>