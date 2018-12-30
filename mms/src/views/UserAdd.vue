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
          <div class="text item">
            <el-form 
            :model="ruleForm2" 
            status-icon
            ref="ruleForm2" 
            label-width="auto" 
            class="demo-ruleForm"
            label-position="top"
            :rules="rules2"
            >
              <el-form-item label="用户名" prop="username">
                <el-input type="username" v-model="ruleForm2.username" autocomplete="off"></el-input>
              </el-form-item>
              <!-- 密码 -->
               <el-form-item label="密码" prop="pass">
                <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
              </el-form-item>

              <!-- 确认密码 -->

              <el-form-item label="确认密码" prop="passCheck">
                  <el-input type="password" v-model="ruleForm2.passCheck" autocomplete="off"></el-input>
              </el-form-item>

                <!--  用户组-->
              <el-form-item label="用户组" prop="usergroup">
                <el-select v-model="ruleForm2.usergroup" placeholder="请选择">
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                  <el-option label="普通管理员" value="普通管理员"></el-option>
              </el-select>
                </el-form-item>

              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
              </el-form-item>
            </el-form>
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
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.passCheck !== '') {
            this.$refs.ruleForm2.validateField('passCheck');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };

    return {
      ruleForm2: {
        pass: "",
        username: "",
        passCheck: "",
        usergroup: ""
      },
      rules2: {
        username: [
          //required: true 必填     trigger: 'blur' 失去焦点的事件触发     message: "出错信息"
          { required: true, trigger: "blur", message: "用户名必须填写" },
          //min: 6 最小长度   max: 18 最大长度
          {
            min: 6,
            max: 18,
            message: "用户名长度在 6 到 18 个字符",
            trigger: "blur"
          }
        ],
        pass: [
          {validator: validatePass, required: true, trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "密码长度在 6 到 12 个字符",
            trigger: "blur"
          }
        ],
        passCheck: [
          { validator: validatePass2,required: true, trigger: "blur" },
          {
            min: 6,
            max: 12,
            message: "确认密码长度在 6 到 12 个字符",
            trigger: "blur"
          },
          // //调用自定义的验证方法验证两次密码是否一致
          // { validator: validatePass2, trigger: "blur" }
        ],
        usergroup: [
          { required: true, trigger: "change", message: "请选择用户组" }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
          
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    
  },
  components: {
    Leftmenu,
    Righttop,
    Rightbottom
  },
};
</script>
<style>
</style>

