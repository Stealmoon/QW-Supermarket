<template>
  <div id="loginbox">
    <el-card class="box-card" id="login">
     <div slot="header" class="clearfix">
     <h2 style="tex">用户登录</h2>
    </div>

    <div class="text item">
    <el-form 
    :model="ruleForm2" 
    status-icon 
    :rules="rules2" 
    ref="ruleForm2" 
    label-width="100px" 
    class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="username">
      <el-input type="text" v-model="ruleForm2.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
     </el-form-item>
    
     <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm2')">登录</el-button>
    <el-button @click="resetForm('ruleForm2')">重置</el-button>
     </el-form-item>
   </el-form>
    </div>
    </el-card>
        
  </div>
</template>
<script>
// 暴露一个模块
export default {
  data() {
   
    return {
      ruleForm2: {
        pass: "",
        username: "",
       
      },
      rules2: {
          username:[
              //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息" 
            { required: true, trigger: 'blur', message: "用户名必须填写" },
            //min: 6 最小长度   max: 18 最大长度
            { min: 6, max: 18, message: '用户名长度在 6 到 18 个字符', trigger: 'blur' }
          ],
        pass: [{ required: true, trigger: "blur" ,message: "密码必须填写"},
          { min: 6, max: 18, message: '密码长度在 6 到 18 个字符', trigger: 'blur' }
        
        ],
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$router.push('/')
        } else {
          alert("表单验证失败");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>

<style>
#loginbox {
    background:rgba(209, 189, 236, 0.5)

}
#login {
 background: rgba(230, 99, 81, 0.5);
  width: 520px;
  height: 300px;
  position: absolute;
  left: 560px;
  top: 200px;
  bottom: 0;
  right: 0;
  margin: 0;
  border-radius: 50px;
  text-align: center
}
</style>

