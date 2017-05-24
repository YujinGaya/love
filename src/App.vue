<template>
  <div id="app">
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">
            럽
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
          <love :love="love" v-for="love in loves"/>
        </div>
      </div>
    </div>
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
@import '~bulma/sass/utilities/initial-variables';

$blue: #72d0eb;

$primary: #f44336;
$primary-invert: whitesmoke;

@import '~bulma/bulma.sass';

.container-loves {
  padding: .75em
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
