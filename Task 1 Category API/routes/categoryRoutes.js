const express = require("express");
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoryController");

const router = express.Router();

router.post("/Create_Category", createCategory);
router.get("/GetAllCategories", getAllCategories);
router.get("/GetCategoryByBId/:id", getCategoryById);
router.put("/Update_Category/:id", updateCategory);
router.delete("/DeleteCategoryByBId/:id", deleteCategory);

module.exports = router;
