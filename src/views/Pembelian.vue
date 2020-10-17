<template>
  <v-data-table
    :headers="headers"
    :items="pembelian"
    sort-by="kodenota"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Pembelian</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-toolbar-title>Daftar Pembelian</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="1000px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Tambah Pembelian
            </v-btn>
          </template>

          <v-card>
            <v-toolbar
              color= 'primary'
              class="elevation-1"
              dark
            >
              <span class="headline">{{ formTitle }}</span>
            </v-toolbar>
            

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.kodenota"
                      label="Kode Nota" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6" 
                    md="4"
                  >
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
                          v-model="editedItem.tanggal"
                          label="Tanggal" dense
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.tanggal"
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
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
                          v-model="editedItem.tanggalpengiriman"
                          label="Tanggal Pengiriman" dense
                          readonly
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="editedItem.tanggalpengiriman"
                        @input="menu1 = false"
                      ></v-date-picker>
                    </v-menu>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="8"
                  >
                    <v-combobox
                      v-model="editedItem.supplier"
                      :items="supplier"
                      label="Nama Supplier" dense
                    ></v-combobox>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.billfrom"
                      label="BillFrom" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.sellfrom"
                      label="SellFrom" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.paymentterm"
                      label="PaymentTerm" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-combobox
                      v-model="editedItem.matauang"
                        :items="matauang"
                          label="Mata Uang" dense
                    ></v-combobox>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.kurs"
                      label="Kurs" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.referensi"
                      label="Referensi" dense
                    ></v-text-field>
                  </v-col>

                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.nopo"
                      label="NoPO" dense
                    >
                    <template v-slot:append-outer>
                        <div class="my-2">
                          <v-btn
                            rounded
                            small
                            color="primary"
                            dark
                          >
                            ...
                          </v-btn>
                        </div>
                      </template>
                    </v-text-field>
                  </v-col>

                  <template>
                    <v-tabs
                      v-model="tab"
                      background-color="primary"
                      dark
                    >
                      <v-tab
                        v-for="item in items"
                        :key="item.tab"
                      >
                        {{ item.tab }}
                      </v-tab>
                    </v-tabs>

                      <v-tabs-items v-model="tab">
                        <v-tab-item
                          v-for="item in items"
                          :key="item.tab"
                        >
                        <v-card flat>
                          <v-card-text>{{ item.content }}</v-card-text>
                        </v-card>
                      </v-tab-item>
                    </v-tabs-items>
                  </template>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">Anda yakin ingin menghapus item ini?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data: () => ({
        tab: null,

        matauang: [
          'Rupiah',
          'Dolar',
        ],

        supplier: [
          'Supplier 1',
          'Supplier 2',
        ],
        
        items: [
          { tab: 'Items1',
            content: 'Tab 1 Content'
          },
          { tab: 'Items2',
            content: 'Tab 2 Content'
          },
        ],

      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Kode Nota',
          align: 'start',
          value: 'kodenota',
        },
        { text: 'Tanggal', value: 'tanggal' },
        { text: 'Nama Supplier', value: 'supplier' },
        { text: 'Tanggal Pengiriman', value: 'tanggalpengiriman' },
        { text: 'Referensi', value: 'referensi' },
        { text: 'Total', value: 'total' },
        { text: 'Diskon', value: 'diskon' },
        { text: '', value: 'hasildiskon' },
        { text: 'PPn', value: 'ppn' },
        { text: 'Total Bayar', value: 'totalbayar' },
        { text: 'PPn Faktur', value: 'ppnfaktur' },
        { text: 'CekFisikInv', value: 'cekfisikinv' },
        { text: 'NoPO', value: 'nopo' },
        { text: 'NoWorkOrder', value: 'noworkorder' },
        { text: 'NomorPolisi', value: 'nopolisi' },
        { text: 'Status', value: 'status' },
        { text: 'Keterangan Status', value: 'keteranganstatus' },
        { text: 'Dibuat Tgl', value: 'dibuattgl' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      pembelian: [],
      editedIndex: -1,
      editedItem: {
        kodenota: '',
        tanggal: '',
        supplier: '',
        billfrom: '',
        sellfrom: '',
        matauang: '',
        kurs: '',
        tanggalpengiriman: '',
        referensi: '',
        nopo: '',
      },
      defaultItem: {
        kodenota: '',
        tanggal: '',
        supplier: '',
        billfrom: '',
        sellfrom: '',
        paymentterm: '',
        matauang: '',
        kurs: '',
        tanggalpengiriman: '',
        referensi: '',
        nopo: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Tambah Pembelian' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.pembelian = [
          {
            kodenota: '0101/FB/2006/000061',
            tanggal: '05/06/2020',
            supplier: 'Endhyarnie',
            tanggalpengiriman: '-',
            referensi: '12345',
            total: '1,520,000.00',
            diskon: '0.00',
            hasildiskon: '1,520,000.00',
            ppn: '0.00',
            totalbayar: '1,520,000.00',
            ppnfaktur: '0',
            cekfisikinv: '-',
            nopo: '0101/PO/2005/',
            noworkorder: '0101/WO/2005/',
            nopolisi: 'KT1234B',
            status: '-',
            keteranganstatus: '-',
            dibuattgl: '05/06/2020',
          },

          {
            kodenota: '0101/FB/2006/000062',
            tanggal: '05/06/2020',
            supplier: 'IsmaDinata',
            tanggalpengiriman: '-',
            referensi: '54321',
            total: '5,278,000.00',
            diskon: '0.00',
            hasildiskon: '5,278,000.00',
            ppn: '0.00',
            totalbayar: '5,278,000.00',
            ppnfaktur: '0',
            cekfisikinv: '-',
            nopo: '0101/PO/2005/',
            noworkorder: '0101/WO/2005/',
            nopolisi: 'B4321AB',
            status: '-',
            keteranganstatus: '-',
            dibuattgl: '05/06/2020',
          },

          {
            kodenota: '0101/FB/2006/000063',
            tanggal: '05/06/2020',
            supplier: 'Dinata',
            tanggalpengiriman: '-',
            referensi: '54321',
            total: '5,147,555.00',
            diskon: '314,755.50',
            hasildiskon: '2,832,799.50',
            ppn: '283,279.95',
            totalbayar: '3,116,079.45',
            ppnfaktur: '0',
            cekfisikinv: '-',
            nopo: '0101/PO/2005/',
            noworkorder: '0101/WO/2004/',
            nopolisi: 'KT0101AB',
            status: '-',
            keteranganstatus: '-',
            dibuattgl: '05/06/2020',
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.pembelian.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.pembelian.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.pembelian.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false 
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.pembelian[this.editedIndex], this.editedItem)
        } else {
          this.pembelian.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>