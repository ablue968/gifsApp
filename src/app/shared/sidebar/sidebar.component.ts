import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  get dashboard(){
    return this.gifService.dashboardArr;
  }
  constructor(public gifService: GifsService) { }

  anchorQuery( query: string ){
    this.gifService.searchGifs( query );
  }

}
