exports.up = function (knex) {
    return knex.schema.createTable('logs', function (table) {
        table.increments('id').primary();
        table.string('filename');
        table.string('hash').unique();
        table.integer('original_size');
        table.text('sanitized_log');
        table.string('issue_type');
        table.text('root_cause');
        table.text('fix_suggestion');
        table.string('severity');
        table.boolean('from_cache').defaultTo(false);
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('logs');
};
