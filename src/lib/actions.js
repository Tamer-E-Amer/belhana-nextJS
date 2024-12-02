/* This file is used to handle server actions. I used server actions for simple data fetching operations */
"use server";

import Category from "@/models/Category";
import Recipe from "@/models/Recipe";
import { connectToDB } from "./dbConnenct";

export const getCategories = async () => {
  try {
    await connectToDB(); 
    const categories = await Category.find();
    // Serialization of passed data
    const serializedCategories = categories.map((category) => ({
      ...category.toObject(), 
      _id: category._id.toString(), 
    }));

    return serializedCategories;
  } catch (error) {
    console.log(error);
    throw new Error("Coudn't fetch categories from DB" + error.message);
  }
};

export const getFeaturedRecipe = async () => {
  try {
    await connectToDB();
    const featuredRecipe = await Recipe.find({ isFeatured: true });
    const serializedFeaturedRecipes = featuredRecipe.map((recipe) => ({
      ...recipe.toObject(),
      _id: recipe._id.toString(), 
      likedBy: recipe.likedBy?.map((user) => user._id.toString()), 
      category: recipe.category.map((cat) => cat._id.toString()), 
      comments: recipe.comments?.map((comment) => comment._id.toString()), 
    }));

    return serializedFeaturedRecipes;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const getCategory = async (slug) => {
  try {
    await connectToDB();
    const category = await Category.findOne({ slug });
    return category;
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};

export const getAllRecipe = async (category) => {
  try {
    await connectToDB();
    if (category) {
      const allRecipes = await Recipe.find({ category });
      return allRecipes;
    } else {
      const allRecipes = await Recipe.find();
      return allRecipes;
    }
  } catch (error) {
    console.log(error);
    throw Error(error);
  }
};
