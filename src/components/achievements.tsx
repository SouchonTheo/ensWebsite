import * as React from "react";
import {
  FiPackage,
  FiHome,
  FiEdit2,
  FiUsers,
  FiBarChart2
} from "react-icons/fi";
import { FaGraduationCap, FaAward, FaMedal } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { VStack, Heading, Box, Link, LinkProps } from "@chakra-ui/react";
import { TimelineItem } from "./Timeline";
import { PageSlideFade } from "./page-transitions";
import { Link as NavLink } from "react-router-dom";
import Header from "./header";

interface ExternalLinkProps extends LinkProps {
  url: string;
  linkProps?: LinkProps;
  text: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link href={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};

const InternalLink: React.FC<ExternalLinkProps> = ({
  url,
  linkProps,
  text,
  ...props
}) => {
  return (
    <Link as={NavLink} to={url} {...linkProps} {...props}>
      {text}
    </Link>
  );
};
const Achievements = () => {
  return (
    <PageSlideFade>
      <Box align="start" mb={6}>
        <Header mt={0} mb={0}>
          Achievements
        </Header>
      </Box>
      <VStack textAlign="start" align="start" mb={5}>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2022
          </Heading>
          <Box>
            <TimelineItem icon={FaGraduationCap} skipTrail>
            I will join{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://www.kuas.ac.jp/en/"
                text={"KUAS"}
                target="_blank"
              />
              {" "}in Kyoto for 1 semester.
            </TimelineItem>
            <TimelineItem icon={BsFillBriefcaseFill} skipTrail>
            I joined{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://www.mynft.com/"
                text={"MyNFT"}
                target="_blank"
              />
              {" "}for 4 months to help them as a intern blockchain fullstack developer.
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2021
          </Heading>
          <Box>
            <TimelineItem icon={BsFillBriefcaseFill} skipTrail>
            I helped{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://www.genvia.com/"
                text={"Genvia"}
                target="_blank"
              />
              {" "}during 3 months to start on a 4.0 industry with Internet of Things.
            </TimelineItem>
            <TimelineItem icon={FiUsers} skipTrail>
            I have helped people in my{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://www.enseeiht.fr/en/index.html"
                text={"school"}
                target="_blank"
              />
              {" "}succeed in their first year through courses.
            </TimelineItem>
            <TimelineItem icon={FiUsers} skipTrail>
            Having taken part in the association{" "}
              <ExternalLink
                color={"blue.200"}
                url="https://www.la-cordee.org/"
                text={"La cordée"}
                target="_blank"
              />
              {" "}to help students in difficulty.
            </TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2020
          </Heading>
          <Box>
            <TimelineItem icon={FaGraduationCap} skipTrail>Integration to the engineering school ENSEEIHT after the competitive entrance exams.</TimelineItem>
          </Box>
        </Box>
        <Box>
          <Heading fontSize="2xl" fontWeight="600" my={5}>
            2018
          </Heading>
          <Box>
            <TimelineItem icon={FaAward} skipTrail>
              Get my baccalaureate in science with{" "}
              <ExternalLink
                color={"blue.200"}
                text={"honor"}
                target="_blank"
              />
              .
            </TimelineItem>
          </Box>
        </Box>
      </VStack>
    </PageSlideFade>
  );
};

export default Achievements;
