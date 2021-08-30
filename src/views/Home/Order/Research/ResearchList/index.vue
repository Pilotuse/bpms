  <template>
  <div class="research-list">
    <el-empty
      description="暂无调研数据"
      v-if="tableData.length === 0"
    ></el-empty>
    <el-table :data="tableData" style="width: 100%" v-if="tableData.length > 0">
      <el-table-column label="调研ID" prop="case_id">
      </el-table-column>

      <el-table-column label="调研标题">
        <template slot-scope="scope">
          <i class="el-icon-connection" style="color: #67c23a"></i>
          <span style="margin-left: 10px">{{ scope.row.research_title }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="belong" label="发布人">
      </el-table-column>

      <el-table-column label="生效时间">
        <template slot-scope="scope">
          <Runcase :status="scope.row.status" />
          <span style="margin-left: 10px">{{
            scope.row.effect_date | filterDt
          }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleWatch(scope.row)">
            查看
          </el-button>
          <span style="margin-left: 10px" v-if="isRole">
            <el-button
              v-if="scope.row.status !== 2"
              size="mini"
              :disabled="scope.row.status | orderChangeStop"
              @click="handleEdit(scope.$index, scope.row)"
              >暂停</el-button
            >
            <el-button
              size="mini"
              v-if="scope.row.status === 2"
              :disabled="scope.row.status | orderChangeStop"
              @click="handleEdit(scope.$index, scope.row)"
              >恢复</el-button
            >
            <el-button
              size="mini"
              type="danger"
              :disabled="scope.row.status | orderDelete"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { citys } from "@/interface";
import { mapActions, mapMutations } from "vuex";
import Runcase from "@/components/Runcase";
export default {
  data() {
    return {
      tableData: [],
      isRole: false,
    };
  },
  methods: {
    ...mapActions(["queryRearchCase"]),
    ...mapMutations(["changeScreenfull"]),
    handleWatch(scope) {
      this.changeScreenfull({ changeStatus: true, caseid: scope.case_id });
    },
  },
  components: {
    Runcase,
  },
  filters: {
    filterDt(value) {
      return dayjs(value).format("MM-DD HH:mm:ss");
    },
    orderOptions(value) {
      return value;
    },
    orderChangeStop(value) {
      return [0, 3, 4, 5].some((el) => el == value);
    },
    orderDelete(value) {
      return [4].some((el) => el == value);
    },
    formatCtiy(value) {
      return value != "000"
        ? value
            .split(".")
            .map((el) => citys.filter((city) => city.code == el)[0].name)
            .join("，")
        : citys.map((el) => el.name).join("，");
    },
  },
  mounted() {
    let that = this;
    this.queryRearchCase({
      callback: (data) => {
        that.tableData = data.content.result;
      },
    });
  },
  created() {
    try {
      let roletype = JSON.parse(localStorage.getItem("users")).author;
      this.isRole = ["manager", "admin"].some((el) => el == roletype);
    } catch (error) {
      console.log(error);
    }
  },
};
</script>
