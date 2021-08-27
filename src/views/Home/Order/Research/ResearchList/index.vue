  <template>
  <div>
    <el-empty
      description="暂无调研数据"
      v-if="tableData.length === 0"
    ></el-empty>
    <el-table :data="tableData" style="width: 100%" v-if="tableData.length > 0">
      <el-table-column prop="case_id" label="调研ID" width="180">
      </el-table-column>

      <el-table-column label="调研标题">
        <template slot-scope="scope">
          <el-tag type="success" size="mini" title="我创建的调研案例">
            <i class="iconfont icon-zhinengxiaofangshuan"></i>
          </el-tag>
          <span style="margin-left: 10px">{{ scope.row.research_title }}</span>
        </template>
      </el-table-column>

      <el-table-column label="涉及地市">
        <template slot-scope="scope">
          {{ scope.row.region | formatCtiy }}
        </template>
      </el-table-column>

      <el-table-column label="生效时间">
        <template slot-scope="scope">
          <Runcase :status="scope.row.status" />
          <span style="margin-left: 10px">{{
            scope.row.effect_date | filterDt
          }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="describer" label="调研备注"> </el-table-column>

      <el-table-column prop="address" label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >查看</el-button
          >
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
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import dayjs from "dayjs";
import { citys } from "@/interface";
import { mapActions } from "vuex";
import Runcase from "@/components/Runcase";
export default {
  data() {
    return {
      tableData: [],
    };
  },
  methods: {
    ...mapActions(["queryRearchCase"]),
  },
  components: {
    Runcase,
  },
  filters: {
    filterDt(value) {
      return dayjs(value).format("YYYY-MM-DD HH:mm:ss");
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
      return value
        .split(".")
        .map((el) => citys.filter((city) => city.code == el)[0].name)
        .join("，");
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
};
</script>
