// @ts-nocheck
import api from './api';
import { Breadcrumb } from './scripts/breadcrumb/breadcrumb';
import { BreadcrumbSelectors } from './scripts/breadcrumb/breadcrumb-selectors';

api.breadcrumb = {
  BreadcrumbSelectors: BreadcrumbSelectors,
  Breadcrumb: Breadcrumb
};

export default api;
