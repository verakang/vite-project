import{_ as p,R as m,r as u,o as l,c as f,a as t,b as a,w as n,d as e,k,l as g,h as V,F as x}from"./index-cde5024b.js";const{VITE_APP_URL:v}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"vera-select",BASE_URL:"/vite-project/",MODE:"production",DEV:!1,PROD:!0},w={components:{RouterView:m},data(){return{status:!1}},methods:{logout(){document.cookie=`hexschool=; expires=${new Date}`,this.$router.push("/login")},checkLogin(){const c=document.cookie.replace(/(?:(?:^|.*;\s*)hexschool\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=c;const o=`${v}v2/api/user/check`;this.$http.post(o).then(r=>{this.status=!0}).catch(r=>{alert(r.response.data.message),this.$router.push("/login")})}},mounted(){this.checkLogin()}},$={class:"py-3 bg-dark"},P={class:"container text-white admin-nav"},R=t("span",{class:"h5 me-3 text-warning"},"這是後台頁面",-1),E={class:"container py-3"};function A(c,o,r,b,d,i){const s=u("router-link"),h=u("RouterView");return l(),f(x,null,[t("div",$,[t("nav",P,[R,a(s,{to:"/admin/products"},{default:n(()=>[e("產品列表")]),_:1}),e(" | "),a(s,{to:"/admin/orders"},{default:n(()=>[e("訂單列表")]),_:1}),e(" | "),a(s,{to:"/admin/coupon"},{default:n(()=>[e("優惠券")]),_:1}),e(" | "),t("a",{href:"#",onClick:o[0]||(o[0]=k((..._)=>i.logout&&i.logout(..._),["prevent"])),class:"me-3"},"登出"),a(s,{to:"/",class:"btn btn-outline-light"},{default:n(()=>[e("回到前台")]),_:1})])]),t("div",E,[d.status?(l(),g(h,{key:0})):V("",!0)])],64)}const D=p(w,[["render",A]]);export{D as default};
