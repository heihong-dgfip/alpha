import { html } from 'lit-html';

export const styles = html`
<style>
  p {
    box-shadow: inset 0 0 0 1px var(--bf500);
    text-align: center;
    background-color: var(--beige);
    padding: 16px 0;
    margin: 0 !important;
  }

  fr-grid-row fr-grid-row p {
    background-color: var(--error);
  }
</style>
`;
