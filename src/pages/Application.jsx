import styled from "styled-components";
import { motion } from "framer-motion";

const ImageContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  transition: transform 0.3s;
`;
const ImageItem = styled.li`
  flex: 0 0 calc(33.33% - 50px);
  margin: 25px;
  padding: 50px;
`;

function Application() {
  return (
    <>
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.3,
          y: { type: "spring", stiffness: 60 },
          opacity: { duration: 0.2 },
          ease: "easeIn",
          duration: 1,
        }}
      >
        Applications
      </motion.h1>

      <ImageContainer>
        <ImageItem
          as={motion.li}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px, 0px, 8px rgb(255,255,255)",
          }}
        >
          <Image src="ap1.jpg" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px, 0px, 8px rgb(255,255,255)",
          }}
        >
          <Image src="ap2.jpg" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px, 0px, 8px rgb(255,255,255)",
          }}
        >
          <Image src="ap3.jpg" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px, 0px, 8px rgb(255,255,255)",
          }}
        >
          <Image src="ap3.jpg" alt="Application" />
        </ImageItem>

        <ImageItem
          as={motion.li}
          whileHover={{
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px, 0px, 8px rgb(255,255,255)",
          }}
        >
          <Image src="ap3.jpg" alt="Application" />
        </ImageItem>
      </ImageContainer>
    </>
  );
}

export default Application;
