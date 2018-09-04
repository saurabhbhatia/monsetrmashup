<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content">
        <h2>Submissions open September 3rd 2018 &amp; close October 30th 2018</h2>
        <p>
          Head to <router-link :to="'/'">home</router-link> page to read the detailed submission guidelines or fill out the form below if you're ready!
        </p>
      </div>
      <iframe class="content full-width" src="https://docs.google.com/forms/d/e/1FAIpQLScK7RLoJe_qTuDhRS4mFwcIHsw8Uuvi8A4gH_XafJBJ1tpqtQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0">Loading...</iframe>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'

export default {
  name: 'Submission',
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

<style>
.full-width {
  width: 100%;
}
.content {
  text-align: center;
}
</style>
