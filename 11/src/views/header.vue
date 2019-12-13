<template>
    <section class="header">
        <!-- <router-view></router-view> -->
        <div class="header-right-item">
            <p>{{name}}</p>
            <el-button type="primary" @click.native="leave">退出登录</el-button>
        </div>
    </section>
</template>
<script>
    import api from "../commom/api";
    import qs from 'qs'

    export default {
        components: {},
        props: [],
        data() {
            return {
                name: ""
            };
        },
        watch: {},
        computed: {},
        methods: {
            leave() {
                localStorage.removeItem("isAdmin");
                localStorage.removeItem("username");
                this.$axios({
                    url: api.exit,
                    method: "get"
                }).then(res => {
                    this.$router.replace("/login")
                })
            }
        },
        created() {
        },
        mounted() {
            this.name = localStorage.getItem("username") || "admin"
        },
        methods: {
            leave() {
                this.$router.replace("/");
            }
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../stylus/index.styl';

    .header {
        height: 100px;
        background: #ff8247;

        .header-right-item {
            width: 200px;
            height: 100%;
            float right;
            position relative;

            p {
                font-size 16px
                color #fff
                line-height 100px
                float left;
            }

            .el-button--primary {
                width: 98px;
                height: 40px;
                background-color #fff;
                border 1px solid #fff;
                font-size 14px
                font-weight 500
                color #333;
                position absolute;
                margin auto;
                top: 0;
                bottom: 0;
                right: 20px;
            }
        }


    }


</style>
