const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Product = require("../models/product");
const Category = require("../models/category");
const mongoose = require("mongoose");
const faker = require("faker");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  faker.seed(0);

 
  const pop_titles = [
    "Ariana Grande - One Last Time",
    "Ariana Grande - Thank You Next",
    "Shawn Mendes - In My Blood",
    "Meghan Trainor - All About That Bass"
  ];
  const pop_imgs = [
    "https://upload.wikimedia.org/wikipedia/en/7/76/Ariana_Grande_One_Last_Time_Cover.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWsgbhmqopP17Q5ZZhrmLKyh9Dorz7la91lA&usqp=CAU",
    "https://upload.wikimedia.org/wikipedia/en/a/ae/Shawn_Mendes_In_My_Blood.png",
    "https://upload.wikimedia.org/wikipedia/en/2/24/Meghan_Trainor_-_All_About_That_Bass_%28Official_Single_Cover%29.png"
  ];


  const electronic_titles = [
    "Carried Away - Madison Beer",
    "One in a Million - Phantoms",
    "Gravity - Rhea Melvin"
  ];

  const electronic_imgs = [
    "https://i1.sndcdn.com/artworks-uDLC0eF9vViA-0-t500x500.jpg",
    "https://images.genius.com/3d32d8fc6f9f61618f26a4deb1cab367.1000x1000x1.jpg",
    "https://geo-media.beatport.com/image_size/1400x1400/338ad505-1dbd-4f5c-a480-420068fb1adb.jpg"
  ];


  const melody_titles = [
    "Adele - Hello",
    "Adele - Rolling in the Deep",
    "Celine Dion - All By Myself",
    "Celine Dion - My Heart Will Go On"
  ];

  const melody_imgs = [
    "https://static.onecms.io/wp-content/uploads/sites/20/2015/10/adele-600-12.jpg",
    "https://upload.wikimedia.org/wikipedia/en/7/74/Adele_-_Rolling_in_the_Deep.png",
    "https://is3-ssl.mzstatic.com/image/thumb/Music/3a/4e/ff/mzi.eciahqkd.jpg/400x400cc.jpg",
    "https://i1.sndcdn.com/artworks-000218466605-c3bowx-t500x500.jpg"
  ];


  const rb_titles = [
    "Formation - Beyonce",
    "That's What I Like - Bruno Mars"
  ];
  const rb_imgs = [
    "https://upload.wikimedia.org/wikipedia/en/7/72/Beyonce_-_Formation.png",
    "https://upload.wikimedia.org/wikipedia/en/f/f4/That%27s_What_I_Like_Remixes.jpg"
  ];


  const miscellaneous_titles = [
    "Christina Perri - A Thousand Years",
    "Adele - Skyfall",
    "Natalie Taylor - Surrender"
  ];
  const miscellaneous_imgs = [
    "https://upload.wikimedia.org/wikipedia/en/8/8f/AThousand_Years.jpg",
    "https://upload.wikimedia.org/wikipedia/en/4/45/Skyfall_cover.png",
    "https://pbs.twimg.com/media/EYeATWKWoAEtzkK.jpg"
  ];

  
  async function seedProducts(titlesArr, imgsArr, categStr) {
    try {
      const categ = await Category.findOne({ title: categStr });
      for (let i = 0; i < titlesArr.length; i++) {
        let prod = new Product({
          productCode: faker.helpers.replaceSymbolWithNumber("####-##########"),
          title: titlesArr[i],
          imagePath: imgsArr[i],
          description: faker.lorem.paragraph(),
          price: faker.random.number({ min: 10, max: 50 }),
          manufacturer: faker.company.companyName(0),
          available: true,
          category: categ._id,
        });
        await prod.save();
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }

  await seedProducts(pop_titles, pop_imgs, "Pop");
  await seedProducts(electronic_titles, electronic_imgs, "Electronic");
  await seedProducts(melody_titles, melody_imgs, "Melody");
  await seedProducts(rb_titles, rb_imgs, "RB");
  await seedProducts(miscellaneous_titles, miscellaneous_imgs, "Miscellaneous");
 
  await closeDB();
}

seedDB();
