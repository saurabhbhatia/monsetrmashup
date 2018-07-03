<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content is-medium">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1530615614/saurabh/monstermash.jpg">
        <a class="button is-large center-button">Coming Soon</a>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
export default {
  name: 'Home',
  components: {
    'navbar': NavBar
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
