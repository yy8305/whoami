<template>
  <header class="header">
    <div class="menu">
      <div class="container">
        <div class="row">
          <div class="menu__wrapper d-none d-lg-block col-md-12">
            <nav class="">
              <ul>
                <li><a href="#hello">자기소개</a></li>
                <li><a href="#career">경력사항</a></li>
                <li><a href="#resume">보유기술</a></li>
                <li><a href="#portfolio">개인 프로젝트</a></li>
              </ul>
            </nav>
          </div>
          <div class="menu__wrapper col-md-12 d-lg-none">
            <button type="button" class="menu__mobile-button">
              <span>
                <font-awesome-icon :icon="['fas','bars']"/>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>
