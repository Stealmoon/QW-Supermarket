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
              <h3>添加商品</h3>
            </div>
          </div>
          <div style="font-size:14px;margin-top: 20px;">所属分类：</div>
          <el-select
            v-model="formInline.region"
            style="margin-top: 20px;"
            placeholder="-------------选择分类----------"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
          <el-form label-width="auto" class="demo-ruleForm" :inline="true">
            <el-form-item
              label="商品条形码："
              prop="age"
              :rules="[
                  { required: true}
                ]"
            ></el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm" :inline="true">
            <el-form-item
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary">生成条形码</el-button>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item
              label="商品名称"
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
              label="商品售价"
              prop="age"
              :rules="[
                  { required: true}
                ]"
            >
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item label="市场价" prop="age">
              <el-input type="age" autocomplete="off"></el-input>
              <div>
                <h4>默认市场价为售价的1.2倍</h4>
              </div>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item label="商品进价" prop="age">
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item label="入库数量" prop="age">
              <el-input type="age" autocomplete="off"></el-input>
              <h4>记重商品单位为千克</h4>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item label="商品重量" prop="age">
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <el-form label-width="auto" class="demo-ruleForm">
            <el-form-item label="商品单位" prop="age">
              <el-input type="age" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>

          <div style="font-size:14px;margin-top: 20px;">
            <h4>会员优惠：</h4>
          </div>
          <div style="margin-top: 20px;">
            <el-radio v-model="radio" label="1">享受</el-radio>
            <el-radio v-model="radio" label="2">不享受</el-radio>
          </div>

          <div style="font-size:14px;margin-top: 20px;">
            <h4>是否促销</h4>
          </div>
          <div style="margin-top: 20px;">
            <el-radio v-model="radio" label="1">启用</el-radio>
            <el-radio v-model="radio" label="2">禁用</el-radio>
          </div>

          <div style="font-size:14px;margin-top: 20px;">
            <h4>商品简介：</h4>
          </div>
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
           <p style="font-size:12px">不超过200个汉字</p>
            <el-button type="success">添加</el-button>



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
      radio: "1",
      ruleForm:{
         desc: ''
      }

    };
  }
};
</script>
<style>
</style>

