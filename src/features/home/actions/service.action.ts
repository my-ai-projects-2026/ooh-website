
import { client } from "@/sanity/lib/client";
import { Post } from "../../../types/post.types";
import { defineQuery } from "next-sanity";



export const getServiceTitlePost = async (): Promise<Post | null> => {

	const query = defineQuery(`
      *[_type == "post" && slug.current == "core-service"][0]{
         _id,
         title,
         slug,
         body,
         }`
	)

	const options = {
		next: {
			revalidate: 60, // Revalidate every 60 seconds
		},
	};
	const post = await client.fetch(query, {}, options);
	return post;
}