import {
  handlers
} from './lastfm-store';

describe('LastFm activities actions handlers', () => {

  describe('userRetrieved action handler', () => {
    const actionType = handlers.userRetrieved;

    it('should add the user to the state', () => {
      const newState = actionType({}, { user: 'user' });
      expect(newState.user)
        .toBe('user');
    });

    it('should throw an error if user does not exists', () => {
      expect(() => {
        handlers.userRetrieved({}, {});
      }).toThrowError('No user');
    });
  });

  describe('recentTracksRetreived action handler', () => {
    const actionType = handlers.recentTracksRetreived;
    
    it('should add the recentTracks to the state', () => {
      const newState = actionType({}, { recentTracks: 'recentTracks' });
      expect(newState.recentTracks)
        .toBe('recentTracks');
    });

    it('should throw an error if recentTracks does not exists', () => {
      expect(() => {
        handlers.recentTracksRetreived({}, {});
      }).toThrowError('No recent tracks');
    });
  });

  describe('topArtistsRetreived action handler', () => {
    const actionType = handlers.topArtistsRetreived;
    
    it('should add the topArtists to the state', () => {
      const newState = actionType({}, { topArtists: 'topArtists' });
      expect(newState.topArtists)
        .toBe('topArtists');
    });
    
    it('should throw an error if recentTracks does not exists', () => {
      expect(() => {
        handlers.topArtistsRetreived({}, {});
      }).toThrowError('No top artists');
    });
  });
});
