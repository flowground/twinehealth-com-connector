/**
 * Auto-generated action file for "Fitbit Plus" API.
 *
 * Generated at: 2019-05-07T14:44:34.388Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / twinehealth-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'updatePatient'
 * Endpoint Path: '/patient/{id}'
 * Method: 'patch'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "id"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "id": "id",
    "addresses": "addresses",
    "archive_history": "archive_history",
    "archived": "archived",
    "birth_date": "birth_date",
    "email_address": "email_address",
    "enrolled_at": "enrolled_at",
    "first_access_at": "first_access_at",
    "first_name": "first_name",
    "gender": "gender",
    "identifiers": "identifiers",
    "invited_at": "invited_at",
    "last_access_at": "last_access_at",
    "last_name": "last_name",
    "note": "note",
    "phone_numbers": "phone_numbers",
    "updated_at": "updated_at",
    "updated_by": "updated_by",
    "value": "value",
    "statement": "statement",
    "attributes": "attributes",
    "self": "self",
    "twine_web_app": "twine_web_app",
    "links": "links",
    "data": "data",
    "related": "related",
    "coaches": "coaches",
    "groups": "groups",
    "relationships": "relationships",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/vnd.api+json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: 'updatePatient',
        pathName: '/patient/{id}',
        method: 'patch',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}