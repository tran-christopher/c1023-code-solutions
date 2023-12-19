select "firstName",
       "lastName"
from "inventory"
join "rentals" using ("inventoryId")
join "customers" using ("storeId")
join "films" using ("filmId")
where "title" = 'Magic Mallrats'
