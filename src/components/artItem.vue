<!-- created by allen in 2018-12-21 -->

<template>
  <div class="art-item m_bottom_30" :style="{width:width}">
    <div class="art-info h_20 w100 flex flex_center_between">
      <p class="font_12 color_666666">{{time}}</p>
      <p class="font_12 color_666666 fo_we_700">{{artStyle}}</p>
    </div>
    <div class="art-image w100 ov-hidden po_relative" :style="{height:height+'px'}" @mouseenter="show" @mouseleave="hiddens">
      <Box class="cover w100 h100" :pose="isVisible ? 'isVisible' : 'hidden'">
        <img class="w100 h100 artImg" v-lazy="imageSrc"/>
      </Box>
      <Box2 class="cover-over flex flex_center_center color_ffffff  po_absoult" :pose="isCover  ? 'isVisible' : 'hidden'">
        <p class='font_16 color_ffffff fo_we_700'>{{ artStyle }} - {{ styleInfo }}</p>
      </Box2>
    </div>
    <p class="title w100 font_14 p_left_12 color_333333  fo_we_500">{{title}}</p>
    <p class="disc font_12 color_666666 h_30 ov-hidden ">{{dec}}</p>
  </div>
</template>

<script>
  import posed from 'vue-pose'

  export default {
    name: 'ArtTime',
    props: {
      width: {
        Type: String,
        default: '50%'
      },
      styleInfo:{
        Type: String,
        default: '技术栈'
      },
      height: {
        Type: String,
        default: '300'
      },
      time: {
        Type: String,
        default: '2018-09-11'
      },
      title: {
        Type: String,
        default: '聊一聊前端未来的发展',
      },
      artStyle: {
        Type: String,
        default: '博客'
      },
      dec: {
        Type: String,
        default: '也许我们不该把技能点点在一个地方'
      },
      image: {
        Type: Array,
        default: require('../assets/icon/banner_01.png')
      }
    },
    data() {
      return {
        isVisible: false,
        isCover:false,
        imageSrc:this.image
      }
    },
    components: {
      Box: posed.div({
        isVisible: {transform: 'scale(1.05)'},
        hidden: {transform: 'scale(1)'}
      }),
      Box2: posed.div({
        isVisible: {opacity:.9},
        hidden: {opacity:0}
      })
    },
    methods: {
      show() {
        this.isVisible = true
        this.isCover = true
      },
      hiddens() {
        this.isVisible = false
        this.isCover = false
      }
    }
  }
</script>

<style src="../common.pcss"></style>
<style lang="pcss" scoped>
  .artImg {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  .title {
    border-left: 5px solid #509ef7;
    margin: 6px 0;
  }

  .cover-over{
    width: 100%;
    height:100%;
    top:0;
    left:0;
    opacity: 0;
    background: #509ef7;
  }
</style>