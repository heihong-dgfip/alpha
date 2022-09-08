// @ts-nocheck
import api from './scripts/api/api';

import { Instance } from './scripts/api/register/instance';
import { KeyCodes } from './scripts/api/register/key-codes';
import { Breakpoints } from './scripts/api/register/breakpoints';
import { Disclosure } from './scripts/disclosure/disclosure';
import { DisclosureButton } from './scripts/disclosure/disclosure-button';
import { DisclosuresGroup } from './scripts/disclosure/disclosures-group';
import { DisclosureTypes } from './scripts/disclosure/disclosure-types';
import { DisclosureEvents } from './scripts/disclosure/disclosure-events';
import { DisclosureEmissions } from './scripts/disclosure/disclosure-emissions';
import { CollapseButton } from './scripts/collapse/collapse-button';
import { Collapse } from './scripts/collapse/collapse';
import { CollapsesGroup } from './scripts/collapse/collapses-group';
import { CollapseSelectors } from './scripts/collapse/collapse-selectors';
import { Equisized } from './scripts/equisized/equisized';
import { EquisizedsGroup } from './scripts/equisized/equisizeds-group';
import { EquisizedEmissions } from './scripts/equisized/equisized-emissions';
import { RootSelector } from './scripts/api/stage/root';

api.core = {
  Instance: Instance,
  Breakpoints: Breakpoints,
  KeyCodes: KeyCodes,
  Disclosure: Disclosure,
  DisclosureButton: DisclosureButton,
  DisclosuresGroup: DisclosuresGroup,
  DisclosureTypes: DisclosureTypes,
  DisclosureEvents: DisclosureEvents,
  DisclosureEmissions: DisclosureEmissions,
  Collapse: Collapse,
  CollapseButton: CollapseButton,
  CollapsesGroup: CollapsesGroup,
  CollapseSelectors: CollapseSelectors,
  RootSelector: RootSelector,
  Equisized: Equisized,
  EquisizedEmissions: EquisizedEmissions,
  EquisizedsGroup: EquisizedsGroup
};

export default api;
