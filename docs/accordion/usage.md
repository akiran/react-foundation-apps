## Usage

#### Importing Accordion components

```javascript
var Accordion = require('react-foundation-apps/lib/accordion');
var AccordionItem = require('react-foundation-apps/lib/accordion-item');
```

#### Using components

```html
<Accordion>
  <AccordionItem title="accorion item title">
    Accordion item content
  </AccordionItem>
  <AccordionItem title="accorion item title">
    Accordion item content
  </AccordionItem>
</Accordion>
```


#### Accordion Options
##### `autoOpen = true`
open the first accordion item by default. if `autoOpen = false`, close all the accordion items initially

##### `multiOpen = false`
open one accordion item at a time. if `multiOpen = true`, open multi items based on selection.


#### Accordion Item Options
##### `title = String`
Title of the accordion item      
