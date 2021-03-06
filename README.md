# Module: MMM-ToDo
The `MMM-ToDo` module is a clone of the default [calendar module](https://github.com/MichMich/MagicMirror/tree/master/modules/default/calendar), and modified to fetch VTODO
items from ics/ical URL. It can combine multiple calendars.

**NOTE:** There is no real maintenance plan in place for this module besides getting it working as a shopping list.

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-ToDo",
		position: "top_left",	// This can be any of the regions. Best results in left or right regions.
		config: {
			// The config property is optional.
			// If no config is set, an example calendar is shown.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:


| Option                       | Description
| ---------------------------- | -----------
| `maximumEntries`             | The maximum number of events shown. / **Possible values:** `0` - `100` <br> **Default value:** `10`
| `displaySymbol`              | Display a symbol in front of an entry. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `defaultSymbol`              | The default symbol. <br><br> **Possible values:** See [Font Awsome](http://fontawesome.io/icons/) website. <br> **Default value:** `calendar`
| `maxTitleLength`             | The maximum title length. <br><br> **Possible values:** `10` - `50` <br> **Default value:** `25`
| `wrapEvents`                 | Wrap event titles to multiple lines. Breaks lines at the length defined by `maxTitleLength`. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `maxTitleLines`              | The maximum number of lines a title will wrap vertically before being cut (Only enabled if `wrapEvents` is also enabled). <br><br> **Possible values:** `0` - `10` <br> **Default value:** `3`
| `fetchInterval`              | How often does the content needs to be fetched? (Milliseconds) <br><br> **Possible values:** `1000` - `86400000` <br> **Default value:** `300000` (5 minutes)
| `animationSpeed`             | Speed of the update animation. (Milliseconds) <br><br> **Possible values:** `0` - `5000` <br> **Default value:** `2000` (2 seconds)
| `fade`                       | Fade the future events to black. (Gradient) <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `fadePoint`                  | Where to start fade? <br><br> **Possible values:** `0` (top of the list) - `1` (bottom of list) <br> **Default value:** `0.25`
| `tableClass`                 | Name of the classes issued from `main.css`. <br><br> **Possible values:** xsmall, small, medium, large, xlarge. <br> **Default value:** _small._
| `calendars`                  | The list of calendars. <br><br> **Possible values:** An array, see _calendar configuration_ below. <br> **Default value:** _An example calendar._
| `titleReplace`               | An object of textual replacements applied to the tile of the event. This allow to remove or replace certains words in the title. <br><br> **Example:** `{'Birthday of ' : '', 'foo':'bar'}` <br> **Default value:** `{	"De verjaardag van ": "", "'s birthday": ""	}`
| `hidePrivate`                | Hides private calendar events. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `false`
| `hideCompleted`              | Hides completed events. <br><br> **Possible values:** `true` or `false` <br> **Default value:** `true`
| `excludedEvents`             | An array of words / phrases from event titles that will be excluded from being shown. <br><br>Additionally advanced filter objects can be passed in. Below is the configuration for the advance filtering object.<br>**Required**<br>`filterBy` - string used to determine if filter is applied.<br>**Optional**<br>`until` - Time before an event to display it  Ex: [`'3 days'`, `'2 months'`, `'1 week'`]<br>`caseSensitive` - By default, excludedEvents are case insensitive, set this to true to enforce case sensitivity<br>`regex` - set to `true` if filterBy is a regex. For those not familiar with regex it is used for pattern matching, please see [here](https://regexr.com/) for more info.<br><br> **Example:** `['Birthday', 'Hide This Event', {filterBy: 'Payment', until: '6 days', caseSensitive: true}, {filterBy: '^[0-9]{1,}.*', regex: true}]` <br> **Default value:** `[]`

### MMM-ToDo configuration

The `calendars` property contains an array of the configured calendars.
The `colored` property gives the option for an individual color for each calendar.
The `coloredSymbolOnly` property will apply color to the symbol only, not the whole line. This is only applicable when `colored` is also enabled.

#### Default value:
````javascript
config: {
	colored: false,
	coloredSymbolOnly: false,
	calendars: [
		{
			url: 'https://www.pelaxa.com/MMM/todo.ics',
			symbol: 'calendar',
			auth: {
			    user: 'username',
			    pass: 'superstrongpassword',
			    method: 'basic'
			}
		},
	],
}
````

#### MMM-ToDo configuration options:
| Option                | Description
| --------------------- | -----------
| `url`	                | The url of the calendar .ical. This property is required. <br><br> **Possible values:** Any public accessble .ical calendar.
| `symbol`              | The symbol to show in front of an event. This property is optional. <br><br> **Possible values:** See [Font Awesome](http://fontawesome.io/icons/) website. To have multiple symbols you can define them in an array e.g. `["calendar", "plane"]`
| `color`              | The font color of an event from this calendar. This property should be set if the config is set to colored: true. <br><br> **Possible values:** HEX, RGB or RGBA values (#efefef, rgb(242,242,242), rgba(242,242,242,0.5)).
| `maximumEntries`      | The maximum number of events shown.  Overrides global setting. **Possible values:** `0` - `100`
| `name`                | The name of the calendar.  Included in event broadcasts as `calendarName`.
| `auth`                | The object containing options for authentication against the calendar.
| `symbolClass`         | Add a class to the cell of symbol.
| `titleClass`          | Add a class to the title's cell.


#### MMM-ToDo authentication options:
| Option                | Description
| --------------------- | -----------
| `user`                | The username for HTTP authentication.
| `pass`                | The password for HTTP authentication. (If you use Bearer authentication, this should be your BearerToken.)
| `method`              | Which authentication method should be used. HTTP Basic, Digest and Bearer authentication methods are supported. Basic authentication is used by default if this option is omitted. **Possible values:** `digest`, `basic`, `bearer` **Default value:** `basic`
