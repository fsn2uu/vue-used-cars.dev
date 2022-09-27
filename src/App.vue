<template>
  <nav class="relative container p-6">
    <div class="flex items-center justify-between">
      <div class="p-2">
        <img alt="Karl's Used Cars" :src="`${publicPath}assets/logo-new.svg`" />
        <p class="block">Karl's Used Cars</p>
      </div>
      <div class="hidden md:flex space-x-6">
        <router-link to="/">Home</router-link>
        <router-link to="/inventory">Inventory</router-link>
        <router-link to="/staff">Staff</router-link>
        <router-link to="/blog">Blog</router-link>
        <router-link to="/about">About</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
  <footer class="min-h-[25vh] w-full mt-10 flex justify-between px-3">
    <div class="p-5">
      <div class="">
        <router-link to="/" class="block">Home</router-link>
        <router-link to="/inventory" class="block">Inventory</router-link>
        <router-link to="/staff" class="block">Staff</router-link>
        <router-link to="/blog" class="block">Blog</router-link>
        <router-link to="/about" class="block">About</router-link>
      </div>
    </div>
    <div class="p-5">Test</div>
    <div class="p-5">
        <img alt="Karl's Used Cars" :src="`${publicPath}assets/logo-new.svg`" />
        <p class="block">Karl's Used Cars</p>
      </div>
  </footer>
</template>

<script>
  export default {
    data () {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
