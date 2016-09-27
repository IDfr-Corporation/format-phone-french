# format-phone-french
A node module that formats phone number according to options.
No validation is provided ! 

```
var formatPhone = require('format-phone-french');

var formattedPhone = formatPhone(value, options);
```

## Options
### separator
add specified separator between couples of numbers
```
var formattedPhone = formatPhone("+33(0)494-709-178", {separator: ' '});
returned value :  04 94 70 91 78
```

