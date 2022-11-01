const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/e-recrutement'


const AnnonceSchema = mongoose.Schema({
    name : String,
    description: String,
    category : String

})

const Annonce = mongoose.model('annonce',AnnonceSchema)

exports.getAllAnnonces = () => {
    // connect to database
    // get products
    // disconnect

    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
            return Annonce.find({})
        }).then(annonces =>{
            mongoose.disconnect()
            resolve(annonces)
            }).catch(err => reject(err))
    })

}

exports.getAnnoncesByCategory = (category) => {
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
            return Annonce.find({category : category})
        }).then(annonces =>{
            mongoose.disconnect()
            resolve(annonces)
            }).catch(err => reject(err))
    })

}


exports.getAnnoncesById = (id) => {
    return new Promise((resolve,reject)=>{
        mongoose.connect(DB_URL,{ useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
            return Annonce.findById(id)
        }).then(annonce =>{
            mongoose.disconnect()
            resolve(annonce)
            }).catch(err => reject(err))
    })

}

exports.addNewAnnonce = data => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(DB_URL)
            .then(() => {
                let newAnnonce = new Annonce(data);
                return newAnnonce.save();
            })
            .then(annonces => {
                mongoose.disconnect();
                resolve(annonces);
            })
            .catch(err => {
                mongoose.disconnect();
                reject(err);
            });
    });
};