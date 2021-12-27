# What is react?
React is an frontend library / framework by facebook.
# Create react app
```
npx create-react-app app_name
cd app_name 
npm start 
```
-> will run port 3000 by default

# JSX Notes
JSX should have one parent element, if you don't parent element for some reason, React offters you ther fragment tag. ```<></>```
# Data binding
Data or expressions can be bind in JSX with ```{}```
# Loop In JSx
Use map  function to loop.
```
arry.map((el,in)=>(<html></html>))
``` 
or 
```
arry.map((el,in)=>{
    return (<html></html>)
    }
)
```
# Props
Props are property of an component, that data can be pass-in from another component. property is a data that can be used to bind values or can style or anything

## ex:
in App.js
```
<Header text='some text' />
```
in Header.jsx

### with destructure
```
function Header({text}) {
    return (
        <header>
            <h1 className="text-center">{{text}}</h1>
        </header>
    )
}
```

### without destructure
```
function Header(props) {
    return (
        <header>
            <h1 className="text-center">{props.text}</h1>
        </header>
    )
}
```

### Default Values for props
in Header.jsx
```
Header.defaultProps = {
    tesxt:"some default text"    
}
```

# Prop type
Prop type is used to define the props data types;

## importing prop type
import prop type by adding below code

```
    import PropTypes from 'prop-types'
```

## Defining Prop type
Following code is the example to define prop type,

ref Header.jsx file for more

```
Header.prototype = {
    text: PropTypes.string,
}
```


# Styles
There are two ways to define styles

1. Directly in element
2. In element with variable.

### Directly in element
in Header.jsx
```
function Header({text}}) {
    return (
        <header style={{backgroundColor:'red', color:'#fff'}}>
            <h1 className="text-center">{text}</h1>
        </header>
    )
}
```
### In element with variable.
```
function Header({text}}) {
    const headerStyle = {
        backgroundColor:'red', color:'#fff'
    }
    return (
        <header style={headerStyle}>
            <h1 className="text-center">{text}</h1>
        </header>
    )
}
```


# Snippets
1. _rfec (Create function components)
2. impt (import react prop-type)