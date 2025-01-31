import userModel from "../models/userModels.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {

    try {
        
        const {userId, prompt} = req.body;
        const user = await userModel.findById(userId);
        if(!user || !prompt){
            return res.json({success: false, message: "Missing details"});
        }

        if(user.creditBalance == 0 || userModel.creditBalance < 0){
            return res.json({success: false, message: "Insufficient credits",creditBalance: user.creditBalance});
        }

        const formData = new FormData();

        formData.append("prompt", prompt);

        const {data} = await axios.post('https://clipdrop-api.co/text-to-image/v1', formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API_KEY,
              },
              responseType: 'arraybuffer'
        })

        const base64 = Buffer.from(data, 'binary').toString('base64');
        const image = `data:image/png;base64,${base64}`;
         
        await userModel.findByIdAndUpdate(user._id, {creditBalance: user.creditBalance - 1});

        res.json({success: true, message:"Image Generated", image, creditBalance: user.creditBalance - 1});

    } catch (error) {
        console.error(error);
        res.json({success: false, message: error.message});
    }

}