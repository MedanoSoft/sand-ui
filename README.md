# Provider

First of all, wrap your main application component inside `UIProvider` like:
```
import React from 'react';
import { render } from 'react-dom';
import { UIProvider } from 'sand-ui';

import App from './src/to/App';

render(
	<UIProvider>
		<App />
	</UIProvider>,
	document.getElementById('root')
);

```


# Components
-------------------

## Button
```
import React from 'react';
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


## Checkbox

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| name      | String    | Checkbox's label        |
| checked   | Boolean   | Works active or disabled |
| onChange  | Function  | Called when chackbox change it's state  |
| disabled  | Boolean   | Disable checkbox interaction |


## Dropdown


## Navbar


## Progress Bar

```
import { Progress } from 'sand-ui';
```


## Select


## Slider


## Tags


## TextInput

