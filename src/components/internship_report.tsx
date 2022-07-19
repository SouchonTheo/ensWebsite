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

const TURQUOISE = "#06b6d4";


const Internship_Report = () => {
    const { colorMode } = useColorMode();
    return (
      <PageSlideFade>
        <h1>First year Internship Report at Genvia</h1>
        <object data="https://storageapi.fleek.co/b67d5539-4047-4d63-9622-7a18b5f5681a-bucket/rds.pdf" type="application/pdf" width="800" height="1185">
            <div>No PDF viewer available</div>
        </object>
        <object data="https://storageapi.fleek.co/b67d5539-4047-4d63-9622-7a18b5f5681a-bucket/rdslink.pdf" type="application/pdf" width="800" height="1185">
            <div>No PDF viewer available</div>
        </object>
      </PageSlideFade>
    );
};

export default Internship_Report;