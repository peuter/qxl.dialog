(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Bootstrap": {
        "usage": "dynamic",
        "construct": true,
        "require": true
      },
      "qx.core.Assert": {
        "construct": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2007-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Michael Haitz (mhaitz)
  
  ************************************************************************ */

  /**
   * This exception is thrown by the {@link qx.event.GlobalError} handler if a
   * observed method throws an exception.
   */
  qx.Bootstrap.define("qx.core.GlobalError", {
    extend: Error,

    /**
     * @param exc {Error} source exception
     * @param args {Array} arguments
     */
    construct: function construct(exc, args) {
      // Do not use the Environment class to keep the minimal
      // package size small [BUG #5068]
      if (qx.Bootstrap.DEBUG) {
        qx.core.Assert.assertNotUndefined(exc);
      }

      this.__P_77_0 = "GlobalError: " + (exc && exc.message ? exc.message : exc);
      var inst = Error.call(this, this.__P_77_0); // map stack trace properties since they're not added by Error's constructor

      if (inst.stack) {
        this.stack = inst.stack;
      }

      if (inst.stacktrace) {
        this.stacktrace = inst.stacktrace;
      }

      this.__P_77_1 = args;
      this.__P_77_2 = exc;
    },
    members: {
      __P_77_2: null,
      __P_77_1: null,
      __P_77_0: null,

      /**
       * Returns the error message.
       *
       * @return {String} error message
       */
      toString: function toString() {
        return this.__P_77_0;
      },

      /**
       * Returns the arguments which are
       *
       * @return {Object} arguments
       */
      getArguments: function getArguments() {
        return this.__P_77_1;
      },

      /**
       * Get the source exception
       *
       * @return {Error} source exception
       */
      getSourceException: function getSourceException() {
        return this.__P_77_2;
      }
    }
  });
  qx.core.GlobalError.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=GlobalError.js.map?dt=1608242160285