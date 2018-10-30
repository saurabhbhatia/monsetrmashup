<template>
  <div>
    <navbar></navbar>
    <!-- <carousel class="hero is-small"
      :autoplay="true"
      :navigationEnabled="true"
      :scrollPerPage="true"
      :perPage=1>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708867/Layer_8_wchqev.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708877/Layer_9_gc9hd6.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708877/Layer_2_fy80nz.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708883/Layer_3_fwxqfq.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708889/Layer_6_lyqjnl.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708893/Layer_4_bvxgc9.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708906/Layer_13_vkqp9n.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708923/Layer_14_srujuy.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708937/Layer_5_cgb9xw.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708942/Layer_17_b9jmfb.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708945/Layer_12_pr5t78.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708955/Layer_11_easvad.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708956/Layer_15_brtjth.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708963/Layer_1_qcyk4t.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708964/Layer_16_g1twat.png">
      </slide>
      <slide>
        <img class="slide" src="https://res.cloudinary.com/drg9hguhu/image/upload/v1535708972/Layer_18_mtkdvb.png">
      </slide>
    </carousel> -->
    <div class="container">
      <div class="content is-medium ">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534653212/moster_logo_ver_2_png_qsrmlc.png">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1540465208/moster-promo-IN-PRODUCTION_wiu9w5.png">
        <br/><br/>
        <p><b>Open call is closed at this time.If you've made a submission, you will be receiving an email soon. Any and all quenstions must be sent <a href="mailto:gritcitycomics@gmail.com?subject=Question">here</a>.</b></p>
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
                <h4 slot="title">Submission Specs</h4>
                <ul slot="content">
                  <li>1-8 pages</li>
                  <li>U.S. Standard format (6.75 x 10.25). Check the template <a href="https://ka-blam.com/main/standard-sized-page-template/" target="blank">here</a>.</li>
                  <!-- <li>1-8 pages</li> -->
                  <li>CMYK 300 dpi TIFF files.</li>
                  <li>Full Color/Black and White</li>
                  <li>NO 2 page spreads</li>
                  <li>Full bleeds are allowed, but keep the essentials within the live area.</li>
                  <li>Title and credits need to be applied to the art within the story. Up to creator discretion where it is placed.</li>
                  <li>PG-13-Keep gore and sexual suggestions to an absolute minimum. NO cussing.</li>
                  <li>Please respect all deadlines. We gladly welcome early submissions.</li>
                  <li>All files will be sent via Dropbox link.</li>
                </ul>
                <div slot="content" class="has-text-centered">
                  <a class="button center-button is-black is-large" href="mailto:gritcitycomics@gmail.com?subject=Submission">Make a submission</a>
                </div>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Requests</h4>
              <ul slot="content">
                <li>NO cliffhangers or callbacks. Must be self-contained and have a well-defined ending.</li>
                <li>Do not add other public domain characters unless you have asked for approval prior as not to encroach on other's characters.</li>
                <li>Only do digital lettering. We’d like to be able to request changes if needed.</li>
                <li>Lettering will be held to a high standard. We will be sticklers for quality lettering.</li>
                <!-- <li>Please do all original art in the 11x17 format BEFORE you scale down to the U.S. Standard submission.</li> -->
                <li>Be open to suggestions made by the production team, editor and the creative community.</li>
              </ul>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Submission timeline</h4>
              <p slot="content">These plans are at an expedited pace as to kept a strong momentum going throughout. We hope everyone can agree to this schedule. Contact us directly if this schedule does not line up with your abilities. Help will always be considered.</p>
              <ul slot="content">
                <li><strong>October 31</strong> - Acceptance emails sent.</li>
                <li><strong>November 1</strong> - Preproduction starts. <p>Start writing comic scripts with your two chosen characters. You are welcome to start initial rough art and layouts BUT please be able to make changes if needed.</p></li>
                <li><strong>December 1</strong> - First Drafts turned in for review.</li>
                <li><strong>December 1 through December 30</strong> - Editing and rewrites. <p>During this month, we will review the scripts,provide edits and make suggestions. Once you get a final draft approved, you can start production.</p></li>
                <li><strong>January 1</strong> - Final Scripts deadline. <p>The final version of your script will be turned in. Grammar and misspellings will still be reviewed by the editor BUT the art production will commence with this version of the script.</p></li>
                <li><strong>January 1</strong> - Art Production will begin. <p>The artist can officially begin production. Letters will hold off until editor has delivered final edits.</p></li>
                <li><strong>March 1</strong> - Show current progress <p> show us your current process unless you have already been keeping us up to date on the Facebook group, which we recommend. We just need to know that the art is on track and the lettering is  acceptable.</p></li>
                <li><strong>April 1</strong> - Soft deadline for Final Art <p>We’d  like  to  see  all  final  art  delivered  by  this  date.  We  will  give  a  month  to  make  any  adjustments  or  future  edits  before  a  definitive  final  will  be  delivered. </p></li>
                <li><strong>May 1</strong> - FINAL ART DEADLINE <p>Final art will be delivered by this date. Any errors after this point will be denied entry.</p></li>
                <li><strong>August-September</strong> - Kickstarter Campaign <p>Depending on when we can have everything ready, we hope to begin the Kickstarter around August/September.</p></li>
              </ul>
            </accordion-item>
        </accordion>
      </div>
    </div>
    <br/>
    <site-footer></site-footer>
  </div>
</template>

<script>
import NavBar from '../components/shared/NavBar'
import Footer from '../components/shared/Footer'
import { BulmaAccordion, BulmaAccordionItem } from 'vue-bulma-accordion'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'InProduction',
  components: {
    'navbar': NavBar,
    'site-footer': Footer,
    'accordion': BulmaAccordion,
    'accordion-item': BulmaAccordionItem,
    'carousel': Carousel,
    'slide': Slide
  },
  mounted () {
    setTimeout(() => {
      this.slides = [
        { background: 'url(https://res.cloudinary.com/drg9hguhu/image/upload/c_fill,h_300,w_1100/v1535407983/cropped_image_zv68uh.png)', width: '100%', height: '100%' },
        { background: 'url(https://res.cloudinary.com/drg9hguhu/image/upload/c_fill,h_300,w_1500/v1534646514/SlaveGirlComics02027_mfw0dp.jpg)', width: '100%', height: '100%' }
      ]
    }, 1000)
  },
  data () {
    return {
      slides: []
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
.card-header-title {
  margin-bottom: none;
}
.slide {
  width: 100%;
}
.center-button {
  text-align: center;
}
</style>
