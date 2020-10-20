(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.event.type.Native": {
        "require": true,
        "defer": "runtime"
      },
      "qx.event.Pool": {
        "require": true,
        "defer": "runtime"
      },
      "qx.core.Environment": {
        "defer": "load",
        "require": true
      },
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qx.core.Object": {
        "construct": true,
        "require": true
      },
      "qx.event.IEventHandler": {
        "require": true
      },
      "qx.core.IDisposable": {
        "require": true
      },
      "qx.event.Registration": {
        "defer": "runtime",
        "require": true
      },
      "qx.lang.Function": {},
      "qx.bom.Event": {},
      "qx.event.GlobalError": {}
    },
    "environment": {
      "provided": [],
      "required": {
        "qx.globalErrorHandling": {
          "className": "qx.event.GlobalError"
        }
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
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
       * Christian Hagendorn (chris_schmidt)
  
  ************************************************************************ */

  /**
   * This handler provides event for the window object.
   *
   * NOTE: Instances of this class must be disposed of after use
   *
   * @require(qx.event.type.Native)
   * @require(qx.event.Pool)
   */
  qx.Class.define("qx.event.handler.Window", {
    extend: qx.core.Object,
    implement: [qx.event.IEventHandler, qx.core.IDisposable],

    /*
    *****************************************************************************
       CONSTRUCTOR
    *****************************************************************************
    */

    /**
     * Create a new instance
     *
     * @param manager {qx.event.Manager} Event manager for the window to use
     */
    construct: function construct(manager) {
      qx.core.Object.constructor.call(this); // Define shorthands

      this._manager = manager;
      this._window = manager.getWindow(); // Initialize observers

      this._initWindowObserver();
    },

    /*
    *****************************************************************************
       STATICS
    *****************************************************************************
    */
    statics: {
      /** @type {Integer} Priority of this handler */
      PRIORITY: qx.event.Registration.PRIORITY_NORMAL,

      /** @type {Map} Supported event types */
      SUPPORTED_TYPES: {
        error: 1,
        load: 1,
        beforeunload: 1,
        unload: 1,
        resize: 1,
        scroll: 1,
        beforeshutdown: 1
      },

      /** @type {Integer} Which target check to use */
      TARGET_CHECK: qx.event.IEventHandler.TARGET_WINDOW,

      /** @type {Integer} Whether the method "canHandleEvent" must be called */
      IGNORE_CAN_HANDLE: true
    },

    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /*
      ---------------------------------------------------------------------------
        EVENT HANDLER INTERFACE
      ---------------------------------------------------------------------------
      */
      // interface implementation
      canHandleEvent: function canHandleEvent(target, type) {},
      // interface implementation
      registerEvent: function registerEvent(target, type, capture) {// Nothing needs to be done here
      },
      // interface implementation
      unregisterEvent: function unregisterEvent(target, type, capture) {// Nothing needs to be done here
      },

      /*
      ---------------------------------------------------------------------------
        OBSERVER INIT/STOP
      ---------------------------------------------------------------------------
      */

      /**
       * Initializes the native window event listeners.
       *
       */
      _initWindowObserver: function _initWindowObserver() {
        this._onNativeWrapper = qx.lang.Function.listener(this._onNative, this);
        var types = qx.event.handler.Window.SUPPORTED_TYPES;

        for (var key in types) {
          qx.bom.Event.addNativeListener(this._window, key, this._onNativeWrapper);
        }
      },

      /**
       * Disconnect the native window event listeners.
       *
       */
      _stopWindowObserver: function _stopWindowObserver() {
        var types = qx.event.handler.Window.SUPPORTED_TYPES;

        for (var key in types) {
          qx.bom.Event.removeNativeListener(this._window, key, this._onNativeWrapper);
        }
      },

      /*
      ---------------------------------------------------------------------------
        NATIVE EVENT SUPPORT
      ---------------------------------------------------------------------------
      */

      /**
       * When qx.globalErrorHandling is enabled the callback will observed
       */
      _onNative: function _onNative() {
        var callback = qx.core.Environment.select("qx.globalErrorHandling", {
          "true": qx.event.GlobalError.observeMethod(this.__P_144_0),
          "false": this.__P_144_0
        });
        callback.apply(this, arguments);
      },

      /**
       * Native listener for all supported events.
       *
       * @param e {Event} Native event
       * @return {String|undefined}
       */
      __P_144_0: function __P_144_0(e) {
        if (this.isDisposed()) {
          return;
        }

        var win = this._window;
        var doc;

        try {
          doc = win.document;
        } catch (ex) {
          // IE7 sometimes dispatches "unload" events on protected windows
          // Ignore these events
          return;
        }

        var html = doc.documentElement; // At least Safari 3.1 and Opera 9.2.x have a bubbling scroll event
        // which needs to be ignored here.
        //
        // In recent WebKit nightlies scroll events do no longer bubble
        //
        // Internet Explorer does not have a target in resize events.

        var target = qx.bom.Event.getTarget(e);

        if (target == null || target === win || target === doc || target === html) {
          var event = qx.event.Registration.createEvent(e.type, qx.event.type.Native, [e, win]);
          qx.event.Registration.dispatchEvent(win, event);
          var result = event.getReturnValue();

          if (result != null) {
            e.returnValue = result;
            return result;
          }
        }
      }
    },

    /*
    *****************************************************************************
       DESTRUCTOR
    *****************************************************************************
    */
    destruct: function destruct() {
      this._stopWindowObserver();

      this._manager = this._window = null;
    },

    /*
    *****************************************************************************
       DEFER
    *****************************************************************************
    */
    defer: function defer(statics) {
      qx.event.Registration.addHandler(statics);
    }
  });
  qx.event.handler.Window.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=Window.js.map?dt=1603197605483