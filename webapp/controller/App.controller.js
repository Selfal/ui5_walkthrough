sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("App.controller.App", {
		onShowHello : function () {
			var oBundle = this.getView().getModel("i18n").getResourceBundle();	// Получили локаль
			var sRecipient = this.getView().getModel().getProperty("/recipient/name");	// Получить переменную из модели
			var sMsg = oBundle.getText("helloMsg", [sRecipient]);	// Создать сообщение
			MessageToast.show(sMsg);	// Вывести сообщение
		}
	});

});