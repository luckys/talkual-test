import ProductFilter from '@/components/ProductFilter.vue'
import { mount} from "@vue/test-utils";

describe('ProductFilter', () => {
  let wrapper
  const postalCodesFake = [{
    id: 1,
    code: '08400'
  },
    {
      id: 2,
      code: '08401'
    }
  ]

  beforeEach(() => {
    wrapper = mount(ProductFilter, {
      propsData: {
        postalCodes: postalCodesFake
      }
    })
  })
  test('It should load the component', () => {
    expect(wrapper.findComponent(ProductFilter)).toBeTruthy()
  })

  test('It emit an event when an option is selected', async() => {
    const options = wrapper.find('#postalCodeSelect').findAll('option')
    await options.at(1).setSelected()
    expect(wrapper.find('option:checked').element.value).toBe('08400')
  })
})
