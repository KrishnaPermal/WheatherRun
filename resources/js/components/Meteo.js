import Axios from 'axios';

export default {

      data(){

        return {
        
          search: '',
          items: [],
          value: [],
        }
      },

        mounted () {
             Axios.get("https://geo.api.gouv.fr/departements/974/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
              .then(response => {
                    //console.log(response)
                    response.data.forEach(_data => {
                    this.items.push(_data.nom+' ( '+_data.code+' )');
                    
                  });
                  console.log(this.items)
              }); 
        }
};