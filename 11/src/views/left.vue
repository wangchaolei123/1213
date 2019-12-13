<template>
    <div class="left">
     <!-- <router-link to="/index/manage" active-class="selcet" v-if="isAdmin=='0'">管理员管理</router-link>
    <router-link to="/index/banner" active-class="selcet" v-if="isAdmin!=='0'">baner管理</router-link>
    <router-link to="/index/teacher" active-class="selcet" v-if="isAdmin!=='0'">家教管理</router-link>
    <router-link to="/index/water" active-class="selcet" v-if="isAdmin!=='0'">水站管理</router-link>
    <router-link to="/index/repair" active-class="selcet" v-if="isAdmin!=='0'">维修管理</router-link>
    <router-link to="/index/jz" active-class="selcet" v-if="isAdmin!=='0'">家政管理</router-link>
    <router-link to="/index/cpass" active-class="selcet" v-if="isAdmin!=='0'">修改密码</router-link> -->
        <router-link to="/index/manage" active-class="select" v-if="isAdmin">管理员管理</router-link>
        <router-link to="/index/banner" active-class="select" v-if="!isAdmin">baner管理</router-link>
        <router-link to="/index/familyEducation" active-class="select" v-if="!isAdmin">家教管理</router-link>
        <router-link to="/index/waterStation" active-class="select" v-if="!isAdmin">水站管理</router-link>
        <router-link to="/index/repair" active-class="select" v-if="!isAdmin">维修管理</router-link>
        <router-link to="/index/housekeeping" active-class="select" v-if="!isAdmin">家政管理</router-link>
        <router-link to="/index/modifyPassword" active-class="select" v-if="!isAdmin">修改密码</router-link> 
    </div>
</template>
<script>
    export default {
        components: {},
        props: [],
        data() {
            return {isAdmin: localStorage.getItem("isAdmin")==='true'};
        },
        watch: {},
        computed: {},
        methods: {},
        created() {
        },
        mounted() {
        }
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../stylus/index.styl'
    .left
        width 200px
        background $login

        a
            display block
            text-align center
            line-height 40px

        .select
            background #ff8247
            color #ffffff
</style>
