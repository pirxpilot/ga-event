# ga

  Google Analytics event tracking
  Use instead of code42day/ga component to track pages *and* events

## Installation

    $ component install code42day/ga-event

## API

Activate Google Analytics on the page and track page

    require('ga')("UA-XXXX-X");

Alternatively you can define GA property ID as a data attribute of document body

  	<body data-ga-property-id="UA-XXXX-X">


You can [track events][1] by declaring event properties in HTML

    <a href="/link"
      data-ga-category="Videos"
      data-ga-action="Play"
      data-ga-label="Baby's First Birthday" >
      Click here
    </a>

You only need to set `ga-category`. `ga-action` defaults to `click` and `ga-label`, `ga-value`, and
`ga-noninteractive` are all optional in Google Analytics.

`ga-event` registers DOM event handler that will generate `trackEvent` call whenever item is clicked.

Check [test/index.html] for example.

## License

  MIT

[test/index.html]: https://github.com/code42day/ga-event/blob/master/test/index.html
[1]: https://developers.google.com/analytics/devguides/collection/gajs/eventTrackerGuide