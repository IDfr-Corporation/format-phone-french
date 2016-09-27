/*!
 * format-phone-french
 * Copyright(c) 2016 IDfr
 * MIT Licensed
 */

'use strict';

/**
 * Module exports.
 * @public
 */

module.exports = formatPhone;

/**
 * Return a well formatted phone according to options
 * @param phone
 * @param options
 */
function formatPhone(phone, options) {
    options = options || {};
    var sep = options.separator || '';

    phone += ''; // must be String Type

    var phoneRegExpReplace33 = /\+ ?33\ *\(0\)\ *|33\ ?\(0\)/g,
        phoneRegExpRemove = /^\+ ?33\ */,
        phoneRegExpRemoveUnwantedCharacters = /[^0-9]/g,
        phoneRegExpFormat = /^([0-9]{2})([\.\-/ ]?)([0-9]{2})([\.\-/ ]?)([0-9]{2})([\.\-/ ]?)([0-9]{2})([\.\-/ ]?)([0-9]{2})/;

    if (phone && phone.length) {
        phone = phone;
        phone = phone.replace(phoneRegExpReplace33, '0');
        phone = phone.replace(phoneRegExpRemove, '');
        phone = phone.replace(phoneRegExpRemoveUnwantedCharacters, '');

        phone = phone.replace(phoneRegExpFormat, '$1' + sep + '$3' + sep + '$5' + sep + '$7' + sep + '$9');
    }
    return phone;
}