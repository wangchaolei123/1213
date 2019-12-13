<template>
    <el-dialog title="添加水站评论" :visible.sync="addBannerVisible">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="图片地址" prop="img">
                <el-input v-model="ruleForm.img"></el-input>
            </el-form-item>
            <el-form-item label="报名人数" prop="people">
                <el-input v-model="ruleForm.people"></el-input>
            </el-form-item>
            <el-form-item label="授课机构" prop="jigou">
                <el-input v-model="ruleForm.jigou"></el-input>
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
                    img: '',
                    people: '',
                    jigou: '',
                },
                rules: {
                    img: [
                        {required: true, message: '请输入图片地址', trigger: 'blur'}
                    ],
                    people: [
                        {required: true, message: '请输入报名人数', trigger: 'blur'}
                    ],
                    jigou: [
                        {required: true, message: '请输入授课机构', trigger: 'blur'}
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
                        this.$emit("addCommentBack", this.ruleForm)
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
