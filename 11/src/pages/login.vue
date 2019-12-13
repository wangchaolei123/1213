<template>
  <div class="war">
    <div class="big">
      <div class="box">
        <p>登录</p>
        <!--<select name id v-model="user.type">-->
        <!--<option value>&#45;&#45;请选择&#45;&#45;</option>-->
        <!--<option value="0">超级管理员</option>-->
        <!--<option value="1">普通管理员</option>-->
        <!--</select>-->
        <el-row>
          <el-col :span="16" :offset="4">
            <el-select class="role-select--item" v-model="user.type" placeholder="请选择角色">
              <el-option key="超级管理员" label="超级管理员" value="0"></el-option>
              <el-option key="普通管理员" label="普通管理员" value="1"></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-input placeholder="请输入内容" v-model="user.name" clearable></el-input>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-input placeholder="请输入密码" v-model="user.pass" show-password></el-input>
          <!--<el-button type="primary" @click="login">登录</el-button>-->
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="16" :offset="8">
          <!--<el-input placeholder="请输入密码" v-model="user.pass" show-password></el-input>-->
          <el-button type="primary" @click="login">登录</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import api from "../commom/api";
import qs from "qs";
export default {
  components: {},
  props: [],
  data() {
    return {
      user: {
        name: "",
        pass: "",
        type: ""
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    login() {
      this.$axios({
        url: api.login,
        method: "post",
        data: qs.stringify(this.user)
      }).then(res => {
        console.log(res);
        // if (res.data.isok) {
        //   localStorage.setItem("username", this.user.name);
        //   localStorage.setItem("isAdmin", res.data.isAdmin);
          if (this.user.type === "0") {
            localStorage.setItem("isAdmin", true);
            localStorage.setItem("username",this.user.name)
          } else {
            localStorage.setItem("isAdmin", false);
          }
          this.$router.replace("/index");
          this.$message({
            message: "恭喜你，登录成功",
            type: "success"
          });
        // } else {
        //   alert(res.data.info);
        //   this.$message.error("密码或账号错误");
        // }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';

.war {
  width: 100vw;
  height: 100vh;
  background: $login;
  position: relative;

  .el-row {
    margin-top: 10px;
  }

  .big {
    width: 500px;
    height: 300px;
    background-color: #fff;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border-radius: 10px;

    p {
      font-size: 30px;
      color: blue;
      text-align: center;
      margin: 10px 0;
    }
  }
}

.role-select--item {
  width: 100%;
  /* margin auto 100px */
}

background $pr {
  text-align: center;
}

.el-button--primary {
  width: 98px;
  height: 40px;
  background-color: #409eff;
  border: 1px solid #409eff;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
}
</style>
