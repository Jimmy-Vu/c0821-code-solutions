  select count(*) as "Cities Per Country",
         "countries"."name"
    from "cities"
    join "countries" using ("countryId")
group by "countries"."name";
