<template>
  <v-container>
    <div>
      <h5>Barang: {{ selected }}</h5>
      <v-data-table
        v-model="selected"
        :headers="headers"
        :items="dtbarang"
        item-key="name"
        show-select
        @click:row="handleClick"
        class="elevation-1"
      >
        <template v-slot:top>
          <v-toolbar flat>
            <v-toolbar-title>Barang</v-toolbar-title>
            <v-divider class="mx-4" inset vertical></v-divider>
            <v-spacer></v-spacer>
            
              <CariBarang v-on:lempar="updateBarang($event)"/>
          </v-toolbar>
        </template>
        <template v-slot:[`item.BarangBekas`]>
          <v-checkbox dense small class="mr-2"></v-checkbox>
        </template>
        <template v-slot:[`item.barang`]="props">
          <v-edit-dialog
            :return-value.sync="props.item.barang"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.barang }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.barang"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:[`item.jumlah`]="props">
          <v-edit-dialog
            :return-value.sync="props.item.jumlah"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.jumlah }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.jumlah"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:[`item.diskon`]="props">
          <v-edit-dialog
            :return-value.sync="props.item.diskon"
            @save="save"
            @cancel="cancel"
            @open="open"
            @close="close"
          >
            {{ props.item.diskon }}
            <template v-slot:input>
              <v-text-field
                v-model="props.item.diskon"
                :rules="[max25chars]"
                label="Edit"
                single-line
                counter
              ></v-text-field>
            </template>
          </v-edit-dialog>
        </template>
        <template v-slot:[`item.diskonRp`]="{ item }">
      {{ (item.diskonRp = (item.harga * item.diskon) / 100) }}
    </template>
    
    <template v-slot:[`item.subTotal`]="{ item }">{{
      item.harga * item.jumlah - item.diskonRp
    }}</template>
      </v-data-table>
    </div>
    <h5>data dari cari barang :{{data}}</h5>
  </v-container>
</template>

<script>
import CariBarang from "../components/CariBarang";
export default {
  components:{
    CariBarang
  },
  data() {
    return {
      dialog: false,
      singleSelect: false,
      selected: [],
      data:[],
      headers: [
        { text: "Barang Bekas", value: "BarangBekas" },
        {
          text: "Barang",
          align: "start",
          sortable: false,
          value: "Barang",
        },

        { text: "Nama", value: "Nama", width: "160px" },
        { text: "Part Number 1", value: "PartNumber1", width: "150px" },
        { text: "Merk", value: "Merk" },
        { text: "Kendaran", value: "Kendaraan" },
        { text: "Jumlah", value: "Jumlah" },
        { text: "Satuan", value: "Satuan" },
        { text: "Harga", value: "Harga" },
        { text: "Diskon (%)", value: "Diskon" },
        { text: "Diskon (Rp)", value: "DiskonRp" },
        { text: "Sub Total", value: "SubTotal" },
      ],
      dtbarang: [
        {
          Barang: "0000247",
          Nama: "ALL PART",
          PartNumber1: "ALL",
          Merk: "ALL",
          Kendaraan: "ALL",
          Jumlah: 1,
          Satuan: "PCS",
          Harga: 15000000,
          Diskon: 0.0,
          DiskonRp: 0.0,
          SubTotal: 15000000,
        },
        {
          Nama: "Ice cream sandwich",
          PartNumber1: "ALL",
          Merk: "ALL",
          Kendaraan: "ALL",
          Jumlah: 1,
          Satuan: "PCS",
          Harga: 15000000,
          Diskon: 0.0,
          DiskonRp: 0.0,
          SubTotal: 15000000,
        },
        {
          Nama: "Eclair",
          PartNumber1: "ALL",
          Merk: "ALL",
          Kendaraan: "ALL",
          Jumlah: 1,
          Satuan: "PCS",
          Harga: 15000000,
          Diskon: 0.0,
          DiskonRp: 0.0,
          SubTotal: 15000000,
        },
      ],
    };
  },
  methods: {
    updateBarang(data){
      this.data = data
      for (let i = 0; i < this.data.length; i++) {
        const element = this.data[i];
        this.dtbarang.push(element)
      }
    }
  }
};
</script>

<style>
</style>