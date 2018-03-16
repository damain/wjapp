<template lang="pug">
  v-container(grid-list-md text-xs-center v-if="student")
    v-card(v-if = "student.studentName" color="blue-grey darken-2" class="white--text")
      v-card-title(primary-title)
        .headline {{student.studentName}}
      v-card-text
        v-list(dense two-line)
          v-list-tile(v-if = "student.mobile || student.home")
            v-list-tile-content(v-if = "student.mobile")
              v-list-tile-title {{student.mobile}}
              v-list-tile-sub-title Mobile
            
            v-list-tile-content(v-if = "student.home")
              v-list-tile-title {{student.home}}
              v-list-tile-sub-title Home Phone

          v-list-tile( v-if = "student.dob || student.gender")
            v-list-tile-content(v-if = "student.dob")
              v-list-tile-title {{student.dob}}
              v-list-tile-sub-title DOB
            v-list-tile-content(v-if = "student.gender")
              v-list-tile-title
                span(v-if = "student.gender===`true`") Female
                span(v-else) Male
              v-list-tile-sub-title Gender
          v-list-tile(v-if = "student.religion")
            v-list-tile-content
              v-list-tile-title {{student.school}}
              v-list-tile-sub-title School
          v-list-tile(v-if = "student.address")
            v-list-tile-content
              v-list-tile-title {{student.address}}
              v-list-tile-sub-title Address
          v-list-tile(v-if = "student.city || student.religion")
            v-list-tile-content(v-if= "student.city")
              v-list-tile-title {{student.city}}
              v-list-tile-sub-title City
            v-list-tile-content(v-if= "student.religion")
              v-list-tile-title {{student.religion}}
              v-list-tile-sub-title Religion
          v-list-tile(v-if = "student.parent1 || student.parent2")
            v-list-tile-content(v-if = "student.parent1")
              v-list-tile-title {{student.parent1}}
              v-list-tile-sub-title Parent
            v-list-tile-content(v-if = "student.parent2")
              v-list-tile-title {{student.parent2}}
              v-list-tile-sub-title Parent
          v-list-tile(v-if = "student.email")
            v-list-tile-content
              v-list-tile-title {{student.email}}
              v-list-tile-sub-title Email
          v-list-tile(v-if = "student.collector")
            v-list-tile-content
              v-list-tile-title {{student.collector}}
              v-list-tile-sub-title Collector
          v-list-tile(v-if = "student.otherInfo")
            v-list-tile-content
              v-list-tile-title {{student.otherInfo}}
              v-list-tile-sub-titleOther Info
      v-card-actions
        v-btn(flat dark) action
</template>
<script>
export default {
  computed: {
    student () {
      return this.$store.state.students.currentStudent
    }
  }
}
</script>
