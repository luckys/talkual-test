<template>
  <div class="columns">
    <div class="column is-4">
      <b-select id="postalCodeSelect" :placeholder="$t('product.postal_code_filter')" @input="$emit('input', $event)">
        <option :value="null">{{ $t('product.postal_code_filter_reset') }}</option>
        <option
          v-for="item in postalCodes"
          :value="item.code"
          :key="item.id">
          {{ item.code }}
        </option>
      </b-select>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    postalCodes: {
      type: Array,
      default: () => []
    }
  },
}
</script>
