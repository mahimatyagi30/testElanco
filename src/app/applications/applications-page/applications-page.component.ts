import { Component } from '@angular/core';
import { ColumnApi, GridApi, GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';
import { ApiCallServiceService } from 'src/app/services/api-call-service.service';


@Component({
  selector: 'app-applications-page',
  templateUrl: './applications-page.component.html',
  styleUrls: ['./applications-page.component.css']
})
export class ApplicationsPageComponent {
  data: any[] = []
  gridOptions: any;
  applications: any;
  applicationsList: any;
  value: any;
  applicationData: any;
  gridApi: GridApi | undefined;
  gridColumnApi: ColumnApi | undefined;
  rowData: any
  onChangeEvent: boolean = false;

  constructor(private apiService: ApiCallServiceService) {


  }

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

  defaultColDef = { resizable: true };
  valueFormatter(params: ValueFormatterParams) {

  }
  /**
   * this method is called at grid initialisation
   * @param params 
   */
  onGridReady(params: GridReadyEvent): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
   
  }
  /**
   * this method will be called on change in dropdown value
   * @param value 
   */
  changed(value: any) {
    this.onChangeEvent = true
    this.value = value;
    const rows$ = this.apiService.get("applications/" + this.value)
    rows$.subscribe(ret => {

      this.applicationData = ret;
      this.gridApi?.setRowData(ret)


    })
  }

  ngOnInit(): void {


    this.applications = []
    const rows$ = this.apiService.get("applications")
    rows$.subscribe(ret => {

      this.applications = ret;

    })
  }


  modelUpdated(params: any): void {
    params.api.sizeColumnsToFit();
  }

  onFirstDataRendered(params: any): void {
    params.api.sizeColumnsToFit();
  }

}
