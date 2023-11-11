(function (global, factory) {
    typeof exports === "object" && typeof module !== "undefined"
      ? (module.exports = factory())
      : typeof define === "function" && define.amd
      ? define(factory)
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        (global.ShuffleText = factory()));
  })(this, function () {
    "use strict";

    class ShuffleText {
      /**
       */
      constructor(element) {
        var _a;
        /**
         * The string for random text.
         * @type {string}
         * @default 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
         */
        this.sourceRandomCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
        /**
         * The string for effect space.<br />
         * @default '-'
         */
        this.emptyCharacter = "-";
        /**
         * The milli seconds of effect time.<br />
         * @default 600
         */
        this.duration = 600;
        this._isRunning = false;
        this._originalStr = "";
        this._originalLength = 0;
        this._timeCurrent = 0;
        this._timeStart = 0;
        this._randomIndex = [];
        this._element = null;
        this._requestAnimationFrameId = 0;
        this._element = element;
        this.setText(
          (_a = element.textContent) !== null && _a !== void 0 ? _a : ""
        );
      }
      /**
       * Set new strings. <br />
       */
      setText(text) {
        this._originalStr = text;
        this._originalLength = text.length;
      }
      /**
       * It is running flag. <br />
       * @returns {boolean}
       */
      get isRunning() {
        return this._isRunning;
      }
      /**
       * Play effect. <br />
       */
      start() {
        this.stop();
        this._randomIndex = [];
        let str = "";
        for (let i = 0; i < this._originalLength; i++) {
          let rate = i / this._originalLength;
          this._randomIndex[i] = Math.random() * (1 - rate) + rate;
          str += this.emptyCharacter;
        }
        this._timeStart = new Date().getTime();
        this._isRunning = true;
        this._requestAnimationFrameId = requestAnimationFrame(() => {
          this._onInterval();
        });
        if (this._element) {
          this._element.textContent = str;
        }
      }
      /**
       * Stop effect.<br />
       */
      stop() {
        this._isRunning = false;
        cancelAnimationFrame(this._requestAnimationFrameId);
      }
      /**
       * Dispose this instance.<br />
       */
      dispose() {
        cancelAnimationFrame(this._requestAnimationFrameId);
        this._isRunning = false;
        this.duration = 0;
        this._originalStr = "";
        this._originalLength = 0;
        this._timeCurrent = 0;
        this._timeStart = 0;
        this._randomIndex = [];
        this._element = null;
        this._requestAnimationFrameId = 0;
      }

      _onInterval() {
        this._timeCurrent = new Date().getTime() - this._timeStart;
        const percent = this._timeCurrent / this.duration;
        let str = "";
        for (let i = 0; i < this._originalLength; i++) {
          if (percent >= this._randomIndex[i]) {
            str += this._originalStr.charAt(i);
          } else if (percent < this._randomIndex[i] / 3) {
            str += this.emptyCharacter;
          } else {
            str += this.sourceRandomCharacter.charAt(
              Math.floor(Math.random() * this.sourceRandomCharacter.length)
            );
          }
        }
        if (percent > 1) {
          str = this._originalStr;
          this._isRunning = false;
        }
        if (this._element) {
          this._element.textContent = str;
        }
        if (this._isRunning) {
          this._requestAnimationFrameId = requestAnimationFrame(() => {
            this._onInterval();
          });
        }
      }
    }

    return ShuffleText;
  });