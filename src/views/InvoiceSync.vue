<template>
    <v-col cols="12" md="12">
        <v-toolbar flat dark dense color="danger" class="elevation-1">
        <v-toolbar-title dark>
            <v-icon>mdi-cart</v-icon>
            Invoice
        </v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-dialog v-model="dialog" max-width="1000px">
            <template v-slot:activator="{on, attrs}">
                <v-btn color="primary" dark v-bind="attrs" v-on="on"  class="mx-2"  medium>
                    <v-icon dark>mdi-plus</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-title>
                <span class="headline">{{ formTitle }}</span>
                    <!-- <h3>Tambah data</h3> -->
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
                    <v-btn color="blue darken-1" text @click="close">
                        <v-icon>mdi-arrow-left</v-icon>Cancel
                    </v-btn>
                    <v-btn color="success" @click="save">
                        <v-icon class="mr-4">fas fa-save</v-icon>Save
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        </v-toolbar>

        
    </v-col>
</template>

<script>
import Barang from "./barang";
import Pekerjaan from "./pekerjaan";
import CariWo from "../components/CariWo"
import Vue from "vue"
import { GridPlugin, Toolbar, Page, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder,   } from "@syncfusion/ej2-vue-grids";
Vue.use(GridPlugin)
export default {
    components: {
        Pekerjaan,
        Barang,
        CariWo,
    },
    data: () => ({
        
            itemsMataUang: ["Dollar", "Rupiah", "Euro"],
            selected: ['waw'],
            menu1: false,
            
            dialogWo: false,
            groupSettings: { allowReordering: true },
            selectionOptions: { type: 'Multiple' },
            toolbarOptions: ['Search'],
            pageSettings: {pageSize: 5, pageSizes :['5','10','15','20','50','All']},
            filterOptions: { type: 'Menu' },
            filter: { type : 'CheckBox' },
            editSettings: { showDeleteConfirmDialog: true, allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' },
            data: [],
            commands: [
                { buttonOption: { cssClass: 'e-flat Edit', iconCss: 'e-edit e-icons' } },
                { buttonOption: { cssClass: 'e-flat Delete', iconCss: 'e-delete e-icons' } },
            ],
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
        
    }),
    computed: {
        formTitle(){
            return this.editedIndex === -1 ? "Add New Customer" : "Edit Customer";
        }
    },
    provide: {
        grid: [Page, Toolbar, Aggregate, Resize, Filter, Sort, Group, Edit, CommandColumn, Reorder]
    },
    watch: {
    dialog(val) {
        val || this.close();
        },
    },
    methods: {
        initialize() {
        this.data = [
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
        
        close() {
        this.dialog = false;
        this.editedItem = this.defaultItem
        this.editedIndex = -1
        },

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
    },
    created(){
        this.initialize()
    }
}
</script>

<style>

</style>