// @ts-nocheck
import state from './state';
import options, { Modes } from './options/options';
import config from '../../config';
import engine from './engine';
import inspector from './inspect/inspector';
import ns from './utilities/namespace';
import { addClass, hasClass, removeClass } from './utilities/classes';
import { queryParentSelector, querySelectorAllArray } from './utilities/query-selector';

inspector.info(`version ${config.version}`);

const api = (node) => {
  const stage = state.getModule('stage');
  return stage.getProxy(node);
};

api.Modes = Modes;

Object.defineProperty(api, 'mode', {
  set: (value) => { options.mode = value; },
  get: () => options.mode
});

Object.defineProperty(api, 'preventManipulation', {
  get: () => options.preventManipulation
});

api.ns = ns;
api.addClass = addClass;
api.hasClass = hasClass;
api.removeClass = removeClass;
api.queryParentSelector = queryParentSelector;
api.querySelectorAllArray = querySelectorAllArray;

api.start = engine.start;
api.stop = engine.stop;

const register = state.getModule('register');
api.register = register.register.bind(register);

const stage = state.getModule('stage');
api.connectCustomElement = stage.connectCustomElement.bind(stage);
api.disconnectCustomElement = stage.disconnectCustomElement.bind(stage);

api.inspector = inspector;

options.configure(config, api.start);
options.preventManipulation = true;

window[config.namespace] = api;
export default api;
