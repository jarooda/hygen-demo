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