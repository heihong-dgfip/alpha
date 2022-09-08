// @ts-nocheck
import api from './index';

api.register(api.modal.ModalSelectors.MODAL, api.modal.Modal);
api.register(api.modal.ModalSelectors.BODY, api.modal.ModalBody);
api.register(api.core.RootSelector.ROOT, api.modal.ModalsGroup);

export default api;
