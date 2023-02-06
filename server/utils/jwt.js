import jwt from "jsonwebtoken";

export const generateAccessToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtAccessSecret, { expiresIn: '10m' });
};

export const generateRefreshToken = (user) => {
    const config = useRuntimeConfig();
    return jwt.sign({userId: user.id}, config.jwtRefreshSecret, { expiresIn: '4h' });
};

export const generateTokens = (user) => {
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    return {
        accessToken,
        refreshToken
    }
};

export const sendRefreshToken = (event, refreshToken) => {

    setCookie(event, 'refresh_token', refreshToken, {
        httpOnly: true,
        sameSite: true
    });
};