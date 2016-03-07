import {expect} from 'chai';
import apiRequest from '../../helpers/apiRequest';
import config from '../../config';
import supertest from 'supertest';
const api = supertest('http://localhost:3000');
import Express from 'express';
import http from 'http';
import videos from '../videos';

const app = new Express();
const server = new http.Server(app);
app.use('/api/videos', videos);

server.listen(config.port, (err) => {});

describe('Videos REST API tests', function() {
  
  it('should return 50 videos', function(done) {
    api.get('/api/videos?artist=Elton John').expect(200).end(function(err, res){
     if (err) return done(err);
     expect(res.body.result.length).to.equal(50);
     done();
    });
  });

});