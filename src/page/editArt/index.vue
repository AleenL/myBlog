<!-- created by allen in 2018-12-25 -->

<template>
  <div class="edit-art-page   flex flex_center_between">
    <div class="left-edit-window  flex flex_dir_cloumn">
      <div class="flex flex_end_start m_top_100">
        <p>标题：</p>
        <input  type="text" maxlength="22" v-model="artInfo.title" class=" h_20 w_200 p_left_10" placeholder="请输入标题">
      </div>
      <div class="flex flex_end_start m_top_12">
        <p>描述：</p>
        <input  type="text" maxlength="22" v-model="artInfo.artDec" class=" h_20 w_200 p_left_10" placeholder="请输入描述">
      </div>
      <div class="flex flex_end_start m_top_12">
        <p>类别：</p>
        <input  type="text" maxlength="22" v-model="artInfo.artCategory" class=" h_20 w_200 p_left_10" placeholder="请输入类别">
      </div>
      <div class="flex flex_end_start m_top_12">
        <p>类性：</p>
        <input  type="text" maxlength="22" v-model="artInfo.artStyle" class=" h_20 w_200 p_left_10" placeholder="请输入类型">
      </div>
      <div class="input-box m_top_12 w100 flex flex_start_start">
        <p>文字：</p>
        <textarea class=" word-input p_left_12 p_right_10 p_top_12 p_bottom_10 font_14" type="text" v-model="text"></textarea>
        <p class="next-button p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 m_left_10" @click="add">下一段</p>
      </div>
      <div class="m_top_12 w100 add-image-box flex flex_start_start">
        <p>文章首页图片：</p>
        <input @change="fileImage($event)" id="file-name" type="file" accept="image/jpeg,image/x-png,image/gif"  value="" />
      </div>
      <div class="flex flex_start_start m_top_12">
        <p>单张图片：</p>
        <div>
          <input @change="signImage($event)" id="art-image" type="file" accept="image/jpeg,image/x-png,image/gif"  value="" />
          <div class="flex flex_center_start h_40">
            <p class="m_right_12">是否有图片信息</p>
            <Elswitch :value="signValue" @switchBtn="switchSign"></Elswitch>
            <input :hidden="!signValue" type="text" maxlength="22" v-model="imageText" class="m_left_10 h_20 w_150 p_left_10" placeholder="请输入图片信息">
          </div>
          <p class="add-image-item p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 te_center" @click="addSignImage">确认添加</p>
        </div>
      </div>
      <div class="flex flex_start_start m_top_12 w100">
        <p>多张图片：</p>
        <div>
          <input @change="addListImage($event)" id="art-image-list" type="file" accept="image/jpeg,image/x-png,image/gif"  value="" />
          <div class="flex flex_center_start h_40">
            <p class="m_right_12">是否有图片信息</p>
            <Elswitch :value="lotsValue" @switchBtn="switchLots"></Elswitch>
            <input :hidden="!lotsValue" ref="clearFile"  type="text" maxlength="22" v-model="imageListText" class=" m_left_10 h_20 w_150 p_left_10" placeholder="请输入图片信息">
          </div>
          <div class="flex flex_center_between">
            <p class="add-image-item p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 te_center" @click="addNextImage">添加下一张图片</p>
            <p class="add-image-item p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 te_center" @click="sureAddListImage">确认添加</p>
          </div>

        </div>
      </div>
      <div class="flex flex_center_between m_top_12">
        <p class="add-image-item w_100 p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 te_center">确定</p>
        <p class="add-image-item w_100 p_left_10 p_right_10 h_30 li_he_30 bg_509ef7 color_ffffff border_ra_5 te_center">清空</p>
      </div>
    </div>
    <div class="right-show-window  p_left_10 p_right_10">
      <div class="m_top_100"></div>
      <p class="w100" style="word-wrap : break-word">{{JSON.stringify(artInfo)}}</p>
    </div>
  </div>
</template>

<script>

  import MySwitch from '../../components/switch'

  export default{
    name:'editArt',
    components:{
      Elswitch:MySwitch
    },
    data(){
      return{
        artContent:[],
        artInfo:{
          title:'',
          artStyle:'',
          artCategory:'',
          artDec:'',
          artTime:'',
          image:'',
          artContent:[]
        },
        imageText:'',
        listImageSrc:'',
        signImageSrc:'',
        imageListText:'',
        text:'',
        imageSrc:'',
        signValue:false,
        lotsValue:false,
        artTitle:'',
        artCategory:'',
        artStyle:'',
        artDec:'',
      }
    },
    methods:{
      add(){
        let tepArr = this.artInfo.artContent
        tepArr.push({text:this.text})
        this.artInfo.artContent = tepArr
        this.text = ''
      },
      switchSign(e){
        this.signValue = e
      },
      switchLots(e){
        this.lotsValue = e
      },
      fileImage(e){
        let files = document.getElementById('file-name').files[0]
        this.artInfo.image = this.getObjectURL(files)
      },
      signImage(){
        this.signImageSrc = ''
        let files = document.getElementById('art-image').files[0]
        this.signImageSrc = this.getObjectURL(files)
      },
      addSignImage(){
        if(!this.signImageSrc) return;
        let tepArr = this.artInfo.artContent
        let tepText = this.signValue&&this.imageText.length>0 ? {text:this.imageText,image:this.signImageSrc} : { image: this.signImageSrc }
        tepArr.push(tepText)
        this.artInfo.artContent = tepArr
      },
      addListImage(){
        this.listImageSrc = ''
        let files = document.getElementById('art-image-list').files[0]
        this.listImageSrc = this.getObjectURL(files)
      },
      addNextImage(){
        this.$refs.clearFile.value = '';
      },
      sureAddListImage(){

      },
      getObjectURL (file) {
        let url = null ;
        if (window.createObjectURL!=undefined) { // basic
          url = window.createObjectURL(file) ;
        }else if (window.webkitURL!=undefined) { // webkit or chrome
          url = window.webkitURL.createObjectURL(file) ;
        }else if (window.URL!=undefined) { // mozilla(firefox)
          url = window.URL.createObjectURL(file) ;
        }
        return url ;
      }
    },
  }
</script>

<style src="../../common.pcss"></style>
<style>
  .edit-art-page{
    height:100vh;
    overflow: hidden;
  }
.left-edit-window,.right-show-window{
  padding: 0 12px;
  width:50%;
  overflow-y: auto;
  flex:1;
  height:100%;
}
  .left-edit-window{
    border-right: 1px solid #707071;
  }

  .next-button{
    align-self: end;
  }

  .word-input{
    width:60%;
    height:120px;
    border-radius: 5px;
    outline: none;
    border: none;
    resize: none;
    background: #c5c5c5;
  }
</style>