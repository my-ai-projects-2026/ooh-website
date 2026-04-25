const PARTNER_QUERY = `*[_type == "partner"]{
   name,
   "logoUrl": logo.asset->url,
   website,
   order
} | order(order asc)`;
 
export { PARTNER_QUERY };