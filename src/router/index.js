import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AddStudent from '@/components/AddStudent'
import StudentList from '@/components/StudentList'
// import EditStudent from '@/components/EditStudent'
import StudentDash from '@/components/StudentDash'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
    },
    {
      path: '/studentList',
      name: 'StudentList',
      component: StudentList
    },
    {
      path: '/editStudent',
      name: 'editStudent',
      component: AddStudent
    },
    {
      path: '/studentDash',
      name: 'studentDash',
      component: StudentDash
    }

  ]
})
