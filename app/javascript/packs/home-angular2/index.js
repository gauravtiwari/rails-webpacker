/* global Routes */

import { Component } from 'angular2/core';

export default class HomeComponent {
  constructor () {
    this.sidebar = 'I am sidebar';
    this.container = 'I am container';
  }
}

HomeComponent.annotations = [
  new Component({
    selector: 'home-component-angular',
    template: `<main>
                <div class="container">
                  <h1>{{ container }}</h1>
                </div>
                <aside>
                  <h1>{{ sidebar }}</h1>
                </aside>
                <div class="demos-nav">
                  <a
                    class="block"
                    href="${Routes.home_vue_path()}"
                  >
                    Home page(vue version)
                  </a>
                  <a class="block" href="${Routes.lists_path()}">
                    Lists page (react)
                  </a>
                  <a class="block" href="${Routes.lists_vue_path()}">
                    Lists page (vue)
                  </a>
                  <a class="block" href="${Routes.home_router_path()}">
                    App page (react-router)
                  </a>
                </div>
              </main>`
  })
];
