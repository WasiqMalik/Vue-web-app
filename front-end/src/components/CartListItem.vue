<template>
    <div class="product-contrainer">
        <img class="product-image" v-bind:src="product.imageUrl"/>
        <div class="details-wrap">
          <h3>{{product.name}}</h3>
          <p>${{product.price}}</p>
        </div>
        <button class="remove-button">Remove Item </button>
      </div>
</template>

<script>
export default {
    name: 'CartListItem',
    props: ['product'],
}
</script>

<style scoped>
.product-container {
    align-content: 'center';
    border-bottom: 1px solid #ddd;
    display: flex;
    padding: 16px;
    width: 100%;
  }

  .product-image {
    flex: 1;
    height: 100px;
    max-width: 100px;
  }

  .details-wrap {
    padding: 0 16px;
    flex: 3;
  }

  .remove-button {
    flex: 1;
    margin: auto;
  }
</style>