<template>
  <div class="flex flex-col min-h-screen font-Poppins bg-weather-secondary">
    <Navbar />
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
</script>

<style lang="scss" scoped></style>
