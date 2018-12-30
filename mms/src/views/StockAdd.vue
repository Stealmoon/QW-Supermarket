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
              <h3>商品入库</h3>
            </div>
          </div>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item
              label="商品条形码"
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item
              label="数量"
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
            <div>
                <h5>记重商品单位为千克</h5>
              </div>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item
              label="进价"
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

           <el-button type="success">入库</el-button>
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
    return {};
  }
};
</script>
<style>
</style>

