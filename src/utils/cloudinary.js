import {v2 as cloudinary} from "cloudinary"
import fs from "fs"

console.log("Cloudinary API Key:", process.env.CLOUDINARY_API_KEY);
console.log("Cloudinary API Secret:", process.env.CLOUDINARY_API_SECRET);

cloudinary.config({
    cloud_name: 'dvhjuhcb5',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
    
const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        console.log("file is uploaded on cloudinary", response.url);

        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        console.error("Cloudinary Error:", error);
        fs.unlinkSync(localFilePath) // remove the locally saved temp file as the upload got failed
        return null;
    }
}

export {uploadOnCloudinary}