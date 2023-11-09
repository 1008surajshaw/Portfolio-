import sc from "../../assets/projects/Screenshot 2023-10-26 083538.png"
import chair from "../../assets/projects/Screenshot 2023-10-25 133743.png"
import tic from "../../assets/projects/Screenshot 2023-10-25 133459.png"
import pg from "../../assets/projects/Screenshot 2023-10-25 133942.png"
import gif from "../../assets/projects/Screenshot 2023-10-26 082958.png"
import wp from "../../assets/projects/Screenshot 2023-10-25 134426.png"
import sce from "../../assets/projects/Screenshot 2023-10-26 093636.png"
import Work from "./Work"
import ht from "../../assets/stack/HTML.png"
import tail from "../../assets/stack/Tailwind.png"
import mongo from "../../assets/stack/MongoDB.svg"
import j from "../../assets/stack/Javascript.svg"
import exp from "../../assets/stack/Express.png"
import nj from "../../assets/stack/NodeJs.svg"
import rt from "../../assets/stack/React.png"
import cs from "../../assets/stack/CSS.png"
import git from "../../assets/stack/Github.svg"
import redx from "../../assets/stack/Redux.svg"
import vsl from "../../assets/stack/Vercel.svg"
import mui from "../../assets/stack/MaterialUI.svg"
import cjs from "../../assets/stack/ChartJs.svg"
import ts from "../../assets/stack/Typescript.svg"
import {motion} from "framer-motion"
const Project = () => {

  const project = [
    {
      name:"chair",
      image:chair,
      url:"https://3-d-chair-ui.vercel.app/",
      stacks:[ht,cs,git,vsl]
      
      
    },
    {
      name:"WeatherApp",
      image:sc,
      url:"https://wether-ncg861fzc-1008surajshaw.vercel.app",
      stacks:[git, vsl,j,tail]

    },
    
    {
      name:"tic-tac-toe",
      image:pg,
      url:"https://3-d-chair-ui.vercel.app/",
      stacks:[git, vsl,j,tail]
    },
    {
      name:"Random_Gif",
      image:gif,
      url:"https://random-gif-eight.vercel.app/",
      stacks:[git, vsl,j,tail,tail,mui]
    },
    {
      name:"password_generator",
      image:wp,
      url:"https://password-generator-mu-one.vercel.app/",
      stacks:[git, vsl,j,tail,rt]
    },
    {
      name:"shopingCart",
      image:tic,
      url:"https://password-generator-mu-one.vercel.app/",
      stacks:[git, vsl,j,tail,rt,redx]
    },
    {
      name:"scholarSync",
      image:sce,
      url:"https://scholar-ync.vercel.app/",
      stacks:[git,vsl,exp,nj,mongo,rt,redx,cjs,ts]
    }

  ]
  return (
    <div className="w-10/12 text-richblack-800 mt-8 flex flex-col justify-center ">
    <motion.div
      initial={{ x: "100vw" }} // Initial position outside the viewport from the right
      animate={{ x: 0 }} // Animation to move to position (0) from right
      transition={{ type: "spring", duration: 10, stiffness: 500 }}
    >
      <p className="text-7xl">Project</p>
    </motion.div>       
        
        {project.map((pro, index) => (
          <div key={index} className={`p-5 ${5 % 2 ==0 ? "pl-0" :"pr-0"}`}  >
            <Work pro={pro} index={index} />
          </div>
        ))}
        
    
    </div>
  );
}

export default Project