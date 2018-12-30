<template>      
    <el-container id="home">
      <!--左侧菜单 -->
      <Leftmenu></Leftmenu>

      <!-- 中间头部 -->
      <el-container id="mainContent"> 
          <Righttop></Righttop>
        
      
        <el-main>
          <el-card class="box-card">
          <div slot="header" class="clearfix text">
            <h3>系统信息</h3>
          </div>
          <div  class="text item">
            <el-alert
              title="商品总数:5。 已经销售的总金额：890.00。 库存商品总价：1235.82"
              type="info"
              show-icon>
            </el-alert>
            <el-alert
              title="导入数据"
              type="info"
              show-icon
              class="in"
              >
            </el-alert>
            <el-row :gutter="40">
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h3>销售排行</h3>
                      </div>
                      <div class="text item">
                        <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                          prop="date"
                          label="商品名称"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="销量"
                          >
                        </el-table-column>
                      </el-table>
                      </div>
                    </el-card>
                </div>
                </el-col>
              <el-col :span="12">
                <div class="grid-content bg-purple">
                  <el-card class="box-card">
                      <div slot="header" class="clearfix">
                        <h3>缺货的商品</h3>
                      </div>
                      <div class="text item">
                        <el-table
                        :data="tableData"
                        stripe
                        style="width: 100%">
                        <el-table-column
                          prop="date"
                          label="商品名称"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="name"
                          label="库存"
                          >
                        </el-table-column>
                        <el-table-column
                          prop="address"
                          label="操作">
                        </el-table-column>
                      </el-table>
                      </div>
                    </el-card>
                </div>
                </el-col>
              
            </el-row>
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
      tableData: [
        {
          date: "海飞丝去屑洗发水",
          name: "8"
        },
        {
          date: "茅台酒",
          name: "6"
        },
        {
          date: "龙凤呈祥",
          name: "5"
        },
        {
          date: "龙凤呈祥2",
          name: "5"
        }
      ]
    };
  }
};
</script>
<style>
</style>

