<template>
  <el-dialog title="添加家政人员管理" :visible.sync="addBannerVisible">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone">
        <el-input v-model="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item label="价格" prop="price">
        <el-input v-model="ruleForm.price"></el-input>
      </el-form-item>
      <el-form-item label="年龄" prop="age">
        <el-input v-model="ruleForm.age"></el-input>
      </el-form-item>
      <el-form-item label="学历" prop="student">
        <el-input v-model="ruleForm.student"></el-input>
      </el-form-item>
      <el-form-item label="服务类型" prop="type">
        <el-input v-model="ruleForm.type"></el-input>
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
          phone:"",
          price:"",
          age:"",
          student:"",
          type:""
        },
        rules: {
          name: [
            {required: true, message: '请输入名称', trigger: 'blur'}
          ],
          phone: [
            {required: true, message: '请输入电话', trigger: 'blur'}
          ],
          price: [
            {required: true, message: '请输入价格', trigger: 'blur'}
          ],
          age: [
            {required: true, message: '请输入年龄', trigger: 'blur'}
          ],
          student: [
            {required: true, message: '请输入学历', trigger: 'blur'}
          ],
          type: [
            {required: true, message: '请输入服务类型', trigger: 'blur'}
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
            this.$emit("addPaihangBack", this.ruleForm)
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
