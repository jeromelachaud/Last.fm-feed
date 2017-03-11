import {
  handlers
} from './store';

describe('LastFm activities actions handlers', () => {

  it('should add the user to the state', () => {
    var actionType = handlers.userRetrieved;
    var newState = actionType({}, { user: 'user' });

    expect(newState.user)
      .toBe('user');
  });

  it('should add the recentTracks to the state', () => {
    var actionType = handlers.recentTracksRetreived;
    var newState = actionType({}, { recentTracks: 'recentTracks' });

    expect(newState.recentTracks)
      .toBe('recentTracks');
  });

  it('should add the topArtists to the state', () => {
    var actionType = handlers.topArtistsRetreived;
    var newState = actionType({}, { topArtists: 'topArtists' });

    expect(newState.topArtists)
      .toBe('topArtists');
  });
});
