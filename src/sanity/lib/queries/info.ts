import {defineQuery} from 'next-sanity'

export const BUSINESS_ADDRESS = defineQuery(`*[_type == "post" && slug.current == "business-address"][0]{
  title, body, mainImage
}`)

export const BUSINESS_INFO = defineQuery(`*[_type == "businessInfo"][0]{
  address, phone, email, tagline, socialLinks, logo { asset-> { url } },
  introduction[]{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
  history[]{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
  background[]{..., markDefs[]{..., _type == "internalLink" => { "slug": @.slug.current } }},
}`)



