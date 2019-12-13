<template>
    <section class="family--container">
        <p class="title">家教管理</p>
        <el-tabs v-model="activeName">
            <el-tab-pane label="家教banner" name="jiajiao">
                <el-button class="add-btn" @click.native="addbanner">添加</el-button>
                <el-table
                        :data="tableData"
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
                            prop="memo"
                            label="描述">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作">
                        <template slot-scope="scope">
                            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                            <el-button type="danger" @click.native="deleteItem(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <add-banner ref="addBanner" :twoTitle="'描述'" @addBannerBack="addBannerBack"></add-banner>
            </el-tab-pane>
            <el-tab-pane label="家教类型" name="leixing">
                <el-button class="add-btn" @click.native="addleixing">添加</el-button>
                <el-table
                        :data="leixingTableData"
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
                            prop="type"
                            label="类型">
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作">
                        <template slot-scope="scope">
                            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                            <el-button type="danger" @click.native="deleteLeixingItem(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <add-banner ref="addleixingBanner" :twoTitle="'类型'" @addBannerBack="addBannerBack"></add-banner>
            </el-tab-pane>
            <el-tab-pane label="家教排行" name="paihang">
                <el-button class="add-btn" @click.native="addpaihang">添加</el-button>
                <el-table
                        :data="paihangTableData"
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
                            prop="people"
                            label="报名人数">
                    </el-table-column>
                    <el-table-column
                            prop="jigou"
                            label="授课机构">
                        <template slot-scope="scope">
                            <img :src="scope.row.jigou" alt="">
                        </template>
                    </el-table-column>
                    <el-table-column
                            fixed="right"
                            label="操作">
                        <template slot-scope="scope">
                            <!--<el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>-->
                            <el-button type="danger" @click.native="deletepaihangItem(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <add-paihang ref="addpaihang" @addPaihangBack="addPaihangBack"></add-paihang>
            </el-tab-pane>
        </el-tabs>
    </section>
</template>

<script>
    import AddBanner from "../components/addBanner"
    import AddPaihang from "../components/AddPaihang"

    export default {
        components: {AddBanner, AddPaihang},
        props: [],
        data() {
            return {
                activeName: "jiajiao",
                // BANNER
                tableData: [{
                
                }]
            };
        },
        watch: {},
        computed: {},
        created() {
        },
        mounted() {
        },
        methods: {
            // 添加家教banner
            addbanner() {
                this.$refs.addBanner.show()
            },
            addBannerBack(data) {
                if (this.activeName === 'jiajiao') {
                    this.tableData.push(data)
                } else if (this.activeName === 'leixing') {
                    this.leixingTableData.push(data)
                }
            },
            deleteItem(data) {
                this.tableData.splice(this.tableData.findIndex(item => item.id === data.id), 1)
            },
            // 添加家教类型
            addleixing() {
                this.$refs.addleixingBanner.show()
            },
            deleteLeixingItem(data) {
                this.leixingTableData.splice(this.leixingTableData.findIndex(item => item.id === data.id), 1)
            },
            // 添加家教排行
            addpaihang() {
                this.$refs.addpaihang.show()
            },
            deletepaihangItem(data) {
                this.paihangTableData.splice(this.paihangTableData.findIndex(item => item.id === data.id), 1)
            },
            addPaihangBack(data) {
                this.paihangTableData.push(data)
            }
        }
    }
    ;
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    @import '../stylus/index.styl';
    .family--container {
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
