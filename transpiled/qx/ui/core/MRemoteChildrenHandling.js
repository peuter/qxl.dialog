(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Mixin": {
        "usage": "dynamic",
        "require": true
      }
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo - the new era of web development
  
     http://qooxdoo.org
  
     Copyright:
       2004-2008 1&1 Internet AG, Germany, http://www.1und1.de
  
     License:
       MIT: https://opensource.org/licenses/MIT
       See the LICENSE file in the project's top-level directory for details.
  
     Authors:
       * Sebastian Werner (wpbasti)
       * Fabian Jakobs (fjakobs)
  
  ************************************************************************ */

  /**
   * This mixin redirects all children handling methods to a child widget of the
   * including class. This is e.g. used in {@link qx.ui.window.Window} to add
   * child widgets directly to the window pane.
   *
   * The including class must implement the method <code>getChildrenContainer</code>,
   * which has to return the widget, to which the child widgets should be added.
   */
  qx.Mixin.define("qx.ui.core.MRemoteChildrenHandling", {
    /*
    *****************************************************************************
       MEMBERS
    *****************************************************************************
    */
    members: {
      /**
       * Forward the call with the given function name to the children container
       *
       * @param functionName {String} name of the method to forward
       * @param a1 {var?} first argument of the method to call
       * @param a2 {var?} second argument of the method to call
       * @param a3 {var?} third argument of the method to call
       * @return {var} The return value of the forward method
       */
      __P_223_0: function __P_223_0(functionName, a1, a2, a3) {
        var container = this.getChildrenContainer();

        if (container === this) {
          functionName = "_" + functionName;
        }

        return container[functionName](a1, a2, a3);
      },

      /**
       * Returns the children list
       *
       * @return {qx.ui.core.LayoutItem[]} The children array (Arrays are
       *   reference types, please do not modify them in-place)
       */
      getChildren: function getChildren() {
        return this.__P_223_0("getChildren");
      },

      /**
       * Whether the widget contains children.
       *
       * @return {Boolean} Returns <code>true</code> when the widget has children.
       */
      hasChildren: function hasChildren() {
        return this.__P_223_0("hasChildren");
      },

      /**
       * Adds a new child widget.
       *
       * The supported keys of the layout options map depend on the layout manager
       * used to position the widget. The options are documented in the class
       * documentation of each layout manager {@link qx.ui.layout}.
       *
       * @param child {qx.ui.core.LayoutItem} the item to add.
       * @param options {Map?null} Optional layout data for item.
       * @return {qx.ui.core.Widget} This object (for chaining support)
       */
      add: function add(child, options) {
        return this.__P_223_0("add", child, options);
      },

      /**
       * Remove the given child item.
       *
       * @param child {qx.ui.core.LayoutItem} the item to remove
       * @return {qx.ui.core.Widget} This object (for chaining support)
       */
      remove: function remove(child) {
        return this.__P_223_0("remove", child);
      },

      /**
       * Remove all children.
       * @return {Array} An array containing the removed children.
       */
      removeAll: function removeAll() {
        return this.__P_223_0("removeAll");
      },

      /**
       * Returns the index position of the given item if it is
       * a child item. Otherwise it returns <code>-1</code>.
       *
       * This method works on the widget's children list. Some layout managers
       * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
       * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
       * ignore the children order for the layout process.
       *
       * @param child {qx.ui.core.LayoutItem} the item to query for
       * @return {Integer} The index position or <code>-1</code> when
       *   the given item is no child of this layout.
       */
      indexOf: function indexOf(child) {
        return this.__P_223_0("indexOf", child);
      },

      /**
       * Add a child at the specified index
       *
       * This method works on the widget's children list. Some layout managers
       * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
       * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
       * ignore the children order for the layout process.
       *
       * @param child {qx.ui.core.LayoutItem} item to add
       * @param index {Integer} Index, at which the item will be inserted
       * @param options {Map?null} Optional layout data for item.
       */
      addAt: function addAt(child, index, options) {
        this.__P_223_0("addAt", child, index, options);
      },

      /**
       * Add an item before another already inserted item
       *
       * This method works on the widget's children list. Some layout managers
       * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
       * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
       * ignore the children order for the layout process.
       *
       * @param child {qx.ui.core.LayoutItem} item to add
       * @param before {qx.ui.core.LayoutItem} item before the new item will be inserted.
       * @param options {Map?null} Optional layout data for item.
       */
      addBefore: function addBefore(child, before, options) {
        this.__P_223_0("addBefore", child, before, options);
      },

      /**
       * Add an item after another already inserted item
       *
       * This method works on the widget's children list. Some layout managers
       * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
       * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
       * ignore the children order for the layout process.
       *
       * @param child {qx.ui.core.LayoutItem} item to add
       * @param after {qx.ui.core.LayoutItem} item, after which the new item will be inserted
       * @param options {Map?null} Optional layout data for item.
       */
      addAfter: function addAfter(child, after, options) {
        this.__P_223_0("addAfter", child, after, options);
      },

      /**
       * Remove the item at the specified index.
       *
       * This method works on the widget's children list. Some layout managers
       * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
       * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
       * ignore the children order for the layout process.
       *
       * @param index {Integer} Index of the item to remove.
       * @return {qx.ui.core.LayoutItem} The removed item
       */
      removeAt: function removeAt(index) {
        return this.__P_223_0("removeAt", index);
      }
    }
  });
  qx.ui.core.MRemoteChildrenHandling.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=MRemoteChildrenHandling.js.map?dt=1608242171149