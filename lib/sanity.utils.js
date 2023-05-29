import client from "@lib/sanity.client";
import { groq } from "next-sanity";



export async function getSocials() {
  return await client.fetch(groq`
    *[_type == "social"] 
  `);
}

export async function getPageInfo() {
    return await client.fetch(groq`
      *[]
    `)
}