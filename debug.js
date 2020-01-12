/* CalendarFetcher Tester
 * use this script with `node debug.js` to test the fetcher without the need
 * of starting the MagicMirror core. Adjust the values below to your desire.
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var CalendarFetcher = require("./calendarfetcher.js");

var url = "https://www.pelaxa.com/MMM/todo.ics";  // Standard test URL
var fetchInterval = 60 * 60 * 1000;
var maximumEntries = 20;
var maximumNumberOfDays = 365;
var user = "magicmirror";
var pass = "MyStrongPass";
var broadcastPastEvents = false;
var hideCompleted = false;

var auth = {};
// var auth = {
// 	user: user,
// 	pass: pass
// };

console.log("Create fetcher ...");

fetcher = new CalendarFetcher(url, fetchInterval, [], maximumEntries, maximumNumberOfDays, auth, hideCompleted);

fetcher.onReceive(function(fetcher) {
	console.log(fetcher.events());
	console.log("------------------------------------------------------------");
});

fetcher.onError(function(fetcher, error) {
	console.log("Fetcher error:");
	console.log(error);
});

fetcher.startFetch();

console.log("Create fetcher done! ");