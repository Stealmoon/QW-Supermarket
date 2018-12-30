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

