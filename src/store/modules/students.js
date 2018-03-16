import Parse from 'parse'
import Vue from 'vue'
// import config from '../config'
const state = {
  studentList: [],
  currentStudent: {},
  loading: false
}

var Students = Parse.Object.extend('Students')
const mutations = {
  fillStudents (state, payload) {
    var arr = []
    payload.forEach(element => {
      var el = JSON.parse(JSON.stringify(element))
      arr.push(el)
    })
    state.studentList = arr
  },
  studentCreated (state, payload) {
    state.studentList.push(JSON.parse(JSON.stringify(payload)))
  },
  studentDeleted (state, payload) {
    console.log('deleting student')
    state.studentList = state.studentList.filter((element) => {
      return element.objectId !== payload.id
    })
  },
  studentUpdated (state, payload) {
    console.log(payload)
    state.studentList.forEach((element, index) => {
      console.log('updating student')
      if (element.objectId === payload.id) {
        Vue.set(state.studentList, index, JSON.parse(JSON.stringify(payload)))
      }
    })
  },
  setCurrentStudent (state, payload) {
    state.currentStudent = Object.assign({}, payload)
  }
}

const actions = {
  fillStudents (context) {
    let query = new Parse.Query(Students)
    query.ascending('firstname')
    let subscription = query.subscribe()
    // console.log('fillStudents fired', context)
    subscription.on('create', obj => {
      context.commit('studentCreated', obj)
    })
    subscription.on('delete', obj => {
      context.commit('studentDeleted', obj)
    })
    subscription.on('update', obj => {
      context.commit('studentUpdated', obj)
    })
    subscription.on('open', obj => {
      console.log('opening', obj)
    })
    query.find({
      success: function (results) {
        console.log(results)
        context.commit('fillStudents', results)
      },
      error: function (err) {
        console.log('error: ', err)
      }
    })
  },
  saveStudent (context, student) {
    var s = new Students()
    // makes sure that student info is in the correct format
    // var student2 = toStudent(student)
    state.loading = true

    s.save(student, {
      success (res) {
        console.log(res)
        state.loading = false
      },
      error (err) {
        console.log(err)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
