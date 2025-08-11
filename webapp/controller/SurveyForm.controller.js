sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.ui5.trng.sapui5bootcampactivity01.controller.SurveyForm", {
        onInit() {
        },
        onSave(){

        },
        onClear(){
            this.getView().byId("txtName").setValue("");
            this.getView().byId("txtStreet").setValue("");
            this.getView().byId("txtStreetNo").setValue("");
            this.getView().byId("txtZipCode").setValue("");
            this.getView().byId("txtCity").setValue("");
            this.getView().byId("selectCountry").setValue("");
        }
    });
});