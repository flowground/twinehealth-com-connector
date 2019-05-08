/**
 * Auto-generated action file for "Fitbit Plus" API.
 *
 * Generated at: 2019-05-07T14:44:34.380Z
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
 * Operation: 'fetchCalendarEvents'
 * Endpoint Path: '/calendar_event'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "filter[patient]",
    "filter[groups]",
    "filter[organization]",
    "filter[attendees]",
    "filter[type]",
    "filter[completed]",
    "filter[start_at]",
    "filter[end_at]",
    "filter[completed_at]",
    "filter[created_at]",
    "filter[updated_at]",
    "page[number]",
    "page[size]",
    "page[limit]",
    "page[cursor]",
    "include"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "filter_patient_": "filter[patient]",
    "filter_groups_": "filter[groups]",
    "filter_organization_": "filter[organization]",
    "filter_attendees_": "filter[attendees]",
    "filter_type_": "filter[type]",
    "filter_completed_": "filter[completed]",
    "filter_start_at_": "filter[start_at]",
    "filter_end_at_": "filter[end_at]",
    "filter_completed_at_": "filter[completed_at]",
    "filter_created_at_": "filter[created_at]",
    "filter_updated_at_": "filter[updated_at]",
    "page_number_": "page[number]",
    "page_size_": "page[size]",
    "page_limit_": "page[limit]",
    "page_cursor_": "page[cursor]",
    "include": "include"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

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
        operationId: 'fetchCalendarEvents',
        pathName: '/calendar_event',
        method: 'get',
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