<template>
  <section class="resume-section">
    <h2 class="section-title">工作经历</h2>
    <time-line :events="experience"></time-line>
  </section>
</template>

<script>
import TimeLine from '@/components/TimeLine'
export default {
  components: {
    TimeLine
  },
  data() {
    return {
      experience: [
        {
          time: '2018.06-2019.08',
          title: '上海邀美网络科技有限公司(互联网医美)',
          things: [
            `作为前端主程参与公司各个项目的前端搭建、开发和维护。`,
            `主要使用Vue.js开发移动端web项目，以及使用ElementUI组件库搭建后台管理系统。`,
            `对项目代码进行优化，根据新的需求改进组件设计，优化项目的打包大小，配置某些静态页面的预渲染等，大幅降低了首屏的加载速度。`
          ]
        },
        {
          time: '2017.08–2018.06',
          title: '上海云教信息科技有限公司(教育，数据服务)',
          things: [
            `负责公司项目基于Vue.js的改版，以及新项目的开发。`,
            `替代SVN，为公司前端搭建GitLab环境。`,
            `使用ECharts做简单的数据展示。`
          ]
        },
        {
          time: '2016.05–2017.07',
          title: '上海浦东华宇（杭州分公司-数据服务）',
          things: [
            `负责还原设计稿，完成PC端页面开发`,
            `使用jQuery操作DOM和组件开发，进行前台数据的展示`
          ]
        }
        ]
    }
  }
}
</script>

<style lang="scss">
</style>
