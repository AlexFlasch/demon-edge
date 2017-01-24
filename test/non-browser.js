import DemonEdge from './../lib/DemonEdge';

DemonEdge.setDaedalusUrl('flascher.daedalus.net', 80);

let promise1 = DemonEdge.api.Match.GetMatchHistory.sendRequest();

promise1.then((response) => {
    console.log(response.data);
});

let promise2 = DemonEdge.api.Match.GetMatchDetails.matchID(2620320305).sendRequest();

promise2.then((response) => {
    console.log(response.data);
});
