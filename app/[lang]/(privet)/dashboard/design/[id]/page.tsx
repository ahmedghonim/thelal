import { getAllCategories, getDesign } from "@/actions/design";
import DesignForm from "@/view/forms/design";

import React from "react";

async function DesignF({ params: { id } }: { params: { id: string } }) {
  const values = id === "new" ? {} : await getDesign(+id);
  const category = (await getAllCategories()) as any;
  return <DesignForm values={values} category={category} />;
}

export default DesignF;
