# fr-modal



<!-- Auto Generated Below -->


## Properties

| Property            | Attribute      | Description       | Type           | Default     |
| ------------------- | -------------- | ----------------- | -------------- | ----------- |
| `frId` _(required)_ | `fr-id`        | Unique identifier | `string`       | `undefined` |
| `frTitle`           | `fr-title`     | Title             | `string`       | `undefined` |
| `headerModal`       | `header-modal` | full              | `boolean`      | `false`     |
| `size`              | `size`         | Size              | `"lg" \| "sm"` | `undefined` |
| `top`               | `top`          | Stack at top      | `boolean`      | `false`     |


## Dependencies

### Used by

 - [fr-header](../header)

### Depends on

- [fr-container](../container)
- [fr-grid-row](../grid-row)
- [fr-col](../col)
- [fr-btn](../button)
- [fr-icon](../icon)

### Graph
```mermaid
graph TD;
  fr-modal --> fr-container
  fr-modal --> fr-grid-row
  fr-modal --> fr-col
  fr-modal --> fr-btn
  fr-modal --> fr-icon
  fr-header --> fr-modal
  style fr-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
