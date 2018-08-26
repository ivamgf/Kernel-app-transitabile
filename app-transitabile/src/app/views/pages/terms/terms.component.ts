import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.sass']
})
export class TermsComponent implements OnInit {
  public terms: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  registerTerms() {
    this.terms = localStorage.setItem('Valor', 'true');
    this.router.navigate(['/register']);
  }
}
