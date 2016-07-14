import { Component } from '@angular/core';

export class Hero {
  id: number;
  name: string;
}

const HEROES: Hero[] = [
  { id: 11, name: 'Hello' },
  { id: 12, name: 'Agim' },
  { id: 13, name: 'Beni' },
  { id: 14, name: 'Berti' },
  { id: 15, name: 'Bona' },
  { id: 16, name: 'Ani' },
  { id: 17, name: 'Bobi' },
  { id: 18, name: 'Migeni' },
  { id: 19, name: 'Bona' },
  { id: 20, name: 'Ilir' }
];

@Component({
  selector: 'my-app',
  template: `
    <h1 style="text-align:center">{{title}}</h1>
    	<table class="heroes">
    		<thead>
    			<th>ID</th>
    			<th>Name</th>
    			<th></th>
    		</thead>
    		<tbody>
    			<tr *ngFor="let hero of heroes" id={{hero.id}}>
        			<td class="badge">{{hero.id}}</td>
        			<td>{{hero.name}}</td>
        			<td style="text-align:center;"><button onclick="btn(this.id);" class="btnDelete" id="btnDelete_{{hero.id}}">x</button></td>
        		</tr>
    		</tbody>
    	</table>
    <div *ngIf="selectedHero">
      <h2>{{selectedHero.name}} details!</h2>
      <div><label>id: </label>{{selectedHero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="selectedHero.name" placeholder="name"/>
      </div>
    </div>
  `,
  styles: [`
  	tr,
  	td,
  	th{
  		border: 1px solid black;
  	}
  	.btnDelete{
  		height:40px;
  		width:40px;
  		color:white;
  		background:red;
  		border:none;
  		font-size:25px;
  		margin:5px;
  	}
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 100%;
    }
    .heroes th{
      padding: 5px;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
  `]
})
export class AppComponent {
  title = 'Tabela';
  heroes = HEROES;
  selectedHero: Hero;
  onSelect(hero: Hero) { 
  	this.selectedHero = hero; 
  }
}



/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/