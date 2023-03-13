<template>
  <div class="py-3 bg-dark">
    <nav class="container text-white front-nav">
      <span class="h5 me-3 text-info">這是前台頁面</span>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/products">產品列表</router-link> |
      <router-link to="/cart">購物車</router-link> |
      <router-link to="/login" class="me-3">登入</router-link>
      <router-link to="/admin/products" class="btn btn-outline-light">後台管理頁面</router-link>
    </nav>
  </div>

  <div class="container py-3">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>
