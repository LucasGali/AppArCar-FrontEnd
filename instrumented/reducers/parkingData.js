function cov_15fuetf5dj() {
  var path = "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\reducers\\parkingData.js";
  var hash = "42ab235b87a9a7ca8755c45e15ab0c27165b5915";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\reducers\\parkingData.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 21
        },
        end: {
          line: 5,
          column: 1
        }
      },
      "1": {
        start: {
          line: 7,
          column: 20
        },
        end: {
          line: 14,
          column: 1
        }
      },
      "2": {
        start: {
          line: 8,
          column: 2
        },
        end: {
          line: 13,
          column: 3
        }
      },
      "3": {
        start: {
          line: 10,
          column: 6
        },
        end: {
          line: 10,
          column: 47
        }
      },
      "4": {
        start: {
          line: 12,
          column: 6
        },
        end: {
          line: 12,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 20
          },
          end: {
            line: 7,
            column: 21
          }
        },
        loc: {
          start: {
            line: 7,
            column: 54
          },
          end: {
            line: 14,
            column: 1
          }
        },
        line: 7
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 7,
            column: 21
          },
          end: {
            line: 7,
            column: 41
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 7,
            column: 29
          },
          end: {
            line: 7,
            column: 41
          }
        }],
        line: 7
      },
      "1": {
        loc: {
          start: {
            line: 8,
            column: 2
          },
          end: {
            line: 13,
            column: 3
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 9,
            column: 4
          },
          end: {
            line: 10,
            column: 47
          }
        }, {
          start: {
            line: 11,
            column: 4
          },
          end: {
            line: 12,
            column: 19
          }
        }],
        line: 8
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "42ab235b87a9a7ca8755c45e15ab0c27165b5915"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_15fuetf5dj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_15fuetf5dj();
import { LOAD_PARKINGS } from 'actions/types';
const initialState = (cov_15fuetf5dj().s[0]++, {
  parkings: []
});
cov_15fuetf5dj().s[1]++;

const userReducer = (state = (cov_15fuetf5dj().b[0][0]++, initialState), action) => {
  cov_15fuetf5dj().f[0]++;
  cov_15fuetf5dj().s[2]++;

  switch (action.type) {
    case LOAD_PARKINGS:
      cov_15fuetf5dj().b[1][0]++;
      cov_15fuetf5dj().s[3]++;
      return {
        parkings: [...action.payload]
      };

    default:
      cov_15fuetf5dj().b[1][1]++;
      cov_15fuetf5dj().s[4]++;
      return state;
  }
};

export default userReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhcmtpbmdEYXRhLmpzIl0sIm5hbWVzIjpbIkxPQURfUEFSS0lOR1MiLCJpbml0aWFsU3RhdGUiLCJwYXJraW5ncyIsInVzZXJSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixTQUFTQSxhQUFULFFBQThCLGVBQTlCO0FBRUEsTUFBTUMsWUFBWSw2QkFBRztBQUNuQkMsRUFBQUEsUUFBUSxFQUFFO0FBRFMsQ0FBSCxDQUFsQjs7O0FBSUEsTUFBTUMsV0FBVyxHQUFHLENBQUNDLEtBQUssZ0NBQUdILFlBQUgsQ0FBTixFQUF1QkksTUFBdkIsS0FBa0M7QUFBQTtBQUFBOztBQUNwRCxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixhQUFMO0FBQUE7QUFBQTtBQUNFLGFBQU87QUFBRUUsUUFBQUEsUUFBUSxFQUFFLENBQUMsR0FBR0csTUFBTSxDQUFDRSxPQUFYO0FBQVosT0FBUDs7QUFDRjtBQUFBO0FBQUE7QUFDRSxhQUFPSCxLQUFQO0FBSko7QUFNRCxDQVBEOztBQVNBLGVBQWVELFdBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMT0FEX1BBUktJTkdTIH0gZnJvbSAnYWN0aW9ucy90eXBlcyc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcGFya2luZ3M6IFtdXHJcbn07XHJcblxyXG5jb25zdCB1c2VyUmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBMT0FEX1BBUktJTkdTOlxyXG4gICAgICByZXR1cm4geyBwYXJraW5nczogWy4uLmFjdGlvbi5wYXlsb2FkXSB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJSZWR1Y2VyO1xyXG4iXX0=