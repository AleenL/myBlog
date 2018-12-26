<!--created by allen in 2018/12/20 -->

<template>
  <div class="main-wrapper ">
    <div class="carousel-content m_top_80">
      <Carousel auto="true" v-bind:imageList="imageList" :height="parseInt(screenWidth/3)+''"></Carousel>
    </div>
    <div class="center-content">
      <NewArt :screenWidth="screenWidth"></NewArt>
      <div class="flex flex_center_between flex_wrap" :class="[screenWidth>1000 ? 'flex_dir_row' : 'flex_dir_cloumn']">
        <ArtItem v-for="item,index in infoList"  :height="screenWidth>1000 ? index < 2 ? '300' : '200' : screenWidth/2" :width="screenWidth>1000 ? index < 2 ? '49%' : '32%' : '100%' "  :time="dateFormats(parseInt(item.time))" :styleInfo="item.style" :image="item.image" :title="item.title" :dec="item.dec"  :artStyle="item.artStyle"></ArtItem>
      </div>
      <p v-if="hasMore" class="more-button te_center h_30 li_he_30 color_666666 point" @click="getMore">更多</p>
    </div>
    <div class="bottom-content h_250 bg_717071  po_relative">
      <div class="w_150 h_70 logo-show flex flex_center_center font_16 color_666666 fo_we_700">
        Allen Blog
      </div>
      <p class="te_center m_top_12 color_bfbfbf font_18 fo_we_700">特别鸣谢</p>
      <div class="logo-list flex flex_center_between flex_dir_row  flex_wrap po_relative">
        <img v-for="item,index in logo"  :style="{width:screenWidth>1000?'20%':'50%'}" :key="'logo'+index" v-lazy="item" class="m_top_12" alt="">
      </div>
      <p class="te_center bottom-text w100   color_bfbfbf font_14 fo_we_700 po_absoult">All Right Reserved 2018-2019 SlicentHill 渝ICP备18007352号-1</p>
    </div>
    <p v-if="scrollHeight>200" class="toTop po_fixed p_left_12 p_right_12 h_30 li_he_30 point bg_ffffff color_666666" @click="goTop">Top</p>
  </div>
</template>

<script>
  import Carousel from '../components/carousel.vue'
  import NewArt from '../components/newArt'
  import ArtItem from '../components/artItem'
  import { infoList } from './infoList'
  import { dateFormatNoTime } from "../router/util";

  export default {
    name: 'Index',
    data() {
      return {
        hasMore:true,
        page:0,
        timer2:null,
        timer:null,
        isVisible: false,
        scrollHeight:document.documentElement.scrollTop,
        screenWidth: document.body.clientWidth,
        infoList:infoList[0],
        oldInfoList:infoList,
        imageList: [
          {
            "clickUrl": "#",
            "desc": "nhwc",
            "image": require('../assets/icon/banner_03.png')
          },
          {
            "clickUrl": "#",
            "desc": "hxrj",
            "image": require('../assets/icon/banner_02.png')
          },
          {
            "clickUrl": "#",
            "desc": "rsdh",
            "image": require('../assets/icon/banner_01.png')
          }
        ],
        logo:[require('../assets/logo/logo_01.png'),require('../assets/logo/logo_02.png'),require('../assets/logo/logo_03.png'),require('../assets/logo/logo_04.png')]
      }
    },
    components: {
      Carousel: Carousel,
      NewArt: NewArt,
      ArtItem:ArtItem
    },
    methods: {
      animateshow(index) {
        this.chooseIndex = index
        this.isVisible = true
      },
      animatehidden() {
        this.isVisible = false
      },
      dateFormats(index) {
        return dateFormatNoTime(index)
      },
      goTop(){
        this.timer2 = setInterval(()=>{
          document.body.scrollTop = document.body.scrollTop - 40
          document.documentElement.scrollTop = document.documentElement.scrollTop - 40
          if(document.documentElement.scrollTop == 0){
            clearInterval(this.timer2)
          }
        },10)
      },
      scrollToTop(){
        this.scrollHeight = document.documentElement.scrollTop
      },
      getMore(){
        this.page ++
        this.infoList = this.infoList.concat(this.oldInfoList[this.page])
        if(!this.oldInfoList[this.page+1]){
          this.hasMore = false
          return false;
        }
      }
    },
    mounted() {
      const that = this
      window.addEventListener('scroll', this.scrollToTop)
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          that.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth(val) {
        if (!this.timer) {
          this.screenWidth = val
          this.timer = true
          let that = this
          setTimeout(function () {
            that.timer = false
          }, 400)
        }
      }
    }
  }
</script>

<style src="../common.pcss" scoped></style>
<style scoped>
  li {
    list-style: none;
  }

  .center-content{
    margin: 0 auto;
    width:80%;
  }

  .toTop{
    bottom:20px;
    right:20px;
    border: 1px solid #cccccc;
    z-index: 99;
  }

  .logo-show{
    border-top:1px solid #717071;
    background-color: #ffffff;
    border-radius:0 0 200px 200px ;
    margin: 0 auto;
  }

  .logo-list{
    width:70%;
    margin: 10px auto 10px auto;
  }
  .logo-list img{
    width:20%;
  }
  .bottom-text{
    bottom:10px;
    z-index:9;
  }
  .more-button{
    border:1px solid #707071;
    width:60px;
    margin: 0 auto 24px auto;
  }
</style>