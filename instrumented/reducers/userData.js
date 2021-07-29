function cov_ej4p8v9j0() {
  var path = "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\reducers\\userData.js";
  var hash = "86d20c27abfe8791bf56ecc6286766ba3a50c158";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\reducers\\userData.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 13,
          column: 1
        }
      },
      "1": {
        start: {
          line: 15,
          column: 20
        },
        end: {
          line: 34,
          column: 1
        }
      },
      "2": {
        start: {
          line: 16,
          column: 2
        },
        end: {
          line: 33,
          column: 3
        }
      },
      "3": {
        start: {
          line: 18,
          column: 6
        },
        end: {
          line: 18,
          column: 46
        }
      },
      "4": {
        start: {
          line: 19,
          column: 6
        },
        end: {
          line: 19,
          column: 48
        }
      },
      "5": {
        start: {
          line: 20,
          column: 6
        },
        end: {
          line: 20,
          column: 45
        }
      },
      "6": {
        start: {
          line: 22,
          column: 6
        },
        end: {
          line: 22,
          column: 46
        }
      },
      "7": {
        start: {
          line: 23,
          column: 6
        },
        end: {
          line: 23,
          column: 48
        }
      },
      "8": {
        start: {
          line: 24,
          column: 6
        },
        end: {
          line: 24,
          column: 45
        }
      },
      "9": {
        start: {
          line: 26,
          column: 6
        },
        end: {
          line: 26,
          column: 45
        }
      },
      "10": {
        start: {
          line: 28,
          column: 6
        },
        end: {
          line: 28,
          column: 45
        }
      },
      "11": {
        start: {
          line: 30,
          column: 6
        },
        end: {
          line: 30,
          column: 30
        }
      },
      "12": {
        start: {
          line: 32,
          column: 6
        },
        end: {
          line: 32,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 15,
            column: 20
          },
          end: {
            line: 15,
            column: 21
          }
        },
        loc: {
          start: {
            line: 15,
            column: 54
          },
          end: {
            line: 34,
            column: 1
          }
        },
        line: 15
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 15,
            column: 21
          },
          end: {
            line: 15,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 15,
            column: 29
          },
          end: {
            line: 15,
            column: 41
          }
        }],
        line: 15
      },
      "1": {
        loc: {
          start: {
            line: 16,
            column: 2
          },
          end: {
            line: 33,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 17,
            column: 4
          },
          end: {
            line: 20,
            column: 45
          }
        }, {
          start: {
            line: 21,
            column: 4
          },
          end: {
            line: 24,
            column: 45
          }
        }, {
          start: {
            line: 25,
            column: 4
          },
          end: {
            line: 26,
            column: 45
          }
        }, {
          start: {
            line: 27,
            column: 4
          },
          end: {
            line: 28,
            column: 45
          }
        }, {
          start: {
            line: 29,
            column: 4
          },
          end: {
            line: 30,
            column: 30
          }
        }, {
          start: {
            line: 31,
            column: 4
          },
          end: {
            line: 32,
            column: 19
          }
        }],
        line: 16
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
      "11": 0,
      "12": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0, 0, 0, 0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "86d20c27abfe8791bf56ecc6286766ba3a50c158"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_ej4p8v9j0 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_ej4p8v9j0();
import { SIGN_IN, SIGN_UP, IS_TOKEN, SIGN_OFF, HOME_DATA } from 'actions/types';
const initialState = (cov_ej4p8v9j0().s[0]++, {
  token: undefined,
  name: '',
  surname: '',
  email: '',
  password: '',
  confirmPassword: '',
  number: '',
  expiry: '',
  brand: ''
});
cov_ej4p8v9j0().s[1]++;

const userReducer = (state = (cov_ej4p8v9j0().b[0][0]++, initialState), action) => {
  cov_ej4p8v9j0().f[0]++;
  cov_ej4p8v9j0().s[2]++;

  switch (action.type) {
    case SIGN_UP:
      cov_ej4p8v9j0().b[1][0]++;
      cov_ej4p8v9j0().s[3]++;
      localStorage.jwt = action.payload.token;
      cov_ej4p8v9j0().s[4]++;
      localStorage.email = action.payload.email;
      cov_ej4p8v9j0().s[5]++;
      return { ...state,
        ...action.payload
      };

    case SIGN_IN:
      cov_ej4p8v9j0().b[1][1]++;
      cov_ej4p8v9j0().s[6]++;
      localStorage.jwt = action.payload.token;
      cov_ej4p8v9j0().s[7]++;
      localStorage.email = action.payload.email;
      cov_ej4p8v9j0().s[8]++;
      return { ...state,
        ...action.payload
      };

    case IS_TOKEN:
      cov_ej4p8v9j0().b[1][2]++;
      cov_ej4p8v9j0().s[9]++;
      return { ...state,
        ...action.payload
      };

    case HOME_DATA:
      cov_ej4p8v9j0().b[1][3]++;
      cov_ej4p8v9j0().s[10]++;
      return { ...state,
        ...action.payload
      };

    case SIGN_OFF:
      cov_ej4p8v9j0().b[1][4]++;
      cov_ej4p8v9j0().s[11]++;
      return {
        initialState
      };

    default:
      cov_ej4p8v9j0().b[1][5]++;
      cov_ej4p8v9j0().s[12]++;
      return state;
  }
};

export default userReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJEYXRhLmpzIl0sIm5hbWVzIjpbIlNJR05fSU4iLCJTSUdOX1VQIiwiSVNfVE9LRU4iLCJTSUdOX09GRiIsIkhPTUVfREFUQSIsImluaXRpYWxTdGF0ZSIsInRva2VuIiwidW5kZWZpbmVkIiwibmFtZSIsInN1cm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwibnVtYmVyIiwiZXhwaXJ5IiwiYnJhbmQiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsImp3dCIsInBheWxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZVk7Ozs7Ozs7OztBQWZaLFNBQVNBLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCQyxRQUEzQixFQUFxQ0MsUUFBckMsRUFBK0NDLFNBQS9DLFFBQWdFLGVBQWhFO0FBRUEsTUFBTUMsWUFBWSw0QkFBRztBQUNuQkMsRUFBQUEsS0FBSyxFQUFFQyxTQURZO0FBRW5CQyxFQUFBQSxJQUFJLEVBQUUsRUFGYTtBQUduQkMsRUFBQUEsT0FBTyxFQUFFLEVBSFU7QUFJbkJDLEVBQUFBLEtBQUssRUFBRSxFQUpZO0FBS25CQyxFQUFBQSxRQUFRLEVBQUUsRUFMUztBQU1uQkMsRUFBQUEsZUFBZSxFQUFFLEVBTkU7QUFPbkJDLEVBQUFBLE1BQU0sRUFBRSxFQVBXO0FBUW5CQyxFQUFBQSxNQUFNLEVBQUUsRUFSVztBQVNuQkMsRUFBQUEsS0FBSyxFQUFFO0FBVFksQ0FBSCxDQUFsQjs7O0FBWUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssK0JBQUdaLFlBQUgsQ0FBTixFQUF1QmEsTUFBdkIsS0FBa0M7QUFBQTtBQUFBOztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLbEIsT0FBTDtBQUFBO0FBQUE7QUFDRW1CLE1BQUFBLFlBQVksQ0FBQ0MsR0FBYixHQUFtQkgsTUFBTSxDQUFDSSxPQUFQLENBQWVoQixLQUFsQztBQURGO0FBRUVjLE1BQUFBLFlBQVksQ0FBQ1YsS0FBYixHQUFxQlEsTUFBTSxDQUFDSSxPQUFQLENBQWVaLEtBQXBDO0FBRkY7QUFHRSxhQUFPLEVBQUUsR0FBR08sS0FBTDtBQUFZLFdBQUdDLE1BQU0sQ0FBQ0k7QUFBdEIsT0FBUDs7QUFDRixTQUFLdEIsT0FBTDtBQUFBO0FBQUE7QUFDRW9CLE1BQUFBLFlBQVksQ0FBQ0MsR0FBYixHQUFtQkgsTUFBTSxDQUFDSSxPQUFQLENBQWVoQixLQUFsQztBQURGO0FBRUVjLE1BQUFBLFlBQVksQ0FBQ1YsS0FBYixHQUFxQlEsTUFBTSxDQUFDSSxPQUFQLENBQWVaLEtBQXBDO0FBRkY7QUFHRSxhQUFPLEVBQUUsR0FBR08sS0FBTDtBQUFZLFdBQUdDLE1BQU0sQ0FBQ0k7QUFBdEIsT0FBUDs7QUFDRixTQUFLcEIsUUFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUUsR0FBR2UsS0FBTDtBQUFZLFdBQUdDLE1BQU0sQ0FBQ0k7QUFBdEIsT0FBUDs7QUFDRixTQUFLbEIsU0FBTDtBQUFBO0FBQUE7QUFDRSxhQUFPLEVBQUUsR0FBR2EsS0FBTDtBQUFZLFdBQUdDLE1BQU0sQ0FBQ0k7QUFBdEIsT0FBUDs7QUFDRixTQUFLbkIsUUFBTDtBQUFBO0FBQUE7QUFDRSxhQUFPO0FBQUVFLFFBQUFBO0FBQUYsT0FBUDs7QUFDRjtBQUFBO0FBQUE7QUFDRSxhQUFPWSxLQUFQO0FBaEJKO0FBa0JELENBbkJEOztBQXNCQSxlQUFlRCxXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU0lHTl9JTiwgU0lHTl9VUCwgSVNfVE9LRU4sIFNJR05fT0ZGLCBIT01FX0RBVEEgfSBmcm9tICdhY3Rpb25zL3R5cGVzJztcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB0b2tlbjogdW5kZWZpbmVkLCAgXHJcbiAgbmFtZTogJycsXHJcbiAgc3VybmFtZTogJycsXHJcbiAgZW1haWw6ICcnLFxyXG4gIHBhc3N3b3JkOiAnJyxcclxuICBjb25maXJtUGFzc3dvcmQ6ICcnLFxyXG4gIG51bWJlcjogJycsXHJcbiAgZXhwaXJ5OiAnJyxcclxuICBicmFuZDogJydcclxufTtcclxuXHJcbmNvbnN0IHVzZXJSZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNJR05fVVA6XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5qd3QgPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcclxuICAgICAgbG9jYWxTdG9yYWdlLmVtYWlsID0gYWN0aW9uLnBheWxvYWQuZW1haWw7XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTSUdOX0lOOlxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuand0ID0gYWN0aW9uLnBheWxvYWQudG9rZW47XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5lbWFpbCA9IGFjdGlvbi5wYXlsb2FkLmVtYWlsO1xyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGNhc2UgSVNfVE9LRU46XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBIT01FX0RBVEE6XHJcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xyXG4gICAgY2FzZSBTSUdOX09GRjpcclxuICAgICAgcmV0dXJuIHsgaW5pdGlhbFN0YXRlIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICByZXR1cm4gc3RhdGU7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iXX0=