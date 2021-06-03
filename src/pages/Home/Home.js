import {
  HomeContainer,
  LogoContainer,
  Logo,
  HeadingContainer,
  Heading,
  SubHeading,
  Hero,
  GetInTouch,
  SpecialText,
  Line,
  List,
  Item,
} from "./home.styles";
import logo from "../../img/logo.png";
import { motion } from "framer-motion";
import { animationOne, transition } from "../../animation/index";
import Paragraph from "../../components/Text/Paragraph";
import ProjectThumbnail from "../../components/ProjectThumbnail/ProjectThumbnail";
import Footer from "../../components/Footer/Footer";
import HeadingOne from "../../components/Text/HeadingOne";
import HeadingTwo from "../../components/Text/HeadingTwo";
import HeadingThree from "../../components/Text/HeadingThree";

const Home = ({ isMobile, projects, about }) => {
  const { intro, desc, skills } = about;

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animationOne}
      transition={transition}
    >
      <HomeContainer>
        <Hero isMobile={isMobile}>
          {isMobile ? (
            <LogoContainer to="/">
              <Logo src={logo} alt="logo"></Logo>
            </LogoContainer>
          ) : null}
          <HeadingContainer>
            <Heading>Habibur Rahman</Heading>
            <SubHeading>Designer + Developer</SubHeading>
          </HeadingContainer>
        </Hero>
        <HeadingOne text={"Portfolio"} style={{ marginTop: "2.5rem" }} />
        <Paragraph
          text={
            "I like to stay busy and always have a project in the works. Take a look at some of the applications, articles, and companies I've dedicated my time to."
          }
          style={{ marginBottom: "2rem" }}
        />
        {projects.map((project, i) => (
          <ProjectThumbnail key={i} {...project} />
        ))}
        <Line />
        <HeadingOne text={"About"} style={{ marginTop: "2rem" }} />
        <HeadingThree text={intro} />
        <Paragraph text={desc} style={{ marginBottom: "1.5rem" }} />
        <HeadingThree text={"Skill"} />
        {/* <ListItem listItems={skills} style={} /> */}
        {skills && (
          <List style={{ marginBottom: "3rem" }}>
            {skills.map((skill, i) => (
              <Item key={i}>{skill}</Item>
            ))}
          </List>
        )}
      </HomeContainer>
      <GetInTouch>
        <HeadingTwo
          text={"Interested to work with me?"}
          style={{
            lineHeight: "90%",
            letterSpacing: "0.5px",
          }}
        />
        <SpecialText to="/contact">Get in touch</SpecialText>
      </GetInTouch>
      <Footer
        style={{
          background: "var(--bgTwo)",
          boxShadow:
            "50vw 0 0 var(--bgTwo), -50vw 0 0 var(--bgTwo), 0 0 0 var(--bgTwo)",
        }}
        isMobile={isMobile}
      />
    </motion.div>
  );
};

export default Home;
