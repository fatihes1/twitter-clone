import { sendError } from 'h3';
import {createUser} from "~/server/db/users";
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
        name
    }
    const user = await createUser(userData);

    return { body: user };
})