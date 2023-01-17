import { Component } from '@angular/core';
import { ApiCallServiceService } from 'src/app/services/api-call-service.service';

import { ColDef, GridReadyEvent, ColumnApi, GridApi } from "ag-grid-community";

@Component({
  selector: 'app-core-page',
  templateUrl: './core-page.component.html',
  styleUrls: ['./core-page.component.css']
})
export class CorePageComponent {
  data: any[] = []
  gridApi: GridApi | undefined;
  gridColumnApi: ColumnApi | undefined;
  rowData: any
  d: any;


  constructor(private apiService: ApiCallServiceService) {

  }


  defaultColDef = { resizable: true };
  columnDefs = [
    { headerName: 'Make', field: 'ConsumedQuantity', filter: true, sortable: true },
    { headerName: 'Cost', field: 'Cost', sortable: true, filter: true },
    { headerName: 'Date', field: 'Date', filter: true, sortable: true },
    { headerName: 'Instance Id', field: 'InstanceId', filter: true, sortable: true },
    { headerName: 'Location', field: 'Location', filter: true, sortable: true },
    { headerName: 'Meter Category', field: 'MeterCategory', filter: true, sortable: true },
    { headerName: 'Resource Group', field: 'ResourceGroup', filter: true, sortable: true },
    { headerName: 'Resource Location', field: 'ResourceLocation', filter: true, sortable: true },
    { headerName: 'Service Name', field: 'ServiceName', filter: true, sortable: true },
    { headerName: 'Unit Of Measure', field: 'UnitOfMeasure', filter: true, sortable: true }

  ];

  /**
   * this method is called at grid initialisation
   * @param params 
   */
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    console.log("data", this.data);
    fetch("https://engineering-task.elancoapps.com/api/raw").then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        params.api.applyTransaction({ add: resp })
      })

  }


  modelUpdated(params: any): void {
    params.api.sizeColumnsToFit();
  }

  onFirstDataRendered(params: any): void {
    params.api.sizeColumnsToFit();
  }

  ngOnInit(): void {

  }

}
