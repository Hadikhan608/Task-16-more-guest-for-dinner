//Task # 16: More guests, you just find a bigger dinner table so now more space is available
//think of three more guests to invite to dinner.

let guestlist : string [] = ["Kumail", "Shahid","Tahami","Qadir"];
let cannotattend: string = "Shahid";
let newguest: string = "Taha";
guestlist[guestlist.indexOf(cannotattend)] = newguest;
console.log(guestlist);
//guestlist.map((items)=>console.log(`Dear ${items}i got space on table so i invited more people to dinner`));
//part 2 
let guestbeg : string ="Faris";
guestlist.unshift(guestbeg);
console.log(guestlist);
//part 3 
let middleguest: string = "Zulkifil";
guestlist.slice(1,0);
console.log(guestlist);