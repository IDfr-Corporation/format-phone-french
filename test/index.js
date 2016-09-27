'use strict';

var assert = require('assert'),
    formatPhone = require('../');

describe('Format-phone-french Tests', function () {

    it('test (817) 569-8900', function () {
        assert.equal(formatPhone('(817) 569-8900'), '8175698900', 'fail to format phone number');
    });
    it('test (817) 569-8900', function () {
        assert.equal(formatPhone('(817) 569-8900', {separator: ' '}), '81 75 69 89 00', 'fail to format phone number');
    });
    it('test 0608 670 738', function () {
        assert.equal(formatPhone('0608 670 738'), '0608670738', 'fail to format a phone number');
    });

    it('test 36 35', function () {
        assert.equal(formatPhone('36 35'), '3635', 'fail to format a phone number');
    });
    it('test +33(0)494-709-178', function () {
        assert.equal(formatPhone('+33(0)494-709-178'), '0494709178', 'fail to format a phone number');
    });
    it('test 4567_0608 670 738', function () {
        assert.equal(formatPhone('4567_0608 670 738', { separator:'-'}), '45-67-06-08-670738', 'fail to format a phone number');
    });

});