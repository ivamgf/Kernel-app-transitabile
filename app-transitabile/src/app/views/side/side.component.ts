import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.sass']
})
export class SideComponent implements OnInit {
  private flag: any;
  private open: any;
  constructor() { }

  ngOnInit() {
    this.openNav();    
  }
  openNav() {
    document.getElementById("mySidenav").style.width = "20%";
    this.flag = localStorage.setItem('Flag', 'true');
    this.open = document.getElementById("menu").style.display = 'block';
    this.open = document.getElementById("menu2").style.display = 'none';
    this.open = document.getElementById("title").style.display = 'block';
    //document.getElementById("main").style.marginLeft = "150px";
    }
  closeNav() {
  document.getElementById("mySidenav").style.width = "10%";
  this.flag = localStorage.removeItem('Flag');
  this.open = document.getElementById("menu").style.display = 'none'; 
  this.open = document.getElementById("menu2").style.display = 'block';
  this.open = document.getElementById("title").style.display = 'none'; 
  //document.getElementById("main").style.marginLeft = "50";
  }
  btnSide() {
    this.flag = localStorage.getItem('Flag');
    if (this.flag == 'true') {
      this.closeNav()
    } else {
      this.openNav()
    }
  }
}
