<template>
  <div id="app">
    <div class="header-box">
      <div class="header-logo h_30 w100 bg_000000 te_right li_he_30 color_ffffff fo_we_500">
        <p class="m_right_30 ">Allen Blog</p>

      </div>
      <Box class="cover" :pose="isVisible ? 'isVisible' : 'hidden'">
        <div class="header-button-list h_50 font_14 color_ffffff p_left_20  flex ju_co_start al_it_center bg_222222"
             @mouseleave="animatehidden">
          <li class="p_left_20 point p_right_20 h_50 li_he_50 ov-hidden">
            <router-link tag='span' to="/">首页</router-link>
          </li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animateshow(0)">
            <router-link tag='span' to="artList">博客</router-link>
          </li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animateshow(1)">电影</li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animateshow(2)">音乐</li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animateshow(3)">游戏</li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animatehidden">
            <router-link tag='span' to="editArt">编辑</router-link>
          </li>
          <li class="p_left_20 point p_right_20 h_50 li_he_50 hover ov-hidden" @mouseenter="animateshow(4)">About Me™️
          </li>
        </div>
        <div class="box  h_140 flex ju_co_around al_it_center" @mouseenter="animateshow(chooseIndex)"
             @mouseleave="animatehidden">
          <li v-for="item in iconArr[chooseIndex]"
              class="w_150 hoverBig point flex al_it_center ju_co_start flex_dir_cloumn">
            <img class="w_40 h_50" :src="item.image"/>
            <p class="title font_12 color_ffffff fo_we_500">{{item.title}}</p>
          </li>
        </div>
      </Box>
    </div>
    <router-view/>
  </div>
</template>

<script>
  import posed from 'vue-pose'

export default {
  name: 'App',
  components:{
    Box: posed.div({
      isVisible: {height: 190, transition: {duration: 800}},
      hidden: {height: 50, transition: {duration: 800}}
    }),
  },
  data(){
    return{
      screenWidth: document.body.clientWidth,
      isVisible: false,
      chooseIndex:0,
      iconArr: [
        [
          {title: '技术栈', image: require('./assets/icon/vrglass.png')},
          {title: '杂谈', image: require('./assets/icon/zatan.png')},
          {title: '小说', image: require('./assets/icon/book.png')}
        ],
        [
          {title: '海报', image: require('./assets/icon/image.png')},
          {title: '资讯', image: require('./assets/icon/movie_show.png')},
          {title: '新片预告', image: require('./assets/icon/movie_icon.png')}
        ],
        [
          {title: '播放器', image: require('./assets/icon/music.png')},
          {title: '歌单', image: require('./assets/icon/music_list.png')}
        ],
        [
          {title: 'xbox one x', image: require('./assets/icon/xbox.png')},
          {title: 'Playstation4', image: require('./assets/icon/PS4.png')},
          {title: 'Switch', image: require('./assets/icon/switch.png')}
        ],
        [
          {title: 'Content Me', image: require('./assets/icon/my_message.png')},
          {title: 'About Me', image: require('./assets/icon/mine_active.png')}
        ]
      ],
    }
  },
  methods: {
    animateshow(index) {
      this.chooseIndex = index
      this.isVisible = true
    },
    animatehidden() {
      this.isVisible = false
    }
  },
}
</script>

<style src="./common.pcss" scoped></style>
<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
  li {
    list-style: none;
  }

  .header-box{
    position: fixed;
    top:0;
    width:100%;
    z-index:11;
  }

  .hover:hover {
    background: #4b9cfa;
  }

  .box {
    width: 100%;
    background: #4b9cfa;
  }

  .cover {
    width: 100%;
    overflow: hidden;
    position: absolute;
    z-index: 10;
  }

  .hoverBig:hover {
    transform: scale(1.2);
    transition: all .3s ease;
  }

  .hoverBig:hover > .title {
    color: #4c85f4
  }

  .show-list{
    height:2000px;
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
