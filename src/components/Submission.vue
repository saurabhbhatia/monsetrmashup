<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content">
        <h2>Submissions open September 3rd 2018 &amp; close October 30th 2018</h2>
        <p>
          <ul>
            <li><strong>How to Submit?</strong>- Fill out the form below to make a submission.</li>
            <li><strong>Premise:</strong> A comic anthology using characters and settings from the public domain. Each story will be a
        crossing of two separate public domain characters.</li>
            <li><strong>What we are looking for:</strong> Sequential art using any
        monster or creature from the public domain encountering or assisting a character from a separate
        public domain. Monsters and creatures are open to interpretation. The monster does not need to be the
        villain of the story nor does the story need a hero, just use a monster or creature to adhere to a
        common theme.</li>
            <li><strong>Submission Specifications:</strong>
              <ul>
                <li>1-8 pages</li>
                <li>U.S. Standard format (6.75 x 10.25)</li>
                <li>CMYK 300 dpi</li>
                <li>Full Color/Black and White</li>
                <li>Full bleeds are allowed, but keep the essentials within the live area.</li>
                <li>Stories must be complete and self contained with a beginning, a middle and an end.</li>
                <li>You may use OC characters BUT it still must adhere to the 2 PD character theme.</li>
              </ul>
            </li>
            <li><strong>Audience:</strong> PG to PG-13</li>
            <li>Head to <router-link :to="'/'">home</router-link> page to read the detailed submission guidelines or fill out the form below if you're ready!</li>
          </ul>
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
.content h3 {
  text-align: center;
}
</style>
