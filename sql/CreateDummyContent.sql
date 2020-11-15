use `star-travels`;
delete from states;
insert into states (name)
values ('Klingon Empire'),
       ('United Federation of Planets'),
       ('Bajor');

set @klingon_empire := (select distinct id from states where name='Klingon Empire');
set @federation := (select distinct id from states where name='United Federation of Planets');
set @bajor := (select distinct id from states where name='Bajor');

delete from planets;
insert into planets (name, state_id)
values ('Kronos', @klingon_empire),
       ('Earth', @federation),
       ('Vulcan', @federation),
       ('Risa', @federation),
       ('Bajor', @bajor);

set @kronos := (select distinct id from planets where name='Kronos');
set @earth := (select distinct id from planets where name='Earth');
set @vulcan := (select distinct id from planets where name='Vulcan');
set @risa := (select distinct id from planets where name='Risa');
set @bajor_planet := (select distinct id from planets where name='Bajor');

delete from cities;
insert into cities (name, planet_id, is_orbital)
values ('First City', @kronos, false),
       ('Paris', @earth, false),
       ('ShiKahr', @vulcan, false),
       ('Suraya Bay', @risa, false),
       ('Risa Orbital Station', @risa, true),
       ('Deep Space 9', @bajor_planet, true),
       ('B''Hala', @bajor_planet, false);

set @first_city := (select distinct id from cities where name='First City');
set @paris := (select distinct id from cities where name='Paris');
set @shikahr := (select distinct id from cities where name='ShiKahr');
set @suraya_bay := (select distinct id from cities where name='Suraya Bay');
set @risa_orbital_station := (select distinct id from cities where name='Risa Orbital Station');
set @ds9 := (select distinct id from cities where name='Deep Space 9');
set @bhala := (select distinct id from cities where name='B''Hala');

delete from hotels;
insert into hotels (name, city_id, standard_stars)
values ('The Blood Inn', @first_city, 4),
       ('L''Hotel Extraordinaire', @paris, 5),
       ('A Logical Choice', @shikahr, 5),
       ('Jamaharon Hotel', @suraya_bay, 5),
       ('SunRisa', @suraya_bay, 2),
       ('Hotel Quark', @ds9, 3),
       ('The Prophet''s Inn', @bhala, 3);

delete from space_docks;
insert into space_docks (name, city_id)
values ('Kahless Dock', @first_city),
       ('Picard Dock', @paris),
       ('Spock Dock', @shikahr),
       ('Risa Oribital Dock', @risa_orbital_station),
       ('Docking Ring C', @ds9),
       ('Emissary Dock', @bhala);
