<template>
  <div class="right">
    <h2>{{$route.name}}</h2>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';

.right {
  flex: 1;
}
</style>