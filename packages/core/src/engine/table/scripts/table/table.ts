// @ts-nocheck
import api from '../../api';
import { TableEmissions } from './table-emissions';

const PADDING = '1rem'; // padding de 4v sur le caption

class Table extends api.core.Instance {
  init () {
    this.addAscent(TableEmissions.CAPTION_HEIGHT, this.setCaptionHeight.bind(this));
  }

  setCaptionHeight (value) {
    this.setProperty('--table-offset', `calc(${value}px + ${PADDING})`);
  }
}

export { Table };
