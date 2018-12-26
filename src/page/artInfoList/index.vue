<!-- created by allen in 2018-12-24 -->

<template>
  <div class="art-list-page m_top_80">
    <div class="backGround w100"   :style="{backgroundImage:'url('+artInfo.image+')',height:parseInt(screenWidth/3)+'px'}">
      <div class="backGround-center flex flex_center_center flex_dir_cloumn po_relative ">
        <div :style="{backgroundImage:'url('+artInfo.image+')'}" class="center-image flex flex_center_start flex_dir_cloumn po_absoult " alt=""></div>
        <div class="po_absoult title-info po_absoult flex flex_center_center flex_dir_cloumn te_center">
          <p class="color_ffffff font_24 fo_we_700 li_he_40">{{artInfo.title}}</p>
          <p class="color_ffffff font_14 m_bottom_20 li_he_20">{{artInfo.dec}}</p>
          <p class="color_ffffff font_14 ">{{dateFormat(parseInt(artInfo.time))}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {dateFormat} from "../../router/util";

  export default{
    name:'artInfo',
    data(){
      return {
        screenWidth: document.body.clientWidth,
        artInfo:{
          image: require('../../assets/goods/art_05.jpg'),
          time: '1545214977902',
          title: '蜘蛛侠：平行宇宙 将于2018年12月23日上映',
          artStyle: '电影',
          dec: '考验你是不是真正的蜘蛛侠的时刻到了',
          style: '技术栈',
          content:[

          ]
        }
      }
    },
    methods:{
      dateFormat(index){
        return dateFormat(index)
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

<style src="../../common.pcss"></style>
<style scoped>
  .backGround{
    background-repeat: revert;
    background-size:50% 80%;
    background-attachment: fixed;
    background-position: center;
  }
  .center-image{
    width:65%;
    height:100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    filter: brightness(0.8);
    z-index: 0;

  }
  .backGround-center{
    height:100%;
    background: rgba(0,0,0,.6);
  }

  .title-info{
    top:20%;
  }
</style>