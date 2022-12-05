## minimal-react-components

![npm](https://img.shields.io/npm/v/minimal-react-components)

## Table contents:

- [Installation](#installation)
- [Examples](#examples)

## Installation

`npm install --save minimal-react-components`

## Examples

- [Button](#button)
- [Card](#card)
- [Checkbox](#checkbox)
- [Dropdown](#dropdown)
- [Header](#header)
- [Modal](#modal)
- [Table](#table)
- [Tabs](#tabs)
- [Text](#text)
- [TextInput](#textinput)

### Button

#### Props

- onClick (default: `function() {}`)
  - function that should be called on click of the button
- styles (default: `{}`)
  - an object to override default styles

```js
import { Button } from 'minimal-react-components';

const Component = () => {
	return (
		<Button onClick={() => {}} styles={{ borderRadius: '5px' }}>
			Submit
		</Button>
	);
};
```

### Card

#### Props

- headerContents (default: `null`)
  - React component that should be displayed as header for the card
- footerContents (default: `null`)
  - React component that should be displayed as footer for the card
- styles (default: `{}`)
  - object to override default styles for the entire card component
- headerStyles (default: `{}`)
  - object to override default styles for header of card component
- footerStyles (default: `{}`)
  - object to override default styles for footer of card component

```js
import { Card } from 'minimal-react-components';

const Component = () => {
	return (
		<Card
		  headerContents={<Text styles={{ color: 'black' }}
		  footerContents={
				<React.Fragment>
					<Button>Cancel</Button>
					<Button>Submit</Button>
				</React.Fragment>
			}
		>
			<div style={{ padding: '10px' }}>
				<Text>Your name here!</Text>
			</div>
		</Card>
	)
}
```

### Checkbox

#### Props

- value (default: `{}`)
- label (default: `''`)
  - text that should be displayed by the checkbox
- onClick (default: `function() {}`)
  - function that will be called when checkbox's `checked` prop changes. The entire [html event](https://developer.mozilla.org/en-US/docs/Web/API/Event) object is passed as an argument to the `onClick` function.

```js
import { Checkbox } from 'minimal-react-components';

const Component = () => {
	return <Checkbox label="Cars" value="Cars" onClick={() => {}} />;
};
```

### Dropdown

### Props

- options (default: `[]`)
  - an array of objects with `label` property that will be used as text for each dropdown option
- selectedItemIndex (default: `0`)
  - a number indicating which item from the dropdown should be set as selected
- showIconForSelectedItem (default: `true`)
  - boolean flag indicating whether a ✓ icon should be displayed for the dropdown option that's currently selected
- styles (default: `{}`)
  - an object to override default styles
- onSelect (default: `function() {}`)
  - function that will be called when a new dropdown item is selected with the index of new item selected passed as an argument

```js
import { Dropdown } from 'minimal-react-components';

const options = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }];

const Component = () => {
	return (
		<Dropdown
			options={options}
			selectedItemIndex={0}
			showIconForSelectedItem={true}
			onSelect={(newIndex) => setNewDropdownSelectionIndex(newIndex)}
		/>
	);
};
```

### Header

`Header` is a higher order react component which takes three props (`left`, `center` and `right`) as react elements and renders them accordingly on the page.

#### Props

- left
- React element that will be displayed on the left side of Header
- center
  - React element that will be displayed in the middle of Header component
- right
  - React element that will be displayed on the right side of Header component
- styles (default: `{}`)
  - an object to override default styles

```js
import { Button, Header, Text, TextInput } from 'minimal-react-components';

const Component = () => {
	return (
		<Header
			left={<Text>Hey there!</Text>}
			center={<TextInput placeHolder="Search" />}
			right={<Button>Submit</Button>}
		/>
	);
};
```

### Modal

#### Props

- title (default: `''`)
  - title text for modal
- showCloseIcon (default: `false`)
  - boolean flag indicating whether close icon should be displayed or not
- styles (default: `{}`)
  - an object to override default styles
- footerContents (default: `null`)
  - React component that should be displayed as footer for the modal
- onClose (default: `function() {}`)
  - function that will be called when the modal is closed using the close icon

```js
import { Modal, Button } from 'minimal-react-components';

const Component = () => {
	return (
		<Modal
			title="Modal title"
			showCloseIcon
			footerContents={<Button>Submit</Button>}
		>
			Modal content
		</Modal>
	);
};
```

### Table

#### Props

- data (default: `[]`)
  - an array of array of objects with following props
    - `label`: text that should be displayed for each cell in table
    - `subLabel`: secondary text that you want to be displayed just below the main text

```js
import { Table } from 'minimal-react-components';

const TABLE_DATA = [
	[{ label: '1 1' }, { label: '1 2' }, { label: '1 3' }],
	[
		{ label: '2 1', subLabel: 'Hello world!' },
		{ label: '2 2' },
		{ label: '2 3' },
	],
	[{ label: '3 1' }, { label: '3 2' }, { label: '3 3' }],
];

const Component = () => {
	return <Table data={TABLE_DATA} />;
};
```

### Tabs

#### Props

- tabs (default: `[]`)
  - an array of objects with `label` property that will be used as text for each tab
- selectedTabIndex (default: `0`)
  - number indicating which tab is currently selected
- styles (default: `{}`)
  - an object to override default styles of the entire tab bar
- tabStyles (default: `{}`)
  - an object to override styles for each tab
- onClick (default: `function() {}`)
  - function that will be called when a tab is selected with the index of that tab passed as an argument

```js
import { Tabs } from 'minimal-react-components';

const TABS = [{ label: 'One' }, { label: 'Two' }, { label: 'Three' }];

const Component = () => {
	return (
		<Tabs
			tabs={TABS}
			selectedTabIndex={0}
			onClick={(newTabIndex) => setNewTabIndex(newTabIndex)}
		/>
	);
};
```

### Text

#### Props

- styles (default: `{}`)
  - an object to override default styles
- onClick (default: `function() {}`)
  - function that will be called when the text element is clicked

```js
import { Text } from 'minimal-react-components';

const Component = () => {
	return <Text onClick={() => {}}>Hello World!</Text>;
};
```

### TextInput

### Props

- value (default: `''`)
  - value for the `input` element
- placeHolder (default: `''`)
  - place holder text for the user
- autoFocus (default: `false`)
  - boolean flag indicating if focus should be set on the input field or not
- styles (default: `{}`)
  - an object to override default styles
- onChange (default: `function() {}`)
  - function that will be called whenever input value changes. New input text will be passed as an argument

```js
import { TextInput } from 'minimal-react-components';

const Component = () => {
	return (
		<TextInput
			value=''
			placeHolder='Enter your name'
			autoFocus={true}
			styles={{ borderRadius: '5px' }}
			onChange={() => {}}
		>
	);
};
```
