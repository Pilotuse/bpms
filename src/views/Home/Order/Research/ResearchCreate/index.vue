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
              <span class="drawer-cursor drawer-color">{{
                ruleForm.belong
              }}</span>
            </el-tooltip>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="案例编码" class="drawer-color"
            >{{ ruleForm.caseID }}
          </el-form-item>
        </el-col>
      </el-row>

      <el-row :gutter="20">
        <el-col :span="10">
          <el-form-item label="创建日期" class="drawer-color">
            {{ ruleForm.createDate }}</el-form-item
          >
        </el-col>
        <el-col :span="10">
          <el-form-item label="创建方式" class="drawer-color">
            {{ ruleForm.trigger }}
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
          filterable
          default-first-option
          class="drawer-width"
          clearable
          placeholder="请选择业务线"
        >
          <el-option
            :label="item.prodname"
            :value="item.prodid"
            v-for="item in prodList"
            :key="item.prodid"
          ></el-option>
        </el-select>
        <Toptips
          content="如无业务线，请前往新增业务线信息，无权限请联系管理级新增"
          placement="top"
          icon="icon-jinggao"
          class="drawer-toltips"
        />
      </el-form-item>

      <el-form-item label="调研分类" prop="classify">
        <el-select
          v-model="ruleForm.classify"
          filterable
          allow-create
          placeholder="请选择调研分类"
          class="drawer-width"
        >
          <el-option
            v-for="item in classifyList"
            :key="item.submenu_id"
            :label="item.submenu_desc"
            :value="item.submenu_id"
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
          filterable
          @change="handleCitys"
        >
          <el-option
            :label="item.submenu_desc"
            :value="item.submenu_id"
            v-for="item in cityList"
            :key="item.submenu_id"
          >
            <span style="float: left">{{ item.submenu_desc }}</span>
            <span
              style="
                float: right;
                color: #aaa;
                font-size: 13px;
                margin-right: 20px;
              "
              >{{ item.submenu_id }}</span
            >
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="资源附件" prop="adjunct">
        <el-select
          v-model="ruleForm.adjunct"
          placeholder="请选择资源附件类型"
          class="drawer-width"
          multiple
        >
          <el-option
            :label="item.submenu_desc"
            :value="item.submenu_id"
            v-for="item in adjunctList"
            :key="item.submenu_id"
          >
            <span style="float: left">{{ item.submenu_desc }}</span>
            <span
              style="
                float: right;
                color: #aaa;
                font-size: 13px;
                margin-right: 20px;
              "
              >{{ item.submenu }}</span
            >
          </el-option>
        </el-select>
        <Toptips
          content="是否允许地市上传文件，单个上传数据不得大于5M，图片、文档提供在线预览"
          placement="top"
          icon="icon-gaojingkongxin"
          class="drawer-toltips"
        />
      </el-form-item>

      <el-form-item label="参与考核">
        <el-switch v-model="ruleForm.delivery"></el-switch>
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
              :picker-options="pickerOptions"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label="下发文件">
        <el-upload
          drag
          multiple
          :on-change="handleFiles"
          :auto-upload="false"
          action="https://jsonplaceholder.typicode.com/posts/"
          :data={}
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>

      <el-form-item label="调研描述" prop="desc">
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
import { mapActions } from "vuex";
import Toptips from "@/components/Toptips";
import dayjs from "dayjs";
export default {
  data() {
    return {
      cityList: [],
      adjunctList: [],
      classifyList: [],
      prodList: [],
      ruleForm: {
        belong: "",
        caseID: "",
        createDate: "",
        trigger: "手动触发",
        title: "",
        department: "",
        serviceLine: "",
        classify: "",
        region: "",
        adjunct: "",
        delivery: true,
        startStopTime: "",
        fileList: [],
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
          { required: true, message: "请选择调研分类", trigger: "change" },
        ],
        region: [{ required: true, message: "请选择地市", trigger: "change" }],
        startStopTime: [
          { required: true, message: "其选择起止时间", trigger: "change" },
        ],
        desc: [{ required: true, message: "请填写发布文案", trigger: "blur" }],
      },
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7;
        },
      },
    };
  },
  methods: {
    ...mapActions([
      "queryCitysOptions",
      "queryAttachOptions",
      "queryClassifyOptions",
      "queryProdInfos",
      "insertRearchCase",
    ]),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.insertRearchCase({ ...this.ruleForm, callback: (data) => {
            console.log(data);
          } });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleCitys(value) {
      if (value.length == 1) {
        this.ruleForm.region = value;
        return;
      }
      if (value.some((el) => el === "000") && value[0] !== "000") {
        this.ruleForm.region = ["000"];
        return;
      }
      this.ruleForm.region = value.filter((el) => el !== "000");
    },
    handleFiles(file, fileList) {
      this.ruleForm.fileList = fileList;
    },
  },
  components: {
    Toptips,
  },
  mounted() {
    const that = this;
    // 请求下拉各项选项的数据
    this.queryCitysOptions({
      callback: ({
        content: {
          result: { msg },
        },
      }) => {
        that.cityList = msg;
      },
    });

    this.queryAttachOptions({
      callback: ({
        content: {
          result: { msg },
        },
      }) => {
        console.log(msg);
        that.adjunctList = msg;
      },
    });

    this.queryClassifyOptions({
      callback: ({
        content: {
          result: { msg },
        },
      }) => {
        console.log(msg);
        that.classifyList = msg;
      },
    });

    this.queryProdInfos({
      callback: ({
        content: {
          result: { msg },
        },
      }) => {
        console.log(msg);
        that.prodList = msg;
      },
    });
  },
  created() {
    try {
      this.ruleForm.caseID = `${Date.now()}001`;
      this.ruleForm.createDate = `${dayjs().format("YYYY-MM-DD HH:mm:ss")}`;
      this.ruleForm.belong = JSON.parse(localStorage.getItem("users")).cnname;
    } catch (error) {
      this.$notify.error({
        title: "错误",
        message: error,
      });
    }
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

.drawer-container .el-upload-dragger {
  width: 400px;
}

.drawer-container .el-upload-list__item.is-ready {
  width: 400px;
}
</style>