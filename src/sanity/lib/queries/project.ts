

export const PROJECT_QUERY = `*[_type == "project"]{
   title,
   slug,
   description,
   "imageUrl": image.asset->url,
   link
}`