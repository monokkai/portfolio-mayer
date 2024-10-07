import {
  Container,
  Heading,
  SimpleGrid,
  Image,
  Divider,
  Text,
  Link,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import Footer from "../components/footer";
import styled from "@emotion/styled";

const WorkBox = styled.span`
  &:hover img {
    transform: scale(1.05);
    transition: all 0.3s ease-in-out;
  }
`;

const Works = () => {
  return (
    <Layout title="Works">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid>
          <WorkBox>
            <Section>
              <Link href="https://github.com/monokkai/Bakery-Site-HTML">
                <Image src="/images/bakery-site.png" borderRadius={10} />
              </Link>
              <Heading as="h5" align="center" mt={3}>
                Bakery Site
              </Heading>
              <Text align="center">
                The site was created for the bakery in Kaliningrad! There you
                can find a tasty bread:)
              </Text>
            </Section>
          </WorkBox>
          <WorkBox>
            <Section>
              <Link href="https://github.com/monokkai/Traveling-Site">
                <Image src="/images/travel-site.png" borderRadius={10} />
              </Link>
              <Heading as="h5" align="center" mt={3}>
                Traveling Site
              </Heading>
              <Text align="center">
                The travel site was made for myself and it does not have any
                capitalisation at all! Thats just the hardest work for me about
                2-3 years ago)
              </Text>
            </Section>
          </WorkBox>
        </SimpleGrid>

        <Divider my={5} />
        <Heading as="h3" fontSize={20} mb={4}>
          Old Works
        </Heading>
        <WorkBox>
          <Section>
            <Link>
              <Image src="/images/cs-console.png" borderRadius={10} />
            </Link>
            <Heading as="h5" align="center" mt={3}>
              C# File Manager in console
            </Heading>
            <Text align="center">
              That project was built by myself 2 years ago and it has not bad
              quantity of tips like a real one! Try it!
            </Text>
          </Section>
        </WorkBox>

        <SimpleGrid>
          <WorkBox>
            <Section>
              <Link href="https://github.com/monokkai/Old-Portfolio-Site">
                <Image src="/images/old-portfolio.png" borderRadius={10} />
              </Link>
              <Heading as="h5" align="center" mt={3}>
                Portfolio Site V1
              </Heading>
              <Text align="center">
                The first one Portfolio Site was built using HTML, CSS, JS.
              </Text>
            </Section>
          </WorkBox>
        </SimpleGrid>
      </Container>
      <Footer />
    </Layout>
  );
};

export default Works;
export { getServerSideProps } from "../components/chakra";
