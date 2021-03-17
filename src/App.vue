<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss"></style>

<script>
var vm;
export default{
  name: "App",
  data: () => ({
    //나중에 불러올 js파일 리스트
    js_list:[
      '/assets/js/jquery-2.2.4.min.js',
      '/assets/js/popper.min.js',
      '/assets/js/bootstrap.min.js',
      '/assets/js/menu.js',
      '/assets/js/jquery.waypoints.js',
      '/assets/js/progress-list.js',
      '/assets/js/section.js',
      '/assets/js/portfolio-filter.js',
      '/assets/js/slider-carousel.js',
      '/assets/js/mobile-menu.js',
      '/assets/js/mbclicker.min.js',
      '/assets/js/site-btn.js',
      '/assets/js/style-switcher.js',
    ],
  }),
  created(){},
  mounted(){
    vm = this;

    //페이지 로드후 js 파일들 로드
    vm.js_list.forEach((js)=>{
      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', js)
      document.body.appendChild(recaptchaScript)
    })
  }  
}
</script>