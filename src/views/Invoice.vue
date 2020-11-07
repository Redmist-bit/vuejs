<template>
  <v-col cols="12" md="12">

    <v-toolbar flat dark dense color="danger" class="elevation-1">
      <v-toolbar-title>Daftar Invoice</v-toolbar-title>
      <v-divider class="mx-4" inset vertical></v-divider>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="1000px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on"  class="mx-2"  medium>
              <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline">{{ formTitle }}</span>
          </v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="editedItem.KodeNota"
                    label="Kode Nota"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-combobox
                    v-model="editedItem.MataUang"
                    label="Mata Uang"
                    :items="itemsMataUang"
                  ></v-combobox>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-menu
                    v-model="menu1"
                    :close-on-content-click="false"
                    :nudge-right="40"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="editedItem.Tanggal"
                        label="Tanggal"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="editedItem.Tanggal"
                      @input="menu1 = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Kurs"
                    label="Kurs"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Pelanggan"
                    label="Pelangan"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Refrensi"
                    label="Refrensi"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field v-model="editedItem.NomorWo" label="Nomer WO">
                    <template v-slot:append-outer>
                      <button @click="parsing">tes</button>
                      <CariWo  v-on:lempar="updateWo($event)"/>
                    </template>
                    
                      <button>in</button>
                    
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Kass"
                    label="Kass"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.NomorRangka"
                    label="Nomer Rangka"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.KTtg"
                    label="KT tg"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.NomorMesin"
                    label="Nomor Mesin"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Ddtb"
                    label="Dd tb"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.NomorPolisi"
                    label="Nomor Polisi"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Kppn"
                    label="KPpn"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Odometer"
                    label="Odometer"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Kexc"
                    label="Kexc"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.PaymentTerm"
                    label="Payment Term"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6" class="mt-n8">
                  <v-text-field
                    v-model="editedItem.Kund"
                    label="KUND"
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-btn class="mb-2">Load Estimasi Terakhir</v-btn>
              </v-row>
              <v-row>
                <h5>

                  WO:{{selected}}
                </h5>
              </v-row>
              <v-row>
                <v-tabs>
                  <v-tab
                    >Barang
                    <v-tab-item>h1 tes</v-tab-item>
                  </v-tab>
                  <v-tab>Pekerjaan</v-tab>
                  <v-tab-item>
                    <v-card>
                      <Barang />
                    </v-card>
                  </v-tab-item>
                  <v-tab-item>
                    <v-card>
                      <v-container>
                        <Pekerjaan />
                      </v-container>
                    </v-card>
                  </v-tab-item>
                </v-tabs>
              </v-row>
              <v-row class="flex-row-reverse mt-n6">
                <v-col cols="4">
                  <v-text-field></v-text-field>
                </v-col>
                <v-col cols="1 mt-4">
                  <v-subheader>DPP</v-subheader>
                </v-col>
              </v-row>
              <v-row class="flex-row-reverse mt-n12">
                <v-col cols="3">
                  <v-text-field></v-text-field>
                </v-col>

                <v-col cols="1">
                  <v-text-field></v-text-field>
                </v-col>
                <v-col cols="1 mt-4">
                  <v-subheader>PPN</v-subheader>
                </v-col>
              </v-row>
              <v-row class="flex-row-reverse mt-n12">
                <v-col cols="4">
                  <v-text-field></v-text-field>
                </v-col>
                <v-col cols="1 mt-4">
                  <v-subheader>Total Bayar</v-subheader>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
            <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <div id="app">
      <ejs-grid
          :dataSource="invoice"
          height="200"
          width="100%"
          :allowReordering = true
          :editSettings='editSettings'
          :selectionSettings='selectionOptions'
          :allowGrouping='true'
          :groupSettings='groupSettings'
          :allowSorting='true'
          :allowMultiSorting='true'
          :allowFiltering='true'
          :filterSettings='filterOptions'
          :allowResizing='true'
          :allowPaging='true'
          :pageSettings='pageSettings'
          :toolbar='toolbarOptions'
          :commandClick="commandClick"
          >
          <e-columns>
              <e-column field="Commands" headerText="Action" width="150" :commands="commands">
                  <div class="btn-group">
                      <button type="button" class="btn btn-default" (click)='prediemRowEdit($event)'>
                          <i class="fa fa-pencil"></i></button>
                      <button type="button" class="btn btn-default" (click)='prediemRowDelete($event)'>
                          <i class="fa fa-trash"></i></button>
                  </div>
              </e-column>
              <e-column
                  :filter='filter'
                  field='KodeNota'
                  headerText='Kode Nota'
                  textAlign='Left'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Tanggal'
                  headerText='Tanggal'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Lokasi'
                  headerText='Lokasi'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KetWO'
                  headerText='KetWO'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NamaPelanggan'
                  headerText='Nama Pelanggan'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NamaPemilik'
                  headerText='Nama Pemilik'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NomorRangka'
                  headerText='Nomor Rangka'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NomorMesin'
                  headerText='Nomor Mesin'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NomorPolisi'
                  headerText='Nomor Polisi'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Odometer'
                  headerText='Odometer'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Status'
                  headerText='Status'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KeteranganStatus'
                  headerText='Keterangan Status'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Keterangan'
                  headerText='Keterangan'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Saran'
                  headerText='Saran'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NomorWO'
                  headerText='Nomor WO'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PaymentTerm'
                  headerText='Payment Term'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Total'
                  headerText='Total'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Diskon'
                  headerText='Diskon'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='DPP'
                  headerText='DPP'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PPn'
                  headerText='PPn'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PPnPersen'
                  headerText='PPn Persen'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PPnPersenManual'
                  headerText='PPn Persen Manual'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='OnRisk'
                  headerText='ON RISK'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TotalBayar'
                  headerText='Total Bayar'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Nett'
                  headerText='Nett'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Terbayar'
                  headerText='Terbayar'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='SisaBayar'
                  headerText='Sisa Bayar'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Kass'
                  headerText='Kass'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KTtg'
                  headerText='KTtg'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Ddtb'
                  headerText='Ddtb'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KPpn'
                  headerText='KPpn'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Kexc'
                  headerText='Kexc'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Kund'
                  headerText='Kund'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='MataUang'
                  headerText='Mata Uang'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Kurs'
                  headerText='Kurs'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Refrensi'
                  headerText='Refrensi'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KeteranganPenagihan'
                  headerText='Keterangan Penagihan'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PIC'
                  headerText='PIC'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='InfoPemilik'
                  headerText='Info Pemilik'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NoFakturPajak'
                  headerText='No Faktur Pajak'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TglKirim'
                  headerText='Tanggal Kirim'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Kurs'
                  headerText='Kurs'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Refrensi'
                  headerText='Refrensi'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='KeteranganPenagihan'
                  headerText='Keterangan Penagihan'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='PIC'
                  headerText='PIC'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='InfoPemilik'
                  headerText='Info Pemilik'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NoFakturPajak'
                  headerText='No Faktur Pajak'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TglKirim'
                  headerText='Tanggal Kirim'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TglKonfirmasiTerima'
                  headerText='Tanggal Konfirmasi Terima'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='NoResi'
                  headerText='No Resi'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='JumlahCetak'
                  headerText='Jumlah Cetak'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TanggalMasuk'
                  headerText='Tanggal Masuk'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='TanggalKeluar'
                  headerText='Tanggal Keluar'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='WriteOff'
                  headerText='Write Off'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='DibBuatTgl'
                  headerText='Di Buat Tanggal'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='DiBuatOleh'
                  headerText='Di Buat Oleh'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='DiUbahTgl'
                  headerText='Di Ubah Tanggal'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='DiUbahOleh'
                  headerText='Di Ubah Oleh'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='Pelanggan'
                  headerText='Pelanggan'
                  width=180
              ></e-column>

              <e-column
                  :filter='filter'
                  field='SellTo'
                  headerText='Sell To'
                  width=180
              ></e-column>
          </e-columns>
      </ejs-grid>
    </div>
  </v-col>
    
    
  
</template>

<script>
import Vue from "vue";
import { GridPlugin, Toolbar, Page, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder,   } from "@syncfusion/ej2-vue-grids";
import Barang from "./barang";
import Pekerjaan from "./pekerjaan";
import CariWo from "../components/CariWo";
Vue.use(GridPlugin);
// import func from '../../vue-temp/vue-editor-bridge';
export default {
  components: {
    Pekerjaan,
    Barang,
    CariWo,
  },
  data: () => ({
    selected: ['waw'],
    dialog: false,
    dialogWo: false,
    date: new Date().toISOString().substr(0, 10),
    menu1: false,
    itemsMataUang: ["Dollar", "Rupiah", "Euro"],
    invoice_products: [
      {
        product_no: "",
        product_name: "",
        product_price: "",
        product_qty: "",
        line_total: 0,
      },
    ],
    headers: [
      {
        text: "Kode Nota",
        align: "start",
        sortable: false,
        value: "KodeNota",
      },
      { text: "Tanggal", value: "Tanggal" },
      { text: "Jenis Work Order", value: "JenisWorkOrder", width: "150px" },
      { text: "Lokasi", value: "Lokasi", width: "150px" },
      { text: "Ket WO", value: "KetWO", width: "150px" },
      { text: "Nama Pelanggan", value: "NamaPelanggan", width: "150px" },
      { text: "Nama Pemilik", value: "NamaPemilik", width: "150px" },
      { text: "Nomor Rangka", value: "NomorRangka" },
      { text: "Nomor Mesin", value: "NomorMesin" },
      { text: "Nomor Polisi", value: "NomorPolisi", width: "150px" },
      { text: "Odometer", value: "Odometer", width: "150px" },
      { text: "Status", value: "Status" },
      { text: "Keterangan Status", value: "KeteranganStatus" },
      { text: "Keterangan", value: "Keterangan" },
      { text: "Saran", value: "Saran" },
      { text: "Nomor WO", value: "NomorWo" },
      { text: "PaymentTerm", value: "PaymentTerm", width: "150px" },
      { text: "Total", value: "Total", width: "150px" },
      { text: "Diskon", value: "Diskon", width: "150px" },
      { text: "DPP", value: "DPP", width: "150px" },
      { text: "PPn", value: "PPn", width: "150px" },
      { text: "PPn Persen", value: "PPnPersen", width: "150px" },
      { text: "PPn Persen Manual", value: "PPnPersenManual", width: "160px" },
      { text: "ON Risk", value: "OnRisk", width: "150px" },
      { text: "Total Bayar", value: "TotalBayar", width: "150px" },
      { text: "Nett", value: "Nett", width: "150px" },
      { text: "Terbayar", value: "Terbayar", width: "150px" },
      { text: "Sisa Bayar", value: "SisaBayar", width: "150px" },
      { text: "Kass", value: "Kass", width: "150px" },
      { text: "KTtg", value: "KTtg", width: "150px" },
      { text: "Ddtb", value: "Ddtb", width: "150px" },
      { text: "KPpn", value: "Kppn", width: "150px" },
      { text: "Kexc", value: "Kexc", width: "150px" },
      { text: "Kund", value: "Kund", width: "150px" },
      { text: "Mata Uang", value: "MataUang", width: "150px" },
      { text: "Kurs", value: "Kurs", width: "150px" },
      { text: "Refrensi", value: "Refrensi", width: "150px" },
      {
        text: "Keterangan Penagihan",
        value: "KeteranganPenagihan",
        width: "150px",
      },
      { text: "PIC", value: "PIC", width: "150px" },
      { text: "Info Pemilik", value: "InfoPemilik", width: "150px" },
      { text: "No Faktur Pajak", value: "NoFakturPajak", width: "150px" },
      { text: "Tgl Kirim", value: "TglKirim", width: "150px" },
      {
        text: "Tgl Konfirmasi Terima",
        value: "NetTglKonfirmasiTerima",
        width: "150px",
      },
      { text: "No Resi", value: "NoResi", width: "150px" },
      { text: "Jumlah Cetak", value: "JumlahCetak", width: "150px" },
      { text: "Tanggal Masuk", value: "TanggalMasuk" },
      { text: "Tanggal Keluar", value: "TanggalKeluar" },
      { text: "Write Off", value: "WriteOff" },
      { text: "Di Buat Tgl", value: "DiBuatTgl", width: "100px" },
      { text: "Di Buat Oleh", value: "DiBuatOleh", width: "100px" },
      { text: "Di Ubah Tgl", value: "DiUbahTgl", width: "100px" },
      { text: "Di Ubah Oleh", value: "DiUbahOleh", width: "110px" },
      { text: "Pelanggan", value: "Pelanggan" },
      { text: "Sell To", value: "SellTo" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    invoice: [],
    editedIndex: -1,
    editedItem: {
      KodeNota:'',
      Tanggal:'',
      JenisWorkOrder:'',
      Lokasi:'',
      KetWO:'',
      NamaPelanggan:'',
      NamaPemilik:'',
      NomorRangka:'',
      NomorMesin:'',
      NomorPolisi:'',
      Odometer:'',
      Status:'',
      KeteranganStatus:'',
      Keterangan:'',
      Saran:'',
      NomorWo:'',
      PaymentTerm:'',
      Total:'',
      Diskon:'',
      DPP:'',
      PPn:'',
      PPnPersen:'',
      PPnPersenManual:'',
      OnRisk:'',
      TotalBayar:'',
      Nett:'',
      Terbayar:'',
      SisaBayar:'',
      Kass:'',
      KTtg:'',
      Ddtb:'',
      Kppn:'',
      Kexc:'',
      Kund:'',
      MataUang:'',
      Kurs:'',
      Refrensi:'',
      KeteranganPenagihan:'',
      PIC:'',
      InfoPemilik:'',
      NoFakturPajak:'',
      TglKirim:'',
      NetTglKonfirmasiTerima:'',
      NoResi:'',
      JumlahCetak:'',
      TanggalMasuk:'',
      TanggalKeluar:'',
      WriteOff:'',
      DiBuatTgl:'',
      DiBuatOleh:'',
      DiUbahTgl:'',
      DiUbahOleh:'',
      Pelanggan:'',
      SellTo:''
    },
    defaultItem: {
      KodeNota:'',
      Tanggal:'',
      JenisWorkOrder:'',
      Lokasi:'',
      KetWO:'',
      NamaPelanggan:'',
      NamaPemilik:'',
      NomorRangka:'',
      NomorMesin:'',
      NomorPolisi:'',
      Odometer:'',
      Status:'',
      KeteranganStatus:'',
      Keterangan:'',
      Saran:'',
      NomorWo:'',
      PaymentTerm:'',
      Total:'',
      Diskon:'',
      DPP:'',
      PPn:'',
      PPnPersen:'',
      PPnPersenManual:'',
      OnRisk:'',
      TotalBayar:'',
      Nett:'',
      Terbayar:'',
      SisaBayar:'',
      Kass:'',
      KTtg:'',
      Ddtb:'',
      Kppn:'',
      Kexc:'',
      Kund:'',
      MataUang:'',
      Kurs:'',
      Refrensi:'',
      KeteranganPenagihan:'',
      PIC:'',
      InfoPemilik:'',
      NoFakturPajak:'',
      TglKirim:'',
      NetTglKonfirmasiTerima:'',
      NoResi:'',
      JumlahCetak:'',
      TanggalMasuk:'',
      TanggalKeluar:'',
      WriteOff:'',
      DiBuatTgl:'',
      DiBuatOleh:'',
      DiUbahTgl:'',
      DiUbahOleh:'',
      Pelanggan:'',
      SellTo:''
    },
    groupSettings: { allowReordering: true },
    selectionOptions: { type: 'Multiple' },
    toolbarOptions: ['Search'],
    pageSettings: {pageSize: 5, pageSizes :['5','10','15','20','50','All']},
    filterOptions: { type: 'Menu' },
    filter: { type : 'CheckBox' },
    editSettings: { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
    commands: [
            {  buttonOption: { cssClass: 'e-flat Edit', iconCss: 'e-edit e-icons' } },
        { buttonOption: { cssClass: 'e-flat Delete', iconCss: 'e-delete e-icons' } },
        ],
  }),

  provide: {
        grid: [Page, Toolbar, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder]
    },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    commandClick: function(args) {
        if (args.target.classList.contains("custombutton")) {
            // let tampung = []
            let data = JSON.stringify(args.rowData)
            // console.log(args);
            // alert(JSON.stringify(args.rowData));
            // console.log(JSON.stringify(args.rowData))
            // tampung.push(args.rowData)
            // this.editedItem = Object.assign({},data)
            console.log(data)
        } else if (args.target.classList.contains("Delete")) {
            var r = confirm("Yakin Hapus Data?");
            if (r == true) {
                // api.delete('/customers/'+args.rowData.id+'?token='+this.token)
                // .then((res)=> {
                //     // this.item.splice(index, 1)
                //     console.log(res)
                //     this.getData()
                // })
                // .catch((err)=> {
                //     console.log(err)
                // })
            } 
            // let data = JSON.stringify(args.rowData)
            // console.log(data)
            // console.log(args)
            
        } else if (args.target.classList.contains('Edit')) {
            let data = args
            this.editedIndex = 1;
            console.log(data)
            this.editedItem = data.rowData
            this.dialog = true
        }},
    parsing: function(){
      this.editedItem.NomorWo=this.selected[0]["NomorWo"]
    },
    updateWo: function(updateWo){
      this.selected = updateWo
      // this.editItem.NomorWo.push(this.selected[0]["NomorWo"])
      // return{
      // NomorWo : `updateWo[0]["NomorWo"]`,

      //   NamaPelanggan : updateWo[0]["NamaPelanggan"]
      // }
      // this.parsing
      // this.parsing();
      this.editedItem.NomorWo = this.selected[0]["NomorWo"]
      this.editedItem.Pelanggan= this.selected[0]["NamaPelanggan"]
      this.editedItem.NomorRangka = this.selected[0]["NomorRangka"]
      this.editedItem.NomorMesin = this.selected[0]["NomorMesin"]
      this.editedItem.NomorPolisi = this.selected[0]["NomorPolisi"]
    },
    addNewRow() {
      this.invoice_products.push({
        KodeNota:'',
        Tanggal:'',
        JenisWorkOrder:'',
        Lokasi:'',
        KetWO:'',
        NamaPelanggan:'',
        NamaPemilik:'',
        NomorRangka:'',
        NomorMesin:'',
        NomorPolisi:'',
        Odometer:'',
        Status:'',
        KeteranganStatus:'',
        Keterangan:'',
        Saran:'',
        NomorWo:'',
        PaymentTerm:'',
        Total:'',
        Diskon:'',
        DPP:'',
        PPn:'',
        PPnPersen:'',
        PPnPersenManual:'',
        OnRisk:'',
        TotalBayar:'',
        Nett:'',
        Terbayar:'',
        SisaBayar:'',
        Kass:'',
        KTtg:'',
        Ddtb:'',
        Kppn:'',
        Kexc:'',
        Kund:'',
        MataUang:'',
        Kurs:'',
        Refrensi:'',
        KeteranganPenagihan:'',
        PIC:'',
        InfoPemilik:'',
        NoFakturPajak:'',
        TglKirim:'',
        NetTglKonfirmasiTerima:'',
        NoResi:'',
        JumlahCetak:'',
        TanggalMasuk:'',
        TanggalKeluar:'',
        WriteOff:'',
        DiBuatTgl:'',
        DiBuatOleh:'',
        DiUbahTgl:'',
        DiUbahOleh:'',
        Pelanggan:'',
        SellTo:''
      });
    },

    initialize() {
      this.invoice = [
        {
          KodeNota: "0101/FW/2007/000024",
          Tanggal: "03/07/2020",
          JenisWorkOrder: "CAR",
          Lokasi: "HO",
          KetWO: "KPP Indexim Kim",
          NamaPelanggan: "Frozen Yogurt",
          NamaPemilik: "Frozen Yogurt",
          NomorRangka: "0101/FW/2007/000024",
          NomorMesin: "0101/FW/2007/000024",
          NomorPolisi: "KT 2055 IW",
          Odometer: "0",
          Status: "0101/FW/2007/000024",
          KeteranganStatus: "0101/FW/2007/000024",
          Keterangan: "0101/FW/2007/000024",
          Saran: "0101/FW/2007/000024",
          NomorWo: "0101/WO/2006/000159",
          PaymentTerm: "0",
          Total: 7500000,
          Diskon: 0.0,
          DPP: 2500000,
          PPn: 250000,
          PPnPersen: 10.0,
          PPnPersenManual: 10.0,
          OnRisk: 0,
          TotalBayar: 10000000,
          Nett: 1000000,
          Terbayar: 10000000,
          SisaBayar: 10000000,
          Kass: 10000000,
          KTtg: 10000000,
          Ddtb: 1000000,
          Kppn: 0,
          Kexc: 0,
          Kund: 0,
          MataUang: "IDR",
          Kurs: 1,
          Refrensi: "",
          KeteranganPenagihan: "proses payment 06",
          PIC: "Me",
          InfoPemilik: "Me",
          NoFakturPajak: "13124124",
          TglKirim: "10/08/2020",
          TglKonfirmasiTerima: "10/08/2020",
          NoResi: "2313123",
          JumlahCetak: 2,
          TanggalMasuk: "10/08/2020",
          TanggalKeluar: "10/08/2020",
          WriteOff: "",
          DiBuatTgl: "10/08/2020",
          DiBuatOleh: "0101/DESY",
          DiUbahTgl: "10/08/2020",
          DiUbahOleh: "0101/DESY",
          Pelanggan: "0101/0284",
          SellTo: "0101/0284",
        },
        {
          KodeNota: "0101/FW/2007/000033",
          Tanggal: "04/07/2020",
          JenisWorkOrder: "HE",
          Lokasi: "HO",
          KetWO: "KPP Indexim Kim",
          NamaPelanggan: "Frozen Yogurt",
          NamaPemilik: "Frozen Yogurt",
          NomorRangka: "0101/FW/2007/000024",
          NomorMesin: "0101/FW/2007/000024",
          NomorPolisi: "KT 2055 IW",
          Odometer: "0",
          Status: "-",
          KeteranganStatus: "-",
          Keterangan: "-",
          Saran: "-",
          NomorWo: "0101/WO/2006/000129",
          PaymentTerm: "0",
          Total: 7500000,
          Diskon: 0.0,
          DPP: 2500000,
          PPn: 250000,
          PPnPersen: 10.0,
          PPnPersenManual: 10.0,
          OnRisk: 0,
          TotalBayar: 10000000,
          Nett: 1000000,
          Terbayar: 10000000,
          SisaBayar: 10000000,
          Kass: 10000000,
          KTtg: 10000000,
          Ddtb: 1000000,
          Kppn: 0,
          Kexc: 0,
          Kund: 0,
          MataUang: "IDR",
          Kurs: 1,
          Refrensi: "",
          KeteranganPenagihan: "proses payment 06",
          PIC: "Me",
          InfoPemilik: "Me",
          NoFakturPajak: "13124124",
          TglKirim: "10/08/2020",
          TglKonfirmasiTerima: "10/08/2020",
          NoResi: "2313123",
          JumlahCetak: 4,
          TanggalMasuk: "10/08/2020",
          TanggalKeluar: "10/08/2020",
          WriteOff: true,
          DiBuatTgl: "10/08/2020",
          DiBuatOleh: "0101/TITIN",
          DiUbahTgl: "10/08/2020",
          DiUbahOleh: "0101/TITIN",
          Pelanggan: "0101/0284",
          SellTo: "0101/0284",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.invoice.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.invoice.indexOf(item);
      confirm("Are you sure you want to delete this item?") &&
        this.invoice.splice(index, 1);
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.invoice[this.editedIndex], this.editedItem);
      } else {
        this.invoice.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>

<style >
.margin-top  {
  margin-top:20px
}
</style>