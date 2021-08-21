import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent{


  searchForm: FormGroup= this.fb.group({
    search: [, [ Validators.required]],
    
  })

  get searchValue(){
    return this.searchForm.get('search')!.value;
  }

  

  constructor(public gifService: GifsService, private fb: FormBuilder){}



  search(){
    const dataToSearch: string = this.searchForm.get('search')!.value
    
    this.gifService.searchGifs(dataToSearch);
    this.searchForm.get('search')?.reset()
    
  }

  //----> otra forma de hacerlo

    // ngOnInit(): void{
  //   shows the value in the input selected
  //     this.searchForm.get('search')?.valueChanges.subscribe(data => {
  //       this.dashboard.push(this.dataToSearch = data);
  //   });

  //   show the value in any formControl
  //   this.searchForm.valueChanges.subscribe(data => {
  //     console.log(data);
  //   });
  // }

  // @ViewChild('refToSearch') refToSearch!:ElementRef<HTMLInputElement>;

  // search(){
  //   const inputValue = this.refToSearch.nativeElement.value;
    
  //   console.log(inputValue);
  // }
  
}
