<template>
  <div class="img-fluid picture-card card">
    <img :src="picture?.img" alt="">
  </div>
  <div class="card-body">
    <h2 class="card-title text-center"> {{picture?.title}} </h2>
  </div>
  <div>
    <h5>{{ picture?.date }}</h5>
  </div>
  <div>
    <p>{{ picture?.explanation}}</p>
  </div>
</template>

<script>
import { Picture } from '../models/Picture.js'
export default {
    props: {
        picture: {type: Picture, required: true}
    }
    
    }


</script>

<style>

</style>