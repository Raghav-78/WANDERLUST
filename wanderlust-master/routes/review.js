const express=require('express');
const router=express.Router({mergeParams:true});
const wrapAsync=require("../utils/wrapAsync");
const ExpressError=require("../utils/ExpressError");
const Review=require("C:/Users/DELL/Desktop/Major Project/models/review");
const Listing=require("C:/Users/DELL/Desktop/Major Project/models/listings");
const {validateReview, isLoggedIn, isReviewAuthor} = require("../middleware");

const reviewController=require("../controllers/reviews")

// Reviews
// Post route
router.post("/",isLoggedIn,validateReview,wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,wrapAsync(reviewController.destroyReview));

module.exports=router;