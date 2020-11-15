use `star-travels`;
delete from board_types;
insert into board_types (code, description) values
    ('BB', 'Bed & Breakfast'), ('HB', 'Half Board'),
    ('FB', 'Full Board'), ('AI', 'All Inclusive');