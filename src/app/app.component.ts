import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'select';
  list1 = ['Akshay',"Divya","Amin"];
  list2 = ["Piku","Ajay","Dipika"];
  leftSelectedList: string[] = [];
  rightSelectedList: string[] = [];
  
  toggleList1Checkbox(item:any){
    if(this.leftSelectedList.includes(item)){
      this.leftSelectedList = this.leftSelectedList.filter((ele)=>ele !== item);
    }else{
      this.leftSelectedList.push(item);
    }
  }

  toggleList2Checkbox(item:any){
    if(this.rightSelectedList.includes(item)){
      this.rightSelectedList = this.rightSelectedList.filter((ele)=>ele !== item);
    }else{
      this.rightSelectedList.push(item);
    }
  }

  pushLeftToRight(){
    this.list1 = this.list1.filter(item=>!this.leftSelectedList.includes(item));
    this.list2 = [...this.list2,...this.leftSelectedList];
    this.leftSelectedList = []
    this.rightSelectedList = [];
  }
  pushRightToLeft(){
    this.list2 = this.list2.filter(item=>!this.rightSelectedList.includes(item));
    this.list1 = [...this.list1,...this.rightSelectedList];
    this.leftSelectedList = []
    this.rightSelectedList = [];
  }


}
