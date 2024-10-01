import { Component, OnInit  } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-box-evaluation',
  templateUrl: './box-evaluation.component.html',
  styleUrl: './box-evaluation.component.scss'
})
export class BoxEvaluationComponent implements OnInit{

  items: MenuItem[] | undefined;
  step_items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  oca_item: any[] | undefined;
  cc_item: any[] | undefined;
  ppmu_item: any[] | undefined;

  parent_farm: string;
  parent_ph: string;
  parent_boxCode: string;
  parent_date: Date | undefined;
  parent_vessel: string;
  parent_trackNumber: number;
  

  pack_type: string;
  brand: string;
  market: string;

  // Box 1 Variables
  box1_oca_selected: string;
  box1_cc_selected: string;
  box1_ppmu_selected: string;

  box1_oca_detailsArray : any[] = [];
  box1_oca_details = {
    code : null,
    case : null,
  }

  box1_cc_detailsArray : any[] = [];
  box1_cc_details = {
    code : null,
    case : null,
  }

  box1_ppmu_detailsArray : any[] = [];
  box1_ppmu_details = {
    code : null,
    case : null,
  }

  // Box 2 Variables
  box2_oca_selected: string;
  box2_cc_selected: string;
  box2_ppmu_selected: string;

  box2_oca_detailsArray : any[] = [];
  box2_oca_details = {
    code : null,
    case : null,
  }

  box2_cc_detailsArray : any[] = [];
  box2_cc_details = {
    code : null,
    case : null,
  }

  box2_ppmu_detailsArray : any[] = [];
  box2_ppmu_details = {
    code : null,
    case : null,
  }

  // Box 3 Variables
  box3_oca_selected: string;
  box3_cc_selected: string;
  box3_ppmu_selected: string;

  box3_oca_detailsArray : any[] = [];
  box3_oca_details = {
    code : null,
    case : null,
  }

  box3_cc_detailsArray : any[] = [];
  box3_cc_details = {
    code : null,
    case : null,
  }

  box3_ppmu_detailsArray : any[] = [];
  box3_ppmu_details = {
    code : null,
    case : null,
  }


  ngOnInit() {

    this.step_items = [
      {
          label: 'Header',
          routerLink: 'header'
      },
      {
          label: 'Details',
          routerLink: 'seat'
      },
      {
          label: 'Inspection',
          routerLink: 'payment'
      },
      {
          label: 'Preview',
          routerLink: 'confirmation'
      }
  ];

    this.items = [
        { label: 'Box 1', icon: 'pi pi-box' },
        { label: 'Box 2', icon: 'pi pi-box' },
        { label: 'Box 3', icon: 'pi pi-box' },
        { label: 'Box 4', icon: 'pi pi-box' },
        { label: 'Box 5', icon: 'pi pi-box' },
        { label: 'Preview', icon: 'pi pi-desktop' }
    ];

    this.activeItem = this.items[0];

    this.oca_item = [
      { name: '', code: 'BCP' },
      { name: '', code: 'SRN' },
      { name: '', code: 'YBE' },
      { name: '', code: 'LSO' },
      { name: '', code: 'BR' },
      { name: '', code: 'MS' },
    ];

    this.cc_item = [
      { name: '', code: 'CC' },
      { name: '', code: 'CM' },
      { name: '', code: 'PCT' },
      { name: '', code: 'OCT' },
      { name: '', code: 'CCT' },
    ];

    this.ppmu_item = [
      { name: '', code: 'TVB' },
      { name: '', code: 'LVB' },
      { name: '', code: 'ISP' },
      { name: '', code: 'IVC' },
      { name: '', code: 'ISC' },
      { name: '', code: 'IIP' },
      { name: '', code: 'ILP' },
    ];
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
    console.log(this.activeItem);
  }

  // Box 1 OCA
  box1_oca_add(){
    this.box1_oca_details.code = this.box1_oca_selected['code'];
    this.box1_oca_details.case = 1;

    this.box1_oca_detailsArray.push({ ...this.box1_oca_details });
  }

  box1_oca_increment(oca_value: any){
    oca_value.case++;
  }

  box1_oca_decrement(oca_value: any){
    oca_value.case--;
  }

  // Box 1 CC
  box1_cc_add(){
    this.box1_cc_details.code = this.box1_cc_selected['code'];
    this.box1_cc_details.case = 1;

    this.box1_cc_detailsArray.push({ ...this.box1_cc_details });
  }

  box1_cc_increment(cc_value: any){
    cc_value.case++;
  }

  box1_cc_decrement(cc_value: any){
    cc_value.case--;
  }

  // Box 1 PPMU
  box1_ppmu_add(){
    this.box1_ppmu_details.code = this.box1_ppmu_selected['code'];
    this.box1_ppmu_details.case = 1;

    this.box1_ppmu_detailsArray.push({ ...this.box1_ppmu_details });
  }

  box1_ppmu_increment(ppmu_value: any){
    ppmu_value.case++;
  }

  box1_ppmu_decrement(ppmu_value: any){
    ppmu_value.case--;
  }


  // Box 2 OCA
  box2_oca_add(){
    this.box2_oca_details.code = this.box2_oca_selected['code'];
    this.box2_oca_details.case = 1;

    this.box2_oca_detailsArray.push({ ...this.box2_oca_details });
  }

  box2_oca_increment(oca_value: any){
    oca_value.case++;
  }

  box2_oca_decrement(oca_value: any){
    oca_value.case--;
  }

  // Box 2 CC
  box2_cc_add(){
    this.box2_cc_details.code = this.box2_cc_selected['code'];
    this.box2_cc_details.case = 1;

    this.box2_cc_detailsArray.push({ ...this.box2_cc_details });
  }

  box2_cc_increment(cc_value: any){
    cc_value.case++;
  }

  box2_cc_decrement(cc_value: any){
    cc_value.case--;
  }

  // Box 2 PPMU
  box2_ppmu_add(){
    this.box2_ppmu_details.code = this.box2_ppmu_selected['code'];
    this.box2_ppmu_details.case = 1;

    this.box2_ppmu_detailsArray.push({ ...this.box2_ppmu_details });
  }

  box2_ppmu_increment(ppmu_value: any){
    ppmu_value.case++;
  }

  box2_ppmu_decrement(ppmu_value: any){
    ppmu_value.case--;
  }



  // Box 3 OCA
  box3_oca_add(){
    this.box3_oca_details.code = this.box3_oca_selected['code'];
    this.box3_oca_details.case = 1;

    this.box3_oca_detailsArray.push({ ...this.box3_oca_details });
  }

  box3_oca_increment(oca_value: any){
    oca_value.case++;
  }

  box3_oca_decrement(oca_value: any){
    oca_value.case--;
  }

  // Box 3 CC
  box3_cc_add(){
    this.box3_cc_details.code = this.box3_cc_selected['code'];
    this.box3_cc_details.case = 1;

    this.box3_cc_detailsArray.push({ ...this.box3_cc_details });
  }

  box3_cc_increment(cc_value: any){
    cc_value.case++;
  }

  box3_cc_decrement(cc_value: any){
    cc_value.case--;
  }

  // Box 3 PPMU
  box3_ppmu_add(){
    this.box3_ppmu_details.code = this.box3_ppmu_selected['code'];
    this.box3_ppmu_details.case = 1;

    this.box3_ppmu_detailsArray.push({ ...this.box3_ppmu_details });
  }

  box3_ppmu_increment(ppmu_value: any){
    ppmu_value.case++;
  }

  box3_ppmu_decrement(ppmu_value: any){
    ppmu_value.case--;
  }

}
