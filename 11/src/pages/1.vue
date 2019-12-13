<template>
  <div>
    <!-- <router-view></router-view> -->
    <!-- <el-button type="success" class="new" @click="toCreate">新建</el-button> -->
    <div class="wrapper">
      <el-button type="text" class="add" @click="dialogFormVisible = true">添加</el-button>

      <el-dialog title="新建|修改管理员" :visible.sync="dialogFormVisible" class="newcon">
        <el-form :model="user">
          <el-form-item label="账号" :label-width="formLabelWidth">
            <el-input
              v-model="user.name"
              autocomplete="off"
              placeholder="请输入账号"
              @blur="testname(user.name)"
            >
              <i slot="suffix" class="el-input__icon el-icon-success" v-if="isRight"></i>
              <i slot="suffix" class="el-input__icon el-icon-error" v-else></i>
            </el-input>
            <!-- <p v-if="!user.name">请输入字母开头的5-9位字符</p> -->
            <!-- <p v-else>&nbsp;</p> -->
          </el-form-item>
          <el-form-item label="密码" :label-width="formLabelWidth">
            <el-input
              v-model="user.pass"
              autocomplete="off"
              placeholder="请输入密码"
              @blur="testpass(user.pass)"
              show-password
            >
              <i slot="suffix" class="el-input__icon el-icon-success" v-if="isPass"></i>
              <i slot="suffix" class="el-input__icon el-icon-error" v-else></i>
            </el-input>
            <!-- <p v-if="!user.pass">请输入6-15位字符密码</p> -->
            <!-- <p v-else>&nbsp;</p> -->
          </el-form-item>
          <el-form-item label="确认密码" :label-width="formLabelWidth">
            <el-input
              v-model="comfirm"
              autocomplete="off"
              placeholder="请确认密码"
              show-password
              @blur="testcomfirm(comfirm)"
            >
              <i slot="suffix" class="el-input__icon el-icon-success" v-if="isComfirm"></i>
              <i slot="suffix" class="el-input__icon el-icon-error" v-else></i>
            </el-input>
            <!-- <p v-if="!comfirm">请输入6-15位字符密码</p> -->
            <!-- <p v-else>&nbsp;</p> -->
          </el-form-item>
          <el-form-item label="描述" :label-width="formLabelWidth">
            <el-input v-model="user.des" autocomplete="off" placeholder="请输入描述"></el-input>
          </el-form-item>
          <el-form-item label="时间" :label-width="formLabelWidth">
            <el-date-picker v-model="user.time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="Create" v-if="!user.id">确 定</el-button>
          <el-button type="primary" @click="updateComfirm(user.id)" v-else>修 改</el-button>
        </div>
      </el-dialog>
      <el-table :data="list" max-height="460" border style="width: 100%" class="newcon">
        <el-table-column type="index" fixed prop="date" label="序号" width="120"></el-table-column>
        <el-table-column prop="name" label="姓名" width="250"></el-table-column>
        <el-table-column prop="des" label="属性" width="250"></el-table-column>
        <el-table-column prop="time" label="时间" width="280">
          <template slot-scope="scope">
            <span>{{scope.row.time|timeFilter}}</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="update(scope.row.id)" type="primary" size="small">查看</el-button>
            <el-button type="danger" @click="open3(scope.row.id)" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import api from "../commom/api";
export default {
  components: {},
  props: [],
  data() {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      user: {
        name: "",
        pass: "",
        time: "",
        des: ""
      },
      confirm: "",
      formLabelWidth: "120px",
      comfirm: "",
      isRight: false,
      isPass: false,
      isComfirm: false,
      arr: [],
      list:[]
    };
  },
  watch: {},
  computed: {},
  methods: {
    updateComfirm(id) {
      this.dialogFormVisible = false;
      this.$axios({
        url: api.updateManage,
        method: "post",
        data: {
          id: id
        }
      }).then(res => {
        if (res.data.isok) {
          this.open(res.data.info);
        } else {
          this.open2(res.data.info);
        }
      });
    },
    update(id) {
      this.dialogFormVisible = true;
      this.$aixos({
        url: api.findManage,
        method: "post",
        data: {
          id: id
        }
      }).then(res => {
        if (res.data.isok) {
          this.user = res.data.data[0];
        }
      });
    },
    open3() {
      this.$confirm("确定删除吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(res => {
          this.$axios({
            url: api.delManage,
            method: "post",
            data: { id: id }
          });
        })
        .then(res => {
          if (res.data.isok) {
            this.open(res.data.info);
            this.init();
          } else {
            this.open2(res.data.info);
          }
        });
    },
    testname(msg) {
      if (reg.usernameReg.test(msg)) {
        this.isRight = true;
      } else {
        this.isRight = false;
      }
    },
    testpass(msg) {
      if (msg == this.user.pass) {
        this.isComfirm = true;
      } else {
        this.isComfirm = false;
      }
    },
    testconfirm(msg) {
      if (msg == this.user.pass) {
        this.isComfirm = true;
      } else {
        this.isComfirm = false;
      }
    },
    open(msg) {
      this.$message({
        message: msg,
        type: "success"
      });
    },
    open2(){
        this.$message.error(msg);
    },
     init() {
      this.axios({
        url: api.findManage,
        method: "post"
      }).then(res => {
        if (res.data.isok) {
          this.list = res.data.data;
        } else {
          open2(res.data.info);
        }
      });
    },
    Create(){
      this.dialogFormVisible=false;
        if (this.isComfirm && this.isPass && this.isRight) {
        this.axios({
          url: api.addManage,
          method: "post",
          data: this.user
        }).then(res => {
          if (res.data.isok) {
            this.open(res.data.info);
            this.init()
          } else {
            this.open2(res.data.info);
          }
        });
      } else {
        this.open2("创建失败，请输入正确格式");
      }
    }
  },
  created() {},
  mounted() {
    this.id = this.$route.query.id;
    if (this.id == "0") {
    }
  },
  beforeRouterEnter(to, from, next) {
    if (localStorage.getItem("isAdmin") == "0") {
      next();
    } else {
      next("/index/manage");
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';
</style>