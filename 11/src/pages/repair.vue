<template>
  <section class="repair--container">
    <p class="title">维修管理</p>
    <el-tabs v-model="activeName">
      <el-tab-pane label="维修" name="station">
        <el-button class="add-btn" @click.native="addStation">添加</el-button>
        <el-table
          :data="waterTableData"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="维修名称">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="type"
            label="类型">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <el-button>查看</el-button>
              <el-button type="danger" @click.native="deleteStation(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <add-repair ref="addStation" @addStationgBack="addStationgBack"></add-repair>
      </el-tab-pane>
      <el-tab-pane label="维修评论" name="comment">
        <!--<el-button class="add-btn" @click.native="addcomment">添加</el-button>-->
        <el-select class="role-select--item" v-model="stationName" placeholder="请选择评论">
          <el-option
            key="全部"
            label="全部"
            value="0">
          </el-option>
          <el-option
            key="保姆"
            label="保姆"
            value="1">
          </el-option>
          <el-option
            key="月嫂"
            label="月嫂"
            value="2">
          </el-option>
          <el-option
            key="钟点工"
            label="钟点工"
            value="3">
          </el-option>
        </el-select>
        <el-table
          :data="addcommentTableData"
          border
          style="width: 100%">
          <el-table-column
            type="index"
            label="序号"
            width="50">
          </el-table-column>
          <el-table-column
            prop="name"
            label="用户名称">
          </el-table-column>
          <el-table-column
            prop="details"
            label="评论内容">
          </el-table-column>
          <el-table-column
            prop="time"
            label="时间">
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
              <el-button type="danger" @click.native="deleteCommentItem(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <add-comment ref="addcomment" @addCommentBack="addCommentBack"></add-comment>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
  import AddRepair from "../components/addRepair"
  import AddComment from "../components/addComment"

  export default {
    components: {AddRepair, AddComment},
    props: [],
    data() {
      return {
        activeName: "station",
        // 水站
        waterTableData: [{
          id: 0,
          name: "维修站1",
          phone: '123456',
          type: '手机',
        }, {
          id: 1,
          name: "维修站2",
          phone: '1234434456',
          type: '电脑'
        }],
        // 水站评论
        addcommentTableData: [{
          id: 0,
          name: "user1",
          details: '这是评论',
          time: '2019-11-11',
        }, {
          id: 1,
          name: "user1",
          details: '这是评论',
          time: '2019-11-11',
        }],
        stationName:""
      };
    },
    watch: {},
    computed: {},
    created() {
    },
    mounted() {
    },
    methods: {
      // 添加水站
      addStation() {
        this.$refs.addStation.show()
      },
      addStationgBack(data) {
        this.waterTableData.push(data)
      },
      deleteStation(data) {
        this.waterTableData.splice(this.waterTableData.findIndex(item => item.id === data.id), 1)
      },
      // 添加家教类型
      addcomment() {
        this.$refs.addcomment.show()
      },
      deleteCommentItem(data) {
        this.addcommentTableData.splice(this.addcommentTableData.findIndex(item => item.id === data.id), 1)
      },
      addCommentBack(data) {
        this.addcommentTableData.push(data)
      }
    }
  }
  ;
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '../stylus/index.styl';
  .repair--container {
    margin 20px;

    p {
      font-size 22px;
      margin 10px;
      color rgb(243, 146, 99)
    }

    .add-btn {
      width: 98px;
      height: 40px;
      background-color #fff;
      border 1px solid #dcdfe6;
      font-size 14px
      font-weight 500
      color #606266
    }

    .el-button--danger {
      width: 98px;
      height: 40px;
      background-color #f56c6c;
      border 1px solid #f56c6c;
      font-size 14px
      font-weight 500
      color #fff
    }

    .el-table {
      margin-top 10px;
    }
  }

  .el-tabs__item.is-active {
    color: red
  }
</style>
