<template>
  <basic-chart :options="opts" width="200" height="200"></basic-chart>
</template>

<script>
import BasicChart from './BasicChart'
export default {
  components: {
    BasicChart
  },
  props: {
    item: {
      type: String,
      required: true
    },
    percent: {
      type: Number,
      required: true
    }
  },
  computed: {
    opts() {
      return {
        color: ['#2090f7', '#eee'],
        series: {
          type: 'pie',
          radius: ['60%', '80%'],
          hoverOffset: 0,
          labelLine: {
              normal: {
                show: false
              }
          },
          label: {
            position: 'center',
            fontSize: 16
          },
          data: [
            {name: this.item, value: this.percent},
            {name: '', value: 100 - this.percent}
          ]
        }
      }
    }
  }
}
</script>

<style>

</style>
