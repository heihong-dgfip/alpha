// @ts-nocheck
import api from '../../api';

/**
  * TabButton correspond au bouton cliquable qui change le panel
  * TabButton étend de DisclosureButton qui ajoute/enelve l'attribut aria-selected,
  * Et change l'attributte tabindex a 0 si le boutton est actif (value=true), -1 s'il n'est pas actif (value=false)
 */
class TabButton extends api.core.DisclosureButton {
  constructor () {
    super(api.core.DisclosureTypes.SELECT);
  }

  apply (value) {
    super.apply(value);
    if (this.isPrimary) {
      this.setAttribute('tabindex', value ? '0' : '-1');
    }
  }
}

export { TabButton };
