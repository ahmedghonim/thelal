import { getAllCategories, getBuild } from "@/actions/build";
import BuildForm from "@/view/forms/build";

import React from "react";

async function Dashboard({ params: { id } }: { params: { id: string } }) {
  const values = id === "new" ? {} : await getBuild(+id);
  const category = (await getAllCategories()) as any;
  return <BuildForm values={values} category={category} />;
}

export default Dashboard;
