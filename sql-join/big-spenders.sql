select "p"."paymentId",
       "p"."amount",
       "p"."rentalId",
       "p"."customerId",
       "c"."firstName",
       "c"."lastName"
from "customers" as "c"
join "payments" as "p" using ("customerId")
order by "amount" desc
limit 10;
