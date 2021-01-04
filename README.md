# cs
The classname utility function

## Usage
```js
import cs from 'cs'

cs("button", ["up", "   left", ["container"]]) // Outputs: "button up left container"
```

Using the type:
```js
import cs, { csType } from 'cs'

const input: csType = [["first-class"], "second-class"]
cs(input) // Outputs: "first-class second-class"
```
