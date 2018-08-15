<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content is-medium ">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533815233/monster_logo_jtpxfi.png">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533814926/moster_mash_up_promo_image_qwolgg.png">
        <br/>
        <accordion
        :dropdown="true"
        :icon="'caret'"
        :caretAnimation="{
            duration: '.2s',
            timerFunc: 'ease-in-out',
        }"
        :slide="{
            duration: '.5s',
            timerFunc: 'ease',
        }"
        > <!-- The wrapper component for all the items -->
            <accordion-item>
                <h4 slot="title">The Premise</h4>
                <p slot="content">A comic anthology using characters and settings from the public domain. Each story will be a crossing of two separate public domain characters.</p>
            </accordion-item> <!-- add as many of these items as you need - fill them with content via the slots -->
            <accordion-item>
                <h4 slot="title">The Theme</h4>
                <p slot="content">Monsters and creatures from the public domain.</p>
            </accordion-item>
            <accordion-item>
                <h4 slot="title">How / What to Submit?</h4>
                <ul slot="content">
                  <li>1-8 pages</li>
                  <li>U.S. Standard format (6.75 x 10.25)</li>
                  <li>1-8 pages</li>
                  <li>CMYK 300 dpi</li>
                  <li>Full Color/Black and White</li>
                  <li>NO 2 page spreads</li>
                  <li>White gutters/margins</li>
                  <li>Full bleeds are allowed, but keep the essentials within the live area.</li>
                </ul>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Audience</h4>
              <p slot="content">PG to PG-13</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What is Public Domain ?</h4>
              <p slot="content">By definition, it is the state of belonging or being available to the public as a whole and therefore not subject to copyright. This encompasses a wide variety of mediums; books, comics, and movies are the main focus for this project.  Usually this pertains to any material made before copyright law was established in 1921, but there are many properties since 1921 whose copyrights have lapsed or were never established. This includes properties that are part of folklore and ancient legends (i.e. Greek mythology, spiritual text, fairy tales, etc.). Whether or not a property is public domain will be subject to research by the creator, with an assessment by the production team. I recommend starting up your research, as there are some amazing characters just waiting for the right creator.</p>
            </accordion-item>
        </accordion>
      </div>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'

export default {
  name: 'Guidelines',
  components: {
    'navbar': NavBar,
    'site-footer': Footer,
    'accordion': BulmaAccordion,
    'accordion-item': BulmaAccordionItem
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
.content .is-medium {
  font-size: 1.1rem;
}
</style>
