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
              <h3>添加管理</h3>
            </div>
          </div>

          <div style="font-size:14px;margin-top: 20px;">所属分类：</div>
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            style="margin-top: 20px;"
          >
            <el-select v-model="formInline.region" placeholder="-------------选择分类----------">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item
              label="名称分类"
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <div style="font-size:14px;margin-top: 20px;">状态：</div>
          <div style="margin-top: 20px;">
          <el-radio v-model="radio" label="1">启用</el-radio>
          <el-radio v-model="radio" label="2">禁用</el-radio>
          </div>
            <el-button type="success" style="margin-top: 20px;">添加</el-button> 
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
       radio: '1'
    };
    
  }
};
</script>
<style>
</style>

