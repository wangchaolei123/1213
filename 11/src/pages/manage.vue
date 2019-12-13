<template>
  <section class="admin--container">
    <p class="title">管理员管理</p>
    <el-button class="add-btn" @click.native="addItem">添加</el-button>
    <el-table :data="user" border style="width: 100%">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column v-model="user.name" prop="name" label="姓名"></el-table-column>
      <el-table-column v-model="user.des" prop="des" label="属性"></el-table-column>
      <el-table-column v-model="user.time" prop="time" label="时间"></el-table-column>
      <el-table-column fixed="right" label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)">查看</el-button>
          <el-button type="danger" @click.native="deleteItem(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <add-admin ref="addBanner" @addBannerBack="addBannerBack"></add-admin>
  </section>
</template>

<script>
import api from "../commom/api";
import addAdmin from "../components/addAdmin";

export default {
  components: { addAdmin },
  props: [],
  data() {
    return {
      user: {
        name: "",
        time: "",
        pass: "",
        des: ""
      }
    };
  },
  watch: {},
  computed: {},
  created() {},
  mounted() {
    this.$axios({
      url: api.banner,
      method: "get",
      data: {
        id: id
      }
    }).then(res => {
      console.log(res);
    });
  },
  methods: {
    // 删除
    // deleteItem(data) {
    //   this.tableData.splice(
    //     this.tableData.findIndex(item => item.id === data.id)
    //   );
    // },
    // // 添加
    // addItem() {
    //   this.$refs.addBanner.show();
    // },
    // addBannerBack(data) {
    //   this.tableData.push(data);
    // }
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@import '../stylus/index.styl';

.admin--container {
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
