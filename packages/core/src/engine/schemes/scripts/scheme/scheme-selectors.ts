// @ts-nocheck
import api from '../../api';

export const SchemeSelectors = {
  SCHEME: `:root${api.ns.attr.selector('theme')}, :root${api.ns.attr.selector('scheme')}`,
  SWITCH_THEME: api.ns.selector('switch-theme'),
  RADIO_BUTTONS: `input[name="${api.ns('radios-theme')}"]`
};
