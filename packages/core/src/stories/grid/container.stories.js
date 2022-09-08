import { html } from 'lit-html';
import { styles } from './grid';

export default {
  title: 'grid/fr-container',
};

export const WithoutGutters = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row>
      <fr-col width="12">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
      </fr-col>
      <fr-col>
        <p>col</p>
      </fr-col>
      <fr-col>
        <p>col</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const WithGutters = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col width="12">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
      </fr-col>
      <fr-col>
        <p>col</p>
      </fr-col>
      <fr-col>
        <p>col</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const Fluid = () => html`
${styles}
<fr-app>
  <fr-container fluid>
    <fr-grid-row>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
      <fr-col width="1">
        <p>1/12</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;
