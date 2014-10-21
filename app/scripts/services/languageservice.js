'use strict';

/**
 * @ngdoc service
 * @name hpApp.languageService
 * @description
 * # languageService
 * Service in the hpApp.
 */
angular.module('hpApp')
  .service('languageService', function languageService () {
    // ------------ Start Dictionary Definitions ---------------
    // initialize dictionaries for each language
    var
      en_us_dict = {},
      zh_tw_dict = {},
      ja_jp_dict = {}
      ;

    // *** Header ***
    en_us_dict.header = {
      home : 'Home',
      project: 'Project',
      contact: 'Contact'
    };
    zh_tw_dict.header = {
      home : '首頁',
      project: '項目',
      contact: '連絡'
    };
    ja_jp_dict.header = {
      home : 'ホーム',
      project: 'プロジェクト',
      contact: '連絡'
    };

    // *** Main ***
    en_us_dict.main = {
      intro: 'views/main_en_us.html'
    };
    zh_tw_dict.main = {
      intro: 'views/main_zh_tw.html'
    };
    ja_jp_dict.main = {
      intro: 'views/main_ja_jp.html'
    };

    // *** Project ***
    var techList = {
      javascript: {
        name : 'JavaScript',
        description: 'A dynamic programming language',
        url : 'http://en.wikipedia.org/wiki/JavaScript',
        keywords: ['JavaScript', 'language']
      },
      angular: {
        name : 'AngularJS',
        description: 'An open-source web application MVC framework for JavaScript',
        url : 'https://angularjs.org/',
        keywords: ['JavaScript', 'framework', 'angular', 'client-side', 'front-end', 'MVC']
      },
      socketio : {
        name: 'Socket.IO',
        description: 'A JavaScript library for real-time web application',
        url: 'http://socket.io/',
        keywords: ['JavaScript', 'library', 'socket.IO', 'io',
          'client-side', 'front-end', 'back-end', 'server-side', 'real-time', 'communication']
      },
      typeaheadjs: {
        name: 'Twitter Typeahead.js',
        description: 'A JavaScript library for auto completion',
        url: 'https://twitter.github.io/typeahead.js/',
        keywords: ['JavaScript', 'library', 'typeahead', 'typeaheadjs', 'autocomplete']
      },
      jquery: {
        name: 'jQuery',
        description: 'A JavaScript library for client-side scripting',
        url: 'http://jquery.com/',
        keywords: ['JavaScript', 'library', 'jquery', 'DOM', 'client-side', 'front-end']
      },
      bootstrap: {
        name: 'Twitter Bootstrap',
        description: 'A front-end framework for HTML and CSS designs with JavaScript extensions',
        url: 'http://getbootstrap.com/',
        keywords: ['JavaScript', 'framework', 'bootstrap', 'client-side', 'front-end', 'CSS','HTML']
      },
      googleMap: {
        name: 'Google Map API',
        description: 'An API for developing Google Map web applications',
        url: 'https://developers.google.com/maps/',
        keywords: ['JavaScript', 'API', 'google', 'map', 'client-side', 'front-end']
      },
      githubAPI: {
        name: 'GitHub API',
        description: 'An API for accessing GitHub resources',
        url: 'https://developer.github.com/v3/',
        keywords: ['JavaScript', 'API', 'github', 'client-side', 'front-end']
      },
      yeoman : {
        name: 'Yeoman',
        description: 'A scaffold generator of applications to speed up development',
        url: 'http://yeoman.io/',
        keywords: ['JavaScript', 'yeoman', 'generator', 'scaffold', 'angular', 'client-side', 'front-end']
      },
      grunt : {
        name: 'Grunt',
        description: 'JavaScript task runner for automation',
        url: 'http://gruntjs.com/',
        keywords: ['JavaScript', 'grunt', 'task', 'automatic', 'build', 'test', 'client-side', 'front-end']
      },
      bower : {
        name: 'Bower',
        description: 'A front-end package manager',
        url: 'http://bower.io/',
        keywords: ['JavaScript', 'bower', 'dependency', 'management', 'manager', 'client-side', 'front-end']
      },
      npm : {
        name: 'Node Package Manager',
        description: 'A package manager for Node.js',
        url: 'https://www.npmjs.org/',
        keywords: ['JavaScript', 'dependency', 'management', 'manager', 'server-side', 'back-end']
      },
      nodejs: {
        name: 'Node.js',
        description: 'An open-source runtime environment for the server-side',
        url: 'http://nodejs.org/',
        keywords: ['JavaScript', 'node.js', 'server', 'back-end']
      },
      express : {
        name : 'Express',
        description: 'A framework for Node.js',
        url: 'http://expressjs.com/',
        keywords: ['JavaScript', 'framework', 'node.js', 'server-side', 'back-end']
      },
      githubpages: {
        name : 'GitHub Pages',
        description: 'Host for webpages through GitHub',
        url: 'https://pages.github.com/',
        keywords: ['JavaScript', 'server-side', 'back-end']
      }
    };
    var tech_bschang166 = [
      techList.angular, techList.bootstrap, techList.githubAPI, techList.yeoman, techList.grunt, techList.bower, techList.githubpages
    ];
    var tech_hackru_2014 = [
      techList.jquery, techList.socketio, techList.bootstrap, techList.bower, techList.nodejs, techList.express, techList.npm
    ];
    var tech_rumaps = [
      techList.googleMap, techList.jquery, techList.typeaheadjs, techList.bootstrap, techList.bower, techList.nodejs, techList.express, techList.npm
    ];

    en_us_dict.project = {
      'bschang166.github.io': {
        info: 'This is my Github User Page, built with AngularJS.\n\n' +
          'Yeoman is used for generating AngularJS scaffold, Grunt for automatic tasks execution, and Bower for dependencies management.\n\n' +
          'It uses the Github REST API to access and load my repositories.\n\n',
        tech : tech_bschang166
      },

      'HackRU-2014': {
        info: 'This project is for the 2014 Hackathon at New Brunswick Rutgers University.\n\n' +
          'It uses Socket.IO with Node.js as the server, allowing for mass multi-user interactivity at real-time.\n\n' +
          'The goal is to make game-like system with all the users participating, ' +
          'with the server processing the interactions and responding dynamically to everyone involved.\n\n' +
          'The basic architecture and construction for inter-communication between serer and clients are done, ' +
          'along with a very basic game system.',
        tech : tech_hackru_2014
      },

      'rumaps': {
        info: 'The aim of this project is to improve the online campus maps of Rutgers University.',
        tech : tech_rumaps
      },
      checkRepo: 'Check Repository',
      download: 'Download ZIP',
      infoHeader: 'Additional Project Information',
      techHeader: 'Technology Stack',
      'front-end': 'Front-end',
      'back-end' : 'Back-end'
    };
    zh_tw_dict.project = {
      'bschang166.github.io': {
        info: '這是我用了AngularJS寫的Github用戶網頁.\n\n' +
          '主要是以Yeoman製作AngularJS的骨架, Grunt自動化一些工作, 還有Bower管理資源.\n\n' +
          'Github REST API 用來讀取我的Github repository.\n\n',
        tech : tech_bschang166
      },

      'HackRU-2014': {
        info: '這是在New Brunswick Rutgers University主辦的Hackathon 2014作的項目.\n\n' +
          '主要是用了Socket.IO和Node.js伺服器來處理即時性的多人線上互動需求.\n\n' +
          '當時的目標是作一個類似線上即時通訊加上遊戲性的網頁, 能通過伺服器讓很多人同時一起互動並且得到即時反應.\n\n' +
          '基本的功能已經完成, 包括伺服器和瀏覽器的通訊加上非常簡單的遊戲系統.',
        tech : tech_hackru_2014
      },

      'rumaps': {
        info: '這個項目的目標是改進Rutgers University的線上地圖.',
        tech : tech_rumaps
      },
      checkRepo: '查看 Repository',
      download: '下載 ZIP',
      infoHeader: '更多情報',
      techHeader: '所使用的技術',
      'front-end': '前端',
      'back-end' : '後端'
    };
    ja_jp_dict.project = {
      'bschang166.github.io': {
        info : 'ここのプロジェクトはAngularJSで作ったGithubユーザーページです。\n\n' +
          '主にYeomanを使ってAngularJSの骨架を生産、Gruntで作業を自動化、あとはBowerでクライアント資源の管理。\n\n' +
          '個人Github RepositoriesのアクセスやロードはGithub REST APIで可能。',
        tech : tech_bschang166
      },

      'HackRU-2014': {
        info: 'こっちはNew Brunswick Rutgers Universityで開催された２０１４Hackathonのプロジェクトです。\n\n' +
          '大規模なユーザーインタアクションを予想して選んだのは、Socket.IOとNode.jsサーバーです。\n\n' +
          '当時の目標はたくさんのユーザーの行動やインプットをリアルタイムで処理と回答。\n\n' +
          '基本の機能は完成した、サーバーとクライアントの通信と簡単なゲームシステムもコンプリート。',
        tech : tech_hackru_2014
      },

      'rumaps': {
        info: 'このプロジェクトの目的はRutgers Universityのオンラインキャンパス地図の改良です。',
        tech : tech_rumaps
      },
      checkRepo: 'チェック Repository',
      download: 'ダウンロード ZIP',
      infoHeader: '追加情報',
      techHeader: 'テクノロジー',
      'front-end': 'フロントエンド',
      'back-end' : 'バックエンド'
    };
    // *** Footer ***
    var languageName = {
      en_us: 'English',
      zh_tw: '中文(繁體)',
      ja_jp: '日本語'
    };
    en_us_dict.footer = {
      choose_language: 'Language ',
      language_name : languageName
    };
    zh_tw_dict.footer = {
      choose_language: '語言 ',
      language_name : languageName
    };
    ja_jp_dict.footer = {
      choose_language: '言語 ',
      language_name : languageName
    };

    // ------------ End Dictionary Definitions ---------------

    // initialize info for each language
    var
      en_us_info = {
        name: 'English',
        code: 'en_us',
        dict: en_us_dict
      },
      zh_tw_info = {
        name: 'Traditional Chinese',
        code: 'zh_tw',
        dict: zh_tw_dict
      },
      ja_jp_info = {
        name: 'Japanese',
        code: 'ja_jp',
        dict: ja_jp_dict
      }
      ;

    var languages = [
      en_us_info, zh_tw_info, ja_jp_info
    ];

    // default language is set to English
    var currentLanguage = languages[0];

    return {
      getLanguages: function () {
        return languages;
      },
      getCurrentLanguageInfo: function(){
        return currentLanguage;
      },
      setLanguage: function ( setLang ) {
        var language =languages.filter(function(lang){
          return (lang.code === setLang);
        })[0];
        currentLanguage = language;
      },
      lookupPage: function(page){
        var dict = currentLanguage.dict;
        return dict[page];
      },
      lookupTerm : function ( page, lookup ) {
        var dict = currentLanguage.dict;
        return dict[page][lookup];
      }
    };
  });
