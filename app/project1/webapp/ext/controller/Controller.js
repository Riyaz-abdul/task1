//   sap.ui.define([
//     "sap/ui/core/mvc/Controller",
// 	"sap/ui/core/Core",
// 	"sap/ui/layout/HorizontalLayout",
// 	"sap/ui/layout/VerticalLayout",
// 	"sap/m/Dialog",
// 	"sap/m/Button",
// 	"sap/m/Label",
// 	"sap/m/library",
// 	"sap/m/MessageToast",
// 	"sap/m/Text",
// 	"sap/m/TextArea"
// ], function(Controller, Core, HorizontalLayout, VerticalLayout, Dialog, Button, Label, mobileLibrary, MessageToast, Text, TextArea) {
//     'use strict'; 

//     return {
//         // createmethod: function(oEvent) {
//         //     MessageToast.show("Custom handler invoked.");
//         // }
//         createmethod: function(oEvent) {
//             debugger;
//             var oDialog = new Dialog({
//                 title: "Sample Dialog",
//                 content: new Text({ 
//                     text: "This is a sample dialog content." ,
//                 }),
//                 endButton: new Button({
//                     text: "Save",
//                     press: function() {
//                       oDialog.close();
//                     }
//                   }),
//                 beginButton: new Button({
//                   text: "Cancel",
//                   press: function() {
//                     oDialog.close();
//                   }
//                 })
//               });
//               // O 
//               oDialog.open();
//         }

//     };
// });

sap.ui.define([
  "sap/m/MessageToast"
], function (MessageToast) {
  'use strict';

  return {
    createmethod: function (oEvent, oBindingContext, aSelectedContexts) {

      debugger
      var randomNum = '';
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        randomNum += Math.round(Math.random() * 9);
        // excelUploadDialog--_IDDialog
      this.loadFragment({
        id: "excelUploadDialog",
        name: "project1.ext.fragment.create",
        // controller: _createUploadController(this, 'plant')
      }).then(function (oDialog) {
        sap.ui.getCore().byId("excelUploadDialog--_IDDialog").mAggregations.content[0].setValue(randomNum);
        oDialog.open();
          
      });
    },
       
    onClose: function (oEvent) {
        debugger;
        this._oDialog.close();
    },
  //   createmethod: function (oEvent, oBindingContext, aSelectedContexts) {
  //     debugger;
  
  //     // Generate a random ID
  //     var randomId = this.generateRandomId();
  
  //     this.loadFragment({
  //         id: "excelUploadDialog",
  //         name: "project1.ext.fragment.create",
  //         // controller: _createUploadController(this, 'plant')
  //     }).then(function (oDialog) {
       
  //         // Set the generated random ID to your dialog's model or input field
  //         // Assuming you have a model bound to your dialog or input field
  //         oDialog.getModel().setProperty("/id", randomId);
  
  //         oDialog.open();
  //     });
  // },
  
  // generateRandomId: function () {
  //     // Generate a random UUID (Universally Unique Identifier)
  //     var dt = new Date().getTime();
  //     var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
  //         var r = (dt + Math.random() * 16) % 16 | 0;
  //         dt = Math.floor(dt / 16);
  //         return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  //     });
  //     return uuid;
  // },
  
  

    onCancel: function (oEvent) {
      var a = oEvent.oSource.oParent.close()
      // a.close()
      a.destroy()
      // var b = oEvent.oSource.oParent.close()  a.destroy()


    },
    onModify : function(oEvent)  {
      debugger
        var id1 = oEvent.oSource.oParent.mAggregations.content[0].mProperties.value
            var name1= oEvent.oSource.oParent.mAggregations.content[1].mProperties.value
            var age1= oEvent.oSource.oParent.mAggregations.content[2].mProperties.value
            var b = parseInt(age1)
            // let testdata = JSON.stringify({ id:id1, name:name1, age:b });
            var url = '/odata/v4/my/table1/' + id1;
            $.ajax({
                url: url,
                type: 'PUT',
                contentType: 'application/json',
                data: JSON.stringify({ id:id1, name:name1, age:b }), 
                success: function(data) {
                    debugger
                    // Handle success
                    console.log(data);
                    
                },
                
            })
        var Dialog =oEvent.oSource.getParent().close();
        Dialog.destroy();
        this.refresh();

    
  },
   
    onSave: function (oEvent) {
      debugger
      // var id1 = sap.ui.getCore().byId("excelUploadDialog--_IDDialog").mAggregations.content[0].mProperties.value
       var id1 = oEvent.oSource.oParent.mAggregations.content[0].mProperties.value
       var name1 =oEvent.oSource.oParent.mAggregations.content[1].mProperties.value
       var missingfield = "";
       if (name1 === ""){
          missingfield += "name1";
       }
       if(missingfield !== ""){
       sap.m.MessageToast.show("Please fill in the following fields: " + missingfield);
       
       }
       else{
       
      
       
       
       
      
       
       
      // let testdata = JSON.stringify({ id:id1 });
      $.ajax({
        url: '/odata/v4/my/table1',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ id: id1, name: name1 }),
        success: function (data) {

          // Handle success
          console.log(data);
          
            oEvent.oSource.oParent.destroy();
            console.log(data.id);
                  },

      })
    }
    
    

      this.refresh();


    },



  };
});


