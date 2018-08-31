<template>
  <div>
    <navbar></navbar>
    <carousel class="hero is-small"
      :autoplay="true"
      :navigationEnabled="true"
      :scrollPerPage="true"
      :perPage=1>
      <slide>
        <div class="content has-text-centered">
          <br/>
          <h1>Calling all Creators!</h1>
          <h1>Submissions open September 3rd 2018 &amp; close September 30th 2018</h1>
          <br/>
          <router-link :to="'/submission'" class="button is-black is-large">Make a submission</router-link>
          <br/>
          <h1>Or Read the Guidelines below.</h1>
        </div>
      </slide>
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
    </carousel>
    <div class="container">
      <div class="content is-medium ">
        <div class="has-text-centered">
          <h3>Submissions open September 3rd 2018 &amp; close September 30th 2018</h3>
          <router-link :to="'/submission'" class="button is-black is-large">Make a submission</router-link>
        </div>
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534653212/moster_logo_ver_2_png_qsrmlc.png">
        <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1533814926/moster_mash_up_promo_image_qwolgg.png">
        <br/><br/>
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
                  <li>Full bleeds are allowed, but keep the essentials within the live area.</li>
                  <li>Stories must be complete and self contained with a beginning, a middle and an end.</li>
                  <li>You may use OC characters BUT it still must adhere to the 2 PD character theme.</li>
                </ul>
                <div slot="content" class="has-text-centered">
                  <router-link :to="'/submission'" class="button center-button is-black is-large">Make a submission</router-link>
                </div>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Audience</h4>
              <p slot="content">PG to PG-13</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What is Public Domain ?</h4>
              <p slot="content">By definition, it is the state of belonging or being available to the public as a whole and therefore not subject to copyright. This encompasses a wide variety of mediums; books, comics, and movies are the main focus for this project.  Usually this pertains to any material made before copyright law was established in 1921, but there are many properties since 1921 whose copyrights have lapsed or were never established. This includes properties that are part of folklore and ancient legends (i.e. Greek mythology, spiritual text, fairy tales, etc.). Whether or not a property is public domain will be subject to research by the creator, with an assessment by the production team. I recommend starting up your research, as there are some amazing characters just waiting for the right creator.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What is the theme?</h4>
              <p slot="content">Sequential art using any monster or creature from the public domain encountering or assisting a character from a separate public domain. Monsters and creatures are open to interpretation. The monster does not need to be the villain of the story, nor does the story need a hero, just use a monster or creature to adhere to a common theme.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What do you mean by P.D. crossover?</h4>
              <p slot="content">ANYTHING in the public domain is open for use. Though this is a comic, we’re looking to use the entire spectrum of material in the public domain. We just ask that at least one of the characters be a monster or creature. Why? Because we thought “Monster Mash-Up” was a good title for a crossover anthology.No two stories in the anthology will have the same character. It can be expected that some submissions may duplicate characters.  The production team will go through all submissions and make our decisions on which story to ultimately use.  Having said that, you can submit multiple submissions so we can give everyone a chance. If you do so, I’d recommend submitting a second pitch with more obscure characters, as many of the more popular characters will likely be used.</p>
              <p slot="content">This project was initially created within a Facebook creators group called, “Panel to Panel --A comic writing group”. We felt it would be a good idea to start early with some of the production to use as examples, and to work out the creative process we hope to use.  As of now we have 19 teams established, with the creation process ranging from complete piece to finished script. Examples are shown on the website. We felt it important to show that we can deliver a product BEFORE we involved others. The down side to this is that some of the characters are already taken. The claimed characters are listed <a href="https://docs.google.com/document/d/10ABGUC6EV8Y1-irJElW2M7UZ1gR4yIDtESpW56viuYE/mobilebasic" target="blank">here.</a></p>
              <p slot="content">
                Don’t fret though; MANY great characters are still open. Here are some handy links for you to research characters in the public domain:
                <ul>
                  <li><a href="http://pdsh.wikia.com/wiki/Public_Domain_Super_Heroes" target="blank">Public domain Superheros</a></li>
                  <li><a href="http://pdsh.wikia.com/wiki/Category:Characters" target="blank">Public domain Characters</a></li>
                  <li><a href="http://free-universe.myartsonline.com/literature.html" target="blank">Famous Public Domain Characters</a></li>
                </ul>
              </p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What is the submission process - for scripts?</h4>
              <p slot="content">If your pitch has been accepted, you can start writing your script immediately. There will be a deadline implemented with the acceptance letter. The first deadline will only be for scripts. Late scripts will not be accepted and may be subject to removal from the project.  At that point the scripts will be reviewed, edited and cleared for illustration. You are more than welcome to start production early. However, a submitted completed script is not a guarantee for acceptance in the book. I do not foresee a situation where a script would be denied if it follows the criteria. We just feel the need to have the right to do so to ensure that the stories follow the common theme and produce the highest quality stories for the book. There will be a Facebook group for fellow anthology creators so PLEASE ask for advice and/or critiques amongst the team. We will create a welcoming space to facilitate creativity.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Once the script is written - what’s next?</h4>
              <p slot="content">There will then be a deadline for art, which will also be announced with the acceptance letter. We will ask that all original art be made in an 11 x 17 format to ensure quality. The delivered final will need to be on the U.S. standard; 300 dpi, CMYK tiff. We have decided to use the Ka-Blam template for production, which you can get here:</p>
              <p slot="content"><a href="https://ka-blam.com/main/standard-sized-page-template/" target="blank">Standard Sized page template</a></p>
              <p slot="content">There will be a “soft” deadline followed by a definitive deadline. Late submissions will not be accepted. Once again, feel free to involve your process with the Facebook group.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">How will the book get printed?</h4>
              <p slot="content">We plan to fund the book using Kickstarter. When successful, we plan to use the funds for printing, shipping costs and any supplemental expenses. The profits will be divided amongst the contributors.  If, God forbid, it isn’t successful, then we will either come together as a group and print it ourselves OR make the file accessible to print individually and solely do a digital release.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">What is the compensation model?</h4>
              <p slot="content">There is a dreaded term that is often attached to this…“Exposure” (*shudders*).  Although gaining exposure is important, we do NOT want to run a book in this manner.  Pending a successful Kickstarter campaign and once ALL the books have shipped, the profits will be divided up equally amongst the group according to the team’s produced page count.</p>
              <p slot="content">The more successful the campaign, the more money you will receive.  We feel by using this model, each group could potentially make more money than with just a flat pay out…potentially. If you are experienced with anthologies, you may already know that this isn’t always the case -- BUT, there is a major perk.</p>
              <p slot="content">Creators can buy books at cost plus shipping. Though it will be more work on our part, we are willing to do it for the group in the name of collaboration. Personally, we’re not in it for the money, but the experience. However, we completely understand the need to be compensated and  feel this is the most important part.  EVERYONE will have an equal opportunity to make money off of the books.</p>
              <p slot="content">So in the end, this model is for creators wanting to collaborate together to make a book for personal sales (i.e. conventions and/or online store).  We can’t possibly predict how much we could make from Kickstarter, so we cannot guarantee a substantial payout, but we do hope it’s the compensation you feel that you deserve. We are compelled to be 100 percent honest, but if everyone pitches in and does their part, rising tides raise all ships.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Sounds good…but how do I trust you’ll compensate accordingly?</h4>
              <p slot="content">We have a written contractual agreement that puts what I stated above in writing. It will also include the print rights with retained ownership by the author.  We’d much prefer to work on the honor system, but we wish to alleviate any worries. The contract isn’t so much for us to get what we want, but for you to get what you deserve.</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">So what does the production team get out of it for all the extra work?</h4>
              <p slot="content">Members of the team will be submitting work as well as putting together the book. As stated before, we are not in it for the money… but we too will want to be compensated, although our plan is to give the greatest portion to the creators. This is very important to us.</p>
              <p slot="content">The profits will be divided as such:</p>
              <ul>
                <li>75% - Creators</li>
                <li>10% - Creative leads (5% times 2)</li>
                <li>5% - Editor</li>
                <li>5% - Production lead</li>
                <li>3% - Cover Illustrator</li>
                <li>2% - Web Designer</li>
              </ul>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Can I be part of the production team?</h4>
              <p slot="content">We have a full team as is but will be happy to have anyone involved who wants to be. Just propose something you’d like to do. But be warned, it will be only for exposure (*shudders again*).</p>
            </accordion-item>
            <accordion-item>
              <h4 slot="title">Final thought</h4>
              <p slot="content">This is how we feel an anthology should be run. Everything out in the open and beneficial for everyone involved.  We’ll make ourselves available as much as possible and will ALWAYS be supportive collaborators. We truly hope you can agree and be part of this collective. This has the potential to be something really amazing.</p>
              <h3 slot="content">Now… Let’s make some comics!</h3>
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
  name: 'Guidelines',
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
