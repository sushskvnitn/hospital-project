const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const DoctorSchema = new mongoose.Schema({
      name: {
            type: String,
            required: true,
      },
      email: {
            type: String,
            required: true,
            unique: true,
      },
      password: {
            type: String,
            required: true,
      },
      cpassword: {
            type: String,
            required: true,
      }
});

const GallerySchema = new mongoose.Schema({
      caption: {
            type: String ,
            required: true,
      },
      photo: {
            data: Buffer,
            contentType: String,
      },
      date: {
            type: Date,
            default: Date.now,
            required: true,
      }
});



// Hashing the password
DoctorSchema.pre("save", async function (next) {
      if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 12);
            this.cpassword = await bcrypt.hash(this.cpassword, 12);
      }
      next();
});

const Doctor = mongoose.model("DOCTOR", DoctorSchema);
const Gallery = mongoose.model("GALLERY", GallerySchema);

module.exports = {
      Doctor,
      Gallery
};

