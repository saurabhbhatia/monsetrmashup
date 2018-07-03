<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">Monster Mash-Up - A PDX Anthology</a>
      <div class="navbar-burger burger" data-target="top-menu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="top-menu" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <a class="navbar-item" href="">About</a>
        <a class="navbar-item" href="">Contributors</a>
        <a class="navbar-item" href="">Characters</a>
        <a class="navbar-item" href="">Campaign</a>
        <a class="navbar-item" href="">Contact</a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style>

</style>
