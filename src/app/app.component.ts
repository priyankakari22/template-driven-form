import { Component,OnInit } from '@angular/core';

import { TemplateService } from './template.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Template Driven Form';
  data:any={};
  array:any=[];
  array1:any=[];
 
  
  er:boolean=false;
 
  onSubmit(){
    //alert(JSON.stringify(this.data) )
    this.array.push(this.data);
    console.log(this.array)
  
  }
  
  onchange(event: any){
    console.log(event);
  
    if(this.data.email===this.data.cEmail){
      this.er=true;
    }
    else
      this.er=false;
  }
  constructor(private templateservice:TemplateService){}
  // tab(){
    
  // }
  ngOnInit(){
    this.templateservice.getform()
    .subscribe((res)=>{
      this.array=res
      console.log(this.array);
    })

  }
  
  

}
