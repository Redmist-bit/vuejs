<template>
  <v-container>
    <h3 class="mt-4 mb-4 ml-4">DAFTAR PELANGGAN</h3>
    <button @click="logout">logout</button>
    <v-divider vertical></v-divider>
    <v-data-table fixed-header :headers="headers" :items="item" sort-by="kode">
      <template v-slot:top>
        <v-toolbar flat color="white">
          <!-- <v-toolbar-title>DAFTAR PELANGGAN</v-toolbar-title> -->

          <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                <v-icon>mdi-plus</v-icon>TAMBAH
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="2">
                      <v-text-field
                        v-model="editedItem.id"
                        label="Kode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <v-text-field
                        v-model="editedItem.Nama"
                        label="Nama"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
                      <v-text-field
                        v-model="editedItem.BadanHukum"
                        label="Badan Hukum"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field
                        v-model="editedItem.Alamat"
                        label="Alamat"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Kota"
                        label="Kota"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.KodePos"
                        label="Kode Pos"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Negara"
                        label="Negara"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Telp"
                        label="Telepon"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Fax"
                        label="Fax"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.ContactPerson"
                        label="Contact Person"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.SalesPerson"
                        label="Sales Person"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.GrupPelanggan"
                        label="Group Pelanggan"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <!-- <v-switch
                        v-model="editedItem.Aktif"
                        color="primary"
                        label="Aktif"
                      ></v-switch> -->
                      <v-text-field v-model="editedItem.Aktif" label="Aktif"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.KreditLimit"
                        label="Kredit Limit"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.lamaKredit"
                        label="Lama Kredit"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.CustSince"
                        label="Cust Since"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Memo"
                        label="Memo"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.Asuransi"
                        label="Asuransi"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">
                  <v-icon>mdi-arrow-left</v-icon>Cancel
                </v-btn>
                <v-btn color="success" @click="save">
                  <v-icon class="mr-4">fas fa-save</v-icon>Save
                </v-btn>
                <v-btn color="success" @click="UpdateData">
                  <v-icon class="mr-4">fas fa-save</v-icon>update
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-text-field
            append-icon="mdi-magnify"
            single-line
            hide-details
            label="Search"
          ></v-text-field>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
        <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import api from '../services/http'
export default {
  data: () => ({
    token : localStorage.getItem('token'),

    dialog: false,
    headers: [
      { text: "Kode", value: "id" },
      { text: "Nama", value: "Nama" },
      { text: "Badan Hukum", value: "BadanHukum" },
      { text: "Alamat", value: "Alamat" },
      { text: "Kota", value: "Kota" },
      { text: "Kode Pos", value: "KodePos" },
      { text: "Negara", value: "Negara" },
      { text: "Telp", value: "Telp" },
      { text: "Fax", value: "Fax" },
      { text: "Email", value: "Email" },
      { text: "Contact Person", value: "ContactPerson" },

      { text: "Sales Person", value: "SalesPerson" },
      { text: "Group Pelanggan", value: "GrupPelanggan" },
      { text: "Aktif", value: "Aktif" },
      { text: "Kredit Limit", value: "KreditLimit" },
      { text: "Lama Kredit", value: "LamaKredit" },
      { text: "Cust Since", value: "CustSince" },
      { text: "Memo", value: "Memo" },
      { text: "Asuransi", value: "Asuransi" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    item: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      badanHukum: "",
      alamat: "",
      kota: "",
      kodePos: "",
      negara: "",
      telp: "",
      fax: "",
      email: "",
      cp: "",
      sales: "",
      groupPelanggan: "",
      aktif: "",
      kreditLimit: "",
      lamaKredit: "",
      CustSince: "",
      memo: "",
      asuransi: "",
    },
    defaultItem: {
      name: "",
      badanHukum: "",
      alamat: "",
      kota: "",
      kodePos: "",
      negara: "",
      telp: "",
      fax: "",
      email: "",
      cp: "",
      sales: "",
      groupPelanggan: "",
      aktif: "",
      kreditLimit: "",
      lamaKredit: "",
      CustSince: "",
      memo: "",
      asuransi: "",
    },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "Add New Customer" : "Edit Customer";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
  },

  // created() {
  //   this.initialize();
  // },

  mounted(){
    this.getData()
    console.log(this.token)
  },

  methods: {
    logout(){
      api.post('/logout?token='+this.token)
      .then(
        localStorage.removeItem('token'),
        // console.log('berhasil logout'),
        this.$router.push('/')
      )
    },
    getData(){
      api.get('/customers?token='+this.token).then(
        res=>{
          console.log(res)
          this.item = res.data
        },
        err => {
          console.log(err)
        }
      )
    },
    TambahData(){
      api.post('/customers?token='+this.token, {
        Nama: this.editedItem.Nama,
        BadanHukum: this.editedItem.BadanHukum,
        Alamat: this.editedItem.Alamat,
        Kota: this.editedItem.Kota,
        KodePos: this.editedItem.KodePos,
        Negara: this.editedItem.Negara,
        Telp: this.editedItem.Telp,
        Fax: this.editedItem.Fax,
        Email: this.editedItem.Email,
        ContactPerson: this.editedItem.ContactPerson,
        SalesPerson: this.editedItem.SalesPerson,
        GrupPelanggan: this.editedItem.GrupPelanggan,
        Aktif: this.editedItem.Aktif,
        KreditLimit: this.editedItem.KreditLimit,
        CustSince: this.editedItem.CustSince,
        Memo: this.editedItem.Memo,
        Asuransi: this.editedItem.Asuransi
      })
      .then((res) => {
        this.Nama = ''
        this.BadanHukum = ''
        this.Alamat=''
        this.Kota=''
        this.KodePos=''
        this.Negara=''
        this.Telp=''
        this.Fax=''
        this.Email=''
        this.ContactPerson=''
        this.SalesPerson=''
        this.GrupPelanggan=''
        this.Aktif=''
        this.KreditLimit=''
        this.CustSince=''
        this.Memo=''
        this.Asuransi=''
        console.log(res)
        this.getData()
      })
      .catch((err) => {
        console.log(err)
      })
    },

    HapusData(item, index){
      api.delete('/customers/'+item.id+'?token='+this.token)
      .then((res)=> {
        this.item.splice(index, 1)
        console.log(res)
      })
      .catch((err)=> {
        console.log(err)
      })
    },

    UpdateData(){
      api.put('/customers/' + this.editedItem.id +'?token='+this.token, {
        Nama: this.editedItem.Nama,
        BadanHukum: this.editedItem.BadanHukum,
        Alamat: this.editedItem.Alamat,
        Kota: this.editedItem.Kota,
        KodePos: this.editedItem.KodePos,
        Negara: this.editedItem.Negara,
        Telp: this.editedItem.Telp,
        Fax: this.editedItem.Fax,
        Email: this.editedItem.Email,
        ContactPerson: this.editedItem.ContactPerson,
        SalesPerson: this.editedItem.SalesPerson,
        GrupPelanggan: this.editedItem.GrupPelanggan,
        Aktif: this.editedItem.Aktif,
        KreditLimit: this.editedItem.KreditLimit,
        CustSince: this.editedItem.CustSince,
        Memo: this.editedItem.Memo,
        Asuransi: this.editedItem.Asuransi
      })
      .then((res)=>{
        this.id = ''
        console.log(res)
        this.getData()
      })
      .catch((err)=> {
        console.log(err)
      })
    },
    // initialize() {
    //   this.item = [
        
    //   ];
    // },

    editItem(item) {
      this.editedIndex = this.item.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      const index = this.item.indexOf(item);
      let hapus = confirm("Are you sure you want to delete this item?") 
      if(hapus){
        
        this.HapusData(item, index);
      }
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.item[this.editedIndex], this.editedItem);
    //   } else {
    //     this.item.push(this.editedItem);
    //     this.TambahData(this.editedItem)
    //   }
    //   this.close();
    // },
    save(){
      if(this.formTitle === "Add New Customer"){
        this.TambahData()
      }else{
        this.UpdateData()
      }
      this.close()
    }
  },
};
</script>

<style></style>
