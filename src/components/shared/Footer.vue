<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Grit City Comics &#169; {{currentYear}}</strong>. Website by <a href="https://safew.tech" target="blank">Safew Tech Labs</a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      currentYear: (new Date()).getFullYear()
    }
  }
}
</script>

<style>

</style>
