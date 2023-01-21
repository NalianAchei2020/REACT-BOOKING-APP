import mongoose from 'mongoose';

const roomsSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            
        },
        price:{
            type: Number,
            required: true,
            
        },
        maxPeope:{
            type: Number,
            required: true,
        },
        roomNumbers:[{number:Number, 
            unavailableDates:{type: [Date]}
        }],
        
    },
    {timestamps:true}
);

export default mongoose.model('Room', roomsSchema);