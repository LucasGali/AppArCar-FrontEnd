function cov_1ecieamvaw() {
  var path = "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\store.js";
  var hash = "9b13ac442d0b4abab533949f4eaa7c6263549442";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\User\\Documents\\UNSTA\\AppArCar\\apparcar-frontend\\src\\store.js",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 21
        },
        end: {
          line: 4,
          column: 23
        }
      },
      "1": {
        start: {
          line: 6,
          column: 25
        },
        end: {
          line: 6,
          column: 101
        }
      },
      "2": {
        start: {
          line: 8,
          column: 14
        },
        end: {
          line: 12,
          column: 1
        }
      }
    },
    fnMap: {},
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 6,
            column: 101
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 6,
            column: 25
          },
          end: {
            line: 6,
            column: 60
          }
        }, {
          start: {
            line: 6,
            column: 64
          },
          end: {
            line: 6,
            column: 101
          }
        }],
        line: 6
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    f: {},
    b: {
      "0": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "9b13ac442d0b4abab533949f4eaa7c6263549442"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1ecieamvaw = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1ecieamvaw();
import rootReducer from './reducers';
import { createStore } from 'redux';
const initialState = (cov_1ecieamvaw().s[0]++, {});
const composeEnhancers = (cov_1ecieamvaw().s[1]++, (cov_1ecieamvaw().b[0][0]++, window.__REDUX_DEVTOOLS_EXTENSION__) && (cov_1ecieamvaw().b[0][1]++, window.__REDUX_DEVTOOLS_EXTENSION__()));
const store = (cov_1ecieamvaw().s[2]++, createStore(rootReducer, initialState, composeEnhancers));
export default store;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY3JlYXRlU3RvcmUiLCJpbml0aWFsU3RhdGUiLCJjb21wb3NlRW5oYW5jZXJzIiwid2luZG93IiwiX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyIsInN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7QUFmWixPQUFPQSxXQUFQLE1BQXdCLFlBQXhCO0FBQ0EsU0FBU0MsV0FBVCxRQUE0QixPQUE1QjtBQUVBLE1BQU1DLFlBQVksNkJBQUcsRUFBSCxDQUFsQjtBQUVBLE1BQU1DLGdCQUFnQiw2QkFBRyw2QkFBQUMsTUFBTSxDQUFDQyw0QkFBUCxrQ0FBdUNELE1BQU0sQ0FBQ0MsNEJBQVAsRUFBdkMsQ0FBSCxDQUF0QjtBQUVBLE1BQU1DLEtBQUssNkJBQUdMLFdBQVcsQ0FDdkJELFdBRHVCLEVBRXZCRSxZQUZ1QixFQUd2QkMsZ0JBSHVCLENBQWQsQ0FBWDtBQU1BLGVBQWVHLEtBQWYiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAncmVkdXgnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge31cclxuXHJcbmNvbnN0IGNvbXBvc2VFbmhhbmNlcnMgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXyAmJiB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fXygpXHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKFxyXG4gIHJvb3RSZWR1Y2VyLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICBjb21wb3NlRW5oYW5jZXJzXHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBzdG9yZVxyXG4iXX0=