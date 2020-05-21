(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\n    <div class=\"container\">\n      <h3 class=\"title\">Basic Elements</h3>\n      <div id=\"buttons\">\n          <h4>Buttons</h4>\n          <p class=\"category\">Pick your style</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\n                  </button>\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  </button>\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your size</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\n                  <button class=\"btn btn-primary\">Regular</button>\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\n              </div>\n          </div>\n          <p class=\"category\">Pick your color</p>\n          <div class=\"row\">\n              <div class=\"col-md-10\">\n                  <button class=\"btn\">Default</button>\n                  <button class=\"btn btn-primary\">Primary</button>\n                  <button class=\"btn btn-info\">Info</button>\n                  <button class=\"btn btn-success\">Success</button>\n                  <button class=\"btn btn-warning\">Warning</button>\n                  <button class=\"btn btn-danger\">Danger</button>\n                  <button class=\"btn btn-neutral\">Neutral</button>\n              </div>\n          </div>\n          <h4>Links</h4>\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n                  <button class=\"btn btn-link\">Default</button>\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\n                  <button class=\"btn btn-link btn-info\">Info</button>\n                  <button class=\"btn btn-link btn-success\">Success</button>\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\n              </div>\n          </div>\n      </div>\n      <div id=\"inputs\">\n          <h4>Inputs</h4>\n          <p class=\"category\">Form Controls</p>\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group\">\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-success\">\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"form-group has-danger\">\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"fa fa-user-circle\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-lg-3\">\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                      <div class=\"input-group-append\">\n                        <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons users_single-02\"></i>\n                        </span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"row\" id=\"checkRadios\">\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Checkboxes</p>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\">\n                    <span class=\"form-check-sign\"></span>\n                    Unchecked\n                </label>\n            </div>\n            <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Checked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Unchecked\n                </label>\n            </div>\n            <div class=\"form-check disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled Checked\n                </label>\n            </div>\n        </div>\n        <div class=\"col-sm-6 col-lg-3\">\n            <p class=\"category\">Radios</p>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\n                    <span class=\"form-check-sign\"></span>\n                    Radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\n                    <span class=\"form-check-sign\"></span>\n                    Radio is on\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is off\n                </label>\n            </div>\n            <div class=\"form-check form-check-radio disabled\">\n                <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\n                    <span class=\"form-check-sign\"></span>\n                    Disabled radio is on\n                </label>\n            </div>\n        </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Toggle Buttons</p>\n              <bSwitch\n                  [(ngModel)]=\"state\">\n              </bSwitch>\n              <bSwitch> Toggle is off\n              </bSwitch>\n          </div>\n          <div class=\"col-sm-6 col-lg-3\">\n              <p class=\"category\">Sliders</p>\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\n              <br>\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\n          </div>\n      </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\n\n    </div>\n      <div class=\"container\">\n          <div class=\"content-center brand\">\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\n          </div>\n          <h6 class=\"category category-absolute\">Designed by\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\n              </a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\n              </a>.</h6>\n      </div>\n  </div>\n\n  <div class=\"main\">\n    <div class=\"section section-images\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"hero-images-container\">\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-1\">\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\n                    </div>\n                    <div class=\"hero-images-container-2\">\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n      <app-basicelements></app-basicelements>\n      <app-navigation></app-navigation>\n      <div class=\"section section-tabs\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Icons on Card</p>\n                      <!-- Nav tabs -->\n\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab>\n                                      <ng-template ngbTabTitle>\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n                                      </ng-template>\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                  </div>\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\n                      <p class=\"category\">Tabs with Background on Card</p>\n                      <!-- Tabs with Background on Card -->\n                      <div class=\"card\">\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\n                            <div class=\"nav-tabs-wrapper\">\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\n                                    <ngb-tab title=\"Home\">\n                                      <ng-template ngbTabContent>\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Profile\">\n                                      <ng-template ngbTabContent>\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Messages\">\n                                      <ng-template ngbTabContent>\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\n                                      </ng-template>\n                                    </ngb-tab>\n                                    <ngb-tab title=\"Settings\">\n                                        <ng-template ngbTabContent>\n                                          <p>\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                          </p>\n                                        </ng-template>\n                                    </ngb-tab>\n                                </ngb-tabset>\n                            </div>\n                        </div>\n                      </div>\n                      <!-- End Tabs on plain Card -->\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-pagination\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-6\">\n                      <h4>Progress Bars</h4>\n                      <div class=\"progress-container\">\n                        <span class=\"progress-badge\">Default</span>\n\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\n                      </div>\n                      <div class=\"progress-container progress-primary\">\n                          <span class=\"progress-badge\">Primary</span>\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\n                      </div>\n                      <br />\n                      <h4>Navigation Pills</h4>\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"far fa-gem\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"fa fa-thermometer-full\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-suitcase\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab [disabled]=\"true\">\n                              <ng-template ngbTabTitle>\n                                <i class=\"fa fa-exclamation\"></i>\n                              </ng-template>\n                              <ng-template ngbTabContent>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Pagination</h4>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\n                      <br/>\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\n                      <br>\n                      <h4>Labels</h4>\n                      <span class=\"badge badge-default\">Default</span>\n                      <span class=\"badge badge-primary\">Primary</span>\n                      <span class=\"badge badge-success\">Success</span>\n                      <span class=\"badge badge-info\">Info</span>\n                      <span class=\"badge badge-warning\">Warning</span>\n                      <span class=\"badge badge-danger\">Danger</span>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section\" id=\"notifications\">\n          <div class=\"container\">\n            <h4>Notifications</h4>\n          </div>\n          <app-notification></app-notification>\n      </div>\n      <app-typography></app-typography>\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\n          <div class=\"container\">\n              <h3 class=\"title\">Angular Native Components</h3>\n              <div class=\"row\" id=\"modals\">\n                  <div class=\"col-md-6\">\n                      <h4>Modal</h4>\n                      <ngbd-modal-component></ngbd-modal-component>\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Popovers</h4>\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\n                          On right\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                          On top\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                          On left\n                      </button>\n\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                          On bottom\n                      </button>\n                  </div>\n                  <br />\n                  <br />\n                  <div class=\"col-md-6\">\n                      <h4>Datetimepicker</h4>\n                      <div class=\"row\">\n                          <div class=\"col-md-6\">\n                              <div class=\"datepicker-container\">\n                                  <div class=\"form-group\">\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\n                \t\t\t            </div>\n                              </div>\n                          </div>\n                      </div>\n                      <!--                 end collapse -->\n                  </div>\n                  <div class=\"col-md-6\">\n                      <h4>Tooltips</h4>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                         On right\n                     </button>\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                       On left\n                     </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                         On top\n                      </button>\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                          On bottom\n                      </button>\n                      <div class=\"clearfix\"></div>\n                      <br>\n                      <br>\n                  </div>\n              <!-- </div>\n            </div> -->\n          </div>\n\n          <div class=\"section\" id=\"carousel\">\n              <div class=\"container\">\n                  <div class=\"title\">\n                      <h4>Carousel</h4>\n                  </div>\n                  <div class=\"row justify-content-center\">\n                      <div class=\"col-8\">\n                        <ngb-carousel>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Nature, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Somewhere Beyond, United States</h5>\n                              </div>\n                            </ng-template>\n                            <ng-template ngbSlide>\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\n                              <div class=\"carousel-caption d-none d-md-block\">\n                                  <h5>Yellowstone National Park, United States</h5>\n                              </div>\n                            </ng-template>\n                        </ngb-carousel>\n                      </div>\n                  </div>\n              </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"section section-nucleo-icons\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-12\">\n                      <h2 class=\"title\">Nucleo Icons</h2>\n                      <h5 class=\"description\">\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\n                      </h5>\n                      <!-- <div class=\"nucleo-container\">\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\n      </div> -->\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\n                  </div>\n                  <div class=\"col-lg-6 col-md-12\">\n                      <div class=\"icons-container\">\n                          <i class=\"now-ui-icons ui-1_send\"></i>\n                          <i class=\"now-ui-icons ui-2_like\"></i>\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                          <i class=\"now-ui-icons text_bold\"></i>\n                          <i class=\"now-ui-icons tech_headphones\"></i>\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                          <i class=\"now-ui-icons design_palette\"></i>\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                          <i class=\"now-ui-icons location_pin\"></i>\n                          <i class=\"now-ui-icons objects_key-25\"></i>\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </div>\n\n      <div class=\"section\">\n          <div class=\"container text-center\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"col-md-12 col-lg-8\">\n                      <h2 class=\"title\">Completed with examples</h2>\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\n          <div class=\"container login-page\">\n            <div class=\"row\">\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\n                  <div class=\"card card-login card-plain\">\n                      <form class=\"form\" method=\"\" action=\"\">\n                          <div class=\"header header-primary text-center\">\n                              <div class=\"logo-container\">\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\n                              </div>\n                          </div>\n                          <div class=\"content\">\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                              </div>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            </div>\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                              <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                              </div>\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                            </div>\n                          </div>\n                          <div class=\"footer text-center\">\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\n                              </h6>\n                          </div>\n                          <div class=\"text-center\">\n                              <h6>\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                              </h6>\n                          </div>\n                      </form>\n                  </div>\n              </div>\n            </div>\n              <div class=\"col text-center\">\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-examples\" data-background-color=\"black\">\n          <div class=\"space-50\"></div>\n          <div class=\"container text-center\">\n              <div class=\"row\">\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/landing']\">\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\n                  </div>\n                  <div class=\"col\">\n                      <a [routerLink]=\"['/examples/profile']\">\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\n                      </a>\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\n                  </div>\n              </div>\n          </div>\n      </div>\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\n          <div class=\"container\">\n              <div class=\"row justify-content-md-center\">\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\n                  </div>\n                  <div class=\"text-center col-md-12 col-lg-8\">\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\n                          Download Angular\n                      </a>\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\n                          Download PSD/Sketch\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <br>\n              <div class=\"row text-center mt-5\">\n                  <div class=\"col-md-8 ml-auto mr-auto\">\n                      <h2>Want more?</h2>\n                      <h5 class=\"description\">We've just launched\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\n                  </div>\n                  <div class=\"col-md-12\">\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\n                      </a>\n                  </div>\n              </div>\n              <br>\n              <br>\n              <div class=\"row justify-content-md-center sharing-area text-center\">\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <h3>Thank you for supporting us!</h3>\n                </div>\n                <div class=\"text-center col-md-12 col-lg-8\">\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\n                    <i class=\"fab fa-linkedin\"></i>\n                  </a>\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\n                    <i class=\"fab fa-github\"></i>\n                  </a>\n                </div>\n              </div>\n          </div>\n      </div>\n  </div>\n  <footer class=\"footer\" data-background-color=\"black\">\n      <div class=\"container\">\n          <nav>\n              <ul>\n                  <li>\n                      <a href=\"https://www.creative-tim.com\">\n                          Creative Tim\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://www.creative-tim.com/about-us\">\n                          About Us\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"http://blog.creative-tim.com\">\n                          Blog\n                      </a>\n                  </li>\n                  <li>\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                          MIT License\n                      </a>\n                  </li>\n              </ul>\n          </nav>\n          <div class=\"copyright\">\n              &copy;\n            {{data | date: 'yyyy'}}, Designed by\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n          </div>\n      </div>\n  </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\n Launch Modal\n</button>\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n        </button>\n        <h4 class=\"title title-up\">Modal title</h4>\n    </div>\n    <div class=\"modal-body\">\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\n        </p>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\n    </div>\n</ng-template>\n\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\n   Launch Modal Mini\n</button>\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header justify-content-center\">\n      <div class=\"modal-profile\">\n          <i class=\"now-ui-icons users_circle-08\"></i>\n      </div>\n  </div>\n  <div class=\"modal-body\">\n      <p>Always have an access to your profile</p>\n  </div>\n  <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <h4>Menu</h4>\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item active\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#\">\n                                        <p>Link</p>\n                                    </a>\n                                </li>\n                                <li class=\"nav-item\">\n                                  <div ngbDropdown class=\"dropdown\">\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                        <p>\n                                            Dropdown\n                                        </p>\n                                      </a>\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                                      </div>\n                                  </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <h4>Menu with Icons</h4>\n                <nav class=\"navbar navbar-expand-lg bg-info\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\n                            <ul class=\"navbar-nav ml-auto\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"dropdown\">\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                        </a>\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\n                                            <div class=\"dropdown-header\">Dropdown header</div>\n                                            <a class=\"dropdown-item\">Action</a>\n                                            <a class=\"dropdown-item\">Another action</a>\n                                            <a class=\"dropdown-item\">Something else here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Another separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n        <h4>Navigation</h4>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\n            <!-- Navbar Primary  -->\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Primary -->\n            <!-- Navbar Info -->\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Discover</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Profile</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <p>Settings</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Info -->\n            <!-- Navbar Success -->\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item active\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons objects_globe\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Success -->\n            <!-- Navbar Warning -->\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Warning -->\n            <!-- Navbar Danger -->\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Share</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Tweet</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-pinterest\"></i>\n                                    <p>Pin</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Danger -->\n            <!-- Navbar Transparent -->\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <div class=\"navbar-translate\">\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-bar bar1\"></span>\n                            <span class=\"navbar-toggler-bar bar2\"></span>\n                            <span class=\"navbar-toggler-bar bar3\"></span>\n                        </button>\n                    </div>\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                    <p>Facebook</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-twitter\"></i>\n                                    <p>Twitter</p>\n                                </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#pablo\">\n                                    <i class=\"fa fa-instagram\"></i>\n                                    <p>Instagram</p>\n                                </a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <!-- End Navbar Transparent-->\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\n        <div class=\"container\">\n            <div class=\"alert-wrapper\">\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                  <span aria-hidden=\"true\">\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  </span>\n                </button>\n                <div class=\"message\">\n                    <ng-container *ngIf=\"alert.icon\">\n                      <div class=\"alert-icon\">\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\n                      </div>\n                    </ng-container>\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\n                </div>\n            </div>\n        </div>\n    </ngb-alert>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\n  <header>\n      <h1>Nucleo Outline Web Font v2.9</h1>\n      <p>\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\n      </p>\n  </header>\n  <div id=\"cd-nav\">\n      <nav>\n          <ul id=\"cd-main-nav\">\n              <li>\n                  <a href=\"#arrows\">Arrows</a>\n              </li>\n              <li>\n                  <a href=\"#business\">Business &amp; Finance</a>\n              </li>\n              <li>\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\n              </li>\n              <li>\n                  <a href=\"#design\">Design &amp; Development</a>\n              </li>\n              <li>\n                  <a href=\"#emoticons\">Emoticons</a>\n              </li>\n              <li>\n                  <a href=\"#files\">Files &amp; Folders</a>\n              </li>\n              <li>\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\n              </li>\n              <li>\n                  <a href=\"#loaders\">Loaders</a>\n              </li>\n              <li>\n                  <a href=\"#maps\">Maps &amp; Location</a>\n              </li>\n              <li>\n                  <a href=\"#media\">Media</a>\n              </li>\n              <li>\n                  <a href=\"#objects\">Objects</a>\n              </li>\n              <li>\n                  <a href=\"#school\">School &amp; Education</a>\n              </li>\n              <li>\n                  <a href=\"#shopping\">Shopping</a>\n              </li>\n              <li>\n                  <a href=\"#sport\">Sport</a>\n              </li>\n              <li>\n                  <a href=\"#technology\">Technology</a>\n              </li>\n              <li>\n                  <a href=\"#text\">Text Editing</a>\n              </li>\n              <li>\n                  <a href=\"#gestures\">Touch Gestures</a>\n              </li>\n              <li>\n                  <a href=\"#transportation\">Transportation</a>\n              </li>\n              <li>\n                  <a href=\"#travel\">Travel</a>\n              </li>\n              <li>\n                  <a href=\"#interface\">User Interface</a>\n              </li>\n              <li>\n                  <a href=\"#users\">Users</a>\n              </li>\n          </ul>\n      </nav>\n  </div>\n  <div id=\"icons-wrapper\">\n      <section id=\"arrows\">\n          <h2>Arrows</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\n                  <p>arrows-1_cloud-download-93</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\n                  <p>arrows-1_cloud-upload-94</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\n                  <p>arrows-1_minimal-down</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\n                  <p>arrows-1_minimal-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\n                  <p>arrows-1_minimal-right</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\n                  <p>arrows-1_minimal-up</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\n                  <p>arrows-1_refresh-69</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\n                  <p>arrows-1_share-66</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"business\">\n          <h2>Business &amp; Finance</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons business_badge\"></i>\n                  <p>business_badge</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bank\"></i>\n                  <p>business_bank</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\n                  <p>business_briefcase-24</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\n                  <p>business_bulb-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\n                  <p>business_chart-bar-32</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\n                  <p>business_chart-pie-36</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_globe\"></i>\n                  <p>business_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons business_money-coins\"></i>\n                  <p>business_money-coins</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"clothes\">\n          <h2>Clothes &amp; Accessories</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\n                  <p>clothes_tie-bow</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"design\">\n          <h2>Design &amp; Development</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons design_app\"></i>\n                  <p>design_app</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\n                  <p>design_bullet-list-67</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_image\"></i>\n                  <p>design_image</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_palette\"></i>\n                  <p>design_palette</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_scissors\"></i>\n                  <p>design_scissors</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design_vector\"></i>\n                  <p>design_vector</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_html5\"></i>\n                  <p>design-2_html5</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\n                  <p>design-2_ruler-pencil</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"emoticons\">\n          <h2>Emoticons</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\n                  <p>emoticons_satisfied</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"files\">\n          <h2>Files &amp; Folders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons files_box\"></i>\n                  <p>files_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_paper\"></i>\n                  <p>files_paper</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\n                  <p>files_single-copy-04</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"medical\">\n          <h2>Healthcare &amp; Medical</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons health_ambulance\"></i>\n                  <p>health_ambulance</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"loaders\">\n          <h2>Loaders</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\n                  <p>loader_gear</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\n                  <p>loader_refresh</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"maps\">\n          <h2>Maps &amp; Location</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons location_bookmark\"></i>\n                  <p>location_bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_compass-05\"></i>\n                  <p>location_compass-05</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_map-big\"></i>\n                  <p>location_map-big</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_pin\"></i>\n                  <p>location_pin</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons location_world\"></i>\n                  <p>location_world</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"media\">\n          <h2>Media</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons media-1_album\"></i>\n                  <p>media-1_album</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\n                  <p>media-1_button-pause</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\n                  <p>media-1_button-play</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\n                  <p>media-1_button-power</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\n                  <p>media-1_camera-compact</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\n                  <p>media-2_note-03</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\n                  <p>media-2_sound-wave</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"objects\">\n          <h2>Objects</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons objects_diamond\"></i>\n                  <p>objects_diamond</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_globe\"></i>\n                  <p>objects_globe</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_key-25\"></i>\n                  <p>objects_key-25</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_planet\"></i>\n                  <p>objects_planet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\n                  <p>objects_spaceship</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_support-17\"></i>\n                  <p>objects_support-17</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\n                  <p>objects_umbrella-13</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"school\">\n          <h2>School &amp; Education</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\n                  <p>education_agenda-bookmark</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_atom\"></i>\n                  <p>education_atom</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_glasses\"></i>\n                  <p>education_glasses</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_hat\"></i>\n                  <p>education_hat</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons education_paper\"></i>\n                  <p>education_paper</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"shopping\">\n          <h2>Shopping</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\n                  <p>shopping_bag-16</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_basket\"></i>\n                  <p>shopping_basket</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_box\"></i>\n                  <p>shopping_box</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\n                  <p>shopping_cart-simple</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\n                  <p>shopping_credit-card</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\n                  <p>shopping_delivery-fast</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_shop\"></i>\n                  <p>shopping_shop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\n                  <p>shopping_tag-content</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"sport\">\n          <h2>Sport</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons sport_trophy\"></i>\n                  <p>sport_trophy</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons sport_user-run\"></i>\n                  <p>sport_user-run</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"technology\">\n          <h2>Technology</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\n                  <p>tech_controller-modern</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_headphones\"></i>\n                  <p>tech_headphones</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_laptop\"></i>\n                  <p>tech_laptop</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_mobile\"></i>\n                  <p>tech_mobile</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tablet\"></i>\n                  <p>tech_tablet</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_tv\"></i>\n                  <p>tech_tv</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\n                  <p>tech_watch-time</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"text\">\n          <h2>Text Editing</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons text_align-center\"></i>\n                  <p>text_align-center</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_align-left\"></i>\n                  <p>text_align-left</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_bold\"></i>\n                  <p>text_bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons text_caps-small\"></i>\n                  <p>text_caps-small</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"gestures\">\n          <h2>Touch Gestures</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\n                  <p>gestures_tap-01</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"transportation\">\n          <h2>Transportation</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\n                  <p>transportation_air-baloon</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\n                  <p>transportation_bus-front-12</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"travel\">\n          <h2>Travel</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons travel_info\"></i>\n                  <p>travel_info</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\n                  <p>travel_istanbul</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"interface\">\n          <h2>User Interface</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\n                  <p>ui-1_bell-53</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\n                  <p>ui-1_calendar-60</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_check\"></i>\n                  <p>ui-1_check</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\n                  <p>ui-1_lock-circle-open</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_send\"></i>\n                  <p>ui-1_send</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\n                  <p>ui-1_settings-gear-63</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\n                  <p>ui-1_simple-add</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\n                  <p>ui-1_simple-delete</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                  <p>ui-1_simple-remove</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\n                  <p>ui-1_zoom-bold</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\n                  <p>ui-2_chat-round</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\n                  <p>ui-2_favourite-28</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_like\"></i>\n                  <p>ui-2_like</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\n                  <p>ui-2_settings-90</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\n                  <p>ui-2_time-alarm</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\n                  <p>ui-1_email-85</p>\n              </li>\n          </ul>\n      </section>\n      <section id=\"users\">\n          <h2>Users</h2>\n          <ul>\n              <li>\n                  <i class=\"now-ui-icons users_circle-08\"></i>\n                  <p>users_circle-08</p>\n              </li>\n              <li>\n                  <i class=\"now-ui-icons users_single-02\"></i>\n                  <p>users_single-02</p>\n              </li>\n          </ul>\n      </section>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\n    <div class=\"container\">\n        <h3 class=\"title\">Typography</h3>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <div class=\"typography-line\">\n                        <h1>\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h3>\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h4>\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h5>\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h6>\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\n                    </div>\n                    <div class=\"typography-line\">\n                        <p>\n                            <span>Paragraph</span>\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Quote</span>\n                        <blockquote>\n                            <p class=\"blockquote blockquote-primary\">\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\n                                <br>\n                                <br>\n                                <small>\n                                    - Noaa\n                                </small>\n                            </p>\n                        </blockquote>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Muted Text</span>\n                        <p class=\"text-muted\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Primary Text</span>\n                        <p class=\"text-primary\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Info Text</span>\n                        <p class=\"text-info\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Success Text</span>\n                        <p class=\"text-success\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Warning Text</span>\n                        <p class=\"text-warning\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\n                        </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <span>Danger Text</span>\n                        <p class=\"text-danger\">\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\n                    </div>\n                    <div class=\"typography-line\">\n                        <h2>\n                            <span>Small Tag</span>\n                            Header with small subtitle\n                            <br>\n                            <small>Use \"small\" tag for the headers</small>\n                        </h2>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"space-50\"></div>\n        <div id=\"images\">\n            <h4>Images</h4>\n            <div class=\"row\">\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Image</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\n                </div>\n                <div class=\"col-sm-2\">\n                    <p class=\"category\">Circle Raised</p>\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\n                </div>\n            </div>\n        </div>\n      </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-blog-page/edit-blog-page.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-blog-page/edit-blog-page.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-spin\">\n    <svg class=\"spinner\" viewBox=\"0 0 50 50\" >\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n    </svg>    \n</div>\n\n<div class=\"wrapper\" style=\"margin-top: 150px;\" *ngIf=\"!isLoading\">\n    <div class=\"row justify-content-end\">\n        \n        <p style=\"margin-right: 30px;\">Edit Mode <bSwitch\n            [(ngModel)]=\"edit_mode_state\" style=\"display: inline;vertical-align: sub;\">        \n            \n            </bSwitch>\n        </p>\n        \n    </div>\n    \n    <div class=\"section section-view\" *ngIf=\"!edit_mode_state\">\n        <div class=\"container\">\n            <h1 class=\"text-center title\"> {{postForm.get('title').value}} </h1>\n            <div class=\"row justify-content-center\">\n                <ng-container *ngIf=\"isImageSaved; else elseTemplate\">\n                    <img [src]=\"cardImageBase64\" class=\"text-center img-raised\" style=\"margin-bottom: 10px;\" />\n                </ng-container>\n                <ng-template #elseTemplate>\n                    <ng-container *ngIf=\"blog.mainImg; else blankImageTemplate\">\n                        <img [src]=\"blog.mainImg\" class=\"text-center img-raised\" style=\"margin-bottom: 10px;\"/>\n                    </ng-container>\n                    \n                </ng-template>\n            </div>\n            \n            <div [innerHTML]=\"postForm.get('content').value\">\n\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-editor\" *ngIf=\"edit_mode_state\">\n        <div class=\"container\">\n            <form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('title')}\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" id=\"post-title\">\n                  <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('title')\">\n                        <h6  *ngIf=\"postForm.get('title').errors.required\">\n                        Name is required.\n                        </h6 >\n                  </div>\n                  \n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('mainImg')}\">\n                    <div class=\"custom-file fileInputProfileWrap form-control\" >\n                        <button class=\"btn btn-default btn-icon btn-round btn-sm btn-remove\" type=\"button\" (click)=\"removeImage()\" *ngIf=\"isImageSaved\">\n                            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                        </button>\n                        \n                        <input type=\"file\" (change)=\"fileChangeEvent($event)\" class=\"fileInputProfile\" accept=\"image/*\">\n                        <div class=\"img-space\">\n    \n                            <ng-container *ngIf=\"isImageSaved; else elseTemplate\">\n                                <img [src]=\"cardImageBase64\" />\n                            </ng-container>\n                            <ng-template #elseTemplate>\n                                <ng-container *ngIf=\"blog.mainImg; else blankImageTemplate\">\n                                    <img [src]=\"blog.mainImg\"/>\n                                </ng-container>\n                                <ng-template #blankImageTemplate>\n                                    <p class=\"mb-0 text-center\">Click to Upload Image.</p>\n                                </ng-template>\n                                \n                            </ng-template>\n    \n                        </div>\n                        <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('mainImg')\">\n                            <h6  *ngIf=\"postForm.get('mainImg').errors.required\">\n                            Image is required.\n                            </h6 >\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('content')}\">\n                    <angular-editor [placeholder]=\"'Enter text here...'\" [config]=\"config\" formControlName=\"content\" ></angular-editor>\n                    <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('content')\">\n                        <h6 >\n                        Content is required.\n                        </h6 >\n                    </div>\n                </div>\n                \n                <button type=\"submit\" class=\"btn\" > submit </button>\n              </form>\n              \n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  examples works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg6.jpg');\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <h1 class=\"title\">This is our great company.</h1>\n                <div class=\"text-center\">\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-twitter\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\n                    <i class=\"fab fa-google-plus\"></i>\n                  </a>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-about-us\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                    <h2 class=\"title\">Who we are?</h2>\n                    <h5 class=\"description\">According to the National Oceanic and Atmospheric Administration, Ted, Scambos, NSIDClead scentist, puts the potentially record low maximum sea ice extent tihs year down to low ice extent in the Pacific and a late drop in ice extent in the Barents Sea.</h5>\n                </div>\n            </div>\n            <div class=\"separator separator-primary\"></div>\n            <div class=\"section-story-overview\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <div class=\"image-container image-left\" style=\"background-image: url('assets/img/login.jpg')\">\n                            <!-- First image on the left side -->\n                            <p class=\"blockquote blockquote-primary\">\"Over the span of the satellite record, Arctic sea ice has been declining significantly, while sea ice in the Antarctichas increased very slightly\"\n                                <br>\n                                <br>\n                                <small>-NOAA</small>\n                            </p>\n                        </div>\n                        <!-- Second image on the left side of the article -->\n                        <div class=\"image-container\" style=\"background-image: url('assets/img/bg3.jpg')\"></div>\n                    </div>\n                    <div class=\"col-md-5\">\n                        <!-- First image on the right side, above the article -->\n                        <div class=\"image-container image-right\" style=\"background-image: url('assets/img/bg1.jpg')\"></div>\n                        <h3>So what does the new record for the lowest level of winter ice actually mean</h3>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                        <p>\n                            For a start, it does not automatically follow that a record amount of ice will melt this summer. More important for determining the size of the annual thaw is the state of the weather as the midnight sun approaches and temperatures rise. But over the more than 30 years of satellite records, scientists have observed a clear pattern of decline, decade-by-decade.\n                        </p>\n                        <p>The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever happens with climate change. Even if the Arctic continues to be one of the fastest-warming regions of the world, it will always be plunged into bitterly cold polar dark every winter. And year-by-year, for all kinds of natural reasons, there’s huge variety of the state of the ice.\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-team text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Here is our team</h2>\n            <div class=\"team\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Romina Hadid</h4>\n                            <p class=\"category text-primary\">Model</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-instagram\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-facebook-square\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/ryan.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Ryan Tompson</h4>\n                            <p class=\"category text-primary\">Designer</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-linkedin\"></i></a>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"team-player\">\n                            <img src=\"assets/img/eva.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-fluid img-raised\">\n                            <h4 class=\"title\">Eva Jenner</h4>\n                            <p class=\"category text-primary\">Fashion</p>\n                            <p class=\"description\">You can write here details about one of your team members. You can give more details about what they do. Feel free to add some\n                                <a href=\"#\">links</a> for people to be able to follow them outside the site.</p>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-google-plus\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-youtube\"></i></a>\n                                <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\"><i class=\"fab fa-twitter\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-contact-us text-center\">\n        <div class=\"container\">\n            <h2 class=\"title\">Want to work with us?</h2>\n            <p class=\"description\">Your project is very important to us.</p>\n            <div class=\"row\">\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                          <i class=\"now-ui-icons users_circle-08\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                  </div>\n                  <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                    <div class=\"input-group-prepend\" >\n                      <span class=\"input-group-text\">\n                            <i class=\"now-ui-icons ui-1_email-85\"></i>\n                      </span>\n                    </div>\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\n                  </div>\n                    <div class=\"textarea-container\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"4\" cols=\"80\" placeholder=\"Type a message...\"></textarea>\n                    </div>\n                    <div class=\"send-button\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-block btn-lg\">Send Message</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"page-header\" filter-color=\"orange\">\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\n    <div class=\"container\">\n        <div class=\"col-md-4 content-center\">\n            <div class=\"card card-login card-plain\">\n                <form class=\"form\" method=\"\" action=\"\">\n                    <div class=\"header header-primary text-center\">\n                        <div class=\"logo-container\">\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\n                        </div>\n                    </div>\n                    <div class=\"content\">\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\n                        </div>\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                      </div>\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\n                        </div>\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\n                      </div>\n                    </div>\n                    <div class=\"footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\n                    </div>\n                    <div class=\"pull-left\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\n                        </h6>\n                    </div>\n                    <div class=\"pull-right\">\n                        <h6>\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\n                        </h6>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n              {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\n        </div>\n        <div class=\"container\">\n            <div class=\"content-center\">\n                <div class=\"photo-container\">\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\n                </div>\n                <h3 class=\"title\">Ryan Scheinder</h3>\n                <p class=\"category\">Photographer</p>\n                <div class=\"content\">\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>26</h2>\n                        <p>Comments</p>\n                    </div>\n                    <div class=\"social-description\">\n                        <h2>48</h2>\n                        <p>Bookmarks</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n          <div class=\"button-container\">\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\n                <i class=\"fab fa-twitter\"></i>\n              </a>\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\n                <i class=\"fab fa-instagram\"></i>\n              </a>\n          </div>\n          <h3 class=\"title\">About me</h3>\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\n            <div class=\"row\">\n                <div class=\"col-md-12\">\n                    <h4 class=\"title text-center\">My Portfolio</h4>\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons design_image\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons location_world\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                          <ngb-tab>\n                            <ng-template ngbTabTitle>\n                              <i class=\"now-ui-icons sport_user-run\"></i>\n                            </ng-template>\n                              <ng-template ngbTabContent>\n                                <div class=\"row\">\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <div class=\"row collections\">\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\n                                          </div>\n                                          <div class=\"col-md-6\">\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\n                                          </div>\n                                      </div>\n                                  </div>\n                                </div>\n                              </ng-template>\n                          </ngb-tab>\n                      </ngb-tabset>\n                </div>\n            </div>\n        </div>\n    </div>\n    <footer class=\"footer footer-default\">\n        <div class=\"container\">\n            <nav>\n                <ul>\n                    <li>\n                        <a href=\"https://www.creative-tim.com\">\n                            Creative Tim\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://www.creative-tim.com/about-us\">\n                            About Us\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"http://blog.creative-tim.com\">\n                            Blog\n                        </a>\n                    </li>\n                    <li>\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\n                            MIT License\n                        </a>\n                    </li>\n                </ul>\n            </nav>\n            <div class=\"copyright\">\n                &copy;\n                {{data | date: 'yyyy'}}, Designed by\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\n            </div>\n        </div>\n    </footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-report-page/get-report-page.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-report-page/get-report-page.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isloading\" class=\"loading-spin\">\n    <div style=\"position: absolute;left: 0;right:0;top: 0;bottom: 0;background-color: #3e423fad;\">\n\n    </div>\n    <svg class=\"spinner\" viewBox=\"0 0 50 50\" >\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n    </svg>\n    <h5 style=\"position: absolute; left: 50%; top: 50%; margin:30px 0px 0px -50px; color: aliceblue;\"> Waiting Payment Confirmation</h5>\n</div>\n<div class=\"wrapper \" style=\"margin-top: 150px;\" *ngIf=\"!isloading\">\n    <div class=\"section\">\n        <div class=\"container\">\n            <div class=\"text-center\" *ngIf=\"carInfo\">\n                <h5 > <i class=\"now-ui-icons ui-1_check bg-success check-btn\"></i>  </h5>\n                <h4> Order Completed Succesfully! </h4>\n                <p> Thank you for ordering. We received your payment</p>            \n                <p> Report for {{carInfo.carmake}} {{carInfo.carmodel}} | {{carInfo.caryear}} | VIN : {{carInfo.vin}}\n                    was sent by e-mail\n                </p>\n                <p> If you want , you can also download it now</p>\n                <a href=\"#\" class=\"btn btn-round btn-default\"> Search new VIN</a>\n                <a href=\"{{downloadLink()}}\" target=\"_blank\" class=\"btn btn-round btn-default\"> Download Report </a>\n            </div>\n            <div  class=\"text-center\" *ngIf=\"!carInfo\">\n                <h3> OOPS!</h3>\n                <h6> It seems that there is problem with you. For more detail Please contact                 \n                        <a class=\"btn btn-link\" href=\"mailto:info@autoszafa.pl\" target=\"_blank\">                        \n                            <i class=\"now-ui-icons ui-1_email-85 mr-1\"></i>info@autoszafa.pl\n                        </a>                \n                </h6>\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-spin\">\n    <svg class=\"spinner\" viewBox=\"0 0 50 50\" >\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n    </svg>    \n</div>\n<div class=\"wrapper\" style=\"margin-top: 150px;\" *ngIf=\"!isLoading\">\n    <div class=\"section section-search\">\n        <div class=\"container\">\n            <div class=\"row col\">\n                <h4 class=\"mr-auto ml-auto text-center\" style=\"font-weight: 800;\">\n                    Check the Vehicle History!\n                </h4>\n            </div>\n            <!-- Search Box -->\n            <div class=\"row justify-content-center\" >\n                <div class=\"col-sm-10\">\n                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                        <input [(ngModel)]=\"vin_number\" (ngModelChange)=\"onchange()\" type=\"text\" class=\"form-control h3\" placeholder=\"Search\"  (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                        \n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <button class=\"btn btn-primary btn-round\" type=\"button\" (click)=\"search()\" >\n                                <i class=\"now-ui-icons ui-1_zoom-bold\"></i> Search\n                            </button>\n                            <small *ngIf=\"!is_validvin && vin_number!=''\" class=\"text-danger\" style=\"z-index: 10; position: absolute; left: 20px;top: 10px;\">\n                                Invalid VIN\n                              </small>\n                          </span>\n                          \n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"row col\">\n                <h6 class=\"mr-auto ml-auto text-center\" style=\"font-weight: 800; color: #f96332;\">\n                    Enter <span placement=\"bottom\" ngbTooltip=\"A vehicle identification number is a unique code, including a serial number, used by the automotive industry to identify individual motor vehicles, towed vehicles, motorcycles, scooters and mopeds, as defined in ISO 3779 and ISO 4030. VINs were first used in 1954 in the United States.\"> VIN </span> and get a car report instantly\n                </h6>\n            </div>\n        </div>\n        \n    </div>\n    \n    <!--  -->\n  \n    <div class=\"section section-trusted-by\">\n        <div class=\"container\">\n            <p class=\"mr-auto ml-auto text-center\">Trusted by over <b>1,000</b> people across <b>Poland</b></p>\n        </div>\n    </div>\n    <div class=\"section section-alwasy-check\">\n        <div class=\"container\">\n            <div class=\"col text-center mb-4\">\n                <h4 class=\"text-center\" style=\"font-weight: 800;\"> Attention:always check a car berfore buying it </h4>\n                <p class=\"description text-center\"> Vehicle History Report checks for: </p>\n                <ul>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Vehicle service history\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Hidden damage report\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Mileage rollback\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Historical Photos\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Multiple owners\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Theft records\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Commmon faults of each model\n                    </li>\n                    <li>\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 56.7 44.8\"><path d=\"M7.2 18.6L0 25.8l19 19L56.7 7.2 49.5 0 19 30.4z\"></path></svg>\n                        </span>\n                        Other useful information\n                    </li>\n                </ul>\n            </div>\n            <a href=\"{{ mainService.GetSamplePdfUrl() }}\" target=\"_blank\" class=\"btn btn-primary\"> <span style=\"font-weight: 800;\">VIEW SAMPLE REPORT</span> <i class=\"now-ui-icons arrows-1_minimal-right ml-2\"></i> </a>\n        </div>\n    </div>\n    <div class=\"section section-shorten\">\n        <div class=\"container\">\n            <div class=\"col text-center mb-4\">\n                <h4 class=\"text-center\" style=\"font-weight: 800;\"> <span style=\"font-weight: 800;\">Shorten and simplify your car search</span> </h4>\n                <p class=\"description text-center\"> From distraction to satisfaction in a few moments</p>\n            </div>\n            <div class=\"row justify-content-center\">\n                <ol class=\"stepsection\">\n                    <li class=\"step-item\">\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 235 235\"><path d=\"M147 24.7c-14.2-7.9-30.6-9.8-46.2-5.4-32.2 9.2-50.9 42.8-41.8 75 4.4 15.6 14.7 28.5 28.9 36.4 9.2 5.1 19.3 7.7 29.5 7.7 5.6 0 11.2-.8 16.7-2.3 15.6-4.4 28.6-14.7 36.5-28.9 7.9-14.2 9.8-30.5 5.3-46.1-4.5-15.6-14.7-28.5-28.9-36.4zm21.8 81.6c-7.6 13.7-20.2 23.6-35.3 27.9-15.1 4.3-30.9 2.4-44.6-5.2S65.3 108.9 61 93.8c-8.9-31.1 9.3-63.7 40.4-72.5 5.3-1.5 10.7-2.3 16.1-2.3 9.9 0 19.6 2.5 28.5 7.5 13.7 7.6 23.6 20.1 27.9 35.2 4.3 15 2.5 30.9-5.1 44.6z\"></path><path d=\"M187.4 57.8c-5.3-18.7-17.6-34.2-34.5-43.6C136 4.8 116.3 2.5 97.7 7.8c-38.5 11-61 51.2-50 89.8 5.3 18.7 17.6 34.2 34.5 43.6 14.7 8.2 31.9 11 48.5 8l1.8 6.3-3.8 1.1 18.6 65.4c.8 2.8 2.6 5.1 5.2 6.5 1.7.9 3.5 1.4 5.3 1.4 1 0 2-.1 3-.4 5.6-1.6 9-7.4 7.6-13.1l-18.7-65.8-3.4 1-.4.1-1.8-6.3c16.6-6.5 30.2-18.8 38.3-34.8 8.2-16.4 10-35.1 5-52.8zm-21.1 158.8c1.3 4.7-1.4 9.7-6.1 11-2.3.7-4.7.4-6.8-.8-2.1-1.2-3.6-3.1-4.2-5.3L131.1 158l15.5-4.4 1.7-.5 18 63.5zm-23.9-72.8l-.9.3 2.3 8.1-9.6 2.8-2.3-8.2-.9.2c-16.4 3.2-33.4.5-48-7.6-16.5-9.2-28.4-24.2-33.6-42.4C38.9 59.6 60.7 20.4 98.2 9.7c18.2-5.2 37.3-3 53.7 6.2 16.5 9.2 28.4 24.2 33.6 42.4 9.9 35.2-8.9 72.7-43.1 85.5z\"></path><path d=\"M78.7 46.7c-5.1 6.7-8.6 14.6-10 22.8l2 .3c1.4-7.9 4.7-15.5 9.6-22 8.2-10.7 20-17.5 33.3-19.3l-.3-2c-13.8 2-26.1 9.1-34.6 20.2z\"></path></svg>\n                        </span>\n                        <h4 class=\"step-header\"> ENTER VIN</h4>\n                        <p class=\"step-label\"> STEP1</p>\n                        <p class=\"step-description\">The only thing you need to know. Easily found in car documents.</p>\n                    </li>\n                    <li class=\"step-item\">\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"576.1 -152.7 229.6 208.5\"><path d=\"M777.2-62.4h-2.7v-37.8c0-9.7-7.9-17.6-17.6-17.6h-76.2l-51.4-14.7-.5-.1h-.9c-.1 0-.1 0-.3.1-.1 0-.1 0-.2.1-.1 0-.1.1-.3.1-.1 0-.1.1-.2.1s-.1.1-.2.1l-.5.4-.2.2c0 .1-.1.1-.1.1l-.1.2s-.1.1-.1.2v.1l-2.4 9.7-.7 2.9-.1.4h-8.9c-9.7 0-17.6 7.9-17.6 17.6V18.2c0 9.7 8 17.6 17.6 17.6h143.2c9.7 0 17.6-7.9 17.6-17.6V-1.2h2.7c4.6 0 8.4-3.8 8.4-8.4V-54c.1-4.6-3.6-8.4-8.3-8.4zM627.7-130l.1-.3-.8-.6.8.6.1-.1-.6-.8.7.8.1-.1-.3-1 .4.9-.1-1 .2 1v-1l.2 1 51.9 14.8 51.5 14.7 21.2.1c.5 0 .9.4.9.8 0 .5-.4.9-.9.9H613.7c-.5 0-.8-.4-.8-.9s.4-.8.8-.8h6.7l3.7-14.8 3.6-14.2zm-14 14.1h8.4l-3.2 12.8h-5.2a2.8 2.8 0 0 0-2.8 2.8c0 1.6 1.3 2.9 2.8 2.9h139.5c1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.8-2.9-2.8h-20.7l-44.8-12.8h69.2c8.6 0 15.6 7 15.6 15.6V-80l-3.6-3.6c-3.3-3.1-7.5-4.8-12.1-4.8h-145c-6.9 0-13.8-3.7-13.8-11.9v-.1c.1-8.5 7.1-15.5 15.7-15.5zM783.6-9.6c0 3.5-2.9 6.4-6.4 6.4h-44.9l-15.4-23 15.4-23h44.9a4.7 4.7 0 1 0 0-9.4h-4.7v7.4h-41.2l-16.7 25 16.7 25h41.2v19.4c0 8.6-7 15.6-15.6 15.6H613.7c-8.6 0-15.6-7-15.6-15.6V-92.9c2.8 4.5 8.3 6.6 13.8 6.6H757c4 0 7.8 1.5 10.6 4.2l5 5v16.7h4.7c3.5 0 6.4 2.9 6.4 6.4v44.4zm-9.1-41.7v-5.4h2.7c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7h-2.7z\"></path><path d=\"M743.8-33.8a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2zm0 13.1a5.6 5.6 0 1 1 0-11.2 5.6 5.6 0 1 1 0 11.2z\"></path><path d=\"M743.8-38.2c-6.6 0-11.9 5.4-11.9 11.9 0 6.6 5.4 11.9 11.9 11.9s11.9-5.4 11.9-11.9-5.3-11.9-11.9-11.9zm0 21.9c-5.5 0-9.9-4.5-9.9-9.9s4.5-9.9 9.9-9.9 9.9 4.5 9.9 9.9-4.4 9.9-9.9 9.9z\"></path></svg>\n                        </span>\n                        <h4 class=\"step-header\"> Data Search</h4>\n                        <p class=\"step-label\"> STEP2</p>\n                        <p class=\"step-description\">We unlock all doors</p>\n                    </li> \n                    <li class=\"step-item\">\n                        <span class=\"as-icon\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"576.1 -152.7 229.6 208.5\"><path d=\"M777.2-62.4h-2.7v-37.8c0-9.7-7.9-17.6-17.6-17.6h-76.2l-51.4-14.7-.5-.1h-.9c-.1 0-.1 0-.3.1-.1 0-.1 0-.2.1-.1 0-.1.1-.3.1-.1 0-.1.1-.2.1s-.1.1-.2.1l-.5.4-.2.2c0 .1-.1.1-.1.1l-.1.2s-.1.1-.1.2v.1l-2.4 9.7-.7 2.9-.1.4h-8.9c-9.7 0-17.6 7.9-17.6 17.6V18.2c0 9.7 8 17.6 17.6 17.6h143.2c9.7 0 17.6-7.9 17.6-17.6V-1.2h2.7c4.6 0 8.4-3.8 8.4-8.4V-54c.1-4.6-3.6-8.4-8.3-8.4zM627.7-130l.1-.3-.8-.6.8.6.1-.1-.6-.8.7.8.1-.1-.3-1 .4.9-.1-1 .2 1v-1l.2 1 51.9 14.8 51.5 14.7 21.2.1c.5 0 .9.4.9.8 0 .5-.4.9-.9.9H613.7c-.5 0-.8-.4-.8-.9s.4-.8.8-.8h6.7l3.7-14.8 3.6-14.2zm-14 14.1h8.4l-3.2 12.8h-5.2a2.8 2.8 0 0 0-2.8 2.8c0 1.6 1.3 2.9 2.8 2.9h139.5c1.6 0 2.9-1.3 2.9-2.9 0-1.6-1.3-2.8-2.9-2.8h-20.7l-44.8-12.8h69.2c8.6 0 15.6 7 15.6 15.6V-80l-3.6-3.6c-3.3-3.1-7.5-4.8-12.1-4.8h-145c-6.9 0-13.8-3.7-13.8-11.9v-.1c.1-8.5 7.1-15.5 15.7-15.5zM783.6-9.6c0 3.5-2.9 6.4-6.4 6.4h-44.9l-15.4-23 15.4-23h44.9a4.7 4.7 0 1 0 0-9.4h-4.7v7.4h-41.2l-16.7 25 16.7 25h41.2v19.4c0 8.6-7 15.6-15.6 15.6H613.7c-8.6 0-15.6-7-15.6-15.6V-92.9c2.8 4.5 8.3 6.6 13.8 6.6H757c4 0 7.8 1.5 10.6 4.2l5 5v16.7h4.7c3.5 0 6.4 2.9 6.4 6.4v44.4zm-9.1-41.7v-5.4h2.7c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7h-2.7z\"></path><path d=\"M743.8-33.8a7.6 7.6 0 1 0 0 15.2 7.6 7.6 0 0 0 0-15.2zm0 13.1a5.6 5.6 0 1 1 0-11.2 5.6 5.6 0 1 1 0 11.2z\"></path><path d=\"M743.8-38.2c-6.6 0-11.9 5.4-11.9 11.9 0 6.6 5.4 11.9 11.9 11.9s11.9-5.4 11.9-11.9-5.3-11.9-11.9-11.9zm0 21.9c-5.5 0-9.9-4.5-9.9-9.9s4.5-9.9 9.9-9.9 9.9 4.5 9.9 9.9-4.4 9.9-9.9 9.9z\"></path></svg>\n                        </span>\n                        <h4 class=\"step-header\"> DOT PAY</h4>\n                        <p class=\"step-label\"> STEP3</p>\n                        <p class=\"step-description\">The most convenient payment methods for you</p>\n                    </li> \n                    <li class=\"step-item\">\n                        <span class=\"as-icon\" style=\"background-color: #f96332;\">\n                            <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 235 235\"><path d=\"M92.2 230.8c-3.6 0-6.7-2.4-7.7-5.9L37.6 47c-1.1-4.2 1.4-8.6 5.6-9.7 4.2-1.1 8.6 1.4 9.7 5.6l46.9 177.9c.5 2 .3 4.2-.8 6-1.1 1.8-2.8 3.1-4.8 3.7-.7.2-1.3.3-2 .3zM45.3 39.1c-.5 0-1 .1-1.5.2-3.2.8-5 4.1-4.2 7.2l46.9 177.9c.7 2.6 3 4.4 5.7 4.4h.1c.5 0 1-.1 1.5-.2 1.5-.4 2.8-1.4 3.6-2.7s1-3 .6-4.5L51 43.5c-.7-2.6-3.1-4.4-5.7-4.4z\"></path><path d=\"M86.2 134c-1.4 0-2.9-.1-4.3-.2-4.7-.6-7.8-3-8.9-7l1.9-.5c.9 3.2 3.3 5.1 7.1 5.6 20.4 1.5 37.7-8.2 54.4-17.5 17-9.5 34.6-19.3 55.6-17.7 1.5.2 2.6-.1 3.2-.8.6-.7.5-1.6.3-2.2L173.4 12c-.7-2.7-1.9-5.4-6.6-5.7-20.4-1.5-37.7 8.2-54.5 17.5-17 9.5-34.6 19.3-55.6 17.7-1.5-.2-2.7.1-3.2.8-.6.7-.5 1.6-.3 2.2l-1.9.5c-.4-1.6-.2-3 .7-4 1-1.2 2.8-1.7 4.9-1.5C77.3 41 94.6 31.3 111.3 22c17-9.5 34.6-19.3 55.6-17.7 5.7.3 7.4 3.8 8.4 7.2l22.1 81.6c.4 1.6.2 3-.7 4-1 1.2-2.8 1.7-4.9 1.5-20.4-1.5-37.7 8.2-54.4 17.5-15.8 8.8-32.1 17.9-51.2 17.9zm23.7-15.7l-6.2-22.9c-8.8 3.4-16.8 5-25.1 5.3h-.8l-7.5-27.6h1.3c8.3-.2 15.9-1.8 24.6-5.2l-6.1-22.5.8-.3c8.5-3.8 16.5-8.4 23.9-12.7l1.1-.7 6.1 22.5c7.9-4.6 14.9-8.4 22.2-11.6L138.1 20l.9-.3c8.8-3.3 16.5-4.9 24.9-5.2h.8l6.6 24.5H170c-7.9.3-15.2 1.7-23.4 4.7l6.4 23.6c8.4-3 15.8-4.5 23.8-4.8h.8l6.7 24.8H183c-8.1.3-15.6 1.8-24.1 5l-1 .4-6.2-22.8c-7.9 3.5-15.5 7.7-22.5 11.8l6.2 22.8-.7.4c-7 4.1-15.3 8.8-23.9 12.7l-.9.7zm-4.3-23.6l5.7 20.9c7.9-3.6 15.4-7.9 22-11.7L127.6 83c-6.6 3.8-14.1 8.1-22 11.7zM73 75.1l6.4 23.6c8-.3 15.4-1.9 23.8-5.2l-6.4-23.6c-8.3 3.2-15.9 4.8-23.8 5.2zm25.7-6l6.4 23.6c8-3.6 15.6-8 22.2-11.8l-6.4-23.6c-6.9 4-14.3 8.2-22.2 11.8zm55.1.2l5.7 20.9c7.9-2.8 14.9-4.3 22.4-4.7l-5.7-20.9c-7.5.4-14.5 1.9-22.4 4.7zm-31.1-13l6.4 23.6c7-4 14.4-8.2 22.2-11.6l-6.4-23.6c-7.4 3.1-14.3 6.9-22.2 11.6zm-30.1-9.7l5.6 20.6c7.9-3.6 15.3-7.8 22.2-11.8l-5.6-20.5c-6.9 3.9-14.3 8.1-22.2 11.7zm48-25.3l5.6 20.6c7.9-2.9 15-4.4 22.6-4.7l-5.6-20.5c-7.6.3-14.6 1.7-22.6 4.6z\"></path></svg>\n                        </span>\n                        <h4 class=\"step-header\"> GET REPORT</h4>\n                        <p class=\"step-label\"> STEP4</p>\n                        <p class=\"step-description\">Get full car history and reduce anxiety about the deal</p>\n                    </li>                    \n                </ol>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"section section-blog\">\n        <div class=\"container\">\n            <div class=\"col text-center mb-4\">\n                <h4 class=\"text-center\" style=\"font-weight: 800;\"> Blog </h4>\n                <p class=\"description text-center\">Read our latest news and detailed analysis</p>\n            </div>\n            <div class=\"row justify-content-start\">\n                <div class=\"col-sm-8\">\n                    <div class=\"card absolute \">\n                        <img class=\"card-img-top\" src=\"https://images.prismic.io/carvertical-reports/51941192-3ede-44e0-ae3a-30bffa599ea5_cv-blog-post-04-06-2.png?auto=compress,format\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> carVertical co-founders Rokas Medonis & Audrius Kučinskas: To our greatest</h5>\n                            <p class=\"card-text\"> When the carVertical idea was born in the summer of 2017, we had only a great vision and a strong will to change the automotive world. Now, after almost 3</p>\n                            <a href=\"https://www.carvertical.com/blog/carvertical-co-founders-letter-to-token-holders-early-2020\"> \n                                Read more                              \n                            </a>\n                        </div>\n                    </div>\n                    \n                </div>\n                \n                <div class=\"col-sm-4\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"https://images.prismic.io/carvertical-reports/ffa328f8-0e5a-48e8-b855-3f3e654eaa7e_Tituline%CC%87_Katafalkai.jpg?auto=compress,format\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> 9 hearses that are to die for</h5>\n                            <p class=\"card-text\"> You only get one free ride to the graveyard. Why not have a good time doing it? Check out these hearses that will make a dead man’s</p>\n                            <a href=\"https://www.carvertical.com/blog/9-hearses-that-are-to-die-for\"> \n                                Read more                              \n                            </a>\n                        </div>\n                    </div>                    \n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"https://images.prismic.io/carvertical-reports/adfa6d28-efe3-41b2-a2a0-4243b1123c9a_for+sale.jpg?auto=compress,format\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> 7 ways to seel your car in the blink of an eye</h5>\n                            <p class=\"card-text\">Sooner or later, the coronavirus comes for all - rich and poor, young and old. When it does, you won’t need your car anymore. Sell it so you</p>\n                            <a href=\"https://www.carvertical.com/blog/7-ways-sell-car-in-the-blink-of-eye\">  Read more   </a> \n                        </div>\n                        \n                    </div>\n                    \n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"https://images.prismic.io/carvertical-reports/2d524055-f31f-470e-bc37-bf585d9ab154_header+photo.png?auto=compress,format\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> carVertical Vehicle History Report 2.0 Launched: What Are the Key</h5>\n                            <p class=\"card-text\"> The New Year occurred a few months ago, but the new era for carVertical started just recently. We finally finished a tremendous job and</p>\n                            <a href=\"https://www.carvertical.com/blog/carvertical-vehicle-history-reports-2.0-launched-key-user-benefits\">  Read more   </a> \n                        </div>\n                    </div>\n                    \n                </div>\n                <div class=\"col-sm-4\">\n                    <div class=\"card\">\n                        <img class=\"card-img-top\" src=\"https://images.prismic.io/carvertical-reports/6eaa4d20-de31-4909-8b21-6ae70078514b_Blog+post+1.jpg?auto=compress,format\" alt=\"Card image cap\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\"> 9 tips for having sex in a car</h5>\n                            <p class=\"card-text\">There are only a few reasons why any self-respecting adult should be having sex in a car: uncontrollable passion; the marriage needs 23423423423423423 23423423423424 trollable passion; the marriage needs 23423423423423423 Helo World</p>\n                            <a href=\"https://www.carvertical.com/blog/9-tips-for-having-sex-in-a-car\">  Read more   </a> \n                        </div>\n                    </div>                    \n                </div>\n                <ng-container *ngFor=\"let blog of blogs; let index=index\">\n                    <div class=\"col-sm-4\">\n                        <div class=\"card\">\n                            <img class=\"card-img-top\" src=\"{{blog.mainImg}}\">\n                            <div class=\"card-body\">\n                                <h5 class=\"card-title\"> {{blog.title}} </h5>\n                                <p class=\"card-text\" >\n                                    {{stripHtml(blog.content)}}\n                                </p>\n                                <a [routerLink]=\"['/blog', blog.id]\"> Read more </a>\n                            </div>\n                        </div>                        \n                    </div>\n                </ng-container>\n            </div>\n            <div class=\"row justify-content-center\" *ngIf=\"is_next_available\">                \n                <button type=\"button\" class=\"btn btn-primary btn-round\" (click)=\"loadMore()\"><i class=\"fa fa-plus\"></i> Load More</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"section section-last\" style=\"background-color: #f9f9f9;\">\n        <div class=\"container justify-content-center\">\n            <div class=\"row\">\n                <div class=\"col-md-8 text-center mb-4\">\n                    <h4 class=\"text-center\" style=\"font-weight: 800;\"> Save thousands of PLN </h4>\n                    <p class=\"description text-center\"> Learn everything is to know about your next car</p>\n                    <div class=\"col-lg-6 ml-auto mr-auto \">\n                        <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\" >\n                       \n                            <input type=\"text\" [(ngModel)]=\"vin_number\" (ngModelChange)=\"onchange()\" class=\"form-control\" placeholder=\"Enter VIN Number\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\n                            <div class=\"input-group-append\">\n                                <span class=\"input-group-text\" style=\"padding: 0 10px;background-color: #f9f9f9;\">\n                                  <button class=\"btn btn-primary btn-round\" type=\"button\" (click)=\"search()\" >\n                                      <i class=\"now-ui-icons ui-1_zoom-bold\"></i> search\n                                  </button>\n                                  <small *ngIf=\"!is_validvin && vin_number!=''\" class=\"text-danger\" style=\"z-index: 10; position: absolute; left: 20px;top: 10px;\">\n                                    Invalid VIN\n                                  </small>\n    \n                                </span>\n                              </div>\n                          </div>\n                    </div>               \n                </div>\n                <div class=\"col-md-3\" style=\"position: relative;\">\n                    <div style=\"width: 330px; position: relative;\">\n                        <div style=\"z-index: 1; height: 100%; position: relative;\">\n                            <div style=\"height: 100%; min-height: 220px;\">\n                            </div>\n                            <div class=\"car1\" [style.width] =\"car1_width\" >\n                                <div class=\"car-img\" ></div>\n                            </div>\n                            <div class=\"car2\"  [style.width] =\"car2_width\">\n                                <div class=\"car-img\" ></div>\n                            </div>\n                        </div>\n                        <div  #ellipse (mouseleave)=\"onmouseleave($event)\" (mousemove)=\"onmousemove($event)\" (mouseup)= \"onmouseup($event)\" style=\"position: absolute;bottom: 3.3%;left: -3%; right: -3%;\">\n                            <svg  viewBox=\"0 0 696 213\">\n                                <defs>\n                                    <linearGradient x1=\"0\" y1=\"0\" x2=\"0\" y2=\"100%\" id=\"SliderTrackFadeGradient\"><stop offset=\"0\" stop-color=\"white\" stop-opacity=\"0\"></stop><stop offset=\"50%\" stop-color=\"white\" stop-opacity=\"0.3\"></stop><stop offset=\"60%\" stop-color=\"white\" stop-opacity=\"0.4\"></stop><stop offset=\"90%\" stop-color=\"white\" stop-opacity=\"1\"></stop></linearGradient><mask id=\"SliderTrackMask\"><ellipse cx=\"50%\" cy=\"50%\" rx=\"329\" ry=\"87.5\" stroke=\"url(#SliderTrackFadeGradient)\" stroke-width=\"1\" fill=\"url(#SliderTrackFadeGradient)\" shape-rendering=\"geometricPrecision\" vector-effect=\"non-scaling-stroke\"></ellipse><circle cx=\"19\" cy=\"106.5\" r=\"4\" stroke=\"black\" stroke-width=\"1\" fill=\"black\"></circle><circle cx=\"348\" cy=\"194\" r=\"4\" stroke=\"black\" stroke-width=\"1\" fill=\"black\"></circle><circle cx=\"677\" cy=\"106.5\" r=\"4\" stroke=\"black\" stroke-width=\"1\" fill=\"black\"></circle><circle></circle></mask>\n                                </defs>\n                                <ellipse class=\"stroke-primary\"  cx=\"50%\" cy=\"50%\" rx=\"329\" ry=\"87.5\" stroke=\"white\" stroke-width=\"1\" fill=\"none\" shape-rendering=\"geometricPrecision\" vector-effect=\"non-scaling-stroke\" mask=\"url(#SliderTrackMask)\"></ellipse>\n                                <circle class=\"stroke-primary\"  cx=\"19\" cy=\"106.5\" r=\"4\"  stroke-width=\"1\" fill=\"none\"></circle>\n                                <circle class=\"stroke-primary\" cx=\"348\" cy=\"194\" r=\"4\"  stroke-width=\"1\" fill=\"none\"></circle>\n                                <circle class=\"stroke-primary\" cx=\"677\" cy=\"106.5\" r=\"4\"  stroke-width=\"1\" fill=\"none\"></circle>\n                            </svg>\n                      \n                            <div style=\"position: absolute; top:0; left: 0; bottom: 0; right: 0; z-index: 2;\">\n                                <svg viewBox=\"0 0 696 213\" class=\"CarWithSlider-handle__ggLHR\">\n                                    <circle #circle1 (mousedown)= \"onmousedown($event)\"  class=\"slider-circle SliderHandle-circle__3mteJ\" cx=\"677\" cy=\"106.5\" r=\"50\" fill=\"transparent\" shape-rendering=\"geometricPrecision\" vector-effect=\"non-scaling-stroke\" cursor=\"pointer\" ></circle>\n                                    <circle  #circle2 class=\"stroke-primary fill-primary SliderHandle-circleReal__2e8Ls\" cx=\"677\" cy=\"106.5\" r=\"18\" stroke-width=\"2\" stroke=\"white\" fill=\"white\" shape-rendering=\"geometricPrecision\" vector-effect=\"non-scaling-stroke\" pointer-events=\"none\"></circle>\n                                    <polyline #line1 stroke-width=\"2\" stroke=\"white\" fill=\"none\" points=\"674,100.5 668,106.5 674,112.5\" pointer-events=\"none\"></polyline>\n                                    <polyline #line2 stroke-width=\"2\" stroke=\"white\" fill=\"none\" points=\"680,100.5 686,106.5 680,112.5\" pointer-events=\"none\"></polyline></svg>\n                            </div>\n                        </div>\n                    \n                </div>\n                \n            </div>\n            </div>\n            \n    </div>\n    <div class=\"row section-anim\" style=\"display: none; justify-content: center; position: relative;\">\n            <blockquote style=\"width: 600px; color: black;\"class=\"blockquote blockquote-white\">\n                    <i class=\"now-ui-icons ui-1_zoom-bold 3x\"></i> Searched VIN: <b style=\"color: chartreuse;\">WBAFS875674NO7543</b>\n                    <br>\n                    <i class=\"now-ui-icons ui-1_zoom-bold\"></i> Car founded: <b style=\"color: red;\">NO</b>\n                    <br>\n                    <i class=\"now-ui-icons shopping_delivery-fast\"></i> Car make: <b style=\"color: red;\">No information</b>\n                    <br>\n                    <i class=\"now-ui-icons shopping_delivery-fast\"></i> Model: <b style=\"color: red;\">No information</b>\n                    <br>\n                    <i class=\"now-ui-icons shopping_bag-16\"></i> Engine: <b style=\"color: red;\">No information</b>\n                    <br>\n                    <i class=\"now-ui-icons ui-1_email-85\"></i> Number of photos: <b style=\"color: red;\">No information</b>\n                    <br>\n            </blockquote>\n            <div sliderhandle>\n                Test\n            </div>\n     </div>\n            \n    </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-page/pay-page.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pay-page/pay-page.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"wrapper\" style=\"margin-top: 150px;\" >\n    <div class=\"section section-result arrow-down\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4 style=\"font-weight: 800;\">\n                        <span class=\"text-success\">Success!</span> You are almost there ... !\n                    </h4>       \n                    <div class=\"car-logo-img\">\n                        <!-- <img src =\"http://pngimg.com//uploads/bmw_logo/bmw_logo_PNG19707.png\"  />                         -->\n                        <img [src]=\"getLogoUrl()\" />\n                    </div>\n                    <div style=\"display: inline-block; vertical-align: text-bottom;\" class=\"pl-2\">\n                        <h6 style=\"font-size: 0.93em;\" >\n                            {{carInfo.carmake}} {{carInfo.carmodel}}\n                            <!-- BMW Series3 -->\n                             <br>\n                            <small style=\"font-size: 80%; font-weight:700\">({{carInfo.vin}})</small>\n                        </h6>                        \n                    </div> \n                </div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"mainService.ResolveMediaUrl('/assets/img/image2.png')\" />\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div class=\"section\">\n        <div class=\"container\">\n            <h4 style=\"font-weight: 800;\">\n                Last 3 Steps ...\n            </h4>\n            <div class=\"row justify-content-between\">\n                <div class=\"col-md-6\">\n                    \n                    <div class=\"step-1 step-item\">\n                        <button class=\"btn btn-success btn-round round-text\" type=\"button\" style=\"display: inline-block;\"> 1 </button>\n                        <h5 class=\"item-title\" style=\"display: inline-block; font-weight: 800; vertical-align: middle; margin-bottom: 0;\">Delivery Address</h5>\n                        <div class=\"item-content\">\n                            <h6 > Provide  your E-mail address*</h6>                \n                            <div class=\"form-group\" style=\"max-width: 300px;\">\n                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\" >\n                                      <span class=\"input-group-text\">\n                                          <i class=\"fa fa-user-circle\"></i>\n                                      </span>\n                                    </div>\n                                      <input type=\"text\" [(ngModel)]=\"email_addr\"  (ngModelChange)=\"onEmailChange()\" class=\"form-control\" placeholder=\"E-mail\" (focus)=\"focus=true\" (blur)=\"focus=false\">\n                                  </div>\n                            </div>\n                            \n                            <h6 class=\"text-danger\" *ngIf=\"((!is_valid_email) && email_addr)\">\n                                * Invalid E-mail\n                            </h6>\n                            <h6 class=\"text-muted\">\n                                * We need your e-mail address to deliver report for you.\n                            </h6>\n                        </div>    \n                    </div>\n                    <div class=\"step-2 step-item\">\n                        <button class=\"btn btn-success btn-round round-text\" type=\"button\" style=\"display: inline-block;\"> 2 </button>\n                        <h5 style=\"display: inline-block; font-weight: 800; vertical-align: middle; margin-bottom: 0;\" class=\"item-title\">Order Summary of VIN Report</h5>\n                        <div class=\"item-content\">\n                            <h6 > {{carInfo.carmake}} {{carInfo.carmodel}} | {{ carInfo.caryear }} | <span class=\"text-info\"> VIN: </span> {{carInfo.vin}} </h6>                \n                            <div style=\"margin: 10px; border-style: solid; border-color: grey; border-radius: 10px; \">\n                                <img class=\"blur-img\"  [src]=\"carInfo.carphoto_src\">   \n                            </div>  \n                            <h6 class=\"text-muted\">\n                                Number of Photos: {{ carInfo.carphotos }}\n                            </h6>\n                        </div>\n                    </div>\n                    <div class=\"step-3 step-item no-before\">\n                        <button class=\"btn btn-success btn-round round-text\" type=\"button\" style=\"display: inline-block;\"> 3 </button>\n                        <button class=\"btn btn-success btn-round item-title\" style=\"height: 25px; padding: 0px 23px;\" (click)=\"dotPay()\" (blur)=\"pay_btn_focus=false\" (focus)=\"pay_btn_focus=true\" >Paynow</button>\n                        <h6 class=\"text-danger item-content\" [ngClass]=\"{'opacity-0':!(!this.email_addr)}\"> *Email is required</h6>\n                    </div>\n                </div>\n                <div class=\"col-md-auto mt-3\">\n                    <div style=\"width: 300px;padding: 10px; border-radius: 15px; box-shadow: 1px 1px 5px grey;\">\n                        <h5 style=\"font-weight: 800; padding-bottom: 10px; border-bottom: 0.5px solid grey;\"> Order Details</h5>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <div>Price</div>\n                            <div style=\"font-weight: 800;\">10 PLN</div>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-between pb-4\">\n                            <div>Delivery charges</div>\n                            <div class=\"text-success\" style=\"font-weight: 800;\">0 PLN</div>\n                        </div>\n                        <div class=\"d-flex align-items-center justify-content-between\">\n                            <div style=\"font-weight: 800;\">Total Amount</div>\n                            <div class=\"text-success\" style=\"font-weight: 800;\">10 PLN</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-page/post-page.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/post-page/post-page.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\" style=\"margin-top: 150px;\">\n    <div class=\"section section-editor\">\n        <div class=\"container\">\n            <form [formGroup]=\"postForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('title')}\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Enter Title\" formControlName=\"title\" id=\"post-title\">\n                  <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('title')\">\n                        <h6  *ngIf=\"postForm.get('title').errors.required\">\n                        Name is required.\n                        </h6 >\n                  </div>\n                  \n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('mainImg')}\">\n                    <div class=\"custom-file fileInputProfileWrap form-control\" >\n                        <button class=\"btn btn-default btn-icon btn-round btn-sm btn-remove\" type=\"button\" (click)=\"removeImage()\" *ngIf=\"isImageSaved\">\n                            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\n                        </button>\n                        \n                        <input type=\"file\" (change)=\"fileChangeEvent($event)\" class=\"fileInputProfile\" accept=\"image/*\">\n                        <div class=\"img-space\">\n    \n                            <ng-container *ngIf=\"isImageSaved; else elseTemplate\">\n                                <img [src]=\"cardImageBase64\" />\n                            </ng-container>\n                            <ng-template #elseTemplate>\n                                <p class=\"mb-0 text-center\">Click to Upload Image.</p>\n                            </ng-template>\n    \n                        </div>\n                        <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('mainImg')\">\n                            <h6  *ngIf=\"postForm.get('mainImg').errors.required\">\n                            Image is required.\n                            </h6 >\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group\" [ngClass]=\"{'invalid': isInvalid('content')}\">\n                    <angular-editor [placeholder]=\"'Enter text here...'\" [config]=\"config\" formControlName=\"content\" ></angular-editor>\n                    <div  class=\"invalid-feedback\" *ngIf=\"isInvalid('content')\">\n                        <h6 >\n                        Content is required.\n                        </h6 >\n                    </div>\n                </div>\n                \n                <button type=\"submit\" class=\"btn\" > submit </button>\n              </form>\n              \n\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-page/search-page.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/search-page/search-page.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"isLoading\" class=\"loading-spin\">\n    <svg class=\"spinner\" viewBox=\"0 0 50 50\" >\n        <circle class=\"path\" cx=\"25\" cy=\"25\" r=\"20\" fill=\"none\" stroke-width=\"5\"></circle>\n    </svg>\n    <h5 style=\"position: absolute; left: 50%; top: 50%; margin:30px 0px 0px -50px; color: aliceblue;\"> Searching</h5>\n</div>\n<div class=\"wrapper\" style=\"margin-top: 150px;\" *ngIf=\"!isLoading\">\n    \n    <div  class=\"section section-search\" >\n        <div class=\"container\">\n            <div class=\"row col\">\n                <h4 class=\"mr-auto ml-auto text-center\" style=\"font-weight: 800;\">\n                    Check the Vehicle History!\n                </h4>\n            </div>\n            <!-- Search Box -->\n            <div class=\"row justify-content-center\" >\n                <div class=\"col-sm-10\">\n                    <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\" >\n                        <input [(ngModel)]=\"vin_number\" (ngModelChange)=\"onchange()\" (focus)=\"focus=true\" (blur)=\"focus=false\" type=\"text\" class=\"form-control h3\" placeholder=\"Search\" >\n                        <div class=\"input-group-append\">\n                          <span class=\"input-group-text\">\n                            <button class=\"btn btn-primary btn-round\" type=\"button\" (click)=\"search()\">\n                                <i class=\"now-ui-icons ui-1_zoom-bold\"></i> Search\n                            </button>\n                            <small *ngIf=\"!is_validvin && vin_number!=''\" class=\"text-danger\" style=\"z-index: 10; position: absolute; left: 20px;top: 10px;\">\n                                Invalid VIN\n                              </small>\n                          </span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n \n            <div class=\"row col\">\n                <h6 *ngIf=\"carInfo.id != -1\" class=\"mr-auto ml-auto text-center\" style=\"font-weight: 800; color: #f96332;\">\n                    Your Car Has Been Founded In Our Database.\n                </h6>\n                <h6 *ngIf=\"carInfo.id == -1\" class=\"mr-auto ml-auto text-center\" style=\"font-weight: 800; color: #f96332;\">\n                    Your Car Has Been <span class=\"text-muted\" style=\"font-weight: 800;\" >Not</span> Founded In Our Database.\n                </h6>\n            </div>\n        </div>        \n    </div>\n    <div *ngIf=\"carInfo.id != -1\" class=\"section section-result arrow-down\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4 style=\"font-weight: 800;\">\n                        <span class=\"text-success\">Success!</span> We found records for his vehicle:\n                    </h4>       \n                    <div class=\"car-logo-img\">\n                        <!-- <img src =\"http://pngimg.com//uploads/bmw_logo/bmw_logo_PNG19707.png\"  />                         -->\n                        <img [src]=\"getLogoUrl()\" />\n                    </div>\n                    <div style=\"display: inline-block; vertical-align: text-bottom;\" class=\"pl-2\">\n                        <h6 style=\"font-size: 0.93em;\" >\n                            {{carInfo.carmake}} {{carInfo.carmodel}}\n                            <!-- BMW Series3 -->\n                             <br>\n                            <small style=\"font-size: 80%; font-weight:700\">({{carInfo.vin}})</small>\n                        </h6>                        \n                    </div> \n                </div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"mainService.ResolveMediaUrl('/assets/img/image2.png')\" />\n                    <a href=\"{{ mainService.GetSamplePdfUrl() }}\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-simple btn-round\">\n                        <i class=\"now-ui-icons files_paper\"></i> View Simple Report \n                    </a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"carInfo.id == -1\" class=\"section section-result arrow-down\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <h4 style=\"font-weight: 800;\">\n                        <span class=\"text-danger\">Failed!</span> We did not found records for his vehicle:\n                    </h4>        \n                    <div class=\"car-logo-img\" style=\"display: inline-block;\">\n                        <img src =\"http://pngimg.com//uploads/bmw_logo/bmw_logo_PNG19707.png\"  />\n                    </div>\n                    <div style=\"display: inline-block; vertical-align: middle;\" class=\"pl-2\">\n                        <h6 style=\"font-size: 0.93em;\" >\n                            BMW Series3 <br>\n                            <small style=\"font-size: 80%; font-weight:700\">(WBAFA71030LN07422)</small>\n                        </h6>                        \n                    </div> \n                </div>\n                <div class=\"col-md-6\">\n                    <img [src]=\"mainService.ResolveMediaUrl('/assets/img/image2.png')\"/>\n                    <a href=\"{{ mainService.GetSamplePdfUrl() }}\" target=\"_blank\" type=\"button\" class=\"btn btn-primary btn-simple btn-round\">\n                        <i class=\"now-ui-icons files_paper\"></i> View Simple Report \n                    </a>\n                </div>\n\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"carInfo.id != -1\" class=\"section section-data text-center\">\n        <div class=\"container\">\n            <h4> Purchase the report now and find out detailed history of </h4>\n            <div class=\"row\">\n                <div class=\"col-lg-6\">\n                    <div style=\"position: relative; max-width: 450px; min-width: 345px; \">\n                        <img src=\"assets/img/founded_car.png\">\n                        <div class=\"car-info-item car-founded\">\n                            <h5 class=\"text-primary\" style=\"width: 112px; margin-bottom: 0;font-weight: 800;\" >FOUNDED CAR</h5>\n                            <h6 class=\"text-muted\" style=\"font-size: 0.7em;\"> {{carInfo.vin}} </h6>\n                        </div>\n                        <div class=\"car-info-item car-make\">\n                            <span>CAR MAKE</span>\n                            <h6> {{carInfo.carmake}}</h6>\n                        </div>\n                        <div class=\"car-info-item car-model\">\n                            <span>MODEL</span>\n                            <h6> {{carInfo.carmodel}} </h6>\n                        </div>\n                        <div class=\"car-info-item car-engine\">\n                            <span>ENGINE</span>\n                            <h6> {{carInfo.carengine}}</h6>\n                        </div>\n                        <div class=\"car-info-item car-year\">\n                            <span>YEAR</span>\n                            <h6> {{carInfo.caryear}} </h6>\n                        </div>\n                        <div class=\"car-info-item car-photos\">\n                            <span>Photos</span>\n                            <h6> {{carInfo.carphotos}} </h6>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <div class=\"row justify-content-center\">\n                        <!-- <h5>BMW SERIES 3 2012</h5> -->\n                        <h5>{{carInfo.carmake}} {{carInfo.carmodel}} {{carInfo.caryear}}</h5> \n                        <div style=\"margin: 10px; border-style: solid; \">\n                            <img class=\"blur-img\"  [src]=\"carInfo.carphoto_src\">   \n                        </div>                        \n                    </div>\n                </div>\n            </div>\n            <div class=\"row justify-content-end btn-row\">\n                <button class=\"btn-default btn dotpay-btn\" style=\"color: black; background-color: #f4f4f4;\" (click)=\"GoToPayPage()\" >\n                    <h5 style=\"font-weight:800;\"> Buy report for BMW</h5>\n                    <div style=\"padding: 10px; border-color:#a9a9a9; border-style:solid; border-radius:3px;\" class=\"container justify-content-center\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                \n                                <h5> <i class=\"now-ui-icons ui-1_check text-success\"></i> Buy 1 report in PDF </h5>\n                                <h4> 10 PLN </h4>\n                                <span class=\"text-muted\"> price per request</span>\n\n                                <h6 style=\"margin:0px; text-align: right;\" class=\"text-success\" >CLICK!</h6>\n                            </div>\n                        </div>\n                    </div>\n                </button>                \n            </div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <!-- Site footer -->\n  <footer class=\"site-footer\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <!-- <div class=\"col-sm-12 col-md-6\">\n          <h6>About</h6>\n          <p class=\"text-justify\">Scanfcode.com <i>CODE WANTS TO BE SIMPLE </i> is an initiative  to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL and Algorithm.</p>\n        </div> -->\n\n        <div class=\"col-xs-6 col-md-3\">\n          <!-- <h6>Categories</h6> -->\n          <ul class=\"footer-links\">\n            <li><a href=\"#\"> About US </a> </li>\n            <li><a href=\"#\"> News/ Blog </a> </li>\n            <li><a href=\"#\"> Contact </a> </li>\n          </ul>\n        </div>\n\n        <div class=\"col-xs-6 col-md-3\">\n          <!-- <h6>Quick Links</h6> -->\n          <ul class=\"footer-links\">\n            <li><a href=\"#\"> Report Vehicle theft </a> </li>\n            <li><a href=\"#\"> Report accident </a> </li>\n          </ul>\n        </div>\n        <div class=\"col-xs-6 col-md-3\">\n            <!-- <h6>Quick Links</h6> -->\n            <ul class=\"footer-links\">\n              <li><a href=\"#\"> What is it VIN </a> </li>\n              <li><a href=\"{{ mainService.GetSamplePdfUrl() }}\"> Example of Report </a> </li>\n              <li><a href=\"#\"> How to Order Report </a> </li>\n            </ul>\n          </div>\n      </div>\n      <hr>\n    </div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 col-sm-6 col-xs-12\">\n          <p class=\"copyright-text\">Copyright &copy; 2020 All Rights Reserved by \n       <a href=\"#\">Autoszafa</a>.\n          </p>\n        </div>\n\n        <div class=\"col-md-4 col-sm-6 col-xs-12\">\n          <ul class=\"social-icons\">\n            <li><a class=\"facebook\" href=\"https://www.facebook.com/Autoszafa/\" ><i class=\"fab fa-facebook\" style=\"color: #007aaa;\"></i></a></li>\n            <li><a class=\"twitter\" href=\"https://twitter.com/autoszafa\"><i class=\"fab fa-twitter\" style=\"color: #087deb;\"></i></a></li>\n            <li><a class=\"instagram\" href=\"#\"><i class=\"fab fa-instagram\" style=\"color: #087deb;\"></i></a></li>\n            <li><a class=\"youtube\" href=\"#\"><i class=\"fab fa-youtube\" style=\"color: #023055;\"></i></a></li>   \n          </ul>\n        </div>\n      </div>\n    </div>\n</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-white fixed-top\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate mr-4\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\" placement=\"bottom\" ngbTooltip=\"AUTOSZAFA.PL\">\n                <img src=\"assets/img/logo.png\" class='logo-img' style=\"width: 200px;\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar bar1\"></span>\n                <span class=\"navbar-toggler-bar bar2\"></span>\n                <span class=\"navbar-toggler-bar bar3\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">            \n            <ul class=\"navbar-nav mr-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" routerLink=\"home\" >\n                        <i class=\"fas fa-home\"></i>\n                        <p>&nbsp; Home</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\"  href=\"{{ mainService.GetSamplePdfUrl() }}\" target=\"_blank\">\n                        \n                        <p>Sample Report</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" target=\"_blank\">\n\n                        <p>Pricing</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" target=\"_blank\">\n                        <p>Help</p>\n                    </a>\n                </li>\n            </ul>\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\" target=\"_blank\">\n                        <i class=\"fas fa-map-marker-alt\"></i>\n                        <p>&nbsp; PL</p>\n                    </a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"mailto:info@autoszafa.pl\" target=\"_blank\">\n                        <i class=\"now-ui-icons ui-1_email-85\"></i>\n                        <p>info@autoszafa.pl</p>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");








var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location, mainService) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.mainService = mainService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]])
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./main.service */ "./src/app/main.service.ts");
/* harmony import */ var _pay_page_pay_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pay-page/pay-page.component */ "./src/app/pay-page/pay-page.component.ts");
/* harmony import */ var _get_report_page_get_report_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./get-report-page/get-report-page.component */ "./src/app/get-report-page/get-report-page.component.ts");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./post-page/post-page.component */ "./src/app/post-page/post-page.component.ts");
/* harmony import */ var _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @kolkov/angular-editor */ "./node_modules/@kolkov/angular-editor/__ivy_ngcc__/fesm5/kolkov-angular-editor.js");
/* harmony import */ var _edit_blog_page_edit_blog_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./edit-blog-page/edit-blog-page.component */ "./src/app/edit-blog-page/edit-blog-page.component.ts");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");

 // this is needed!





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_13__["SearchPageComponent"],
                _pay_page_pay_page_component__WEBPACK_IMPORTED_MODULE_16__["PayPageComponent"],
                _get_report_page_get_report_page_component__WEBPACK_IMPORTED_MODULE_17__["GetReportPageComponent"],
                _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_18__["PostPageComponent"],
                _edit_blog_page_edit_blog_page_component__WEBPACK_IMPORTED_MODULE_20__["EditBlogPageComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_21__["JwBootstrapSwitchNg2Module"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _kolkov_angular_editor__WEBPACK_IMPORTED_MODULE_19__["AngularEditorModule"]
            ],
            providers: [_main_service__WEBPACK_IMPORTED_MODULE_15__["MainService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _components_components_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./examples/login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search-page/search-page.component */ "./src/app/search-page/search-page.component.ts");
/* harmony import */ var _pay_page_pay_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pay-page/pay-page.component */ "./src/app/pay-page/pay-page.component.ts");
/* harmony import */ var _get_report_page_get_report_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./get-report-page/get-report-page.component */ "./src/app/get-report-page/get-report-page.component.ts");
/* harmony import */ var _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./post-page/post-page.component */ "./src/app/post-page/post-page.component.ts");
/* harmony import */ var _edit_blog_page_edit_blog_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./edit-blog-page/edit-blog-page.component */ "./src/app/edit-blog-page/edit-blog-page.component.ts");
















var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'index', component: _components_components_component__WEBPACK_IMPORTED_MODULE_5__["ComponentsComponent"] },
    { path: 'nucleoicons', component: _components_nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_9__["NucleoiconsComponent"] },
    { path: 'examples/landing', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'examples/login', component: _examples_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'examples/profile', component: _examples_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'search/:vin_number', component: _search_page_search_page_component__WEBPACK_IMPORTED_MODULE_11__["SearchPageComponent"] },
    { path: 'pay', component: _pay_page_pay_page_component__WEBPACK_IMPORTED_MODULE_12__["PayPageComponent"] },
    { path: 'get-report', component: _get_report_page_get_report_page_component__WEBPACK_IMPORTED_MODULE_13__["GetReportPageComponent"] },
    { path: 'post', component: _post_page_post_page_component__WEBPACK_IMPORTED_MODULE_14__["PostPageComponent"] },
    { path: 'blog/:id', component: _edit_blog_page_edit_blog_page_component__WEBPACK_IMPORTED_MODULE_15__["EditBlogPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes)
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicelements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9EOlxcRE9XTkxPQURcXEVtcGxveWVyc1xcTUljaGFlbCBQb3N0ZWtcXFZpbkFwcC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbnVjbGVvaWNvbnNcXG51Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL251Y2xlb2ljb25zL251Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFpRkksU0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVBLCtEQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7RUFZSSxjQUFBO0FDQUo7O0FER0E7RUFDSSxjQUFBO0FDQUo7O0FER0E7O0VBRUksZ0JBQUE7QUNBSjs7QURHQTs7RUFFSSxZQUFBO0FDQUo7O0FER0E7Ozs7RUFJSSxXQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7RUFDQSxpQkFBQTtBQ0FKOztBREtBOzs7Ozs7a0NBQUE7O0FBUUE7Ozs7a0NBQUE7O0FBTUE7OztFQUdJLHNCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ0pKOztBRE9BO0VBQ0ksY0FBQTtFQUNBLHFCQUFBO0FDSko7O0FET0E7Ozs7a0NBQUE7O0FBTUE7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0xKOztBRFFBO0VBQ0ksMEJBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxnQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFHQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUNJLG1CQUFBO0FDTEo7O0FEUUE7OztFQUdJLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0xKOztBRFFBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURFQTs7RUFFSSxtQkFBQTtFQUNBLGNBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxZQUFBO0FDTEo7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0xKOztBRFFBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFQ0xOO0FBQ0Y7O0FEUUE7RUFDSTtJQUNJLFlBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtFQ05OO0FBQ0Y7O0FEU0E7Ozs7a0NBQUE7O0FBTUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdJQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwwQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFLQSxtQkFBQTtFQUtBLDJCQUFBO0VBR0EsOENBQUE7QUNSSjs7QURXQTtFQUNJLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxzQkFBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7RUFLQSxtQkFBQTtFQUdBLDRDQUFBO0FDUko7O0FEV0E7RUFDSSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUNSSjs7QURXQTtFQUNJLGNBQUE7QUNSSjs7QURXQTtFQUNJLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQ1JKOztBRFdBO0VBQ0kscURBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBR0EsMkJBQUE7QUNSSjs7QURXQTs7RUFFSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBS0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBR0EseUNBQUE7QUNSSjs7QURXQTtFQUNJLFNBQUE7RUFLQSxvQkFBQTtBQ1JKOztBRFdBO0VBQ0ksWUFBQTtFQUtBLG9CQUFBO0FDUko7O0FEV0E7RUFDSSxnQkFBQTtBQ1JKOztBRFdBO0VBQ0ksaUNBQUE7QUNSSjs7QURXQTs7RUFFSSxtQkFBQTtBQ1JKOztBRFdBO0VBQ0ksTUFBQTtFQUtBLHlCQUFBO0FDUko7O0FEV0E7RUFDSSxTQUFBO0VBS0EseUJBQUE7QUNSSjs7QURXQTtFQUNJLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGtDQUFBO0FDUkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL251Y2xlb2ljb25zL251Y2xlb2ljb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5cbmFydGljbGUsXG5hc2lkZSxcbmRldGFpbHMsXG5maWdjYXB0aW9uLFxuZmlndXJlLFxuZm9vdGVyLFxuaGVhZGVyLFxuaGdyb3VwLFxubWVudSxcbm5hdixcbnNlY3Rpb24sXG5tYWluIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5cbmJsb2NrcXVvdGU6YmVmb3JlLFxuYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLFxucTphZnRlciB7XG4gICAgY29udGVudDogJyc7XG4gICAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgYm9yZGVyLXNwYWNpbmc6IDA7XG59XG5cblxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXG5MaWNlbnNlIC0gbnVjbGVvYXBwLmNvbS9saWNlbnNlL1xuQ3JlYXRlZCB1c2luZyBJY29Nb29uIC0gaWNvbW9vbi5pb1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5QcmltYXJ5IHN0eWxlXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiA2Mi41JTtcbn1cblxuLm51Y2xlby1pY29ucy1zdHlsZSB7XG4gICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gICAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gICAgY29sb3I6ICM3NjZhY2Y7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5NYWluIGNvbXBvbmVudHNcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuaGVhZGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xufVxuXG5oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gICAgZm9udC1zaXplOiAuOXJlbTtcbiAgICBtYXJnaW4tdG9wOiAuNmVtO1xufVxuXG5oZWFkZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbnNlY3Rpb24ge1xuICAgIHdpZHRoOiA5MCU7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbnNlY3Rpb24gaDIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG51bDo6YWZ0ZXIge1xuICAgIGNsZWFyOiBib3RoO1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogdGFibGU7XG59XG5cbnVsIGxpIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDE2cHggMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogLjI1ZW07XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xuICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNkYmRiZGI7XG59XG5cbnVsIHAsXG51bCBlbSxcbnVsIGlucHV0IHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgZm9udC1zaXplOiAwLjdyZW07XG4gICAgY29sb3I6ICM5OTk5OTk7XG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogYXV0bztcbiAgICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcbiAgICB1c2VyLXNlbGVjdDogYXV0bztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG51bCBwIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICM3NjZhY2Y7XG4gICAgY29sb3I6ICNlZmVmZWY7XG59XG5cbnVsIGVtIHtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICdbJztcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgICBjb250ZW50OiAnXSc7XG59XG5cbnVsIGlucHV0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIHVsIGxpIHtcbiAgICAgICAgd2lkdGg6IDEyLjUlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xuICAgIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG4jY2QtbmF2IHVsIHtcbiAgICAvKiBtb2JpbGUgZmlyc3QgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXgtd2lkdGg6IDQwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDkwJTtcbiAgICByaWdodDogNSU7XG4gICAgYm90dG9tOiA1JTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAvKiByZW1vdmUgb3ZlcmZsb3c6aGlkZGVuIGlmIHlvdSB3YW50IHRvIGNyZWF0ZSBhIGRyb3AtZG93biBtZW51IC0gYnV0IHRoZW4gcmVtZW1iZXIgdG8gZml4L2VsaW1pbmF0ZSB0aGUgbGlzdCBpdGVtcyBhbmltYXRpb24gKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tb3otdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gICAgLW8tdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xufVxuXG4jY2QtbmF2IHVsIGxpIHtcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuI2NkLW5hdiB1bC5pcy12aXNpYmxlIHtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG59XG5cbiNjZC1uYXYgbGkgYSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZmMmY2O1xufVxuXG4jY2QtbmF2IGxpIGE6aG92ZXIge1xuICAgIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA1JTtcbiAgICByaWdodDogNSU7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgaGVpZ2h0OiA0NHB4O1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVlbTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgLyogaW1hZ2UgcmVwbGFjZW1lbnQgKi9cbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtaW5kZW50OiAxMDAlO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW4ge1xuICAgIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIHRvcDogNTAlO1xuICAgIG1hcmdpbi10b3A6IC0xcHg7XG4gICAgbGVmdDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICAtbW96LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4zcztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4zcywgYmFja2dyb3VuZCAwcztcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xuICAgIHRvcDogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICAgIGJvdHRvbTogLTZweDtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW4ge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmJlZm9yZSB7XG4gICAgdG9wOiAwO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgICBib3R0b206IDA7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG59XG5cbi5ub3ctdWktaWNvbnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcbiAgICBzcGVhazogbm9uZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuIiwiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xuTGljZW5zZSAtIG51Y2xlb2FwcC5jb20vbGljZW5zZS9cbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNzY2YWNmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1haW4gY29tcG9uZW50c1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMjBweCAwIDA7XG59XG5cbmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiAwLjZlbTtcbn1cblxuaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuc2VjdGlvbiBoMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBwYWRkaW5nOiAwIDAgMWVtIDAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxudWw6OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG51bCBsaSB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xufVxuXG51bCBwLFxudWwgZW0sXG51bCBpbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjOTk5OTk5O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xuICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XG4gIHVzZXItc2VsZWN0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwgcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNzY2YWNmO1xuICBjb2xvcjogI2VmZWZlZjtcbn1cblxudWwgZW0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIltcIjtcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJdXCI7XG59XG5cbnVsIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHVsIGxpIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICB1bCBsaSB7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDMycHggMDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI2NkLW5hdiB1bCB7XG4gIC8qIG1vYmlsZSBmaXJzdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgcmlnaHQ6IDUlO1xuICBib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogcmVtb3ZlIG92ZXJmbG93OmhpZGRlbiBpZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBkcm9wLWRvd24gbWVudSAtIGJ1dCB0aGVuIHJlbWVtYmVyIHRvIGZpeC9lbGltaW5hdGUgdGhlIGxpc3QgaXRlbXMgYW5pbWF0aW9uICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG59XG5cbiNjZC1uYXYgdWwgbGkge1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbiNjZC1uYXYgdWwuaXMtdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xufVxuXG4jY2QtbmF2IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XG59XG5cbiNjZC1uYXYgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIGltYWdlIHJlcGxhY2VtZW50ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XG4gIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlIHtcbiAgdG9wOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3BhbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4ubm93LXVpLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgXCJOdWNsZW8gT3V0bGluZVwiO1xuICBzcGVhazogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NucleoiconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/edit-blog-page/edit-blog-page.component.css":
/*!*************************************************************!*\
  !*** ./src/app/edit-blog-page/edit-blog-page.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* :host ::ng-deep .ck-editor__editable_inline {\r\n    min-height: 500px;\r\n} */\r\n.wrapper {\r\n    min-height: calc(100vh - 450px);\r\n}\r\n.section-editor, .section-view{\r\n    padding: 10px 0px;\r\n}\r\n.title{\r\n    text-align: center;    \r\n}\r\n.image-wrap {\r\n    padding: 10px;\r\n    border: solid 1px #e0e0e0;\r\n    display: inline-block;\r\n    \r\n}\r\n.img-space {\r\n    border: dashed 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    background-color: #f2f2f2;\r\n    height: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n    min-height:175px;\r\n}\r\n.img-space img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto;\r\n    cursor: pointer;\r\n}\r\n.fileInputProfileWrap {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.fileInputProfile {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 99;\r\n    opacity: 0;\r\n}\r\n.fileInputProfile[disabled] + .img-space{\r\n    pointer-events: none;\r\n    cursor: not-allowed!important;\r\n}\r\n.btn-remove{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    z-index: 100;\r\n}\r\n.invalid .form-control{\r\n    border-color:#FF3636;\r\n}\r\n.invalid-feedback{\r\n    display: none;\r\n    padding-left: 10px;\r\n    color: #FF3636;\r\n}\r\n.invalid .invalid-feedback {\r\n    display: block;\r\n    \r\n}\r\n.loading-spin{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0px;\r\n    z-index: 20;\r\n    /* background-image: linear-gradient(-105deg, #bcc0c1, #707075); */\r\n    background-image: url(/assets/img/bg1.jpg);\r\n}\r\n.spinner {\r\n    -webkit-animation: rotate 2s linear infinite;\r\n            animation: rotate 2s linear infinite;\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -25px 0 0 -25px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n.spinner .path {\r\n    stroke: #ffffff;\r\n    stroke-linecap: round;\r\n    -webkit-animation: dash 1.5s ease-in-out infinite;\r\n            animation: dash 1.5s ease-in-out infinite;\r\n  }\r\n@-webkit-keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n@-webkit-keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n@keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC1ibG9nLXBhZ2UvZWRpdC1ibG9nLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNIO0lBQ0ksK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7O0FBRXpCO0FBRUE7SUFDSSwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFVBQVU7QUFDZDtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7O0FBRWxCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSwwQ0FBMEM7QUFDOUM7QUFDQTtJQUNJLDRDQUE0QztZQUNwQyxvQ0FBb0M7SUFDNUMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlEQUFpRDtZQUN6Qyx5Q0FBeUM7RUFDbkQ7QUFFQTtJQUNFO01BRVUseUJBQXlCO0lBQ25DO0VBQ0Y7QUFFQTtJQUNFO01BRVUseUJBQXlCO0lBQ25DO0VBQ0Y7QUFDQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHVCQUF1QjtJQUN6QjtFQUNGO0FBQ0E7SUFDRTtNQUNFLHdCQUF3QjtNQUN4QixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QixzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYmxvZy1wYWdlL2VkaXQtYmxvZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59ICovXHJcbi53cmFwcGVyIHtcclxuICAgIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA0NTBweCk7XHJcbn1cclxuLnNlY3Rpb24tZWRpdG9yLCAuc2VjdGlvbi12aWV3e1xyXG4gICAgcGFkZGluZzogMTBweCAwcHg7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcclxufVxyXG4uaW1hZ2Utd3JhcCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggI2UwZTBlMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIFxyXG59XHJcblxyXG4uaW1nLXNwYWNlIHtcclxuICAgIGJvcmRlcjogZGFzaGVkIDFweCAjZDNkM2QzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6MTc1cHg7XHJcbn1cclxuXHJcbi5pbWctc3BhY2UgaW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5maWxlSW5wdXRQcm9maWxlV3JhcCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmZpbGVJbnB1dFByb2ZpbGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmZpbGVJbnB1dFByb2ZpbGVbZGlzYWJsZWRdICsgLmltZy1zcGFjZXtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCFpbXBvcnRhbnQ7XHJcbn1cclxuLmJ0bi1yZW1vdmV7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDEwcHg7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufVxyXG4uaW52YWxpZCAuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyLWNvbG9yOiNGRjM2MzY7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6ICNGRjM2MzY7XHJcbn1cclxuLmludmFsaWQgLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBcclxufVxyXG5cclxuLmxvYWRpbmctc3BpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMDVkZWcsICNiY2MwYzEsICM3MDcwNzUpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2JnMS5qcGcpO1xyXG59XHJcbi5zcGlubmVyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuc3Bpbm5lciAucGF0aCB7XHJcbiAgICBzdHJva2U6ICNmZmZmZmY7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/edit-blog-page/edit-blog-page.component.ts":
/*!************************************************************!*\
  !*** ./src/app/edit-blog-page/edit-blog-page.component.ts ***!
  \************************************************************/
/*! exports provided: EditBlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditBlogPageComponent", function() { return EditBlogPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");





var EditBlogPageComponent = /** @class */ (function () {
    function EditBlogPageComponent(route, router, mainService) {
        this.route = route;
        this.router = router;
        this.mainService = mainService;
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'mainImg': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Main Content', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
        this.mode = 'view';
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                ['bold']
            ],
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
    }
    EditBlogPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        var id = this.route.snapshot.paramMap.get('id');
        this.mainService.GetBlogById(id).subscribe(function (ret_item) {
            _this.blog = ret_item;
            _this.postForm.setValue({
                'title': _this.blog.title,
                'mainImg': null,
                'content': _this.blog.content
            });
            _this.isLoading = false;
        });
        this.edit_mode_state = false;
    };
    EditBlogPageComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.postForm);
        if (this.postForm.valid) {
            var formData = new FormData();
            alert(this.postForm.get('title').value);
            if (this.postForm.get('mainImg').value) {
                formData.append('mainImg', this.postForm.get('mainImg').value);
            }
            formData.append('title', this.postForm.get('title').value);
            formData.append('content', this.postForm.get('content').value);
            console.log(formData);
            this.mainService.PatchBlogById(this.blog.id, formData).subscribe(function (ret_value) {
                console.log(ret_value);
                _this.edit_mode_state = false;
            });
        }
        else {
            this.validateAllFormFields(this.postForm);
        }
    };
    EditBlogPageComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]) { //{4}
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]) { //{5}
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    EditBlogPageComponent.prototype.isInvalid = function (field_name) {
        var control = this.postForm.get(field_name);
        return control.invalid && (control.dirty || control.touched);
    };
    Object.defineProperty(EditBlogPageComponent.prototype, "f", {
        get: function () { return this.postForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditBlogPageComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            var max_height = 15200;
            var max_width = 25600;
            // if (fileInput.target.files[0].size > max_size) {
            //     this.imageError =
            //         'Maximum size allowed is ' + max_size / 1000 + 'Mb';
            //     return false;
            // }
            // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    var img_height = rs.currentTarget['height'];
                    var img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    // if (img_height > max_height && img_width > max_width) {
                    //     this.imageError =
                    //         'Maximum dimentions allowed ' +
                    //         max_height +
                    //         '*' +
                    //         max_width +
                    //         'px';
                    //     return false;
                    // } else {
                    //     const imgBase64Path = e.target.result;
                    //     this.cardImageBase64 = imgBase64Path;
                    //     this.isImageSaved = true;
                    //     // this.previewImagePath = imgBase64Path;
                    // }
                    var imgBase64Path = e.target.result;
                    _this.cardImageBase64 = imgBase64Path;
                    _this.isImageSaved = true;
                };
            };
            var file = fileInput.target.files[0];
            this.postForm.get('mainImg').setValue(file);
            reader.readAsDataURL(fileInput.target.files[0]);
        }
    };
    EditBlogPageComponent.prototype.removeImage = function () {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
        this.postForm.get('mainImg').setValue(null);
    };
    EditBlogPageComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
    ]; };
    EditBlogPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-blog-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-blog-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-blog-page/edit-blog-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-blog-page.component.css */ "./src/app/edit-blog-page/edit-blog-page.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], EditBlogPageComponent);
    return EditBlogPageComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./examples.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "./src/app/examples/examples.component.ts");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/examples/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/get-report-page/get-report-page.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/get-report-page/get-report-page.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".check-btn {\n  font-size: 72px;\n  font-weight: 900;\n  color: white !important;\n  padding: 15px;\n  border-radius: 50%;\n}\n\n.loading-spin {\n  position: absolute;\n  width: 100vw;\n  height: 100vh;\n  top: 0px;\n  z-index: 20;\n  /* background-image: linear-gradient(-105deg, #bcc0c1, #707075); */\n  background-image: url('bgcar1.jpg');\n  background-size: cover;\n}\n\n.spinner {\n  -webkit-animation: rotate 2s linear infinite;\n  animation: rotate 2s linear infinite;\n  z-index: 2;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -25px 0 0 -25px;\n  width: 50px;\n  height: 50px;\n}\n\n.spinner .path {\n  stroke: #ffffff;\n  stroke-linecap: round;\n  -webkit-animation: dash 1.5s ease-in-out infinite;\n  animation: dash 1.5s ease-in-out infinite;\n}\n\n@-webkit-keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes rotate {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@-webkit-keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n\n@keyframes dash {\n  0% {\n    stroke-dasharray: 1, 150;\n    stroke-dashoffset: 0;\n  }\n  50% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -35;\n  }\n  100% {\n    stroke-dasharray: 90, 150;\n    stroke-dashoffset: -124;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LXJlcG9ydC1wYWdlL0Q6XFxET1dOTE9BRFxcRW1wbG95ZXJzXFxNSWNoYWVsIFBvc3Rla1xcVmluQXBwL3NyY1xcYXBwXFxnZXQtcmVwb3J0LXBhZ2VcXGdldC1yZXBvcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvZ2V0LXJlcG9ydC1wYWdlL2dldC1yZXBvcnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxrRUFBQTtFQUNBLG1DQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURDQTtFQUNJLDRDQUFBO0VBQ1Esb0NBQUE7RUFDUixVQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNFSjs7QURBRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGlEQUFBO0VBQ1EseUNBQUE7QUNHWjs7QURBRTtFQUNFO0lBRVUseUJBQUE7RUNHWjtBQUNGOztBREFFO0VBQ0U7SUFFVSx5QkFBQTtFQ0VaO0FBQ0Y7O0FEQUU7RUFDRTtJQUNFLHdCQUFBO0lBQ0Esb0JBQUE7RUNFSjtFREFFO0lBQ0UseUJBQUE7SUFDQSxzQkFBQTtFQ0VKO0VEQUU7SUFDRSx5QkFBQTtJQUNBLHVCQUFBO0VDRUo7QUFDRjs7QURBRTtFQUNFO0lBQ0Usd0JBQUE7SUFDQSxvQkFBQTtFQ0VKO0VEQUU7SUFDRSx5QkFBQTtJQUNBLHNCQUFBO0VDRUo7RURBRTtJQUNFLHlCQUFBO0lBQ0EsdUJBQUE7RUNFSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZ2V0LXJlcG9ydC1wYWdlL2dldC1yZXBvcnQtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGVjay1idG57XHJcbiAgICBmb250LXNpemU6IDcycHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubG9hZGluZy1zcGlue1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogMjA7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTEwNWRlZywgI2JjYzBjMSwgIzcwNzA3NSk7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoYXNzZXRzL2ltZy9iZ2NhcjEuanBnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNwaW5uZXIge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbjogLTI1cHggMCAwIC0yNXB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgfVxyXG4gIC5zcGlubmVyIC5wYXRoIHtcclxuICAgIHN0cm9rZTogI2ZmZmZmZjtcclxuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0O1xyXG4gICAgfVxyXG4gIH1cclxuICBAa2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcclxuICAgIH1cclxuICB9XHJcbiAgIiwiLmNoZWNrLWJ0biB7XG4gIGZvbnQtc2l6ZTogNzJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLmxvYWRpbmctc3BpbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMjA7XG4gIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTA1ZGVnLCAjYmNjMGMxLCAjNzA3MDc1KTsgKi9cbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGFzc2V0cy9pbWcvYmdjYXIxLmpwZyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5zcGlubmVyIHtcbiAgLXdlYmtpdC1hbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLnNwaW5uZXIgLnBhdGgge1xuICBzdHJva2U6ICNmZmZmZmY7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQGtleWZyYW1lcyByb3RhdGUge1xuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICB9XG4gIDUwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xuICB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XG4gIH1cbn1cbkBrZXlmcmFtZXMgZGFzaCB7XG4gIDAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XG4gICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gIH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xuICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzU7XG4gIH1cbiAgMTAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcbiAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/get-report-page/get-report-page.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/get-report-page/get-report-page.component.ts ***!
  \**************************************************************/
/*! exports provided: GetReportPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetReportPageComponent", function() { return GetReportPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var app_model_carinfo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/model/carinfo.model */ "./src/app/model/carinfo.model.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! environments/environment */ "./src/environments/environment.ts");






var GetReportPageComponent = /** @class */ (function () {
    function GetReportPageComponent(mainService, route) {
        this.mainService = mainService;
        this.route = route;
    }
    GetReportPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        var order_id = +this.route.snapshot.queryParams['order_id'];
        this.isloading = true;
        console.log(this.isloading);
        console.log(order_id);
        if (order_id) {
            this.mainService.GetReport(order_id.toString()).subscribe(function (ret) {
                _this.isloading = false;
                if (ret.status == 'OK') {
                    _this.order_id = order_id;
                    _this.carInfo = new app_model_carinfo_model__WEBPACK_IMPORTED_MODULE_2__["CarInfoModel"]();
                    _this.carInfo.carmake = ret.carInfo.carmake;
                    _this.carInfo.id = ret.carInfo.id;
                    _this.carInfo = ret.carInfo;
                }
            });
        }
    };
    GetReportPageComponent.prototype.downloadLink = function () {
        if (this.order_id)
            return environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].api_base_url + "/download_pdf/?order_id=" + this.order_id;
        return "#";
    };
    GetReportPageComponent.ctorParameters = function () { return [
        { type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
    ]; };
    GetReportPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-report-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./get-report-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-report-page/get-report-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./get-report-page.component.scss */ "./src/app/get-report-page/get-report-page.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], GetReportPageComponent);
    return GetReportPageComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ellipseContainer {\r\n    position: absolute;\r\n    right: -3%;\r\n    bottom: 3.3%;\r\n    left: -3%;\r\n  }\r\n  \r\n  .track,\r\n  .handle {\r\n    display: block;\r\n    max-width: 695px;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  .handleContainer {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    z-index: 2;\r\n  }\r\n  \r\n  .section-trusted-by{\r\n      background-color: #f4f4f4;\r\n      padding: 10px 0;\r\n  }\r\n  \r\n  .section-trusted-by p{\r\n      margin: 0;\r\n  }\r\n  \r\n  .section-alwasy-check{\r\n      background-color: #f9f9f9;\r\n      padding: 35px 0;\r\n      margin: 35px 0;\r\n  }\r\n  \r\n  .section-alwasy-check ul{\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    margin-top: -25px;\r\n    font-size: 17px;\r\n    font-weight: 300;\r\n  }\r\n  \r\n  .section-alwasy-check li {\r\n    display: flex;\r\n    margin-top: 25px;\r\n    line-height: 1.15;\r\n  }\r\n  \r\n  .section-alwasy-check .as-icon{\r\n    width: 22px;\r\n    height: 22px;\r\n    border-radius: 50%;\r\n    flex-shrink: 0;\r\n    margin-right: 8px;\r\n    padding: 5px;\r\n    background: #fff;\r\n    color: #42bf00;\r\n  }\r\n  \r\n  .section-alwasy-check .as-icon svg{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    fill:#42bf00;\r\n  }\r\n  \r\n  @media screen and (min-width: 600px){\r\n    .section-alwasy-check ul{\r\n        flex-direction: row;\r\n        margin-left: -10px;\r\n        font-size: 19px;\r\n    }\r\n    .section-alwasy-check li {\r\n        width: calc(50% - 10px);\r\n        margin-right: 10px;\r\n    }\r\n  }\r\n  \r\n  .section-shorten .stepsection {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    position: relative;\r\n    display: none;\r\n    }\r\n  \r\n  .section-shorten .step-header{\r\n    margin: 20px 0 0;\r\n    text-transform: uppercase;\r\n    font-size: 19px;\r\n    color: #171717;\r\n  }\r\n  \r\n  .section-shorten .step-label{\r\n    margin: -2px 0 0;\r\n    text-transform: uppercase;\r\n    font-size: 12px;\r\n    color: #bbb;\r\n  }\r\n  \r\n  .section-shorten .step-description{\r\n    margin: 10px 0 0;\r\n    font-weight: 300;\r\n    font-size: 16px;\r\n    color: #333;\r\n  }\r\n  \r\n  .section-shorten .as-icon {\r\n    width: 106px;\r\n    height: 106px;\r\n    border-radius: 50%;\r\n    margin: 0 auto;\r\n    padding: 20px;\r\n    background: #f9f9f9;\r\n    color: #00c0e8;\r\n    stroke: currentColor;\r\n    stroke-width: 1px;\r\n    display: inline-block;    \r\n    vertical-align: top;\r\n    \r\n  }\r\n  \r\n  .section-alwasy-check .as-icon svg{\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n  }\r\n  \r\n  .section-shorten .step-item{\r\n    text-align: center;\r\n    outline: 0;\r\n  }\r\n  \r\n  @media screen and (min-width: 900px){\r\n    .section-shorten .stepsection:before {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 53px;\r\n        right: 12.5%;\r\n        left: 12.5%;\r\n        height: 1px;\r\n        background: #e6e6e6;\r\n    }\r\n    .section-shorten .step-item{\r\n        position: relative;\r\n    width: 25%;\r\n    margin: 0 15px;\r\n    padding: 0;\r\n    }\r\n    .section-shorten .as-icon {\r\n        width: 150px;\r\n        height: 150px;\r\n        border-radius: 50%;\r\n        margin-top: -22px;\r\n        margin-bottom: -20px;\r\n        border: 22px solid #fff;\r\n        \r\n      }\r\n      .section-shorten .stepsection{\r\n          display: flex;\r\n      }\r\n  }\r\n  \r\n  .section-blog .card {\r\n      padding: 0; \r\n      border-radius: 10px;\r\n      margin: 10px;\r\n  }\r\n  \r\n  .section-blog .card-body .card-title{\r\n      font-weight: 800;     \r\n      max-height: 50px;\r\n      overflow: hidden;\r\n  }\r\n  \r\n  .section-blog .card-body .card-title{\r\n    font-weight: 800;     \r\n    height: 50px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .section-blog .card-body .card-text {\r\n    height: 88px;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    -webkit-box-orient: vertical;\r\n    text-overflow: ellipsis;\r\n  }\r\n  \r\n  .section-blog .card.absolute :after{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 70px;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background: linear-gradient(transparent,#2d2a2a90);\r\n    z-index: -1;\r\n  }\r\n  \r\n  @media (min-width: 576px){\r\n    .section-blog .card.absolute .card-body{\r\n        position: absolute;\r\n        bottom: 0;\r\n        color: white;    \r\n    }\r\n  }\r\n  \r\n  .car1 .car-img{\r\n    box-sizing: border-box;\r\n    display: block;\r\n    width: 100%;\r\n    position: relative;\r\n    height: 100%;\r\n    background-size: auto 100%;\r\n    background-repeat: no-repeat;\r\n    background-position-y: center;\r\n    background-position-x: left;\r\n    background-image: url(\"https://www.carvertical.com/static/car-undamaged.d15dd472.png\");\r\n      \r\n  }\r\n  \r\n  .car1\r\n  {\r\n    position: absolute; left: 0; top:0; bottom: 0;\r\n  }\r\n  \r\n  .car2{\r\n    position: absolute; right: 0; top:0; bottom: 0;\r\n  }\r\n  \r\n  .stroke-primary{\r\n      stroke: #f96332;\r\n  }\r\n  \r\n  .fill-primary{\r\n      fill:#f96332;\r\n  }\r\n  \r\n  .car2 .car-img{\r\n    box-sizing: border-box;\r\n    display: block;\r\n    width: 100%;\r\n    position: relative;\r\n    height: 100%;\r\n    background-size: auto 100%;\r\n    background-repeat: no-repeat;\r\n    background-position-y: center;\r\n    background-position-x: right;\r\n    background-image: url(\"https://www.carvertical.com/static/car-damaged.eeebc116.png\");\r\n    background-position-x: right;\r\n  }\r\n  \r\n  @media screen and (min-width: 900px){\r\n    .section-blog .card.absolute .card-img-top{\r\n        height: 423.88px;\r\n      }\r\n      .section-blog .card .card-img-top{\r\n          height: 196.88px;\r\n      }\r\n  }\r\n  \r\n  .section-search input{\r\n      font-size: 15px;\r\n  }\r\n  \r\n  @media (min-width: 576px){\r\n    .section-search input{\r\n        font-size: 20px;\r\n    }\r\n  }\r\n  \r\n  .handleContainerDesktopOnly {\r\n    display: none;\r\n  \r\n    @include for-desktop-up {\r\n      display: block;\r\n    }\r\n  }\r\n  \r\n  .loading-spin{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0px;\r\n    z-index: 20;\r\n    /* background-image: linear-gradient(-105deg, #bcc0c1, #707075); */\r\n    background-image: url(/assets/img/bg1.jpg);\r\n}\r\n  \r\n  .spinner {\r\n    -webkit-animation: rotate 2s linear infinite;\r\n            animation: rotate 2s linear infinite;\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -25px 0 0 -25px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n  \r\n  .spinner .path {\r\n    stroke: #ffffff;\r\n    stroke-linecap: round;\r\n    -webkit-animation: dash 1.5s ease-in-out infinite;\r\n            animation: dash 1.5s ease-in-out infinite;\r\n  }\r\n  \r\n  @-webkit-keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @-webkit-keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n  \r\n  @keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFlBQVk7SUFDWixTQUFTO0VBQ1g7O0VBRUE7O0lBRUUsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0VBQ1o7O0VBQ0E7TUFDSSx5QkFBeUI7TUFDekIsZUFBZTtFQUNuQjs7RUFDQTtNQUNJLFNBQVM7RUFDYjs7RUFFQTtNQUNJLHlCQUF5QjtNQUN6QixlQUFlO01BQ2YsY0FBYztFQUNsQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVTtJQUNWLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCOztFQUdBO0lBQ0UsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztFQUNoQjs7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLFlBQVk7RUFDZDs7RUFDQTtJQUNFO1FBQ0ksbUJBQW1CO1FBQ25CLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSx1QkFBdUI7UUFDdkIsa0JBQWtCO0lBQ3RCO0VBQ0Y7O0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiOztFQUNGO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLFdBQVc7RUFDYjs7RUFDQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7O0VBRXJCOztFQUNBO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0VBQ2hCOztFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFVBQVU7RUFDWjs7RUFFQTtJQUNFO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixTQUFTO1FBQ1QsWUFBWTtRQUNaLFdBQVc7UUFDWCxXQUFXO1FBQ1gsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1Y7SUFDQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsdUJBQXVCOztNQUV6QjtNQUNBO1VBQ0ksYUFBYTtNQUNqQjtFQUNKOztFQUNBO01BQ0ksVUFBVTtNQUNWLG1CQUFtQjtNQUNuQixZQUFZO0VBQ2hCOztFQUVBO01BQ0ksZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixnQkFBZ0I7RUFDcEI7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGdCQUFnQjtFQUNsQjs7RUFDQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7SUFDNUIsdUJBQXVCO0VBQ3pCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFNBQVM7SUFDVCxPQUFPO0lBQ1Asa0RBQWtEO0lBQ2xELFdBQVc7RUFDYjs7RUFDQTtJQUNFO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxZQUFZO0lBQ2hCO0VBQ0Y7O0VBQ0E7SUFDRSxzQkFBc0I7SUFDdEIsY0FBYztJQUNkLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDJCQUEyQjtJQUMzQixzRkFBc0Y7O0VBRXhGOztFQUNBOztJQUVFLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUztFQUMvQzs7RUFDQTtJQUNFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUztFQUNoRDs7RUFDQTtNQUNJLGVBQWU7RUFDbkI7O0VBQ0E7TUFDSSxZQUFZO0VBQ2hCOztFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsNEJBQTRCO0lBQzVCLDZCQUE2QjtJQUM3Qiw0QkFBNEI7SUFDNUIsb0ZBQW9GO0lBQ3BGLDRCQUE0QjtFQUM5Qjs7RUFDQTtJQUNFO1FBQ0ksZ0JBQWdCO01BQ2xCO01BQ0E7VUFDSSxnQkFBZ0I7TUFDcEI7RUFDSjs7RUFDQTtNQUNJLGVBQWU7RUFDbkI7O0VBQ0E7SUFDRTtRQUNJLGVBQWU7SUFDbkI7RUFDRjs7RUFDQTtJQUNFLGFBQWE7O0lBRWI7TUFDRSxjQUFjO0lBQ2hCO0VBQ0Y7O0VBR0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSwwQ0FBMEM7QUFDOUM7O0VBQ0E7SUFDSSw0Q0FBNEM7WUFDcEMsb0NBQW9DO0lBQzVDLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGVBQWU7SUFDZixxQkFBcUI7SUFDckIsaURBQWlEO1lBQ3pDLHlDQUF5QztFQUNuRDs7RUFFQTtJQUNFO01BRVUseUJBQXlCO0lBQ25DO0VBQ0Y7O0VBRUE7SUFDRTtNQUVVLHlCQUF5QjtJQUNuQztFQUNGOztFQUNBO0lBQ0U7TUFDRSx3QkFBd0I7TUFDeEIsb0JBQW9CO0lBQ3RCO0lBQ0E7TUFDRSx5QkFBeUI7TUFDekIsc0JBQXNCO0lBQ3hCO0lBQ0E7TUFDRSx5QkFBeUI7TUFDekIsdUJBQXVCO0lBQ3pCO0VBQ0Y7O0VBQ0E7SUFDRTtNQUNFLHdCQUF3QjtNQUN4QixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QixzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVsbGlwc2VDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0zJTtcclxuICAgIGJvdHRvbTogMy4zJTtcclxuICAgIGxlZnQ6IC0zJTtcclxuICB9XHJcbiAgXHJcbiAgLnRyYWNrLFxyXG4gIC5oYW5kbGUge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXgtd2lkdGg6IDY5NXB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5oYW5kbGVDb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbiAgLnNlY3Rpb24tdHJ1c3RlZC1ieXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjRmNDtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gIH1cclxuICAuc2VjdGlvbi10cnVzdGVkLWJ5IHB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgLnNlY3Rpb24tYWx3YXN5LWNoZWNre1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgICBwYWRkaW5nOiAzNXB4IDA7XHJcbiAgICAgIG1hcmdpbjogMzVweCAwO1xyXG4gIH1cclxuICAuc2VjdGlvbi1hbHdhc3ktY2hlY2sgdWx7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gIH1cclxuIFxyXG5cclxuICAuc2VjdGlvbi1hbHdhc3ktY2hlY2sgbGkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICB9XHJcblxyXG4gIC5zZWN0aW9uLWFsd2FzeS1jaGVjayAuYXMtaWNvbntcclxuICAgIHdpZHRoOiAyMnB4O1xyXG4gICAgaGVpZ2h0OiAyMnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBjb2xvcjogIzQyYmYwMDtcclxuICB9XHJcbiAgLnNlY3Rpb24tYWx3YXN5LWNoZWNrIC5hcy1pY29uIHN2Z3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmaWxsOiM0MmJmMDA7XHJcbiAgfVxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYwMHB4KXtcclxuICAgIC5zZWN0aW9uLWFsd2FzeS1jaGVjayB1bHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1hbHdhc3ktY2hlY2sgbGkge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNlY3Rpb24tc2hvcnRlbiAuc3RlcHNlY3Rpb24ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIC5zZWN0aW9uLXNob3J0ZW4gLnN0ZXAtaGVhZGVye1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICBjb2xvcjogIzE3MTcxNztcclxuICB9XHJcbiAgLnNlY3Rpb24tc2hvcnRlbiAuc3RlcC1sYWJlbHtcclxuICAgIG1hcmdpbjogLTJweCAwIDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6ICNiYmI7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXNob3J0ZW4gLnN0ZXAtZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW46IDEwcHggMCAwO1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gIH1cclxuICAuc2VjdGlvbi1zaG9ydGVuIC5hcy1pY29uIHtcclxuICAgIHdpZHRoOiAxMDZweDtcclxuICAgIGhlaWdodDogMTA2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xyXG4gICAgY29sb3I6ICMwMGMwZTg7XHJcbiAgICBzdHJva2U6IGN1cnJlbnRDb2xvcjtcclxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyAgICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBcclxuICB9XHJcbiAgLnNlY3Rpb24tYWx3YXN5LWNoZWNrIC5hcy1pY29uIHN2Z3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLXNob3J0ZW4gLnN0ZXAtaXRlbXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG91dGxpbmU6IDA7XHJcbiAgfVxyXG4gXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xyXG4gICAgLnNlY3Rpb24tc2hvcnRlbiAuc3RlcHNlY3Rpb246YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUzcHg7XHJcbiAgICAgICAgcmlnaHQ6IDEyLjUlO1xyXG4gICAgICAgIGxlZnQ6IDEyLjUlO1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XHJcbiAgICB9XHJcbiAgICAuc2VjdGlvbi1zaG9ydGVuIC5zdGVwLWl0ZW17XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5zZWN0aW9uLXNob3J0ZW4gLmFzLWljb24ge1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMjJweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMjBweDtcclxuICAgICAgICBib3JkZXI6IDIycHggc29saWQgI2ZmZjtcclxuICAgICAgICBcclxuICAgICAgfVxyXG4gICAgICAuc2VjdGlvbi1zaG9ydGVuIC5zdGVwc2VjdGlvbntcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICB9XHJcbiAgLnNlY3Rpb24tYmxvZyAuY2FyZCB7XHJcbiAgICAgIHBhZGRpbmc6IDA7IFxyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBtYXJnaW46IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZWN0aW9uLWJsb2cgLmNhcmQtYm9keSAuY2FyZC10aXRsZXtcclxuICAgICAgZm9udC13ZWlnaHQ6IDgwMDsgICAgIFxyXG4gICAgICBtYXgtaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuc2VjdGlvbi1ibG9nIC5jYXJkLWJvZHkgLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LXdlaWdodDogODAwOyAgICAgXHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuc2VjdGlvbi1ibG9nIC5jYXJkLWJvZHkgLmNhcmQtdGV4dCB7XHJcbiAgICBoZWlnaHQ6IDg4cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgfVxyXG4gIC5zZWN0aW9uLWJsb2cgLmNhcmQuYWJzb2x1dGUgOmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNzBweDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCwjMmQyYTJhOTApO1xyXG4gICAgei1pbmRleDogLTE7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA1NzZweCl7XHJcbiAgICAuc2VjdGlvbi1ibG9nIC5jYXJkLmFic29sdXRlIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7ICAgIFxyXG4gICAgfVxyXG4gIH1cclxuICAuY2FyMSAuY2FyLWltZ3tcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGxlZnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5jYXJ2ZXJ0aWNhbC5jb20vc3RhdGljL2Nhci11bmRhbWFnZWQuZDE1ZGQ0NzIucG5nXCIpO1xyXG4gICAgICBcclxuICB9XHJcbiAgLmNhcjFcclxuICB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDowOyBib3R0b206IDA7XHJcbiAgfVxyXG4gIC5jYXIye1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMDsgdG9wOjA7IGJvdHRvbTogMDtcclxuICB9XHJcbiAgLnN0cm9rZS1wcmltYXJ5e1xyXG4gICAgICBzdHJva2U6ICNmOTYzMzI7XHJcbiAgfVxyXG4gIC5maWxsLXByaW1hcnl7XHJcbiAgICAgIGZpbGw6I2Y5NjMzMjtcclxuICB9XHJcbiAgLmNhcjIgLmNhci1pbWd7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3LmNhcnZlcnRpY2FsLmNvbS9zdGF0aWMvY2FyLWRhbWFnZWQuZWVlYmMxMTYucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiByaWdodDtcclxuICB9XHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTAwcHgpe1xyXG4gICAgLnNlY3Rpb24tYmxvZyAuY2FyZC5hYnNvbHV0ZSAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgIGhlaWdodDogNDIzLjg4cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tYmxvZyAuY2FyZCAuY2FyZC1pbWctdG9we1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOTYuODhweDtcclxuICAgICAgfVxyXG4gIH1cclxuICAuc2VjdGlvbi1zZWFyY2ggaW5wdXR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAgIC5zZWN0aW9uLXNlYXJjaCBpbnB1dHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5oYW5kbGVDb250YWluZXJEZXNrdG9wT25seSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIFxyXG4gICAgQGluY2x1ZGUgZm9yLWRlc2t0b3AtdXAge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICB9XHJcbiAgXHJcblxyXG4gIC5sb2FkaW5nLXNwaW57XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAyMDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgtMTA1ZGVnLCAjYmNjMGMxLCAjNzA3MDc1KTsgKi9cclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9iZzEuanBnKTtcclxufVxyXG4uc3Bpbm5lciB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRlIDJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgbWFyZ2luOiAtMjVweCAwIDAgLTI1cHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICB9XHJcbiAgLnNwaW5uZXIgLnBhdGgge1xyXG4gICAgc3Ryb2tlOiAjZmZmZmZmO1xyXG4gICAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDEuNXMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyByb3RhdGUge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBrZXlmcmFtZXMgZGFzaCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDEsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XHJcbiAgICB9XHJcbiAgICA1MCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTM1O1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMTI0O1xyXG4gICAgfVxyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vin-validator */ "./node_modules/vin-validator/index.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vin_validator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var app_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/main.service */ "./src/app/main.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(renderer, router, mainService) {
        this.renderer = renderer;
        this.router = router;
        this.mainService = mainService;
        this.curve = {
            cx: 348,
            cy: 106.5,
            rx: 329,
            ry: 87.5
        };
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.percent = 100;
        this.car1_width = "100%";
        this.car2_width = "0%";
        this.timerStarted = false;
        this.vin_number = "";
        this.is_validvin = false;
        this.blogs = [];
        this.offset = 0;
        this.isLoading = true;
        this.renderer.listen('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 2124 || window.pageYOffset > 2124) {
                if (!_this.timerStarted) {
                    _this.flag = -2;
                    _this.percent = 100;
                    _this.timerStarted = true;
                    _this.intervalId = setInterval(function () { _this.timer_func(); }, 10);
                }
            }
        });
        this.mainService.ListBlog({ limit: 3, offset: 0 }).subscribe(function (ret_item) {
            console.log(ret_item);
            _this.isLoading = false;
            if (ret_item.next) {
                _this.is_next_available = true;
                _this.next_url = ret_item.next;
            }
            else {
                _this.is_next_available = false;
            }
            _this.blogs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.blogs, ret_item.results);
            _this.offset = _this.offset + ret_item.count;
        });
    };
    HomeComponent.prototype.loadMore = function () {
        var _this = this;
        this.mainService.ListBlogByUrl(this.next_url).subscribe(function (ret_item) {
            if (ret_item.next) {
                _this.is_next_available = true;
                _this.next_url = ret_item.next;
            }
            else {
                _this.is_next_available = false;
            }
            _this.blogs = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArrays"])(_this.blogs, ret_item.results);
        });
    };
    HomeComponent.prototype.testclick = function () {
        window.open("https://www.google.com", "_blank");
    };
    HomeComponent.prototype.timer_func = function () {
        if (this.percent == 0)
            this.flag = 1;
        if (this.percent >= 40 && this.flag == 1) {
            if (this.intervalId)
                clearInterval(this.intervalId);
        }
        this.percent = this.percent + this.flag;
        this.updateslider();
    };
    HomeComponent.prototype.ngAfterViewChecked = function () {
        if (this.isLoading)
            return;
        this.updateslider();
    };
    HomeComponent.prototype.drawline = function (cx, cy) {
        //677 106.5
        var points1 = (cx - 3).toString();
        points1 += " " + (cy - 6.5).toString();
        points1 += " " + (cx - 9).toString();
        points1 += " " + (cy).toString();
        points1 += " " + (cx - 3).toString();
        points1 += " " + (cy + 6.5).toString();
        this.line1.nativeElement.setAttribute('points', points1);
        var points2 = (cx + 3).toString();
        points2 += " " + (cy - 6.5).toString();
        points2 += " " + (cx + 9).toString();
        points2 += " " + (cy).toString();
        points2 += " " + (cx + 3).toString();
        points2 += " " + (cy + 6.5).toString();
        this.line2.nativeElement.setAttribute('points', points2);
    };
    HomeComponent.prototype.updateslider = function () {
        this.car1_width = this.percent + "%";
        this.car2_width = (100 - this.percent) + "%";
        var new_cx = this.curve.rx * this.percent / 50 - this.curve.rx;
        var new_cy = Math.sqrt(Math.pow(this.curve.ry, 2) * (1 - Math.pow(new_cx / this.curve.rx, 2)));
        new_cx = this.curve.cx + new_cx;
        new_cy = this.curve.cy + new_cy;
        this.circle1.nativeElement.setAttribute('cx', new_cx);
        this.circle2.nativeElement.setAttribute('cx', new_cx);
        this.circle1.nativeElement.setAttribute('cy', new_cy);
        this.circle2.nativeElement.setAttribute('cy', new_cy);
        this.drawline(new_cx, new_cy);
    };
    HomeComponent.prototype.search = function () {
        if (this.is_validvin) {
            this.mainService.display_loading = true;
            this.router.navigate(["/search/" + this.vin_number]);
        }
    };
    HomeComponent.prototype.stripHtml = function (html) {
        var tmp = document.createElement("DIV");
        tmp.innerHTML = html;
        console.log(tmp.textContent);
        return tmp.textContent || tmp.innerText || "";
    };
    HomeComponent.prototype.onchange = function () {
        // this.is_validvin =  false;
        this.is_validvin = vin_validator__WEBPACK_IMPORTED_MODULE_3__["validate"](this.vin_number);
        console.log(this.is_validvin);
    };
    HomeComponent.prototype.onmouseleave = function (e) {
        if (this.downed == true) {
            this.downed = false;
            if (this.percent > 90)
                this.percent = 100;
            if (this.percent < 20)
                this.percent = 0;
            this.updateslider();
        }
    };
    HomeComponent.prototype.onmousemove = function (e) {
        if (this.downed) {
            var boundrect = this.ellipsesvg.nativeElement.getBoundingClientRect();
            var cur_x = e.clientX;
            if (cur_x < boundrect.x)
                cur_x = boundrect.x;
            if (cur_x > boundrect.x + boundrect.width)
                cur_x = boundrect.x + boundrect.width;
            this.percent = (cur_x - boundrect.x) / boundrect.width * 100;
            if (this.percent > 99)
                this.percent = 100;
            if (this.percent < 1)
                this.percent = 0;
            this.updateslider();
        }
    };
    HomeComponent.prototype.onmousedown = function (e) {
        this.downed = true;
    };
    HomeComponent.prototype.onmouseup = function (e) {
        this.downed = false;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: app_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ellipse"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "ellipsesvg", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("circle1"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "circle1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("circle2"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "circle2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("line1"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "line1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("line2"),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], HomeComponent.prototype, "line2", void 0);
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/main.service.ts":
/*!*********************************!*\
  !*** ./src/app/main.service.ts ***!
  \*********************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_carinfo_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./model/carinfo.model */ "./src/app/model/carinfo.model.ts");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var MainService = /** @class */ (function () {
    function MainService(http) {
        this.http = http;
        this.api_base_url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_base_url;
        this.display_loading = false;
    }
    MainService.prototype.SearchVin = function (vin_number) {
        return this.http.post(this.api_base_url + "/find/", "vin_number=" + vin_number, { headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError('SearchVin', new _model_carinfo_model__WEBPACK_IMPORTED_MODULE_4__["CarInfoModel"]())));
    };
    MainService.prototype.SendReportReuest = function (vin_number, email_addr) {
        return this.http.get(this.api_base_url + "/generate_report/?vin=" + vin_number + "&email=" + email_addr);
    };
    MainService.prototype.GetReport = function (order_id) {
        return this.http.post(this.api_base_url + ("/generate_report/?order_id=" + order_id), {});
    };
    MainService.prototype.ResolveMediaUrl = function (url) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].asset_base_url + url;
    };
    MainService.prototype.GetSamplePdfUrl = function () {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].sample_pdf_url;
    };
    MainService.prototype.PostBlog = function (formData) {
        return this.http.post(this.api_base_url + "/blogs/", formData);
    };
    MainService.prototype.ListBlog = function (data) {
        if (data === void 0) { data = { limit: 3, offset: 0 }; }
        return this.http.get(this.api_base_url + ("/blogs/?limit=" + data.limit + "&offset=" + data.offset));
    };
    MainService.prototype.ListBlogByUrl = function (data) {
        return this.http.get(data);
    };
    MainService.prototype.GetBlogById = function (id) {
        return this.http.get(this.api_base_url + ("/blogs/" + id + "/"));
    };
    MainService.prototype.PatchBlogById = function (id, formData) {
        return this.http.patch(this.api_base_url + ("/blogs/" + id + "/"), formData);
    };
    MainService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log("============================");
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            console.log(result);
            if (operation === 'SearchVin') {
                result['id'] = -1;
            }
            // var carinfo = new CarInfoModel();
            // carinfo.caryear="2012";
            // carinfo.carphotos = 8;
            // carinfo.carmake="BMW";
            // carinfo.carmodel = "Series 3";
            // carinfo.carengine = "Diesel";
            // carinfo.carphoto_path="/assets/img/bg1.jpg";
            // result['caryear'] = carinfo.caryear;
            // result['carmake'] = carinfo.carmake;
            // result['carmodel'] = carinfo.carmodel;
            // result['carengine'] = carinfo.carengine;
            // result['carphoto_path'] = carinfo.carphoto_path;
            // result['id'] = 1;
            // Let the app keep running by returning an empty result.
            return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    };
    MainService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MainService);
    return MainService;
}());



/***/ }),

/***/ "./src/app/model/carinfo.model.ts":
/*!****************************************!*\
  !*** ./src/app/model/carinfo.model.ts ***!
  \****************************************/
/*! exports provided: CarInfoModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarInfoModel", function() { return CarInfoModel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var CarInfoModel = /** @class */ (function () {
    function CarInfoModel() {
    }
    return CarInfoModel;
}());



/***/ }),

/***/ "./src/app/pay-page/pay-page.component.scss":
/*!**************************************************!*\
  !*** ./src/app/pay-page/pay-page.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-result {\n  background-color: #e9e9e9;\n  position: relative;\n}\n.section-result .car-logo-img {\n  display: inline-flex;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  background-color: white;\n  justify-content: center;\n  align-items: center;\n}\n.section-result .car-logo-img img {\n  max-width: 50px;\n}\n.round-text {\n  width: 20px;\n  height: 20px;\n  padding: 0;\n}\n.arrow-down::after {\n  content: \"\";\n  width: 0;\n  height: 0;\n  display: block;\n  position: absolute;\n  z-index: 10;\n  border: 0;\n  border-left: 10px solid transparent;\n  border-right: 10px solid transparent;\n  margin-left: -10px;\n  left: 50%;\n  border-top: 10px solid #e9e9e9;\n  bottom: -10px;\n}\n.step-item {\n  position: relative;\n  padding-bottom: 100px;\n}\n.step-item .item-title {\n  margin-left: 10px;\n}\n.step-item .item-content {\n  margin-left: 30px;\n}\n.step-item::before {\n  content: \"\";\n  position: absolute;\n  left: 10px;\n  bottom: -20px;\n  top: 30px;\n  width: 1px;\n  border: 0.5px dashed gray;\n}\n.step-item.no-before::before {\n  content: none;\n}\n.opacity-0 {\n  opacity: 0;\n}\n.opacity-1 {\n  opacity: 1;\n}\n@media (min-width: 376px) {\n  .step-item .item-title {\n    margin-left: 20px;\n  }\n  .step-item .item-content {\n    margin-left: 40px;\n  }\n}\n@media (max-width: 320px) {\n  .step-item .item-title {\n    max-width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5LXBhZ2UvRDpcXERPV05MT0FEXFxFbXBsb3llcnNcXE1JY2hhZWwgUG9zdGVrXFxWaW5BcHAvc3JjXFxhcHBcXHBheS1wYWdlXFxwYXktcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGF5LXBhZ2UvcGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0o7QURDSTtFQUNJLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NSO0FEQVE7RUFDSSxlQUFBO0FDRVo7QURFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ0NKO0FEQ0E7RUFDSSxXQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7QUNFSjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtBQ0dKO0FERkk7RUFDSSxpQkFBQTtBQ0lSO0FERkk7RUFDSSxpQkFBQTtBQ0lSO0FEREE7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNJSjtBREZBO0VBQ0ksYUFBQTtBQ0tKO0FESEE7RUFDSSxVQUFBO0FDTUo7QURKQTtFQUNJLFVBQUE7QUNPSjtBRExBO0VBRVE7SUFDSSxpQkFBQTtFQ09WO0VETE07SUFDSSxpQkFBQTtFQ09WO0FBQ0Y7QURKQTtFQUNJO0lBQ0ksZ0JBQUE7RUNNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGF5LXBhZ2UvcGF5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1yZXN1bHR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWU5ZTkgO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIC5jYXItbG9nby1pbWd7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG59XHJcbi5yb3VuZC10ZXh0e1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbi5hcnJvdy1kb3duOjphZnRlcntcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBib3JkZXItdG9wOiAxMHB4IHNvbGlkICNlOWU5ZTk7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG59XHJcbi5zdGVwLWl0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xyXG4gICAgLml0ZW0tdGl0bGV7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaXRlbS1jb250ZW50e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgfVxyXG59XHJcbi5zdGVwLWl0ZW06OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMTBweDtcclxuICAgIGJvdHRvbTogLTIwcHg7XHJcbiAgICB0b3A6IDMwcHg7XHJcbiAgICB3aWR0aDogMXB4O1xyXG4gICAgYm9yZGVyOiAwLjVweCBkYXNoZWQgZ3JheTtcclxufVxyXG4uc3RlcC1pdGVtLm5vLWJlZm9yZTo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IG5vbmVcclxufVxyXG4ub3BhY2l0eS0we1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4ub3BhY2l0eS0xe1xyXG4gICAgb3BhY2l0eTogMTtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpe1xyXG4gICAgLnN0ZXAtaXRlbSB7XHJcbiAgICAgICAgLml0ZW0tdGl0bGV7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaXRlbS1jb250ZW50e1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDozMjBweCl7XHJcbiAgICAuc3RlcC1pdGVtIC5pdGVtLXRpdGxle1xyXG4gICAgICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICB9XHJcbn0iLCIuc2VjdGlvbi1yZXN1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VjdGlvbi1yZXN1bHQgLmNhci1sb2dvLWltZyB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zZWN0aW9uLXJlc3VsdCAuY2FyLWxvZ28taW1nIGltZyB7XG4gIG1heC13aWR0aDogNTBweDtcbn1cblxuLnJvdW5kLXRleHQge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uYXJyb3ctZG93bjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGxlZnQ6IDUwJTtcbiAgYm9yZGVyLXRvcDogMTBweCBzb2xpZCAjZTllOWU5O1xuICBib3R0b206IC0xMHB4O1xufVxuXG4uc3RlcC1pdGVtIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XG59XG4uc3RlcC1pdGVtIC5pdGVtLXRpdGxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4uc3RlcC1pdGVtIC5pdGVtLWNvbnRlbnQge1xuICBtYXJnaW4tbGVmdDogMzBweDtcbn1cblxuLnN0ZXAtaXRlbTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMHB4O1xuICBib3R0b206IC0yMHB4O1xuICB0b3A6IDMwcHg7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogMC41cHggZGFzaGVkIGdyYXk7XG59XG5cbi5zdGVwLWl0ZW0ubm8tYmVmb3JlOjpiZWZvcmUge1xuICBjb250ZW50OiBub25lO1xufVxuXG4ub3BhY2l0eS0wIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLm9wYWNpdHktMSB7XG4gIG9wYWNpdHk6IDE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAzNzZweCkge1xuICAuc3RlcC1pdGVtIC5pdGVtLXRpdGxlIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgfVxuICAuc3RlcC1pdGVtIC5pdGVtLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLnN0ZXAtaXRlbSAuaXRlbS10aXRsZSB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pay-page/pay-page.component.ts":
/*!************************************************!*\
  !*** ./src/app/pay-page/pay-page.component.ts ***!
  \************************************************/
/*! exports provided: PayPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PayPageComponent", function() { return PayPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-sha256 */ "./node_modules/js-sha256/src/sha256.js");
/* harmony import */ var js_sha256__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha256__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vin-validator */ "./node_modules/vin-validator/index.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vin_validator__WEBPACK_IMPORTED_MODULE_6__);







var PayPageComponent = /** @class */ (function () {
    function PayPageComponent(mainService, router) {
        this.mainService = mainService;
        this.router = router;
        this.pid = "0m23ouj36noui9mq2jf3jg17aoc2dbun";
        this.pin = "m2l5F9b7CNN9RHo9FBm3qikSLms2FsTB";
        this.amount = 123;
        this.id = 760691;
        this.currency = "PLN";
        this.description = "Pay to Generating Report of Vehicle";
        this.urlc = "http://autoszafa.autoszafa.eu:8000/dotpay/callback/?order_id=";
        this.dotpayUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]['dot_pay_url'];
    }
    PayPageComponent.prototype.ngOnInit = function () {
        if (!this.mainService.searchedCarInfo) {
            this.router.navigate(['home']);
        }
        this.carInfo = this.mainService.searchedCarInfo;
        this.is_valid_email = false;
        this.success_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].success_url;
    };
    PayPageComponent.prototype.onEmailChange = function () {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.email_addr)) {
            this.is_valid_email = true;
        }
        else {
            this.is_valid_email = false;
        }
    };
    PayPageComponent.prototype.getLogoUrl = function () {
        var default_url = "http://pngimg.com//uploads/bmw_logo/bmw_logo_PNG19707.png";
        if (!this.carInfo)
            return default_url;
        if (this.carInfo.carmake && this.carInfo.id != -1) {
            default_url = "http://autoszafa.autoszafa.eu/Logos/" + this.carInfo.carmake.toLowerCase() + ".png";
        }
        return default_url;
    };
    PayPageComponent.prototype._generateChk = function (order_id) {
        var amount = 123;
        var id = 760691;
        var description = "Pay to Generating Report of Vehicle";
        this.urlc = "http://autoszafa.autoszafa.eu:8000/dotpay/callback/?order_id=" + order_id;
        this.success_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].success_url + ("/?order_id=" + order_id);
        return Object(js_sha256__WEBPACK_IMPORTED_MODULE_3__["sha256"])(this.pin + this.id + this.amount + this.currency + this.description + order_id + this.success_url + 4 + this.urlc);
        // return sha256(this.pin +this.pid + order_id); 
    };
    PayPageComponent.prototype.dotPay = function () {
        var _this = this;
        if (!this.carInfo)
            return;
        if (!this.is_valid_email)
            return;
        if (!this.email_addr)
            return;
        var searched_number = this.carInfo.vin;
        if (vin_validator__WEBPACK_IMPORTED_MODULE_6__["validate"](searched_number)) {
            this.mainService.searchedCarInfo = this.carInfo;
            var windowReference = window.open();
            this.mainService.SendReportReuest(searched_number, this.email_addr).subscribe(function (ret_value) {
                console.log(ret_value);
                if (ret_value['status'] == 'OK') {
                    // dotpay
                    // Add RequestId to the Control. CHK
                    var order_id = ret_value['order_id'];
                    var chk = _this._generateChk(order_id);
                    var url = _this.dotpayUrl + ("/?chk=" + chk + "&id=" + _this.id + "&amount=" + _this.amount + "&currency=" + _this.currency + "&description=" + _this.description + "&control=" + order_id + "&urlc=" + _this.urlc + "&url=" + _this.success_url + "&type=4");
                    windowReference.location.href = url;
                }
            });
        }
    };
    PayPageComponent.ctorParameters = function () { return [
        { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    PayPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pay-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pay-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pay-page/pay-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pay-page.component.scss */ "./src/app/pay-page/pay-page.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], PayPageComponent);
    return PayPageComponent;
}());



/***/ }),

/***/ "./src/app/post-page/post-page.component.css":
/*!***************************************************!*\
  !*** ./src/app/post-page/post-page.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* :host ::ng-deep .ck-editor__editable_inline {\r\n    min-height: 500px;\r\n} */\r\n.section-editor{\r\n    padding: 10px 0px;\r\n}\r\n.title{\r\n    text-align: center;    \r\n}\r\n.image-wrap {\r\n    padding: 10px;\r\n    border: solid 1px #e0e0e0;\r\n    display: inline-block;\r\n}\r\n.img-space {\r\n    border: dashed 1px #d3d3d3;\r\n    border-radius: 8px;\r\n    background-color: #f2f2f2;\r\n    height: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n    min-height:175px;\r\n}\r\n.img-space img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    margin: auto;\r\n    cursor: pointer;\r\n}\r\n.fileInputProfileWrap {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n.fileInputProfile {\r\n    position: absolute;\r\n    height: 100%;\r\n    width: 100%;\r\n    z-index: 99;\r\n    opacity: 0;\r\n}\r\n.fileInputProfile[disabled] + .img-space{\r\n    pointer-events: none;\r\n    cursor: not-allowed!important;\r\n}\r\n.btn-remove{\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    z-index: 100;\r\n}\r\n.invalid .form-control{\r\n    border-color:#FF3636;\r\n}\r\n.invalid-feedback{\r\n    display: none;\r\n    padding-left: 10px;\r\n    color: #FF3636;\r\n}\r\n.invalid .invalid-feedback {\r\n    display: block;\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdC1wYWdlL3Bvc3QtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBQ0g7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsVUFBVTtBQUNkO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYzs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0LXBhZ2UvcG9zdC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA6aG9zdCA6Om5nLWRlZXAgLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG59ICovXHJcbi5zZWN0aW9uLWVkaXRvcntcclxuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG59XHJcbi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXHJcbn1cclxuLmltYWdlLXdyYXAge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJvcmRlcjogc29saWQgMXB4ICNlMGUwZTA7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbWctc3BhY2Uge1xyXG4gICAgYm9yZGVyOiBkYXNoZWQgMXB4ICNkM2QzZDM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDoxNzVweDtcclxufVxyXG5cclxuLmltZy1zcGFjZSBpbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmZpbGVJbnB1dFByb2ZpbGVXcmFwIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZmlsZUlucHV0UHJvZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG4uZmlsZUlucHV0UHJvZmlsZVtkaXNhYmxlZF0gKyAuaW1nLXNwYWNle1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkIWltcG9ydGFudDtcclxufVxyXG4uYnRuLXJlbW92ZXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgei1pbmRleDogMTAwO1xyXG59XHJcbi5pbnZhbGlkIC5mb3JtLWNvbnRyb2x7XHJcbiAgICBib3JkZXItY29sb3I6I0ZGMzYzNjtcclxufVxyXG4uaW52YWxpZC1mZWVkYmFja3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBjb2xvcjogI0ZGMzYzNjtcclxufVxyXG4uaW52YWxpZCAuaW52YWxpZC1mZWVkYmFjayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/post-page/post-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/post-page/post-page.component.ts ***!
  \**************************************************/
/*! exports provided: PostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostPageComponent", function() { return PostPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var app_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/main.service */ "./src/app/main.service.ts");




var PostPageComponent = /** @class */ (function () {
    function PostPageComponent(mainService) {
        this.mainService = mainService;
        this.postForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'mainImg': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('Main Content', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.config = {
            editable: true,
            spellcheck: true,
            height: '15rem',
            minHeight: '5rem',
            placeholder: 'Enter text here...',
            translate: 'no',
            defaultParagraphSeparator: 'p',
            defaultFontName: 'Arial',
            toolbarHiddenButtons: [
                ['bold']
            ],
            customClasses: [
                {
                    name: "quote",
                    class: "quote",
                },
                {
                    name: 'redText',
                    class: 'redText'
                },
                {
                    name: "titleText",
                    class: "titleText",
                    tag: "h1",
                },
            ]
        };
    }
    PostPageComponent.prototype.ngOnInit = function () {
    };
    PostPageComponent.prototype.onSubmit = function () {
        console.log(this.postForm);
        if (this.postForm.valid) {
            var formData = new FormData();
            alert(this.postForm.get('title').value);
            formData.append('mainImg', this.postForm.get('mainImg').value);
            formData.append('title', this.postForm.get('title').value);
            formData.append('content', this.postForm.get('content').value);
            console.log(formData);
            this.mainService.PostBlog(formData).subscribe(function (ret_value) {
                console.log(ret_value);
            });
        }
        else {
            this.validateAllFormFields(this.postForm);
        }
    };
    PostPageComponent.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field); //{3}
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) { //{4}
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) { //{5}
                _this.validateAllFormFields(control); //{6}
            }
        });
    };
    PostPageComponent.prototype.isInvalid = function (field_name) {
        var control = this.postForm.get(field_name);
        return control.invalid && (control.dirty || control.touched);
    };
    Object.defineProperty(PostPageComponent.prototype, "f", {
        get: function () { return this.postForm.controls; },
        enumerable: true,
        configurable: true
    });
    PostPageComponent.prototype.fileChangeEvent = function (fileInput) {
        var _this = this;
        this.imageError = null;
        if (fileInput.target.files && fileInput.target.files[0]) {
            // Size Filter Bytes
            var max_size = 20971520;
            var allowed_types = ['image/png', 'image/jpeg'];
            var max_height = 15200;
            var max_width = 25600;
            // if (fileInput.target.files[0].size > max_size) {
            //     this.imageError =
            //         'Maximum size allowed is ' + max_size / 1000 + 'Mb';
            //     return false;
            // }
            // if (!_.includes(allowed_types, fileInput.target.files[0].type)) {
            //     this.imageError = 'Only Images are allowed ( JPG | PNG )';
            //     return false;
            // }
            var reader = new FileReader();
            reader.onload = function (e) {
                var image = new Image();
                image.src = e.target.result;
                image.onload = function (rs) {
                    var img_height = rs.currentTarget['height'];
                    var img_width = rs.currentTarget['width'];
                    console.log(img_height, img_width);
                    // if (img_height > max_height && img_width > max_width) {
                    //     this.imageError =
                    //         'Maximum dimentions allowed ' +
                    //         max_height +
                    //         '*' +
                    //         max_width +
                    //         'px';
                    //     return false;
                    // } else {
                    //     const imgBase64Path = e.target.result;
                    //     this.cardImageBase64 = imgBase64Path;
                    //     this.isImageSaved = true;
                    //     // this.previewImagePath = imgBase64Path;
                    // }
                    var imgBase64Path = e.target.result;
                    _this.cardImageBase64 = imgBase64Path;
                    _this.isImageSaved = true;
                };
            };
            var file = fileInput.target.files[0];
            this.postForm.get('mainImg').setValue(file);
            reader.readAsDataURL(fileInput.target.files[0]);
        }
        else {
        }
    };
    PostPageComponent.prototype.removeImage = function () {
        this.cardImageBase64 = null;
        this.isImageSaved = false;
        this.postForm.get('mainImg').setValue(null);
    };
    PostPageComponent.ctorParameters = function () { return [
        { type: app_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
    ]; };
    PostPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-post-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./post-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/post-page/post-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./post-page.component.css */ "./src/app/post-page/post-page.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [app_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]])
    ], PostPageComponent);
    return PostPageComponent;
}());



/***/ }),

/***/ "./src/app/search-page/search-page.component.css":
/*!*******************************************************!*\
  !*** ./src/app/search-page/search-page.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".section-search input{\r\n    font-size: 15px;\r\n}\r\n@media (min-width: 576px){\r\n  .section-search input{\r\n      font-size: 20px;\r\n  }\r\n}\r\n.section-result{\r\n    background-color:#e9e9e9 ;\r\n    position: relative;\r\n}\r\n.car-logo-img{\r\n    display: inline-flex;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 50%;\r\n    background-color: white;\r\n    justify-content: center; \r\n    align-items: center;\r\n}\r\n.arrow-down::after{\r\n    content: '';\r\n    width: 0;\r\n    height: 0;\r\n    display: block;\r\n    position: absolute;\r\n    z-index: 10;\r\n    border: 0;\r\n    border-left: 10px solid transparent;\r\n    border-right: 10px solid transparent;\r\n    margin-left: -10px;\r\n    left: 50%;\r\n    border-top: 10px solid #e9e9e9;\r\n    bottom: -10px;\r\n}\r\n.car-info-item{\r\n    text-align: left;\r\n    position: absolute;\r\n}\r\n.car-info-item span{\r\n    font-size: 0.7em;\r\n    font-weight: 800;    \r\n}\r\n.car-logo-img img{\r\n    /* width: 100%;     */\r\n    max-width: 50px;\r\n    /* border-color: white;\r\n    border-width: 8px;\r\n    border-radius: 50%;\r\n    border-style: solid; */\r\n}\r\nh4, h6{\r\n    font-weight: 800;\r\n}\r\n.car-make{\r\n    left: 330px; top: 29px;\r\n}\r\n.car-model{\r\n    left: 355px; top: 150px;\r\n}\r\n.car-engine{\r\n    left: 340px; top: 265px;\r\n}\r\n.car-year{\r\n    left: 223px; top: 358px;\r\n}\r\n.car-photos{\r\n    left: 80px; top: 358px;\r\n}\r\n.car-founded{\r\n    left: 70px; top: 135px;\r\n    text-align: center;\r\n}\r\n.blur-img{\r\n     /* Add the blur effect */\r\n  filter: blur(4px);\r\n  -webkit-filter: blur(4px);\r\n}\r\n.dotpay-btn{\r\n    width: 300px;\r\n    height: 180px;\r\n    padding: 12px 6px;\r\n}\r\n.dotpay-btn .ui-1_check{\r\n    font-size: 1.93em;\r\n    padding:10px;    \r\n    font-weight: 900;\r\n    border: solid;\r\n    border-radius: 50%;\r\n    vertical-align: middle;\r\n}\r\n.dotpay-btn h5, .dotpay-btn h4{\r\n    margin: 0px;\r\n}\r\n@media (max-width: 375px){\r\n    h4, h5,h6{\r\n        text-align: center;\r\n    }\r\n    .car-make{\r\n        left: 245px; top: 5px;\r\n    }\r\n    .car-model{\r\n        left: 275px; top: 105px;\r\n    }\r\n    .car-engine{\r\n        left: 265px; top: 200px;\r\n    }\r\n    .car-year{\r\n        left: 173px; top: 268px;\r\n    }\r\n    .car-photos{\r\n        left: 58px; top: 268px;\r\n    }\r\n    .car-founded{\r\n        left: 40px; top: 95px;\r\n    }\r\n    .btn-row{\r\n        justify-content: center!important;\r\n    }\r\n}\r\n.loading-spin{\r\n    position: absolute;\r\n    width: 100vw;\r\n    height: 100vh;\r\n    top: 0px;\r\n    z-index: 20;\r\n    /* background-image: linear-gradient(-105deg, #bcc0c1, #707075); */\r\n    background-image: url(https://www.carvertical.com/static/mileage-fraud.6d02e6e7.jpg);\r\n}\r\n.spinner {\r\n    -webkit-animation: rotate 2s linear infinite;\r\n            animation: rotate 2s linear infinite;\r\n    z-index: 2;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin: -25px 0 0 -25px;\r\n    width: 50px;\r\n    height: 50px;\r\n  }\r\n.spinner .path {\r\n    stroke: #ffffff;\r\n    stroke-linecap: round;\r\n    -webkit-animation: dash 1.5s ease-in-out infinite;\r\n            animation: dash 1.5s ease-in-out infinite;\r\n  }\r\n@-webkit-keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n@keyframes rotate {\r\n    100% {\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n@-webkit-keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n@keyframes dash {\r\n    0% {\r\n      stroke-dasharray: 1, 150;\r\n      stroke-dashoffset: 0;\r\n    }\r\n    50% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -35;\r\n    }\r\n    100% {\r\n      stroke-dasharray: 90, 150;\r\n      stroke-dashoffset: -124;\r\n    }\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXBhZ2Uvc2VhcmNoLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtFQUNFO01BQ0ksZUFBZTtFQUNuQjtBQUNGO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxtQ0FBbUM7SUFDbkMsb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsOEJBQThCO0lBQzlCLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Y7OzswQkFHc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVyxFQUFFLFNBQVM7QUFDMUI7QUFDQTtJQUNJLFdBQVcsRUFBRSxVQUFVO0FBQzNCO0FBQ0E7SUFDSSxXQUFXLEVBQUUsVUFBVTtBQUMzQjtBQUNBO0lBQ0ksV0FBVyxFQUFFLFVBQVU7QUFDM0I7QUFDQTtJQUNJLFVBQVUsRUFBRSxVQUFVO0FBQzFCO0FBQ0E7SUFDSSxVQUFVLEVBQUUsVUFBVTtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtLQUNLLHdCQUF3QjtFQUMzQixpQkFBaUI7RUFDakIseUJBQXlCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFdBQVcsRUFBRSxRQUFRO0lBQ3pCO0lBQ0E7UUFDSSxXQUFXLEVBQUUsVUFBVTtJQUMzQjtJQUNBO1FBQ0ksV0FBVyxFQUFFLFVBQVU7SUFDM0I7SUFDQTtRQUNJLFdBQVcsRUFBRSxVQUFVO0lBQzNCO0lBQ0E7UUFDSSxVQUFVLEVBQUUsVUFBVTtJQUMxQjtJQUNBO1FBQ0ksVUFBVSxFQUFFLFNBQVM7SUFDekI7SUFDQTtRQUNJLGlDQUFpQztJQUNyQztBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixRQUFRO0lBQ1IsV0FBVztJQUNYLGtFQUFrRTtJQUNsRSxvRkFBb0Y7QUFDeEY7QUFDQTtJQUNJLDRDQUE0QztZQUNwQyxvQ0FBb0M7SUFDNUMsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsWUFBWTtFQUNkO0FBQ0E7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGlEQUFpRDtZQUN6Qyx5Q0FBeUM7RUFDbkQ7QUFFQTtJQUNFO01BRVUseUJBQXlCO0lBQ25DO0VBQ0Y7QUFFQTtJQUNFO01BRVUseUJBQXlCO0lBQ25DO0VBQ0Y7QUFDQTtJQUNFO01BQ0Usd0JBQXdCO01BQ3hCLG9CQUFvQjtJQUN0QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHNCQUFzQjtJQUN4QjtJQUNBO01BQ0UseUJBQXlCO01BQ3pCLHVCQUF1QjtJQUN6QjtFQUNGO0FBQ0E7SUFDRTtNQUNFLHdCQUF3QjtNQUN4QixvQkFBb0I7SUFDdEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6QixzQkFBc0I7SUFDeEI7SUFDQTtNQUNFLHlCQUF5QjtNQUN6Qix1QkFBdUI7SUFDekI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC1wYWdlL3NlYXJjaC1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvbi1zZWFyY2ggaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KXtcclxuICAuc2VjdGlvbi1zZWFyY2ggaW5wdXR7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbn1cclxuLnNlY3Rpb24tcmVzdWx0e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZTllOWU5IDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2FyLWxvZ28taW1ne1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmFycm93LWRvd246OmFmdGVye1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIGhlaWdodDogMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1yaWdodDogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIGJvcmRlci10b3A6IDEwcHggc29saWQgI2U5ZTllOTtcclxuICAgIGJvdHRvbTogLTEwcHg7XHJcbn1cclxuLmNhci1pbmZvLWl0ZW17XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi5jYXItaW5mby1pdGVtIHNwYW57XHJcbiAgICBmb250LXNpemU6IDAuN2VtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDsgICAgXHJcbn1cclxuLmNhci1sb2dvLWltZyBpbWd7XHJcbiAgICAvKiB3aWR0aDogMTAwJTsgICAgICovXHJcbiAgICBtYXgtd2lkdGg6IDUwcHg7XHJcbiAgICAvKiBib3JkZXItY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXdpZHRoOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkOyAqL1xyXG59XHJcbmg0LCBoNntcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuLmNhci1tYWtle1xyXG4gICAgbGVmdDogMzMwcHg7IHRvcDogMjlweDtcclxufVxyXG4uY2FyLW1vZGVse1xyXG4gICAgbGVmdDogMzU1cHg7IHRvcDogMTUwcHg7XHJcbn1cclxuLmNhci1lbmdpbmV7XHJcbiAgICBsZWZ0OiAzNDBweDsgdG9wOiAyNjVweDtcclxufVxyXG4uY2FyLXllYXJ7XHJcbiAgICBsZWZ0OiAyMjNweDsgdG9wOiAzNThweDtcclxufVxyXG4uY2FyLXBob3Rvc3tcclxuICAgIGxlZnQ6IDgwcHg7IHRvcDogMzU4cHg7XHJcbn1cclxuLmNhci1mb3VuZGVke1xyXG4gICAgbGVmdDogNzBweDsgdG9wOiAxMzVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmx1ci1pbWd7XHJcbiAgICAgLyogQWRkIHRoZSBibHVyIGVmZmVjdCAqL1xyXG4gIGZpbHRlcjogYmx1cig0cHgpO1xyXG4gIC13ZWJraXQtZmlsdGVyOiBibHVyKDRweCk7XHJcbn1cclxuLmRvdHBheS1idG57XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDE4MHB4O1xyXG4gICAgcGFkZGluZzogMTJweCA2cHg7XHJcbn1cclxuLmRvdHBheS1idG4gLnVpLTFfY2hlY2t7XHJcbiAgICBmb250LXNpemU6IDEuOTNlbTtcclxuICAgIHBhZGRpbmc6MTBweDsgICAgXHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgYm9yZGVyOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuLmRvdHBheS1idG4gaDUsIC5kb3RwYXktYnRuIGg0e1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDM3NXB4KXtcclxuICAgIGg0LCBoNSxoNntcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuY2FyLW1ha2V7XHJcbiAgICAgICAgbGVmdDogMjQ1cHg7IHRvcDogNXB4O1xyXG4gICAgfVxyXG4gICAgLmNhci1tb2RlbHtcclxuICAgICAgICBsZWZ0OiAyNzVweDsgdG9wOiAxMDVweDtcclxuICAgIH1cclxuICAgIC5jYXItZW5naW5le1xyXG4gICAgICAgIGxlZnQ6IDI2NXB4OyB0b3A6IDIwMHB4O1xyXG4gICAgfVxyXG4gICAgLmNhci15ZWFye1xyXG4gICAgICAgIGxlZnQ6IDE3M3B4OyB0b3A6IDI2OHB4O1xyXG4gICAgfVxyXG4gICAgLmNhci1waG90b3N7XHJcbiAgICAgICAgbGVmdDogNThweDsgdG9wOiAyNjhweDtcclxuICAgIH1cclxuICAgIC5jYXItZm91bmRlZHtcclxuICAgICAgICBsZWZ0OiA0MHB4OyB0b3A6IDk1cHg7XHJcbiAgICB9XHJcbiAgICAuYnRuLXJvd3tcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbn1cclxuLmxvYWRpbmctc3BpbntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xMDVkZWcsICNiY2MwYzEsICM3MDcwNzUpOyAqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd3d3LmNhcnZlcnRpY2FsLmNvbS9zdGF0aWMvbWlsZWFnZS1mcmF1ZC42ZDAyZTZlNy5qcGcpO1xyXG59XHJcbi5zcGlubmVyIHtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiByb3RhdGUgMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0ZSAycyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICBtYXJnaW46IC0yNXB4IDAgMCAtMjVweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAuc3Bpbm5lciAucGF0aCB7XHJcbiAgICBzdHJva2U6ICNmZmZmZmY7XHJcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZGFzaCAxLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlO1xyXG4gICAgICAgICAgICBhbmltYXRpb246IGRhc2ggMS41cyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0ZSB7XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgcm90YXRlIHtcclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC13ZWJraXQta2V5ZnJhbWVzIGRhc2gge1xyXG4gICAgMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiAxLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0zNTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICBzdHJva2UtZGFzaGFycmF5OiA5MCwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogLTEyNDtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBkYXNoIHtcclxuICAgIDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMSwgMTUwO1xyXG4gICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHN0cm9rZS1kYXNoYXJyYXk6IDkwLCAxNTA7XHJcbiAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMzU7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgc3Ryb2tlLWRhc2hhcnJheTogOTAsIDE1MDtcclxuICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0xMjQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/search-page/search-page.component.ts":
/*!******************************************************!*\
  !*** ./src/app/search-page/search-page.component.ts ***!
  \******************************************************/
/*! exports provided: SearchPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageComponent", function() { return SearchPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _model_carinfo_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../model/carinfo.model */ "./src/app/model/carinfo.model.ts");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../main.service */ "./src/app/main.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vin-validator */ "./node_modules/vin-validator/index.js");
/* harmony import */ var vin_validator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vin_validator__WEBPACK_IMPORTED_MODULE_5__);






var SearchPageComponent = /** @class */ (function () {
    function SearchPageComponent(mainService, route, router) {
        this.mainService = mainService;
        this.route = route;
        this.router = router;
        this.isLoading = true;
        this.carInfo = new _model_carinfo_model__WEBPACK_IMPORTED_MODULE_2__["CarInfoModel"]();
    }
    SearchPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vin_number = this.route.snapshot.paramMap.get('vin_number');
        this.is_validvin = true;
        this.mainService.SearchVin(this.vin_number).subscribe(function (ret_value) {
            _this.isLoading = false;
            _this.carInfo = ret_value;
            _this.carInfo.vin = _this.vin_number;
            _this.searched_number = _this.vin_number;
        });
    };
    SearchPageComponent.prototype.onchange = function () {
        this.is_validvin = vin_validator__WEBPACK_IMPORTED_MODULE_5__["validate"](this.vin_number);
        console.log(this.is_validvin);
    };
    SearchPageComponent.prototype.search = function () {
        var _this = this;
        if (this.is_validvin) {
            this.isLoading = true;
            this.carInfo.id = -1;
            this.mainService.SearchVin(this.vin_number).subscribe(function (ret_value) {
                _this.isLoading = false;
                _this.carInfo = ret_value;
                if (ret_value['status'] != 'OK')
                    _this.carInfo['id'] = -1;
                _this.carInfo.vin = _this.vin_number;
                _this.searched_number = _this.vin_number;
            });
        }
    };
    SearchPageComponent.prototype.GoToPayPage = function () {
        if (!this.carInfo)
            return;
        if (this.carInfo.id == -1)
            return;
        this.mainService.searchedCarInfo = this.carInfo;
        this.router.navigate(['/pay']);
    };
    SearchPageComponent.prototype.getLogoUrl = function () {
        var default_url = "http://pngimg.com//uploads/bmw_logo/bmw_logo_PNG19707.png";
        if (this.carInfo.carmake && this.carInfo.id != -1) {
            default_url = "http://autoszafa.autoszafa.eu/Logos/" + this.carInfo.carmake.toLowerCase() + ".png";
        }
        return default_url;
    };
    SearchPageComponent.ctorParameters = function () { return [
        { type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    SearchPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-page',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./search-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/search-page/search-page.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./search-page.component.css */ "./src/app/search-page/search-page.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".site-footer\r\n{\r\n  background-color:#26272b;\r\n  padding:45px 0 20px;\r\n  font-size:15px;\r\n  line-height:24px;\r\n  color:#737373;\r\n}\r\n.site-footer hr\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\r\n}\r\n.site-footer hr.small\r\n{\r\n  margin:20px 0\r\n}\r\n.site-footer h6\r\n{\r\n  color:#fff;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\r\n}\r\n.site-footer a\r\n{\r\n  color:#737373;\r\n}\r\n.site-footer a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links\r\n{\r\n  padding-left:0;\r\n  list-style:none\r\n}\r\n.footer-links li\r\n{\r\n  display:block\r\n}\r\n.footer-links a\r\n{\r\n  color:#737373\r\n}\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links.inline li\r\n{\r\n  display:inline-block\r\n}\r\n.site-footer .social-icons\r\n{\r\n  text-align:right\r\n}\r\n.site-footer .social-icons a\r\n{\r\n  width:40px;\r\n  height:40px;\r\n  line-height:40px;\r\n  margin-left:6px;\r\n  margin-right:0;\r\n  border-radius:100%;\r\n  background-color:#33353d\r\n}\r\n.copyright-text\r\n{\r\n  margin:0\r\n}\r\n@media (max-width:991px)\r\n{\r\n  .site-footer [class^=col-]\r\n  {\r\n    margin-bottom:30px\r\n  }\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .site-footer\r\n  {\r\n    padding-bottom:0\r\n  }\r\n  .site-footer .copyright-text,.site-footer .social-icons\r\n  {\r\n    text-align:center\r\n  }\r\n}\r\n.social-icons\r\n{\r\n  padding-left:0;\r\n  margin-bottom:0;\r\n  list-style:none\r\n}\r\n.social-icons li\r\n{\r\n  display:inline-block;\r\n  margin-bottom:4px\r\n}\r\n.social-icons li.title\r\n{\r\n  margin-right:15px;\r\n  text-transform:uppercase;\r\n  color:#96a2b2;\r\n  font-weight:700;\r\n  font-size:13px\r\n}\r\n.social-icons a{\r\n  background-color:#eceeef;\r\n  color:#818a91;\r\n  font-size:16px;\r\n  display:inline-block;\r\n  line-height:44px;\r\n  width:44px;\r\n  height:44px;\r\n  text-align:center;\r\n  margin-right:8px;\r\n  border-radius:100%;\r\n  transition:all .2s linear\r\n}\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n{\r\n  color:#fff;\r\n  background-color:#29aafe\r\n}\r\n.social-icons.size-sm a\r\n{\r\n  line-height:34px;\r\n  height:34px;\r\n  width:34px;\r\n  font-size:14px\r\n}\r\n.social-icons a.facebook:hover\r\n{\r\n  background-color:#3b5998\r\n}\r\n.social-icons a.twitter:hover\r\n{\r\n  background-color:#00aced\r\n}\r\n.social-icons a.linkedin:hover\r\n{\r\n  background-color:#007bb6\r\n}\r\n.social-icons a.dribbble:hover\r\n{\r\n  background-color:#ea4c89\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .social-icons li.title\r\n  {\r\n    display:block;\r\n    margin-right:0;\r\n    font-weight:600\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSx3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUscUJBQXFCO0VBQ3JCO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUUsVUFBVTtFQUNWLGNBQWM7RUFDZCx3QkFBd0I7RUFDeEIsY0FBYztFQUNkO0FBQ0Y7QUFDQTs7RUFFRSxhQUFhO0FBQ2Y7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUUsY0FBYztFQUNkO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7O0lBRUU7RUFDRjtBQUNGO0FBQ0E7O0VBRUU7O0lBRUU7RUFDRjtFQUNBOztJQUVFO0VBQ0Y7QUFDRjtBQUNBOztFQUVFLGNBQWM7RUFDZCxlQUFlO0VBQ2Y7QUFDRjtBQUNBOztFQUVFLG9CQUFvQjtFQUNwQjtBQUNGO0FBQ0E7O0VBRUUsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZUFBZTtFQUNmO0FBQ0Y7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsY0FBYztFQUNkLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUdsQjtBQUNGO0FBQ0E7O0VBRUUsVUFBVTtFQUNWO0FBQ0Y7QUFDQTs7RUFFRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVjtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFOztJQUVFLGFBQWE7SUFDYixjQUFjO0lBQ2Q7RUFDRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaXRlLWZvb3RlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjYyNzJiO1xyXG4gIHBhZGRpbmc6NDVweCAwIDIwcHg7XHJcbiAgZm9udC1zaXplOjE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6MjRweDtcclxuICBjb2xvcjojNzM3MzczO1xyXG59XHJcbi5zaXRlLWZvb3RlciBoclxyXG57XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjojYmJiO1xyXG4gIG9wYWNpdHk6MC41XHJcbn1cclxuLnNpdGUtZm9vdGVyIGhyLnNtYWxsXHJcbntcclxuICBtYXJnaW46MjBweCAwXHJcbn1cclxuLnNpdGUtZm9vdGVyIGg2XHJcbntcclxuICBjb2xvcjojZmZmO1xyXG4gIGZvbnQtc2l6ZToxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOjVweDtcclxuICBsZXR0ZXItc3BhY2luZzoycHhcclxufVxyXG4uc2l0ZS1mb290ZXIgYVxyXG57XHJcbiAgY29sb3I6IzczNzM3MztcclxufVxyXG4uc2l0ZS1mb290ZXIgYTpob3ZlclxyXG57XHJcbiAgY29sb3I6IzMzNjZjYztcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9vdGVyLWxpbmtzXHJcbntcclxuICBwYWRkaW5nLWxlZnQ6MDtcclxuICBsaXN0LXN0eWxlOm5vbmVcclxufVxyXG4uZm9vdGVyLWxpbmtzIGxpXHJcbntcclxuICBkaXNwbGF5OmJsb2NrXHJcbn1cclxuLmZvb3Rlci1saW5rcyBhXHJcbntcclxuICBjb2xvcjojNzM3MzczXHJcbn1cclxuLmZvb3Rlci1saW5rcyBhOmFjdGl2ZSwuZm9vdGVyLWxpbmtzIGE6Zm9jdXMsLmZvb3Rlci1saW5rcyBhOmhvdmVyXHJcbntcclxuICBjb2xvcjojMzM2NmNjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGlua3MuaW5saW5lIGxpXHJcbntcclxuICBkaXNwbGF5OmlubGluZS1ibG9ja1xyXG59XHJcbi5zaXRlLWZvb3RlciAuc29jaWFsLWljb25zXHJcbntcclxuICB0ZXh0LWFsaWduOnJpZ2h0XHJcbn1cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnMgYVxyXG57XHJcbiAgd2lkdGg6NDBweDtcclxuICBoZWlnaHQ6NDBweDtcclxuICBsaW5lLWhlaWdodDo0MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OjZweDtcclxuICBtYXJnaW4tcmlnaHQ6MDtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMzMzNTNkXHJcbn1cclxuLmNvcHlyaWdodC10ZXh0XHJcbntcclxuICBtYXJnaW46MFxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk5MXB4KVxyXG57XHJcbiAgLnNpdGUtZm9vdGVyIFtjbGFzc149Y29sLV1cclxuICB7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHhcclxuICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6NzY3cHgpXHJcbntcclxuICAuc2l0ZS1mb290ZXJcclxuICB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTowXHJcbiAgfVxyXG4gIC5zaXRlLWZvb3RlciAuY29weXJpZ2h0LXRleHQsLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxuICB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlclxyXG4gIH1cclxufVxyXG4uc29jaWFsLWljb25zXHJcbntcclxuICBwYWRkaW5nLWxlZnQ6MDtcclxuICBtYXJnaW4tYm90dG9tOjA7XHJcbiAgbGlzdC1zdHlsZTpub25lXHJcbn1cclxuLnNvY2lhbC1pY29ucyBsaVxyXG57XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTo0cHhcclxufVxyXG4uc29jaWFsLWljb25zIGxpLnRpdGxlXHJcbntcclxuICBtYXJnaW4tcmlnaHQ6MTVweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgY29sb3I6Izk2YTJiMjtcclxuICBmb250LXdlaWdodDo3MDA7XHJcbiAgZm9udC1zaXplOjEzcHhcclxufVxyXG4uc29jaWFsLWljb25zIGF7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZWNlZWVmO1xyXG4gIGNvbG9yOiM4MThhOTE7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgbGluZS1oZWlnaHQ6NDRweDtcclxuICB3aWR0aDo0NHB4O1xyXG4gIGhlaWdodDo0NHB4O1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIG1hcmdpbi1yaWdodDo4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gIHRyYW5zaXRpb246YWxsIC4ycyBsaW5lYXJcclxufVxyXG4uc29jaWFsLWljb25zIGE6YWN0aXZlLC5zb2NpYWwtaWNvbnMgYTpmb2N1cywuc29jaWFsLWljb25zIGE6aG92ZXJcclxue1xyXG4gIGNvbG9yOiNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMjlhYWZlXHJcbn1cclxuLnNvY2lhbC1pY29ucy5zaXplLXNtIGFcclxue1xyXG4gIGxpbmUtaGVpZ2h0OjM0cHg7XHJcbiAgaGVpZ2h0OjM0cHg7XHJcbiAgd2lkdGg6MzRweDtcclxuICBmb250LXNpemU6MTRweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYS5mYWNlYm9vazpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojM2I1OTk4XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLnR3aXR0ZXI6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzAwYWNlZFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYS5saW5rZWRpbjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA3YmI2XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmRyaWJiYmxlOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlYTRjODlcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweClcclxue1xyXG4gIC5zb2NpYWwtaWNvbnMgbGkudGl0bGVcclxuICB7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OjA7XHJcbiAgICBmb250LXdlaWdodDo2MDBcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");



var FooterComponent = /** @class */ (function () {
    function FooterComponent(mainService) {
        this.mainService = mainService;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
    ]; };
    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/shared/footer/footer.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../main.service */ "./src/app/main.service.ts");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, mainService, element) {
        this.location = location;
        this.mainService = mainService;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false,
    api_base_url: "http://192.168.208.75:8000",
    asset_base_url: "http://192.168.208.75:8000/static",
    dot_pay_url: "https://ssl.dotpay.pl/test_payment",
    sample_pdf_url: "/assets/VIN_REPORT_SAMPLE.pdf",
    success_url: "127.0.0.1:4200/get-report"
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*!

=========================================================
* Now UI Kit Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\DOWNLOAD\Employers\MIchael Postek\VinApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map