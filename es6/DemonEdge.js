'use strict';

var util = require('util');

var Utils = require('./Utils');
var ApiHandler = require('./ApiHandler');
var SchemaHandler = require('./SchemaHandler');
var EndpointHandler = require('./EndpointHandler');
var ParameterHandler = require('./ParameterHandler');
var RequestHandler = require('./RequestHandler');

var steamWebApiVersion = 1;

module.exports = class DemonEdge {
	
    
    constructor() {
        // please forgive me. this will probably all be hidden in a json file to be parsed eventually.
        this.api = new ApiHandler().addSchemas([
            new SchemaHandler('Fantasy', 'IDOTA2Fantasy_570').addEndpoints([
                new EndpointHandler('GetFantasyPlayerStats', 'GetFantasyPlayerStats', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('fantasyLeagueID', 'FantasyLeagueID', true),
                    new ParameterHandler('startTime', 'StartTime', false),
                    new ParameterHandler('endTime', 'EndTime', false),
                    new ParameterHandler('matchID', 'matchid', false),
                    new ParameterHandler('seriesID', 'SeriesID', false),
                    new ParameterHandler('playerAccountID', 'PlayerAccountID', false)
                ]),
                new EndpointHandler('GetPlayerOfficialInfo', 'GetPlayerOfficialInfo', steamWebApiVersion, true).addParameter(
                    new ParameterHandler('accountID', 'accountid', true)
                ),
                new EndpointHandler('GetProPlayerList', 'GetProPlayerList', steamWebApiVersion, false)
            ]),
            new SchemaHandler('MatchStats', 'IDOTA2MatchStats_570').addEndpoint(
                new EndpointHandler('GetRealtimeStats', 'GetRealtimeStats', steamWebApiVersion, true).addParameter(
                    new ParameterHandler('serverSteamID', 'server_steam_id', true)
                )
            ),
            new SchemaHandler('Match', 'IDOTA2Match_570').addEndpoints([
                new EndpointHandler('GetLeagueListing', 'GetLeagueListing', steamWebApiVersion, false),
                new EndpointHandler('GetLiveLeagueGames', 'GetLiveLeagueGames', steamWebApiVersion, false).addParameters([
                    new ParameterHandler('leagueID', 'league_id', false),
                    new ParameterHandler('matchID', 'match_id', false)
                ]),
                new EndpointHandler('GetMatchDetails', 'GetMatchDetails', steamWebApiVersion, true).addParameter(
                    new ParameterHandler('matchID', 'match_id', true)
                ),
	            new EndpointHandler('GetMatchHistory', 'GetMatchHistory', steamWebApiVersion, false).addParameters([
	                new ParameterHandler('heroID', 'hero_id', false),
	                new ParameterHandler('gameMode', 'game_mode', false),
	                new ParameterHandler('skill', 'skill', false),
	                new ParameterHandler('minPlayers', 'min_players', false),
	                new ParameterHandler('accountID', 'account_id', false),
	                new ParameterHandler('leagueID', 'league_id', false),
	                new ParameterHandler('startAtMatchID', 'start_at_match_id', false),
	                new ParameterHandler('matchesRequested', 'matches_requested', false),
	                new ParameterHandler('tournamentGamesOnly', 'tournament_games_only', false)
	            ]),
	            new EndpointHandler('GetMatchHistoryBySequenceNumber', 'GetMatchHistoryBySequenceNum', steamWebApiVersion, false).addParameters([
	                new ParameterHandler('startAtMatchSequenceNumber', 'start_at_match_seq_num', false),
	                new ParameterHandler('matchesRequested', 'matches_requested', false)
	            ]),
	            new EndpointHandler('GetScheduledLeagueGames', 'GetScheduledLeagueGames', steamWebApiVersion, false).addParameters([
	                new ParameterHandler('startDate', 'date_min', false),
	                new ParameterHandler('endDate', 'date_max', false)
	            ]),
	            new EndpointHandler('GetTeamInfoByTeamID', 'GetTeamInfoByTeamID', steamWebApiVersion, false).addParameters([
	                new ParameterHandler('startAtTeamID', 'start_at_team_id', false),
	                new ParameterHandler('teamsRequested', 'teams_requested', false)
	            ]),
	            new EndpointHandler('GetTopLiveGame', 'GetTopLiveGame', steamWebApiVersion, true).addParameter(
	                new ParameterHandler('partner', 'partner', true)
	            ),
	            new EndpointHandler('GetTournamentPlayerStats', 'GetTournamentPlayerStats', true).addParameters([
	                new ParameterHandler('accountID', 'account_id', true),
	                new ParameterHandler('leagueID', 'league_id', false),
	                new ParameterHandler('heroID', 'hero_id', false),
	                new ParameterHandler('timeFrame', 'time_frame', false),
	                new ParameterHandler('matchID', 'match_id', false),
	                new ParameterHandler('phaseID', 'phase_id', false)
                ])
            ]),
            new SchemaHandler('StreamSystem', 'IDOTA2StreamSystem_570').addEndpoint(
                new EndpointHandler('GetBroadcasterInfo', 'GetBroadcasterInfo', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('broadcasterSteamID', 'broadcaster_steam_id', true),
                    new ParameterHandler('leagueID', 'league_id', false)
                ])
            ),
            new SchemaHandler('Ticket', 'IDOTA2Ticket_570').addEndpoints([
                new EndpointHandler('SetSteamAccountPurchased', 'SetSteamAccountPurchased', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('eventID', 'eventid', true),
                    new ParameterHandler('steamID', 'steamid', true)
                ]),
                new EndpointHandler('SteamAccountValidForEvent', 'SteamAccountValidForEvent', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('eventID', 'eventid', true),
                    new ParameterHandler('steamID', 'steamid', true)
                ])
            ]),
            new SchemaHandler('Economy', 'IEconDOTA2_570').addEndpoints([
                new EndpointHandler('GetEventStatsForAccount', 'GetEventStatsForAccount', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('eventID', 'eventid', true),
                    new ParameterHandler('accountID', 'accountid', true),
                    new ParameterHandler('language', 'language', false)
                ]),
                new EndpointHandler('GetGameItems', 'GetGameItems', steamWebApiVersion, false).addParameters([
                    new ParameterHandler('language', 'language', false)
                ]),
                new EndpointHandler('GetHeroes', 'GetHeroes', steamWebApiVersion, false).addParameters([
                    new ParameterHandler('language', 'language', false),
                    new ParameterHandler('itemizedOnly', 'itemizedonly', false)
                ]),
                new EndpointHandler('GetItemIconPath', 'GetItemIconPath', steamWebApiVersion, true).addParameters([
                    new ParameterHandler('iconName', 'iconname', true),
                    new ParameterHandler('iconType', 'icontype', false)
                ]),
                new EndpointHandler('GetRarities', 'GetRarities', steamWebApiVersion, false).addParameter(
                    new ParameterHandler('language', 'language', false)
                ),
                new EndpointHandler('GetTournamentPrizePool', 'GetTournamentPrizePool', steamWebApiVersion, false).addParameter(
                    new ParameterHandler('leagueID', 'leagueid', false)
                )
            ])
        ]).getApi();

        this.daedalusDomain = 'localhost';
        this.daedalusPort = 7575;
	}

    setDaedalusUrl(domain, port) {
        this.daedalusDomain = domain;
        this.daedalusPort = port;
    }
};
