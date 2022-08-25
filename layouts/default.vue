<template>
  <div>
    <TheNav />
    Default Layout
    <span class="test">
      Hello there
    </span>
    <slot />
    <TheFooter />
  </div>
</template>

<script setup>
</script>

<style lang="sass" scoped>
div
  .test
    color: red
</style>