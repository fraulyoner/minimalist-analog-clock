# Minimalist Analog Clock

This little library provides a CSS file to display a simple minimalist analog clock.

![Minimalist Analog Clock](minimalist_clock.png)

## Usage

The minimalist analog clock package can be installed via [Bower](http://bower.io/):

```sh
> bower install --save minimalist-analog-clock
```

Include the provided `clock.css` file in your project to display an analog clock for the following HTML
structure:

```html
<div class="minimalist-clock" data-hour="13" data-minute="37" data-second="0">
  <div class="minimalist-clock--face">
    <div class="minimalist-clock--hour"></div>
    <div class="minimalist-clock--minute"></div>
    <div class="minimalist-clock--second"></div>
  </div>
</div>
```

If you are interested in only hour hand and minute hand, just omit the `data-second` attribute and the element with
`minimalist-clock--second` class:

```html
<div class="minimalist-clock" data-hour="13" data-minute="37" data-second="0">
  <div class="minimalist-clock--face">
    <div class="minimalist-clock--hour"></div>
    <div class="minimalist-clock--minute"></div>
    <div class="minimalist-clock--second"></div>
  </div>
</div>
```

## Development

To provision your environment, just run:

```sh
> npm install
```

This will ensure that [Grunt](http://gruntjs.com) is installed. This allows you to see a live demo while developing.
Simple run:

```sh
> grunt
```
