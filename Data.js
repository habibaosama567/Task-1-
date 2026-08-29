// Functions 

const fs = require("fs")

const loadData = () => {
    try {
        const DataJson = fs.readFileSync("Data.json").toString()
        return JSON.parse(DataJson)
    } catch {
        return []
    }
}

const SaveData = (allData) => {
    const SavedData = JSON.stringify(allData)
    fs.writeFileSync("Data.json", SavedData)
}
//--------------------------------------------------------
// -------------- add person function ------------------
const addperson = (ID, Fname, Lname, City, Age) => {
    const allData = loadData()
    const duplicated = allData.filter((obj) => { return obj.ID == ID })
    if (duplicated.length == 0) {
        allData.push({
            ID: ID,
            Fname: Fname,
            Lname: Lname,
            City: City,
            Age: Age
        })
        SaveData(allData)
    }
    else { console.log("ERROR DUPLICATED DATA") }
}
// ----------------------------------------------
//--------------- read info --------------------

const viewperson = (ID) => {
    const allData = loadData()
    const itemfounded = allData.find((obj) => { return obj.ID == ID; })
    if (itemfounded) { console.log(itemfounded) }
    else { console.log("ID NOT FOUND") }
}

//-----------------------------------------------------
//-------------- view all persons -------------------
const viewall = () => {
    const allData = loadData()
    console.log(allData)
}
//------------------------------------------------------
//-------- view person ( full name & city ) ----------
const viewpersoninfo = (ID) => {
    const allData = loadData()
    const personfound = allData.find((obj) => { return obj.ID == ID; })
    if (personfound) { console.log("Full Name:", personfound.Fname, personfound.Lname, "  City:", personfound.City) }
    else { console.log("PERSON NOT FOUND") }

}
//--------------------------------------------------------
//-------------view all (full name & city )--------------

const viewallinfo = () => {
    const allData = loadData()
    allData.forEach((obj) => { console.log("Full Name:", obj.Fname, obj.Lname, "  City:", obj.City) });
}

//---------------------------------------------------
//------------------ delete person ---------------------
const deleteperson = (ID) => {
    const allData = loadData()
    const itemfounded = allData.find((obj) => { return obj.ID == ID; })
    if (itemfounded) {
        const data = allData.filter((obj) => { return obj.ID !== ID })
        SaveData(data)
    }
    else { console.log("ID NOT FOUND") }

}

//---------------------------------------------------
//------------------ delete all ---------------------
const deleteAll = () => {
    const alldata = []
    SaveData(alldata)
}

module.exports = { addperson, viewperson, viewall, viewallinfo, deleteperson, deleteAll, viewpersoninfo }