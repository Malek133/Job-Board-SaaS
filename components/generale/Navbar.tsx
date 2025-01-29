import { auth } from "@/app/utils/auth";
import { ModeToggle } from "../ModeToggel"
import { Button } from "../ui/button"
import Link from "next/link";
import { UserDropdown } from "./UserDropdown";


const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex justify-around items-center my-4">
      <p>Navbar</p>
      <div className=" flex justify-center items-center gap-4">

      {session?.user ? (

     <UserDropdown
           email={session.user.email as string}
         name={session.user.name as string}
        image={session.user.image as string}
           />

        // <form action={
        //   async () =>{
        //     "use server"
        //     await signOut({ redirectTo: "/",})
        //   }
        // }>
        //   <Button>
        //     Logout
        //   </Button>
        // </form>
          
        ) : (
          <Link
            href="/login"
          >
            <Button>Log-in</Button>
          </Link>
        )}
    
         

         <ModeToggle /> 
      </div>
      
    </div>
  )
}

export default Navbar
