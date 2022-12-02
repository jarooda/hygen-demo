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