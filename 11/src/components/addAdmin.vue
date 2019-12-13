<template>
  <el-dialog title="添加修改管理员" :visible.sync="addBannerVisible">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="user.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pass">
        <el-input v-model="ruleForm.pass" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirm">
        <el-input v-model="confirm" type="password"></el-input>
      </el-form-item>
      <el-form-item label="描述" prop="des">
        <el-input v-model="user.des"></el-input>
      </el-form-item>
      <el-form-item label="时间" prop="time">
        <el-date-picker v-model="user.time" type="datetime" placeholder="选择日期时间"></el-date-picker>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button class @click="addBannerVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
    </div>
  </el-dialog>
</template>
<script>
export default {
  components: {},
  props: {
    twoTitle: String
  },
  data() {
    return {
      addBannerVisible: false,
      user: {
        pass: "",
        name: "",
        des: "",
        time: ""
      },
      confirm:"",
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        surepassword: [
          { required: true, message: "请输入确认密码", trigger: "blur" }
        ],
        memo: [{ required: true, message: "请输入描述", trigger: "blur" }],
        time: [{ required: true, message: "请选择时间", trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    show() {
      this.addBannerVisible = true;
    },
    // 提交
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addBannerVisible = false;
          this.$emit("addBannerBack", this.user);
        } else {
          return false;
        }
      });
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';
</style>
