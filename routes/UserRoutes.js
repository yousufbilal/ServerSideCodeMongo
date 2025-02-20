import express from 'express';
import User from '../modal/User.js';

const router = express.Router();

// POST route to create a new blog post
// router.post('/', async (req, res) => {
//     const user = await User.create({ name: "yousuf", email: "yousufbilal008@gmail.com" });
//     res.status(201).json(user);
// });

router.post('/users', async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);  

    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Server error' }); 
    }
});


router.get("/users", async (req, res) => {
    //make try catch here 

    //before i fetch clg checks for requests receive 
    console.log("yousuf sucuess")

    const user = await User.find({})
    res.status(200).json(user)
})

router.delete("/users", async (req, res) => {
    //make try catch here 
    const user = await User.deleteMany({})
    res.status(200).json(user)
})

export default router;


// GET route to fetch all blog posts
// router.get('/', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const article = await Blog.findById();  // Find the post by its ObjectId

//         if (!article) {
//             return res.status(404).json({ message: 'Article not found' });
//         }

//         res.status(200).json(article);  // Return the article if found
//     } catch (error) {
//         res.status(500).json({ message: 'Error fetching article', error });
//     }
// });