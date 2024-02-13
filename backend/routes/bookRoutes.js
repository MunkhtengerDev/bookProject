const express = require("express");
const {
  createBookController,
  getBookController,
  getBookIdController,
  updateBookController,
  deleteBookController,
  getBookCommentsController,
  saveCommentController,
  saveRatingController,
  saveReplyController,
  saveReviewController,
  getBookReviewsController,
  getRatedReviewedBooksController,
  saveReviewCommentController,
  deleteCommentController
} = require("../controllers/bookController");
const { requireLogin, isAdmin, isWorker } = require("../middlewares/auth");

const router = express.Router();

router.get("/get", getBookController);
router.get("/get/:id", getBookIdController);
router.post("/create", requireLogin, isWorker, createBookController);
router.patch("/update/:id", requireLogin, isWorker, updateBookController);
router.delete("/delete/:id", requireLogin, isWorker, deleteBookController);


router.get("/get-comments/:id", requireLogin, getBookCommentsController);
router.post("/save-comment/:id", requireLogin, saveCommentController);
router.delete("/delete-comment/:id/:commentId", requireLogin, deleteCommentController)



router.post("/save-reply/:id/:commentId", requireLogin, saveReplyController);  // Add this line for saving replies



router.post("/save-rating/:id", requireLogin, saveRatingController);

router.get("/get-reviews/:id", requireLogin, getBookReviewsController);
router.post("/save-review/:id", requireLogin, saveReviewController);


router.get("/get-rated-reviewed-books/:userId", requireLogin, getRatedReviewedBooksController);

router.post("/save-review-comment/:reviewId", requireLogin, saveReviewCommentController);









module.exports = router;
