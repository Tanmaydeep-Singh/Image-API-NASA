<template>
  <form @submit.prevent="postData" method="POST">
    <!--Setting up a on click function to post data-->
    <div>
      <label for="User ">Enter Date</label>
      <input v-model="date" required placeholder="YYYY-MM-DD" />
      
    </div>

    <button @click="update">Submit</button>
  </form>
</template>

<script>
import axios from "axios"; //Importing axios

export default {
  name: "InputField",

  data() {
    return {
      //Setting data schema
      date: "",
    };
  },

  methods: {
    postData() {

      let data = { date:  this.date }
      console.log(data)

      axios
        .post("http://localhost:3000/getting-data", data ) // port('THE URL LINK FOR POST API', THE DATA TO BE SENT)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style scoped></style>
