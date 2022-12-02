---
to: "src/views/__tests__/<%= h.changeCase.pascal(name)  %>.spec.js"
unless_exists: true
---
<% const fileName = h.changeCase.pascal(name) %>
import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import <%= fileName %> from '@/view/<%= fileName %>.vue'

describe('<%= fileName %>', () => {
  it('renders properly', () => {
    const wrapper = mount(<%= fileName %>)
    expect(wrapper.exists()).toBeTruthy()
  })
})