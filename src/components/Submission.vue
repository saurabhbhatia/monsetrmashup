<template>
  <div>
    <navbar></navbar>
    <div class="container">
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
</style>
