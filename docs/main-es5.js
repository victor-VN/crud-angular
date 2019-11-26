(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>       \n  <nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #4e805a; padding: 2%;\">\n    <a class=\"navbar-brand\" routerLink=\"\">CRUD-Angular</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\" aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n      <ul class=\"navbar-nav\">        \n        <li class=\"nav-item ml-3\">\n          <a class=\"nav-link\" routerLink=\"\">Criar Jogador</a>\n        </li>\n        <li class=\"nav-item ml-3\">\n          <a class=\"nav-link\" routerLink=\"/ver-jogadores\">Ver Jogadores</a>\n        </li>\n        \n        <li class=\"nav-item ml-3\">\n          <a class=\"nav-link\" data-toggle=\"modal\" data-target=\".info-modal\">Info</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n\n<!--<app-jogador></app-jogador>-->\n\n<!--<app-jogador-criar></app-jogador-criar>-->\n\n<router-outlet></router-outlet>\n\n<footer class=\"text-center\">© Copyright victor-VN 2019</footer>\n\n\n<!-- Large modal -->\n\n<div class=\"modal fade bd-example-modal-lg info-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-content\" style=\"padding: 3%\">\n      <h2 class=\"mb-5\">CRUD-Angular</h2>\n      <p>Este é um CRUD simples feito apenas com o propósito de aprender mais sobre o framework <strong> Angular</strong>.</p>\n      <p>Também foi utilizado o <strong>Bootstrap</strong>, framework de CSS.</p>\n      <p>Todas as funções de um CRUD estão presentes.</p>\n      <p><strong>C</strong>reate: é possível criar jogadores.</p>\n      <p><strong>R</strong>ead: é possível ler as informações dos jogadores criados.</p>\n      <p><strong>U</strong>pdate: é possível atualizar as informações dos jogadores criados.</p>\n      <p><strong>D</strong>elete: é possível deletar os jogadores criados.</p>\n      <br>\n      <p>Todos os dados são salvos localmente utilisando <strong>JSON</strong>.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jogador-criar/jogador-criar.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jogador-criar/jogador-criar.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mt-5 container\">\n        <div class=\"row\">\n          <div class=\"col-12 col-md-3\">\n            <div class=\"form-group\">              \n              <input type=\"text\" class=\"valid form-control\" #nm placeholder=\"Nome\" (input)=\"validaFormulario()\">\n              <label class=\"mb-3 mt-1 ml-2 feedback\">Campo obrigatório *</label>\n              \n              <select name=\"\" id=\"anoNascimento\" class=\"valid custom-select\" #age (change)=\"validaFormulario()\">\n                  <option value=\"\">Ano de Nascimento...</option>                  \n                </select>      \n                <label class=\"mb-3 mt-1 ml-2 feedback\">Campo obrigatório *</label>            \n\n              <select name=\"\" id=\"\" class=\"valid custom-select\" #nac (change)=\"validaFormulario()\">\n                  <option value=\"\" selected>Nacionalidade...</option>\n                  <option value=\"Argentino\">Argentina</option>\n                  <option value=\"Brasileiro\">Brasil</option>\n                  <option value=\"Colombiano\">Colombia</option>\n                  <option value=\"Venezuelano\">Venezuela</option>\n                </select>\n                <label class=\"mb-3 mt-1 ml-2 feedback\">Campo obrigatório *</label>\n\n              <select name=\"\" id=\"\" class=\"custom-select\" [(ngModel)]=\"posicaoid\">                                \n                <option value=\"0\">Goleiro</option>\n                <option value=\"1\">Defensor</option>\n                <option value=\"2\">Meio-Campista</option>\n                <option value=\"3\">Atacante</option>\n              </select>\n              \n            </div>\n          </div>\n\n          <div class=\"col-12 col-md-1\"></div>\n\n          <div class=\"col-12 col-md-3\">\n              <label for=\"customRange1\">{{ posicao[posicaoid].atributo1 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[0] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[0]\"> \n\n              <label for=\"\">{{ posicao[posicaoid].atributo2 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[1] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[1]\">\n\n              <label for=\"\">{{ posicao[posicaoid].atributo3 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[2] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[2]\">\n\n              <label for=\"\">{{ posicao[posicaoid].atributo4 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[3] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[3]\">\n\n              <label for=\"\">{{ posicao[posicaoid].atributo5 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[4] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[4]\">\n\n              <label for=\"\">{{ posicao[posicaoid].atributo6 }}</label> <label for=\"\" class=\"float-right\">{{ atributos[5] }}</label>\n              <input type=\"range\" class=\"custom-range mb-4\" id=\"\" [(ngModel)]=\"atributos[5]\">\n          </div>\n\n          <div class=\"col-12 col-md-1\"></div>\n\n          <div class=\"col-12 col-md-3\">\n                <button class=\"btn btn-danger col\" (click)=\"limparFormulario()\">Limpar</button>\n              <button class=\"btn btn-success col mt-3\" (click)=\"criarJogador(nm.value, age.value, nac.value)\">Salvar</button>\n          </div>\n          \n        </div>\n      </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jogador-lista/jogador-lista.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jogador-lista/jogador-lista.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid mt-5\" style=\"margin-bottom: 15%;\">\n     <div class=\"row\">\n       <div class=\"col-12 col-md-1\"></div>\n      <div class=\"col-12 col-md-5 mb-5\">\n          <table class=\"table table-striped\">\n              <thead>\n                <tr>                  \n                  <th scope=\"col\">Nome</th>\n                  <th scope=\"col\">Idade</th>\n                  <th scope=\"col\">Nacionalidade</th>\n                  <th scope=\"col\">Posição</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"jogador-item choose-container\" \n                #plInfo \n                *ngFor=\"let jogador of jogadores; let i = index\" \n                (click)=\"playerInfo(plInfo)\"\n                [style.display]=\"jogador.status == 'ativado' ? 'normal' : 'none'\">\n                  <th scope=\"row\" style=\"display: none\">{{ i+1 }}</th>\n                  <td>{{ jogador.nome }}</td>\n                  <td>{{ jogador.idade }}</td>\n                  <td>{{ jogador.nacionalidade }}</td>\n                  <td>{{ jogador.posicao }}</td>              \n\n                  <div class=\"row\">\n                    <div class=\"col-5\">\n                      <button class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\".bd-example-modal-lg\">                            \n                        <i class=\"far fa-edit\"></i>\n                      </button>\n                    </div>\n                    <div class=\"col-5\">\n                      <button class=\"btn btn-danger\" (click)=\"removerJogador(plInfo)\">\n                          <i class=\"fas fa-times\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </tr>              \n              </tbody>\n            </table>\n      </div>\n      <div class=\"col-12 col-md-5\">\n          <app-jogador [id]=\"playerID\"></app-jogador>\n      </div> \n      <div class=\"col-12 col-md-1\"></div>\n\n      \n      <div class=\"modal fade bd-example-modal-lg\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n          <div class=\"modal-dialog modal-lg\">\n            <div class=\"modal-content\">\n              <div class=\"form-group\">\n                <div class=\"container\">\n                  <div class=\"row mt-3\">\n                      <div class=\"col-4 mt-5\">\n                        <div class=\"ml-2\" style=\"border-radius: 5px; background-color: royalblue; height: 200px; width: 200px;\"></div>\n                      </div>\n                      <div class=\"col-6\">\n                        <div class=\"row\">\n                          <label for=\"\"><strong> Nome:</strong></label>\n                          <input type=\"text\" value=\"{{ jogadores[playerID].nome }}\" class=\"form-control\" #nm>\n                        </div>\n\n                        <div class=\"row mt-3\">\n                            <label for=\"\"><strong> Ano de nascimento:</strong></label>\n                            <select name=\"\" id=\"anoNascimento\" class=\"valid custom-select\" #age>\n                                <option value=\"{{ 2019 - jogadores[playerID].idade }}\">Ano de Nascimento...</option>                  \n                              </select>      \n                              \n                        </div>\n\n                        <div class=\"row mt-4 mb-3\">\n                            <label for=\"\"><strong> Nacionalidade:</strong></label>\n                            <select name=\"\" id=\"\" class=\"valid custom-select\" #nac (click)=\"validaFormulario()\">\n                                <option value=\"{{ jogadores[playerID].nacionalidade }}\" selected>Nacionalidade...</option>\n                                <option value=\"Argentino\">Argentina</option>\n                                <option value=\"Brasileiro\">Brasil</option>\n                                <option value=\"Colombiano\">Colombia</option>\n                                <option value=\"Venezuelano\">Venezuela</option>\n                              </select>\n                              \n                        </div>\n\n                        <div class=\"row mt-2\">\n                          <div class=\"col-3\">\n                            <button class=\"btn btn-danger\" data-dismiss=\"modal\">Cancelar</button>\n                          </div>\n\n                          <div class=\"col-3\">\n                              <button class=\"btn btn-success\" (click)=\"editarJogador(nm.value, age.value, nac.value)\" data-dismiss=\"modal\">Salvar</button>\n                            </div>\n                        </div>\n                        \n                      </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/jogador/jogador.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/jogador/jogador.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<content>\n    \n        <div id=\"card-jogador\">\n\n          <div class=\"row\">\n            <div class=\"col\">\n                <div class=\"ml-2\" style=\"border-radius: 5px; background-color: royalblue; height: 200px; width: 200px;\"></div>\n            </div>\n\n            <div class=\"col\">\n              <div class=\"row\">\n                <div class=\"mt-1\">\n                    <strong>Nome: </strong> <span>{{jogador[id].nome}}</span> \n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"mt-4\">\n                    <strong>Idade: </strong> <span>{{ jogador[id].idade}} anos</span> \n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"mt-4\">\n                    <strong>Nacionalidade: </strong> <span>{{ jogador[id].nacionalidade }} </span> \n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"mt-4\">\n                    <strong>Posição: </strong> <span>{{ jogador[id].posicao }}</span>  \n                </div>\n              </div>\n                \n            </div>                  \n          </div>\n\n          <div class=\"row mt-5 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo1}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[0] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>\n            \n            <div class=\"col-1\">{{ jogador[id].atributos[0] }}</div>\n          </div>\n\n          <div class=\"row mt-4 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo2}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[1] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div> \n            \n            <div class=\"col-1\">{{ jogador[id].atributos[1] }}</div>\n          </div>\n\n          <div class=\"row mt-4 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo3}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[2] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>                  \n\n            <div class=\"col-1\">{{ jogador[id].atributos[2] }}</div>\n          </div>\n\n          <div class=\"row mt-4 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo4}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[3] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>  \n            \n            <div class=\"col-1\">{{ jogador[id].atributos[3] }}</div>\n          </div>\n\n          <div class=\"row mt-4 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo5}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[4] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>  \n            \n            <div class=\"col-1\">{{ jogador[id].atributos[4] }}</div>\n          </div>\n\n          <div class=\"row mt-4 ml-1 mr-1\">\n            <div class=\"col-3\">\n              {{atributoText.atributo6}}:\n            </div>\n\n            <div class=\"col-7\">\n              <div class=\"progress\">\n                <div class=\"progress-bar bg-success slide-right\" role=\"progressbar\" \n                [style.width]=\" jogador[id].atributos[5] + '%' \" aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            </div>          \n            <div class=\"col-1\">{{ jogador[id].atributos[5] }}</div>\n          </div>\n        </div>\n      \n   \n  \n  </content>   "

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jogador-lista/jogador-lista.component */ "./src/app/jogador-lista/jogador-lista.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _jogador_criar_jogador_criar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./jogador-criar/jogador-criar.component */ "./src/app/jogador-criar/jogador-criar.component.ts");
/* harmony import */ var _jogador_jogador_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./jogador/jogador.component */ "./src/app/jogador/jogador.component.ts");






var routes = [
    { path: 'jogador', component: _jogador_jogador_component__WEBPACK_IMPORTED_MODULE_5__["JogadorComponent"] },
    { path: 'ver-jogadores', component: _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_1__["JogadorListaComponent"] },
    { path: 'criar-jogador', component: _jogador_criar_jogador_criar_component__WEBPACK_IMPORTED_MODULE_4__["JogadorCriarComponent"] },
    { path: '', component: _jogador_criar_jogador_criar_component__WEBPACK_IMPORTED_MODULE_4__["JogadorCriarComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'crud-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _jogador_jogador_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jogador/jogador.component */ "./src/app/jogador/jogador.component.ts");
/* harmony import */ var _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./jogador-lista/jogador-lista.component */ "./src/app/jogador-lista/jogador-lista.component.ts");
/* harmony import */ var _jogador_criar_jogador_criar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./jogador-criar/jogador-criar.component */ "./src/app/jogador-criar/jogador-criar.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _jogador_jogador_component__WEBPACK_IMPORTED_MODULE_6__["JogadorComponent"],
                _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_7__["JogadorListaComponent"],
                _jogador_criar_jogador_criar_component__WEBPACK_IMPORTED_MODULE_8__["JogadorCriarComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/jogador-criar/jogador-criar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jogador-criar/jogador-criar.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvZ2Fkb3ItY3JpYXIvam9nYWRvci1jcmlhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jogador-criar/jogador-criar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jogador-criar/jogador-criar.component.ts ***!
  \**********************************************************/
/*! exports provided: JogadorCriarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogadorCriarComponent", function() { return JogadorCriarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jogador_jogador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jogador/jogador.service */ "./src/app/jogador/jogador.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var JogadorCriarComponent = /** @class */ (function () {
    function JogadorCriarComponent(_jogadorService) {
        this._jogadorService = _jogadorService;
        this.posicaoid = 0;
        this.atributos = [50, 50, 50, 50, 50, 50];
        this.posicao = [{
                posicao: 'Goleiro',
                atributo1: 'Posicionamento',
                atributo2: 'Def. Penaltis',
                atributo3: 'Reflexos',
                atributo4: 'Liderança',
                atributo5: 'Agilidade',
                atributo6: 'Elasticidade'
            },
            {
                posicao: 'Defensor',
                atributo1: 'Posicionamento',
                atributo2: 'Força',
                atributo3: 'Velocidade',
                atributo4: 'Cabeceio',
                atributo5: 'Passe',
                atributo6: 'Desarme'
            },
            {
                posicao: 'Meio-Campista',
                atributo1: 'Posicionamento',
                atributo2: 'Drible',
                atributo3: 'Velocidade',
                atributo4: 'Finalização',
                atributo5: 'Passe',
                atributo6: 'Desarme'
            },
            {
                posicao: 'Atacante',
                atributo1: 'Posicionamento',
                atributo2: 'Drible',
                atributo3: 'Velocidade',
                atributo4: 'Finalização',
                atributo5: 'Cabeceio',
                atributo6: 'Agilidade'
            },
        ];
    }
    JogadorCriarComponent.prototype.ngOnInit = function () {
        var select = document.getElementById("anoNascimento");
        for (var i = 2003; i >= 1950; i--) {
            var option = document.createElement("option");
            option.value = i.toString();
            option.text = i.toString();
            select.appendChild(option);
        }
    };
    JogadorCriarComponent.prototype.criarJogador = function (nm, age, nac) {
        if (nm == "" || age == "" || nac == "") {
            alert('Preencha os campos obrigatórios');
        }
        else {
            var novoJogador = {
                nome: nm,
                idade: (2019 - age),
                nacionalidade: nac,
                posicao: this.posicao[this.posicaoid].posicao,
                atributos: this.atributos,
                status: "ativado"
            };
            this._jogadorService.setJogador(novoJogador);
            alert('Novo Jogador criado com sucesso!');
        }
    };
    JogadorCriarComponent.prototype.validaFormulario = function () {
        var formField = document.getElementsByClassName('valid');
        var feedback = document.getElementsByClassName('feedback');
        for (var i = 0; i <= formField.length; i++) {
            if (formField[i].value == "") {
                formField[i].style.borderColor = "red";
                feedback[i].style.color = "red";
                feedback[i].style.fontWeight = "normal";
                feedback[i].innerHTML = "Campo obrigatório *";
            }
            else {
                formField[i].style.borderColor = "green";
                feedback[i].style.color = "green";
                feedback[i].style.fontWeight = "normal";
                feedback[i].innerHTML = "Ok!";
            }
        }
    };
    JogadorCriarComponent.prototype.limparFormulario = function () {
        var formField = document.getElementsByClassName('valid');
        var feedback = document.getElementsByClassName('feedback');
        for (var i = 0; i <= this.atributos.length; i++) {
            this.atributos = [50, 50, 50, 50, 50, 50];
            console.log(this.atributos[i]);
        }
        for (var i = 0; i <= formField.length; i++) {
            formField[i].value = '';
            formField[i].style.borderColor = "red";
            feedback[i].style.color = "red";
            feedback[i].style.fontWeight = "normal";
            feedback[i].innerHTML = "Campo obrigatório *";
        }
    };
    JogadorCriarComponent.ctorParameters = function () { return [
        { type: _jogador_jogador_service__WEBPACK_IMPORTED_MODULE_1__["JogadorService"] }
    ]; };
    JogadorCriarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-jogador-criar',
            template: __webpack_require__(/*! raw-loader!./jogador-criar.component.html */ "./node_modules/raw-loader/index.js!./src/app/jogador-criar/jogador-criar.component.html"),
            styles: [__webpack_require__(/*! ./jogador-criar.component.css */ "./src/app/jogador-criar/jogador-criar.component.css")]
        })
    ], JogadorCriarComponent);
    return JogadorCriarComponent;
}());



/***/ }),

/***/ "./src/app/jogador-lista/jogador-lista.component.css":
/*!***********************************************************!*\
  !*** ./src/app/jogador-lista/jogador-lista.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvZ2Fkb3ItbGlzdGEvam9nYWRvci1saXN0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/jogador-lista/jogador-lista.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/jogador-lista/jogador-lista.component.ts ***!
  \**********************************************************/
/*! exports provided: JogadorListaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogadorListaComponent", function() { return JogadorListaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jogador_jogador_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jogador/jogador.service */ "./src/app/jogador/jogador.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var JogadorListaComponent = /** @class */ (function () {
    function JogadorListaComponent(_jogadorService) {
        this._jogadorService = _jogadorService;
        this.jogadores = [];
        this.playerID = 0;
    }
    JogadorListaComponent_1 = JogadorListaComponent;
    JogadorListaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jogadores = this._jogadorService.getJogador();
        _jogador_jogador_service__WEBPACK_IMPORTED_MODULE_1__["JogadorService"].emitirJogador.subscribe(function (novoJogador) { return _this.jogadores = novoJogador; });
        console.log(this.jogadores);
        var select = document.getElementById("anoNascimento");
        for (var i = 2003; i >= 1950; i--) {
            var option = document.createElement("option");
            option.value = i.toString();
            option.text = i.toString();
            select.appendChild(option);
        }
    };
    JogadorListaComponent.prototype.playerInfo = function (player) {
        this.playerID = (parseInt(player.firstChild.textContent, 10) - 1);
        //console.log(this.playerID);
        var card = document.getElementById("card-jogador");
        card.style.animation = 'none';
        card.offsetHeight; /* trigger reflow */
        card.style.animation = null;
        JogadorListaComponent_1.emitirPlayerID.emit(this.playerID);
    };
    JogadorListaComponent.prototype.editarJogador = function (nm, age, nac) {
        //console.log(nm + " " + age + " " + nac);
        //this.jogadores[this.playerID].nome = nm;
        //this.jogadores[this.playerID].idade = age;
        //this.jogadores[this.playerID].nacionalidade = nac;
        var newInfo = {
            nome: nm,
            idade: 2019 - age,
            nacionalidade: nac
        };
        this._jogadorService.editarJogador(this.playerID, newInfo);
    };
    JogadorListaComponent.prototype.removerJogador = function (player) {
        var id = (parseInt(player.firstChild.textContent, 10) - 1);
        this.jogadores[id].status = "desativado";
        this._jogadorService.removerJogador(id);
    };
    var JogadorListaComponent_1;
    JogadorListaComponent.emitirPlayerID = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    JogadorListaComponent.ctorParameters = function () { return [
        { type: _jogador_jogador_service__WEBPACK_IMPORTED_MODULE_1__["JogadorService"] }
    ]; };
    JogadorListaComponent = JogadorListaComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-jogador-lista',
            template: __webpack_require__(/*! raw-loader!./jogador-lista.component.html */ "./node_modules/raw-loader/index.js!./src/app/jogador-lista/jogador-lista.component.html"),
            styles: [__webpack_require__(/*! ./jogador-lista.component.css */ "./src/app/jogador-lista/jogador-lista.component.css")]
        })
    ], JogadorListaComponent);
    return JogadorListaComponent;
}());



/***/ }),

/***/ "./src/app/jogador/jogador.component.css":
/*!***********************************************!*\
  !*** ./src/app/jogador/jogador.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#card-jogador{     \n    \n    box-shadow: 0px 2px 5px 2px #888888;\n    padding: 3%;\n    border-radius: 5px;\n    padding-bottom: 5%;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvam9nYWRvci9qb2dhZG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0QiIsImZpbGUiOiJzcmMvYXBwL2pvZ2Fkb3Ivam9nYWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NhcmQtam9nYWRvcnsgICAgIFxuICAgIFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNXB4IDJweCAjODg4ODg4O1xuICAgIHBhZGRpbmc6IDMlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNSU7XG4gICAgXG59Il19 */"

/***/ }),

/***/ "./src/app/jogador/jogador.component.ts":
/*!**********************************************!*\
  !*** ./src/app/jogador/jogador.component.ts ***!
  \**********************************************/
/*! exports provided: JogadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogadorComponent", function() { return JogadorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../jogador-lista/jogador-lista.component */ "./src/app/jogador-lista/jogador-lista.component.ts");
/* harmony import */ var _jogador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jogador.service */ "./src/app/jogador/jogador.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var JogadorComponent = /** @class */ (function () {
    function JogadorComponent(_jogadorService) {
        this._jogadorService = _jogadorService;
        this.jogador = [];
        this.id = 0;
        this.posicao = [{
                posicao: 'Goleiro',
                atributo1: 'Posicionamento',
                atributo2: 'Def. Penaltis',
                atributo3: 'Reflexos',
                atributo4: 'Liderança',
                atributo5: 'Agilidade',
                atributo6: 'Elasticidade'
            },
            {
                posicao: 'Defensor',
                atributo1: 'Posicionamento',
                atributo2: 'Força',
                atributo3: 'Velocidade',
                atributo4: 'Cabeceio',
                atributo5: 'Passe',
                atributo6: 'Desarme'
            },
            {
                posicao: 'Meio-Campista',
                atributo1: 'Posicionamento',
                atributo2: 'Drible',
                atributo3: 'Velocidade',
                atributo4: 'Finalização',
                atributo5: 'Passe',
                atributo6: 'Desarme'
            },
            {
                posicao: 'Atacante',
                atributo1: 'Posicionamento',
                atributo2: 'Drible',
                atributo3: 'Velocidade',
                atributo4: 'Finalização',
                atributo5: 'Cabeceio',
                atributo6: 'Agilidade'
            },
        ];
    }
    JogadorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.atributoText = this.posicao[this.id];
        this.jogador = this._jogadorService.getJogador();
        _jogador_service__WEBPACK_IMPORTED_MODULE_2__["JogadorService"].emitirJogador.subscribe(function (player) { return _this.jogador = player; });
        //console.log(this.jogador);   
        //console.log(this.jogador.length);    
        _jogador_lista_jogador_lista_component__WEBPACK_IMPORTED_MODULE_1__["JogadorListaComponent"].emitirPlayerID.subscribe(function (playerId) {
            switch (_this.jogador[playerId].posicao) {
                case "Goleiro":
                    _this.atributoText = _this.posicao[0];
                    break;
                case "Defensor":
                    _this.atributoText = _this.posicao[1];
                    break;
                case "Meio-Campista":
                    _this.atributoText = _this.posicao[2];
                    break;
                case "Atacante":
                    _this.atributoText = _this.posicao[3];
                    break;
            }
        });
    };
    JogadorComponent.ctorParameters = function () { return [
        { type: _jogador_service__WEBPACK_IMPORTED_MODULE_2__["JogadorService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"])()
    ], JogadorComponent.prototype, "id", void 0);
    JogadorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-jogador',
            template: __webpack_require__(/*! raw-loader!./jogador.component.html */ "./node_modules/raw-loader/index.js!./src/app/jogador/jogador.component.html"),
            styles: [__webpack_require__(/*! ./jogador.component.css */ "./src/app/jogador/jogador.component.css")]
        })
    ], JogadorComponent);
    return JogadorComponent;
}());



/***/ }),

/***/ "./src/app/jogador/jogador.service.ts":
/*!********************************************!*\
  !*** ./src/app/jogador/jogador.service.ts ***!
  \********************************************/
/*! exports provided: JogadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JogadorService", function() { return JogadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JogadorService = /** @class */ (function () {
    function JogadorService() {
        this.jogador = [];
    }
    JogadorService_1 = JogadorService;
    JogadorService.prototype.setJogador = function (novoJogador) {
        this.jogador.unshift(novoJogador);
        //console.log(this.jogador);
        var jogadorJSON, jogadorObj, jogadorText;
        jogadorText = localStorage.getItem("jogadoresSaveJSON");
        jogadorObj = JSON.parse(jogadorText);
        if (jogadorObj == null) {
            jogadorObj = { jogadores: this.jogador };
            jogadorJSON = JSON.stringify(jogadorObj);
            localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
        }
        else {
            jogadorObj.jogadores.unshift(novoJogador);
            console.log(jogadorObj.jogadores);
            jogadorJSON = JSON.stringify(jogadorObj);
            localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
        }
        //jogadorObj = {jogadores: this.jogador};
        //jogadorJSON = JSON.stringify(jogadorObj);
        //localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
    };
    JogadorService.prototype.editarJogador = function (id, newInfo) {
        var jogadorJSON, jogadorObj, jogadorText;
        jogadorText = localStorage.getItem("jogadoresSaveJSON");
        jogadorObj = JSON.parse(jogadorText);
        jogadorObj.jogadores[id].nome = newInfo.nome;
        jogadorObj.jogadores[id].idade = newInfo.idade;
        jogadorObj.jogadores[id].nacionalidade = newInfo.nacionalidade;
        JogadorService_1.emitirJogador.emit(jogadorObj.jogadores);
        jogadorJSON = JSON.stringify(jogadorObj);
        localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
    };
    JogadorService.prototype.removerJogador = function (playerId) {
        var jogadorJSON, jogadorObj, jogadorText;
        jogadorText = localStorage.getItem("jogadoresSaveJSON");
        jogadorObj = JSON.parse(jogadorText);
        jogadorObj.jogadores[playerId].status = "desativado";
        jogadorJSON = JSON.stringify(jogadorObj);
        localStorage.setItem("jogadoresSaveJSON", jogadorJSON);
    };
    JogadorService.prototype.getJogador = function () {
        var jogadorText, jogadorObj;
        jogadorText = localStorage.getItem("jogadoresSaveJSON");
        jogadorObj = JSON.parse(jogadorText);
        //return this.jogador;
        return jogadorObj.jogadores;
    };
    var JogadorService_1;
    JogadorService.emitirJogador = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    JogadorService = JogadorService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], JogadorService);
    return JogadorService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/MAMP/htdocs/crud-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map