import {Component, Element, h, Host, Listen, Prop, State, Watch} from '@stencil/core';
import { inheritAttributes } from '../../utils/helpers';
import { matchBreakpoint } from "../../utils/media";

@Component({
  tag: 'fr-pagination',
  styleUrl: 'pagination.scss',
  shadow: true
})
export class Pagination {

  private inheritedAttributes: { [k: string]: any } = {};
  private prevPages: Array<number>;
  private nextPages: Array<number>;

  @Element() el!: HTMLElement;

  /**
   * Nombre de pages à gérer par le composant
   */
  @Prop({ reflect: true }) pagesTotal!: number;

  /**
   * Va générer les href des boutons à partir du pattern fourni -> urlPattern concaténé avec le numéro de page par le composant
   * string urlPattern
   */
  @Prop() urlPattern!: string;

  /**
   * Page en cours de visualisation dans le paginateur
   */
  @Prop({reflect: true, mutable: true}) currentPage: number = 1;

  @State() smallDevice: boolean = false;

  @Listen('resize', { target: 'window' })
  onResize() {
    const small = !matchBreakpoint('lg');
    if (small !== this.smallDevice) {
      this.smallDevice = small;
    }
    if (this.smallDevice) {
      this.setStartPagesSmallSize();
    }
    else {
      this.setStartPages();
    }
  }

  connectedCallback() {
    if (!this.urlPattern || !this.pagesTotal) {
      throw new Error('Pagination must be initialized with attributes pages-total and url-pattern');
    }

    this.smallDevice = !matchBreakpoint('lg');

    if (this.smallDevice) {
      this.setStartPagesSmallSize();
    }
    else {
      this.setStartPages();
    }
  }

  setStartPages() {
    // Init des pages précédentes et suivantes
    // gestion du cas où le nombre de pages est inférieur à 6
    if (this.pagesTotal < 6) {
      const arr = new Array<number>(this.pagesTotal).fill(0);
      arr.forEach((elt, idx) => {
        arr[idx] = ++idx;
        elt; // merci le linter typescript
      });

      this.prevPages = arr;
    } else {
      this.prevPages = [1, 2, 3];
      this.nextPages = [this.pagesTotal - 2, this.pagesTotal - 1, this.pagesTotal];

      // Gestion de l'attribut page courante si fourni en attribut
      if (this.currentPage !== 1
        && this.currentPage < this.pagesTotal - 2
        && this.currentPage !== this.pagesTotal - 3) {
        this.prevPages = [this.currentPage - 1, this.currentPage, this.currentPage + 1];
      } else if (this.currentPage !== 1
        && this.currentPage === this.pagesTotal - 3) {
        this.prevPages = [this.currentPage - 2, this.currentPage - 1, this.currentPage];
      }
    }
  }

  setStartPagesSmallSize() {
    if (this.pagesTotal < 3) {
      const arr = new Array<number>(this.pagesTotal).fill(0);
      arr.forEach((elt, idx) => {
        arr[idx] = ++idx;
        elt; // merci le linter typescript
      });

      this.prevPages = arr;
    } else {
      this.prevPages = [1, 2];
      this.nextPages = [this.pagesTotal];

      // Gestion de l'attribut page courante si fourni en attribut
      if (this.currentPage !== 1
        && this.currentPage < this.pagesTotal) {
        this.prevPages = [this.currentPage - 1, this.currentPage];
      }
    }
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }

  setCurrentPage(pageNumber: number) {
    if (pageNumber === 0 || pageNumber > this.pagesTotal) //bloquer le dépassement des limites
      return;
    this.currentPage = pageNumber;
  }

  @Watch('currentPage')
  setPagesToDisplay(): void {
    if ((this.pagesTotal < 6 && !this.smallDevice)
      || (this.pagesTotal < 4 && this.smallDevice))
      return;

    if (this.smallDevice) {
      this.prevPages = this.getPrevPagesSmallSize();
    }
    else {
      this.prevPages = this.getPrevPages();
    }
  }

  private getPrevPages(): Array<number> {
    // navigation dans la partie gauche du paginateur, l'élément 1 n'est plus visible
    if (this.currentPage > 1 && this.currentPage < this.pagesTotal -3)
      return new Array(this.currentPage -1, this.currentPage, this.currentPage +1);

    // cas spécifique à la flèche prev
    else if (this.currentPage === this.pagesTotal -3)
      return new Array(this.currentPage -2, this.currentPage -1, this.currentPage);

    // navigation dans la partie gauche du paginateur, les premiers éléments restent inchangés
    else if (this.currentPage < 4)
      return new Array(1, 2, 3);

    // navigation dans la partie droite du paginateur
    else
      return this.prevPages;
  }

  private getPrevPagesSmallSize(): Array<number> {
    // navigation dans la partie gauche du paginateur, l'élément 1 n'est plus visible
    if (this.currentPage > 1 && this.currentPage < this.pagesTotal )
      return new Array(this.currentPage -1, this.currentPage);

    // navigation dans la partie gauche du paginateur, les premiers éléments restent inchangés
    else if (this.currentPage < 3)
      return new Array(1, 2);

    // navigation dans la partie droite du paginateur
    else
      return this.prevPages;
  }

  render() {
    return (
      <Host>
        <nav role="navigation" class="fr-pagination" {...this.inheritedAttributes}>
          <ul class="fr-pagination__list">
            <li>
              <fr-link  class="fr-pagination__link fr-pagination__link--first"
                        href={this.currentPage !== 1 ? (this.urlPattern + 1) : null}
                        onClick={() => this.setCurrentPage(1)}>
                Première page
              </fr-link>
            </li>

            <li>
              <fr-link  class="fr-pagination__link fr-pagination__link--prev fr-pagination__link--label fr-pagination__link--lg-label"
                        href={this.currentPage !== 1 ? this.urlPattern + (this.currentPage -1) : null}
                        onClick={() => this.setCurrentPage(this.currentPage -1)}>
                Page précédente
              </fr-link>
            </li>

            { this.prevPages.map((pageNumber) =>
              <li>
                <fr-link  class={{
                  'fr-pagination__link': true
                }}
                          href={this.urlPattern + pageNumber}
                          aria-current={this.currentPage === pageNumber ? "page" : null}
                          title={"Page " + pageNumber}
                          onClick={() => this.setCurrentPage(pageNumber)}>
                  {pageNumber}
                </fr-link>
              </li>
            ) }

            { this.pagesTotal > 6
            && this.currentPage !== this.pagesTotal -3
            && this.currentPage !== this.pagesTotal -4
            && this.prevPages[2]  !== this.pagesTotal -3
            && !this.smallDevice ?
              <li>
                <a class="fr-pagination__link fr-displayed-lg">
                  …
                </a>
              </li>
              :  null
            }

            { !!this.nextPages && this.nextPages.map((pageNumber) =>
              <li>
                <fr-link  class={{
                  'fr-pagination__link': true
                }}
                          key={pageNumber}
                          href={this.urlPattern + pageNumber}
                          aria-current={this.currentPage === pageNumber ? 'page' : null}
                          title={"Page " + pageNumber}
                          onClick={() => this.setCurrentPage(pageNumber)}>
                  {pageNumber}
                </fr-link>
              </li>
            ) }

            <li>
              <fr-link  class="fr-pagination__link fr-pagination__link--next fr-pagination__link--label fr-pagination__link--lg-label"
                        href={this.currentPage !== this.pagesTotal ? this.urlPattern + (this.currentPage +1) : null}
                        onClick={() => this.setCurrentPage(this.currentPage +1)}>
                Page suivante
              </fr-link>
            </li>

            <li>
              <fr-link  class="fr-pagination__link fr-pagination__link--last"
                        href={this.currentPage !== this.pagesTotal ? this.urlPattern + this.pagesTotal : null}
                        onClick={() => this.setCurrentPage(this.pagesTotal)}>
                Dernière page
              </fr-link>
            </li>
          </ul>
        </nav>
      </Host>
    )
  }
}
