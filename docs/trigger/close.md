```html
<Trigger close='id-of-target'>
  <a className='button'>Close Target</a>
<Trigger>  
```

Id need not be passed to close if close trigger is used inside a target component.
```html
<Modal id='modal-id'>
  <Trigger close=''>
    <a className='button'>Close Target</a>
  <Trigger>
  <p>Modal content</p>
</Modal>
```