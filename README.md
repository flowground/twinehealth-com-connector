# ![LOGO](logo.png) Fitbit Plus **flow**ground Connector

## Description

A generated **flow**ground connector for the Fitbit Plus API (version v7.78.1).

Generated from: https://api.apis.guru/v2/specs/twinehealth.com/v7.78.1/swagger.json<br/>
Generated at: 2019-05-07T17:44:34+03:00

## API Description

# Overview
The Fitbit Plus API is a RESTful API. The requests and responses are formated according to the
[JSON API](http://jsonapi.org/format/1.0/) specification.

In addition to this documentation, we also provide an
[OpenAPI](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) "yaml" file describing the API:
[Fitbit Plus API Specification](swagger.yaml).

# Authentication
Authentication for the Fitbit Plus API is based on the
[OAuth 2.0 Authorization Framework](https://tools.ietf.org/html/rfc6749). Fitbit Plus currently supports grant
types of **client_credentials** and **refresh_token**.

See [POST /oauth/token](#operation/createToken) for details on the request and response formats.
<!-- ReDoc-Inject: <security-definitions> -->

## Building Integrations
We will provide customers with unique client credentials for each application/integration they build, allowing us
to enforce appropriate access controls and monitor API usage.
The client credentials will be scoped to the organization, and allow full access to all patients and related data
within that organization.

These credentials are appropriate for creating an integration that does one of the following:
 - background reporting/analysis
 - synchronizing data with another system (such as an EMR)

The API credentials and oauth flows we currently support are **not** well suited for creating a user-facing
application that allows a user (patient, coach, or admin) to login and have access to data which is appropriate to
that specific user. It is possible to build such an application, but it is not possible to use Fitbit Plus as a
federated identity provider. You would need to have a separate means of verifying a user's identity. We do not
currently support the required password-based oauth flow to make this possible.

# Paging
The Fitbit Plus API supports two different pagination strategies for GET collection endpoints.

#### Skip-based paging

Skip-based paging uses the query parameters `page[size]` and `page[number]` to specify the max number of resources returned and the page number. We default to skip-based paging if there are no page parameters. The response will include a `links` object containing links to the first, last, prev, and next pages of data.

If the contents of the collection change while you are iterating through the collection, you will see duplicate or missing documents. For example, if you are iterating through the `calender_event` resource via `GET /pub/calendar_event?sort=start_at&page[size]=50&page[number]=1`, and a new `calendar_event` is created that has a `start_at` value before the first `calendar_event`, when you fetch the next page at `GET /pub/calendar_event?sort=start_at&page[size]=50&page[number]=2`, the first entry in the second response will be a duplicate of the last entry in the first response.

#### Cursor-based paging
Cursor-based paging uses the query parameters `page[limit]` and `page[after]` to specify the max number of entries returned and identify where to begin the next page. Add `page[limit]` to the parameters to use cursor-based paging. The response will include a `links` object containing a link to the next page of data, if the next page exists.

Cursor-based paging is not subject to duplication if new resources are added to the collection. For example, if you are iterating through the `calender_event` resource via `GET /pub/calendar_event?sort=start_at&page[limit]=50`, and a new `calendar_event` is created that has a `start_at` value before the first `calendar_event`, you will not see a duplicate entry when you fetch the next page at `GET /pub/calendar_event?sort=start_at&page[limit]=50&page[after]=<cursor>`.

We encourage the use of cursor-based paging for performance reasons.

In either form of paging, you can determine whether any resources were missed by comparing the number of fetched resources against `meta.count`. Set `page[size]` or `page[limit]` to 0 to get only the count.

It is not valid to mix the two strategies.


## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Create action

> Create a plan action

*Tags:* `action`

### Get an action

> Get a health action from a patient's plan.

*Tags:* `action`

#### Input Parameters
* `id` - _required_ - Action identifier

### Update an action

> Update a health action from a patient's plan.

*Tags:* `action`

#### Input Parameters
* `id` - _required_ - Action identifier

### Create bundle

> Create a bundle in a patient's plan

*Tags:* `bundle`

### Get a bundle

> Get a bundle from a patient's plan.

*Tags:* `bundle`

#### Input Parameters
* `id` - _required_ - Bundle identifier

### Update a bundle

> Updte a bundle from a patient's plan.

*Tags:* `bundle`

#### Input Parameters
* `id` - _required_ - Bundle identifier

### List calendar events

> Get a list of calendar events

*Tags:* `calendar event`

#### Input Parameters
* `filter[patient]` - _optional_ - Patient id to fetch calendar event. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.

* `filter[groups]` - _optional_ - Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.

* `filter[organization]` - _optional_ - Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.

* `filter[attendees]` - _optional_ - Comma-separated list of coach or patient ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, `filter[organization]`, or `filter[attendees]`.

* `filter[type]` - _optional_ - Calendar event type
    Possible values: plan-check-in, reminder, telephone-call, office-visit, video-call.
* `filter[completed]` - _optional_ - If not specified, return all calendar events. If set to `true` return only events marked as completed, if set to `false`, return only events not marked as completed yet.
* `filter[start_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events starting in November 2017 (America/New_York): `filter[start_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `filter[end_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events ending in November 2017 (America/New_York): `filter[end_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `filter[completed_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events completed in November 2017 (America/New_York): `filter[completed_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `filter[created_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `filter[updated_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for events updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `page[number]` - _optional_ - Page number
* `page[size]` - _optional_ - Page size
* `page[limit]` - _optional_ - Page limit
* `page[cursor]` - _optional_ - Page cursor
* `include` - _optional_ - List of related resources to include in the response
    Possible values: owner.

### Create calendar event

> Create a calendar event for a patient. Attribute `all_day` must be set to `true` and `end_at` cannot be set for `plan-check-in` event type.

*Tags:* `calendar event`

### Delete a calendar event

> Delete a calendar event by id

*Tags:* `calendar event`

#### Input Parameters
* `id` - _required_ - Calendar event identifier

### Get a calendar event

> Get a calendar event by id

*Tags:* `calendar event`

#### Input Parameters
* `id` - _required_ - Calendar event identifier

### Update a calendar event

> Update a calendar event for a patient. Attribute `all_day` must be true and `end_at` cannot be specified for `plan-check-in` event type. To mark a calendar event as 'completed', set `completed_at` and `completed_by` to desired values.  To mark a completed calendar event as 'not completed', set `completed_at` and `completed_by` to `null`. Attendees can be added or removed, but response status cannot be updated. Use the calendar event response api for response status updates instead.

*Tags:* `calendar event`

#### Input Parameters
* `id` - _required_ - Calendar event identifier

### Create calendar event response

> Create a calendar event response for an attendee of a calendar event, the attendee can be a coach or patient.  Calendar event responses cannot be fetched, updated nor deleted.  Use calendar event api to fetch the response status for attendees.

*Tags:* `calendar event response`

### Get a coach

> Get a coach record by id.

*Tags:* `coach`

#### Input Parameters
* `id` - _required_ - Coach identifier

### List email histories

> Get a list of email histories

*Tags:* `email history`

#### Input Parameters
* `filter[receiver]` - _optional_ - Fitbit Plus user id of email recipient. Required if filter[sender] is not defined.
* `filter[sender]` - _optional_ - Fitbit Plus user id of email sender. Required if filter[receiver] is not defined.
* `filter[emailType]` - _optional_ - Type of email
* `sort` - _optional_ - valid sorts:
  * send_time - ascending by send_time
  * -send_time - descending by send_time

    Possible values: send_time, -send_time.

### Get an email history

> Get an email history by id

*Tags:* `email history`

#### Input Parameters
* `id` - _required_ - Email history identifier

### List groups

> Get a list of groups matching the specified filters.

*Tags:* `group`

#### Input Parameters
* `filter[organization]` - _required_ - Organization identifier
* `filter[name]` - _optional_ - Group name

### Create a group

> Create a group record.

*Tags:* `group`

### Get a group

> Get a group record by id.

*Tags:* `group`

#### Input Parameters
* `id` - _required_ - Group identifier

### List health profiles

> Get a list of health profiles

*Tags:* `health profile`

#### Input Parameters
* `filter[patient]` - _optional_ - Patient id to fetch health profile. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `filter[groups]` - _optional_ - Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `filter[organization]` - _optional_ - Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `page[number]` - _optional_ - Page number
* `page[size]` - _optional_ - Page size
* `page[limit]` - _optional_ - Page limit
* `page[cursor]` - _optional_ - Page cursor
* `include` - _optional_ - List of related resources to include in the response
    Possible values: patient, questions.

### Get a health profile

> Get a health profile by id

*Tags:* `health profile`

#### Input Parameters
* `id` - _required_ - Health profile identifier
* `include` - _optional_ - List of related resources to include in the response
    Possible values: patient, questions.

### List health profile answers

> Get a list of health profile answers

*Tags:* `health profile answer`

#### Input Parameters
* `filter[patient]` - _optional_ - Patient id to fetch healt profile answers. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `filter[groups]` - _optional_ - Comma-separated list of group ids. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `filter[organization]` - _optional_ - Fitbit Plus organization id. Note that one of the following filters must be specified: `filter[patient]`, `filter[group]`, or `filter[organization]`.

* `page[number]` - _optional_ - Page number
* `page[size]` - _optional_ - Page size
* `page[limit]` - _optional_ - Page limit
* `page[cursor]` - _optional_ - Page cursor
* `include` - _optional_ - List of related resources to include in the response
    Possible values: patient.

### Get a health profile answer

> Get a health profile answer by id

*Tags:* `health profile answer`

#### Input Parameters
* `id` - _required_ - Health profile answer identifier
* `include` - _optional_ - List of related resources to include in the response
    Possible values: patient.

### Get a health profile question

> Get a health profile by id

*Tags:* `health profile question`

#### Input Parameters
* `id` - _required_ - Health profile question identifier
* `include` - _optional_ - List of related resources to include in the response
    Possible values: question_definition, answer.

### List health question definitions

> Get a list of all health question definitions

*Tags:* `health question definition`

### Get a health question definition

> Get a health question definition by id

*Tags:* `health question definition`

#### Input Parameters
* `id` - _required_ - Health question definition identifier

### Create an oauth token

> Create an OAuth 2.0 Bearer token. A valid bearer token is required for all other API requests.<br/>
> <br/>
> Be sure to set the header `Content-Type: "application/vnd.api+json"`. Otherwise, you will get an error<br/>
> 403 Forbidden. Using `Content-Type: "application/json"` is permitted (to support older oauth clients) but when<br/>
> using `application/json` the body should have a body in the following format instead of nesting under<br/>
> `data.attributes`:<br/>
> ```<br/>
> {<br/>
>   "grant_type": "client_credentials",<br/>
>   "client_id": "95c78ab2-167f-40b8-8bec-8398d4b87454",<br/>
>   "client_secret": "35d18dc9-a3dd-4948-b787-063a490b9354"<br/>
> }<br/>
> ```

*Tags:* `oauth`

#### Input Parameters
* `include` - _optional_ - List of related resources to include in the response
    Possible values: groups, organization.

### Get the groups for a token

> Get the list of groups a token can be used to access.

*Tags:* `oauth`

#### Input Parameters
* `id` - _required_ - Token identifier

### Get the organization for a token

> Get the organization a token can be used to access.

*Tags:* `oauth`

#### Input Parameters
* `id` - _required_ - Token identifier

### Get an organization

> Get an organization record by id.

*Tags:* `organization`

#### Input Parameters
* `id` - _required_ - Organization identifier

### List patients

> Get a list of patients.

*Tags:* `patient`

#### Input Parameters
* `filter[groups]` - _optional_ - Comma-separated list of group ids. Note that either `filter[group]` or `filter[organization]` must be specified.
* `filter[organization]` - _optional_ - Fitbit Plus organization id. Note that either `filter[group]` or `filter[organization]` must be specified.
* `filter[identifier][system]` - _optional_ - Identifier system (example: "MyEHR") - requires a "filter[identifier][value]" parameter
* `filter[identifier][value]` - _optional_ - Identifier value (example: "12345") - requires a "filter[identifier][system]" parameter
* `filter[archived]` - _optional_ - If not specified, return all patients. If set to 'true' return only archived patients, if set to 'false', return only patients who are not archived.
* `filter[created_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients created in November 2017 (America/New_York): `filter[created_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `filter[updated_at]` - _optional_ - The start (inclusive) and end (exclusive) dates are ISO date and time strings separated by `..`. Example for patients updated in November 2017 (America/New_York): `filter[updated_at]=2017-11-01T00:00:00-04:00..2017-12-01T00:00:00-05:00`

* `page[number]` - _optional_ - Page number
* `page[size]` - _optional_ - Page size
* `page[limit]` - _optional_ - Page limit
* `page[cursor]` - _optional_ - Page cursor

### Create a patient

> Create a patient record.<br/>
> <br/>
> Example for creating a patient with a group specified using `meta.query` instead of `id`:<br/>
> <br/>
> ```JSON<br/>
> {<br/>
>   "data": {<br/>
>     "type": "patient",<br/>
>     "attributes": {<br/>
>       "first_name": "Andrew",<br/>
>       "last_name": "Smith"<br/>
>     },<br/>
>     "relationships": {<br/>
>       "groups": {<br/>
>         "data": [<br/>
>           {<br/>
>             "type": "group",<br/>
>             "meta": {<br/>
>               "query": {<br/>
>                 "organization": "58c88de7c93eb96357a87033",<br/>
>                 "name": "Patients Lead"<br/>
>               }<br/>
>             }<br/>
>           }<br/>
>         ]<br/>
>       }<br/>
>     }<br/>
>   }<br/>
> }<br/>
> ```

*Tags:* `patient`

### Upsert patient

> Create a new patient or update an existing patient

*Tags:* `patient`

### Get a patient

> Gets a patient record by id.

*Tags:* `patient`

#### Input Parameters
* `id` - _required_ - Patient identifier

### Update a patient

> Update a patient record.

*Tags:* `patient`

#### Input Parameters
* `id` - _required_ - Patient identifier

### List coaches for a patient

> Get the list of coaches for a patient.

*Tags:* `patient`

#### Input Parameters
* `id` - _required_ - Patient identifier

### List groups for a patient

> Get the list of groups for a patient.

*Tags:* `patient`

#### Input Parameters
* `id` - _required_ - Patient identifier

### List patient health metrics

> Get a list of patient health metrics.

*Tags:* `metric`

#### Input Parameters
* `filter[patient]` - _required_ - Filter the patient health metrics for a specified patient
* `page[number]` - _optional_ - Page number
* `page[size]` - _optional_ - Page size
* `page[limit]` - _optional_ - Page limit
* `page[cursor]` - _optional_ - Page cursor

### Create patient health metrics

> Create one or more patient health metrics.<br/>
> <br/>
> Example for creating a patient health result with a patient specified using `meta.query` instead of `id`:<br/>
> <br/>
> ```JSON<br/>
>   {<br/>
>     "data": {<br/>
>       "type": "patient_health_metric",<br/>
>        "attributes": {<br/>
>          "code": {<br/>
>            "system": "LOINC",<br/>
>            "value": "13457-7"<br/>
>          },<br/>
>          "type": "ldl_cholesterol",<br/>
>          "occurred_at": "2017-03-14T11:00:57.000Z",<br/>
>          "value": 121,<br/>
>          "unit": "mg/dl"<br/>
>       },<br/>
>       "relationships": {<br/>
>         "patient": {<br/>
>           "data": {<br/>
>             "type": "patient",<br/>
>             "meta": {<br/>
>               "query": {<br/>
>                 "identifier": {<br/>
>                   "system": "medical-record-number",<br/>
>                   "value": "121212"<br/>
>                 },<br/>
>                 "organization": "58c4554710123c5c40dbab81"<br/>
>               }<br/>
>             }<br/>
>           }<br/>
>         }<br/>
>       }<br/>
>     }<br/>
>   }<br/>
> ```

*Tags:* `metric`

### Get a patient health metric

> Get the plan summary for a patient.

*Tags:* `metric`

#### Input Parameters
* `id` - _required_ - Patient health metric identifier

### List patient plan summaries

> Get a list of patient plan summaries

*Tags:* `plan`

#### Input Parameters
* `filter[patient]` - _required_ - Patient id to fetch plan summary for
* `include` - _optional_ - List of related resources to include in the response
    Possible values: actions, bundles, patient, current_results.

### Get the plan summary for a patient

> Get the plan summary for a patient.

*Tags:* `plan`

#### Input Parameters
* `id` - _required_ - Plan summary identifier
* `include` - _optional_ - List of related resources to include in the response
    Possible values: actions, bundles, patient, current_results.

### Update a plan summary

> Update a plan summary record for a patient.

*Tags:* `plan`

#### Input Parameters
* `id` - _required_ - Plan summary identifier

### List rewards

> Get a list of rewards matching the specified filters.

*Tags:* `reward`

#### Input Parameters
* `filter[patient]` - _required_ - Patient identifier
* `filter[reward_program_activation]` - _optional_ - Reward program activation identifier
* `filter[thread]` - _optional_ - Thread identifier

### Create a reward

> Create a reward for a patient.

*Tags:* `reward`

### Get a reward

> Get a reward record by id.

*Tags:* `reward`

#### Input Parameters
* `id` - _required_ - Reward identifier

### List reward earnings

> Get a list of reward earnings matching the specified filters.

*Tags:* `reward earning`

#### Input Parameters
* `filter[groups]` - _required_ - Group identifiers
* `filter[patient]` - _required_ - Patient identifier
* `filter[ready_for_fulfillment]` - _optional_ - If true, only returns those reward earnings for which ready_for_fulfillment is true and fulfilled_at is null. If false, only returns those reward earnings for which ready_for_fulfillment is false and fulfilled_at is null.

### Create a reward earning

> Create a reward earning for a reward. There can only be one earning for a reward. It is possilble to create multiple reward earnings simultaneously by providing and array of reward earnings in the data property.

*Tags:* `reward earning`

### Get a reward earning

> Get a reward earning record by id.

*Tags:* `reward earning`

#### Input Parameters
* `id` - _required_ - Reward earning identifier

### List reward earning fulfillments

> Get a list of reward earning fulfillments matching the specified filters.

*Tags:* `reward earning fulfillment`

#### Input Parameters
* `filter[patient]` - _required_ - Patient identifier

### Create a reward earning fulfillment

> Create a reward earning fulfillment for a reward earning. There can only be one fulfillment for each earning.

*Tags:* `reward earning fulfillment`

### Get a reward earning fulfillment

> Get a reward earning fulfillment record by id.

*Tags:* `reward earning fulfillment`

#### Input Parameters
* `id` - _required_ - Reward earning fulfillment identifier

### List reward programs

> Get a list of reward programs matching the specified filters.

*Tags:* `reward program`

#### Input Parameters
* `filter[groups]` - _required_ - Comma-separated list of group identifiers

### Create a reward program

> Create a reward program for a group.

*Tags:* `reward program`

### Get a reward program

> Get a reward program record by id.

*Tags:* `reward program`

#### Input Parameters
* `id` - _required_ - Reward program identifier

### Get group for a reward program

> Get the group related to a reward program.

*Tags:* `reward program`

#### Input Parameters
* `id` - _required_ - Reward program identifier

### List reward program activations

> Get a list of reward program activations matching the specified filters.

*Tags:* `reward program activation`

#### Input Parameters
* `filter[patient]` - _required_ - Patient identifier

### Create a reward program activation

> Create a reward program activation for a patient. There can only be one activation for a patient for a given reward program.

*Tags:* `reward program activation`

### Get a reward program activation

> Get a reward program activationrecord by id.

*Tags:* `reward program activation`

#### Input Parameters
* `id` - _required_ - Reward program activation identifier

## License

**flow**ground :- Telekom iPaaS / twinehealth-com-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
