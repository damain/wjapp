import Parse from 'parse'
import Vue from 'vue'

const Entry = new Parse.Object.extend('Entries')
const state = {
  entrylist: [],
  currentEntry: {},
  loading: false
}

const mutations = {
  fillEntries (state, payload) {
    var arr = []
    payload.forEach(element => {
      var el = JSON.parse(JSON.stringify(element))
      arr.push(el)
    })
    state.entryList = arr
  },
  entryCreated (state, payload) {
    state.entryList.push(JSON.parse(JSON.stringify(payload)))
  },
  entryDeleted (state, payload) {
    console.log('deleting entry')
    state.entryList = state.entryList.filter((element) => {
      return element.objectId !== payload.id
    })
  },
  entryUpdated (state, payload) {
    console.log(payload)
    state.entryList.forEach((element, index) => {
      console.log('updating entry')
      if (element.objectId === payload.id) {
        Vue.set(state.entryList, index, JSON.parse(JSON.stringify(payload)))
      }
    })
  },
  setCurrentEntry (state, payload) {
    state.currentEntry = Object.assign({}, payload)
  }
}
const actions = {
  fillEntries (context) {
    let query = new Parse.Query(Entries)
    //query.ascending('firstname')
    let subscription = query.subscribe()
    subscription.on('create', obj => {
      context.commit('entryCreated', obj)
    })
    subscription.on('delete', obj => {
      context.commit('entryDeleted', obj)
    })
    subscription.on('update', obj => {
      context.commit('entryUpdated', obj)
    })
    subscription.on('open', obj => {
      console.log('opening entry subscription', obj)
    })
    query.find({
      success: function (results) {
        console.log(results)
        context.commit('fillEntries', results)
      },
      error: function (err) {
        console.log('error: ', err)
      }
    })
  },
  saveEntry (context, entry) {
    var s = new Entry ()
    state.loading = true

    s.save(entry, {
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




