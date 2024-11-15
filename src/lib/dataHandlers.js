import Category from "@/models/Category";
import { connectToDB } from "@/lib/dbConnenct";
import Recipe from "@/models/Recipe";

export const getCategories = async () => {
  try {
    await connectToDB();
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

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

export const getRecipe = async (slug) => {
  try {
    await connectToDB(); // Ensure the database connection is established

    const recipe = await Recipe.aggregate([
      {
        $match: { slug }, // Match the recipe by slug
      },
      {
        $lookup: {
          from: "categories", // The collection to join with
          localField: "category", // Field in Recipe model (make sure it's the correct field name)
          foreignField: "_id", // Field in Category model
          as: "categoryDetails", // Alias for the joined data
        },
      },
      {
        $unwind: {
          path: "$categoryDetails", // Unwind the categoryDetails array
          preserveNullAndEmptyArrays: true, // Preserve documents without category details
        },
      },
      {
        $project: {
          title: 1,
          description: 1,
          slug: 1,
          coverImage: 1,
          likes: 1,
          likedBy: 1,
          pathToFBPage: 1,
          suitableToDieters: 1,
          avgTimeTobeFinished: 1,
          isRamadanRecipe: 1,
          isFried: 1,
          isEconomic: 1,
          hasAvideo: 1,
          videoLink: 1,
          isInGermany: 1,
          isFeatured: 1,
          isQuickPrepared: 1,
          comments: 1,
          categoryTitle: "$categoryDetails.title", // Adjusted field reference
        },
      },
    ]);

    if (!recipe.length) {
      throw new Error("Recipe not found");
    }

    return recipe[0]; // Return the first recipe
  } catch (error) {
    console.error("Error in getRecipe:", error);
    throw error;
  }
};
