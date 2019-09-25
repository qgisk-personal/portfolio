const express = require("express");
const router = express.Router();
const validUrl = require("valid-url");
const shortid = require("shortid");
const ExpressBrute = require("express-brute");

const store = new ExpressBrute.MemoryStore(); // stores state locally, don't use this in production
const bruteforce = new ExpressBrute(store);

const Url = require("./../models/Url");

/**
 * @route   POST /api/url/shorten
 * @desc    Create short url
 */

router.post("/shorten", bruteforce.prevent, async (req, res) => {
    const { longUrl } = req.body;

    // Check if base url is valid

    if (!validUrl.isUri(`${req.protocol}://${req.get("host")}`)) {
        return res.status(401).json("Invalid base url");
    }

    // Create Url code
    const urlCode = shortid.generate();

    // Check if longurl is valid
    if (validUrl.isUri(longUrl)) {
        try {
            // Check if url exists in database
            let url = await Url.findOne({
                longUrl
            });

            if (url) {
                return res.json(url);
            }

            // Make short url
            const shortUrl = `${req.protocol}://${req.get(
                "host"
            )}/u/${urlCode}`;
            console.log(shortUrl);
            url = new Url({
                longUrl,
                shortUrl,
                urlCode,
                date: new Date()
            });

            // Save db
            await url.save();

            return res.json(url);
        } catch (err) {
            console.err(err.message);
            res.status(500).json("Server error");
        }
    } else {
        res.status(401).json("Invalid long url");
    }
});

module.exports = router;
