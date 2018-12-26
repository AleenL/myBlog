<!-- created by allen in 2018/12/20 -->

<template>
  <div class="carousel-wrap po_relative w100 ov-hidden " :style="{height:height+'px'}" id="carousel" @mouseenter="stop" @mouseleave="play">
    <div class="carousel-btn">
      <div class="point left-btn side-btn w_60 h100 po_absoult flex flex_center_center" @click="pre">
        <i class="iconfont font_40">&#xe635;</i>
      </div>
      <div class="point right-btn side-btn w_60 h100 po_absoult flex flex_center_center" @click="next">
        <i class="iconfont font_40">&#xe636;</i>
      </div>
    </div>
    <transition-group tag="ul" class='slide-ul w100 h100' name="list" autoplay="false" :leave-active-class="isNext?'list-leave-active-next':'list-leave-active-pre'" :enter-class="isNext?'list-enter-next':'list-enter-pre'" >
      <li v-for="(list,index) in imageList" :key="index+'image'" v-show="index===currentIndex"  class="w100 h100 po_absoult">
        <div class="cover hover po_absoult w100 h100"></div>
          <div class="w100 h100 carousel-image" :style="{backgroundImage:'url('+list.image+')'}" />
      </li>
    </transition-group>
    <div class="bottom-btn-list po_absoult w_100  flex flex_center_between">
      <li class="point-bottom" v-for="item,ind in imageList" @click="pointBtn(ind)" :key="'item'+ind" :class="currentIndex == ind ? 'point-hover' : ''"></li>
    </div>
  </div>
</template>


<script>

  export default {
    name: 'carousel',
    props:{
      imageList:{
        type:Array,
        default:[
          {
            "clickUrl": "#",
            "desc": "nhwc",
            "image": "http://dummyimage.com/1745x492/f1d65b"
          }]
      },
      auto:{
        Type:Boolean,
        default:false,
      },
      height:{
        type:String,
        default:"435"
      }
    },
    data: () => ({
      currentIndex: 0,
      timer: '',
      isNext:true,
    }),
    methods: {
      play(){
        if(!this.auto) return;
        clearInterval(this.timer)
        this.timer = setInterval(()=>{
          this.next()
        },5000)
      },
      stop(){
        if(!this.auto) return;
        clearInterval(this.timer)
      },
      next(){
        this.currentIndex ++
        this.isNext = true
        if(this.currentIndex > this.imageList.length - 1 ){
          this.currentIndex = 0
        }
      },
      pre(){
        this.currentIndex --
        this.isNext = false
        if(this.currentIndex < 0){
          this.currentIndex = this.imageList.length - 1
        }
      },
      pointBtn(index){
        this.currentIndex > index ? this.isNext = false : this.isNext = true;
        this.currentIndex = index
      }
    },
    created(){
      if(!this.auto) return;
      clearInterval(this.timer)
      this.timer = setInterval(()=>{
        this.next()
      },5000)
    }
  }
</script>

<style src="../common.pcss" scoped></style>
<style lang="pcss" scoped>

  li {
    list-style: none;
  }

  .cover{

    z-index: 8;
    top:0;
  }

  /*.hover:hover + img{*/
    /*transform: scale(1.2);*/
    /*transition: transform .8s ;*/
  /*}*/

  .list-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }


  .list-enter-next {
    transform: translateX(100%)
  }
  .list-enter-pre {
    transform: translateX(-100%)
  }

  .list-leave-active-next {
    transition: all 1s ease;
    transform: translateX(-100%)
  }
  .list-leave-active-pre {
    transition: all 1s ease;
    transform: translateX(100%)
  }


  .list-leave {
    transform: translateX(0)
  }

  .next{
    top:35%;
    right:2%;
    z-index: 9;

  }

  .pre{
    top:35%;
    left:2%;
    z-index: 9;
  }
  .point-bottom{
    width:8px;
    height:8px;
    border-radius: 5px;
    border: 1px solid #fff;
  }
  .point-hover{
    background: #fff;
  }

  .carousel-wrap:hover > .carousel-btn{
    opacity: 1;
  }

  .carousel-btn{
    opacity: 0;
  }



  .side-btn{
    color:rgba(255,255,255,.4);
    z-index:10;
  }
  .right-btn{
    right:0px;
  }
  .left-btn{
    left:0px;
  }

  .right-btn:hover,.left-btn:hover{
    color:#fff;
  }


  .bottom-btn-list{
    z-index: 10;
    bottom:5%;
    left:50%;
    margin-left: -50px;
  }

  .carousel-image{
    background-size:contain;
    background-repeat: no-repeat;
    background-attachment:fixed;
    background-position: 25% 15%;
  }

</style>