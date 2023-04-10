import React from 'react'

import * as SQLite from "expo-sqlite"

const db = SQLite.openDatabase("CRDT.db");

const setupRoastProfileTable = async () => {
    db.transaction(tx => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS roastProfile (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, temperature TEXT, yellowPhase TEXT, maillardPhase TEXT, firstCrack TEXT, endTime TEXT, greenWeight TEXT, endWeight TEXT, weightLoss TEXT, createdDate  TEXT DEFAULT (strftime('%m/%d/%Y %H:%M:%S', 'now', 'localtime')))`);
    },
        (_, error) => { console.log("db error creating tables"); console.log(error); },
        (_, success) => { console.log("success") }
    );
}

const dropDatabaseTablesAsync = async () => {
    return new Promise((resolve, reject) => {
        db.transaction(tx => {
            tx.executeSql(
                'DROP TABLE roastProfile',
                [],
                (_, result) => { resolve(result) },
                (_, error) => {
                    console.log("error dropping users table"); reject(error)
                }
            )
        })
    })
}


const getRoastProfiles = (setData) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM roastProfile',
                [],
                (_, { rows: { _array } }) => {
                    setData(_array)
                }
            );
        },
        (t, error) => { console.log("db error load roastProfile"); console.log(error) },
        (_t, _success) => { console.log("loaded roastProfile") }
    );
}

const insertRoastProfile = (data, successFunc) => {
    db.transaction(tx => {
        tx.executeSql('INSERT INTO roastProfile (name, temperature, yellowPhase, maillardPhase, firstCrack, endTime, greenWeight, endWeight, weightLoss) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', [data.name, data.temperature, data.yellowPhase, data.maillardPhase, data.firstCrack, data.endTime, data.greenWeight, data.endWeight, data.weightLoss]);
    },
        (t, error) => { console.log("db error insertRoastProfile"); console.log(error); },
        (t, success) => { successFunc() })
}

const updateRoastProfile = (id, data) => {
    db.transaction(tx => {
        tx.executeSql('UPDATE roastProfile SET name = ?, temperature = ?, yellowPhase = ?, maillardPhase = ?, firstCrack = ?, endTime = ?, greenWeight = ?, endWeight = ?, weightLoss = ? WHERE id = ?', [data.name, data.temperature, data.yellowPhase, data.maillardPhase, data.firstCrack, data.endTime, data.greenWeight, data.endWeight, data.weightLoss, id]);
    },
        (t, error) => { console.log("db error updateRoastProfile"); console.log(error); },
        (t, success) => { console.log("update success") })
}

const deleteRoastProfile = (id) => {
    db.transaction(
        tx => {
            tx.executeSql('DELETE FROM roastProfile WHERE id = ?', [id],
                (_, { rowAffected }) => {
                    console.log("Delete successfully", rowAffected);
                },
                (_, error) => {
                    console.log("delete failed", error);
                }
            );
        }
    )
}

const setupEspressoTable = async () => {
    db.transaction(tx => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS espresso (id INTEGER PRIMARY KEY AUTOINCREMENT, bean TEXT, grindSetting1 TEXT, dose1 TEXT, yield1 TEXT, brewTime1 TEXT, temp1 TEXT, notes1 TEXT,grindSetting2 TEXT, dose2 TEXT, yield2 TEXT, brewTime2 TEXT, temp2 TEXT, notes2 TEXT, grindSetting3 TEXT, dose3 TEXT, yield3 TEXT, brewTime3 TEXT, temp3 TEXT, notes3 TEXT,grindSetting4 TEXT, dose4 TEXT, yield4 TEXT, brewTime4 TEXT, temp4 TEXT, notes4 TEXT,grindSetting5 TEXT, dose5 TEXT, yield5 TEXT, brewTime5 TEXT, temp5 TEXT, notes5 TEXT,grindSetting6 TEXT, dose6 TEXT, yield6 TEXT, brewTime6 TEXT, temp6 TEXT, notes6 TEXT, createdDate  TEXT DEFAULT (strftime('%m/%d/%Y %H:%M:%S', 'now', 'localtime')))`);
    },
        (_, error) => { console.log("db error creating tables"); console.log(error); },
        (_, success) => { console.log("success!") }
    )
}



const getEspresso = (setData) => {
    db.transaction(
        tx => {
            tx.executeSql(
                'SELECT * FROM espresso',
                [],
                (_, { rows: { _array } }) => {
                    setData(_array)
                }
            );
        },
        (t, error) => { console.log("db error load espresso"); console.log(error) },
        (_t, _success) => { console.log("loaded espresso") }
    );
}

const insertEspresso = (data, successFunc) => {
    db.transaction(tx => {
        tx.executeSql('INSERT INTO espresso (bean, grindSetting1, dose1, yield1, brewTime1, temp1, notes1, grindSetting2, dose2, yield2, brewTime2, temp2, notes2, grindSetting3, dose3, yield3, brewTime3, temp3, notes3, grindSetting4, dose4, yield4, brewTime4, temp4, notes4, grindSetting5, dose5, yield5, brewTime5, temp5, notes5, grindSetting6, dose6, yield6, brewTime6, temp6, notes6) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [data.bean, data.grindSetting1, data.dose1, data.yield1, data.brewTime1, data.temp1, data.notes1, data.grindSetting2, data.dose2, data.yield2, data.brewTime2, data.temp2, data.notes2, data.grindSetting3, data.dose3, data.yield3, data.brewTime3, data.temp3, data.notes3, data.grindSetting4, data.dose4, data.yield4, data.brewTime4, data.temp4, data.notes4, data.grindSetting5, data.dose5, data.yield5, data.brewTime5, data.temp5, data.notes5, data.grindSetting6, data.dose6, data.yield6, data.brewTime6, data.temp6, data.notes6]);
    },
        (t, error) => { console.log("db error insertEspresso"); console.log(error); },
        (t, success) => { successFunc() })
}

const updateEspresso = (id, data) => {
    db.transaction(tx => {
        tx.executeSql('UPDATE espresso SET bean = ?, grindSetting1 = ?, dose1 = ?, yield1 = ?, brewTime1 = ?, temp1 = ?, notes1 = ?, grindSetting2 = ?, dose2 = ?, yield2 = ?, brewTime2 = ?, temp2 = ?, notes2 = ?, grindSetting3 = ?, dose3 = ?, yield3 = ?, brewTime3 = ?, temp3 = ?, notes3 = ?, grindSetting4 = ?, dose4 = ?, yield4 = ?, brewTime4 = ?, temp4 = ?, notes4 = ?, grindSetting5 = ?, dose5 = ?, yield5 = ?, brewTime5 = ?, temp5 = ?, notes5 = ?, grindSetting6 = ?, dose6 = ?, yield6 = ?, brewTime6 = ?, temp6 = ?, notes6 = ?, WHERE id = ?', [data.bean, data.grindSetting1, data.dose1, data.yield1, data.brewTime1, data.temp1, data.notes1, data.grindSetting2, data.dose2, data.yield2, data.brewTime2, data.temp2, data.notes2, data.grindSetting3, data.dose3, data.yield3, data.brewTime3, data.temp3, data.notes3, data.grindSetting4, data.dose4, data.yield4, data.brewTime4, data.temp4, data.notes4, data.grindSetting5, data.dose5, data.yield5, data.brewTime5, data.temp5, data.notes5, data.grindSetting6, data.dose6, data.yield6, data.brewTime6, data.temp6, data.notes6, id]);
    },
        (t, error) => { console.log("db error updateEspresso"); console.log(error); },
        (t, success) => { console.log("update success") })
}

const deleteEspresso = (id) => {
    db.transaction(
        tx => {
            tx.executeSql('DELETE FROM espresso WHERE id = ?', [id],
                (_, { rowAffected }) => {
                    console.log("Delete successfully", rowAffected);
                },
                (_, error) => {
                    console.log("delete failed", error);
                }
            );
        }
    )
}



export const database = {
    setupRoastProfileTable,
    getRoastProfiles,
    setupEspressoTable,
    getEspresso,
    insertEspresso,
    updateEspresso,
    deleteEspresso,
    insertRoastProfile,
    deleteRoastProfile,
    dropDatabaseTablesAsync,
    updateRoastProfile
}