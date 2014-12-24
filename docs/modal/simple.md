```html
<Trigger open="basicModal">
  <a className="button">Open Modal</a>
</Trigger>
<Modal id="basicModal" overlay={true}>
  <Trigger close="">
    <a href="#" className="close-button">&times;</a>
  </Trigger>
  <section className="grid-content">
    <p> This is modal content </p>
  </section>
</Modal>
```        