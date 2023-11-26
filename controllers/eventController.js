const Event = require('./models/event');  

//obtener todos los eventos 

exports.getAllEvents = (req, res) => {
    try{
        const events = Event.find();
        res.json(events);
    }catch(err){
        res.status(500).json({message: err.message});
    }


}; 

exports.getEventById = async (req,res)=>{
    try{
        const event= await Event.findById(req.params.id);
        if(!event){
            return res.status(404).json({message: 'Event not found'});
        }
        res.json(event);
    }catch(error){
        res.status(500).json({message: error.message});
    }
};

