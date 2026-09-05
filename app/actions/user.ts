"use server";
import { db } from "@/src/prisma/db";
// this is called the server actions
export async function signup(username: string, password: string) {
  // extract from the body
  //   const body = await req.json();
  //     console.log("I got the requested params", body);

  // set to the database
  try {
    await db.user.create({
      data: {
        username: username,
        password: password,
      },
    });
    return true;
  } catch (e) {
    return false;
  }
}
