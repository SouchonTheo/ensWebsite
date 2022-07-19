import * as React from "react";
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import placeholder from "assets/images/placeholder.png";
import { FaGraduationCap } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import {
  PageSlideFade,
  StaggerChildren,
  CardTransition
} from "./page-transitions";
import { MotionBox } from "./motion";
import { companies, institutes } from "data/data";
import Header from "./header";
import ASSO from "../assets/images/association/photoassos.png"

import YoutubeEmbed from "./YoutubeEmbed";

const TURQUOISE = "#06b6d4";


const Association = () => {
    const { colorMode } = useColorMode();
    return (
      <PageSlideFade>
        <img src={ ASSO }/>
        <YoutubeEmbed embedId="sQPT6fycbvA" />
      </PageSlideFade>
    );
};


export default Association;