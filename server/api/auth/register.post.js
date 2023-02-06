import { sendError } from 'h3';
// import {createUser} from "~/server/db/users";
import { createUser } from "../../db/users.js";
import { userTransformer } from "~/server/transformers/user";

export default defineEventHandler(async (event) => {
    // const body = await useBody(event);
    // return {
    //     body: JSON.stringify(body),
    // }

    const body = await readBody(event)
    const { username, password, repeatPassword, email, name } = body;

    if(!username || !password || !repeatPassword || !email || !name) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Missing fields'}))
    }

    if(password !== repeatPassword) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Passwords do not match!'}))
    }

    const userData = {
        username,
        password,
        email,
        name,
        profileImage: 'https://picsum.photos/200/200'
    }
    const user = await createUser(userData);

    return { body: userTransformer(user) };
})