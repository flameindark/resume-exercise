<template>
  <section class="events-section">
    <div class="events-item" v-for="item in events" :key="item.time">
      <template v-if="item.title">
        <div class="events-item-tail"></div>
        <div class="events-status-icon"></div>
        <div class="events-content">
          <div class="events-top">
            <h3 class="events-title">{{item.title}}</h3>
            <div class="events-time" v-if="item.time">{{item.time}}</div>
          </div>
          <ul class="events-list">
            <li class="events-list-item" v-for="thing in item.things" :key="thing">{{thing}}</li>
          </ul>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    events: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss">
.events-section {
  padding-bottom: 25px;
}
.events-item {
  position: relative;
  padding-top: 25px;
  .events-status-icon {
    position: absolute;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 100px;
    border: 2px solid #2090f7;
  }
  .events-item-tail {
    position: absolute;
    left: 4px;
    height: 100%;
    border-left: 2px solid #e9e9e9;
  }
  .events-content {
    position: relative;
    top: -20px;
    margin-left: 20px;
    text-align: left;
  }
  .events-top {
    display: flex;
    justify-content: space-between;
    line-height: 50px;
    .events-title {
      font-size: 16px;
    }
  }
  .events-list-item {
    line-height: 24px;
    &::before {
      content: '-';
      margin-right: 6px;
    }
  }
}
</style>
