## Vue File
```
---
to: "src/views/<%= h.changeCase.pascal(name)  %>.vue"
unless_exists: true
---
<%_ const className = h.changeCase.kebab(name).toLowerCase() _%>
<template>
  <div class="<%= className %>">
    <p
      :style="{
        fontSize: '<%= styles.includes('big') ? '50' : '14' %>px',
        textDecoration: '<%= styles.includes('strike') ? 'line-through' : 'none' %>',
        fontStyle: '<%= styles.includes('italic') ? 'italic' : 'normal' %>',
      }"
    >
      <%= name %>
    </p>
  </div>
</template>

<style scoped>
.<%= className %> {
  color: <%= color %>;
}
</style>
```

---

## Unit Test

```
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
```

---

## Router

```
---
inject: true
to: 'src/router/index.js'
after: "routes: "
---
    {
      path: '<%= route %>',
      name: '<%= h.changeCase.pascal(name) %>Component',
      component: () => import('@/views/<%= h.changeCase.pascal(name) %>.vue'),
    },
```
