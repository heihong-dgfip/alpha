// @ts-nocheck
import api from '../../api';
import { HeaderSelectors } from './header-selectors';

class HeaderLinks extends api.core.Instance {
  init () {
    const header = this.queryParentSelector(HeaderSelectors.HEADER);
    this.toolsLinks = header.querySelector(HeaderSelectors.TOOLS_LINKS);
    this.menuLinks = header.querySelector(HeaderSelectors.MENU_LINKS);

    const toolsHtml = this.toolsLinks.innerHTML.replace(/  +/g, ' ');
    const menuHtml = this.menuLinks.innerHTML.replace(/  +/g, ' ');

    if (toolsHtml === menuHtml) return;

    switch (api.mode) {
      case api.Modes.ANGULAR:
      case api.Modes.REACT:
      case api.Modes.VUE:
        api.inspector.warn(`header__tools-links content is different from header__menu-links content.
As you're using a dynamic framework, you should handle duplication of this content yourself, please refer to documentation: 
${api.header.doc}`);
        break;

      default:
        this.menuLinks.innerHTML = this.toolsLinks.innerHTML;
    }
  }
}

export { HeaderLinks };
