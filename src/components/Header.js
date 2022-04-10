import {
  Flex,
  Link,
  Heading,
  Box,
  Icon,
  Container,
  useColorMode
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import changeTheme from "../actions/colorActions";

function DarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useDispatch();

  const theme = useSelector((state) => state.colorMode);

  const changeColor = () => {
    toggleColorMode();
    dispatch(changeTheme(colorMode));
  };
  return (
    <>
      {colorMode === "light" ? (
        <Icon onClick={changeColor} as={BsFillMoonFill} w="4" h="4" />
      ) : (
        <Icon onClick={changeColor} as={BsFillSunFill} w="4" h="4" />
      )}
    </>
  );
}

const Header = () => {
  return (
    <Flex
      zIndex="sticky"
      as="header"
      shadow="md"
      justifyContent="space-between"
      wrap="wrap"
      p="4"
      w="100%"
      top="0"
      position="fixed"
      alignItems="center"
      backdropFilter="saturate(180%) blur(20px)"
    >
      <Container maxWidth="container.2xl">
        <Flex
          direction={{ lg: "row", md: "row", base: "column" }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Flex alignItems="center">
            <Link as={RouterLink} to="/" _hover={{ textDecor: "none" }}>
              <Heading
                as="h2"
                color="blue.500"
                fontWeight="bold"
                size="lg"
                fontSize="2.2rem"
              >
                Fs.
              </Heading>
            </Link>
          </Flex>

          <Flex
            alignItems="center"
            gap="6"
            justifyContent="space-evenly"
            fontWeight="bold"
            fontSize="1.4rem"
            color="blue.500"
          >
            <Link to="/about" as={RouterLink} _hover={{ textDecor: "none" }}>
              About
            </Link>
            <Link to="/projects" as={RouterLink} _hover={{ textDecor: "none" }}>
              Projects
            </Link>
            <Link to="/resume" as={RouterLink} _hover={{ textDecor: "none" }}>
              Resume
            </Link>
            <DarkMode />
          </Flex>

          <Box display={{ lg: "block", md: "none", base: "none" }}>
            <Flex>
              <Link
                href="https://gitlab.com/fs288080"
                target="_blank"
                color="orange.500"
              >
                <Icon as={FaGitlab} w="5" h="5" mx="2" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/faisal-shaikh-98b8a61ab/"
                color="blue.700"
                target="_blank"
              >
                <Icon as={BsLinkedin} w="5" h="5" mx="2" />
              </Link>
              <Link href="/" color="brown" target="_blank">
                <Icon as={BsInstagram} w="5" h="5" mx="2" />
              </Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Header;
