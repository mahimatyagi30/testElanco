import { Component } from '@angular/core';
import { ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ApiCallServiceService } from 'src/app/services/api-call-service.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent {
  resources: any;
  value: any;
  resourcesData: any;
  gridApi: GridApi | undefined;
  gridColumnApi: ColumnApi | undefined;
  rowData : any =[]
  onChangeEvent: boolean=false;
  data: any[] =[]
   
  
  constructor(private apiService : ApiCallServiceService){

  }
  defaultColDef = { resizable: true };
  
columnDefs = [
  { headerName: 'Make', field: 'ConsumedQuantity' ,filter:true,sortable: true },
  { headerName: 'Cost', field: 'Cost',sortable: true,filter:true },
  { headerName: 'Date', field: 'Date' ,filter:true,sortable: true},
  { headerName: 'Instance Id', field: 'InstanceId' ,filter:true,sortable: true},
  { headerName: 'Location', field: 'Location',filter:true,sortable: true },
  { headerName: 'Meter Category', field: 'MeterCategory',filter:true,sortable: true },
  { headerName: 'Resource Group', field: 'ResourceGroup',filter:true,sortable: true },
  { headerName: 'Resource Location', field: 'ResourceLocation',filter:true,sortable: true },
  { headerName: 'Service Name', field: 'ServiceName',filter:true ,sortable: true},
  { headerName: 'Unit Of Measure', field: 'UnitOfMeasure',filter:true,sortable: true }
  
];

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
    this.value = this.value.trim();
    this.value = this.value.split(' ').join('%20'); 


    const rows$ = this.apiService.get("resources/"+this.value)
  rows$.subscribe(ret=>{    
    this.resourcesData = ret;
    this.gridApi?.setRowData(ret)
  })
  }
  ngOnInit(): void {
   
    this.resources=[]
    str : AnalyserNode;
    const rows$ = this.apiService.get("resources")
    rows$.subscribe(ret=>{    
      this.resources = ret;
     
  })}

  modelUpdated(params :any): void {
    params.api.sizeColumnsToFit();
  }
  
  onFirstDataRendered(params :any): void {
    params.api.sizeColumnsToFit();
  }
  }

