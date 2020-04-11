<template>
  <div>
    <transition name="scroll-x-transition" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Tools"
};
</script>

<style scoped></style>
