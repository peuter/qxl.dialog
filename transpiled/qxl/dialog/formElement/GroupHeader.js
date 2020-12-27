(function () {
  var $$dbClassInfo = {
    "dependsOn": {
      "qx.Class": {
        "usage": "dynamic",
        "require": true
      },
      "qxl.dialog.Dialog": {},
      "qx.ui.form.TextField": {}
    }
  };
  qx.Bootstrap.executePendingDefers($$dbClassInfo);

  /* ************************************************************************
  
     qooxdoo dialog library
     https://github.com/qooxdoo/qxl.dialog
  
     Copyright:
       2020 Christian Boulanger, Derrell Lipman
  
     License:
       LGPL: http://www.gnu.org/licenses/lgpl.html
       EPL: http://www.eclipse.org/org/documents/epl-v10.php
       See the LICENSE file in the project's top-level directory for details.
  
  ************************************************************************ */
  qx.Class.define("qxl.dialog.formElement.GroupHeader", {
    statics: {
      register: function register() {
        qxl.dialog.Dialog.registerFormElementHandlers("groupheader", this._registration);
      },
      _registration: {
        initElement: function (fieldType, fieldData, key) {
          var formElement = new qx.ui.form.TextField(); // dummy

          formElement.setUserData("excluded", true);

          this._form.addGroupHeader(fieldData.value);

          return formElement;
        }.bind(this)
      }
    }
  });
  qxl.dialog.formElement.GroupHeader.$$dbClassInfo = $$dbClassInfo;
})();

//# sourceMappingURL=GroupHeader.js.map?dt=1609099999383