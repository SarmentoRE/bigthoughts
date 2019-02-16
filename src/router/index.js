import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ClassSelection from '@/components/ClassSelection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ClassSelection',
      component: ClassSelection,
      // we can pass class list to Class selection from the router
      props: {
        classList: [{
          classId: 1,
          className: 'CMSC101'
        },
        {
          classId: 2,
          className: 'CMSC202'
        }]
      }
    }]
})
