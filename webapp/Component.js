sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("App.Component", {

		metadata: {
		  manifest: "json"
		},

    init: function () {

      UIComponent.prototype.init.apply(this, arguments);
      // Типа Json
      var oData = {
        recipient: {
          name: "World"
        }
      };
      // объявляем модель JSONModel
      var oModel = new JSONModel(oData);

      //Устанавливаем модель для представления
      // Hello - имя модели
      this.setModel(oModel);

      var i18nModel = new ResourceModel({
        bundleName: "App.i18n.i18n"
      });
      this.setModel(i18nModel, "i18n");
    },
  });

});