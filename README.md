# Components
-------------------

## Button
```
improt React from 'react';
import { Button } from 'sand-ui';

class ButtonExample extends React.Component {
//...
  render() {
    return (
      <Button onClick={() => console.log('Click!')}>Click me!</Button>
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| type      | String    | Change button color depending on type. Available: `active` (default), `info`, `inverse`, `success`, `warning`, `danger`, `disabled` |
| link      | String    | The same as anchor href |
| style     | Object    | Customs styles to add   |


