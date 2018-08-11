<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content is-medium ">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533815233/monster_logo_jtpxfi.png">
        <br/>
        <h2>Production Team</h2>
        <p>A comic anthology using characters and settings from the public domain. Each story will be a crossing of two separate public domain characters.</p>
        <h2>The Theme</h2>
        <p>Monsters and creatures from the public domain.</p>
        <h2>How / What to Submit?</h2>
        <ul>
          <li>1-8 pages</li>
          <li>U.S. Standard format (6.75 x 10.25)</li>
          <li>1-8 pages</li>
          <li>CMYK 300 dpi</li>
          <li>Full Color/Black and White</li>
          <li>NO 2 page spreads</li>
          <li>White gutters/margins</li>
          <li>Full bleeds are allowed, but keep the essentials within the live area.</li>
        </ul>
        <h2>Audience</h2>
        <p>PG to PG-13</p>
        <h2><router-link :to="'/production-team'">Production team</router-link></h2>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'

export default {
  name: 'Guidelines',
  components: {
    'navbar': NavBar,
    'site-footer': Footer
  },
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
.is-medium {
  font-size: 1.1rem;
}
</style>
