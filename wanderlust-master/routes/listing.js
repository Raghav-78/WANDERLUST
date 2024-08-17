const express=require('express');
const router=express.Router();
const wrapAsync=require("../utils/wrapAsync");
const Listing=require("C:/Users/DELL/Desktop/Major Project/models/listings");
const {isLoggedIn,isOwner,validateListing}=require("../middleware");
const listingController=require("../controllers/listings");
const multer=require('multer');
const {storage}=require("C:\\Users\\DELL\\Desktop\\Major Project\\cloudConfig.js");
const upload=multer({storage});

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLoggedIn,upload.single('listing[image]'),validateListing,wrapAsync(listingController.createListing));

//New Route
router.get("/new",isLoggedIn,listingController.renderNewForm);

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLoggedIn,isOwner,upload.single('listing[image]'),validateListing,wrapAsync(listingController.updateListing))
    .delete(isLoggedIn,isOwner,wrapAsync(listingController.destroyListing));




// Edit Route
router.get("/:id/edit",isLoggedIn,isOwner,wrapAsync(listingController.renderEditForm));


module.exports=router;