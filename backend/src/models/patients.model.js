// patients-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
    const mongooseClient = app.get('mongooseClient');
    const { Schema } = mongooseClient;
    const patients = new Schema({
        name: {
            first: {
                type: String,
                required: true
            },
            last: {
                type: String,
                required: true
            },
            middle: {
                type: String,
                required: false
            }
        },
        gender: {
            type: String,
            required: true
        },
        birthDate: { 
            type: Date,
            required: true
        },
        contactNo: {
            type: String,
            required: false
        },
        address: {
            type: String,
            required: false
        },
        diagnostics: [
            {
                findings: String,
                treatment: String,
                createdAt: { type: Date, default: Date.now },
                updatedAt: { type: Date, default: Date.now }
            }
        ],
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now }
    });

    return mongooseClient.model('patients', patients);
};
