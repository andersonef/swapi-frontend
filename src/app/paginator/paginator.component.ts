import { Component, OnInit } from '@angular/core';
import { CharacterListService } from '../services/character-list.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  public params: any = {};

  constructor(
    public service: CharacterListService,
    public router: Router,
    public activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      for (const prop in params) {
        if (params[prop]) {
          this.params[prop] = params[prop];
        }
      }
      if (!this.params.page) {
        this.params.page = 1;
      }
    });
  }

  next() {
    if (!this.service.canGoNext) {
      return;
    }
    this.params.page++;
    this.router.navigate(['/'], {
      queryParams: this.params
    });
  }

  prev() {
    if (this.params.page <= 1) {
      return;
    }
    this.params.page--;
    this.router.navigate(['/'], {
      queryParams: this.params
    });
  }
}
