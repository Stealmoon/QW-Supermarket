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
            <div style="padding-left: 20px; ">
              <h3>分类管理</h3>
            </div>
          </div>

          <el-table :data="tableData" stripe="true">
            <el-table-column label="分类名称" width="180">
              <template slot-scope="scope">
                <i class="el-icon-time"></i>
                <span style="margin-left: 10px">{{ scope.row.date }}</span>
              </template>
            </el-table-column>
            <el-table-column label="管理">
              <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">
                  <i class="el-icon-edit-outline">编辑</i>
                </el-button>
              </template>
            </el-table-column>
          </el-table>
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
      tableData: [
        {
          date: "日用品"
        },
        {
          date: "舒肤佳"
        },

        {
          date: "-舒肤佳--"
        },
        {
          date: "舒肤佳b"
        }
        ,
        {
          date: "海飞丝"
        }
        ,
        {
          date: "食品"
        },
        {
          date: "优乐美"
        },
        {
          date: "烟酒"
        },
        {
          date: "龙凤呈祥"
        },
        {
          date: "茅台"
        }
      ]
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style>
</style>

