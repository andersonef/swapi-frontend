import { Component, OnInit } from '@angular/core';
import { CharacterListService } from '../services/character-list.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(
    public service: CharacterListService,
    public activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.search) {
        return this.service.search(params.search);
      }
      this.service.index(params.page || 1);
    });
  }

  getId(char: any) {
    const parts = char.url.split('/');
    return parts[parts.length-2];
  }

}
