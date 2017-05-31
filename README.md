# Sand-UI
[![npm](https://img.shields.io/npm/v/sand-ui.svg?style=flat-square)](https://www.npmjs.com/package/sand-ui) [![npm](https://img.shields.io/npm/dm/sand-ui.svg?style=flat-square)](https://www.npmjs.com/package/sand-ui) [![GitHub issues](https://img.shields.io/github/issues/MedanoSoft/sand-ui.svg?style=flat-square)]()

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

Checkbox and label, all in one.

**Example**

```
import React from 'react';
import { Checkbox } from 'sand-ui';

class CheckboxExample extends React.Component {

//...

  render() {
    return (
      <form>
        <Checkbox checked name="Eggs" />
        <Checkbox name="Chicken" />
        <Checkbox name="Tomatoes" />
        <Checkbox checked name="Milk" />
        <Checkbox checked name="Checkout to-do list" />
      </form>
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| name      | String    | Checkbox's label        |
| checked   | Boolean   | Works active or disabled |
| onChange  | Function  | Called when checkbox change it's state  |
| disabled  | Boolean   | Disable checkbox interaction |


### Dropdown

List of items like a list-menu, Dropdown is not the same as Select component. Pass an array of items to list prop, it needs to be a list of strings, elements or objects like:

```
{
  name: 'One', // (string) item name
  link: 'https://github.com/MedanoSoft/sand-ui', // (string) url to link this item
  props: {
    // Props for this item
  }
}
```

**Example**

```
import React from 'react';
import { Dropdown } from 'sand-ui';

class DropdownExample extends React.Component {
  constructor() {
    super();

    this.list = [
      'Twitter',
      'LinkedIn',
      (<br />),
      {
        name: 'GitHub',
        link: 'https://github.com/MedanoSoft',
        props: {
          onClick: () => console.log('GitHub here it goes!')
        }
      }
    ]
  }
//...

  render() {
    return (
        <Dropdown label="Social Media" list={this.list} />
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| label     | String    | Label for flag button   |
| list      | Array     | List of items to show   |


### Icon

This icon component uses SVG icons from [Linearicons](https://linearicons.com/free), you can use any of those icons passing the icon name without the `lnr-` prefix, all of those icon names are also described on this [Gist](https://gist.github.com/jhia/ccb7da42ff09e20be4fca68b5ad8fcdd) :octocat:

**Example**

```
import React from 'react';
import { Icon } from 'sand-ui';

class IconExample extends React.Component {

//...

  render() {
    return (
        <Icon name="bug" color="#00A86B" />
    )
  }
}
```


| Props     | Type      | Description                |
| --------- | --------- | -----------------------    |
| name      | String    | Icon name from Linearicons |
| color     | String    | Color of the icon, you can use an hex color or use any of this words: `active`, `inactive`, `success`, `warning`, `danger`, `disabled`, `inverse`, for Flat UI colorscheme |

### Navbar

Simple, horizontal nav component with searchbar.

**Example**

```
import React from 'react';
import { Navbar } from 'sand-ui';

class NavbarExample extends React.Component {
  constructor(props) {
    super(props);

    //...
    this.handleSearchbar = this.handleSearchbar.bind(this);
  }

//...
  handleSearchbar(val) {
    console.log(`You are looking for ${val}`);
  }
  
  render() {
    return (
        <Navbar
          title="SandUI"
          right={(<span>&hearts;</span>)}
          searchbar
          onSearch={this.handleSearchbar} />
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| title     | node      | Navbar header           |
| middle    | node      | Element at the middle   |
| right     | node      | Element at the right    |
| searchbar | boolean   | Add a searchbar on the nav (default: `false`) |
| onSearch  | function  | Called when user puts a line break (User hits Intro) |
| style     | object    | Custom styles to add    |


### Progress Bar

```
import { Progress } from 'sand-ui';
```

### Radio

Radio buttons with labels.

**Instructions**

> Give it a name to group all radio buttons of the same type. If not, a default name will be given. Value is unique, and is used as an id.

**Example**

```
import React from 'react';
import { Radio } from 'sand-ui';

class RadioExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animal: 'cat'
    };
    // ...
    this.handleRadio = this.handleRadio.bind(this);
  }

//...
  handleRadio(value) {
    this.setState({
      animal: value
    });
  }
  
  render() {
    return (
        <form>
          <Radio name="animals" value="cat" checked={this.state.animal === 'cat'} onChange={this.handleRadio}>Cat</Radio>
          <Radio name="animals" value="dog" checked={this.state.animal === 'dog'} onChange={this.handleRadio}>Dog</Radio>
          <Radio value="dragon" name="animals" disabled>Dragon</Radio>
        </form>
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| name      | String    | Name of radio group     |
| value     | String    | Value for radio button  |
| checked   | boolean   | Select this radio       |
| disabled  | boolean   | Disable button interaction |

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
| icon      | String or Element | Insert an icon at the left, or the element you desire to |
| disabled  | Boolean   | Disable input interaction |
| style     | Object    | Custom styles to add    |


## License

Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC") 
Copyright (c) 1995-2003 by Internet Software Consortium

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

More info about this license [here](https://www.isc.org/downloads/software-support-policy/isc-license/).