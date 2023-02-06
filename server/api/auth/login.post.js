import {createUser, getUserByUsername} from "~/server/db/users";
import {userTransformer} from "~/server/transformers/user";
import {generateTokens, sendRefreshToken} from "~/server/utils/jwt";
import bcrypt from "bcrypt";
import {createRefreshToken} from "~/server/db/refreshTokens";

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const { username, password } = body;

    if(!username || !password ) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Invalid Params'}))
    }

    // Is the user in the database?
    const user = await getUserByUsername(username);
    if(!user) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Username or password is incorrect'}))
    }

    // Is the password correct?
    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if(!isPasswordCorrect) {
        return sendError(event, createError({statusCode: 400, statusMessage: 'Username or password is incorrect'}))
    }

    // Generate a JWT token

    // Access token & refresh token
    const {accessToken, refreshToken} = generateTokens(user);

    // save it to the database
    await createRefreshToken({token: refreshToken, userId: user.id});

    // add httpOnly cookie
    sendRefreshToken(event, refreshToken);

    // Return the user and the token

    return { access_token : accessToken , user: userTransformer(user) };
});