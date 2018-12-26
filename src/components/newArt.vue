<!-- created by allen in 2018-12-21 -->

<template>
  <div class="newArt-page w100 flex flex_center_center m_top_30 m_bottom_30">
    <div v-show="screenWidth>1000" class="show-box h_140 border_ra_5 flex_center_between flex ov-hidden">
      <div class="image-cover h_140" :style="{backgroundImage:'url('+image+')'}"></div>
      <div class="new-art-title h_140 p_left_10 p_top_10 po_relative">
        <p class="font_18 fo_we_600 color_222222">{{title}}</p>
        <p class="font_12 color_a9a9a9 p_top_12">{{describe}}</p>
        <p class="font_12 color_a9a9a9 time po_absoult">{{time}}</p>
      </div>
    </div>
    <div v-show="screenWidth<1000" class="show-box h_140 border_ra_5 h_200 flex flex_dir_cloumn ov-hidden">
      <div class="image-cover-mobile h_140 w100" :style="{backgroundImage:'url('+image+')'}"></div>
      <div class="new-art-titles h_100 p_left_10 p_top_10 po_relative">
        <p class="font_18 fo_we_600 color_222222">{{title}}</p>
        <p class="font_12 color_a9a9a9 ">{{describe}}</p>
        <p class="font_12 color_a9a9a9 p_top_5">{{time}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:'NewArt',
    props:{
      image:{
        Type:String,
        default:require("../assets/icon/newArt.png")
      },
      title:{
        Type:String,
        default:'React 与 Vue 之争'
      },
      describe:{
        Type:String,
        default:'也许我们还有第三种选择？'
      },
      time:{
        Type:String,
        default:'2018-12-25'
      },
      screenWidth:{
        Type:Number,
        default:1920
      }
    }
  }
</script>

<style src="../common.pcss"></style>
<style lang="pcss" scoped>
.show-box{
  width:100%;
  border:1px solid #ccc;
}
  .image-cover{
    width:65%;
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .image-cover-mobile{
    background-size:cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  .new-art-title{
    width:35%;
  }
  .time{
    bottom:20px;
  }
</style>