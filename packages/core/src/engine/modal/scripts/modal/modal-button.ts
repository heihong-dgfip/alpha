// @ts-nocheck
import api from '../../api';

class ModalButton extends api.core.DisclosureButton {
  constructor () {
    super(api.core.DisclosureTypes.OPENED);
  }
}

export { ModalButton };
