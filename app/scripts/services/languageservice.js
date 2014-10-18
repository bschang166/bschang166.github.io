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
    // AngularJS will instantiate a singleton by calling "new" on this function

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
      test: 'Hey this is my test'
    };
    zh_tw_dict.main = {

    };
    ja_jp_dict.main = {

    };

    // *** Project ***
    en_us_dict.project = {
      'bschang166.github.io': 'This is my Github User Page, built with AngularJS.\n\n' +
        'Yeoman is used for generating AngularJS scaffold, Grunt for automatic tasks execution, and Bower for dependencies management.\n\n' +
        'It uses the Github REST API to access and load my repositories.\n\n',
      'HackRU-2014': 'hey',
      'rumaps': 'rumaps'
    };
    zh_tw_dict.project = {
      'bschang166.github.io': '這是我用了AngularJS寫的Github用戶網頁.\n\n' +
        '主要是以Yeoman製作AngularJS的骨架, Grunt自動化一些工作, 還有Bower管理資源.\n\n' +
        'Github REST API 用來讀取我的Github repository.\n\n',
      'HackRU-2014': 'hey',
      'rumaps': 'rumaps'
    };
    ja_jp_dict.project = {
      'bschang166.github.io': 'Hey this is my test',
      'HackRU-2014': 'hey',
      'rumaps': 'rumaps'
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
