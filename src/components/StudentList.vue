<template lang="pug">
  v-list
    v-flex(xs12 sm5)
      v-text-field(
        label="Search..."
        v-model="search"
        single-line
        prepend-icon="search")
    template(v-for="(student, index) in students")
      v-list-tile(avatar  :key="index")
        v-list-tile-content(@click="viewDetails(student)")
          v-list-tile-title {{student.studentName}}
        v-list-tile-action(@click="editStudent(student)")
          v-icon edit
        v-list-tile-action(@click="duplicateStudent(student)")
          v-icon content_copy
    template(v-if="students.length == 0")
      v-list-tile
        v-list-tile-content
          v-list-tile-title The are no students loaded
</template>
<script>
export default {
  data () {
    return {
      search: ''
    }
  },
  computed: {
    students () {
      let that = this
      return this.$store.state.students.studentList.filter(element => {
        return element.studentName.toLowerCase().includes(that.search.toLowerCase())
      })
    }
  },
  methods: {
    duplicateStudent (student) {
      let stu = Object.assign({}, student)
      delete stu.studentName
      delete stu.dob
      delete stu.objectId
      delete stu.createdAt
      delete stu.updatedAt
      this.$store.commit('setCurrentStudent', stu)
      this.$router.push('/editStudent')
    },
    editStudent (student) {
      this.$store.commit('setCurrentStudent', student)
      this.$router.push('/editStudent')
    },
    viewDetails (student) {
      this.$store.commit('setCurrentStudent', student)
    }
  }
}
</script>
