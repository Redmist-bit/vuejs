<template>
  <div>
  <h2>test syncfusion</h2>
    <ejs-grid :dataSource="data" :allowPaging="true" :allowSorting='true' :allowFiltering='true' :allowGrouping='true' :pageSettings='pageSettings'>
          <e-columns>
            <e-column field='OrderID' headerText='Order ID' textAlign='Right' width=90></e-column>
            <e-column field='CustomerID' headerText='Customer ID' width=120></e-column>
            <e-column field='Freight' headerText='Freight' textAlign='Right' format='C2' width=90></e-column>
          </e-columns>
          <e-aggregates>
            <e-aggregate>
                <e-columns>
                    <e-column type="Sum" field="Freight"  :footerTemplate='footerSum'></e-column>
                </e-columns>
            </e-aggregate>
            <e-aggregate>
                    <e-columns>
                        <e-column type="Max" field="Freight" :footerTemplate='footerMax'></e-column>
                    </e-columns>
            </e-aggregate>
          </e-aggregates>
          <!-- <e-aggregates>
                <e-aggregate>
                    <e-columns>
                        <e-column type="Sum" field="Freight" :footerTemplate='foterSum'></e-column>
                    </e-columns>
                </e-aggregate>
            </e-aggregates> -->
        </ejs-grid>
  </div>
</template>

<script>

import Vue from "vue";
import { GridPlugin, Page, Sort, Filter, Group, Aggregate } from "@syncfusion/ej2-vue-grids";
Vue.use(GridPlugin);
export default {
    data() {
    return {
        foterSum() {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      },
      footerMax: function () {
        return  { template : Vue.component('maxTemplate', {
            template: `Max: {{data.Max}}`,
            data () {return { data: {}};}
            })
          }
      },
      data: [
          { OrderID: 10248, CustomerID: 'VINET', Freight: 3238 },
          { OrderID: 10249, CustomerID: 'TOMSP', Freight: 1161 },
          { OrderID: 10250, CustomerID: 'HANAR', Freight: 6583 },
          { OrderID: 10251, CustomerID: 'VICTE', Freight: 4134 },
          { OrderID: 10252, CustomerID: 'SUPRD', Freight: 513 },
          { OrderID: 10253, CustomerID: 'HANAR', Freight: 5817 },
          { OrderID: 10254, CustomerID: 'CHOPS', Freight: 2298 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10255, CustomerID: 'RICSU', Freight: 14833 },
          { OrderID: 10256, CustomerID: 'WELLI', Freight: 1397 }
      ],
      pageSettings: { pageSize: 20 },
      
    };
  },
  provide: {
    grid: [Page, Sort, Filter, Group, Aggregate]
  },
  methods:{
      footerSum () {
        return  { template : Vue.component('sumTemplate', {
            template: `<span>Sum: {{data.Sum}}</span>`,
            data () {return { data: {}};}
            })
          }
      }
  }
}
</script>

<style>
    
</style>

{% endraw %}