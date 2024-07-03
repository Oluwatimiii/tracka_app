import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";


export const verifyUser = async () => {
    const user = await currentUser()
 
    //if there isn't any current logged in user
    if(!user) {
        return null
    }

    //if the current user is in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkUserId: user.id
        }
    })

    if(loggedInUser) {
        return loggedInUser
    }

    //create a new user if it is not in the database
    const newUser = await db.user.create({
        data: {
            clerkUserId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageSrc: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    })

    return newUser
}