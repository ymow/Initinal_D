<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
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
import TheNav from '~~/components/TheNav.vue';
import TheFooter from '~~/components/TheFooter.vue';
</script>

<style lang="sass" scoped>
div
  .test
    color: red
</style>