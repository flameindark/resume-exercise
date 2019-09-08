<template>
  <section class="resume-section basic-info">
    <h2 class="section-title">基本信息</h2>
    <div class="section-content">
      <div class="info-item" v-for="item in infoList" :key="item.label">
        <span class="info-label">{{item.label}}：</span>
        <span class="info-value">{{item.value}}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      infoList: [
        {
          label: '姓名',
          value: '王亚军'
        },
        {
          label: '性别、年龄',
          value: '男 | 1994'
        },
        {
          label: '求职意向',
          value: 'web前端开发 | 3年工作经验'
        },
        {
          label: '联系方式',
          value: '18297999622 | wangliusheng563@163.com'
        },
        {
          label: '教育背景',
          value: '合肥工业大学 | 热能预动力工程 | 本科'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
.basic-info {
  .section-content {
    text-align: left;
  }
  .info-item {
    line-height: 24px;
  }
  .info-label {
    color: #000;
  }
  .info-value {
    // color: #333;
  }
}
</style>
