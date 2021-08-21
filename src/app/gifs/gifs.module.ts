import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPageComponent } from './gifs-page/gifs-page.component';
import { SearcherComponent } from './searcher/searcher.component';
import { ResultsComponent } from './results/results.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsPageComponent,
    SearcherComponent,
    ResultsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    GifsPageComponent
  ]
})
export class GifsModule { }
