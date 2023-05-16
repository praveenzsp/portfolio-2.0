import React from "react";
import { Navbar , css} from "@nextui-org/react";
import { useRouter } from "next/router";

function NavbarComponent() {
  const router=useRouter()
  return (
    <Navbar variant='floating' isBordered>
    <Navbar.Toggle showIn='xs'/>
      <Navbar.Brand onClick={e=>router.push('/')} className="cursor-pointer">
        <h2 className="text-[30px] font-special font-bold mx-5 lg:text-[50px]">
          <span className="text-primary font-special">Sai</span> Praveen
        </h2>
      </Navbar.Brand>

      <Navbar.Content hideIn='xs' enableCursorHighlight isCursorHighlightRounded>
        <Navbar.Link href="#about" css={{fontFamily:'poppins', fontWeight:"bolder", marginRight:'$3xl','&:hover':{color:'#00FF75'}}}>
          ABOUT
        </Navbar.Link>
        <Navbar.Link href="#skills" css={{fontFamily:'poppins', fontWeight:"bolder", marginRight:'$3xl','&:hover':{color:'#00FF75'}}}>
          SKILLS
        </Navbar.Link>
        <Navbar.Link href="#projects" css={{fontFamily:'poppins', fontWeight:"bolder", marginRight:'$3xl','&:hover':{color:'#00FF75'}}}>
          PROJECTS
        </Navbar.Link>
        <Navbar.Link href="#work" css={{fontFamily:'poppins', fontWeight:"bolder", marginRight:'$3xl','&:hover':{color:'#00FF75'}}}>
          EXPERIENCE
        </Navbar.Link>
        <Navbar.Link href="#contact" css={{fontFamily:'poppins', fontWeight:"bolder", marginRight:'$3xl','&:hover':{color:'#00FF75'}}}>
          CONTACT
        </Navbar.Link>


      </Navbar.Content>

      <Navbar.Collapse>
        <Navbar.CollapseItem><a href="#about" className="font-sora font-semibold lg:mx-10">ABOUT</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#skills" className="font-sora font-semibold lg:mx-10">SKILLS</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#projects" className="font-sora font-semibold lg:mx-10">PROJECTS</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#work" className="font-sora font-semibold lg:mx-10">WORK</a></Navbar.CollapseItem>
        <Navbar.CollapseItem><a href="#contact" className="font-sora font-semibold lg:mx-10">CONTACT</a></Navbar.CollapseItem>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;