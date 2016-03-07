import express from 'express';
import apiRequest from '../helpers/apiRequest';

const router = express.Router();
const SEARCH_API = 'https://www.googleapis.com/youtube/v3/search';

// get videos from youtube API { artist :: String, nextPageToken :: String } -> Promise
function getVideos(artist, nextPageToken){
  return apiRequest('get', SEARCH_API,
  {
    params: {
      part: 'snippet',
      type: 'video',
      q: artist,
      maxResults: 50,
      order: 'relevance',
      pageToken: nextPageToken || '',
      key: 'AIzaSyBvTcwXkytCaDSxzreCnyp2dtg8_cZzZNE'
    }
  })
}

router.route('/').get((req, res) => {
  getVideos(req.query.artist, req.query.nextPageToken)
  .then((result) => {
    res.status(200).json({'result': result.items, 'nextPageToken': result.nextPageToken });
  }).catch((error)=> {
    res.status(400).json(err);
  });
});

export default router;
