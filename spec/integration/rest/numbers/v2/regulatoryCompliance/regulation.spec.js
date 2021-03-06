'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Regulation', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Australia: Local - Individual',
                  'iso_country': 'AU',
                  'number_type': 'local',
                  'end_user_type': 'individual',
                  'requirements': {
                      'end_user': [
                          {
                              'name': 'Individual',
                              'type': 'individual',
                              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/individual',
                              'fields': [
                                  'first_name',
                                  'last_name'
                              ]
                          }
                      ],
                      'supporting_document': [
                          [
                              {
                                  'name': 'Address',
                                  'type': 'document',
                                  'description': 'The physical location of the individual or business. Must be within locality or region covered by the phone numbers prefix; a PO Box is not acceptable where a local address is required.',
                                  'accepted_documents': [
                                      {
                                          'name': 'Address Validation',
                                          'type': 'address',
                                          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/DocumentTypes/address',
                                          'fields': []
                                      }
                                  ]
                              }
                          ]
                      ]
                  },
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .regulations.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Australia: Local - Individual',
                  'iso_country': 'AU',
                  'number_type': 'local',
                  'end_user_type': 'individual',
                  'requirements': {
                      'end_user': [
                          {
                              'name': 'Individual',
                              'type': 'individual',
                              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/individual',
                              'fields': [
                                  'first_name',
                                  'last_name'
                              ]
                          }
                      ],
                      'supporting_document': [
                          [
                              {
                                  'name': 'Address',
                                  'type': 'document',
                                  'description': 'The physical location of the individual or business. Must be within locality or region covered by the phone numbers prefix; a PO Box is not acceptable where a local address is required.',
                                  'accepted_documents': [
                                      {
                                          'name': 'Address Validation',
                                          'type': 'address',
                                          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/DocumentTypes/address',
                                          'fields': []
                                      }
                                  ]
                              }
                          ]
                      ]
                  },
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .regulations.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Australia: Local - Individual',
                  'iso_country': 'AU',
                  'number_type': 'local',
                  'end_user_type': 'individual',
                  'requirements': {
                      'end_user': [
                          {
                              'name': 'Individual',
                              'type': 'individual',
                              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/individual',
                              'fields': [
                                  'first_name',
                                  'last_name'
                              ]
                          }
                      ],
                      'supporting_document': [
                          [
                              {
                                  'name': 'Address',
                                  'type': 'document',
                                  'description': 'The physical location of the individual or business. Must be within locality or region covered by the phone numbers prefix; a PO Box is not acceptable where a local address is required.',
                                  'accepted_documents': [
                                      {
                                          'name': 'Address Validation',
                                          'type': 'address',
                                          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/DocumentTypes/address',
                                          'fields': []
                                      }
                                  ]
                              }
                          ]
                      ]
                  },
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };
      holodeck.mock(new Response(200, body));
      client.numbers.v2.regulatoryCompliance
                       .regulations.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .regulations.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var url = 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations';

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'results': [],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?IsoCountry=US&EndUserType=business&NumberType=mobile&PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?IsoCountry=US&EndUserType=business&NumberType=mobile&PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .regulations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'results': [
              {
                  'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'Australia: Local - Individual',
                  'iso_country': 'AU',
                  'number_type': 'local',
                  'end_user_type': 'individual',
                  'requirements': {
                      'end_user': [
                          {
                              'name': 'Individual',
                              'type': 'individual',
                              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/individual',
                              'fields': [
                                  'first_name',
                                  'last_name'
                              ]
                          }
                      ],
                      'supporting_document': [
                          [
                              {
                                  'name': 'Address',
                                  'type': 'document',
                                  'description': 'The physical location of the individual or business. Must be within locality or region covered by the phone numbers prefix; a PO Box is not acceptable where a local address is required.',
                                  'accepted_documents': [
                                      {
                                          'name': 'Address Validation',
                                          'type': 'address',
                                          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/DocumentTypes/address',
                                          'fields': []
                                      }
                                  ]
                              }
                          ]
                      ]
                  },
                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
              }
          ],
          'meta': {
              'page': 0,
              'page_size': 50,
              'first_page_url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'previous_page_url': null,
              'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations?PageSize=50&Page=0',
              'next_page_url': null,
              'key': 'results'
          }
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .regulations.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid fetch request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .regulations('RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var sid = 'RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
      var url = `https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/${sid}`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function(done) {
      var body = {
          'sid': 'RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'Australia: Local - Individual',
          'iso_country': 'AU',
          'number_type': 'local',
          'end_user_type': 'individual',
          'requirements': {
              'end_user': [
                  {
                      'name': 'Individual',
                      'type': 'individual',
                      'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/individual',
                      'fields': [
                          'first_name',
                          'last_name'
                      ]
                  }
              ],
              'supporting_document': [
                  [
                      {
                          'name': 'Address',
                          'type': 'document',
                          'description': 'The physical location of the individual or business. Must be within locality or region covered by the phone numbers prefix; a PO Box is not acceptable where a local address is required.',
                          'accepted_documents': [
                              {
                                  'name': 'Address Validation',
                                  'type': 'address',
                                  'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/DocumentTypes/address',
                                  'fields': []
                              }
                          ]
                      }
                  ]
              ]
          },
          'url': 'https://numbers.twilio.com/v2/RegulatoryCompliance/Regulations/RNaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
      };

      holodeck.mock(new Response(200, body));

      var promise = client.numbers.v2.regulatoryCompliance
                                     .regulations('RNXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});
