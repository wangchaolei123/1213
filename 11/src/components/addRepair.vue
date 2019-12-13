<template>
  <el-dialog title="添加维修" :visible.sync="addBannerVisible">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="评分" prop="score">
        <el-input v-model="ruleForm.score"></el-input>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
      </el-form-item>
      <el-form-item label="点赞数量" prop="dianzan">
        <el-input v-model="ruleForm.dianzan"></el-input>
      </el-form-item>
      <el-form-item label="关注人数" prop="people">
        <el-input v-model="ruleForm.people"></el-input>
      </el-form-item>
      <el-form-item label="商家地址" prop="address">
        <el-input v-model="ruleForm.address"></el-input>
      </el-form-item>
      <el-form-item label="距离" prop="juli">
        <el-input v-model="ruleForm.juli"></el-input>
      </el-form-item>
      <el-form-item label="商家信息" prop="message">
        <el-input v-model="ruleForm.message"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button class="" @click="addBannerVisible = false">取 消</el-button>
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
        ruleForm: {
          name: '',
          score: '',
          type: '',
          dianzan: "",
          people:"",
          address:"",
          juli:"",
          message:"",
          phone:""
        },
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          score: [
            {required: true, message: '请输入评分', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请输入类型', trigger: 'blur'}
          ],
          dianzan:[
            {required: true, message: '请输入点赞数量', trigger: 'blur'}
          ],
          people:[
            {required: true, message: '请输入关注人数', trigger: 'blur'}
          ],
          address:[
            {required: true, message: '请输入浏览量', trigger: 'blur'}
          ],
          juli:[
            {required: true, message: '请输入距离', trigger: 'blur'}
          ],
          message:[
            {required: true, message: '请输入商家信息', trigger: 'blur'}
          ],
          phone:[
            {required: true, message: '请输入电话', trigger: 'blur'}
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
            this.$emit("addStationgBack", this.ruleForm)
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


</style>
