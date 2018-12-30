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
            <div>添加管理员账号</div>
          </div>
          <div>
            <el-table
              :data="tableData"
              >
              <el-table-column
                label="用户名称"
                >
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column
                label="用户组"
               >
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>姓名: {{ scope.row.name }}</p>
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      <el-tag size="medium">{{ scope.row.name }}</el-tag>
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="管理">
                <template slot-scope="scope">
                  <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)"><i class="el-icon-edit"></i>编辑</el-button>
                  <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)"><i class="el-icon-delete"></i>删除</el-button>
                </template>
              </el-table-column>
            </el-table>


          </div>
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
      tableData: [{
          date: 'admin',
          name: '超级管理员',
          address: '上海市普陀区金沙江路 1518 弄'
        }, ]
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

