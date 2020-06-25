import Axios from 'axios';

export default {

      data(){
        
        return {
        
          items: [],
          value: [],
          Listescommunes: [],
          search: null,
          loading: false,
          title: '',
          name: '',
          position: {},
          ready: false,
          weather: {},
          urlApi: 'http://api.weatherstack.com/current?access_key=ff48c3f13b59be8c8b6ce490d365878c&query=',
        }
      },

      watch: {
        search(val) {
            if (val && val.length > 2) {
                this.loading = true
                setTimeout(() => {
                    this.items = this.Listescommunes.filter(commune => {
                      let _commune = commune.nom || '';
                      let _communeLowerCase = _commune.toLowerCase();
                      let _searchValueLowerCase = val.toLowerCase();

                      return _communeLowerCase.indexOf( _searchValueLowerCase ) != -1;
                    })
                    this.loading = false
                }, 500)
            }
        }
    },

    mounted () {
        Axios.get("https://geo.api.gouv.fr/departements/974/communes?fields=nom,code,codesPostaux,codeDepartement,codeRegion,population&format=json&geometry=centre")
          .then(response => {
              response.data.forEach(_data => {
                this.items.push(_data);
                    
              });
          }); 
    },

    methods:{
        getWeather(value){
          this.title = value.nom
            Axios.get("http://api.weatherstack.com/current?access_key=ff48c3f13b59be8c8b6ce490d365878c&query=" + value.nom)
              .then(response => {
                  this.weather = response.data
                  this.ready = true
                  const d = new Date(this.weather.location.observation_time)
                  var options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
                  this.weather.location.observation_time = d.toLocaleDateString("fr-Fr", options);
              })      
        },

        getCurrentPosition(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(position => {
                    this.position = position.coords;
                    Axios.get(this.urlApi + this.position.latitude + ',' + this.position.longitude).then(response => {
                        this.weather = response.data
                        this.ready = true
                        console.log(this.position = position.coords)
                        const d = new Date(this.weather.location.observation_time)
                        var options = {weekday: 'long', year: 'numeric', month: 'long', day:'numeric'};
                        this.weather.location.observation_time = d.toLocaleDateString("fr-Fr", options);
                  
                    })
                })
            }
        },

    },
    created(){
        this.getCurrentPosition();
    },
};