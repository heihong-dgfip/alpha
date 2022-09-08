# fr-form-group



<!-- Auto Generated Below -->


## Properties

| Property               | Attribute                | Description            | Type      | Default     |
| ---------------------- | ------------------------ | ---------------------- | --------- | ----------- |
| `disabled`             | `disabled`               | Disabled state         | `boolean` | `false`     |
| `hint`                 | `hint`                   | Hint text              | `string`  | `undefined` |
| `inline`               | `inline`                 | Inline controls        | `boolean` | `false`     |
| `legend` _(required)_  | `legend`                 | Fieldset legend        | `string`  | `undefined` |
| `legendTextRegular`    | `legend-text-regular`    | Legend text regular    | `boolean` | `false`     |
| `legendVisuallyHidden` | `legend-visually-hidden` | Legend visually hidden | `boolean` | `false`     |


## Events

| Event       | Description                                 | Type                              |
| ----------- | ------------------------------------------- | --------------------------------- |
| `frDisable` | Emitted when the disable state has changed. | `CustomEvent<DisableEventDetail>` |


## Slots

| Slot        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| `"message"` | Error or validation message : `fr-error-text` or `fr-valid-text` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
