import { Carousel, Slide } from 'vue-carousel'

export default {
  components: {
    Carousel,
    Slide
  },
  methods: {
    getImageUrl (x) {
      return `../../assets/images/${x}.jpg`
    }
  }
}
