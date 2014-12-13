```html
<Open trigger="basicModal">
  <a className='button'>Open Modal</a>
</Open>
<Modal id="basicModal" overlay={true}>
  <Close trigger="basicModal">
    <a href="#" className='close-button'>&times;</a>
  </Close>
  <section className='grid-content'>
    <p> This is modal content </p>
  </section>
</Modal>
```        