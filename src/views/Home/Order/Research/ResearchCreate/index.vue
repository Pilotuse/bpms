<template>
  <div class="drawer-container">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="创建人">
            <el-tooltip
              class="item"
              effect="dark"
              content="点击前往查看联系人信息"
              placement="top"
            >
              <span class="drawer-cursor drawer-color">jie.wang</span>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="案例编码" class="drawer-color"
            >{{ Date.now() }}001
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="创建日期" class="drawer-color">{{
            Date.now()
          }}</el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="创建方式" class="drawer-color">
            定时触发
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item label="调研名称" prop="title">
        <el-input
          v-model="ruleForm.title"
          class="drawer-width"
          placeholder="请输入调研标题"
        ></el-input>
      </el-form-item>
      <el-form-item label="责任部门" prop="department">
        <el-input
          v-model="ruleForm.department"
          placeholder="请输入责任部门"
          class="drawer-width"
        ></el-input>
      </el-form-item>
      <el-form-item label="业务线" prop="serviceLine">
        <el-select
          v-model="ruleForm.serviceLine"
          multiple
          filterable
          allow-create
          default-first-option
           class="drawer-width"
          placeholder="请选择业务线"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="调研分类" prop="classify">
        <el-select
          v-model="ruleForm.classify"
          multiple
          filterable
          allow-create
          placeholder="请选择调研分类"
          class="drawer-width"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <Toptips
          content="调研分类支持在线创建"
          placement="top"
          class="drawer-toltips"
        />
      </el-form-item>

      <el-form-item label="涉及地市" prop="region">
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择调研地市"
          class="drawer-width"
          multiple
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="采集内容" prop="content">
        <el-select
          v-model="ruleForm.content"
          placeholder="请选择采集内容"
          class="drawer-width"
          multiple
          filterable
          allow-create
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
        <Toptips
          content="采集内容支持在线创建"
          placement="top"
          class="drawer-toltips"
        />
      </el-form-item>

      <el-form-item label="资源附件" prop="adjunct">
        <el-select
          v-model="ruleForm.adjunct"
          placeholder="请选择资源附件类型"
          class="drawer-width"
          multiple
        >
          <el-option label="图片" value="picture"></el-option>
          <el-option label="文件" value="file"></el-option>
        </el-select>
        <Toptips
          content="图片支持JPG、PNG等格式，文件建议使用ZIP压缩包"
          placement="top"
          class="drawer-toltips"
        />
      </el-form-item>

      <el-form-item label="起止时间" required>
        <el-col class="drawer-width">
          <el-form-item prop="startStopTime">
            <el-date-picker
              v-model="ruleForm.startStopTime"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="信息备注" prop="desc">
        <el-input
          type="textarea"
          v-model="ruleForm.desc"
          class="drawer-width"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">
          发布任务
        </el-button>
        <el-button @click="resetForm('ruleForm')">重置信息</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Toptips from "@/components/Toptips";
export default {
  data() {
    return {
      ruleForm: {
        title: "",
        department: "",
        serviceLine: "阿斯顿撒",
        classify: "",
        region: "",
        content: "",
        adjunct: "",
        startStopTime: "",
        type: [],
        resource: "",
        desc: "",
      },
      rules: {
        title: [
          { required: true, message: "请输入调研案例标题", trigger: "blur" },
          {
            min: 5,
            max: 30,
            message: "长度在 5 到 30 个字符",
            trigger: "blur",
          },
        ],
        department: [
          {
            required: true,
            message: "请选择责任部门，如无请前往添加",
            trigger: "change",
          },
        ],
        serviceLine: [
          {
            required: true,
            message: "请选择业务线，支持选择多条",
            trigger: "change",
          },
        ],
        classify: [
          {
            required: true,
            message: "请选择调研分类",
            trigger: "change",
          },
        ],
        region: [
          {
            required: true,
            message: "请选择地市",
            trigger: "change",
          },
        ],
        content: [
          {
            required: true,
            message: "请选择采集内容",
            trigger: "change",
          },
        ],
        startStopTime: [
          {
            required: true,
            message: "请选择地市",
            trigger: "change",
          },
        ],
        desc: [{ required: true, message: "请填写活动形式", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  components: {
    Toptips,
  },
};
</script>


<style>
.el-drawer__header {
  margin-bottom: 0;
  padding: 20px;
}
.el-drawer__body {
  overflow: auto;
}
.drawer-container {
  padding: 0 20px;
}
.drawer-width,
.drawer-width .el-input__inner {
  width: 400px !important;
}
.drawer-cursor {
  cursor: pointer;
}

.drawer-color {
  color: #3498db;
}

.drawer-toltips {
  margin-left: 20px;
}
</style>