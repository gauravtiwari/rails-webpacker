import Vue from 'vue/dist/vue.common'

// Declate a global component instance
Vue.component('profile', {
  // declare the props
  props: ['username', 'name'],
  // just like data, the prop can be used inside templates
  // and is also made available in the vm as this.message
  template: `<div id="profile">
              <p>Hello, {{ username }}</p>
              <p>Your name is - {{ name }} </p>
            </div>
            `
})


// Instance to mount the component
new Vue({
  el: '#example'
})
