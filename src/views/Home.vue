<template>
  <div>
    <Header></Header>

    <div class="conts">
      안녕하세요<br />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  components: {
    Header
  }
};
</script>
