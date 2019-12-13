<template>
  <div class="box">
    <v-header></v-header>
    <div class="main">
      <v-left></v-left>
      <v-right></v-right>
    </div>
  </div>
</template>
<script>
import vHeader from "../views/header";
import vLeft from "../views/left";
import vRight from "../views/right";
export default {
  components: {
    vHeader,
    vRight,
    vLeft
  },
  props: [],
  data() {
    return {
      name: ""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    this.name = localStorage.getItem("username");
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
.box
    width 100vw
    height 100vh
    display flex 
    flex-direction column
    .main 
        flex 1 
        display flex 
</style>