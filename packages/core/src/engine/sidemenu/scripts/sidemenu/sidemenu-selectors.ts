// @ts-nocheck
import api from '../../api';

export const SidemenuSelectors = {
  LIST: api.ns.selector('sidemenu__list'),
  COLLAPSE: `${api.ns.selector('sidemenu__item')} > ${api.ns.selector('collapse')}`
};
