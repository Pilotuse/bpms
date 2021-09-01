<template>
  <div>
    <h3>成员状态</h3>
    <div class="member-analyze">
      <el-card class="box-card" shadow="hover">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
        </div>
      </el-card>
      <el-card class="box-card" shadow="hover">
        <div v-for="o in 4" :key="o" class="text item">
          {{ "列表内容 " + o }}
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
              placeholder="请输入用户名或者用户id"
              :trigger-on-focus="false"
              @select="handleSelect"
            ></el-autocomplete>
          </span>

          <span class="member-search-item">
            角色：
            <el-select v-model="value" placeholder="请选择">
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
            <el-select v-model="value" placeholder="请选择">
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
            <el-select v-model="value" placeholder="请选择">
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
            <el-select v-model="value" placeholder="请选择">
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
          <el-table-column fixed prop="date" label="日期"> </el-table-column>
          <el-table-column prop="name" label="姓名"> </el-table-column>
          <el-table-column prop="province" label="省份"> </el-table-column>
          <el-table-column prop="city" label="市区"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
          <el-table-column prop="zip" label="邮编"> </el-table-column>
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
</style>