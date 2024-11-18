import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import {
  CategoryCardsWrapper,
  LikesCommentsDiagram,
  MessagesTable,
  SideBox,
  TableBox,
  TopRatedRecipes,
  UsersChart,
  RecipeSatisticsPieChart,
  RecipeTable,
  UsersTable,
} from "@/components";
import { messagesData } from "./messages/page";


const AdminPage = () => {
  return (
    <>
      {/* content */}
      <div className="w-full  flex flex-col xl:flex-row gap-4">
        {/*  main data */}
        <div className=" basis-2/3  ">
          {/* Top Category cards */}
          <CategoryCardsWrapper />
          {/* Likes and comments per category - categories */}
          <div className="flex items-center justify-center mb-4 ">
            {/* diagram */}
            <LikesCommentsDiagram />
          </div>
          {/* recipe table */}
          <TableBox title="Recipes">
            {/* table of recipe component */}
            <RecipeTable />
          </TableBox>
        </div>
        {/* right side */}
        <div className=" basis-1/3 flex flex-col gap-4   ">
          {/* message box */}
          <SideBox title="Messages" link="View all" height={350}>
            <ScrollArea className="h-[280px] whitespace-nowrap">
              <MessagesTable header={true} data={messagesData} />
              <ScrollBar orientation="horizontal" />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </SideBox>
          {/* Statistics box */}
          <SideBox title="Recipe statistics" height={360}>
            <div className="flex items-center justify-center">
              <RecipeSatisticsPieChart />
            </div>
          </SideBox>
          {/* Top rated box */}
          <SideBox title="Top rated recipes" link="View all" height={500}>
            <TopRatedRecipes />
          </SideBox>
        </div>
      </div>
      {/* user section */}
      <section className="flex flex-col gap-4 lg:flex-row items-center justify-between mt-4">
        <UsersChart />
        <TableBox title="Users">
          <UsersTable />
        </TableBox>
      </section>
    </>
  );
};

export default AdminPage;
