import {ECELL_LOGO} from "../../Utils/images";
import {Link, useLocation, useNavigate} from "react-router-dom";
import Header2021 from "../../pages/Esummit2021/components/Header";
import {Box, Button, HStack, IconButton, Image, Spacer} from "@chakra-ui/react";
import {navs, socials} from "./data";
import Headroom from "react-headroom";
import {useEffect, useState} from "react";

export default function Header() {
  const {pathname} = useLocation();

  if (pathname.includes("esummit")) {
    return <Header2021/>;
  } else {
    return <NormalHeader/>;
  }
}

export function NormalHeader() {
  const {pathname} = useLocation();
  const [headerBg, setHeaderBg] = useState("transparent");

  function listener() {
    if (window.scrollY > 20) {
      setHeaderBg("black");
    } else {
      setHeaderBg("transparent");
    }
  }

  useEffect(() => {
    if (pathname !== "/") {
      setHeaderBg("black");
      return;
    }
    setHeaderBg("transparent");
    if (pathname === "/") window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, [pathname]);

  return (
    <Headroom>
      <Box bg={headerBg} color="white" position="fixed" width="100%" p={2} px={4}>
        <HStack justify="space-between">
          <Image src={ECELL_LOGO} width="40px"/>
          <Spacer/>
          {navs.slice(0, 2).map((nav, i) => {
            return (
              <Nav key={i} nav={nav}/>
            );
          })}
          {navs.slice(2, navs.length).map((nav, i) => {
            return (
              <Nav key={i} nav={nav}/>
            );
          })}
          <Spacer/>
          <Socials/>
        </HStack>
      </Box>
    </Headroom>
  );
}

export function Socials({spaced = false}) {
  return socials.map((social, i) => {
    return (
      <IconButton
        key={i}
        icon={<social.icon/>}
        borderRadius="100%"
        color={social.color}
        aria-label={social.name}
        mr={spaced ? 2 : 0}
      />
    );
  });
}

function Nav({nav}) {
  const navigate = useNavigate();

  function redirect(e) {
    navigate(nav[1]);
  }

  return (
    <Button
      fontSize="lg"
      _hover={{bg: "rgba(0, 0, 0, 0.3)"}}
      _active={{bg: "rgba(0, 0, 0, 0.8)"}}
      variant="ghost"
      onClick={redirect}
    >
      {nav[0]}
    </Button>
  );
}