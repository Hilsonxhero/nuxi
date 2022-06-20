// import Vue from 'vue'
// import VueVideoPlayer from 'vue-video-player'

import 'video.js/dist/video-js.css'

// Vue.use(VueVideoPlayer, /* {

// } */)

// Vue.component('videoPlayer', VueVideoPlayer)

// export default  VueVideoPlayer


import Vue from 'vue'

import VueVideoPlayer from 'vue-video-player'
import 'videojs-flash'
import 'videojs-contrib-hls/dist/videojs-contrib-hls'
Vue.use(VueVideoPlayer)
