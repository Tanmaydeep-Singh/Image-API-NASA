<template>

  <InputField />


<img v-bind:src="date" />
<div class="head">


</div>









</template>

<script>
import InputField from '../components/InputField.vue'
import axios from 'axios';

export default {
  name: "Home",
  components:{
    InputField,
  },
  
  data(){
    return{
      date:''   //Data schema to store data locally for rendering.
    }
  },

  mounted() {
    axios
      .get("http://localhost:3000/date")   //get('URL FROM WHERE WE WILL RECIEVE DATA')
      .then((response) => {
        this.date = response.data   // Setting the response data as data.
        console.log(this.date);
      }).catch(err => {console.log(err)
        this.errored=true})
        
  },
};
</script>


<style scoped>

.head{
    display: grid;
    align-content: center;
    justify-content: center;
    width:100vw;
    height:80vh;
    padding:20px;
    font-size: 2rem;
}


.dataDrive{
    margin: 5vh auto;
    border-radius: 20px;
    background-color: aliceblue;
    width:40vw;
    padding: 15px;
    
}
img{
  border-radius: 20px;
  max-height:80vh;
  max-width: 60vw;

}

</style>
