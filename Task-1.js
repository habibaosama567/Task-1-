/*
Using terminal, create a code with Node.js: -
3- The user can delete all people or delete a specific person 
 */



// commands 

const yargs = require("yargs")
const data = require("./Data")

//------------- add person command ---------------
yargs.command({
    command: "add",
    describe: "to add a person",
    builder: {
        ID: {
            describe: "ID",
            demandOption: true,
            type: "string"
        },
        Fname: {
            describe: "First Name",
            demandOption: true,
            type: "string"
        },
        Lname: {
            describe: "Last Name",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => {
        data.addperson(x.ID, x.Fname, x.Lname, x.City, x.Age)
    }
})
//---------------------------------------------------
//------------ view specific person ( all info ) ----
yargs.command({
    command: "view",
    describe: "view person with id",
    builder: {
        ID: {
            describe: "ID",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => { data.viewperson(x.ID) }
})
//---------------------------------------------------
//-------------- view all ( all info ) ----------------
yargs.command({
    command: "viewall",
    describe: "view all persons",
    handler: () => { data.viewall() }
})
//-----------------------------------------------------
//-------- view specific person ( full name & city )
yargs.command({
    command: "viewinfo",
    describe: "view person info with id",
    builder: {
        ID: {
            describe: "ID",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => { data.viewpersoninfo(x.ID) }
})

//---------------------------------------------------
//-------- view all ( full name & city ) ------------
yargs.command({
    command: "viewallinfo",
    describe: "view all info",
    handler: () => { data.viewallinfo() }
})
//---------------------------------------------------
//------------ delete specific person -------------

yargs.command({
    command: "delete",
    describe: "delete specific person with id",
    builder: {
        ID: {
            describe: "ID",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x) => { data.deleteperson(x.ID) }
})
//---------------------------------------------------
//------------------ delete all---------------------

yargs.command({
    command: "deleteAll",
    describe: "delete all persons",
    handler: () => { data.deleteAll() }
})
yargs.parse()