// @ts-nocheck
import api from '../../api';
import { TableEmissions } from './table-emissions';

class TableCaption extends api.core.Instance {
  init () {
    this.height = 0;
    this.isResizing = true;
  }

  resize () {
    const height = this.getRect().height;
    if (this.height === height) return;
    this.height = height;
    this.ascend(TableEmissions.CAPTION_HEIGHT, height);
  }
}

export { TableCaption };
