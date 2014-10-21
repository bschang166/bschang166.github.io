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
      about: 'About Me',
      intro: 'Hello, my name is Benson and I am a programmer with an engineering background. ',
      story_head: 'Let me tell you a bit about my story first:\n ',
      story_content: 'I graduated from college with a bachelor degree in Biomedical Engineering, ' +
        'and at the time I was considering whether or not to go to graduate school for Biomedical Engineering.' +
        'It was during that time I decided to look into programming, which I was always interested in but never actively got into before then. ' +
        'The initial learning was especially difficult since I was self-studying; it was somewhat comparable to learning a new (literal) language. ' +
        'However once I got past the language syntax (I started with C#), I could start seeing the dots connecting. ' +
        'From there I started reading books after books, learning not just new languages but how these languages all integrate together. ' +
        'So here I am now, being able to understand and appreciate all the different programs and websites I used to take for granted everyday. ',
      skill: 'My main area of focus currently is web development using Javascript, ' +
        'along with libraries such as jQuery and frameworks such AngularJS for building front-end web applications. ' +
        'I am also skilled in back-end development. My preferred server-side languages are Node.js and PHP, with databases MongoDB and MySQL respectively. ' +
        'For Node.js, I use ExpressJS as my Node server framework. For PHP, I use XAMPP as my stack development environment in Windows. ',
      url: 'views/main_en_us.html'
    };
    zh_tw_dict.main = {
      url: 'views/main_zh_tw.html'
    };
    ja_jp_dict.main = {
      url: 'views/main_ja_jp.html'
    };

    // *** Project ***
    var techList = {
      angular: {
        name : 'AngularJS',
        url : 'https://angularjs.org/',
        keywords: ['javascript', 'framework', 'angular', 'client-side', 'front-end', 'MVC']
      },
      socketio : {
        name: 'Socket.IO',
        url: 'http://socket.io/',
        keywords: ['javascript', 'library', 'socket.IO', 'io',
          'client-side', 'front-end', 'back-end', 'server-side', 'real-time', 'communication']
      },
      typeaheadjs: {
        name: 'Twitter Typeahead.js',
        url: 'https://twitter.github.io/typeahead.js/',
        keywords: ['javascript', 'library', 'typeahead', 'typeaheadjs', 'autocomplete']
      },
      jquery: {
        name: 'jQuery',
        url: 'http://jquery.com/',
        keywords: ['javascript', 'library', 'jquery', 'DOM', 'client-side', 'front-end']
      },
      bootstrap: {
        name: 'Twitter Bootstrap',
        url: 'http://getbootstrap.com/',
        keywords: ['javascript', 'framework', 'bootstrap', 'client-side', 'front-end', 'CSS','HTML']
      },
      googleMap: {
        name: 'Google Map API',
        url: 'https://developers.google.com/maps/',
        keywords: ['javascript', 'API', 'google', 'map', 'client-side', 'front-end']
      },
      githubAPI: {
        name: 'GitHub API',
        url: 'https://developer.github.com/v3/',
        keywords: ['javascript', 'API', 'github', 'client-side', 'front-end']
      },
      yeoman : {
        name: 'Yeoman',
        url: 'http://yeoman.io/',
        keywords: ['javascript', 'yeoman', 'generator', 'scaffold', 'angular', 'client-side', 'front-end']
      },
      grunt : {
        name: 'Grunt',
        url: 'http://gruntjs.com/',
        keywords: ['javascript', 'grunt', 'task', 'automatic', 'build', 'test', 'client-side', 'front-end']
      },
      bower : {
        name: 'Bower',
        url: 'http://bower.io/',
        keywords: ['javascript', 'bower', 'dependency', 'management', 'manager', 'client-side', 'front-end']
      },
      nodejs: {
        name: 'Node.js',
        url: 'http://nodejs.org/',
        keywords: ['javascript', 'node.js', 'server', 'back-end']
      },
      npm : {
        name: 'Node Package Manager',
        url: 'https://www.npmjs.org/',
        keywords: ['javascript', 'dependency', 'management', 'manager', 'server-side', 'back-end']
      },
      express : {
        name : 'Express',
        url: 'http://expressjs.com/',
        keywords: ['javascript', 'framework', 'node.js', 'server-side', 'back-end']
      },
      githubpages: {
        name : 'GitHub Pages',
        url: 'https://pages.github.com/',
        keywords: ['javascript', 'server-side', 'back-end']
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
    en_us_dict.footer = {
      choose_language: 'Language ',
      language_name : {
        en_us: 'English',
        zh_tw: 'Traditional Chinese',
        ja_jp: 'Japanese'
      }
    };
    zh_tw_dict.footer = {
      choose_language: '語言 ',
      language_name : {
        en_us: '英文',
        zh_tw: '繁體中文',
        ja_jp: '日文'
      }
    };
    ja_jp_dict.footer = {
      choose_language: '言語 ',
      language_name : {
        en_us: '英語',
        zh_tw: '繁體中文',
        ja_jp: '日本語'
      }
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
