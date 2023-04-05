import ProductCard from '@/components/ProductCard.vue'
import {mount} from "@vue/test-utils";

describe('ProductCard', () => {
  let wrapper
  const productFake = {
    id: 1,
    name: 'name 1',
    covers: ['link1']
  }

  beforeEach(() => {
    wrapper = mount(ProductCard, {
      propsData: {
        product: productFake
      }
    })
  })
  test('It should load the component', () => {
    expect(wrapper.findComponent(ProductCard)).toBeTruthy()
  })

  test('It render a product  with name', () => {
    expect(wrapper.find('p').html()).toContain(productFake.name)
  })
})
