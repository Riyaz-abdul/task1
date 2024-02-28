using abc from '../db/schema';
service MyService {
    
    entity table1 as projection on abc.table1;
    entity files as projection on abc.Files;

}
