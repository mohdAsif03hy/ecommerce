
import multer from "multer";
import { randomBytes } from "node:crypto";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads");
    },

    filename: function (req, file, cb) {
        randomBytes(16, function (err, raw) {
            if (err) return cb(err);
            cb(null, `${Date.now()}_${file.originalname}`);
        });
    }
});

const upload = multer({ storage: storage });

export default upload;

