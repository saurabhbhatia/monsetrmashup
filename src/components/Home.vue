<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content is-medium ">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533815233/monster_logo_jtpxfi.png">
        <div class="centered-button has-text-centered">
          <router-link :to="'/submission-guidelines'" class="button is-large">Submission Guidelines</router-link>
        </div>
        <br/>
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533814926/moster_mash_up_promo_image_qwolgg.png">
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'

export default {
  name: 'Home',
  components: {
    'navbar': NavBar,
    'site-footer': Footer
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
