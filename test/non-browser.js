import DemonEdge from './../lib/DemonEdge';

DemonEdge.setDaedalusUrl('daedalus.flascher.net', 7575);

let promise1 = DemonEdge.api.Match.GetMatchHistory.sendRequest();

debugger;
promise1.then((response) => {
    console.log(response.data);
});

let promise2 = DemonEdge.api.Match.GetMatchDetails.matchID(2620320305).sendRequest();

debugger;
promise2.then((response) => {
    console.log(response.data);
});

let promise3 = DemonEdge.api.Match.GetMatchHistory.matchesRequested(50).accountID(51248543).sendRequest();

debugger;
promise3.then((response) => {
    console.log(response.data);
});
