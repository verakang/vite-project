<template>
  <h2 class="my-4">這是產品資訊頁面</h2>
  <div class="row">
    <div class="col-sm-6">
      <img class="img-fluid" :src="product.imageUrl" alt="">
    </div>
    <div class="col-sm-6">
      <span class="badge bg-dark rounded-pill fs-6">{{ product.category }}</span>
      <p class="mt-3 mb-1">商品描述：{{ product.description }}</p>
      <p>商品內容：{{ product.content }}</p>
      <div class="h5" v-if="product.price === product.origin_price">{{ product.price }} 元
      </div>
      <div v-else class="mb-3">
        <del class="h6">原價 {{ product.origin_price }} 元</del>
        <div class="h5">現在只要 {{ product.price }} 元</div>
      </div>
      <div>
        <div class="input-group">
          <select name="" id="" class="form-select" v-model="qty">
            <option :value="i" v-for="i in 10" :key="`${i}01`">{{ i }}</option>
          </select>
          <button type="button" class="btn btn-dark" @click="addToCart(product.id,qty)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      product: {},
      qty: 1
    }
  },
  methods: {
    getProduct () {
      const { id } = this.$route.params
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product
        })
        .catch((arr) => {
          alert(arr.response.data.message)
        })
    },
    addToCart (productId, qty = 1) {
      const data = {
        product_id: productId,
        qty
      }
      this.$http
        .post(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`, { data })
        .then((res) => {
          alert(res.data.message)
          this.$router.push('/products')
        })
        .catch((err) => {
          alert(`${err.response.data.message}，請再次確認。`)
        })
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>
