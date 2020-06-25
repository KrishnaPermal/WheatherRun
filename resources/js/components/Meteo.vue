<template>
<v-col cols="12" sm="12" md="12">
          <v-autocomplete class="pa-5"
            v-model="value"
            item-text="nom"
            :items="items"
            label = "Communes"
            :search-input.sync="search"
            :loading="loading"
            cache-items
            return-object
            hide-no-data
            @change="getWeather(value)"
          ></v-autocomplete> 



  <v-card
    v-if="ready"
    max-width="400" class="mb-10"
  >
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ title }}</v-list-item-title>
        <v-list-item-subtitle>{{ weather.current.observation_time }}</v-list-item-subtitle>
        
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6">{{weather.current.temperature}}°C</v-col>
        <v-col cols="6">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sun.png"
            alt="Sunny image"
            width="92"
          ></v-img>
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>Vent moyen : {{weather.current.wind_speed}} km/h</v-list-item-subtitle>
    </v-list-item>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-cloud-download</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>Préssion atmosphérique: {{weather.current.pressure}} hpm</v-list-item-subtitle>
    </v-list-item>
  </v-card>

</v-col>
</template>

<script src="./Meteo.js"></script>


