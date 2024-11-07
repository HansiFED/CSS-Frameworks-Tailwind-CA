import { readSinglePost } from "../../api/post/read";
import { buildSinglePost } from "../../utilities/buildSinglePost";
import { correctHeader } from "../../utilities/correctHeader";

correctHeader();

//builds the single post page with information provided
const readPost = await readSinglePost();

buildSinglePost(readPost);
