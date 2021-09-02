<template>
  <div>
    <h3>成员状态</h3>
    <div class="member-analyze">
      <el-card class="box-card" shadow="hover">
        <div class="box-card-container">
          <div>角色分析</div>
          <div>管理员</div>
          <div>地市管理员</div>
          <div>地市用户</div>
          <div>开发</div>
          <div>测试</div>
          <i class="iconfont icon-icon_zhanghao"></i>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div class="box-card-container">
          <div>状态分析</div>
          <div>正常</div>
          <div>待激活</div>
          <div>暂停</div>
          <div>注销</div>
          <i class="iconfont icon-get"></i>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div class="box-card-container">
          <div>地市分析</div>
          <div>武汉</div>
          <div>江汉</div>
          <div>宜昌</div>
          <div>襄阳</div>
          <div>其他</div>
          <i class="iconfont icon-menci"></i>
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div class="box-card-container">
          <div>用户业务线分析</div>
          <div>企业视频彩铃</div>
          <div>云Mas</div>
          <div>转网专线</div>
          <div>襄阳</div>
          <div>其他</div>
          <i class="iconfont icon-lianjieliu"></i>
        </div>
      </el-card>
    </div>
    <h3>成员详情</h3>

    <div class="member-list">
      <div class="member-search">
        <el-card class="member-box-card" shadow="never">
          <span class="member-search-item">
            用户属性
            <el-autocomplete
              class="inline-input"
              v-model="state2"
              :fetch-suggestions="querySearch"
              placeholder="输入用户名或者用户id"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </span>

          <span class="member-search-item">
            角色：
            <el-select v-model="value" placeholder="请选择角色">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </span>

          <span class="member-search-item">
            状态：
            <el-select v-model="value" placeholder="请选择用户状态">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </span>

          <span class="member-search-item">
            地市：
            <el-select v-model="value" placeholder="请选择所属地市">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </span>

          <span class="member-search-item">
            所属组：
            <el-select v-model="value" placeholder="请选择所属组">
              <el-option
                v-for="item in cities"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </span>

          <span class="member-search-item">
            <el-button type="primary" plain>搜索</el-button>
          </span>
        </el-card>
      </div>

      <div class="member-container">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed prop="date" label="用户名"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="province" label="昵称"> </el-table-column>
          <el-table-column prop="city" label="电话"> </el-table-column>
          <el-table-column prop="address" label="地市"> </el-table-column>
          <el-table-column prop="zip" label="所属组"> </el-table-column>
          <el-table-column prop="address" label="角色"> </el-table-column>
          <el-table-column prop="address" label="状态"> </el-table-column>
          <el-table-column prop="address" label="注册时间"> </el-table-column>
          <el-table-column fixed="right" label="操作">
            <template slot-scope="scope">
              <el-button
                @click="handleClick(scope.row)"
                type="text"
                size="small"
                >查看</el-button
              >
              <el-button type="text" size="small">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<style>
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

h3 > span {
  margin-left: 10px;
  font-size: 14px;
  color: #1890ff;
  cursor: pointer;
  user-select: none;
  float: right;
}

.member-analyze {
  display: flex;
  margin-bottom: 20px;
}

.member-analyze > div {
  flex: 1;
  margin-right: 10px;
}

.member-analyze > div:last-child {
  margin-right: 0px;
}

.member-search {
  margin-bottom: 20px;
  overflow-x: scroll;
}

.member-box-card {
  width: 1500px;
}

.member-search > span {
  margin-right: 30px;
}

.member-search .el-button--primary {
  width: 100px;
}

.member-search-item {
  margin-right: 20px;
}

.member-list .el-card__body {
  width: 1510px;
  overflow: hidden;
}

.member-analyze .el-card__body {
  height: 100%;
}

.box-card-container {
  position: relative;
  height: 100%;
}

.box-card-container > i {
  position: absolute;
  bottom: -50px;
  right: -20px;
  font-size: 120px;
  font-weight: 700;
  color: #f9f9f9;
  opacity: 0.5;
  text-shadow: 0 2px 1px #eee;
}
</style>