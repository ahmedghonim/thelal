import prisma from "@/lib/prisma";
import HomeForm from "@/view/forms/home";

import React from "react";

async function Dashboard() {
  const values = await prisma.home.findFirst();
  return <HomeForm values={values} />;
}

export default Dashboard;
