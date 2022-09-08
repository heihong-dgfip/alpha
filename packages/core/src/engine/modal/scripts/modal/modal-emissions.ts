// @ts-nocheck
import api from '../../api';

export const ModalEmissions = {
  ACTIVATE: api.ns.emission('modal', 'activate'),
  DEACTIVATE: api.ns.emission('modal', 'deactivate')
};
