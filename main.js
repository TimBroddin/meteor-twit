TwitMaker = Npm.require('twit');
var keys;
if (keys = Meteor.settings['twit']) {
    TwitMakerSafe = function(access_token, access_token_secret) {
        return new TwitMaker({
            consumer_key: keys.consumer_key,
            consumer_secret: keys.consumer_secret,
            access_token: access_token,
            access_token_secret: access_token_secret
        })
    }
}