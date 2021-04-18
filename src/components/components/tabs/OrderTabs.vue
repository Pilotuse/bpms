<template>
  <div>
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>新建工单</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          class="el-icon-takeaway-box"
          @click="saveOrder"
        >
          暂存工单
        </el-button>
      </div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <!-- 提单时间 -->
        <el-form-item label="BPMSID" prop="bpmsid">
          <el-tag size="small" type="#e6f7ff">
            {{ ruleForm.bpmsid }}
          </el-tag>
        </el-form-item>

        <!-- 工单标题 -->
        <el-form-item label="工单标题" prop="title">
          <el-input
            v-model="ruleForm.title"
            placeholder="请输入工单标题"
          ></el-input>
        </el-form-item>

        <!-- ECID -->
        <el-form-item label="ECID" prop="customeID">
          <el-input
            v-model="ruleForm.customeID"
            placeholder="请输入ECID"
          ></el-input>
        </el-form-item>

        <!-- 产品单号 -->
        <el-form-item label="产品单号" prop="orderNum">
          <el-input
            v-model="ruleForm.orderNum"
            placeholder="请输入产品单号"
          ></el-input>
        </el-form-item>

        <!-- 业务线 -->
        <el-form-item label="业务线" prop="busiLine">
          <el-select v-model="ruleForm.busiLine">
            <el-option label="企业视频彩铃" value="企业视频彩铃"></el-option>
            <el-option label="企业和多号" value="企业和多号"></el-option>
            <el-option label="专网专线" value="专网专线"></el-option>
          </el-select>
        </el-form-item>

        <!-- 提单时间 -->
        <el-form-item label="提单时间" prop="date">
          <el-tag size="small" type="#e6f7ff">
            {{ ruleForm.date }}
          </el-tag>
        </el-form-item>

        <!-- 提单人 -->
        <el-form-item label="提单人">
          <el-tooltip
            class="item"
            effect="dark"
            :content="ruleForm.lading"
            placement="top"
          >
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </el-tooltip>
        </el-form-item>

        <!-- 处理人 -->
        <el-form-item label="处理人">
          <el-tooltip
            class="item"
            effect="dark"
            :content="ruleForm.handler"
            placement="top"
          >
            <el-avatar
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            ></el-avatar>
          </el-tooltip>
        </el-form-item>

        <!-- 优先级 -->
        <el-form-item label="优先级" prop="priority">
          <el-select v-model="ruleForm.priority">
            <el-option label="加急" value="加急"></el-option>
            <el-option label="高" value="高"></el-option>
            <el-option label="中" value="中"></el-option>
            <el-option label="低" value="低"></el-option>
          </el-select>
          <el-tooltip
            class="item"
            effect="dark"
            content="请合理评估优先级，避免后续提单被降权"
            placement="top"
          >
            <span class="iconfont icon-icon_yiwenkongxin toptips"></span>
          </el-tooltip>
        </el-form-item>

        <!-- 优先级 -->
        <el-form-item label="到期日期" required>
          <el-form-item prop="expireDate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="ruleForm.expireDate"
              style="width: 100%"
            ></el-date-picker>
          </el-form-item>
        </el-form-item>

        <!-- 结果通知 -->
        <el-form-item label="结果通知" prop="result">
          <el-checkbox-group v-model="ruleForm.type">
            <el-select v-model="ruleForm.result">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>

            <el-tooltip
              class="item"
              effect="dark"
              content="测试功能：动态将以消息的形式通知"
              placement="top"
            >
              <span class="iconfont icon-icon_yiwenkongxin toptips"></span>
            </el-tooltip>
          </el-checkbox-group>
        </el-form-item>

        <!-- HA预处理 -->
        <el-form-item label="HA预处理" prop="pretreatment">
          <el-checkbox-group v-model="ruleForm.type">
            <el-select v-model="ruleForm.pretreatment">
              <el-option label="是" value="是"></el-option>
              <el-option label="否" value="否"></el-option>
            </el-select>

            <el-tooltip
              class="item"
              effect="dark"
              content="测试功能：HA是指坚果智能预处理，如果存在相同的问题单，则由坚果智能直接处理"
              placement="top"
            >
              <span class="iconfont icon-icon_yiwenkongxin toptips"></span>
            </el-tooltip>
          </el-checkbox-group>
        </el-form-item>

        <!-- 资料上传 -->
        <el-form-item label="资料上传">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
          >
            <!-- :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList" -->
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">
              上传内容不能超过10M，最多可以上传3个文件，多文件建议压缩
            </div>
          </el-upload>
        </el-form-item>

        <!-- 工单描述 -->
        <el-form-item label="工单描述" prop="describer">
          <el-input
            type="textarea"
            show-word-limit
            maxlength="300"
            minlength="5"
            class="textarea"
            v-model="ruleForm.describer"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">
            立即创建
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  props: ["orderdatas", "updateorder"],
  data() {
    return {
      ruleForm: {}, // 数据不能动
      rules: {
        title: [
          { required: true, message: "请输入工单标题", trigger: "blur" },
          {
            min: 5,
            max: 100,
            message: "长度在 5 到 100 个字符",
            trigger: "blur",
          },
        ],
        customeID: [
          { required: true, message: "请输入客户编码", trigger: "blur" },
        ],
        orderNum: [
          { required: true, message: "请输入产品单号", trigger: "blur" },
        ],
        busiLine: [
          { required: true, message: "请选择业务线", trigger: "change" },
        ],
        priority: [
          { required: true, message: "请选择优先级", trigger: "change" },
        ],
        expireDate: [
          {
            type: "date",
            required: true,
            message: "请选择到期日期",
            trigger: "change",
          },
        ],
        result: [
          { required: true, message: "请选择是否通知", trigger: "change" },
        ],
        pretreatment: [
          {
            required: true,
            message: "请选择是否进行HA智能处理",
            trigger: "change",
          },
        ],
        describer: [
          { required: true, message: "请输入工单描述内容", trigger: "blur" },
          {
            min: 5,
            max: 300,
            message: "长度在 5 到 300 个字符",
            trigger: "blur",
          },
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
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
          console.log(this.ruleForm);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    // 调用接口存临时工单草稿箱
    saveOrder(){
      console.log(JSON.stringify(this.ruleForm));
    }
  },
  watch: {
    ruleForm: {
      deep: true,
      handler(newValue) {
        this.$emit("updateorder", newValue);
      },
    },
  },
  created() {
    let orderdatas = JSON.stringify(this.orderdatas);
    this.ruleForm = JSON.parse(orderdatas);
  },
};
</script>

<style>
.toptips {
  margin-left: 10px;
}
.textarea > textarea {
  resize: none;
  height: 100px;
}
</style>