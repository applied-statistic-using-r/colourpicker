/**
  * jQuery Colour picker: A tiny colour picker with useful extra features
  *
  * Copyright:
  * Dean Attali, http://deanattali.com
  * Cory LaViska for A Beautiful Site, LLC: http://www.abeautifulsite.net/
  *
  * Version: 1.2
  *
  * Contribute: https://github.com/daattali/jquery-colourpicker
  *
  * @license: http://opensource.org/licenses/MIT
  */
  (function (factory) {
    /* jshint ignore:start */
      if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
      } else if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory(require('jquery'));
      } else {
        // Browser globals
        factory(jQuery);
      }
    /* jshint ignore:end */
  }(function ($) {

    // Defaults
    $.colourpicker = {
      defaults: {
        animationSpeed: 50,
        animationEasing: 'swing',
        change: null,
        changeDelay: 0,
        hide: null,
        hideSpeed: 100,
        show: null,
        showSpeed: 100,

		    // added by Dean Attali
        showColour: 'both',
        allowTransparent: false,
        transparentText: 'Transparent',
        palette: 'square',
        allowedCols:
          "#000000 #333333 #4D4D4D #666666 #7F7F7F #999999 #B3B3B3 #E5E5E5 " +
          "#FFFFFF #27408B #000080 #0000FF #1E90FF #63B8FF #97FFFF #00FFFF " +
          "#00868B #008B45 #458B00 #008B00 #00FF00 #7FFF00 #54FF9F #00FF7F " +
          "#7FFFD4 #8B4500 #8B0000 #FF0000 #FF6A6A #FF7F00 #FFFF00 #FFF68F " +
          "#F4A460 #551A8B #8B008B #8B0A50 #9400D3 #FF00FF #FF1493 #E066FF",
        returnName: false,
        colsMap:
          {"#FFFFFF":"white","#F0F8FF":"aliceblue","#FAEBD7":"antiquewhite","#FFEFDB":"antiquewhite1","#EEDFCC":"antiquewhite2","#CDC0B0":"antiquewhite3","#8B8378":"antiquewhite4","#7FFFD4":"aquamarine","#76EEC6":"aquamarine2","#66CDAA":"aquamarine3","#458B74":"aquamarine4","#F0FFFF":"azure","#E0EEEE":"azure2","#C1CDCD":"azure3","#838B8B":"azure4","#F5F5DC":"beige","#FFE4C4":"bisque","#EED5B7":"bisque2","#CDB79E":"bisque3","#8B7D6B":"bisque4","#000000":"black","#FFEBCD":"blanchedalmond","#0000FF":"blue","#0000EE":"blue2","#0000CD":"blue3","#00008B":"blue4","#8A2BE2":"blueviolet","#A52A2A":"brown","#FF4040":"brown1","#EE3B3B":"brown2","#CD3333":"brown3","#8B2323":"brown4","#DEB887":"burlywood","#FFD39B":"burlywood1","#EEC591":"burlywood2","#CDAA7D":"burlywood3","#8B7355":"burlywood4","#5F9EA0":"cadetblue","#98F5FF":"cadetblue1","#8EE5EE":"cadetblue2","#7AC5CD":"cadetblue3","#53868B":"cadetblue4","#7FFF00":"chartreuse","#76EE00":"chartreuse2","#66CD00":"chartreuse3","#458B00":"chartreuse4","#D2691E":"chocolate","#FF7F24":"chocolate1","#EE7621":"chocolate2","#CD661D":"chocolate3","#8B4513":"chocolate4","#FF7F50":"coral","#FF7256":"coral1","#EE6A50":"coral2","#CD5B45":"coral3","#8B3E2F":"coral4","#6495ED":"cornflowerblue","#FFF8DC":"cornsilk","#EEE8CD":"cornsilk2","#CDC8B1":"cornsilk3","#8B8878":"cornsilk4","#00FFFF":"cyan","#00EEEE":"cyan2","#00CDCD":"cyan3","#008B8B":"cyan4","#B8860B":"darkgoldenrod","#FFB90F":"darkgoldenrod1","#EEAD0E":"darkgoldenrod2","#CD950C":"darkgoldenrod3","#8B6508":"darkgoldenrod4","#A9A9A9":"darkgray","#006400":"darkgreen","#BDB76B":"darkkhaki","#8B008B":"darkmagenta","#556B2F":"darkolivegreen","#CAFF70":"darkolivegreen1","#BCEE68":"darkolivegreen2","#A2CD5A":"darkolivegreen3","#6E8B3D":"darkolivegreen4","#FF8C00":"darkorange","#FF7F00":"darkorange1","#EE7600":"darkorange2","#CD6600":"darkorange3","#8B4500":"darkorange4","#9932CC":"darkorchid","#BF3EFF":"darkorchid1","#B23AEE":"darkorchid2","#9A32CD":"darkorchid3","#68228B":"darkorchid4","#8B0000":"darkred","#E9967A":"darksalmon","#8FBC8F":"darkseagreen","#C1FFC1":"darkseagreen1","#B4EEB4":"darkseagreen2","#9BCD9B":"darkseagreen3","#698B69":"darkseagreen4","#483D8B":"darkslateblue","#2F4F4F":"darkslategray","#97FFFF":"darkslategray1","#8DEEEE":"darkslategray2","#79CDCD":"darkslategray3","#528B8B":"darkslategray4","#00CED1":"darkturquoise","#9400D3":"darkviolet","#FF1493":"deeppink","#EE1289":"deeppink2","#CD1076":"deeppink3","#8B0A50":"deeppink4","#00BFFF":"deepskyblue","#00B2EE":"deepskyblue2","#009ACD":"deepskyblue3","#00688B":"deepskyblue4","#696969":"dimgray","#1E90FF":"dodgerblue","#1C86EE":"dodgerblue2","#1874CD":"dodgerblue3","#104E8B":"dodgerblue4","#B22222":"firebrick","#FF3030":"firebrick1","#EE2C2C":"firebrick2","#CD2626":"firebrick3","#8B1A1A":"firebrick4","#FFFAF0":"floralwhite","#228B22":"forestgreen","#DCDCDC":"gainsboro","#F8F8FF":"ghostwhite","#FFD700":"gold","#EEC900":"gold2","#CDAD00":"gold3","#8B7500":"gold4","#DAA520":"goldenrod","#FFC125":"goldenrod1","#EEB422":"goldenrod2","#CD9B1D":"goldenrod3","#8B6914":"goldenrod4","#BEBEBE":"gray","#030303":"gray1","#050505":"gray2","#080808":"gray3","#0A0A0A":"gray4","#0D0D0D":"gray5","#0F0F0F":"gray6","#121212":"gray7","#141414":"gray8","#171717":"gray9","#1A1A1A":"gray10","#1C1C1C":"gray11","#1F1F1F":"gray12","#212121":"gray13","#242424":"gray14","#262626":"gray15","#292929":"gray16","#2B2B2B":"gray17","#2E2E2E":"gray18","#303030":"gray19","#333333":"gray20","#363636":"gray21","#383838":"gray22","#3B3B3B":"gray23","#3D3D3D":"gray24","#404040":"gray25","#424242":"gray26","#454545":"gray27","#474747":"gray28","#4A4A4A":"gray29","#4D4D4D":"gray30","#4F4F4F":"gray31","#525252":"gray32","#545454":"gray33","#575757":"gray34","#595959":"gray35","#5C5C5C":"gray36","#5E5E5E":"gray37","#616161":"gray38","#636363":"gray39","#666666":"gray40","#6B6B6B":"gray42","#6E6E6E":"gray43","#707070":"gray44","#737373":"gray45","#757575":"gray46","#787878":"gray47","#7A7A7A":"gray48","#7D7D7D":"gray49","#7F7F7F":"gray50","#828282":"gray51","#858585":"gray52","#878787":"gray53","#8A8A8A":"gray54","#8C8C8C":"gray55","#8F8F8F":"gray56","#919191":"gray57","#949494":"gray58","#969696":"gray59","#999999":"gray60","#9C9C9C":"gray61","#9E9E9E":"gray62","#A1A1A1":"gray63","#A3A3A3":"gray64","#A6A6A6":"gray65","#A8A8A8":"gray66","#ABABAB":"gray67","#ADADAD":"gray68","#B0B0B0":"gray69","#B3B3B3":"gray70","#B5B5B5":"gray71","#B8B8B8":"gray72","#BABABA":"gray73","#BDBDBD":"gray74","#BFBFBF":"gray75","#C2C2C2":"gray76","#C4C4C4":"gray77","#C7C7C7":"gray78","#C9C9C9":"gray79","#CCCCCC":"gray80","#CFCFCF":"gray81","#D1D1D1":"gray82","#D4D4D4":"gray83","#D6D6D6":"gray84","#D9D9D9":"gray85","#DBDBDB":"gray86","#DEDEDE":"gray87","#E0E0E0":"gray88","#E3E3E3":"gray89","#E5E5E5":"gray90","#E8E8E8":"gray91","#EBEBEB":"gray92","#EDEDED":"gray93","#F0F0F0":"gray94","#F2F2F2":"gray95","#F5F5F5":"gray96","#F7F7F7":"gray97","#FAFAFA":"gray98","#FCFCFC":"gray99","#00FF00":"green","#00EE00":"green2","#00CD00":"green3","#008B00":"green4","#ADFF2F":"greenyellow","#F0FFF0":"honeydew","#E0EEE0":"honeydew2","#C1CDC1":"honeydew3","#838B83":"honeydew4","#FF69B4":"hotpink","#FF6EB4":"hotpink1","#EE6AA7":"hotpink2","#CD6090":"hotpink3","#8B3A62":"hotpink4","#CD5C5C":"indianred","#FF6A6A":"indianred1","#EE6363":"indianred2","#CD5555":"indianred3","#8B3A3A":"indianred4","#FFFFF0":"ivory","#EEEEE0":"ivory2","#CDCDC1":"ivory3","#8B8B83":"ivory4","#F0E68C":"khaki","#FFF68F":"khaki1","#EEE685":"khaki2","#CDC673":"khaki3","#8B864E":"khaki4","#E6E6FA":"lavender","#FFF0F5":"lavenderblush","#EEE0E5":"lavenderblush2","#CDC1C5":"lavenderblush3","#8B8386":"lavenderblush4","#7CFC00":"lawngreen","#FFFACD":"lemonchiffon","#EEE9BF":"lemonchiffon2","#CDC9A5":"lemonchiffon3","#8B8970":"lemonchiffon4","#ADD8E6":"lightblue","#BFEFFF":"lightblue1","#B2DFEE":"lightblue2","#9AC0CD":"lightblue3","#68838B":"lightblue4","#F08080":"lightcoral","#E0FFFF":"lightcyan","#D1EEEE":"lightcyan2","#B4CDCD":"lightcyan3","#7A8B8B":"lightcyan4","#EEDD82":"lightgoldenrod","#FFEC8B":"lightgoldenrod1","#EEDC82":"lightgoldenrod2","#CDBE70":"lightgoldenrod3","#8B814C":"lightgoldenrod4","#FAFAD2":"lightgoldenrodyellow","#D3D3D3":"lightgray","#90EE90":"lightgreen","#FFB6C1":"lightpink","#FFAEB9":"lightpink1","#EEA2AD":"lightpink2","#CD8C95":"lightpink3","#8B5F65":"lightpink4","#FFA07A":"lightsalmon","#EE9572":"lightsalmon2","#CD8162":"lightsalmon3","#8B5742":"lightsalmon4","#20B2AA":"lightseagreen","#87CEFA":"lightskyblue","#B0E2FF":"lightskyblue1","#A4D3EE":"lightskyblue2","#8DB6CD":"lightskyblue3","#607B8B":"lightskyblue4","#8470FF":"lightslateblue","#778899":"lightslategray","#B0C4DE":"lightsteelblue","#CAE1FF":"lightsteelblue1","#BCD2EE":"lightsteelblue2","#A2B5CD":"lightsteelblue3","#6E7B8B":"lightsteelblue4","#FFFFE0":"lightyellow","#EEEED1":"lightyellow2","#CDCDB4":"lightyellow3","#8B8B7A":"lightyellow4","#32CD32":"limegreen","#FAF0E6":"linen","#FF00FF":"magenta","#EE00EE":"magenta2","#CD00CD":"magenta3","#B03060":"maroon","#FF34B3":"maroon1","#EE30A7":"maroon2","#CD2990":"maroon3","#8B1C62":"maroon4","#BA55D3":"mediumorchid","#E066FF":"mediumorchid1","#D15FEE":"mediumorchid2","#B452CD":"mediumorchid3","#7A378B":"mediumorchid4","#9370DB":"mediumpurple","#AB82FF":"mediumpurple1","#9F79EE":"mediumpurple2","#8968CD":"mediumpurple3","#5D478B":"mediumpurple4","#3CB371":"mediumseagreen","#7B68EE":"mediumslateblue","#00FA9A":"mediumspringgreen","#48D1CC":"mediumturquoise","#C71585":"mediumvioletred","#191970":"midnightblue","#F5FFFA":"mintcream","#FFE4E1":"mistyrose","#EED5D2":"mistyrose2","#CDB7B5":"mistyrose3","#8B7D7B":"mistyrose4","#FFE4B5":"moccasin","#FFDEAD":"navajowhite","#EECFA1":"navajowhite2","#CDB38B":"navajowhite3","#8B795E":"navajowhite4","#000080":"navy","#FDF5E6":"oldlace","#6B8E23":"olivedrab","#C0FF3E":"olivedrab1","#B3EE3A":"olivedrab2","#9ACD32":"olivedrab3","#698B22":"olivedrab4","#FFA500":"orange","#EE9A00":"orange2","#CD8500":"orange3","#8B5A00":"orange4","#FF4500":"orangered","#EE4000":"orangered2","#CD3700":"orangered3","#8B2500":"orangered4","#DA70D6":"orchid","#FF83FA":"orchid1","#EE7AE9":"orchid2","#CD69C9":"orchid3","#8B4789":"orchid4","#EEE8AA":"palegoldenrod","#98FB98":"palegreen","#9AFF9A":"palegreen1","#7CCD7C":"palegreen3","#548B54":"palegreen4","#AFEEEE":"paleturquoise","#BBFFFF":"paleturquoise1","#AEEEEE":"paleturquoise2","#96CDCD":"paleturquoise3","#668B8B":"paleturquoise4","#DB7093":"palevioletred","#FF82AB":"palevioletred1","#EE799F":"palevioletred2","#CD6889":"palevioletred3","#8B475D":"palevioletred4","#FFEFD5":"papayawhip","#FFDAB9":"peachpuff","#EECBAD":"peachpuff2","#CDAF95":"peachpuff3","#8B7765":"peachpuff4","#CD853F":"peru","#FFC0CB":"pink","#FFB5C5":"pink1","#EEA9B8":"pink2","#CD919E":"pink3","#8B636C":"pink4","#DDA0DD":"plum","#FFBBFF":"plum1","#EEAEEE":"plum2","#CD96CD":"plum3","#8B668B":"plum4","#B0E0E6":"powderblue","#A020F0":"purple","#9B30FF":"purple1","#912CEE":"purple2","#7D26CD":"purple3","#551A8B":"purple4","#FF0000":"red","#EE0000":"red2","#CD0000":"red3","#BC8F8F":"rosybrown","#FFC1C1":"rosybrown1","#EEB4B4":"rosybrown2","#CD9B9B":"rosybrown3","#8B6969":"rosybrown4","#4169E1":"royalblue","#4876FF":"royalblue1","#436EEE":"royalblue2","#3A5FCD":"royalblue3","#27408B":"royalblue4","#FA8072":"salmon","#FF8C69":"salmon1","#EE8262":"salmon2","#CD7054":"salmon3","#8B4C39":"salmon4","#F4A460":"sandybrown","#2E8B57":"seagreen","#54FF9F":"seagreen1","#4EEE94":"seagreen2","#43CD80":"seagreen3","#FFF5EE":"seashell","#EEE5DE":"seashell2","#CDC5BF":"seashell3","#8B8682":"seashell4","#A0522D":"sienna","#FF8247":"sienna1","#EE7942":"sienna2","#CD6839":"sienna3","#8B4726":"sienna4","#87CEEB":"skyblue","#87CEFF":"skyblue1","#7EC0EE":"skyblue2","#6CA6CD":"skyblue3","#4A708B":"skyblue4","#6A5ACD":"slateblue","#836FFF":"slateblue1","#7A67EE":"slateblue2","#6959CD":"slateblue3","#473C8B":"slateblue4","#708090":"slategray","#C6E2FF":"slategray1","#B9D3EE":"slategray2","#9FB6CD":"slategray3","#6C7B8B":"slategray4","#FFFAFA":"snow","#EEE9E9":"snow2","#CDC9C9":"snow3","#8B8989":"snow4","#00FF7F":"springgreen","#00EE76":"springgreen2","#00CD66":"springgreen3","#008B45":"springgreen4","#4682B4":"steelblue","#63B8FF":"steelblue1","#5CACEE":"steelblue2","#4F94CD":"steelblue3","#36648B":"steelblue4","#D2B48C":"tan","#FFA54F":"tan1","#EE9A49":"tan2","#8B5A2B":"tan4","#D8BFD8":"thistle","#FFE1FF":"thistle1","#EED2EE":"thistle2","#CDB5CD":"thistle3","#8B7B8B":"thistle4","#FF6347":"tomato","#EE5C42":"tomato2","#CD4F39":"tomato3","#8B3626":"tomato4","#40E0D0":"turquoise","#00F5FF":"turquoise1","#00E5EE":"turquoise2","#00C5CD":"turquoise3","#00868B":"turquoise4","#EE82EE":"violet","#D02090":"violetred","#FF3E96":"violetred1","#EE3A8C":"violetred2","#CD3278":"violetred3","#8B2252":"violetred4","#F5DEB3":"wheat","#FFE7BA":"wheat1","#EED8AE":"wheat2","#CDBA96":"wheat3","#8B7E66":"wheat4","#FFFF00":"yellow","#EEEE00":"yellow2","#CDCD00":"yellow3","#8B8B00":"yellow4"}

      }
    };

    // Public methods
    $.extend($.fn, {
      colourpicker: function(method, data) {

        switch(method) {

          // Destroy the control
          case 'destroy':
            $(this).each( function() {
              destroy($(this));
            });
            return $(this);

          // Hide the color picker
          case 'hide':
            hide();
            return $(this);

          // Get/set settings on the fly
          case 'settings':
            if( data === undefined ) {
              return $(this).data('colourpicker-settings');
            } else {
              // Setter
              $(this).each( function() {
                var settings = $(this).data('colourpicker-settings') || {};
                destroy($(this));
                $(this).colourpicker($.extend(true, settings, data));
              });
            }
            return $(this);

          // Show the color picker
          case 'show':
            show( $(this).eq(0) );
            return $(this);

          // Get/set the hex color value
          case 'value':
            if( data === undefined ) {
              // Getter
              if ($(this).data('allow-transparent') &&
                  $(this).data('transparent')) {
                return "transparent";
              }
              if (!parseHexAllowed($(this))) {
                return $(this).data('colourpicker-lastChange');
              }

              var colReturn = parseHexAllowed($(this));
              if ($(this).data('return-name')) {
                if (colReturn in $(this).data('colourpicker-settings').colsMap) {
                  colReturn = $(this).data('colourpicker-settings').colsMap[colReturn];
                }
              }

              return colReturn;
            } else {
              // Setter
              $(this).each( function() {
                if (data == "transparent") {
                  if ( $(this).data('allow-transparent') ) {
                    $(this).data('transparent', true);
                  } else {
                    $(this).data('transparent', false);
                    $(this).val(getLastVal($(this)));
                  }
                } else {
                  $(this).data('transparent', false);
                  $(this).val(data);
                }
                updateFromInput($(this));
              });
            }
            return $(this);

          // Initializes the control
          default:
            if( method !== 'create' ) data = method;
            $(this).each( function() {
              init($(this), data);
            });
            return $(this);
        }
      }
    });

    // Initialize input elements
    function init(input, settings) {

      var colourpicker = $('<div class="colourpicker" />'),
      defaults = $.colourpicker.defaults;

      // Do nothing if already initialized
      if( input.data('colourpicker-initialized') ) return;

      // Handle settings
      settings = $.extend(true, {}, defaults, settings);

	    // Palette type
	    colourpicker.addClass('palette-' + settings.palette);

	    // If adding a transparent checkbox, make the parent an input group
      if( settings.allowTransparent ) {
        colourpicker.addClass('input-group');
      }

      // The input
      input
      .addClass('colourpicker-input')
	    .prop('spellcheck', false)
      .data('colourpicker-initialized', false)
      .data('colourpicker-lastChange', false)
      .data('colourpicker-settings', settings)
      .prop('size', 7)
      .wrap(colourpicker);

	    if( settings.palette == "square" ) {
	      input
		    .after(
          '<div class="colourpicker-panel">' +
            '<div class="colourpicker-slider colourpicker-sprite">' +
              '<div class="colourpicker-slider-picker"></div>' +
            '</div>' +
            '<div class="colourpicker-grid colourpicker-sprite">' +
              '<div class="colourpicker-grid-inner"></div>' +
              '<div class="colourpicker-picker">' +
                '<div></div>' +
              '</div>' +
            '</div>' +
          '</div>'
        );
	    } else if( settings.palette == "limited" ) {
        var coloursHtml = '<div class="colourpicker-list">';
	    	$.each(settings.allowedCols.split(" "), function(idx, col) {
		      if (idx == 0) {
            coloursHtml += '<div class="cp-list-row cp-clearfix">';
          } else if (idx % 8 == 0) {
            coloursHtml += '</div><div class="cp-list-row cp-clearfix">';
          }
			    coloursHtml += '<span class="cp-list-col" data-cp-col="' + col +'" ' +
                            'style="background-color:' + col + '"></span>';
		    });
			  coloursHtml += '</div>';

        input
        .after(
		    '<div class="colourpicker-panel">' +
		      coloursHtml +
		    '</div>'
		    );
	    } else {
		    console.log("colourpicker: invalid palette type (" + settings.palette + ")");
	    }

      // If we want to add transparent button, make an input group
      if ( settings.allowTransparent ) {
        input.parent().find('.colourpicker-panel').after(
          '<label class="input-group-addon">' +
            '<input type="checkbox" class="colourpicker-istransparent"> ' +
			      '<span class="colourpicker-transparent-text">' + settings.transparentText + '</span>' +
          '</label>'
        );
        input.data('allow-transparent', true);
      } else {
        input.data('allow-transparent', false);
      }

      // If only background colour is shown, don't let the user select the text
      if ( settings.showColour == "background" ) {
        input.attr('readonly', 'readonly');
      } else {
        input.removeAttr('readonly');
      }

      // Return a colour name instead of HEX when possible
      if ( settings.returnName ) {
        input.data('return-name', true);
      } else {
        input.data('return-name', false);
      }

      // Prevent text selection in IE
      input.parent().find('.colourpicker-panel').on('selectstart', function() { return false; }).end();

      updateFromInput(input, false);

      input.data('colourpicker-initialized', true);
    }

    // Returns the input back to its original state
    function destroy(input) {

      var colourpicker = input.parent();

      // Revert the input element
      input
      .removeData('colourpicker-initialized')
      .removeData('colourpicker-settings')
      .removeProp('size')
      .removeClass('colourpicker-input');

      // Remove the wrap and destroy whatever remains
      colourpicker.before(input).remove();

    }

    // Shows the specified dropdown panel
    function show(input) {

      var colourpicker = input.parent(),
      panel = colourpicker.find('.colourpicker-panel'),
      settings = input.data('colourpicker-settings');

      // Do nothing if uninitialized, disabled, or already open
      if( !input.data('colourpicker-initialized') ||
          input.prop('disabled') ||
          colourpicker.hasClass('colourpicker-focus')
      ) return;

      hide();

      colourpicker.addClass('colourpicker-focus');
      panel
      .stop(true, true)
      .fadeIn(settings.showSpeed, function() {
        if( settings.show ) settings.show.call(input.get(0));
      });

    }

    // Hides all dropdown panels
    function hide() {

      $('.colourpicker-focus').each( function() {

        var colourpicker = $(this),
        input = colourpicker.find('.colourpicker-input'),
        panel = colourpicker.find('.colourpicker-panel'),
        settings = input.data('colourpicker-settings');

        panel.fadeOut(settings.hideSpeed, function() {
          if( settings.hide ) settings.hide.call(input.get(0));
          colourpicker.removeClass('colourpicker-focus');
        });

      });
    }

    // Moves the selected picker
    function move(target, event, animate) {

      var input = target.parents('.colourpicker').find('.colourpicker-input'),
      settings = input.data('colourpicker-settings'),
      picker = target.find('[class$=-picker]'),
      offsetX = target.offset().left,
      offsetY = target.offset().top,
      x = Math.round(event.pageX - offsetX),
      y = Math.round(event.pageY - offsetY),
      duration = animate ? settings.animationSpeed : 0,
      wx, wy, r, phi;

      // Touch support
      if( event.originalEvent.changedTouches ) {
        x = event.originalEvent.changedTouches[0].pageX - offsetX;
        y = event.originalEvent.changedTouches[0].pageY - offsetY;
      }

      // Constrain picker to its container
      if( x < 0 ) x = 0;
      if( y < 0 ) y = 0;
      if( x > target.width() ) x = target.width();
      if( y > target.height() ) y = target.height();

      // Move the picker
      if( target.is('.colourpicker-grid') ) {
        picker
        .stop(true)
        .animate({
          top: y + 'px',
          left: x + 'px'
        }, duration, settings.animationEasing, function() {
          updateFromControl(input, target);
        });
      } else {
        picker
        .stop(true)
        .animate({
          top: y + 'px'
        }, duration, settings.animationEasing, function() {
          updateFromControl(input, target);
        });
      }

    }

    // Sets the input based on the color picker values
    function updateFromControl(input, target) {

      function getCoords(picker, container) {

        var left, top;
        if( !picker.length || !container ) return null;
        left = picker.offset().left;
        top = picker.offset().top;

        return {
          x: left - container.offset().left + (picker.outerWidth() / 2),
          y: top - container.offset().top + (picker.outerHeight() / 2)
        };

      }

      var hue, saturation, brightness, x, y, r, phi,

      hex = input.val(),

      // Helpful references
      colourpicker = input.parent(),
      settings = input.data('colourpicker-settings'),

      // Panel objects
      grid = colourpicker.find('.colourpicker-grid'),
      slider = colourpicker.find('.colourpicker-slider'),

      // Picker objects
      gridPicker = grid.find('[class$=-picker]'),
      sliderPicker = slider.find('[class$=-picker]'),

      // Picker positions
      gridPos = getCoords(gridPicker, grid),
      sliderPos = getCoords(sliderPicker, slider);

      // Handle colors when there's a palette
      if( target.is('.colourpicker-grid, .colourpicker-slider') ) {
        // Calculate hue, saturation, and brightness
        hue = keepWithin(360 - parseInt(sliderPos.y * (360 / slider.height()), 10), 0, 360);
        saturation = keepWithin(Math.floor(gridPos.x * (100 / grid.width())), 0, 100);
        brightness = keepWithin(100 - Math.floor(gridPos.y * (100 / grid.height())), 0, 100);
        hex = hsb2hex({
          h: hue,
          s: saturation,
          b: brightness
        });

        // Update UI
        grid.css('backgroundColor', hsb2hex({ h: hue, s: 100, b: 100 }));

        // Adjust case
        input.val(hex.toUpperCase());
      }

      // Handle colours when there is a limited selection of colours
      if( target.is('.cp-list-col') ) {
        hex = target.data('cp-col');
        input.val(hex);
      }

      // Update text colour and background colour
      switch (settings.showColour) {
        case "text":
          input.css('color', '');
          input.css('background-color', '');
          break;
        case "background":
          input.css('color', "transparent");
          input.css('background-color', hex);
          break;
        default:
          input.css('color', isColDark(hex) ? '#ddd' : '#000');
          input.css('background-color', hex);
      }

      // Update select colour
      if( settings.palette == 'limited') {
        colourpicker.find('.cp-list-col').removeClass('selected-col');
        colourpicker.find('.cp-list-col[data-cp-col="' + hex + '"]')
          .addClass('selected-col')
          .addClass(isColDark(hex) ? 'dark' : 'light');
      }

      // Handle change event
      doChange(input, hex, input.data('transparent'));

    }

    // Sets the color picker values from the input
    function updateFromInput(input, preserveInputValue) {

      var hex,
      hsb,
      x, y, r, phi,

      // Helpful references
      colourpicker = input.parent(),
      settings = input.data('colourpicker-settings'),

      // Panel objects
      grid = colourpicker.find('.colourpicker-grid'),
      slider = colourpicker.find('.colourpicker-slider'),

      // Picker objects
      gridPicker = grid.find('[class$=-picker]'),
      sliderPicker = slider.find('[class$=-picker]');

      // Determine hex/HSB values
      hex = parseHexAllowed(input);
      if( !hex ){
        hex = getLastVal(input);
      }
      hsb = hex2hsb(hex);

      // Update input value
      if( !preserveInputValue ) input.val(hex);

      // Update text colour and background colour
      switch (settings.showColour) {
        case "text":
          input.css('color', '');
          input.css('background-color', '');
          break;
        case "background":
          input.css('color', "transparent");
          input.css('background-color', hex);
          break;
        default:
          input.css('color', isColDark(hex) ? '#ddd' : '#000');
          input.css('background-color', hex);
      }

      // Update select colour
      if( settings.palette == 'limited') {
        colourpicker.find('.cp-list-col').removeClass('selected-col');
        colourpicker.find('.cp-list-col[data-cp-col="' + hex + '"]')
          .addClass('selected-col')
          .addClass(isColDark(hex) ? 'dark' : 'light');
      }

      // Set grid position
      x = keepWithin(Math.ceil(hsb.s / (100 / grid.width())), 0, grid.width());
      y = keepWithin(grid.height() - Math.ceil(hsb.b / (100 / grid.height())), 0, grid.height());
      gridPicker.css({
        top: y + 'px',
        left: x + 'px'
      });

      // Set slider position
      y = keepWithin(slider.height() - (hsb.h / (360 / slider.height())), 0, slider.height());
      sliderPicker.css('top', y + 'px');

      // Update panel color
      grid.css('backgroundColor', hsb2hex({ h: hsb.h, s: 100, b: 100 }));

      // Fire change event, but only if colourpicker is fully initialized
      if( input.data('colourpicker-initialized') ) {
        doChange(input, hex, input.data('transparent'));
      }
      if( input.data('transparent') ) {
        colourpicker.find('.colourpicker-istransparent').prop('checked', true);
        colourpicker.addClass('istransparent');
      } else {
        colourpicker.find('.colourpicker-istransparent').prop('checked', false);
        colourpicker.removeClass('istransparent');
      }

      input.trigger('change').trigger('input');
    }

    // Runs the change and changeDelay callbacks
    function doChange(input, hex, transparent) {

      var settings = input.data('colourpicker-settings'),
      lastChange = input.data('colourpicker-lastChange'),
      lastTransparent = input.data('colourpicker-lastTransparent');

      // Only run if it actually changed
      if( !lastChange || lastChange !== hex || lastTransparent !== transparent ) {

        // Remember last-changed value
        input.data('colourpicker-lastChange', hex);
        input.data('colourpicker-lastTransparent', transparent);

        // Fire change event
        if( settings.change ) {
          if( settings.changeDelay ) {
            // Call after a delay
            clearTimeout(input.data('colourpicker-changeTimeout'));
            input.data('colourpicker-changeTimeout', setTimeout( function() {
              settings.change.call(input.get(0), hex);
            }, settings.changeDelay));
          } else {
            // Call immediately
            settings.change.call(input.get(0), hex);
          }
        }
        input.trigger('change').trigger('input');
      }

    }

    // Parses a valid HEX value from an input
    function parseHexAllowed(input) {
      var string = input.val();
      var settings = input.data('colourpicker-settings');
      var hex = parseHex(string).toUpperCase();
      if ( settings.palette == 'limited' && $.inArray(hex, settings.allowedCols.split(" ")) == -1 ) {
        hex = '';
      }
      return hex;
    }

    // Parses a string and returns a valid hex string when possible
    function parseHex(string) {
      string = string.replace(/[^A-F0-9]/ig, '');
      if( string.length !== 3 && string.length !== 6 ) return '';
      if( string.length === 3 ) {
        string = string[0] + string[0] + string[1] + string[1] + string[2] + string[2];
      }
      return '#' + string;
    }

    // Keeps value within min and max
    function keepWithin(value, min, max) {
      if( value < min ) value = min;
      if( value > max ) value = max;
      return value;
    }

    // Converts an HSB object to an RGB object
    function hsb2rgb(hsb) {
      var rgb = {};
      var h = Math.round(hsb.h);
      var s = Math.round(hsb.s * 255 / 100);
      var v = Math.round(hsb.b * 255 / 100);
      if(s === 0) {
        rgb.r = rgb.g = rgb.b = v;
      } else {
        var t1 = v;
        var t2 = (255 - s) * v / 255;
        var t3 = (t1 - t2) * (h % 60) / 60;
        if( h === 360 ) h = 0;
        if( h < 60 ) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3; }
        else if( h < 120 ) {rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3; }
        else if( h < 180 ) {rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3; }
        else if( h < 240 ) {rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3; }
        else if( h < 300 ) {rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3; }
        else if( h < 360 ) {rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3; }
        else { rgb.r = 0; rgb.g = 0; rgb.b = 0; }
      }
      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    }

    // Converts an RGB object to a hex string
    function rgb2hex(rgb) {
      var hex = [
        rgb.r.toString(16),
        rgb.g.toString(16),
        rgb.b.toString(16)
        ];
      $.each(hex, function(nr, val) {
        if (val.length === 1) hex[nr] = '0' + val;
      });
      return '#' + hex.join('');
    }

    // Converts an HSB object to a hex string
    function hsb2hex(hsb) {
      return rgb2hex(hsb2rgb(hsb));
    }

    // Converts a hex string to an HSB object
    function hex2hsb(hex) {
      var hsb = rgb2hsb(hex2rgb(hex));
      if( hsb.s === 0 ) hsb.h = 360;
      return hsb;
    }

    // Converts an RGB object to an HSB object
    function rgb2hsb(rgb) {
      var hsb = { h: 0, s: 0, b: 0 };
      var min = Math.min(rgb.r, rgb.g, rgb.b);
      var max = Math.max(rgb.r, rgb.g, rgb.b);
      var delta = max - min;
      hsb.b = max;
      hsb.s = max !== 0 ? 255 * delta / max : 0;
      if( hsb.s !== 0 ) {
        if( rgb.r === max ) {
          hsb.h = (rgb.g - rgb.b) / delta;
        } else if( rgb.g === max ) {
          hsb.h = 2 + (rgb.b - rgb.r) / delta;
        } else {
          hsb.h = 4 + (rgb.r - rgb.g) / delta;
        }
      } else {
        hsb.h = -1;
      }
      hsb.h *= 60;
      if( hsb.h < 0 ) {
        hsb.h += 360;
      }
      hsb.s *= 100/255;
      hsb.b *= 100/255;
      return hsb;
    }

    // Converts a hex string to an RGB object
    function hex2rgb(hex) {
      hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
      return {
        /* jshint ignore:start */
        r: hex >> 16,
        g: (hex & 0x00FF00) >> 8,
        b: (hex & 0x0000FF)
        /* jshint ignore:end */
      };
    }

    // Determine if the selected colour is dark or not
    function isColDark(hex) {
      return getLuminance(hex) > 0.22 ? false : true;
    }

    // Calculate the luminance of the chosen colour to determine if too dark for text
    function getLuminance(hex) {
      var rgb = hex2rgb(hex);
      rgb = $.map(rgb, function(x) {
        x = x / 255;
        x = x <= 0.03928 ? x / 12.92 : Math.pow(((x + 0.055) / 1.055), 2.4);
        return x;
      });
      var luminance = rgb[0]*0.2126 + rgb[1]*0.7152 + rgb[2]*0.0722;
      return luminance;
    }


    function getLastVal(input) {
      if (input.data('colourpicker-lastChange')) {
        return input.data('colourpicker-lastChange');
      } else if (input.parent().is('.palette-limited')) {
        var firstCol = input.parent().find('.cp-list-col').first();
        return firstCol.data('cp-col');
      } else {
        return "#FFFFFF";
      }
    }

    // Handle events
    $(document)
    // Hide on clicks outside of the control
    .on('mousedown.colourpicker touchstart.colourpicker', function(event) {
      if( !$(event.target).parents().add(event.target).hasClass('colourpicker') ) {
        hide();
      }
    })
    // Click on a colour from a limited-selection palette
    .on('mousedown.colourpicker touchstart.colourpicker', '.cp-list-col', function(event) {
      var target = $(this);
      event.preventDefault();
      var input = target.parents('.colourpicker').find('.colourpicker-input');
      updateFromControl(input, target);
    })
    // Start moving in a palette
    .on('mousedown.colourpicker touchstart.colourpicker', '.colourpicker-grid, .colourpicker-slider', function(event) {
      var target = $(this);
      event.preventDefault();
      $(document).data('colourpicker-target', target);
      move(target, event, true);
    })
    // Move pickers
    .on('mousemove.colourpicker touchmove.colourpicker', function(event) {
      var target = $(document).data('colourpicker-target');
      if( target ) move(target, event);
    })
    // Stop moving
    .on('mouseup.colourpicker touchend.colourpicker', function() {
      $(this).removeData('colourpicker-target');
    })
    // Show on focus
    .on('focus.colourpicker', '.colourpicker-input', function() {
      var input = $(this);
      if( !input.data('colourpicker-initialized') ) return;
      input.data('transparent', false);
      show(input);
      updateFromInput($(this));
    })
    // Fix hex on blur
    .on('blur.colourpicker', '.colourpicker-input', function() {
      var input = $(this),
      settings = input.data('colourpicker-settings');
      if( !input.data('colourpicker-initialized') ) return;

      // Parse Hex
      input.val(parseHexAllowed(input));

      // Is it blank?
      if( input.val() === '' ) {
        input.val(getLastVal(input));
      }

      // Adjust case
      input.val(input.val().toUpperCase());
    })
    // Handle keypresses
    .on('keydown.colourpicker', '.colourpicker-input', function(event) {
      var input = $(this);
      if( !input.data('colourpicker-initialized') ) return;
      switch(event.keyCode) {
        case 9: // tab
        hide();
        break;
        case 13: // enter
        case 27: // esc
        hide();
        input.blur();
        break;
      }
    })
    // Update on keyup
    .on('keyup.colourpicker', '.colourpicker-input', function() {
      var input = $(this);
      if( !input.data('colourpicker-initialized') ) return;
      updateFromInput(input, true);
    })
    // Update on paste
    .on('paste.colourpicker', '.colourpicker-input', function() {
      var input = $(this);
      if( !input.data('colourpicker-initialized') ) return;
      setTimeout( function() {
        updateFromInput(input, true);
      }, 1);
    })
    // Update when setting transparent option
    .on('change.colourpicker-istransparent', '.input-group-addon', function(event) {
      var input = $(this).siblings(".colourpicker-input");
      var colourpicker = input.parent();
      var checkbox = $(this).find(".colourpicker-istransparent");
      hide();
      input.data('transparent', checkbox.is(":checked"));
      updateFromInput(input);
    });

  }));
