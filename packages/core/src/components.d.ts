/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ColRangeType, DisableEventDetail, GridAlignmentType, GridJustificationType, GroupRadio, LinkInterface, Links, RequireEventDetail, SelectItem, TextFieldAutocompletes, TextFieldTypes } from "./interface";
import { Size } from "./components/highlight/highlight";
import { IconTypes } from "./components/icon/icon-types";
export namespace Components {
    interface FrAccordion {
        "title": string;
        "titleType": string;
    }
    interface FrAlert {
        /**
          * En combinaison avec l'attribut closableCollapsible inserér un alert-id pour l'attribut aria-controls
         */
        "alertId"?: string;
        /**
          * Ajoute un bouton de fermeture
         */
        "closable"?: boolean;
        /**
          * Alerte refermable dans un collapse
         */
        "closableCollapsible"?: boolean;
        /**
          * Alerte au format petit
         */
        "small"?: boolean;
        /**
          * Titre de l'alerte
         */
        "title": string;
        /**
          * Aspect de l'alerte: default | info | error | success
         */
        "type"?: "info" | "error" | "success";
    }
    interface FrApp {
    }
    interface FrBreadcrumb {
        "linksBreadcrumb": LinkInterface[];
    }
    interface FrBtn {
        /**
          * header button menu
         */
        "btnNavMenu": boolean;
        /**
          * header button search
         */
        "btnNavSearch": boolean;
        /**
          * The title of button.
         */
        "buttonTitle": string;
        /**
          * If `true`, fr-link--close added
         */
        "close": boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled": boolean;
        /**
          * If `true`, the button has a width=100%
         */
        "fullWidth"?: boolean;
        /**
          * If `true`, all scss for a button without text with only icon will be apply
         */
        "iconOnly"?: boolean;
        /**
          * the id of the modal button
         */
        "modalOpenerId": string;
        /**
          * The button size.
         */
        "size"?: 'sm' | 'lg';
        /**
          * The state of the button.
         */
        "state"?: 'secondary';
        /**
          * The text position of button.
         */
        "textPosition"?: 'center' | 'right';
        /**
          * The type of button.
         */
        "type": 'submit' | 'button';
    }
    interface FrBtns {
        "position"?: 'center' | 'right';
    }
    interface FrCallout {
    }
    interface FrCard {
        "enlargeLink"?: boolean;
        "horizontal"?: boolean;
        "href": string;
        "noArrow"?: boolean;
        "title": string;
        /**
          * balise for title
         */
        "titleType": string;
    }
    interface FrCheckbox {
        /**
          * Checked state
         */
        "checked": boolean;
        /**
          * Disabled state
         */
        "disabled": boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Checkbox label
         */
        "label": string;
        /**
          * Show toggle state
         */
        "showToggleState": boolean;
        /**
          * Small size
         */
        "small": boolean;
        /**
          * Toggle
         */
        "toggle": boolean;
        /**
          * Toggle label align left
         */
        "toggleLabelLeft": boolean;
        /**
          * Toggle separator
         */
        "toggleSeparator": boolean;
    }
    interface FrCol {
        /**
          * Alignment
         */
        "align"?: GridAlignmentType;
        /**
          * Offset
         */
        "offset"?: ColRangeType;
        /**
          * Offset lg breakpoint
         */
        "offsetLg"?: ColRangeType;
        /**
          * Offset md breakpoint
         */
        "offsetMd"?: ColRangeType;
        /**
          * Right offset
         */
        "offsetRight"?: ColRangeType;
        /**
          * Right offset lg breakpoint
         */
        "offsetRightLg"?: ColRangeType;
        /**
          * Right offset md breakpoint
         */
        "offsetRightMd"?: ColRangeType;
        /**
          * Right offset sm breakpoint
         */
        "offsetRightSm"?: ColRangeType;
        /**
          * Right offset xl breakpoint
         */
        "offsetRightXl"?: ColRangeType;
        /**
          * Offset sm breakpoint
         */
        "offsetSm"?: ColRangeType;
        /**
          * Offset xl breakpoint
         */
        "offsetXl"?: ColRangeType;
        /**
          * Width
         */
        "width"?: ColRangeType;
        /**
          * Width lg breakpoint
         */
        "widthLg"?: ColRangeType;
        /**
          * Width md breakpoint
         */
        "widthMd"?: ColRangeType;
        /**
          * Width sm breakpoint
         */
        "widthSm"?: ColRangeType;
        /**
          * Width xl breakpoint
         */
        "widthXl"?: ColRangeType;
    }
    interface FrContainer {
        /**
          * Fluid
         */
        "fluid": boolean;
        "fullHeight": boolean;
    }
    interface FrErrorText {
    }
    interface FrFooter {
        /**
          * links of Legal Duties
         */
        "linkLegalDuties": LinkInterface[];
    }
    interface FrForm {
        /**
          * All fields required
         */
        "required": boolean;
    }
    interface FrFormGroup {
        /**
          * Disabled state
         */
        "disabled": boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Inline controls
         */
        "inline": boolean;
        /**
          * Fieldset legend
         */
        "legend": string;
        /**
          * Legend text regular
         */
        "legendTextRegular": boolean;
        /**
          * Legend visually hidden
         */
        "legendVisuallyHidden": boolean;
    }
    interface FrGridRow {
        /**
          * Alignment
         */
        "align"?: GridAlignmentType;
        /**
          * With gutters
         */
        "gutters": boolean;
        /**
          * Justification
         */
        "justify"?: GridJustificationType;
        /**
          * Reset no gutters
         */
        "noGutters": boolean;
    }
    interface FrHeader {
    }
    interface FrHeaderService {
        /**
          * home page url
         */
        "href": string;
    }
    interface FrHeaderToolsLinks {
    }
    interface FrHighlight {
        /**
          * Taille du highlight 'sm', 'md' ou 'lg'
         */
        "size"?: Size;
    }
    interface FrIcon {
        "name": IconTypes;
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface FrInput {
        /**
          * autocomplete
         */
        "autocomplete"?: TextFieldAutocompletes;
        /**
          * Disabled state
         */
        "disabled": boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Label
         */
        "label": string;
        /**
          * placeholder
         */
        "placeholder": string;
        /**
          * Required
         */
        "required": boolean;
        /**
          * Input type. Use `textarea` for a textarea control
         */
        "type": TextFieldTypes;
        /**
          * Value
         */
        "value": string;
    }
    interface FrLink {
        /**
          * Align on content
         */
        "alignOnContent": boolean;
        /**
          * Chip
         */
        "chip": boolean;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is not set, a disabled link will be rendered.
         */
        "href"?: string;
        /**
          * Specifies whether to display the linked URL in new tab or window. Only applies when an `href` is provided.
         */
        "newWindow": boolean;
        /**
          * Raw link
         */
        "raw": boolean;
        /**
          * Reset link
         */
        "reset": boolean;
        /**
          * Size
         */
        "size"?: 'sm' | 'lg';
        /**
          * Target
         */
        "target"?: string;
    }
    interface FrLogo {
        "size"?: 'sm' | 'lg';
    }
    interface FrModal {
        /**
          * Unique identifier
         */
        "frId": string;
        /**
          * Title
         */
        "frTitle": string;
        /**
          * full
         */
        "headerModal": boolean;
        /**
          * Size
         */
        "size"?: 'sm' | 'lg';
        /**
          * Stack at top
         */
        "top": boolean;
    }
    interface FrNavigation {
        "links": Links[];
    }
    interface FrPagination {
        /**
          * Page en cours de visualisation dans le paginateur
         */
        "currentPage": number;
        /**
          * Nombre de pages à gérer par le composant
         */
        "pagesTotal": number;
        /**
          * Va générer les href des boutons à partir du pattern fourni -> urlPattern concaténé avec le numéro de page par le composant string urlPattern
         */
        "urlPattern": string;
    }
    interface FrRadioGroup {
        /**
          * Group radios
         */
        "radios": GroupRadio[];
        /**
          * Radio rich
         */
        "rich": boolean;
        /**
          * Small size
         */
        "small": boolean;
        /**
          * Value
         */
        "value": string;
    }
    interface FrSearch {
        "lg"?: boolean;
    }
    interface FrSelect {
        /**
          * Disabled state
         */
        "disabled": boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Label
         */
        "label": string;
        /**
          * Options
         */
        "options": SelectItem[];
        /**
          * Required
         */
        "required": boolean;
        /**
          * Value
         */
        "value": string;
    }
    interface FrSidemenu {
        "dataType": string;
        /**
          * Menu has borders(css)
         */
        "hasBorders": false;
        /**
          * Menu floating right(css)
         */
        "isFloatingRight": false;
        /**
          * Menu full height(css)
         */
        "isFullHeight": false;
        /**
          * Menu Sticky(css)
         */
        "isSticky": false;
        /**
          * Titre du menu latéral
         */
        "menuTitle": string;
    }
    interface FrSkiplinks {
        "links": LinkInterface[];
    }
    interface FrSummary {
        "ariaLabelledby"?: string;
        "links": any[];
    }
    interface FrTag {
        "href": string;
        "label": string;
        "sm": boolean;
    }
    interface FrTags {
    }
    interface FrTile {
        /**
          * optional extended link
         */
        "enlargeLink"?: boolean;
        /**
          * optional horizontal position
         */
        "horizontal"?: boolean;
        /**
          * mandatory hypertext link
         */
        "href": string;
        /**
          * mandatory title level (h1, h2 ... h6)
         */
        "titleType": string;
        /**
          * mandatory title
         */
        "titre": string;
    }
    interface FrValidText {
    }
}
declare global {
    interface HTMLFrAccordionElement extends Components.FrAccordion, HTMLStencilElement {
    }
    var HTMLFrAccordionElement: {
        prototype: HTMLFrAccordionElement;
        new (): HTMLFrAccordionElement;
    };
    interface HTMLFrAlertElement extends Components.FrAlert, HTMLStencilElement {
    }
    var HTMLFrAlertElement: {
        prototype: HTMLFrAlertElement;
        new (): HTMLFrAlertElement;
    };
    interface HTMLFrAppElement extends Components.FrApp, HTMLStencilElement {
    }
    var HTMLFrAppElement: {
        prototype: HTMLFrAppElement;
        new (): HTMLFrAppElement;
    };
    interface HTMLFrBreadcrumbElement extends Components.FrBreadcrumb, HTMLStencilElement {
    }
    var HTMLFrBreadcrumbElement: {
        prototype: HTMLFrBreadcrumbElement;
        new (): HTMLFrBreadcrumbElement;
    };
    interface HTMLFrBtnElement extends Components.FrBtn, HTMLStencilElement {
    }
    var HTMLFrBtnElement: {
        prototype: HTMLFrBtnElement;
        new (): HTMLFrBtnElement;
    };
    interface HTMLFrBtnsElement extends Components.FrBtns, HTMLStencilElement {
    }
    var HTMLFrBtnsElement: {
        prototype: HTMLFrBtnsElement;
        new (): HTMLFrBtnsElement;
    };
    interface HTMLFrCalloutElement extends Components.FrCallout, HTMLStencilElement {
    }
    var HTMLFrCalloutElement: {
        prototype: HTMLFrCalloutElement;
        new (): HTMLFrCalloutElement;
    };
    interface HTMLFrCardElement extends Components.FrCard, HTMLStencilElement {
    }
    var HTMLFrCardElement: {
        prototype: HTMLFrCardElement;
        new (): HTMLFrCardElement;
    };
    interface HTMLFrCheckboxElement extends Components.FrCheckbox, HTMLStencilElement {
    }
    var HTMLFrCheckboxElement: {
        prototype: HTMLFrCheckboxElement;
        new (): HTMLFrCheckboxElement;
    };
    interface HTMLFrColElement extends Components.FrCol, HTMLStencilElement {
    }
    var HTMLFrColElement: {
        prototype: HTMLFrColElement;
        new (): HTMLFrColElement;
    };
    interface HTMLFrContainerElement extends Components.FrContainer, HTMLStencilElement {
    }
    var HTMLFrContainerElement: {
        prototype: HTMLFrContainerElement;
        new (): HTMLFrContainerElement;
    };
    interface HTMLFrErrorTextElement extends Components.FrErrorText, HTMLStencilElement {
    }
    var HTMLFrErrorTextElement: {
        prototype: HTMLFrErrorTextElement;
        new (): HTMLFrErrorTextElement;
    };
    interface HTMLFrFooterElement extends Components.FrFooter, HTMLStencilElement {
    }
    var HTMLFrFooterElement: {
        prototype: HTMLFrFooterElement;
        new (): HTMLFrFooterElement;
    };
    interface HTMLFrFormElement extends Components.FrForm, HTMLStencilElement {
    }
    var HTMLFrFormElement: {
        prototype: HTMLFrFormElement;
        new (): HTMLFrFormElement;
    };
    interface HTMLFrFormGroupElement extends Components.FrFormGroup, HTMLStencilElement {
    }
    var HTMLFrFormGroupElement: {
        prototype: HTMLFrFormGroupElement;
        new (): HTMLFrFormGroupElement;
    };
    interface HTMLFrGridRowElement extends Components.FrGridRow, HTMLStencilElement {
    }
    var HTMLFrGridRowElement: {
        prototype: HTMLFrGridRowElement;
        new (): HTMLFrGridRowElement;
    };
    interface HTMLFrHeaderElement extends Components.FrHeader, HTMLStencilElement {
    }
    var HTMLFrHeaderElement: {
        prototype: HTMLFrHeaderElement;
        new (): HTMLFrHeaderElement;
    };
    interface HTMLFrHeaderServiceElement extends Components.FrHeaderService, HTMLStencilElement {
    }
    var HTMLFrHeaderServiceElement: {
        prototype: HTMLFrHeaderServiceElement;
        new (): HTMLFrHeaderServiceElement;
    };
    interface HTMLFrHeaderToolsLinksElement extends Components.FrHeaderToolsLinks, HTMLStencilElement {
    }
    var HTMLFrHeaderToolsLinksElement: {
        prototype: HTMLFrHeaderToolsLinksElement;
        new (): HTMLFrHeaderToolsLinksElement;
    };
    interface HTMLFrHighlightElement extends Components.FrHighlight, HTMLStencilElement {
    }
    var HTMLFrHighlightElement: {
        prototype: HTMLFrHighlightElement;
        new (): HTMLFrHighlightElement;
    };
    interface HTMLFrIconElement extends Components.FrIcon, HTMLStencilElement {
    }
    var HTMLFrIconElement: {
        prototype: HTMLFrIconElement;
        new (): HTMLFrIconElement;
    };
    interface HTMLFrInputElement extends Components.FrInput, HTMLStencilElement {
    }
    var HTMLFrInputElement: {
        prototype: HTMLFrInputElement;
        new (): HTMLFrInputElement;
    };
    interface HTMLFrLinkElement extends Components.FrLink, HTMLStencilElement {
    }
    var HTMLFrLinkElement: {
        prototype: HTMLFrLinkElement;
        new (): HTMLFrLinkElement;
    };
    interface HTMLFrLogoElement extends Components.FrLogo, HTMLStencilElement {
    }
    var HTMLFrLogoElement: {
        prototype: HTMLFrLogoElement;
        new (): HTMLFrLogoElement;
    };
    interface HTMLFrModalElement extends Components.FrModal, HTMLStencilElement {
    }
    var HTMLFrModalElement: {
        prototype: HTMLFrModalElement;
        new (): HTMLFrModalElement;
    };
    interface HTMLFrNavigationElement extends Components.FrNavigation, HTMLStencilElement {
    }
    var HTMLFrNavigationElement: {
        prototype: HTMLFrNavigationElement;
        new (): HTMLFrNavigationElement;
    };
    interface HTMLFrPaginationElement extends Components.FrPagination, HTMLStencilElement {
    }
    var HTMLFrPaginationElement: {
        prototype: HTMLFrPaginationElement;
        new (): HTMLFrPaginationElement;
    };
    interface HTMLFrRadioGroupElement extends Components.FrRadioGroup, HTMLStencilElement {
    }
    var HTMLFrRadioGroupElement: {
        prototype: HTMLFrRadioGroupElement;
        new (): HTMLFrRadioGroupElement;
    };
    interface HTMLFrSearchElement extends Components.FrSearch, HTMLStencilElement {
    }
    var HTMLFrSearchElement: {
        prototype: HTMLFrSearchElement;
        new (): HTMLFrSearchElement;
    };
    interface HTMLFrSelectElement extends Components.FrSelect, HTMLStencilElement {
    }
    var HTMLFrSelectElement: {
        prototype: HTMLFrSelectElement;
        new (): HTMLFrSelectElement;
    };
    interface HTMLFrSidemenuElement extends Components.FrSidemenu, HTMLStencilElement {
    }
    var HTMLFrSidemenuElement: {
        prototype: HTMLFrSidemenuElement;
        new (): HTMLFrSidemenuElement;
    };
    interface HTMLFrSkiplinksElement extends Components.FrSkiplinks, HTMLStencilElement {
    }
    var HTMLFrSkiplinksElement: {
        prototype: HTMLFrSkiplinksElement;
        new (): HTMLFrSkiplinksElement;
    };
    interface HTMLFrSummaryElement extends Components.FrSummary, HTMLStencilElement {
    }
    var HTMLFrSummaryElement: {
        prototype: HTMLFrSummaryElement;
        new (): HTMLFrSummaryElement;
    };
    interface HTMLFrTagElement extends Components.FrTag, HTMLStencilElement {
    }
    var HTMLFrTagElement: {
        prototype: HTMLFrTagElement;
        new (): HTMLFrTagElement;
    };
    interface HTMLFrTagsElement extends Components.FrTags, HTMLStencilElement {
    }
    var HTMLFrTagsElement: {
        prototype: HTMLFrTagsElement;
        new (): HTMLFrTagsElement;
    };
    interface HTMLFrTileElement extends Components.FrTile, HTMLStencilElement {
    }
    var HTMLFrTileElement: {
        prototype: HTMLFrTileElement;
        new (): HTMLFrTileElement;
    };
    interface HTMLFrValidTextElement extends Components.FrValidText, HTMLStencilElement {
    }
    var HTMLFrValidTextElement: {
        prototype: HTMLFrValidTextElement;
        new (): HTMLFrValidTextElement;
    };
    interface HTMLElementTagNameMap {
        "fr-accordion": HTMLFrAccordionElement;
        "fr-alert": HTMLFrAlertElement;
        "fr-app": HTMLFrAppElement;
        "fr-breadcrumb": HTMLFrBreadcrumbElement;
        "fr-btn": HTMLFrBtnElement;
        "fr-btns": HTMLFrBtnsElement;
        "fr-callout": HTMLFrCalloutElement;
        "fr-card": HTMLFrCardElement;
        "fr-checkbox": HTMLFrCheckboxElement;
        "fr-col": HTMLFrColElement;
        "fr-container": HTMLFrContainerElement;
        "fr-error-text": HTMLFrErrorTextElement;
        "fr-footer": HTMLFrFooterElement;
        "fr-form": HTMLFrFormElement;
        "fr-form-group": HTMLFrFormGroupElement;
        "fr-grid-row": HTMLFrGridRowElement;
        "fr-header": HTMLFrHeaderElement;
        "fr-header-service": HTMLFrHeaderServiceElement;
        "fr-header-tools-links": HTMLFrHeaderToolsLinksElement;
        "fr-highlight": HTMLFrHighlightElement;
        "fr-icon": HTMLFrIconElement;
        "fr-input": HTMLFrInputElement;
        "fr-link": HTMLFrLinkElement;
        "fr-logo": HTMLFrLogoElement;
        "fr-modal": HTMLFrModalElement;
        "fr-navigation": HTMLFrNavigationElement;
        "fr-pagination": HTMLFrPaginationElement;
        "fr-radio-group": HTMLFrRadioGroupElement;
        "fr-search": HTMLFrSearchElement;
        "fr-select": HTMLFrSelectElement;
        "fr-sidemenu": HTMLFrSidemenuElement;
        "fr-skiplinks": HTMLFrSkiplinksElement;
        "fr-summary": HTMLFrSummaryElement;
        "fr-tag": HTMLFrTagElement;
        "fr-tags": HTMLFrTagsElement;
        "fr-tile": HTMLFrTileElement;
        "fr-valid-text": HTMLFrValidTextElement;
    }
}
declare namespace LocalJSX {
    interface FrAccordion {
        "title": string;
        "titleType": string;
    }
    interface FrAlert {
        /**
          * En combinaison avec l'attribut closableCollapsible inserér un alert-id pour l'attribut aria-controls
         */
        "alertId"?: string;
        /**
          * Ajoute un bouton de fermeture
         */
        "closable"?: boolean;
        /**
          * Alerte refermable dans un collapse
         */
        "closableCollapsible"?: boolean;
        /**
          * Alerte au format petit
         */
        "small"?: boolean;
        /**
          * Titre de l'alerte
         */
        "title"?: string;
        /**
          * Aspect de l'alerte: default | info | error | success
         */
        "type"?: "info" | "error" | "success";
    }
    interface FrApp {
    }
    interface FrBreadcrumb {
        "linksBreadcrumb"?: LinkInterface[];
    }
    interface FrBtn {
        /**
          * header button menu
         */
        "btnNavMenu"?: boolean;
        /**
          * header button search
         */
        "btnNavSearch"?: boolean;
        /**
          * The title of button.
         */
        "buttonTitle"?: string;
        /**
          * If `true`, fr-link--close added
         */
        "close"?: boolean;
        /**
          * If `true`, the user cannot interact with the button.
         */
        "disabled"?: boolean;
        /**
          * If `true`, the button has a width=100%
         */
        "fullWidth"?: boolean;
        /**
          * If `true`, all scss for a button without text with only icon will be apply
         */
        "iconOnly"?: boolean;
        /**
          * the id of the modal button
         */
        "modalOpenerId"?: string;
        /**
          * Emitted when the button loses focus.
         */
        "onBlur"?: (event: CustomEvent<void>) => void;
        /**
          * Emitted when the button has focus.
         */
        "onFocus"?: (event: CustomEvent<void>) => void;
        /**
          * The button size.
         */
        "size"?: 'sm' | 'lg';
        /**
          * The state of the button.
         */
        "state"?: 'secondary';
        /**
          * The text position of button.
         */
        "textPosition"?: 'center' | 'right';
        /**
          * The type of button.
         */
        "type"?: 'submit' | 'button';
    }
    interface FrBtns {
        "position"?: 'center' | 'right';
    }
    interface FrCallout {
    }
    interface FrCard {
        "enlargeLink"?: boolean;
        "horizontal"?: boolean;
        "href"?: string;
        "noArrow"?: boolean;
        "title": string;
        /**
          * balise for title
         */
        "titleType": string;
    }
    interface FrCheckbox {
        /**
          * Checked state
         */
        "checked"?: boolean;
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Checkbox label
         */
        "label": string;
        /**
          * Emitted when the checked state has changed
         */
        "onChange"?: (event: CustomEvent<any>) => void;
        /**
          * Show toggle state
         */
        "showToggleState"?: boolean;
        /**
          * Small size
         */
        "small"?: boolean;
        /**
          * Toggle
         */
        "toggle"?: boolean;
        /**
          * Toggle label align left
         */
        "toggleLabelLeft"?: boolean;
        /**
          * Toggle separator
         */
        "toggleSeparator"?: boolean;
    }
    interface FrCol {
        /**
          * Alignment
         */
        "align"?: GridAlignmentType;
        /**
          * Offset
         */
        "offset"?: ColRangeType;
        /**
          * Offset lg breakpoint
         */
        "offsetLg"?: ColRangeType;
        /**
          * Offset md breakpoint
         */
        "offsetMd"?: ColRangeType;
        /**
          * Right offset
         */
        "offsetRight"?: ColRangeType;
        /**
          * Right offset lg breakpoint
         */
        "offsetRightLg"?: ColRangeType;
        /**
          * Right offset md breakpoint
         */
        "offsetRightMd"?: ColRangeType;
        /**
          * Right offset sm breakpoint
         */
        "offsetRightSm"?: ColRangeType;
        /**
          * Right offset xl breakpoint
         */
        "offsetRightXl"?: ColRangeType;
        /**
          * Offset sm breakpoint
         */
        "offsetSm"?: ColRangeType;
        /**
          * Offset xl breakpoint
         */
        "offsetXl"?: ColRangeType;
        /**
          * Width
         */
        "width"?: ColRangeType;
        /**
          * Width lg breakpoint
         */
        "widthLg"?: ColRangeType;
        /**
          * Width md breakpoint
         */
        "widthMd"?: ColRangeType;
        /**
          * Width sm breakpoint
         */
        "widthSm"?: ColRangeType;
        /**
          * Width xl breakpoint
         */
        "widthXl"?: ColRangeType;
    }
    interface FrContainer {
        /**
          * Fluid
         */
        "fluid"?: boolean;
        "fullHeight"?: boolean;
    }
    interface FrErrorText {
    }
    interface FrFooter {
        /**
          * links of Legal Duties
         */
        "linkLegalDuties"?: LinkInterface[];
    }
    interface FrForm {
        /**
          * Emitted when the required state has changed.
         */
        "onFrRequire"?: (event: CustomEvent<RequireEventDetail>) => void;
        /**
          * All fields required
         */
        "required"?: boolean;
    }
    interface FrFormGroup {
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Inline controls
         */
        "inline"?: boolean;
        /**
          * Fieldset legend
         */
        "legend": string;
        /**
          * Legend text regular
         */
        "legendTextRegular"?: boolean;
        /**
          * Legend visually hidden
         */
        "legendVisuallyHidden"?: boolean;
        /**
          * Emitted when the disable state has changed.
         */
        "onFrDisable"?: (event: CustomEvent<DisableEventDetail>) => void;
    }
    interface FrGridRow {
        /**
          * Alignment
         */
        "align"?: GridAlignmentType;
        /**
          * With gutters
         */
        "gutters"?: boolean;
        /**
          * Justification
         */
        "justify"?: GridJustificationType;
        /**
          * Reset no gutters
         */
        "noGutters"?: boolean;
    }
    interface FrHeader {
    }
    interface FrHeaderService {
        /**
          * home page url
         */
        "href"?: string;
    }
    interface FrHeaderToolsLinks {
    }
    interface FrHighlight {
        /**
          * Taille du highlight 'sm', 'md' ou 'lg'
         */
        "size"?: Size;
    }
    interface FrIcon {
        "name": IconTypes;
        "size"?: 'sm' | 'md' | 'lg';
    }
    interface FrInput {
        /**
          * autocomplete
         */
        "autocomplete"?: TextFieldAutocompletes;
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Label
         */
        "label": string;
        /**
          * Emitted when the value has changed.
         */
        "onChange"?: (event: CustomEvent<any>) => void;
        /**
          * placeholder
         */
        "placeholder"?: string;
        /**
          * Required
         */
        "required"?: boolean;
        /**
          * Input type. Use `textarea` for a textarea control
         */
        "type"?: TextFieldTypes;
        /**
          * Value
         */
        "value"?: string;
    }
    interface FrLink {
        /**
          * Align on content
         */
        "alignOnContent"?: boolean;
        /**
          * Chip
         */
        "chip"?: boolean;
        /**
          * Contains a URL or a URL fragment that the hyperlink points to. If this property is not set, a disabled link will be rendered.
         */
        "href"?: string;
        /**
          * Specifies whether to display the linked URL in new tab or window. Only applies when an `href` is provided.
         */
        "newWindow"?: boolean;
        /**
          * Raw link
         */
        "raw"?: boolean;
        /**
          * Reset link
         */
        "reset"?: boolean;
        /**
          * Size
         */
        "size"?: 'sm' | 'lg';
        /**
          * Target
         */
        "target"?: string;
    }
    interface FrLogo {
        "size"?: 'sm' | 'lg';
    }
    interface FrModal {
        /**
          * Unique identifier
         */
        "frId": string;
        /**
          * Title
         */
        "frTitle"?: string;
        /**
          * full
         */
        "headerModal"?: boolean;
        /**
          * Size
         */
        "size"?: 'sm' | 'lg';
        /**
          * Stack at top
         */
        "top"?: boolean;
    }
    interface FrNavigation {
        "links"?: Links[];
    }
    interface FrPagination {
        /**
          * Page en cours de visualisation dans le paginateur
         */
        "currentPage"?: number;
        /**
          * Nombre de pages à gérer par le composant
         */
        "pagesTotal": number;
        /**
          * Va générer les href des boutons à partir du pattern fourni -> urlPattern concaténé avec le numéro de page par le composant string urlPattern
         */
        "urlPattern": string;
    }
    interface FrRadioGroup {
        /**
          * Emitted when the value has changed
         */
        "onChange"?: (event: CustomEvent<any>) => void;
        /**
          * Group radios
         */
        "radios"?: GroupRadio[];
        /**
          * Radio rich
         */
        "rich"?: boolean;
        /**
          * Small size
         */
        "small"?: boolean;
        /**
          * Value
         */
        "value"?: string;
    }
    interface FrSearch {
        "lg"?: boolean;
    }
    interface FrSelect {
        /**
          * Disabled state
         */
        "disabled"?: boolean;
        /**
          * Hint text
         */
        "hint"?: string;
        /**
          * Label
         */
        "label": string;
        /**
          * Emitted when the value has changed
         */
        "onChange"?: (event: CustomEvent<any>) => void;
        /**
          * Options
         */
        "options"?: SelectItem[];
        /**
          * Required
         */
        "required"?: boolean;
        /**
          * Value
         */
        "value"?: string;
    }
    interface FrSidemenu {
        "dataType"?: string;
        /**
          * Menu has borders(css)
         */
        "hasBorders"?: false;
        /**
          * Menu floating right(css)
         */
        "isFloatingRight"?: false;
        /**
          * Menu full height(css)
         */
        "isFullHeight"?: false;
        /**
          * Menu Sticky(css)
         */
        "isSticky"?: false;
        /**
          * Titre du menu latéral
         */
        "menuTitle"?: string;
    }
    interface FrSkiplinks {
        "links"?: LinkInterface[];
    }
    interface FrSummary {
        "ariaLabelledby"?: string;
        "links"?: any[];
    }
    interface FrTag {
        "href"?: string;
        "label"?: string;
        "sm"?: boolean;
    }
    interface FrTags {
    }
    interface FrTile {
        /**
          * optional extended link
         */
        "enlargeLink"?: boolean;
        /**
          * optional horizontal position
         */
        "horizontal"?: boolean;
        /**
          * mandatory hypertext link
         */
        "href": string;
        /**
          * mandatory title level (h1, h2 ... h6)
         */
        "titleType": string;
        /**
          * mandatory title
         */
        "titre"?: string;
    }
    interface FrValidText {
    }
    interface IntrinsicElements {
        "fr-accordion": FrAccordion;
        "fr-alert": FrAlert;
        "fr-app": FrApp;
        "fr-breadcrumb": FrBreadcrumb;
        "fr-btn": FrBtn;
        "fr-btns": FrBtns;
        "fr-callout": FrCallout;
        "fr-card": FrCard;
        "fr-checkbox": FrCheckbox;
        "fr-col": FrCol;
        "fr-container": FrContainer;
        "fr-error-text": FrErrorText;
        "fr-footer": FrFooter;
        "fr-form": FrForm;
        "fr-form-group": FrFormGroup;
        "fr-grid-row": FrGridRow;
        "fr-header": FrHeader;
        "fr-header-service": FrHeaderService;
        "fr-header-tools-links": FrHeaderToolsLinks;
        "fr-highlight": FrHighlight;
        "fr-icon": FrIcon;
        "fr-input": FrInput;
        "fr-link": FrLink;
        "fr-logo": FrLogo;
        "fr-modal": FrModal;
        "fr-navigation": FrNavigation;
        "fr-pagination": FrPagination;
        "fr-radio-group": FrRadioGroup;
        "fr-search": FrSearch;
        "fr-select": FrSelect;
        "fr-sidemenu": FrSidemenu;
        "fr-skiplinks": FrSkiplinks;
        "fr-summary": FrSummary;
        "fr-tag": FrTag;
        "fr-tags": FrTags;
        "fr-tile": FrTile;
        "fr-valid-text": FrValidText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "fr-accordion": LocalJSX.FrAccordion & JSXBase.HTMLAttributes<HTMLFrAccordionElement>;
            "fr-alert": LocalJSX.FrAlert & JSXBase.HTMLAttributes<HTMLFrAlertElement>;
            "fr-app": LocalJSX.FrApp & JSXBase.HTMLAttributes<HTMLFrAppElement>;
            "fr-breadcrumb": LocalJSX.FrBreadcrumb & JSXBase.HTMLAttributes<HTMLFrBreadcrumbElement>;
            "fr-btn": LocalJSX.FrBtn & JSXBase.HTMLAttributes<HTMLFrBtnElement>;
            "fr-btns": LocalJSX.FrBtns & JSXBase.HTMLAttributes<HTMLFrBtnsElement>;
            "fr-callout": LocalJSX.FrCallout & JSXBase.HTMLAttributes<HTMLFrCalloutElement>;
            "fr-card": LocalJSX.FrCard & JSXBase.HTMLAttributes<HTMLFrCardElement>;
            "fr-checkbox": LocalJSX.FrCheckbox & JSXBase.HTMLAttributes<HTMLFrCheckboxElement>;
            "fr-col": LocalJSX.FrCol & JSXBase.HTMLAttributes<HTMLFrColElement>;
            "fr-container": LocalJSX.FrContainer & JSXBase.HTMLAttributes<HTMLFrContainerElement>;
            "fr-error-text": LocalJSX.FrErrorText & JSXBase.HTMLAttributes<HTMLFrErrorTextElement>;
            "fr-footer": LocalJSX.FrFooter & JSXBase.HTMLAttributes<HTMLFrFooterElement>;
            "fr-form": LocalJSX.FrForm & JSXBase.HTMLAttributes<HTMLFrFormElement>;
            "fr-form-group": LocalJSX.FrFormGroup & JSXBase.HTMLAttributes<HTMLFrFormGroupElement>;
            "fr-grid-row": LocalJSX.FrGridRow & JSXBase.HTMLAttributes<HTMLFrGridRowElement>;
            "fr-header": LocalJSX.FrHeader & JSXBase.HTMLAttributes<HTMLFrHeaderElement>;
            "fr-header-service": LocalJSX.FrHeaderService & JSXBase.HTMLAttributes<HTMLFrHeaderServiceElement>;
            "fr-header-tools-links": LocalJSX.FrHeaderToolsLinks & JSXBase.HTMLAttributes<HTMLFrHeaderToolsLinksElement>;
            "fr-highlight": LocalJSX.FrHighlight & JSXBase.HTMLAttributes<HTMLFrHighlightElement>;
            "fr-icon": LocalJSX.FrIcon & JSXBase.HTMLAttributes<HTMLFrIconElement>;
            "fr-input": LocalJSX.FrInput & JSXBase.HTMLAttributes<HTMLFrInputElement>;
            "fr-link": LocalJSX.FrLink & JSXBase.HTMLAttributes<HTMLFrLinkElement>;
            "fr-logo": LocalJSX.FrLogo & JSXBase.HTMLAttributes<HTMLFrLogoElement>;
            "fr-modal": LocalJSX.FrModal & JSXBase.HTMLAttributes<HTMLFrModalElement>;
            "fr-navigation": LocalJSX.FrNavigation & JSXBase.HTMLAttributes<HTMLFrNavigationElement>;
            "fr-pagination": LocalJSX.FrPagination & JSXBase.HTMLAttributes<HTMLFrPaginationElement>;
            "fr-radio-group": LocalJSX.FrRadioGroup & JSXBase.HTMLAttributes<HTMLFrRadioGroupElement>;
            "fr-search": LocalJSX.FrSearch & JSXBase.HTMLAttributes<HTMLFrSearchElement>;
            "fr-select": LocalJSX.FrSelect & JSXBase.HTMLAttributes<HTMLFrSelectElement>;
            "fr-sidemenu": LocalJSX.FrSidemenu & JSXBase.HTMLAttributes<HTMLFrSidemenuElement>;
            "fr-skiplinks": LocalJSX.FrSkiplinks & JSXBase.HTMLAttributes<HTMLFrSkiplinksElement>;
            "fr-summary": LocalJSX.FrSummary & JSXBase.HTMLAttributes<HTMLFrSummaryElement>;
            "fr-tag": LocalJSX.FrTag & JSXBase.HTMLAttributes<HTMLFrTagElement>;
            "fr-tags": LocalJSX.FrTags & JSXBase.HTMLAttributes<HTMLFrTagsElement>;
            "fr-tile": LocalJSX.FrTile & JSXBase.HTMLAttributes<HTMLFrTileElement>;
            "fr-valid-text": LocalJSX.FrValidText & JSXBase.HTMLAttributes<HTMLFrValidTextElement>;
        }
    }
}
