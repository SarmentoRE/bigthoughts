import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import ClassSelection from '@/components/ClassSelection'
import Messages from '@/components/Messages'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/classes',
      name: 'allClasses',
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
            messageId: 1,
            firstName: 'Amanda',
            lastName: 'Smith',
            content: 'HELLO HOW ARE YOU I HAVE A QUESTION ONLY YOU CAN ANSWER SENPAI',
            time: '12:56pm'
          },
          {
            messageId: 2,
            firstName: 'Tim',
            lastName: 'Keith',
            content: 'HOWDY',
            time: '12:57pm'
          },
          {
            messageId: 3,
            firstName: 'Amanda',
            lastName: 'Smith',
            content: 'WAZZUP',
            time: '12:59pm'
          },
          {
            messageId: 4,
            firstName: 'Tim',
            lastName: 'Keith',
            content: 'HEY',
            time: '1:30pm'
          }]
        },
        students: [{
          studentId: 1,
          firstName: 'Rick',
          lastName: 'Astley'
        },
        {
          studentId: 2,
          firstName: 'Tommy',
          lastName: 'LIL'
        }
        ]}
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
