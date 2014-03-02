//Travely.ApplicationAdapter = DS.FixtureAdapter;

Travely.ApplicationSerializer = DS.LSSerializer.extend();
Travely.ApplicationAdapter = DS.LSAdapter.extend({
    namespace: 'travely'
});