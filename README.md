This is the client-side tool in the Daedalus tool suite.

If you happened to find this without any knowledge of the Daedalus tool suite, check it out [here](https://github.com/Flascher/Daedalus)!  
demon-edge is intended to be used with this tool suite, and will take a bit of set up for any non-Daedalus server.

Assuming you're using [daedalus-server](https://www.npmjs.com/package/daedalus-server), make sure you follow the set up tutorial for daedalus. If you haven't completed this yet, you can find it on the daedalus-server npm page, linked above.

A basic script on a webpage should look something like this:

```javascript

DemonEdge.setDaedalusUrl('your.daedalus.domain', '80'); // server is running on port 80

var dotaPromise = DemonEdge.api.Match.GetMatchHistory.sendRequest();

dotaPromise.then(function(response) {
  console.log(response);
  // or do whatever it is you plan to do with your new data :)
});

```

Like [crystalys](https://www.npmjs.com/package/crystalys) you can chain parameters onto an endpoint in order to send a more specific query:

```

var dotaPromise = DemonEdge.api.Match.GetMatchHistory.heroID(1).matchesRequested(30).sendRequest();

```

In order to check out the entirety of the Dota 2 API, including all endpoints and parameters, I highly recommend [this](http://steamwebapi.azurewebsites.net/) website.

If you find any bugs within demon-edge or any other parts of the daedalus tool suite, please create an issue on the corresponding github repo, and/or feel free to send me an email at flascherdev@gmail.com
