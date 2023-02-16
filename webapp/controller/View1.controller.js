sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller,Branch) {
	"use strict";

	return Controller.extend("SAP-UI5-Fiori-3_Named_JSONModel.controller.View1", {
		
		onInit: function(){
			this.getView().setModel();
			this.getView().setModel(Branch);
			
		}

	});
});