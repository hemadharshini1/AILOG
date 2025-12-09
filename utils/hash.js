// utils/hash.js
const crypto = require('crypto');

function computeHash(content) {
    return crypto.createHash('sha256').update(content, 'utf8').digest('hex');
}

module.exports = { computeHash };
