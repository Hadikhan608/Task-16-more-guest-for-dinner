"use strict";
//Task # 16: More guests, you just find a bigger dinner table so now more space is available
//think of three more guests to invite to dinner.
let guestlist = ["Kumail", "Shahid", "Tahami", "Qadir"];
let cannotattend = "Shahid";
let newguest = "Taha";
guestlist[guestlist.indexOf(cannotattend)] = newguest;
console.log(guestlist);
//guestlist.map((items)=>console.log(`Dear ${items}i got space on table so i invited more people to dinner`));
//part 2 
let guestbeg = "Faris";
guestlist.unshift(guestbeg);
console.log(guestlist);
//part 3 
let middleguest = "Zulkifil";
guestlist.slice(1, 0);
console.log(guestlist);
