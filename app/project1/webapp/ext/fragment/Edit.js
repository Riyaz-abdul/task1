sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';
    return {
       onPress : function(oEvent) {
        debugger
        this.loadFragment({
            id: "excelUploadDial",
            name:"project1.ext.fragment.editpopup",
            
        }).
        then(function (oDialog) {
            debugger
            var value1 =oEvent.getSource().getParent().getCells()[0].getText();
            var value2 =oEvent.getSource().getParent().getCells()[1].getText();
            var value3 =oEvent.getSource().getParent().getCells()[2].getText();
            sap.ui.getCore().byId("excelUploadDial--_ID1Dialo").mAggregations.content[0].setValue(value1);
             sap.ui.getCore().byId("excelUploadDial--_ID1Dialo").mAggregations.content[1].setValue(value2);
             sap.ui.getCore().byId("excelUploadDial--_ID1Dialo").mAggregations.content[2].setValue(value3);
            oDialog.open();
        });
        },
       
    };
});
