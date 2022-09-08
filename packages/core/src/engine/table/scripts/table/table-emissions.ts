// @ts-nocheck
import api from '../../api';

export const TableEmissions = {
  SCROLLABLE: api.ns.emission('table', 'scrollable'),
  CHANGE: api.ns.emission('table', 'change'),
  CAPTION_HEIGHT: api.ns.emission('table', 'captionheight')
};
