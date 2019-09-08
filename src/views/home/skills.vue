<template>
  <section class="resume-section">
    <h2 class="section-title">专业技能</h2>
    <div class="skill-section">
      <skill-ring item="javascript" :percent="75"></skill-ring>
      <skill-ring item="css" :percent="70"></skill-ring>
      <skill-ring item="html" :percent="80"></skill-ring>
      <skill-ring item="vue" :percent="80"></skill-ring>
      <skill-ring item="react" :percent="60"></skill-ring>
    </div>
  </section>
</template>

<script>
import SkillRing from '@/components/SkillRing.vue'
export default {
  components: {
    SkillRing
  }
}
</script>

<style lang="scss">
.skill-section {
  display: flex;
}
</style>
