import About from '@/views/AboutView.vue'
import { mount } from '@vue/test-utils'
import { describe, test, expect } from 'vitest'

describe('AboutView.vue', () => {
  test('renders inner text', () => {
    const wrapper = mount(About, {
      shallow: true,
    })

    expect(wrapper.text()).toContain('about')
  })
})
