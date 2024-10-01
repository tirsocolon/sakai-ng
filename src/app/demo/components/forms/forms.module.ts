import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsRoutingModule } from './forms-routing.module';

import { CardModule } from 'primeng/card';
import { BoxEvaluationComponent } from './box-evaluation/box-evaluation.component';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { TabMenuModule } from 'primeng/tabmenu';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/accordion';
import { HotTableModule } from '@handsontable/angular';
import { registerAllModules } from 'handsontable/registry';
import { StepperModule } from 'primeng/stepper';
// register Handsontable's modules
registerAllModules();

@NgModule({
  declarations: [BoxEvaluationComponent],
  imports: [
    CommonModule,
    FormsRoutingModule,
    CardModule,
	AutoCompleteModule,
	CalendarModule,
	ChipsModule,
	DropdownModule,
	InputMaskModule,
	InputNumberModule,
	CascadeSelectModule,
	MultiSelectModule,
	InputTextareaModule,
	InputTextModule,
    TabMenuModule,
    ButtonModule,
	FormsModule,
	TableModule,
	AccordionModule,
	HotTableModule
  ]
})
export class AppFormsModule { }
