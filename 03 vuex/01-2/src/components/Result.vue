<template>
  <div>
    <!-- <p>Counter is: {{ counter }}</p> -->
    <p>Counter is: {{ doubleCounter }}</p>
    <!-- <p>Number of clicks: {{ clicks }}</p> -->
    <p>Number of clicks: {{ stringCounter }}</p>
  </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters([
          'doubleCounter',
          'stringCounter'
        ]) 
        
        // IMPORTANT!
        // we can also mix mapGetters with other custom computed properties thanks to ES6!
        // to use `...` operator we have to install via npm `babel-preset-stage-2` (--save-dev) and add preset to .babelrc file: `["stage-2"]`

        /* computed: {
          ...mapGetters({   // these three dots spread this object directly to computed object as a key-value properties
            'doubleCounter',
            'stringCounter'
          }),
          ourOwnCustomComputedProperty() {
            // code here
          }
        
        }*/




        /*{
          counter() {
            return this.$store.getters.doubleCounter;
          },
          clicks() {
            return this.$store.getters.stringCounter;
          }
        }*/
    }
</script>
