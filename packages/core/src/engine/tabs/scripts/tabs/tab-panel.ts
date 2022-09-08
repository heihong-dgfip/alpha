// @ts-nocheck
import api from '../../api';
import { TabButton } from './tab-button';
import { TabSelectors } from './tab-selectors';

/**
  * Tab coorespond au panel d'un élement Tabs (tab panel)
  * Tab étend disclosure qui ajoute/enleve le modifier --selected,
  * et ajoute/eleve l'attribut hidden, sur le panel
  */
class TabPanel extends api.core.Disclosure {
  constructor () {
    super(api.core.DisclosureTypes.SELECT, TabSelectors.PANEL, TabButton, 'TabsGroup');
  }

  translate (direction, initial) {
    this.style.transition = initial ? 'none' : '';
    this.style.transform = `translate(${direction * 100}%)`;
  }

  reset () {
    this.group.index = 0;
  }
}

export { TabPanel };
