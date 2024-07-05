# HOC

Here's a brief example of a Higher-Order Component (HOC) used with a functional component in React:

```jsx
import React from 'react';

// Define a higher-order component
const withLogging = (WrappedComponent) => {
  return (props) => {
    console.log(`Logging props:`, props);
    return <WrappedComponent {...props} />;
  };
};

// Functional component to be wrapped
const MyComponent = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

// Wrap MyComponent with the higher-order component
const LoggedComponent = withLogging(MyComponent);

// Usage
const App = () => {
  return <LoggedComponent name="Alice" />;
};

export default App;
```

In this example:
- `withLogging` is a higher-order component that takes a component (`WrappedComponent`) as an argument and returns a new component that logs the props passed to it before rendering `WrappedComponent`.
- `MyComponent` is a simple functional component that displays a greeting.
- `LoggedComponent` is the result of applying `withLogging` to `MyComponent`, creating a new component that logs props and renders `MyComponent`.
- In `App`, `LoggedComponent` is used, passing `name="Alice"` as props to `MyComponent`.
