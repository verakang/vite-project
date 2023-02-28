<template>
  <div class="py-3 bg-dark">
    <nav class="container text-white">
      <span class="h5 me-3 text-warning">這是後台頁面</span>
      <router-link to="/admin/products" class="link-light">產品列表</router-link> |
      <router-link to="/admin/orders" class="link-light">訂單</router-link> |
      <a href="#" @click.prevent="logout" class="me-3 link-light">登出</a>
      <router-link to="/" class="btn btn-outline-light">回到前台</router-link>
    </nav>
  </div>

  <div class="container py-3">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env
export default {
  components: {
    RouterView
  },
  methods: {
    logout () {
      document.cookie = `hexschool=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkLogin () {
      const url = `${VITE_APP_URL}v2/api/user/check`
      this.$http
        .post(url)
        .catch((err) => {
          alert(err.response.data.message)
          // 未登入則跳轉回登入頁
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.checkLogin()
  }
}
</script>
