import {
  Image,
  Container,
  Box,
  Heading,
  useColorModeValue,
  Button,
  List,
  Divider,
  Link,
  ListItem,
} from "@chakra-ui/react";
import Section from "../components/section";
import Paragraph from "../components/paragraph";
import NextLink from "next/link";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { BioSection, BioYear } from "../components/bio";
import Footer from "../components/footer";

const Page = () => {
  return (
    <Container>
      <Box
        borderRadius="lg"
        bg="#313134"
        p={3}
        color="white"
        align="center"
        mb={6}
      >
        Hello, I&apos;m a frontend-developer based in Russia!
      </Box>

      <Box display={{ md: "flex" }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Egor Mayer
          </Heading>
          <p>Digital Person (Developer / Designer / Video Editor)</p>
        </Box>
      </Box>

      <Box
        flexShrink={0}
        mt={{ base: 4, md: 0 }}
        ml={{ md: 6 }}
        textAlign="center"
      >
        <Box
          borderColor="whiteAlpha.800"
          borderWidth={2}
          borderStyle="solid"
          w="200px"
          h="200px"
          display="inline-block"
          mt={5}
          borderRadius="full"
          overflow="hidden"
        >
          <Image
            src="/images/mayer.jpg"
            alt="Profile image"
            width="200"
            height="250"
          />
        </Box>
      </Box>
      <Section delay={0.5}>
        <Heading as="h3" variant="section-title">
          Work
        </Heading>
        <Paragraph>
          My experience is more than 4 years in the field of frontend
          development! During this time, I managed to master such large
          libraries and frameworks as: ReactJS, NextJS, Nest, Chakra-UI, Framer
          Motion, Bootstrap, JSX/TSX structure! About 5 months ago I meet with
          NeoVim and keep studing it for nowadays! I am also professionally
          engaged in the processing and editing of videos for various YouTube
          channels!
        </Paragraph>

        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button
              rightIcon={<ChevronRightIcon />}
              bg="#81E6D9"
              colorScheme="teal"
              color="black"
            >
              My Portfolio
            </Button>
          </NextLink>
        </Box>
      </Section>

      <Section delay={0.2}>
        <Heading as="h3" variant="section-title">
          Bio
        </Heading>
        <BioSection>
          <BioYear>2008</BioYear>
          Born in Kaliningrad, Russia.
        </BioSection>
        <BioSection>
          <BioYear>2025</BioYear>
          Finished the Cifra academy about IT teclonogies. Also studied in TOP,
          the same place as Cifra.
        </BioSection>

        <BioSection>
          <BioYear>2021-nowadays</BioYear>
          Keep progressing in IT tecnologies and make more and more successes!
        </BioSection>
      </Section>

      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          Skills
        </Heading>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          HTML, CSS
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Java Srcipt, Type Script
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          ReactJS, NextJS
        </BioSection>

        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          NestJS
        </BioSection>

        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Chakra-UI
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          BootStrap
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Framer Motion
        </BioSection>

        <Divider my={5} />
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Final Cut Pro X
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Adobe Premiere Pro
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Adobe After Effects
        </BioSection>
        <BioSection>
          <BioYear>
            <CheckCircleIcon />
          </BioYear>
          Photoshop
        </BioSection>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          I ♥
        </Heading>
        <Paragraph>
          Music, Playing Basketball, Photography, Thai Boxing
        </Paragraph>
      </Section>
      <Section delay={0.3}>
        <Heading as="h3" variant="section-title">
          On the web
        </Heading>
        <List>
          <ListItem>
            <Link href="https://github.com/monokkai" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                GitHub: @monokkai
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href="https://vk.com/whitequiet129" target="_blank">
              <Button variant="ghost" colorScheme="teal">
                VK: @whitequiet129
              </Button>
            </Link>
          </ListItem>
        </List>
      </Section>
      <Footer />
    </Container>
  );
};

export default Page;
