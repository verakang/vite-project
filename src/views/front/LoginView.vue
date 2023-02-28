<template>
  <div class="container">
    <div class="row justify-content-center">
        <h2 class="mb-3 my-4 font-weight-normal">
            登入會員
        </h2>
        <div class="col-8">
            <form id="form" class="form-signin">
              <div class="form-floating mb-3">
                <input type="email" v-model="user.username" class="form-control" id="username"
                  placeholder="name@example.com" required autofocus>
                <label for="username">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" v-model="user.password" class="form-control" id="password"
                    placeholder="Password" required>
                <label for="password">Password</label>
              </div>
                <button class="btn btn-lg btn-primary w-100 mt-3" type="button" @click="login">
                  登入
                </button>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL } = import.meta.env
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      const url = `${VITE_APP_URL}v2/admin/signin`
      this.$http
        .post(url, this.user)
        .then((res) => {
          const { expired, token } = res.data
          document.cookie = `hexschool=${token}; expires=${new Date(expired)}`
          this.$router.push('/admin/products')
        })
        .catch((err) => {
          alert(err.response.data.message)
          this.user = {}
        })
    }
  }
}
</script>
