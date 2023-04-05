<template>
  <section class="section">
    <div class="box">
      <ProductFilter :postal-codes="postalCodes" @input="onProductFilter"/>
    </div>
    <div class="columns is-1-mobile is-0-tablet is-3-desktop is-8-widescreen is-2-fullhd is-centered" style="padding: 2rem">
      <div class="column has-text-centered" v-for="product in products" :key="product.id">
        <ProductCard :product="product"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProductPage",
  layout: 'authenticated',
  data: () => ({
    postalCodeSelected: null,
    pagination: {
      page: 1,
      total: 0,
      pageSize: 10,
    },
    products: [],
    postalCodes: [],
    urlFilters: []
  }),
  created () {
    this.getPostalCodes()
    this.getProducts()
  },
  computed: {
    getUrlFilters () {
      this.urlFilters = [
        '/products?populate=deliveries,covers,localizations',
        this.buildPagination
      ]
      if (this.postalCodeSelected) {
        this.urlFilters.push(this.buildFilter)
      }
      return this.urlFilters.join('&')
    },
    buildFilter () {
      return `filters[deliveries][code][$eq]=${this.postalCodeSelected}`
    },
    buildPagination () {
      return `pagination[page]=${this.pagination.page}&pagination[pageSize]=${this.pagination.pageSize}`
    }
  },
  methods: {
    onProductFilter (value) {
      this.postalCodeSelected = value
      this.getProducts()
    },
    async getProducts () {
      this.resetUrlFilters()
      const { data } = await this.$axios.get(this.getUrlFilters)
      this.products = data.data.map(item => this.transformProduct(item))
      this.pagination = data.meta.pagination
    },
    resetUrlFilters () {
      this.urlFilters = []
    },
    transformProduct (product) {
      return {
        id: product.id,
        name: product.attributes?.name,
        covers: product.attributes?.covers.data.map(item => `http://localhost:1337${item.attributes.url}`)
      }
    },
    async getPostalCodes () {
      const { data } = await this.$axios.get('/postal-codes?pagination[page]=1&pagination[pageSize]=100')
      this.postalCodes = data.data.map(item => {
        return {
          id: item.id,
          code: item.attributes.code
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
