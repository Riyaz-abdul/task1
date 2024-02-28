namespace abc;
using {
    cuid,
    managed
} from '@sap/cds/common';
entity table1{
    key id : String;
    name : String;
    age : Integer;
}

entity Files: cuid,managed {
    @Core.MediaType: mediaType   //logo
    content: LargeBinary;
    @Core.IsMediaType: true     //file type  
    mediaType : String;
    fileName: String;
    size: Integer;
    url: String;
}