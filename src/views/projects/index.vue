<template>
  <div class="project-page">
    <el-table :data="tableData">
      <el-table-column width="140" prop="time" label="时间"></el-table-column>
      <el-table-column width="100" prop="project" label="项目"></el-table-column>
      <el-table-column width="160" prop="intro" label="介绍"></el-table-column>
      <el-table-column prop="duty" label="职责">
        <template slot-scope="scope">
          <div :key="item" v-for="item in scope.row.duty">- {{item}}</div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          time: '2019.03-2019.08',
          project: '易获客',
          intro: '基于Vue.js开发的互联网医美行业移动端web项目(saas)',
          duty: [
            '负责项目的搭建(基于Vue-CLI)，包括环境变量，部署脚本，全局sass变量注入、常用工具函数等。',
            '作为主工程师开发了商品模块、订单模块、支付模块、活动模块等10多个模块的功能。'
          ]
        },
        {
          time: '2018.11-2019.04',
          project: '小乔商城',
          intro: '医美电商项目，Vue.js移动端web商城(Hybrid App项目)',
          duty: [
            '开发商品、订单、积分、下单等模块，以及这些模块的后台管理系统',
            '与移动端开发人员沟通，通过JsBridge和原生app交换数据，解决两端页面互相跳转和返回逻辑错乱的问题。'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.project-page {
  width: 800px;
  margin: 0 auto;
}
</style>
