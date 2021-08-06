const middleware = {}

middleware['activeMinitutor'] = require('..\\middleware\\activeMinitutor.js')
middleware['activeMinitutor'] = middleware['activeMinitutor'].default || middleware['activeMinitutor']

middleware['auth'] = require('..\\middleware\\auth.js')
middleware['auth'] = middleware['auth'].default || middleware['auth']

middleware['authNext'] = require('..\\middleware\\authNext.js')
middleware['authNext'] = middleware['authNext'].default || middleware['authNext']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

middleware['minitutor'] = require('..\\middleware\\minitutor.js')
middleware['minitutor'] = middleware['minitutor'].default || middleware['minitutor']

middleware['notActiveMinitutor'] = require('..\\middleware\\notActiveMinitutor.js')
middleware['notActiveMinitutor'] = middleware['notActiveMinitutor'].default || middleware['notActiveMinitutor']

middleware['notMinitutor'] = require('..\\middleware\\notMinitutor.js')
middleware['notMinitutor'] = middleware['notMinitutor'].default || middleware['notMinitutor']

export default middleware
