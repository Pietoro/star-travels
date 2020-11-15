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

set @the_blood_inn := (select distinct id from hotels where name='The Blood Inn');
set @lhotel_extraordinaire := (select distinct id from hotels where name='L''Hotel Extraordinaire');
set @logical_choice := (select distinct id from hotels where name='A Logical Choice');
set @jamaharon_hotel := (select distinct id from hotels where name='Jamaharon Hotel');
set @sunrisa := (select distinct id from hotels where name='SunRisa');
set @hotel_quark := (select distinct id from hotels where name='Hotel Quark');
set @the_prophets_inn := (select distinct id from hotels where name='The Prophet''s Inn');

delete from space_docks;
insert into space_docks (name, city_id)
values ('Kahless Dock', @first_city),
       ('Picard Dock', @paris),
       ('Spock Dock', @shikahr),
       ('Risa Oribital Dock', @risa_orbital_station),
       ('Docking Ring C', @ds9),
       ('Emissary Dock', @bhala);

set @kahless_dock := (select distinct id from space_docks where name='Kahless Dock');
set @picard_dock := (select distinct id from space_docks where name='Picard Dock');
set @spock_dock := (select distinct id from space_docks where name='Spock Dock');
set @risa_orbital_dock := (select distinct id from space_docks where name='Risa Oribital Dock');
set @docking_ring_c := (select distinct id from space_docks where name='Docking Ring C');
set @emissary_dock := (select distinct id from space_docks where name='Emissary Dock');

set @bb := 'BB';
set @hb := 'HB';
set @fb := 'FB';
set @ai := 'AI';

delete from trips;
insert into trips (dock_from_id, dock_to_id, hotel_id, board_type_code, available_places, departure_date, return_date, price, promoted)
values (@spock_dock, @kahless_dock, @the_blood_inn, @bb, 15, '2020-11-23','2020-12-01', 1500, true),
       (@picard_dock, @emissary_dock, @the_prophets_inn, @fb, 10, '2020-12-03','2020-12-11', 2000, true),
       (@docking_ring_c, @risa_orbital_dock, @jamaharon_hotel, @ai, 50, '2020-11-26','2020-12-11', 6000, true);
