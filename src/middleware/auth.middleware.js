import { supabase } from "../config/supabaseclient.config.js";

// Middleware for authentication
const authenticateUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    // Ensure the token is present
    if (!authHeader?.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Authorization token is missing or invalid' });
    }

    const token = authHeader.split(' ')[1]; // Extract the token

    // Verify the token using Supabase
    const { data: user, error } = await supabase.auth.getUser(token);

    if (error || !user) {
      return res.status(401).json({ message: 'Invalid or expired token', error });
    }

    // Attach user info to the request object for further use
    req.user = user;

    next(); // Move to the next middleware or route handler
  } catch (err) {
    console.error('Error in authentication middleware:', err.message);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export default authenticateUser;
