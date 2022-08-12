import { Component,HostListener } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  items: MenuItem[];
  mobileItems: MenuItem[];
  title = 'project-tool';
  status: boolean = false;
  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  
  onResize(event) {
    if(window.innerWidth < 991){
      this.status = true;  
    }else{
      this.status = false;  
    }
  }

  clickEvent(){
      this.status = !this.status;       
  }

  ngOnInit() {
    this.status = false;  
    this.items = [
      {
        label: 'Projects',
        icon:'pi pi-fw pi-th-large',
        items: [
            {
                label: 'Overview'
            },
            {
                label: 'All Projects'
            }
        ]
      }
    ]
    this.mobileItems = [
      {
        icon:'pi pi-fw pi-th-large',
        items:[
            {
              label:'Overview'
            },
            {
              label:'All Projects'
            },
        ]
      },
    ]
    this.innerWidth = window.innerWidth;
    if(window.innerWidth < 991){
      this.status = true;  
    }else{
      this.status = false;  
    }
  }




}
