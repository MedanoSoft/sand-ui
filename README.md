# Sand-UI
[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/sand-ui

UI library for [React](https://facebook.github.io/react) based on [Flat UI](http://designmodo.github.io/Flat-UI/) style.


> Note: In order to change styles from any component, use the `style` prop. `className` prop is overwritten so just use it like the documentation below describes to. 


## Installation


Sand-UI is available from npm as `sand-ui`:

```
npm install sand-ui --save
```

After installation you can get components from `sand-ui` library:

```
// require modules (CommonJS)

const sand = require('sand-ui');
const Button = sand.Button;

// import modules (ES6)
import { Button } from 'sand-ui';

```

### Provider

First of all, wrap your main application component inside `UIProvider` from `sand-ui`. This is necessary.

A quick example for you:

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

And you're ready!


## Components

All components are made with :heart: by MedanoSoft team, giving you freedom to pass any props you need to,
event `style` if needed :smile:.

### Button

Just like any button, excepting you can pass a link to it.

**Example**

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
| className | String    | Change button color depending on type. Available: `active` (default), `info`, `inverse`, `success`, `warning`, `danger`, `disabled` |
| link      | String    | The same as anchor href |
| style     | Object    | Customs styles to add   |


### Checkbox

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| name      | String    | Checkbox's label        |
| checked   | Boolean   | Works active or disabled |
| onChange  | Function  | Called when chackbox change it's state  |
| disabled  | Boolean   | Disable checkbox interaction |


### Dropdown


### Navbar


### Progress Bar

```
import { Progress } from 'sand-ui';
```


### Select


### Slider


### Tags


### TextInput

Simple styled text input. Available for any text-like input if you describe it as `type` prop.

> Note: You don't need to add `disabled` prop if you declare it as className.

**Example**

```
import React from 'react';
import { TextInput } from 'sand-ui';

class InputExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.setState({
  		value: event.target.value
  	});
  }

//...

  render() {
    const { value } = this.state;
    return (
      <TextInput placeholder="Jane Doe" className="text" value={value} onChange={this.handleChange} />
    );
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| type      | String    | Type of input, the default is `text`. Suggested: `text`, `number`, `email`, `password`, `date` |
| className | String    | Change input color depending on type. Available: `active` (default), `success`, `error`, `disabled` |
| disabled  | Boolean   | Disable input interaction |
| style     | Object    | Custom styles to add    |


## License

Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC") 
Copyright (c) 1995-2003 by Internet Software Consortium

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

More info about this license [here](https://www.isc.org/downloads/software-support-policy/isc-license/).