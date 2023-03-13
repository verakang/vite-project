<template>
  <h2 class="my-4">這是後台訂單頁面</h2>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="">購買時間</th>
        <th width="">Email</th>
        <th width="">購買款項</th>
        <th width="">應付金額</th>
        <th width="">是否付款</th>
        <th width="">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
        <td>{{ $moment(new Date(order.create_at * 1000)).format('YYYY-MM-DD HH:mm') }}</td>
        <td>
          <p class="mb-0" v-if="order.user">{{ order.user.email }}</p>
          <p class="text-warning">{{ order.id }}</p>
        </td>
        <td class="text-start">
          <ul class="list-unstyled">
          <li v-for="(product, i) in order.products" :key="i">
            <p class="text-warning mb-0">{{ product.product.title }} <span class="text-dark">x {{ product.qty }}</span></p>
            <p class="mb-2">單價：{{ product.product.price }} 元</p>
          </li>
        </ul>
        </td>
        <td class="text-start">{{ order.total }}</td>
        <td>
          <span class="text-success" v-if="order.is_paid">已付款</span>
          <span v-else>未付款</span>
        </td>
        <td>
          <div class="btn-group">
            <button type="button" class="btn btn-outline-primary btn-sm"
              @click="openModal('edit',order)">
              檢視
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm"
              @click="openModal('delete',order)">
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>

  <pagination class="container" :pages="page" @change-page="getOrder"></pagination>
  <orderModal ref="orderModal" :order="orderTemp" :update-order="updateOrder"></orderModal>
  <delOrder ref="delOrder" :order="orderTemp" :remove-order="removeOrder"></delOrder>
</template>

<script>
import pagination from '../../components/PaginationView.vue'
import orderModal from '../../components/OrderModal.vue'
import delOrder from '../../components/DelOrder.vue'

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
  data () {
    return {
      orders: [],
      orderTemp: {
        imagesUrl: []
      },
      page: {}
    }
  },
  components: {
    pagination, orderModal, delOrder
  },
  methods: {
    getOrder (page = 1) {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/orders/?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          // 將取得的資料存在 data
          this.orders = res.data.orders
          this.page = res.data.pagination
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    openModal (state, order) {
      if (state === 'edit') {
        this.$refs.orderModal.openModal()
        // 修改欄位的顯示資料需要用淺拷貝，才不會直接連動到原始資料。
        this.orderTemp = { ...order }
      } else if (state === 'delete') {
        this.$refs.delOrder.openModal()
        this.orderTemp = { ...order }
      }
    },
    updateOrder (item) {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${item.id}`
      const paid = {
        is_paid: item.is_paid
      }
      this.$http
        .put(url, { data: paid })
        .then((res) => {
          alert(res.data.message)
          this.getOrder()
          this.$refs.orderModal.hideModal()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    },
    removeOrder (item) {
      const url = `${VITE_APP_URL}v2/api/${VITE_APP_PATH}/admin/order/${item.id}`
      this.$http
        .delete(url)
        .then((res) => {
          alert(res.data.message)
          this.getOrder()
          this.$refs.delOrder.hideModal()
        })
        .catch((err) => {
          alert(err.response.data.message)
        })
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
