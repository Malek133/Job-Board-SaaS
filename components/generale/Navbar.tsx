import { ModeToggle } from "../ModeToggel"
import { Button } from "../ui/button"


const Navbar = () => {
  return (
    <div className="flex justify-around items-center my-4">
      <p>Navbar</p>
      <div className="flex justify-center items-center gap-4">
    
         <Button>Log-in</Button>

         <ModeToggle /> 
      </div>
      
    </div>
  )
}

export default Navbar
