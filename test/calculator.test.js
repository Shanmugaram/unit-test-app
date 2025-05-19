const assert = require('assert');
const { add, subtract } = require('../src/calculator');

describe('Calculator Tests', function () {
    it('should return 5 when adding 2 + 3', function () {
        assert.strictEqual(add(2, 3), 5);
    });

    it('should return 1 when subtracting 3 - 2', function () {
        assert.strictEqual(subtract(3, 2), 1);
    });
});
