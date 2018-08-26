import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  public statusBtn: boolean;
  public termsUse: any;
  public validaTermos: any = false;
  private disabled: any;
  private isGroupChecked;
  constructor() { }

  ngOnInit() {
    this.termsUse = JSON.parse(localStorage.getItem('Valor'));
    if (this.termsUse) {
    this.validaTermos = true;
    this.disabled = 'false';
    this.isGroupChecked = true;
    }
  }
}
