<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            <span class="icon is-large">
              <i class="fa fa-heart" title="love"></i>
            </span>
          </h1>
        </div>
      </div>
    </section>
    <div class="container container-loves">
      <div class="columns">
        <div class="column is-one-third has-text-right">
          <h3 class="quarter">2017<br>Q2</h3>
        </div>
        <div class="column">
          <love :love="love" v-for="love in loves" :key="love.timestamp"/>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <div class="content has-text-centered">
          <p>
            <strong>Love</strong> by <a href="http://github.com/YujinGaya">Yujin Gaya</a>. <br>
            The source code is <a href="https://fedoraproject.org/wiki/Licensing/Beerware">Beerware</a>. <br>
            The website content is licensed <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">CC BY-NC-ND 4.0</a>.
          </p>
          <p>
            <a class="icon" href="https://github.com/YujinGaya/love">
              <i class="fa fa-github"></i>
            </a>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
function requireAll (requireContext) {
  return requireContext.keys().map(requireContext).reverse()
}
var loves = requireAll(require.context("../loves", false, /.json$/))
import Love from './Love.vue'
export default {
  name: 'app',
  data () {
    return {
      loves: loves
    }
  },
  components: {
    Love
  }
}
</script>

<style lang="scss">
@import url("https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
@import '~bulma/sass/utilities/initial-variables';

$blue: #72d0eb;

$primary: #f44336;
$primary-invert: whitesmoke;

@import '~bulma/bulma.sass';

.container-loves {
  padding: .75em;
  margin-bottom: 5em;
}

.quarter {
  font-size: 4em;
  line-height: 1;
  padding-top: 1rem;
}

@media (max-width: 768px) {
  .quarter {
    padding-top: .5rem;
  }
}

</style>
