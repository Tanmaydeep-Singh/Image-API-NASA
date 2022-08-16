<template>

<div class="head">

<h1>Hello World</h1>
<p></p>
</div>



<div class="dataDrive">  
<InputField />
</div>


<img v-bind:src="date" />





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
    height:60vh;
    padding:20px;
    font-size: 2rem;
}


.dataDrive{
    text-align: left;
    margin: 5vh auto;
    border-radius: 20px;
    background-color: aliceblue;
    width:80vw;
    padding: 10px;
    
}
img{

}

</style>
