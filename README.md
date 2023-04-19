# display-my-counter

Simple React counter component

## Instalation
```
npm i display-my-counter
```

## Usage

Import the component and call it in your app

```
<Counter />
```

## Override

The counter component accepts a property called CustomComponent. This is a React component that will receive counter value and increment and decrement functions.

```
const Custom = ({ counter, increment, decrement }) => <p>{counter}</p>;

<Counter CustomComponent={<Custom />} />
```