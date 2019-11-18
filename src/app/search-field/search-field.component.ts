import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.css']
})
export class SearchFieldComponent implements OnInit {

  public searchString = '';

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  search(keyEvent) {
    if (keyEvent.key !== 'Enter') {
      return;
    }
    const queryParams: any = {};
    if (this.searchString) {
      queryParams.search = this.searchString;
    }
    this.router.navigate(['/'], {
      queryParams
    });
  }
}
