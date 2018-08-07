import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

	// declare an input property mySelectedHero of type Hero
	@Input() mySelectedHero: Hero

	constructor() { }

	ngOnInit() {
	}

}
