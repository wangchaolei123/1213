<template>
  <section class="modify-container">
    <p class="title">修改密码</p>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="原始密码" prop="oldpassword">
        <el-input v-model="ruleForm.oldpassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="newpassword">
        <el-input v-model="ruleForm.newpassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="surepassword">
        <el-input v-model="ruleForm.surepassword" type="password"></el-input>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
      </el-form-item>
    </el-form>
  </section>
</template>

<script>
  export default {
    components: {},
    props: {
    },
    data() {
      return {
        addBannerVisible: false,
        ruleForm: {
          account: '',
          oldpassword: '',
          newpassword: '',
          surepassword: ''
        },
        rules: {
          account: [
            {required: true, message: '请输入账号', trigger: 'blur'}
          ],
          oldpassword: [
            {required: true, message: '请输入原始密码', trigger: 'blur'}
          ],
          newpassword: [
            {required: true, message: '请输入新密码', trigger: 'blur'}
          ],
          surepassword: [
            {required: true, message: '请输入确认密码', trigger: 'blur'}
          ]
        }
      };
    }
    ,
    watch: {}
    ,
    computed: {}
    ,
    created() {
    }
    ,
    mounted() {
    }
    ,
    methods: {
      show() {
        this.addBannerVisible = true
      }
      ,
      // 提交
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.addBannerVisible = false;
            this.$emit("addBannerBack", this.ruleForm)
          } else {
            return false;
          }
        });
      }

    }
  }
  ;
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../stylus/index.styl';
  .modify-container {
    margin 20px;
    p {
      font-size 22px;
      margin 10px;
      color rgb(243, 146, 99)
    }
  }

</style>


