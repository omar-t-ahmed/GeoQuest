/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/map */ \"./src/scripts/map.js\");\n\naddEventListener(\"DOMContentLoaded\", () => {\n  const map = document.getElementById('map');\n  new _scripts_map__WEBPACK_IMPORTED_MODULE_0__[\"default\"](map);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFFL0JDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLE1BQU07RUFDdkMsTUFBTUMsR0FBRyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxLQUFLLENBQUM7RUFDMUMsSUFBSUosb0RBQUcsQ0FBQ0UsR0FBRyxDQUFDO0FBQ2hCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlb3F1ZXN0Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1hcCBmcm9tIFwiLi9zY3JpcHRzL21hcFwiXG5cbmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJylcbiAgICBuZXcgTWFwKG1hcClcbn0pXG4iXSwibmFtZXMiOlsiTWFwIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\n  constructor(ele) {\n    this.width = 900;\n    this.height = 600;\n    this.svg = d3.select(ele).append('svg').attr('width', this.width).attr('height', this.height);\n    this.projection = d3.geoMercator().scale(150);\n    this.path = d3.geoPath(this.projection);\n    this.g = this.svg.append('g');\n    this.loadData();\n  }\n  loadData() {\n    d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json', async (error, data) => {\n      if (error) {\n        console.error(error);\n        return;\n      }\n      await this.renderMap(data);\n      document.querySelectorAll('.country').forEach(element => {\n        const country = element.getAttribute(\"name\");\n        element.addEventListener(\"mouseover\", () => {\n          let countryName = document.getElementById('country-name');\n          countryName.innerHTML = country;\n        });\n        element.addEventListener(\"mouseout\", () => {\n          let countryName = document.getElementById('country-name');\n          countryName.innerHTML = '     ';\n        });\n      });\n    });\n  }\n  renderMap(data) {\n    const countries = topojson.feature(data, data.objects.countries);\n    this.g.selectAll('path').data(countries.features).enter().append('path').attr('class', 'country').attr('d', this.path).attr('name', d => d.properties.name);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tYXAuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLEdBQUcsQ0FBQztFQUNOQyxXQUFXQSxDQUFDQyxHQUFHLEVBQUU7SUFDYixJQUFJLENBQUNDLEtBQUssR0FBRyxHQUFHO0lBQ2hCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7SUFDakIsSUFBSSxDQUFDQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDTCxHQUFHLENBQUMsQ0FBQ00sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQ04sS0FBSyxDQUFDLENBQUNNLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDTCxNQUFNLENBQUM7SUFDN0YsSUFBSSxDQUFDTSxVQUFVLEdBQUdKLEVBQUUsQ0FBQ0ssV0FBVyxDQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztJQUM3QyxJQUFJLENBQUNDLElBQUksR0FBR1AsRUFBRSxDQUFDUSxPQUFPLENBQUMsSUFBSSxDQUFDSixVQUFVLENBQUM7SUFDdkMsSUFBSSxDQUFDSyxDQUFDLEdBQUcsSUFBSSxDQUFDVixHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFFN0IsSUFBSSxDQUFDUSxRQUFRLENBQUMsQ0FBQztFQUVuQjtFQUVBQSxRQUFRQSxDQUFBLEVBQUc7SUFDUFYsRUFBRSxDQUFDVyxJQUFJLENBQUMsK0RBQStELEVBQUUsT0FBT0MsS0FBSyxFQUFFQyxJQUFJLEtBQUs7TUFDNUYsSUFBSUQsS0FBSyxFQUFFO1FBQ1BFLE9BQU8sQ0FBQ0YsS0FBSyxDQUFDQSxLQUFLLENBQUM7UUFDcEI7TUFDSjtNQUVBLE1BQU0sSUFBSSxDQUFDRyxTQUFTLENBQUNGLElBQUksQ0FBQztNQUc5QkcsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQ0MsT0FBTyxDQUFFQyxPQUFPLElBQUs7UUFDdkQsTUFBTUMsT0FBTyxHQUFHRCxPQUFPLENBQUNFLFlBQVksQ0FBQyxNQUFNLENBQUM7UUFDNUNGLE9BQU8sQ0FBQ0csZ0JBQWdCLENBQUMsV0FBVyxFQUFFLE1BQU07VUFDeEMsSUFBSUMsV0FBVyxHQUFHUCxRQUFRLENBQUNRLGNBQWMsQ0FBQyxjQUFjLENBQUM7VUFDekRELFdBQVcsQ0FBQ0UsU0FBUyxHQUFHTCxPQUFPO1FBRW5DLENBQUMsQ0FBQztRQUNGRCxPQUFPLENBQUNHLGdCQUFnQixDQUFDLFVBQVUsRUFBRSxNQUFNO1VBQ3ZDLElBQUlDLFdBQVcsR0FBR1AsUUFBUSxDQUFDUSxjQUFjLENBQUMsY0FBYyxDQUFDO1VBQ3pERCxXQUFXLENBQUNFLFNBQVMsR0FBRyxPQUFPO1FBQ25DLENBQUMsQ0FBQztNQUNOLENBQUMsQ0FBQztJQUNFLENBQUMsQ0FBQztFQUNOO0VBRUpWLFNBQVNBLENBQUNGLElBQUksRUFBRTtJQUNaLE1BQU1hLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxPQUFPLENBQUNmLElBQUksRUFBRUEsSUFBSSxDQUFDZ0IsT0FBTyxDQUFDSCxTQUFTLENBQUM7SUFDaEUsSUFBSSxDQUFDakIsQ0FBQyxDQUFDcUIsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUNuQmpCLElBQUksQ0FBQ2EsU0FBUyxDQUFDSyxRQUFRLENBQUMsQ0FDeEJDLEtBQUssQ0FBQyxDQUFDLENBQ1A5QixNQUFNLENBQUMsTUFBTSxDQUFDLENBQ2RDLElBQUksQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQ3hCQSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQ0ksSUFBSSxDQUFDLENBQ3BCSixJQUFJLENBQUMsTUFBTSxFQUFFOEIsQ0FBQyxJQUFJQSxDQUFDLENBQUNDLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDO0VBQzdDO0FBQ0o7QUFFQSwrREFBZXpDLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW9xdWVzdC8uL3NyYy9zY3JpcHRzL21hcC5qcz9mNTZkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1hcCB7XG4gICAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSA5MDA7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gNjAwO1xuICAgICAgICB0aGlzLnN2ZyA9IGQzLnNlbGVjdChlbGUpLmFwcGVuZCgnc3ZnJykuYXR0cignd2lkdGgnLCB0aGlzLndpZHRoKS5hdHRyKCdoZWlnaHQnLCB0aGlzLmhlaWdodCk7XG4gICAgICAgIHRoaXMucHJvamVjdGlvbiA9IGQzLmdlb01lcmNhdG9yKCkuc2NhbGUoMTUwKTtcbiAgICAgICAgdGhpcy5wYXRoID0gZDMuZ2VvUGF0aCh0aGlzLnByb2plY3Rpb24pO1xuICAgICAgICB0aGlzLmcgPSB0aGlzLnN2Zy5hcHBlbmQoJ2cnKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcblxuICAgIH1cblxuICAgIGxvYWREYXRhKCkge1xuICAgICAgICBkMy5qc29uKCdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3dvcmxkLWF0bGFzQDIvY291bnRyaWVzLTUwbS5qc29uJywgYXN5bmMgKGVycm9yLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZW5kZXJNYXAoZGF0YSk7XG4gICAgICAgICAgICBcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY291bnRyeScpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnkgPSBlbGVtZW50LmdldEF0dHJpYnV0ZShcIm5hbWVcIik7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBjb3VudHJ5TmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3VudHJ5LW5hbWUnKVxuICAgICAgICAgICAgICAgIGNvdW50cnlOYW1lLmlubmVySFRNTCA9IGNvdW50cnlcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW91dFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGNvdW50cnlOYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvdW50cnktbmFtZScpXG4gICAgICAgICAgICAgICAgY291bnRyeU5hbWUuaW5uZXJIVE1MID0gJyAgICAgJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICBcbiAgICByZW5kZXJNYXAoZGF0YSkge1xuICAgICAgICBjb25zdCBjb3VudHJpZXMgPSB0b3BvanNvbi5mZWF0dXJlKGRhdGEsIGRhdGEub2JqZWN0cy5jb3VudHJpZXMpO1xuICAgICAgICB0aGlzLmcuc2VsZWN0QWxsKCdwYXRoJylcbiAgICAgICAgICAgIC5kYXRhKGNvdW50cmllcy5mZWF0dXJlcylcbiAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdjb3VudHJ5JylcbiAgICAgICAgICAgIC5hdHRyKCdkJywgdGhpcy5wYXRoKVxuICAgICAgICAgICAgLmF0dHIoJ25hbWUnLCBkID0+IGQucHJvcGVydGllcy5uYW1lKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuXG4iXSwibmFtZXMiOlsiTWFwIiwiY29uc3RydWN0b3IiLCJlbGUiLCJ3aWR0aCIsImhlaWdodCIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInByb2plY3Rpb24iLCJnZW9NZXJjYXRvciIsInNjYWxlIiwicGF0aCIsImdlb1BhdGgiLCJnIiwibG9hZERhdGEiLCJqc29uIiwiZXJyb3IiLCJkYXRhIiwiY29uc29sZSIsInJlbmRlck1hcCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbGVtZW50IiwiY291bnRyeSIsImdldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb3VudHJ5TmFtZSIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiY291bnRyaWVzIiwidG9wb2pzb24iLCJmZWF0dXJlIiwib2JqZWN0cyIsInNlbGVjdEFsbCIsImZlYXR1cmVzIiwiZW50ZXIiLCJkIiwicHJvcGVydGllcyIsIm5hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/map.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZW9xdWVzdC8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;