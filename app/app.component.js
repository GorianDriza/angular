"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tabela';
        this.heroes = HEROES;
    }
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1 style=\"text-align:center\">{{title}}</h1>\n    \t<table class=\"heroes\">\n    \t\t<thead>\n    \t\t\t<th>ID</th>\n    \t\t\t<th>Name</th>\n    \t\t\t<th></th>\n    \t\t</thead>\n    \t\t<tbody>\n    \t\t\t<tr *ngFor=\"let hero of heroes\">\n        \t\t\t<td class=\"badge\">{{hero.id}}</td>\n        \t\t\t<td>{{hero.name}}</td>\n        \t\t\t<td style=\"text-align:center;\"><button class=\"btnDelete\" id=\"btnDelete\">x</button></td>\n        \t\t</tr>\n    \t\t</tbody>\n    \t</table>\n    <div *ngIf=\"selectedHero\">\n      <h2>{{selectedHero.name}} details!</h2>\n      <div><label>id: </label>{{selectedHero.id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedHero.name\" placeholder=\"name\"/>\n      </div>\n    </div>\n  ",
            styles: ["\n  \ttr,\n  \ttd,\n  \tth{\n  \t\tborder: 1px solid black;\n  \t}\n  \t.btnDelete{\n  \t\theight:40px;\n  \t\twidth:40px;\n  \t\tcolor:white;\n  \t\tbackground:red;\n  \t\tborder:none;\n  \t\tfont-size:25px;\n  \t\tmargin:5px;\n  \t}\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .heroes {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 100%;\n    }\n    .heroes th{\n      padding: 5px;\n    }\n    .heroes li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .heroes li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .heroes li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
$(document).ready(function () {
    debugger;
    $('#btnDelete').click(function () {
        debugger;
        this.remove();
    });
});
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map