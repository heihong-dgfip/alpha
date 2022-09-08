import {Component, Element, h, Host, Prop, State} from '@stencil/core';
import { SidemenuLink } from "./side-menu-interface";
import { matchBreakpoint } from "../../utils/media";

@Component({
  tag: 'fr-sidemenu',
  styleUrl: 'side-menu.scss',
  shadow: true
})
export class SideMenu {

  private SUB_MENU_ITEM__ACTIVE_CLASS = "fr-sidemenu__item--active";
  private DIV_EXPANDED_CLASS = "fr-collapse--expanded";
  private PREFIX_CUSTOM_CLASS = "fr-sd";

  private lvlDiscriminator: number = 1;
  private currentBtn: HTMLElement;
  private isSmallDevice: boolean;
  private smallMenu: HTMLElement;

  @Element() el!: HTMLElement;

  /*
  * Type des données fournies en entrée pour construire le menu
  */
  @Prop() dataType: string = "xml";

  /**
   * Titre du menu latéral
   */
  @Prop({ reflect: true, mutable: true, attribute: 'title'}) menuTitle: string;

  /**
   * Menu Sticky(css)
   */
  @Prop({ reflect: true, attribute: 'sticky' }) isSticky: false;

  /**
   * Menu full height(css)
   */
  @Prop({ reflect: true, attribute: 'full-height' }) isFullHeight: false;

  /**
   * Menu has borders(css)
   */
  @Prop({ reflect: true, attribute: 'borders' }) hasBorders: false;

  /**
   * Menu floating right(css)
   */
  @Prop({ reflect: true, attribute: 'float-right' }) isFloatingRight: false;

  /**
   * Entrées du menu, fournies sous forme XML ou json
   */
  @State() entries: Array<any>;

  /**
   * Propiété utilisée pour le re-render automatique
   */
  @State() expansion: boolean = false;



  connectedCallback() {
    this.slotChange();
    this.isSmallDevice = !matchBreakpoint('md');
  }

  private slotChange(): void {
    if (this.dataType === "json") {
      this.entries = JSON.parse(this.el.innerHTML);
    }
    else {
      let xml = this.el.children;
      this.entries = this.nodeAnalyser(xml);
    }
    this.enrichEntries(this.entries, 1);
  }

  private nodeAnalyser(xml: HTMLCollection): any {
    const arr = [];
    for (const node of Array.from(xml)) {
      if (node instanceof HTMLAnchorElement) {
        arr.push({  label: node.innerText,
          url: node.getAttribute('href')
        });
      }
      else if (node instanceof HTMLDivElement) {
        arr.push({  label: node.getAttribute('name'),
          subEntries: this.nodeAnalyser(node.children)
        });
      }
    }
    return arr;
  }

  private enrichEntries(entries: Array<SidemenuLink>, lvl: number): void {
    for (let entry of entries) {
      let subNumber: number = 0;
      this.setEntryState(entry, lvl);
      this.setAriaControls(entry, lvl, subNumber);
    }
  }

  private setEntryState(entry: SidemenuLink, lvl: number): void {
    entry.customClass = this.PREFIX_CUSTOM_CLASS+lvl;
    entry.ariaExpanded = 'false';

    if (!!entry.subEntries) {
      this.enrichEntries(entry.subEntries, (lvl+1))
    }
  }

  private setAriaControls(entry: any, lvl: number, subNumber: number): void {
    entry.ariaControls = 'sidemenu-'+lvl + '' + this.lvlDiscriminator++ + '' + subNumber++;
  }

  private toggleSubmenu(e: Event, subEntry: any): void {
    e.preventDefault();
    const elt = e.currentTarget;
    let parent = null;

    if (elt instanceof HTMLAnchorElement) {
      parent = (elt as HTMLAnchorElement).closest('li');
      return;
    }
    else {
      parent = (elt as HTMLAnchorElement).closest('li');
      this.expansion = !this.expansion; //redéclencher le render
    }

    this.cleanActiveItems();
    this.setActiveItems(parent);
    this.closeSiblingsAndChildren(parent, subEntry);
  }

  cleanActiveItems(): void {
    const activeElts = this.el.shadowRoot.querySelectorAll('.'+this.SUB_MENU_ITEM__ACTIVE_CLASS);
    for (let node of Array.from(activeElts)) {
      node.classList.remove(this.SUB_MENU_ITEM__ACTIVE_CLASS);
    }
  }

  setActiveItems(elt: any) {
    elt.classList.toggle(this.SUB_MENU_ITEM__ACTIVE_CLASS);

    let parent = elt;
    while (!!parent || parent?.classList?.contains('fr-sidemenu')) {
      parent = this.reachAllParents(parent);
    }
  }

  reachAllParents(elt: any): void {
    let parent = elt.parentNode;
    if (!parent)
      return;

    if (parent?.classList?.contains('fr-sidemenu__item')) {
      parent.classList.add(this.SUB_MENU_ITEM__ACTIVE_CLASS);
    }
    this.reachAllParents(parent);
  }

  closeSiblingsAndChildren(elt: any, subEntry: any) {
    this.getSiblings(elt, subEntry);
  }

  getSiblings(elt: any, subEntry: any) {
    const siblings = elt.parentNode.children;

    for (let sibling of siblings) {
      if (sibling.children?.length > 1) { // cas des sous-menus - une ancre possède un seul child
        const btnElt = sibling.querySelector('fr-btn');
        const divEltClasslist = sibling.querySelector('div.fr-collapse').classList;

        if (divEltClasslist.contains(this.DIV_EXPANDED_CLASS)) {
          divEltClasslist.toggle(this.DIV_EXPANDED_CLASS);
          btnElt.setAttribute('aria-expanded', 'false');
        }
        else {
          if (sibling.children[0].getAttribute('aria-controls') === subEntry.ariaControls) {
            divEltClasslist.toggle(this.DIV_EXPANDED_CLASS);
          }
          btnElt.setAttribute('aria-expanded', 'true');
        }

      }
    }
  }

  componentWillLoad() {

    setTimeout(() => {
      this.closeSmallMenu();

      let btnComponents = this.el.shadowRoot.querySelectorAll('.fr-sidemenu__btn');

      for (let btnComponent of Array.from(btnComponents)) {
        let btn = btnComponent.shadowRoot.querySelector('.fr-btn');
        // console.log(btn);
        btn.addEventListener('focus', this.focusOnBtn);
        btn.addEventListener('blur', this.blurOnBtn);
      }
    }, 50);
  }

  private closeSmallMenu(): void {
    if (this.isSmallDevice) {
      this.smallMenu = this.el.shadowRoot.querySelector('#sidemenu-1');
      this.smallMenu.classList.remove(this.DIV_EXPANDED_CLASS);
      let btn = this.el.shadowRoot.querySelector('fr-btn');
      btn.addEventListener('click', this.toggleSmallMenu.bind(this));
    }
  }

  private toggleSmallMenu() {
    this.smallMenu.classList.toggle(this.DIV_EXPANDED_CLASS);
  }

  private focusOnBtn(e: Event) {
    let btn = e.currentTarget as HTMLButtonElement;
    btn.setAttribute('outline-width', '0px');
    this.currentBtn = (btn.parentNode as ShadowRoot).host as HTMLElement;
    this.currentBtn?.classList.add('btn-focused');
  }

  private blurOnBtn() {
    this.currentBtn?.classList.remove('btn-focused');
  }

  renderSubTpl(subEntry: any) {
    return(
      <li class="fr-sidemenu__item">

        { subEntry.subEntries!! ?
          [
            this.renderButton(subEntry),
            this.renderList(subEntry)
          ]
          :
          this.renderLink(subEntry)
        }

      </li>
    );
  }

  renderButton(subEntry: any) {
    return(
      <fr-btn class={{
        'fr-sidemenu__btn': true,
        [`${subEntry.customClass}`]: true
      }}
              aria-expanded={subEntry.ariaExpanded}
              aria-controls={subEntry.ariaControls}
              aria-current="true"
              onClick={(e) => this.toggleSubmenu(e, subEntry)}>
        {subEntry.label}
      </fr-btn>
    )
  }

  renderList(subEntry: any) {
    return (
      <div class={{
        'fr-collapse': true,
        'fr-collapse--expanded': subEntry.ariaExpanded === 'true'
      }}
           id={subEntry.ariaControls}>
        <ul class="fr-sidemenu__list">
          { subEntry.subEntries.map((subSubEntry: any) =>
            this.renderSubTpl(subSubEntry)
          )}
        </ul>
      </div>
    )
  }

  renderLink(subEntry: any) {
    return (
      <fr-link role="link" tabindex="0" class={{
        'fr-sidemenu__link': true,
        [`${subEntry.customClass}`]: true
      }}
               href={subEntry.url}
               target="_self"
               onClick={(e) => this.toggleSubmenu(e, subEntry)}>
        {subEntry.label}
      </fr-link>
    )
  }

  render() {
    return (
      <Host>
        <slot onSlotchange={() => this.slotChange()}></slot>
        <nav class={{
          'fr-sidemenu': true,
          'fr-sidemenu--sticky': this.isSticky,
          'fr-sidemenu--sticky-full-height': this.isFullHeight,
          'fr-sidemenu--full-border': this.hasBorders,
          'fr-sidemenu--right': this.isFloatingRight
        }} role="navigation" aria-label="Menu latéral">
          <div class="fr-sidemenu__inner">
            <fr-btn class="fr-sidemenu__btn" aria-controls="sidemenu-1"
                    aria-expanded="false">
              Dans cette rubrique
            </fr-btn>
            <div class="fr-collapse fr-collapse--expanded" id="sidemenu-1">
              <div class="fr-sidemenu__title">{this.menuTitle}</div>
              <ul class="fr-sidemenu__list">
                { this.entries.map((entry: any) =>
                  this.renderSubTpl(entry)
                )}
              </ul>
            </div>
          </div>
        </nav>
      </Host>
    )
  }
}
