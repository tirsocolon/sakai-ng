import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BoxEvaluationComponent } from './box-evaluation.component';


@NgModule({
  imports: [RouterModule.forChild([
		{ path: '', component: BoxEvaluationComponent },
	])],
  exports: [RouterModule]
})
export class BoxEvaluationRoutingModule { }
