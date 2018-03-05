<template>
  <v-layout row wrap>
        <v-btn
              color="pink"
              absolute
              top
              dark
              small
              left
              fab
              mt-5
              @click="$router.push('/addStudent')"
            >
            <v-icon>add</v-icon>
            </v-btn>
    <v-flex sm6>
      <student-list/>
    </v-flex>
    <v-flex sm6>
      <student-details/>
    </v-flex>
  </v-layout>
</template>
<script>
import StudentDetails from '@/components/StudentDetails'
import StudentList from '@/components/StudentList'
import { mapActions } from 'vuex'

export default {
  components: {StudentDetails, StudentList},
  methods: {
    ...mapActions(['fillStudents'])
  },
  created () {
    if (this.$store.state.students.studentList.length === 0) {
      this.fillStudents()
    }
  }
}
</script>
<style>
/* v-flex{
  padding:4px;
} */
</style>
