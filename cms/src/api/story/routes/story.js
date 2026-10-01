"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    type: 'content-api',
    routes: [
        {
            method: 'GET',
            path: '/stories',
            handler: 'api::story.story.find',
        },
        {
            method: 'GET',
            path: '/stories/:id',
            handler: 'api::story.story.findOne',
        },
    ],
};
