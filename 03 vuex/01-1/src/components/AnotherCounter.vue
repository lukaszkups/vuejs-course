<template>
    <div>
        <button class="btn btn-primary" @click="asyncIncrement({by: 50, duration: 500})">Increment</button>
        <button class="btn btn-primary" @click="asyncDecrement({by: 50, duration: 500})">Decrement</button>
    </div>
</template>

<script>
    // import { mapMutations } from 'vuex'; // mutations can be use for sync tasks, actions are used for async tasks
    import { mapActions } from 'vuex';


    export default {
        methods: {
            // ...mapMutations([ // execute mutations #2 example
            ...mapActions([
              'asyncIncrement',
              'asyncDecrement'
            ]),
            /*increment() {
                 // this.$store.state.counter++;
                 this.$store.commit('increment'); // execute mutations #1 example
            },
            decrement() {
                // this.$store.state.counter--;
                this.$store.commit('decrement');
            }*/
            // increment() {   // thanks to mapActions we have this method
            //     this.$store.dispatch('increment');
            // }
            /* increment(by) {   // example with param
                this.$store.dispatch('increment', by);
            } */
        }
    }
</script>
