import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
    try {
        const token =
            req.cookies?.accessToken ||
            req.headers?.authorization?.split(" ")[1];

        // Token nahi mila
        if (!token) {
            return res.status(401).json({
                message: "Provide token",
                error: true,
                success: false
            });
        }

        /*
        JWT verify karta hai:

        - Token valid hai?
        - Token expire to nahi hua?
        - Token correct secret se bana tha?
        */

        const decoded = jwt.verify(
            token,
            process.env.SECRET_KEY_ACCESS_TOKEN
        );

        /*
        decoded ke andar JWT payload hota hai.

        Example:

        {
            id: "68abc123...",
            iat: 1234567890,
            exp: 1234567890
        }
        */

        if (!decoded?.id) {
            return res.status(401).json({
                message: "Unauthorized access",
                error: true,
                success: false
            });
        }

        /*
        User ki ID request object me save kar rahe hain.

        Ab next controller me:

        req.userId

        se logged-in user ki ID mil jayegi.
        */

        req.userId = decoded.id;

        /*
        Authentication successful.
        Ab request ko next middleware/controller
        ke paas bhejo.
        */

        next();

    } catch (error) {
        /*
        jwt.verify() fail hone par yahan aayega.

        Examples:
        - Token expired
        - Token invalid
        - Wrong secret
        */

        return res.status(401).json({
            message: "Invalid or expired token",
            error: true,
            success: false
        });
    }
};

export default auth;