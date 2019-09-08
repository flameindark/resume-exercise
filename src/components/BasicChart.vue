<template>
  <div ref="chartItem" class="chart-item" :style="{
    width: w,
    height: h
  }">
  </div>
</template>
<script>
const MyColor = ['#2090f7','#2f4554', '#61a0a8', '#d48265', '#91c7ae','#749f83',  '#ca8622', '#bda29a','#6e7074', '#546570', '#c4ccd3']
export default {
  props: {
    width: {
      type: [String, Number],
      default: 400
    },
    height: {
      type: [String, Number],
      default: 400
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  computed: {
    w() {
      return `${parseInt(this.width)}px`
    },
    h(){
      return `${parseInt(this.height)}px`
    }
  },
  watch: {
    options(newVal) {
      console.log(newVal)
      this.setData(newVal)
    }
  },
  mounted() {
    this.init()
    this.setData({color: MyColor, ...this.options});
  },
  methods: {
    init() {
      this.chart = this.$echarts.init(this.$refs['chartItem'])
    },
    setData(opt) {
      this.chart.setOption(opt)
    }
  }
}
</script>

<style lang="scss">
</style>
