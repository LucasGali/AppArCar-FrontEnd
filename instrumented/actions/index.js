function cov_2pv896775t() {
  var path = "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\actions\\index.js";
  var hash = "170f4b55e5d7b9b087096679ded0952991bf4dca";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\actions\\index.js",
    statementMap: {
      "0": {
        start: {
          line: 10,
          column: 24
        },
        end: {
          line: 40,
          column: 1
        }
      },
      "1": {
        start: {
          line: 11,
          column: 2
        },
        end: {
          line: 39,
          column: 3
        }
      },
      "2": {
        start: {
          line: 13,
          column: 6
        },
        end: {
          line: 16,
          column: 8
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 21,
          column: 8
        }
      },
      "4": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 26,
          column: 8
        }
      },
      "5": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 31,
          column: 8
        }
      },
      "6": {
        start: {
          line: 33,
          column: 6
        },
        end: {
          line: 35,
          column: 8
        }
      },
      "7": {
        start: {
          line: 37,
          column: 6
        },
        end: {
          line: 37,
          column: 30
        }
      },
      "8": {
        start: {
          line: 42,
          column: 27
        },
        end: {
          line: 53,
          column: 1
        }
      },
      "9": {
        start: {
          line: 43,
          column: 2
        },
        end: {
          line: 52,
          column: 3
        }
      },
      "10": {
        start: {
          line: 45,
          column: 6
        },
        end: {
          line: 48,
          column: 8
        }
      },
      "11": {
        start: {
          line: 50,
          column: 6
        },
        end: {
          line: 50,
          column: 30
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 10,
            column: 24
          },
          end: {
            line: 10,
            column: 25
          }
        },
        loc: {
          start: {
            line: 10,
            column: 40
          },
          end: {
            line: 40,
            column: 1
          }
        },
        line: 10
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 42,
            column: 27
          },
          end: {
            line: 42,
            column: 28
          }
        },
        loc: {
          start: {
            line: 42,
            column: 43
          },
          end: {
            line: 53,
            column: 1
          }
        },
        line: 42
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 11,
            column: 2
          },
          end: {
            line: 39,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 12,
            column: 4
          },
          end: {
            line: 16,
            column: 8
          }
        }, {
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 21,
            column: 8
          }
        }, {
          start: {
            line: 22,
            column: 4
          },
          end: {
            line: 26,
            column: 8
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 31,
            column: 8
          }
        }, {
          start: {
            line: 32,
            column: 4
          },
          end: {
            line: 35,
            column: 8
          }
        }, {
          start: {
            line: 36,
            column: 4
          },
          end: {
            line: 38,
            column: 5
          }
        }],
        line: 11
      },
      "1": {
        loc: {
          start: {
            line: 43,
            column: 2
          },
          end: {
            line: 52,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 44,
            column: 4
          },
          end: {
            line: 48,
            column: 8
          }
        }, {
          start: {
            line: 49,
            column: 4
          },
          end: {
            line: 51,
            column: 5
          }
        }],
        line: 43
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0
    },
    f: {
      "0": 0,
      "1": 0
    },
    b: {
      "0": [0, 0, 0, 0, 0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "170f4b55e5d7b9b087096679ded0952991bf4dca"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2pv896775t = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2pv896775t();
import { SIGN_UP, SIGN_IN, IS_TOKEN, SIGN_OFF, LOAD_PARKINGS, HOME_DATA } from './types';
cov_2pv896775t().s[0]++;
export const userData = (type, data) => {
  cov_2pv896775t().f[0]++;
  cov_2pv896775t().s[1]++;

  switch (type) {
    case SIGN_IN:
      cov_2pv896775t().b[0][0]++;
      cov_2pv896775t().s[2]++;
      return {
        type: SIGN_IN,
        payload: data
      };

    case SIGN_UP:
      cov_2pv896775t().b[0][1]++;
      cov_2pv896775t().s[3]++;
      return {
        type: SIGN_UP,
        payload: data
      };

    case IS_TOKEN:
      cov_2pv896775t().b[0][2]++;
      cov_2pv896775t().s[4]++;
      return {
        type: IS_TOKEN,
        payload: data
      };

    case HOME_DATA:
      cov_2pv896775t().b[0][3]++;
      cov_2pv896775t().s[5]++;
      return {
        type: HOME_DATA,
        payload: data
      };

    case SIGN_OFF:
      cov_2pv896775t().b[0][4]++;
      cov_2pv896775t().s[6]++;
      return {
        type: SIGN_OFF
      };

    default:
      cov_2pv896775t().b[0][5]++;
      {
        cov_2pv896775t().s[7]++;
        return {
          type: 'NULL'
        };
      }
  }

  ;
};
cov_2pv896775t().s[8]++;
export const parkingData = (type, data) => {
  cov_2pv896775t().f[1]++;
  cov_2pv896775t().s[9]++;

  switch (type) {
    case LOAD_PARKINGS:
      cov_2pv896775t().b[1][0]++;
      cov_2pv896775t().s[10]++;
      return {
        type: LOAD_PARKINGS,
        payload: data
      };

    default:
      cov_2pv896775t().b[1][1]++;
      {
        cov_2pv896775t().s[11]++;
        return {
          type: 'NULL'
        };
      }
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIlNJR05fVVAiLCJTSUdOX0lOIiwiSVNfVE9LRU4iLCJTSUdOX09GRiIsIkxPQURfUEFSS0lOR1MiLCJIT01FX0RBVEEiLCJ1c2VyRGF0YSIsInR5cGUiLCJkYXRhIiwicGF5bG9hZCIsInBhcmtpbmdEYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQ0VBLE9BREYsRUFFRUMsT0FGRixFQUdFQyxRQUhGLEVBSUVDLFFBSkYsRUFLRUMsYUFMRixFQU1FQyxTQU5GLFFBT08sU0FQUDs7QUFTQSxPQUFPLE1BQU1DLFFBQVEsR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsS0FBZ0I7QUFBQTtBQUFBOztBQUN0QyxVQUFRRCxJQUFSO0FBQ0UsU0FBS04sT0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPO0FBQ0xNLFFBQUFBLElBQUksRUFBRU4sT0FERDtBQUVMUSxRQUFBQSxPQUFPLEVBQUVEO0FBRkosT0FBUDs7QUFJRixTQUFLUixPQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU87QUFDTE8sUUFBQUEsSUFBSSxFQUFFUCxPQUREO0FBRUxTLFFBQUFBLE9BQU8sRUFBRUQ7QUFGSixPQUFQOztBQUlGLFNBQUtOLFFBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTztBQUNMSyxRQUFBQSxJQUFJLEVBQUVMLFFBREQ7QUFFTE8sUUFBQUEsT0FBTyxFQUFFRDtBQUZKLE9BQVA7O0FBSUYsU0FBS0gsU0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPO0FBQ0xFLFFBQUFBLElBQUksRUFBRUYsU0FERDtBQUVMSSxRQUFBQSxPQUFPLEVBQUVEO0FBRkosT0FBUDs7QUFJRixTQUFLTCxRQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU87QUFDTEksUUFBQUEsSUFBSSxFQUFFSjtBQURELE9BQVA7O0FBR0Y7QUFBQTtBQUFTO0FBQUE7QUFDUCxlQUFPO0FBQUVJLFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQVA7QUFDRDtBQTNCSDs7QUE0QkM7QUFDRixDQTlCTTs7QUFnQ1AsT0FBTyxNQUFNRyxXQUFXLEdBQUcsQ0FBQ0gsSUFBRCxFQUFPQyxJQUFQLEtBQWdCO0FBQUE7QUFBQTs7QUFDekMsVUFBUUQsSUFBUjtBQUNFLFNBQUtILGFBQUw7QUFBQTtBQUFBO0FBQ0UsYUFBTztBQUNMRyxRQUFBQSxJQUFJLEVBQUVILGFBREQ7QUFFTEssUUFBQUEsT0FBTyxFQUFFRDtBQUZKLE9BQVA7O0FBSUY7QUFBQTtBQUFTO0FBQUE7QUFDUCxlQUFPO0FBQUVELFVBQUFBLElBQUksRUFBRTtBQUFSLFNBQVA7QUFDRDtBQVJIO0FBVUQsQ0FYTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgU0lHTl9VUCxcclxuICBTSUdOX0lOLFxyXG4gIElTX1RPS0VOLFxyXG4gIFNJR05fT0ZGLFxyXG4gIExPQURfUEFSS0lOR1MsXHJcbiAgSE9NRV9EQVRBLFxyXG59IGZyb20gJy4vdHlwZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZXJEYXRhID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgU0lHTl9JTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBTSUdOX0lOLFxyXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fVVA6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogU0lHTl9VUCxcclxuICAgICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBJU19UT0tFTjpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBJU19UT0tFTixcclxuICAgICAgICBwYXlsb2FkOiBkYXRhLFxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBIT01FX0RBVEE6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogSE9NRV9EQVRBLFxyXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIFNJR05fT0ZGOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IFNJR05fT0ZGLFxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICByZXR1cm4geyB0eXBlOiAnTlVMTCcgfTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhcmtpbmdEYXRhID0gKHR5cGUsIGRhdGEpID0+IHtcclxuICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgIGNhc2UgTE9BRF9QQVJLSU5HUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBMT0FEX1BBUktJTkdTLFxyXG4gICAgICAgIHBheWxvYWQ6IGRhdGEsXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIHJldHVybiB7IHR5cGU6ICdOVUxMJyB9O1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuIl19