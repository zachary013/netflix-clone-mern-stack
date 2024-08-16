import { User } from '../models/user.model.js';
import bcryptjs from "bcryptjs";

export async function signup(req, res) {
    try {
        const {email, password, username} = req.body;
        if(!email || !password || !username) {
            return res.status(400).json({success:false, message:"All fields are required"})
        }
        //Verify if email is valid or not
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
			return res.status(400).json({ success: false, message: "Invalid email" });
		}
        //verify password at least has 6 characters
		if (password.length < 6) {
			return res.status(400).json({ success: false, message: "Password must be at least 6 characters" });
		}
        //If email already used
		const existingUserByEmail = await User.findOne({ email: email });

		if (existingUserByEmail) {
			return res.status(400).json({ success: false, message: "Email already exists" });
		}
        //If username is already taken
		const existingUserByUsername = await User.findOne({ username: username });

		if (existingUserByUsername) {
			return res.status(400).json({ success: false, message: "Username already exists" });
		}

        const PROFILE_PICS = ["/avatar1.png", "/avatar2.png", "/avatar3.png"];

		const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

        // 123456 => %$!"?=ü$
        const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword,
            username,
            image
        })
        //save created user
        await newUser.save();
        //remove users passwd from response
        res.status(201).json({ success: true, user: {
            ...newUser._doc,
            password:""
        }})
    } catch (error) {
        console.log("Error in signup controller ", error.message)
        res.status(500).json({ success: false, message: "Internal server error" })
    }
}
export async function login(req, res) {
    res.send("Login route");
}

export async function logout(req, res) {
    res.send("Logout route");
}