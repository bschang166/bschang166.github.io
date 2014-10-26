'use strict';

/**
 * @ngdoc service
 * @name hpApp.languageService
 * @description
 * # languageService
 * Service in the hpApp.
 */
angular.module('hpApp')
  .service('languageService', function languageService (techService) {
    // ------------ Start Dictionary Definitions ---------------
    // initialize dictionaries for each language
    var
      en_us_dict = {},
      zh_tw_dict = {},
      ja_jp_dict = {}
      ;

    var techList = techService.getTechList();

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
      intro: 'views/main_en_us.html',
      skillHeader: 'My Skills',
      skillInfo: 'Looking for a specific set of skills? Try the search bar below for a quick match!',
      programLanguage : 'Programming Languages',
      framework : 'Frameworks',
      library : 'Libraries',
      database : 'Databases',
      tool : 'Tools'
    };
    zh_tw_dict.main = {
      intro: 'views/main_zh_tw.html',
      skillHeader: '專業技術',
      skillInfo: '請用下面的功能來搜尋您所需要的技術.',
      programLanguage : '程序語言',
      framework : '程序框架',
      library : '程序庫',
      database : '數據庫',
      tool : '工具'
    };
    ja_jp_dict.main = {
      intro: 'views/main_ja_jp.html',
      skillHeader: '専門技術',
      skillInfo : '特定のスキルが欲しい？　下の検索機能を試してみてください！',
      programLanguage : 'プログラミング言語',
      framework : 'フレームワーク',
      library : 'ライブラリ',
      database : 'データベース',
      tool : 'ツール'
    };

    // *** Project ***

    var tech_bschang166 = [
      techList.angular, techList.bootstrap, techList.githubAPI, techList.yeoman, techList.grunt, techList.bower, techList.npm, techList.githubpages
    ];
    var tech_hackru_2014 = [
      techList.jquery, techList.socketio, techList.bootstrap, techList.bower, techList.nodejs, techList.express, techList.npm
    ];
    var tech_rumaps = [
      techList.googleMap, techList.jquery, techList.typeaheadjs, techList.bootstrap, techList.bower, techList.nodejs, techList.express, techList.npm
    ];
    var tech_eStore = [
      techList.angular, techList.jquery, techList.bootstrap, techList.bower, techList.parse, techList.npm
    ];
    var tech_multimedia = [
      techList.angular, techList.jquery, techList.bootstrap, techList.bower, techList.nodejs, techList.npm
    ];

    /*
    Here is list of project repos name to id:
     bschang166.github.io : 25236749
     HackRU-2014 : 25315226
     rumaps : 25315292
     E-Store : 25652256
     Multimedia-Manager: 25647055

     */
    en_us_dict.project = {
      25236749: {
        info: 'This is my Github User Page, built with AngularJS.\n\n' +
          'Yeoman is used for generating AngularJS scaffold, Grunt for automatic tasks execution, and Bower for dependencies management.\n\n' +
          'It uses the Github REST API to access and load my repositories.\n\n',
        tech : tech_bschang166,
        image: [
          'Home', 'Project'
        ]
      },

      25315226: {
        info: 'This project is for the 2014 Hackathon at New Brunswick Rutgers University.\n\n' +
          'It uses Socket.IO with Node.js as the server, allowing for mass multi-user interactivity at real-time.\n\n' +
          'The goal is to make game-like system with all the users participating, ' +
          'with the server processing the interactions and responding dynamically to everyone involved.\n\n' +
          'The basic architecture and construction for inter-communication between serer and clients are done, ' +
          'along with a very basic game system.',
        tech : tech_hackru_2014,
        image: [
          'Overall view', 'Signaling for player action to earn score', 'New incoming users are added and scores shown in real-time'
        ]
      },

      25315292: {
        info: 'The aim of this project is to improve the online campus maps of Rutgers University.',
        tech : tech_rumaps,
        image: [
          'Overview of map interface', 'Typeahead for searching on-campus', 'The campus location searched is marked on map',
          'Quick search is also available for fast look up of similarly categorized places'
        ]
      },

      25652256: {
        info: 'The fundamentals of E-Commerce are implemented with AngularJS on the front-end, ' +
          'and Parse.com used on the server-side for RESTful service. \n\n' +
          'Users are able to add items to cart, edit cart, and place order using validated form.\n\n' +
          'Admins are able to login in to admin interface to add, edit, remove item from catalog through REST service using angular resource module, ' +
          'as well as examine customer orders and modify legitimately if necessary.',
        tech : tech_eStore,
        image: [
          'Overview of the UI', 'Customers can edit their cart contents here', 'Customers enter shipping information, which is validated initially here on client-side',
        'Customer gets a reference number for their orders', 'Login page', 'Admin interface for editing products', 'Admin can also check orders']
      },

      25647055 : {
        info: 'A media searcher that allows users to find their favorite media.\n\n' +
          'AngularJS is used to manager data and for more flexible data formats and customizable views.',
        tech : tech_multimedia,
        image: [
          'Displays the top album ranking, parsed from RSS feed', 'Top song rankings', 'Search results are shown here',
          'A quick preview with information and link to the official page'
        ]
      },

      pageInfo: 'Here are some of the projects that I have worked on. You can find all of the projects listed here on my',
      checkRepo: 'Check Repository',
      download: 'Download ZIP',
      infoHeader: 'Additional Project Information',
      techHeader: 'Technology Stack',
      'front-end': 'Front-end',
      'back-end' : 'Back-end'
    };
    zh_tw_dict.project = {
      25236749: {
        info: '這是我用了AngularJS寫的Github用戶網頁.\n\n' +
          '主要是以Yeoman製作AngularJS的骨架, Grunt自動化一些工作, 還有Bower管理資源.\n\n' +
          'Github REST API 用來讀取我的Github repository.\n\n',
        tech : tech_bschang166
      },

      25315226: {
        info: '這是在New Brunswick Rutgers University主辦的Hackathon 2014作的項目.\n\n' +
          '主要是用了Socket.IO和Node.js伺服器來處理即時性的多人線上互動需求.\n\n' +
          '當時的目標是作一個類似線上即時通訊加上遊戲性的網頁, 能通過伺服器讓很多人同時一起互動並且得到即時反應.\n\n' +
          '基本的功能已經完成, 包括伺服器和瀏覽器的通訊加上非常簡單的遊戲系統.',
        tech : tech_hackru_2014
      },

      25315292: {
        info: '這個項目的目標是改進Rutgers University的線上地圖.',
        tech : tech_rumaps
      },

      25652256: {
        info: '這是基於AngularJS前端和Parse.com後端所作的電子商務網站\n\n' +
          '用戶能輕易的操作他個人專用的購物車, 不論是加入新商品還是更改購物車內容都非常簡單.\n\n' +
          '填寫購物送貨詳細也是簡單明瞭, 帳單會自動檢察內容以保證送貨服務品質.\n\n' +
          '管理人員能更改產品目錄, 也能檢查用戶帳單',
        tech : tech_eStore,
        image: [
          'Overview of the UI', 'Customers can edit their cart contents here', 'Customers enter shipping information, which is validated initially here on client-side',
          'Customer gets a reference number for their orders', 'Login page', 'Admin interface for editing products', 'Admin can also check orders']
      },

      25647055 : {
        info  : '這是一個多媒體搜索網頁\n\n' +
          '用戶能利用這個網頁來找他們最喜歡的音樂\n\n' +
          'AngularJS來管理資源和簡單自由定制用戶介面',
        tech  : tech_multimedia,
        image: [
          'Displays the top album ranking, parsed from RSS feed', 'Top song rankings', 'Search results are shown here',
          'A quick preview with information and link to the official page'
        ]
      },

      pageInfo: '這些是我作過的一些項目, 更多詳細請去我的',
      checkRepo: '查看 Repository',
      download: '下載 ZIP',
      infoHeader: '更多情報',
      techHeader: '所使用的技術',
      'front-end': '前端',
      'back-end' : '後端'
    };
    ja_jp_dict.project = {
      25236749: {
        info : 'ここのプロジェクトはAngularJSで作ったGithubユーザーページです。\n\n' +
          '主にYeomanを使ってAngularJSの骨架を生産、Gruntで作業を自動化、あとはBowerでクライアント資源の管理。\n\n' +
          '個人Github RepositoriesのアクセスやロードはGithub REST APIで可能。',
        tech : tech_bschang166
      },

      25315226: {
        info: 'こっちはNew Brunswick Rutgers Universityで開催された２０１４Hackathonのプロジェクトです。\n\n' +
          '大規模なユーザーインタアクションを予想して選んだのは、Socket.IOとNode.jsサーバーです。\n\n' +
          '当時の目標はたくさんのユーザーの行動やインプットをリアルタイムで処理と回答。\n\n' +
          '基本の機能は完成した、サーバーとクライアントの通信と簡単なゲームシステムもコンプリート。',
        tech : tech_hackru_2014
      },

      25315292: {
        info: 'このプロジェクトの目的はRutgers Universityのオンラインキャンパス地図の改良です。',
        tech : tech_rumaps
      },

      25652256: {
        info: 'AngularJSを使ったE-コマースアプリケーションです, サーバーはParse.com。\n\n' +
          'ユーザーが簡単に編集できるショッピングカートフィーチャーと自動検査するフォーム。\n\n' +
          '管理者界面にはアイテム目録とユーザーオーダー編集機能があります。',
        tech : tech_eStore,
        image: [
          'Overview of the UI', 'Customers can edit their cart contents here', 'Customers enter shipping information, which is validated initially here on client-side',
          'Customer gets a reference number for their orders', 'Login page', 'Admin interface for editing products', 'Admin can also check orders']
      },

      25647055 : {
        info: '複合媒体検索のためのAngularJSアプリケーションです。',
        tech : tech_multimedia,
        image: [
          'Displays the top album ranking, parsed from RSS feed', 'Top song rankings', 'Search results are shown here',
          'A quick preview with information and link to the official page'
        ]
      },

      pageInfo: 'プロジェクト詳細のリンクは',
      checkRepo: 'チェック Repository',
      download: 'ダウンロード ZIP',
      infoHeader: '追加情報',
      techHeader: 'テクノロジー',
      'front-end': 'フロントエンド',
      'back-end' : 'バックエンド'
    };

    // *** Contact ***
    en_us_dict.contact = {
      contactHeader : 'Contact Me',
      contactInfo: 'You can get in touch with me through: '
    };
    zh_tw_dict.contact = {
      contactHeader : '連絡我',
      contactInfo: '請使用以下提供的聯絡方式: '
    };
    ja_jp_dict.contact = {
      contactHeader : '連絡',
      contactInfo: 'この下の連絡方法を使ってください: '
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
        return languages || [];
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
        return dict[page] || '';
      },
      lookupTerm : function ( page, lookup ) {
        var dict = currentLanguage.dict;
        return dict[page][lookup] || '';
      }
    };
  });
