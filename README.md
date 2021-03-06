# Sand-UI
[![npm](https://img.shields.io/npm/v/sand-ui.svg?style=flat-square)](https://www.npmjs.com/package/sand-ui) [![npm](https://img.shields.io/npm/dm/sand-ui.svg?style=flat-square)](https://www.npmjs.com/package/sand-ui) [![GitHub issues](https://img.shields.io/github/issues/MedanoSoft/sand-ui.svg?style=flat-square)]()

![Sand-UI-Logo](http://i.imgur.com/ToGDWOY.png)

UI library for [React](https://facebook.github.io/react) based on [Flat UI](http://designmodo.github.io/Flat-UI/) style.


> Note: In order to change styles from any component, use the `style` prop. `className` prop is overwritten so just use it like the documentation below describes to.


## Installation


Sand-UI is available from npm as `sand-ui`:

```
npm install sand-ui --save
```

After installation you can get components from `sand-ui` library:

```jsx
// require modules (CommonJS)

const sand = require('sand-ui');
const Button = sand.Button;

// import modules (ES6)
import { Button } from 'sand-ui';

```

But to make it work, you need to wrap your App inside the `UIProvider`, like:

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { UIProvider } from 'sand-ui';
import App from './App';

ReactDOM.render(
  <UIProvider theme={{primary: '#AAA'}}>
    <App />
  </UIProvider>,
  document.getElementById('root')
);

```

You can also pass an object as theme prop to change default colors of Sand-UI, the object structure for colors is:

```js
{
  primary: '#34495E',
  secondary: '#1ABC9C',
  font: '#02222B',
  white: '#FFFFFF',
  lightGray: '#EEEEEE',
  green: '#53DF83',
  navy: '#074354',
  orange: '#F69C00',
  yellow: '#F5C700',
  red: '#EF4836',
  blue: '#47D2E9',
  gray: '#bdc3c7'
}
```

## Components

All components are made with :heart: by MedanoSoft team, giving you freedom to pass any props you need to,
event `style` if needed :smile:.

### Button

Just like any button, excepting you can pass a link to it.

**Example**

```jsx
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
| light     | Boolean   | Activate a light-style button |
| link      | String    | The same as anchor href |
| style     | Object    | Customs styles to add   |


### Checkbox

Checkbox and label, all in one.

**Example**

```jsx
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

```js
{
  name: 'One', // (string) item name
  link: 'https://github.com/MedanoSoft/sand-ui', // (string) url to link this item
  props: {
    // Props for this item
  }
}
```

**Example**

```jsx
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

| Props       | Type      | Description               |
| ----------- | --------- | ------------------------- |
| label       | String    | Label for flag button     |
| list        | Array     | List of items to show     |
| visible     | Boolean   | Toggle list               |
| buttonStyle | Object    | Custom styles for flag button  |


### Icon

This icon component uses SVG icons from [Linearicons](https://linearicons.com/free), you can use any of those icons passing the icon name without the `lnr-` prefix, all of those icon names are also described on this [Gist](https://gist.github.com/jhia/ccb7da42ff09e20be4fca68b5ad8fcdd) and inside [this Icon](https://github.com/MedanoSoft/sand-ui/tree/master/src/Icon/list.md) folder :octocat:

> Note: Remember to provide any container of this Icon component with a height.

**Example**

```jsx
import React from 'react';
import { Icon } from 'sand-ui';

class IconExample extends React.Component {

//...

  render() {
    return (
      <div style={{ height: 200 }}>
        <Icon name="bug" color="#00A86B" />
      </div>
    )
  }
}
```


| Props     | Type      | Description                |
| --------- | --------- | -----------------------    |
| name      | String    | Icon name from Linearicons |
| size      | String    | Define icon width          |
| color     | String    | Color of the icon, you can use an hex color or use any of this words: `active`, `inactive`, `success`, `warning`, `danger`, `disabled`, `inverse`, `error`, for Flat UI colorscheme |

### Navbar

Simple, horizontal nav component with searchbar.

**Example**

```jsx
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

| Props        | Type      | Description             |
| ---------    | --------- | ----------------------- |
| title        | node      | Navbar header           |
| middle       | node      | Element at the middle   |
| right        | node      | Element at the right    |
| searchbar    | boolean   | Add a searchbar on the nav (default: `false`) |
| onSearch     | function  | Called when user puts a line break (User hits Intro) |
| style        | object    | Custom styles to add    |
| placeholder  | string    | Placeholder for insert in searchbar |


### Pagination

Navigation with this simple pagination component.

**Example**

```jsx
import React, { Component } from 'react';
import { Pagination } from 'sand-ui';

class PaginationExample extends Component {
  render() {
    return (
      <Pagination pages={30} onPagination={(index) => console.log(`Switch to page ${index}`)} />
    )
  }
}
```
| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| pages     | Number    | Total of list options to show, default: `0`, which means *All*  |
| active    | Number    | Index of the active list option |
| onPagination  | Function | Called when user selects an option, return the option `index` |
| onLeftClick | Function | Called when user selects the left button |
| onRightClick | Function | Called when user selects the right button |



### Progress Bar

Horizontal light bar for showing progress.

**Example**

```jsx
import React, { Component } from 'react';
import { Progress } from 'sand-ui';

class ProgressExample extends Component {
  render() {
    return (
      <Progress type="info" percent={15} />
    )
  }
}
```
| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| type      | String    | Progress bar colorscheme. Available: `default`, `info`, `success`, `warning`, `danger`, `inverse` |
| percent   | Number    | Percent of progress. Default: `25` |
| style     | object    | Custom styles to add    |


### Radio

Radio buttons with labels.

**Instructions**

> Give it a name to group all radio buttons of the same type. If not, a default name will be given. Value is unique, and is used as an id.

**Example**

```jsx
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
| onChange  | Function  | Called when radio change it's state |

### Select


### Slider

This is a stylished form of `<input type="range" />` see [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) about.

**Example**

```jsx
import React from 'react';
import { Slider } from 'sand-ui';

class SliderExample extends React.Component {

  render() {
    return (
      <Slider step={4} />
    );
  }

}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| step      | Number    | Range separation. Default: `1` |
| style     | Object    | Custom styles to add    |
| onChange  | Function  | Called when slider change it's state |


### Switch

Use a switch if you need a playful component for a boolean input value.

**Example**

```jsx
import React from 'react';
import { Switch } from 'sand-ui';

class SwitchExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true
    };
    // ...
    this.handleSwitch = this.handleSwitch.bind(this);
  }

//...
  handleSwitch(value) {
    this.setState({
      status: value
    });
  }
  
  render() {
    const { status } = this.state;
    return (
        <form>
          <Switch type="box" status={status} onChange={this.handleSwitch} />
        </form>
    )
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| type      | String    | Style of the current switch. Available: 'circle' (default), 'box'. |
| status    | Boolean   | Current checkbox status |
| onChange  | Function  | Action on checkbox status, returns the Switch new state as a boolean.  |


### Tags

For multiple input strings, Tags component! :smile:

**Example**

```jsx
import React from 'react';
import { Tags } from 'sand-ui';

class TagsExample extends React.Component {

  render() {
    return (
      <Tags values={['One', 'Two']} onUpdate={(values) => console.log(values)} />
    );
  }

}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| values    | Array     | Stack of strings as values from user input  |
| list      | Array     | List of possible values, or datalist |
| onUpdate  | Function  | Action when values had changed  |


### TextInput

Simple styled text input. Available for any text-like input if you describe it as `type` prop.

> Note: You don't need to add `disabled` prop if you declare it as className.

**Example**

```jsx
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
      <TextInput placeholder="Jane Doe" type="text" value={value} onChange={this.handleChange} />
    );
  }
}
```

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| type      | String    | Type of input, the default is `text`. Available: `text`, `number`, `email`, `password`, `date`, `search` |
| className | String    | Change input color depending on type. Available: `active` (default), `success`, `error`, `disabled` |
| icon      | String or Element | Insert an icon at the left, or the element you desire to |
| disabled  | Boolean   | Disable input interaction |
| style     | Object    | Custom styles to add    |


## Grids

In order to make a responsive display, we have integrated a grid system called [Flexbox Grid](http://flexboxgrid.com/) and adapted to React components, now you got a flex-based full grid display.

### Container

This component offers a flexible layout for multiple boxes or any other children.

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| direction | String    | Boxes direction, type: `row` (default), `column` |
| reverse   | Boolean   | Reverse order of the boxes, default: `false` |
| fluid     | Boolean   | More fluent and spaced container, default: `false` | 
| dist      | String    | Boxes distribution for minimal screen sizes, type: `start`, `center`, `end`, `around`(default), `between` |
| smDist    | String    | Boxes distribution for small screen sizes, type: `start`, `center`, `end`, `around`, `between` |
| mdDist    | String    | Boxes distribution for medium screen sizes, type: `start`, `center`, `end`, `around`(default), `between` |
| lgDist    | String    | Boxes distribution for large screen sizes, type: `start`, `center`, `end`, `around`, `between` |
| align     | String    | Box alignment for minimal screen sizes, type: `top`(default), `middle`, `bottom` |
| smAlign   | String    | Box alignment for small screen sizes, type: `top`, `middle`, `bottom` |
| mdAlign   | String    | Box alignment for medium screen sizes, type: `top`, `middle`, `bottom` |
| lgAlign   | String    | Box alignment for large screen sizes, type: `top`, `middle`, `bottom` |
| style     | Object    | Custom styles to add    |


### Box

Component with flexible column size (selected from 1 to 12, auto if not defined).

| Props     | Type      | Description             |
| --------- | --------- | ----------------------- |
| xs        | Number    | Column size for minimal screen size, from 1 to 12, default `0`(auto) |
| xsOffset  | Number    | Left distance spacing (in columns) for minimal screen size, from 1 to 12, default `0`(auto) |
| sm        | Number    | Column size for small screen size, from 1 to 12, default `0`(auto) |
| smOffset  | Number    | Left distance spacing (in columns) for small screen size, from 1 to 12, default `0`(auto) |
| md        | Number    | Column size for medium screen size, from 1 to 12, default `0`(auto) |
| mdOffset  | Number    | Left distance spacing (in columns) for medium screen size, from 1 to 12, default `0`(auto) |
| lg        | Number    | Column size for large screen size, from 1 to 12, default `0`(auto) |
| lgOffset  | Number    | Left distance spacing (in columns) for large screen size, from 1 to 12, default `0`(auto) |
| style     | Object    | Custom styles to add    |


### Example

```jsx
import React from 'react';
import { Container, Box } from 'sand-ui';

class InputExample extends React.Component {
  render() {
    return (
      <Container fluid mdAlign={"middle"} reverse>
        <Box xs={4} md={6} style={{backgroundColor: 'red' }}>
          <p>Hi</p>
        </Box>
        <Box xs={2} md={4} style={{backgroundColor: 'green' }}>
          <p>From a</p>
        </Box>
        <Box style={{backgroundColor: 'blue' }}>
          <p>Box!</p>
        </Box>
      </Container>
    )
  }
}
```


## License

Copyright (c) 2004-2010 by Internet Systems Consortium, Inc. ("ISC") 
Copyright (c) 1995-2003 by Internet Software Consortium

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND ISC DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL ISC BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

More info about this license [here](https://www.isc.org/downloads/software-support-policy/isc-license/).
