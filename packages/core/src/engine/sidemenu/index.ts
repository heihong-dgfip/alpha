// @ts-nocheck
import api from './api';
import { SidemenuList } from './scripts/sidemenu/sidemenu-list';
import { SidemenuSelectors } from './scripts/sidemenu/sidemenu-selectors';

api.sidemenu = {
  SidemenuList: SidemenuList,
  SidemenuSelectors: SidemenuSelectors
};

export default api;
