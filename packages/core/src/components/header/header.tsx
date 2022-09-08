import { Component, h, Element, State, Listen } from '@stencil/core';
import { matchBreakpoint } from '../../utils/media';

@Component({
  tag: 'fr-header',
  styleUrl: 'header.scss',
  shadow: true,
})
export class Header {
  /**
   * element
   */
  @Element() el!: HTMLElement;

  private searchId = `btn-search-${searchId++}`;
  private navId = `btn-nav-${navId++}`;
  @State() desktopDevice: boolean = false;


  private navButton = (
    <fr-btn icon-only btn-nav-menu modal-opener-id={this.navId}>
      <fr-icon slot="left" name="menu-fill"></fr-icon>
    </fr-btn>
  );
  private searchButton = (
    <fr-btn icon-only btn-nav-search modal-opener-id={this.searchId}>
      <fr-icon slot="left" name="search-line"></fr-icon>
    </fr-btn>
  );

  private hasButtonSearch: boolean = false;
  private hasButtonNav: boolean = false;

  private templateNavBar;

  connectedCallback() {
    this.desktopDevice = matchBreakpoint('desktop');
  }

  @Listen('resize', { target: 'window' })
  onResize() {
    const desktop = matchBreakpoint('desktop');
    if (desktop !== this.desktopDevice) {
      this.desktopDevice = desktop;
    }
  }

  componentWillLoad() {
    this.hasButtonSearch = !!this.el.querySelector('[slot="search"]');
    this.hasButtonNav = !!this.el.querySelector('[slot="navigation"]') || !!this.el.querySelector('[slot="header-tools-links"]');
    if (this.hasButtonSearch && this.hasButtonNav) {
      this.templateNavBar = (
        <div class="fr-header__navbar">
          {this.searchButton}
          {this.navButton}
        </div>
      );
    } else if (this.hasButtonSearch && !this.hasButtonNav) {
      this.templateNavBar = <div class="fr-header__navbar">{this.searchButton}</div>;
    } else if (!this.hasButtonSearch && this.hasButtonNav) {
      this.templateNavBar = <div class="fr-header__navbar">{this.navButton}</div>;
    }
  }

  render() {
    return (
      <header role="banner" class="fr-header">
        <div class="fr-header__body">
          <fr-container>
            <div class="fr-header__body-row">
              <div class="fr-header__brand fr-enlarge-link">
                <div class="fr-header__brand-top">
                  <slot name="logo"></slot>
                  {this.templateNavBar}
                </div>
                <slot name="header-service"></slot>
              </div>
              <div class="fr-header__tools">
                {this.desktopDevice == true ? <slot name="header-tools-links"></slot> : null}
                <div class="fr-header__search">{this.desktopDevice == true ? <slot name="search"></slot> : null}</div>
              </div>
            </div>
          </fr-container>
        </div>
        <div class="fr-header__menu">
          <fr-container>{this.desktopDevice == true ? <slot name="navigation"></slot> : null}</fr-container>
        </div>

        <fr-modal header-modal frId={this.searchId}>
          {this.desktopDevice == false ? <slot name="search"></slot> : null}
        </fr-modal>
        <fr-modal header-modal frId={this.navId}>
          {this.desktopDevice == false ? <slot name="header-tools-links"></slot> : null}
          {this.desktopDevice == false ? <slot name="navigation"></slot> : null}
        </fr-modal>
      </header>
    );
  }
}

let searchId = 0;
let navId = 0;
