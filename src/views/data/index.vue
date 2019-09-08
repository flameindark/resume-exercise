<template>
  <div class="data-page">
    <div class="data-chart">
      <skill-ring v-for="item in items" :key="item.item" :item="item.item" :percent="item.percent"></skill-ring>
    </div>
    <div class="data-table">
      <el-table :data="tableData">
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column prop="event" label="事件"></el-table-column>
      <el-table-column prop="restPop" label="人口剩余(万人)"></el-table-column>
      <el-table-column prop="lossPop" label="人口损失(万人)"></el-table-column>
    </el-table>
    </div>
  </div>
</template>

<script>
import SkillRing from '@/components/SkillRing'
const ItemArr = ['下雨概率', '大风概率', '空气质量', '生存率']
const AllPop = 3500
const Events = ['E计划启动', '零号机启动' ,'初号机启动' ,'使徒来袭']
export default {
  components: {
    SkillRing
  },
  data() {
    return {
      timer: null,
      items: [],
      tableData: []
    }
  },
  mounted() {
    this.getSkills()
    this.getEvents()
    this.setTimer()
  },
  methods: {
    setTimer() {
      if(!this.timer) {
        this.timer = setInterval(this.task, 10000)
      }
    },
    getSkills() {
      this.items = ItemArr.map(item => {
        return {
          item,
          percent: Math.random() * 100
        }
      })
    },
    task() {
      this.getSkills()
      this.getEvents()
    },
    clearTimer() {
      clearInterval(this.timer)
    },
    getEvents() {
      this.tableData = Events.map(event => {
        const restPop = 2000 + 1000 * Math.random().toFixed(2)
        return {
          event,
          time: 2000 + Math.random() * 10,
          restPop: restPop,
          lossPop: AllPop - restPop
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .data-page {
    width: 800px;
    margin: 0 auto;

    .data-chart {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
</style>
