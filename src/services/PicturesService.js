import { AppState } from "../AppState"
import { Picture } from "../models/Picture"
import { nasaApi } from "./AxiosService.js"

class PicturesService{
    

    async getPictures(){
        const res = await nasaApi.get('', 
    //     {
    //     params:{
    //         date:date
    //     }
    // }
    )
    console.log(res.data)
    AppState.picture =  new Picture(res.data)

}

async searchPicture(dateInfo){
    console.log(dateInfo, 'search date')
    const res = await nasaApi.get('', 
    {
    params:{
        date:dateInfo.date
    }
}
)
console.log(res.data)
AppState.picture =  new Picture(res.data)
}
}


export const picturesService = new PicturesService()