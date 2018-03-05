<template>
  <v-container>
    <v-progress-linear v-if="loading"  v-bind:indeterminate="true"></v-progress-linear>
      <v-checkbox label="Is Active" v-model="isActive" dark></v-checkbox>
    <v-layout row>
      <v-flex >
        <v-text-field
          id = "sname"
          name="studentName"
          v-model="student.studentName"
          label="Student's Name"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-radio-group v-model="student.gender" row>
        <v-radio label="Male" value=false ></v-radio>
        <v-radio label="Female" value=true></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs11 sm5>
        <v-menu
          lazy
          :close-on-content-click="false"
          v-model="dobOpen"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px"
        >
          <v-text-field
            slot="activator"
            label="Date"
            v-model="student.dob"
            prepend-icon="event"
          ></v-text-field>
          <v-date-picker v-model="student.dob" no-title scrollable actions autosave>
          </v-date-picker>
        </v-menu>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex >
        <v-text-field
          name="address"
          v-model="student.address"
          label="Address"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-select
          v-bind:items="cities"
          v-model="student.city"
          label="City / Town"
          combobox
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-select
          v-bind:items="religions"
          v-model="student.religion"
          label="Religion"
          combobox
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-select
          v-bind:items="schools"
          v-model="student.school"
          label="School"
          combobox
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout  row>
      <v-flex>
        <v-select
          v-bind:items="parents"
          v-model="student.parent1"
          label="Parent"
          combobox
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout  row>
      <v-flex>
        <v-select
          v-bind:items="parents"
          v-model="student.parent2"
          label="Parent"
          combobox
          bottom
        ></v-select>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex >
        <v-text-field
          name="mobile"
          v-model="student.mobile"
          label="Mobile"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex >
        <v-text-field
          name="home"
          v-model="student.home"
          label="Home"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          type="email"
          name="email"
          v-model="student.email"
          label="Email"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          name="collector"
          v-model="student.collector"
          label="Collector"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex >
        <v-text-field
          name="other"
          v-model="student.otherInfo"
          label="Other Info"
          >
          </v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-btn  large v-on:click="submit" :disabled="!ready" color="primary" dark>Add</v-btn>
      <v-btn  large v-on:click="cancel" :disabled="!ready" color="primary" dark>Cancel</v-btn>
    </v-layout>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      hidden: false,
      isActive: true,
      loading: false,
      snackbar: false,
      message: 'Added',
      ready: true,
      dobOpen: false
    }
  },
  computed: {
    student () {
      if (this.$route.path === '/editStudent') {
        return this.$store.state.students.currentStudent
      } else {
        return {}
      }
    },
    cities () {
      let arr = []
      this.$store.state.students.studentList.forEach(element => {
        if (element.city) {
          arr.push(element.city)
        }
      })
      return arr
    },
    parents () {
      let arr = []
      this.$store.state.students.studentList.forEach(element => {
        if (element.parent1) {
          arr.push(element.parent1)
        }
        if (element.parent2) {
          arr.push(element.parent2)
        }
      })
      return arr
    },
    religions () {
      let arr = []
      this.$store.state.students.studentList.forEach(element => {
        if (element.religion) {
          arr.push(element.religion)
        }
      })
      return arr
    },
    schools () {
      let arr = []
      this.$store.state.students.studentList.forEach(element => {
        if (element.school) {
          arr.push(element.school)
        }
      })
      return arr
    }
  },
  methods: {
    submit () {
      this.saveStudent(this.student)
    },
    cancel () {
      this.$store.commit('setCurrentStudent', {})
      this.$router.push('/studentDash')
    },
    ...mapActions(['saveStudent', 'setCurrentStudent'])
  }
}
</script>
<style>

</style>
