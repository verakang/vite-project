<template>
  <h2 class="my-4">購物車列表</h2>
  <div class="text-end">
    <button class="btn btn-outline-danger" type="button" @click="deleteCart">清空購物車</button>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th></th>
        <th>品名</th>
        <th style="width: 150px">數量/單位</th>
        <th>單價</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="cart.carts">
        <tr v-for="item in cart.carts" :key="item.id">
          <td>
            <button type="button" class="btn btn-outline-danger btn-sm" @click="removeItem(item)">
              <i class="fas fa-pulse" :class="{ 'fa-spinner': item.id === loadingItem}" v-if="item.id === loadingItem"></i>
              <span v-else>X</span>
            </button>
            </td>
          <td class="d-flex flex-column flex-md-row align-items-center">
            <div style="
              width: 160px;
              height: 100px;
              background-size: cover;
              background-position: center;"
              :style="{backgroundImage:`url(${ item.product.imageUrl })`}">
            </div>
            <div class="ms-md-3">
              <span>{{ item.product.title }}</span>
              <div class=" text-success" v-if="item.coupon">
                已套用優惠券
              </div>
            </div>
          </td>
          <td>
            <div class="input-group input-group-sm">
              <select name="" id="" class="form-select" v-model="item.qty"
                @change="updateCart(item)" :disabled="item.id === loadingItem">
                <option :value="i" v-for="i in 10" :key="`${i}01`">{{ i }}</option>
              </select>
              <span class="input-group-text" id="basic-addon2">{{ item.product.unit}}</span>
            </div>
          </td>
          <td class="text-end">
            <small v-if="cart.final_total !== cart.total" class="text-success">折扣價：</small>
            {{ item.total }} 元
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3" class="text-end">總計</td>
        <td class="text-end">{{ cart.total }} 元</td>
      </tr>
      <tr>
        <td colspan="3" class="text-end text-success">折扣價</td>
        <td class="text-end text-success">{{ cart.final_total }} 元</td>
      </tr>
    </tfoot>
  </table>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env
export default {
  data () {
    return {
      products: [],
      product: {},
      productId: '',
      cart: {},
      loadingItem: ''
    }
  },
  methods: {
    getCarts () {
      this.$http
        .get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart`)
        .then((res) => {
          this.cart = res.data.data
        })
        .catch((err) => {
          alert(`${err.data.message}，請再次確認。`)
        })
    },
    updateCart (item) {
      const data = {
        product_id: item.product_id,
        qty: item.qty
      }
      this.loadingItem = item.id
      this.$http
        .put(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`, { data })
        .then((res) => {
          alert(res.data.message)
          this.getCarts()
          this.loadingItem = ''
        })
        .catch((err) => {
          alert(`${err.data.message}，請再次確認。`)
        })
    },
    removeItem (item) {
      this.loadingItem = item.id
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/cart/${item.id}`)
        .then(() => {
          this.getCarts()
          this.loadingItem = ''
          alert(`已刪除 ${item.product.title}`)
        })
        .catch((err) => {
          alert(`${err.data.message}，請再次確認。`)
        })
    },
    deleteCart () {
      this.$http
        .delete(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/carts`)
        .then(() => {
          alert('已清空購物車！')
          this.getCarts()
        })
        .catch((err) => {
          alert(err.data.message)
        })
    }
  },
  mounted () {
    this.getCarts()
  }
}
</script>
