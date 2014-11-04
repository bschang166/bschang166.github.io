'use strict';

/**
 * @ngdoc service
 * @name hpApp.techService
 * @description
 * # techService
 * Service in the hpApp.
 */
angular.module('hpApp')
  .service('techService', function techService() {
    var techList = {
      // ---------- Programming Languages Start --------------
      javascript: {
        name : 'JavaScript',
        description: 'A dynamic programming language',
        url : 'http://en.wikipedia.org/wiki/JavaScript',
        keywords: ['javascript', 'language']
      },
      java: {
        name : 'Java',
        description: 'An object-oriented programming language',
        url : 'https://www.java.com/',
        keywords: ['language']
      },
      cSharp: {
        name : 'C#',
        description: 'An object-oriented programming language',
        url : 'http://msdn.microsoft.com/en-us/library/kx37x362.aspx',
        keywords: ['language']
      },
      php: {
        name : 'PHP',
        description: 'A server-side scripting language',
        url : 'http://php.net/',
        keywords: ['language', 'php', 'back-end', 'server-side']
      },
      html: {
        name : 'HTML',
        description: 'HyperText Markup Language',
        url : 'http://en.wikipedia.org/wiki/HTML',
        keywords: ['language']
      },
      css: {
        name : 'CSS',
        description: 'Cascading Style Sheets',
        url : 'http://en.wikipedia.org/wiki/Cascading_Style_Sheets',
        keywords: ['language']
      },
      sql : {
        name : 'SQL',
        description: 'Programming language designed for data management in a relational database',
        url : 'http://en.wikipedia.org/wiki/SQL',
        keywords: ['language']
      },
      // ---------- Programming Languages End --------------

      angular: {
        name : 'AngularJS',
        description: 'An open-source web application MVC framework for JavaScript',
        url : 'https://angularjs.org/',
        keywords: ['javascript', 'framework', 'angular', 'client-side', 'front-end', 'mvc']
      },
      socketio : {
        name: 'Socket.IO',
        description: 'A JavaScript library for real-time web application',
        url: 'http://socket.io/',
        keywords: ['javascript', 'library', 'socket.IO', 'io',
          'client-side', 'front-end', 'back-end', 'server-side', 'real-time']
      },
      typeaheadjs: {
        name: 'Twitter Typeahead.js',
        description: 'A JavaScript library for auto completion',
        url: 'https://twitter.github.io/typeahead.js/',
        keywords: ['javascript', 'library', 'typeahead', 'autocomplete']
      },
      jquery: {
        name: 'jQuery',
        description: 'A JavaScript library for client-side scripting',
        url: 'http://jquery.com/',
        keywords: ['javascript', 'library', 'jquery', 'client-side', 'front-end']
      },
      bootstrap: {
        name: 'Twitter Bootstrap',
        description: 'A front-end framework for HTML and CSS designs with JavaScript extensions',
        url: 'http://getbootstrap.com/',
        keywords: ['javascript', 'framework', 'bootstrap', 'client-side', 'front-end', 'css','html']
      },
      git : {
        name: 'Git',
        description: 'A distributed version control system for source code management',
        url: 'https://git-scm.com/',
        keywords: ['version control','management', 'tool']
      },
      yeoman : {
        name: 'Yeoman',
        description: 'A scaffold generator of applications to speed up development',
        url: 'http://yeoman.io/',
        keywords: ['javascript', 'yeoman', 'generator', 'scaffold', 'angular', 'client-side', 'front-end', 'tool']
      },
      grunt : {
        name: 'Grunt',
        description: 'JavaScript task runner for automation',
        url: 'http://gruntjs.com/',
        keywords: ['javascript', 'grunt', 'task', 'automatic', 'build', 'test', 'client-side', 'front-end', 'tool']
      },
      bower : {
        name: 'Bower',
        description: 'A front-end package manager',
        url: 'http://bower.io/',
        keywords: ['javascript', 'bower', 'dependency', 'management', 'manager', 'client-side', 'front-end', 'tool']
      },
      npm : {
        name: 'Node Package Manager',
        description: 'A package manager for Node.js',
        url: 'https://www.npmjs.org/',
        keywords: ['javascript', 'dependency', 'management', 'manager', 'server-side', 'back-end', 'tool']
      },
	  composer : {
        name: 'Composer',
        description: 'Dependency Manager for PHP ',
        url: 'https://getcomposer.org/',
        keywords: ['php', 'dependency', 'management', 'manager', 'server-side', 'back-end', 'tool']
      },
      nodejs: {
        name: 'Node.js',
        description: 'An open-source runtime environment for the server-side',
        url: 'http://nodejs.org/',
        keywords: ['javascript', 'node.js', 'server-side', 'back-end', 'tool']
      },
      express : {
        name : 'Express',
        description: 'A framework for Node.js',
        url: 'http://expressjs.com/',
        keywords: ['javascript', 'framework', 'node.js', 'server-side', 'back-end']
      },
	  xampp: {
        name : 'XAMPP',
        description: 'Cross-platform web server stack',
        url : 'https://www.apachefriends.org/',
        keywords: ['php','tool']
      },
	  laravel: {
	    name:'Laravel',
		description: 'A PHP framework',
		url : 'http://laravel.com/',
		keywords: ['php','framework', 'server-side', 'back-end']
	  },
	  
      githubpages: {
        name : 'GitHub Pages',
        description: 'Host for webpages through GitHub',
        url: 'https://pages.github.com/',
        keywords: ['javascript', 'server-side', 'back-end', 'tool']
      },
      mySql: {
        name : 'MySQL',
        description: 'Relational database management system',
        url: 'https://mysql.com/',
        keywords: ['database']
      },
      mongoDb: {
        name : 'MongoDB',
        description: 'Document-oriented database',
        url: 'https://mongodb.org/',
        keywords: ['database']
      },

      googleMapAPI: {
        name: 'Google Map API',
        description: 'An API for developing Google Map web applications',
        url: 'https://developers.google.com/maps/',
        keywords: ['javascript', 'api', 'google', 'map', 'client-side', 'front-end']
      },
      githubAPI: {
        name: 'GitHub API',
        description: 'An API for accessing GitHub resources',
        url: 'https://developer.github.com/v3/',
        keywords: ['javascript', 'api', 'github', 'client-side', 'front-end']
      },
	  photoshop: {
        name : 'Adobe Photoshop',
        description: 'An software for design and editing',
        url : 'http://adobe.com/products/photoshop.html',
        keywords: ['tool']
      },

      parse : {
        name: 'Parse (Core)',
        description: 'RESTful Web service that acts as the back-end.',
        url: 'https://parse.com/',
        keywords: ['back-end', 'server-side']
      }
    };

    return {
      getTechList : function(){
        return techList;
      }
    };
  });
