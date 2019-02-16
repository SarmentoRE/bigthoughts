import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ClassSelection from '@/components/ClassSelection'
import Messages from '@/components/Messages'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'both',
      components: {default: ClassSelection, messages: Messages},
      // we can pass class list to Class selection from the router
      props: {
        default: {
          classList: [{
            classId: 1,
            className: 'CMSC101'
          },
          {
            classId: 2,
            className: 'CMSC202'
          }]
        },
        messages: {
          List: [{
            classId: 1,
            className: 'TODAY'
          },
          {
            classId: 2,
            className: 'AMANDA'
          }]
        }
      }
    },
    {
      path: '/classes',
      name: 'ClassSelection',
      components: {default: ClassSelection},
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
    }
  ]
})
