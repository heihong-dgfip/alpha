// @ts-nocheck
import api from '../../api';

export const AccordionSelectors = {
  GROUP: api.ns.selector('accordions-group'),
  COLLAPSE: `${api.ns.selector('accordion')} > ${api.ns.selector('collapse')}`
};
