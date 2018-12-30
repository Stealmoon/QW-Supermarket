<template>
  <el-container>
    <!--左侧菜单 -->
    <Leftmenu></Leftmenu>

    <!-- 中间头部 -->
    <el-container id="mainContent">
      <Righttop></Righttop>

      <el-main>
        <el-card class="box-card">
          <div slot="header" class="clearfix text">
            <div>商品管理</div>
          </div>

          <div>
            <el-form :inline="true" :model="formInline" class="demo-form-inline">
              <el-select v-model="formInline.region" placeholder="-------------选择分类----------">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>

              <el-form-item label="关键字：">
                <el-input v-model="formInline.user" placeholder></el-input>
              </el-form-item>
              <el-form-item label="（商品名称，条形码）"></el-form-item>

              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
              </el-form-item>
            </el-form>
          </div>
          <div class="subfield"></div>

          <div>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column label="商品条形码" width="100px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.shape }}</span>
                </template>
              </el-table-column>

              <el-table-column label="商品名称">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.name }}</span>
                </template>
              </el-table-column>

              <el-table-column label="所属分类" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.classify }}</span>
                </template>
              </el-table-column>

              <el-table-column label="售价（元）" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.price }}</span>
                </template>
              </el-table-column>

              <el-table-column label="促销价" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.promotion }}</span>
                </template>
              </el-table-column>

              <el-table-column label="市场价" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.market }}</span>
                </template>
              </el-table-column>

              <el-table-column label="库存" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.repertory }}</span>
                </template>
              </el-table-column>

              <el-table-column label="库存总额" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.total }}</span>
                </template>
              </el-table-column>

              <el-table-column label="销售总额" width="90px">
                <template slot-scope="scope">
                  <span style="margin-left: 10px">{{ scope.row.sellTotal }}</span>
                </template>
              </el-table-column>

              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                    <i class="el-icon-edit">修改</i>
                  </el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"
                  >
                    <i class="el-icon-delete">删除</i>
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
          <el-pagination :page-size="10" :pager-count="3" prev-text="上一页"  next-text="下一页"  layout="prev, pager, next" :total="100"></el-pagination>
        </el-card>

        <!-- 底部 -->
      </el-main>
      <Rightbottom></Rightbottom>
    </el-container>
  </el-container>
</template>


<script>
import Leftmenu from "../components/leftMenu";
import Righttop from "../components/rightTop";
import Rightbottom from "../components/rightBottom";
export default {
  components: {
    Leftmenu,
    Righttop,
    Rightbottom
  },
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          shape: "69485943",
          name: "我的优乐美",
          classify: "优乐美",
          price: "24",
          promotion: "12",
          market: "60",
          repertory: "1",
          total: "1520",
          sellTotal: "1000"
        },
        {
          shape: "624893474",
          name: "海飞丝去屑洗发水",
          classify: "洗发水",
          price: "24",
          promotion: "12",
          market: "60",
          repertory: "1",
          total: "1520",
          sellTotal: "1000"
        },
        {
          shape: "684984374",
          name: "茅台酒",
          classify: "茅台",
          price: "24",
          promotion: "12",
          market: "60",
          repertory: "1",
          total: "1520",
          sellTotal: "1000"
        }
      ]
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>
<style>
</style>

