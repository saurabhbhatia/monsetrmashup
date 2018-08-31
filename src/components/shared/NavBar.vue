<template>
  <nav class="navbar is-white">
    <div class="navbar-brand">
      <a class="navbar-item" href="/"><img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534049429/GCC_full_logo_lfspkq.png"></a>
      <router-link class="navbar-item" :to="'/submission'">
        <button class="button is-black is-large">Make a submission</button>
      </router-link>
      <div class="navbar-burger burger" data-target="top-menu" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="top-menu" class="navbar-menu" :class="{ 'is-active': showNav }">
      <div class="navbar-end">
        <router-link class="navbar-item"  :to="'/'">Home</router-link>
        <router-link class="navbar-item"  :to="'/submission'">Submission</router-link>
        <!-- <a class="navbar-item" href="">Contributors</a> -->
        <router-link class="navbar-item" :to="'/production-team'">Production team</router-link>
        <!-- <a class="navbar-item" href="">Characters</a> -->
        <!-- <a class="navbar-item" href="">Campaign</a> -->
        <router-link class="navbar-item" :to="'/contact'">Contact</router-link>
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
  },
  methods: {
  }
}
</script>

<style>
.navbar-end {
  margin-right: 20px;
}
</style>
