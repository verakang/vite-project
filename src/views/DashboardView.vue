<template>
  <div class="py-3 bg-dark">
    <nav class="container text-white admin-nav">
      <span class="h5 me-3 text-warning">這是後台頁面</span>
      <router-link to="/admin/products">產品列表</router-link> |
      <router-link to="/admin/orders">訂單列表</router-link> |
      <router-link to="/admin/coupon">優惠券</router-link> |
      <a href="#" @click.prevent="logout" class="me-3">登出</a>
      <router-link to="/" class="btn btn-outline-light">回到前台</router-link>
    </nav>
  </div>

  <div class="container py-3">
    <RouterView v-if="status"></RouterView>
  </div>
</template>

<script>
import { RouterView } from 'vue-router'
const { VITE_APP_URL } = import.meta.env

export default {
  components: {
    RouterView
  },
  data () {
    return {
      status: false
    }
  },
  methods: {
    logout () {
      document.cookie = `hexschool=; expires=${new Date()}`
      this.$router.push('/login')
    },
    checkLogin () {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = token
      const url = `${VITE_APP_URL}v2/api/user/check`
      this.$http
        .post(url)
        .then((res) => {
          this.status = true
        })
        .catch((err) => {
          alert(err.response.data.message)
          // 未登入則跳轉回登入頁
          this.$router.push('/login')
        })
    }
  },
  mounted () {
    this.checkLogin()
  }
}
</script>
