<template>
  <h2 class="my-4">產品列表</h2>
  <table class="table align-middle">
    <thead>
      <tr>
        <th>圖片</th>
        <th>名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td style="width: 200px">
          <div style="
            height: 100px;
            background-size: cover;
            background-position: center;"
            :style="{backgroundImage:`url(${ product.imageUrl })`}">
          </div>
        </td>
        <td>
          {{ product.title }}
        </td>
        <td>
          <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元</div>
          <div v-else>
            <del class="h6">原價 {{ product.origin_price }} 元</del>
            <div class="h5">現在只要 {{ product.price }} 元</div>
          </div>
        </td>
        <td>
          <div class="btn-group btn-group-sm">
            <RouterLink class="btn btn-outline-secondary" :to="`/product/${product.id}`" style="text-decoration: none">查看更多</RouterLink>
            <button type="button" class="btn btn-outline-danger" @click="addToCart(product.id)">
                加到購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { RouterLink } from 'vue-router'
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    RouterLink
  },
  methods: {
    getProducts () {
      this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
        .then((res) => {
          this.products = res.data.products
        })
    },
    addToCart (productId) {
      const data = {
        product_id: productId,
        qty: 1
      }
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message)
        })
        .catch((err) => {
          alert(`${err.response.data.message}，請再次確認。`)
        })
    }
  },
  mounted () {
    this.getProducts()
  }
}
</script>
