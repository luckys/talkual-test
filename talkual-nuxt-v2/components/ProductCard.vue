<template>
  <div class="card">
    <div class="card-image">
      <b-carousel>
        <b-carousel-item v-for="(item, i) in product.covers" :key="i">
          <b-image class="image is-2by1" :src="item"></b-image>
        </b-carousel-item>
      </b-carousel>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ product.name }}</p>
        </div>
      </div>
      <div class="content">
        <b-button type="is-primary">{{ $t('product.buy_btn') }}</b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>
