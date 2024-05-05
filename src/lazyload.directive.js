import { createApp } from 'vue'
import VueLazyload from 'vue-lazyload'

const lazyloadDirective = {
  install(app) {
    app.directive('lazyload', VueLazyload)
  }
}

const app = createApp({})
app.use(lazyloadDirective)

export default lazyloadDirective
