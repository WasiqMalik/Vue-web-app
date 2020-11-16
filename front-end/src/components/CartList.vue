<template>
    <div v-if="products.length > 0">
    <CartListItem
        v-for="product in products"
        :key="product.id"
        :product="product" />
    </div>
    <p v-else> You haven't added any product to the cart</p>
</template>

<script>
import CartListItem from './CartListItem.vue'
export default {
    name: 'CartList',
    props: ['products'],
    components:{
        CartListItem,
    }
}
</script>