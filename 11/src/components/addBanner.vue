<template>
  <el-dialog title="添加banner" :visible.sync="addBannerVisible">
    <el-form :model="user" :rules="rules" ref="user" label-width="100px" class="demo-ruleForm">
      <el-form-item label="图片地址" prop="img">
        <el-input v-model="user.img"></el-input>
      </el-form-item>
      <el-form-item :label="twoTitle" prop="des">
        <el-input v-model="user.des"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button class @click="addBannerVisible = false">取 消</el-button>
      <el-button type="primary" @click="submitForm('user')">添加</el-button>
    </div>
  </el-dialog>
</template>
<script>
import api from "../commom/api";
export default {
  components: {},
  props: {
    twoTitle: String
  },
  data() {
    return {
      addBannerVisible: false,
      user: {
        img: "",
        des: ""
      },
      rules: {
        img: [{ required: true, message: "请输入图片地址", trigger: "blur" }],
        memo: [{ required: true, message: "请输入描述", trigger: "blur" }]
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
      // this.$aixos({

      // })
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.addBannerVisible = false;
          this.$emit("addBannerBack", this.user);
          this.$axios({
            url: api.addBanner,
            method: "get",
            data: {
              id: id
            }
          }).then(res=>{
              
          });
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
