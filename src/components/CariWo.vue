<template>
  <v-dialog v-model="dialogWo" width="1000">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Cari WO
      </v-btn>
    </template>

    <v-card>
      <v-card-title>
        Cari Nomer WO
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        v-model="selected"
        item-key="NomorWo"
        show-select
        @click:row="handleClick"
        :headers="headers"
        :items="wo"
        :search="search"
      >
        <template v-slot:top>
          <h5>WO: {{ selected }}</h5>
        </template>
      </v-data-table>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text v-on:click="lempar"> I accept </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
// import { delete } from 'vue/types/umd';
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  data: () => ({
    search: '',
    selected: [],
    dialogWo: false,
    headers: [
      { text: "Kode WO", value: "NomorWo" },
      { text: "Tanggal", value: "Tanggal" },
      { text: "Nama Pelanggan", value: "NamaPelanggan" },
      { text: "Nomor Rangka", value: "NomorRangka" },
      { text: "Nomor Polisi", value: "NomorPolisi" },
      { text: "Nomor Mesin", value: "NomorMesin" },
      { text: "8", value: "Keterangan" },
    ],
    wo: [
      {
        NomorWo:"0101/WO/2006/000100",
        Tanggal:"17/06/2020",
        NamaPelanggan:"Ronaldo",
        NomorRangka:"123214",
        NomorPolisi:"KT 231231",
        NomorMesin:"211312",
        Keterangan:"TA 2"
      },
      {
        NomorWo:"0101/WO/2006/000104",
        Tanggal:"17/06/2020",
        NamaPelanggan:"Messi",
        NomorRangka:"123214",
        NomorPolisi:"KT 231231",
        NomorMesin:"211312",
        Keterangan:"WS TFI BPP"
      }
    ]
  }),
  methods: {
    lempar: function(){
      this.dialogWo=false;
      var data = this.selected;
      // var result=[];
      delete data[0]["Tanggal"]
      delete data[0]["Keterangan"]
      // result.push(data)
      // for (let a = 0; a < data.length; a++) {
      //   const element = data[a];
        
      // }
      // for (let i=0; i<= data; i++) {
      //   console.log(data[i])
        
      // }
      // for(const { KodeWo,NamaPelanggan,NomorRangka,NomorPolisi,NomorMesin } of data){
      //   result.push(KodeWo,NamaPelanggan,NomorRangka,NomorPolisi,NomorMesin)
      // }
      
      this.$emit('lempar',data)
    }
  }
};
</script>

<style>
</style>