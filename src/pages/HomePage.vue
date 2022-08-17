<template>
  <div class="home-page">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <form @submit="searchPicture()" action="">
            <input type="date" v-model="editable.date"> 
            <button type="submit">Submit</button>
          </form>
        </div>
        <div class="col-6" >
          <PictureCard :picture="picture"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from '@vue/runtime-core'
import { picturesService } from '../services/PicturesService'
import { logger } from '../utils/Logger'
import Pop from '../utils/Pop'
import { AppState } from '../AppState'
export default {
  setup(){
const editable = ref({})
    async function getPictures(){
      try {
        await picturesService.getPictures()
      } catch (error) {
        logger.error('getting pictures', error)
        Pop.toast(error.message, 'error')
      }
    }
    onMounted(() => {
      getPictures()
    })

    return {
      editable,
      picture: computed(() => AppState.picture),
     async searchPicture(){
        try {
          await picturesService.searchPicture(editable.value)
        } catch (error) {
          logger.log(error.message)
        }
      }
    }



  }

}
</script>

<style scoped lang="scss">

</style>
