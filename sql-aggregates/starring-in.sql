select "cat"."name" as "Category",
       count("cM".*)
from "actors"
join "castMembers" as "cM" using ("actorId")
join "filmCategory" as "f" using ("filmId")
join "categories" as "cat" using ("categoryId")
where "actors"."firstName" = 'Lisa' AND "actors"."lastName" = 'Monroe'
group by "cat"."name";
