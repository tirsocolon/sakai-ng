import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forChild([
    { path: 'box-evaluation', data: { breadcrumb: 'Button' }, loadChildren: () => import('./box-evaluation/box-evaluation.module').then(m => m.BoxEvaluationModule) }
  ])],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
