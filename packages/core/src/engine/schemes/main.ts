// @ts-nocheck
import api from './index';

api.register(api.schemes.SchemesSelectors.SCHEME, api.schemes.Scheme);
api.register(api.schemes.SchemesSelectors.SWITCH_THEME, api.schemes.SwitchTheme);

export default api;
