/* This file is used to handle server actions. I used server actions for simple data fetching operations */
"use server"

import Category from "@/models/Category" 
import Recipe from "@/models/Recipe"
import { connectToDB } from "./dbConnenct"

export const getCategories = async()=>{
    try {
        await connectToDB()  // Connect to your MongoDB database
        const categories = await Category.find()
        return categories
    } catch (error) {
        console.log(error)
        throw new Error("Coudn't fetch categories from DB"+error.message)
    }
}

export const getFeaturedRecipe = async () => {
    try {
      await connectToDB();
      const featuredRecipe = await Recipe.find({ isFeatured: true });
      return featuredRecipe;
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
  