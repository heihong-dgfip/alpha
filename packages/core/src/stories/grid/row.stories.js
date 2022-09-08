import { html } from 'lit-html';
import { styles } from './grid';

export default {
  title: 'grid/fr-grid-row',
  argTypes: {
    align: {
      control: {
        type: 'select',
        options: { top: 'top', bottom: 'bottom', middle: 'middle', },
      },
    },
    justify: {
      control: {
        type: 'select',
        options: { left: 'left', right: 'right', center: 'center', },
      },
    },
  },
};

export const WithoutGutters4Col = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const WithoutGutters6Col = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const WithGutters4Col = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
      <fr-col>
        <p>1/4</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const WithGutters6Col = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row gutters>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
      <fr-col>
        <p>1/6</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

export const Nested = () => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row>
      <fr-col width="8">
        <fr-grid-row gutters>
          <fr-col width="6">
            <p>6/12</p>
          </fr-col>
          <fr-col width="6">
            <p>6/12</p>
          </fr-col>
        </fr-grid-row>
      </fr-col>
      <fr-col width="4">
        <p>4/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="3">
        <p>3/12</p>
      </fr-col>
      <fr-col width="6">
        <fr-grid-row>
          <fr-col width="4">
            <p>4/12</p>
          </fr-col>
          <fr-col width="4">
            <p>4/12</p>
          </fr-col>
          <fr-col width="4">
            <p>4/12</p>
          </fr-col>
        </fr-grid-row>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>
`;

const AlignTemplate = ({ align }) => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row align=${align} gutters>
      <fr-col width="3">
        <p>align ${align}</p>
      </fr-col>
      <fr-col width="3">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing, incididunt, ut labore et dolore magna aliqua. Vitae sapien pellentesque habitant morbi tristique senectus et. Diam maecenas sed enim ut. Accumsan lacus vel facilisis volutpat est. Ut aliquam purus sit amet luctus. Lorem ipsum dolor sit amet consectetur adipiscing elit ut.</p>
      </fr-col>
      <fr-col width="3">
        <p>align ${align}</p>
      </fr-col>
      <fr-col width="3">
        <p>align ${align}</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>`;

export const AlignTop = AlignTemplate.bind({});
AlignTop.args = {
  align: 'top'
};

export const AlignBottom = AlignTemplate.bind({});
AlignBottom.args = {
  align: 'bottom'
};

export const AlignMiddle = AlignTemplate.bind({});
AlignMiddle.args = {
  align: 'middle'
};

const JustifyTemplate = ({ justify }) => html`
${styles}
<fr-app>
  <fr-container>
    <fr-grid-row justify=${justify} gutters>
      <fr-col width="3">
        <p>justify ${justify}</p>
      </fr-col>
      <fr-col width="3">
        <p>justify ${justify}</p>
      </fr-col>
    </fr-grid-row>
  </fr-container>
</fr-app>`;

export const JustifyLeft = JustifyTemplate.bind({});
JustifyLeft.args = {
  justify: 'left'
};

export const JustifyRight = JustifyTemplate.bind({});
JustifyRight.args = {
  justify: 'right'
};

export const JustifyCenter = JustifyTemplate.bind({});
JustifyCenter.args = {
  justify: 'center'
};
