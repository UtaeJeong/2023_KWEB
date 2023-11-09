select `users`.`id`, `users`.`name`, `tickets`.`seat_number` 
from `tickets`
inner join `users` on `users`.`id` = `tickets`.`user` and `tickets`.`train` = 11
order by `tickets`.`seat_number`;



select `users`.`id`, `users`.`name`, 
count(*) as `trains_count`, 
sum(`trains`.`distance`) / 10 as `total_distance`
from `tickets`
inner join `trains` on `trains`.`id` = `tickets`.`train`
inner join `users` on `users`.`id` = `tickets`.`user`
group by `users`.`id`
order by `total_distance` desc
limit 6;



select `trains`.`id`, `types`.`name` 
as `type`, `src`.`name` 
as `src_stn`, `dst`.`name` 
as `dst_stn`, Timediff(`arrival`, `departure`) 
as `travel_time`
from `trains`
inner join `types` on `types`.`id` = `trains`.`type`
inner join `stations` as `src` on `src`.`id` = `trains`.`source`
inner join `stations` as `dst` on `dst`.`id` = `trains`.`destination`
order by `travel_time` desc
limit 6;



select `types`.`name` 
as `type`, `src`.`name` 
as `src_stn`, `dst`.`name` 
as `dst_stn`, `trains`.`departure`, `trains`.`arrival`,
round(`types`.`fare_rate` * `trains`.`distance` / 1000, -2) as `fare`
from `trains`
inner join `types` on `types`.`id` = `trains`.`type`
inner join `stations` as `src` on `src`.`id` = `trains`.`source`
inner join `stations` as `dst` on `dst`.`id` = `trains`.`destination`
order by `departure`;



select `trains`.`id`, `types`.`name` 
as `type`, `src`.`name` 
as `src_stn`, `dst`.`name` 
as `dst_stn`,
count(*) as `occupied`, `types`.`max_seats` as `maximum`
from `tickets`
inner join `trains` on `trains`.`id` = `tickets`.`train`
inner join `types` on `types`.`id` = `trains`.`type`
inner join `stations` as `src` on `src`.`id` = `trains`.`source`
inner join `stations` as `dst` on `dst`.`id` = `trains`.`destination`
group by `tickets`.`train`
order by `trains`.`id`;



select `trains`.`id`, `types`.`name` 
as `type`, `src`.`name` 
as `src_stn`, `dst`.`name` 
as `dst_stn`,
count(`tickets`.`id`) as `occupied`, `types`.`max_seats` as `maximum`
from `tickets`
right join `trains` on `trains`.`id` = `tickets`.`train`
inner join `types` on `types`.`id` = `trains`.`type`
inner join `stations` as `src` on `src`.`id` = `trains`.`source`
inner join `stations` as `dst` on `dst`.`id` = `trains`.`destination`
group by `tickets`.`train`
order by `trains`.`id`;
