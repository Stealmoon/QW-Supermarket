<template>
   <el-aside width="230px">
        <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      >


       <div id="headtxt">
         <div>
         华联超市管理系统
         </div>
        <p class="hi"><span >您好,</span> <span> admi </span></p>
        <p class="his"><span><router-link to="/">管理首页</router-link></span>|<span>退出系统</span></p>
       </div>
      <el-submenu index="1">
        
        <template slot="title">
         
        
          <span>分类管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/classify"><router-link to="/classify">分类管理</router-link></el-menu-item>
          <el-menu-item index="/commodityadd"><router-link to="/commodityadd">添加分类</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/manage"><router-link to="/manage">商品管理</router-link></el-menu-item>
          <el-menu-item index="/add"><router-link to="/add">添加商品</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      <el-submenu index="3">
        <template slot="title">
          <span>进货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-2">库存管理</el-menu-item>
          <el-menu-item index="/stock"><router-link to="/stock">添加库存</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <span>出货管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">销售列表</el-menu-item>
          <el-menu-item index="1-2">商品出库</el-menu-item>
          <el-menu-item index="1-2">商品退货</el-menu-item>
          
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="5">
        <template slot="title">
          <span>统计管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">销售系统</el-menu-item>
          <el-menu-item index="1-2">进货系统</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="6">
        <template slot="title">
          <span>账号管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/account"><router-link to="/account">账号管理</router-link></el-menu-item>
          <el-menu-item index="/alter"><router-link to="/alter">添加账号</router-link></el-menu-item>
          <el-menu-item index="/pwdedit"><router-link to="/pwdedit">密码修改</router-link></el-menu-item>
        </el-menu-item-group>
      </el-submenu>

            <el-submenu index="7">
        <template slot="title">
          <span>会员管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">账号管理</el-menu-item>
          <el-menu-item index="1-2">添加账号</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

       <el-submenu index="8">
        <template slot="title">
          <span>系统管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">系统信息</el-menu-item>
          <el-menu-item index="1-2">系统配置</el-menu-item>
          <el-menu-item index="1-2">权限管理</el-menu-item>
          <el-menu-item index="1-2">添加管理组</el-menu-item>
          
        </el-menu-item-group>
      </el-submenu>
     
     
    </el-menu>
          
      </el-aside>
    
</template>
<script>
export default {
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      ;
    },
    handleClose(key, keyPath) {
      ;
    }
  }
};
</script>
<style>
</style>


