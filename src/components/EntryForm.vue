<template lang="pug">
  v-container
    v-progress-linear(v-if="loading"  v-bind:indeterminate="true")
    v-layout(row wrap)
      v-switch(label="Is Income" v-model="entry.acType" value="false")
    v-layout row wrap
      v-flex xs11 sm5
        v-menu(
          lazy
          :close-on-content-click="false"
          v-model="dateEnteredOpen"
          transition="scale-transition"
          offset-y
          full-width
          :nudge-right="40"
          max-width="290px"
          min-width="290px")
          v-text-field(
            slot="activator"
            label="Date"
            v-model="entry.entryDate"
            prepend-icon="event")
          v-date-picker(v-model="entry.entryDate" no-title scrollable actions autosave)
    v-layout(v-if="entry.acType" row)
      v-flex
        v-select(
          v-bind:items="income"
          v-model="ac"
          label="Income"
          combobox
          bottom)
    v-layout(v-if="!acType" row)
      v-flex
        v-select(
          v-bind:items="expense"
          v-model="ac"
          label="Expense"
          combobox
          bottom)
    v-layout(row)
      v-flex
        v-select(
          id="desc"
          v-bind:items="descriptions"
          v-model="desc"
          label="Description"
          combobox
          bottom) {{desc}}
    v-layout(row)
      v-flex
        v-text-field(
          type="number"
          name="input-2"
          v-model="cost"
          label="Cost"
          id="cost"
          prefix="$"
          min="0")
    v-layout(row)
      v-btn(large v-on:click="submit" :disabled="!ready" color="primary" dark) Add
</template>
<script>
export default {
  data () {
    return {
      entry: {},
      dateEnteredOpen: false,
      acType: false,
      loading: false,
      snackbar: false,
      message: 'Added'
    }
  },
  methods: {
    submit () {}
  },
  computed: {
    income () {},
    expense () {},
    descriptions () {}
  }
}
</script>
