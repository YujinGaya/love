<template>
  <div class="love">
    <h4>{{love.comment}}</h4>
    <a :href="love.url">{{love.url}}</a>
  </div>
</template>

<script>
export default {
  props: ['love']
}
</script>

<style lang="scss">
.love {
  padding: 1.3rem 0 0.5rem;
}
</style>
