/**
 * Created by toma on 20.09.16..
 */
'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({ port : 3000});

server.route({
    method : 'GET',
    path : '/',
    handler : function (request, reply) {
        reply('Welcome to Oodle, young Oodler!');
    }
});

server.start(function(err){

    if(err){
        throw err;
    }
    console.log(`Server running at : ${server.info.uri}`);
});