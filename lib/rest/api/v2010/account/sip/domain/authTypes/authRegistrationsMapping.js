'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var util = require('util');  /* jshint ignore:line */
var AuthRegistrationsCredentialListMappingList = require(
    './authRegistrationsMapping/authRegistrationsCredentialListMapping').AuthRegistrationsCredentialListMappingList;

var AuthTypeRegistrationsList;

/* jshint ignore:start */
/**
 * Initialize the AuthTypeRegistrationsList
 *
 * @constructor Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeRegistrationsList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid - The SID of the Account that created the resource
 * @param {string} domainSid - The unique string that identifies the resource
 */
/* jshint ignore:end */
AuthTypeRegistrationsList = function AuthTypeRegistrationsList(version,
    accountSid, domainSid) {
  /* jshint ignore:start */
  /**
   * @function registrations
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext#
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeRegistrationsContext}
   */
  /* jshint ignore:end */
  function AuthTypeRegistrationsListInstance(sid) {
    return AuthTypeRegistrationsListInstance.get(sid);
  }

  AuthTypeRegistrationsListInstance._version = version;
  // Path Solution
  AuthTypeRegistrationsListInstance._solution = {accountSid: accountSid, domainSid: domainSid};

  // Components
  AuthTypeRegistrationsListInstance._credentialListMappings = undefined;

  Object.defineProperty(AuthTypeRegistrationsListInstance,
    'credentialListMappings', {
      get: function credentialListMappings() {
        if (!this._credentialListMappings) {
          this._credentialListMappings = new AuthRegistrationsCredentialListMappingList(
            this._version,
            this._solution.accountSid,
            this._solution.domainSid
          );
        }

        return this._credentialListMappings;
      }
  });

  /* jshint ignore:start */
  /**
   * Provide a user-friendly representation
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.SipContext.DomainContext.AuthTypesContext.AuthTypeRegistrationsList#
   *
   * @returns Object
   */
  /* jshint ignore:end */
  AuthTypeRegistrationsListInstance.toJSON = function toJSON() {
    return this._solution;
  };

  AuthTypeRegistrationsListInstance[util.inspect.custom] = function inspect(depth,
      options) {
    return util.inspect(this.toJSON(), options);
  };

  return AuthTypeRegistrationsListInstance;
};

module.exports = {
  AuthTypeRegistrationsList: AuthTypeRegistrationsList
};
