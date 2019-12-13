<template>
  <section class="housekeeping--container">
    <p class="title">家政管理</p>
    <el-tabs v-model="activeName">
      <el-tab-pane label="家政banner" name="station">
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
            prop="img"
            label="图片">
            <template slot-scope="scope">
              <img :src="scope.row.img" alt="">
            </template>
          </el-table-column>
          <el-table-column
            fixed="right"
            label="操作">
            <template slot-scope="scope">
              <!--<el-button>查看</el-button>-->
              <el-button type="danger" @click.native="deleteStation(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <addhousekeeping-banner ref="addStation" @addStationgBack="addStationgBack"></addhousekeeping-banner>
      </el-tab-pane>
      <el-tab-pane label="人员管理" name="comment">
        <el-button class="add-btn" @click.native="addcomment">添加</el-button>
        <el-select class="role-select--item" v-model="stationName" placeholder="请选择服务类型">
          <el-option
            key="全部"
            label="全部"
            value="0">
          </el-option>
          <el-option
            key="月嫂"
            label="月嫂"
            value="1">
          </el-option>
          <el-option
            key="钟点工"
            label="钟点工"
            value="2">
          </el-option>
          <el-option
            key="月嫂"
            label="月嫂"
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
            label="名称">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="电话">
          </el-table-column>
          <el-table-column
            prop="price"
            label="价格">
          </el-table-column>
          <el-table-column
            prop="age"
            label="年龄">
          </el-table-column>
          <el-table-column
            prop="student"
            label="学历">
          </el-table-column>
          <el-table-column
            prop="type"
            label="服务类型">
          </el-table-column>
          <el-table-column
            fixed="right"
            width="250"
            label="操作">
            <template slot-scope="scope">
              <el-button>查看</el-button>
              <el-button type="danger" @click.native="deleteCommentItem(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <add-people ref="addcomment" @addCommentBack="addCommentBack"></add-people>
      </el-tab-pane>
    </el-tabs>
  </section>
</template>

<script>
  import AddhousekeepingBanner from "../components/addhousekeepingbanner.vue"
  import AddPeople from "../components/addPeople"

  export default {
    components: {AddhousekeepingBanner, AddPeople},
    props: [],
    data() {
      return {
        activeName: "station",
        // 水站
        waterTableData: [{
          img: 'https://www.runoob.com/wp-content/uploads/2017/01/vue.png',
          id: 1
        }],
        // 水站评论
        addcommentTableData: [{
          id: 0,
          name: "张三",
          phone:"1212121212",
          price: '12',
          age: '11',
          student:"高中",
          type:"月嫂"
        }, {
          id: 1,
          name: "李四",
          phone:"12233440595",
          price: '23',
          age: '34',
          student:"本科",
          type:"月嫂"
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
  .housekeeping--container {
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
