"use client";

import { Recipe } from "@/app/api/actions/actions";
import { WithId } from "mongodb";
import { createContext, useEffect, useState } from "react";

interface RecipeWithType extends Recipe {
  type: string;
}

type DataContextType = {
  dbData: WithId<RecipeWithType>[];
  setData: React.Dispatch<React.SetStateAction<WithId<RecipeWithType>[]>>;
};

export const DataContext = createContext<DataContextType>({
  dbData: [],
  setData: () => {},
});

export function RecipesDataProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [dbData, setData] = useState<WithId<RecipeWithType>[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("api/notes", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setData(data);
      } else {
        setData([]);
      }
    }

    getData();
  }, []);

  return (
    <DataContext.Provider value={{ dbData, setData }}>
      {children}
    </DataContext.Provider>
  );
}
