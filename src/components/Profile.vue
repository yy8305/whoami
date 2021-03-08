<template>
  <!--상단 프로필 start-->
  <div
    class="main-header"
    style="background-image: url(/assets/images/img_avatar.jpg)"
  >
    <div class="container">
      <div class="row personal-profile">
        <div class="col-md-4 personal-profile__avatar">
          <img class="" src="/assets/images/img_avatar.jpg" alt="avatar" />
        </div>
        <div class="col-md-8">
          <p class="personal-profile__name">박홍철(Hong Cheol Park)_</p>
          <p class="personal-profile__work">Backend Developer</p>
          <div class="personal-profile__contacts">
            <dl class="contact-list contact-list__opacity-titles">
              <dt>Age:</dt>
              <dd>24</dd>
              <dt>Email:</dt>
              <dd><a href="mailto:mail@mail.com">yy8305@naver.com</a></dd>
            </dl>
          </div>
          <!-- 아이콘 start -->
          <!-- <p class="personal-profile__social">
                    <a href="" target="_blank"><i class="fa fa-github"></i></a>
                    <a href="" target="_blank"><i class="fa fa-linkedin-square"></i></a>
                    <a href="" target="_blank"><i class="fa fa-facebook-square"></i></a>
                    </p> -->
          <!-- 아이콘 end -->
        </div>
      </div>
    </div>
  </div>
  <!--상단 프로필 end-->
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
