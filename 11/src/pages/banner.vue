<template>
  <section class="banner--container">
    <p class="title">banner管理</p>
    <el-button class="add-btn" @click.native="addItem">添加</el-button>
    <el-table :data="usesr" border style="width: 100%">
      <el-table-column  type="index" label="序号" width="50"></el-table-column>
      <el-table-column v-model="user.img"  prop="img" label="图片">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt />
        </template>
      </el-table-column>
      <el-table-column v-model="user.des" prop="des" label="描述"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
          <el-button type="danger" @click.native="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <add-banner ref="addBanner" :twoTitle="'描述'" @addBannerBack="addBannerBack"></add-banner>
  </section>
</template>

<script>
import AddBanner from "../components/addBanner";
import api from "../commom/api";
export default {
  components: { AddBanner },
  props: [],
  data() {
    return {
      user: { img: "", des: "" }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 删除
    deleteItem(data) {
      this.$aios({
        url: api.delBanner,
        method: "get",
        data: {
          id: id
        }
      }).then(res => {
        if (res.data.isok) {
          this.open(res.data.info);
        }
      });
    },
    // 添加
    addItem() {
      this.$refs.addBanner.show();
    },
    addBannerBack(data) {
      this.tableData.push(data);
    }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';

.banner--container {
  margin: 20px;

  p {
    font-size: 22px;
    margin: 10px;
    color: rgb(243, 146, 99);
  }

  .add-btn {
    width: 98px;
    height: 40px;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    font-size: 14px;
    font-weight: 500;
    color: #606266;
  }

  .el-button--danger {
    width: 98px;
    height: 40px;
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
  }

  .el-table {
    margin-top: 10px;
  }
}
</style>
