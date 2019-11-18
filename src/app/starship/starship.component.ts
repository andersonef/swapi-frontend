import { Component, OnInit, Input } from '@angular/core';
import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'app-starship',
  templateUrl: './starship.component.html',
  styleUrls: ['./starship.component.css']
})
export class StarshipComponent implements OnInit {

  @Input()
  public id: number;

  public ship: any = {};

  constructor(public swapiService: SwapiService) { }

  async ngOnInit() {
    this.ship = await this.swapiService.getStarshipById(this.id);
  }

}
