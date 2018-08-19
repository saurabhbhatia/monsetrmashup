<template>
  <div>
    <navbar></navbar>
    <div class="container">
      <div class="content is-large">
        <h1>Production Team</h1>
      </div>
      <div class="level">
        <div class="column is-one-third">
          <!-- card start-->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Eddy Hedington</p>
                  <p class="subtitle is-6">Creative Lead</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
        <div class="column is-one-third">
          <!-- card start-->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534648389/travis_dnwj7a.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Travis Alexander</p>
                  <p class="subtitle is-6">Creative Lead</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
        <div class="column is-one-third">
          <!-- card start-->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Rosa Devine</p>
                  <p class="subtitle is-6">Production Lead</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
      </div>
      <div class="level-left">
        <div class="column is-one-third">
          <!-- card start-->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534649614/angie_evklmf.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Angela Kern</p>
                  <p class="subtitle is-6">Lead Editor</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
        <div class="column is-one-third">
          <!-- card start-->
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="https://res.cloudinary.com/drg9hguhu/image/upload/v1534649016/68931_lhdswr.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-4">Saurabh Bhatia</p>
                  <p class="subtitle is-6">Web Designer</p>
                </div>
              </div>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
          <!-- card end -->
        </div>
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
.content h1 {
  text-align: center;
}
.image img {
  height: auto;
}
</style>
