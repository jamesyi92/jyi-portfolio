import React from "react"

import Layout from "../components/layout"
import styled from "styled-components"
import { Container, Row, Col, Badge } from "reactstrap"

import SEO from "../components/seo"

const Section = styled.section`
  padding: 120px 0;
`

const Intro = styled.div`
  padding-bottom: 60px;
`

const WorkExperience = styled.div`
  padding-bottom: 60px;
`

const Skills = styled.div`
  padding-bottom: 60px;
`

const Name = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  margin-bottom: 5px;
`
const Email = styled.p`
  font-size: 13px;
  color: #666666;
  margin-bottom: 45px;
`

const JobTitle = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  color: #666666;
`

const IntroPara = styled.p`
  color: #999999;
  margin-bottom: 0;
`

const Location = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
  color: #999999;
`

const SectionTitle = styled.h2`
  font-size: 13px;
  margin-bottom: 45px;
  text-transform: uppercase;
  color: #999999;
  letter-spacing: 1px;
`

const Title = styled.h3`
  position: relative;
  font-size: 18px;
  margin-bottom: 30px;
  display: inline-block;

  &::before {
    content: "";
    display: ${props => (props.underline ? "block" : "none")};
    position: absolute;
    left: 0;
    bottom: -10px;
    height: 3px;
    width: 100%;
    background: ${props => props.theme.primary};
  }
`

const Experience = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
`

const ExperienceIntro = styled.p`
  margin-bottom: 15px;
`

const ExperienceList = styled.ul`
  padding: 0;
  margin-left: 45px;
  margin-bottom: 0;

  li {
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`
const Skill = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }
`

const StyledBadge = styled(Badge)`
  padding: 10px 20px;
  font-size: 15px;
  font-weight: normal;
  border-radius: 4px;
  background: #f2f2f2;
  color: #000000;
  margin-bottom: 10px;

  &:not(:last-child) {
    margin-right: 5px;
  }
`

const EducationSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 45px;
  }
`

const Education = styled.div`
  &:not(:last-child) {
    margin-bottom: 30px;
  }

  ${Title} {
    margin-bottom: 15px;
  }
`

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" description="Front-End Developer Based in Vancouver" />
    <Section>
      <Container>
        <Row className="justify-content-center">
          <Col md={10}>
            <Intro>
              <Name>James Yi</Name>
              <Email>jamesyi@live.com</Email>
              <JobTitle>Front-End Developer</JobTitle>
              <Location>Vancouver, BC</Location>
              <Location>604-992-6778</Location>
              <IntroPara>
                Highly-motivated and results-driven Front-End web developer with
                over 7 years of experience building custom-tailored digital
                experiences using technologies like WordPress, React and Gatsby.
                Adaptable, and well-versed in Scrum and Agile methodologies. I
                live and breathe HTML/CSS/Javascript, while having a fierce
                passion to bring UI/UX concepts to life.
              </IntroPara>
            </Intro>
            <WorkExperience>
              <SectionTitle>Work Experience</SectionTitle>
              <Experience>
                <Title underline>Visier</Title>
                <Location>Lead UI Developer | August 2022 - Present</Location>
                <ExperienceList>
                  <li>
                    Refined and fine tuned our in-house component/design system
                    to handle more variants and props changes based on design
                    requirements.
                  </li>

                  <li>
                    Delegating tasks to other developers to achieve deadlines on
                    time.
                  </li>

                  <li>
                    Write task reports and weekly updates on various in-progress
                    projects for more visibility.
                  </li>

                  <li>
                    Conduct code reviews and QA on pull requests for features
                    and updates.
                  </li>

                  <li>
                    Led the project on migrating our Blog posts hosted on
                    WordPress into Contentful + GatsbyJS.
                  </li>

                  <li>
                    Led the project on migrating Marketo hosted landing pages
                    into Contentful + GatsbyJS.
                  </li>

                  <li>
                    Led the project on overhauling the marketing site with a
                    revamped design system.
                  </li>

                  <li>
                    Assisted in creating and modeling Contentful Content Models
                    into building 'self-serve' pages based on requirements from
                    the content team and other marketers, while handling the
                    data in customized React templates using GraphQL and
                    Gatsby's page creation API.
                  </li>

                  <li>
                    Moved the Gatsby build proccess to Gatsby Cloud, decreasing
                    deployment times from 15 min to as little as 3 min.
                  </li>

                  <li>
                    Created API Gateways on the edge (Serverless Functions) to
                    handle API calls with minimal backend setup.
                  </li>

                  <li>Keeping up-to-date with the latest industry trends.</li>
                </ExperienceList>
                <Location>
                  Senior Front-End Developer | February 2020 - August 2022
                </Location>
                <ExperienceList>
                  <li>
                    Introduced a Headless CMS + decoupled front-end stack to
                    improve on security, scalability and performance of our web
                    builds.
                  </li>

                  <li>
                    Transformed multiple projects that involved migrating
                    WordPress based builds into GatsbyJS.
                  </li>

                  <li>
                    Collaborated with design and product teams on building an
                    inhouse design system. Consolidating everything such as
                    typography, colour, spacing, grids, design tokens and more.
                  </li>

                  <li>
                    Built a themeable and highly customizable resuable component
                    system using 'styled-system'.
                  </li>

                  <li>
                    Implemented CI/CD with Netlify when deploying code and
                    features, resulting in an increase productivity and less
                    time spent on configuration.
                  </li>
                </ExperienceList>
                <Location>
                  Contract Front-End Developer | June 2019 - February 2020
                </Location>
                <ExperienceIntro>
                  Collaborated on various projects for the marketing team that
                  involved a new corporate website build, email templates and
                  more.
                </ExperienceIntro>
                <ExperienceList>
                  <li>
                    Assisted in the creation of a custom WordPress theme that
                    involved asset bundling with Webpack as well as introduced
                    ES6 modules and an organized SASS structure following BEM
                    methodology.
                  </li>
                  <li>
                    Developed various mobile-friendly pages and components using
                    Bootstrap 4 and CSS Grid.
                  </li>
                  <li>
                    Collaborated with an in-house UI/UX designer on developing
                    functional prototypes for components based off wireframes
                    and mockups.
                  </li>
                  <li>
                    Built and compiled HTML email templates using Foundation for
                    Emails, using SASS and a responsive grid layout for an
                    improved developer experience, consistency and compatibility
                    on all major email clients.
                  </li>
                </ExperienceList>
              </Experience>
              <Experience>
                <Title underline>Sterling</Title>
                <Location>
                  Senior Front-End Developer | April 2017 - Present
                </Location>
                <ExperienceIntro>
                  Developed, maintained and managed websites and scalable
                  digital solutions based on business requirements for multiple
                  verticals.
                </ExperienceIntro>
                <ExperienceList>
                  <li>
                    Developed multiple in-house WordPress themes that involved
                    custom templates and functions based off Sage 9.{" "}
                  </li>
                  <li>
                    Developed views/templates using Laravel's Blade engine,
                    ensuring a DRY theme with a reusable component-based
                    architecture, while creating controllers to separate logic
                    from the view layer.
                  </li>
                  <li>
                    Created and implemented a mobile-first responsive design
                    system that included typography, grid, color, spacing, and
                    buttons using SASS based off brand guidelines.
                  </li>
                  <li>
                    Used modern ES6+ Javascript features for data manipulation,
                    DOM traversal and writing asynchronous Javascript involved
                    in sending or consuming REST API data. (Axios, Fetch API)
                  </li>
                  <li>
                    Utilized Webpack for hot reloading, bundling SASS, ES6+ JS
                    and other assets using ESLint and Babel loaders.
                  </li>
                  <li>
                    Integrated Codeship as a CI/CD tool using custom build
                    containers, improving cross-browser compatibility, quality
                    and frequency of deployments.
                  </li>
                  <li>
                    Developed landing pages using GatsbyJS, using React for
                    templating with GraphQL to fetch content from a RESTful API
                    source. (WordPress, Contenful)
                  </li>
                  <li>
                    Used Styled Components as the styling layer for GatsbyJS,
                    keeping component styles scoped and dynamic based on props.
                  </li>
                  <li>
                    Developed and deployed a web application on Heroku using
                    Node.js, Express and a React front-end to create Trustpilot
                    Business Generated Links for thousands of contact records in
                    Hubspot.
                  </li>
                </ExperienceList>
              </Experience>
              <Experience>
                <Title underline>Sterling Talent Solutions</Title>
                <Location>
                  Marketing Web Developer | April 2015 - March 2017
                </Location>
                <ExperienceIntro>
                  Developed and maintained digital assets, including websites
                  and hundreds of client facing landing pages.
                </ExperienceIntro>
                <ExperienceList>
                  <li>
                    Created custom WordPress themes using Gulp for front-end
                    automation, which included compiling and bundling SASS/JS
                    files and asset compression for production environments.
                  </li>
                  <li>
                    Used Advanced Custom Fields to develop and create
                    custom-tailored solutions for other non-technical marketers
                    to publish and edit content on the website.
                  </li>
                  <li>
                    Created custom post types and taxonomies to filter,
                    distinguish, and develop templates for different content
                    types in the CMS, including resources, webinars, news
                    articles, and case studies.
                  </li>
                  <li>
                    Produced responsive, mobile-first layouts and pages using
                    Bootstrap while also migrating from a float based grid to
                    flexbox.
                  </li>
                  <li>
                    Used Git with Bitbucket as version control for the code
                    layer, and WPEngine for the database layer for WordPress
                    themes.
                  </li>
                </ExperienceList>
              </Experience>
            </WorkExperience>

            <Skills>
              <SectionTitle>Skills</SectionTitle>
              <Skill>
                <Title>Front-End</Title>
                <div>
                  <StyledBadge>HTML5</StyledBadge>
                  <StyledBadge>CSS3</StyledBadge>
                  <StyledBadge>ES5/ES6+ JS</StyledBadge>
                  <StyledBadge>jQuery</StyledBadge>
                  <StyledBadge>SASS</StyledBadge>
                  <StyledBadge>npm</StyledBadge>
                  <StyledBadge>Yarn</StyledBadge>
                  <StyledBadge>Bootstrap</StyledBadge>
                  <StyledBadge>Bulma</StyledBadge>
                  <StyledBadge>Foundation</StyledBadge>
                  <StyledBadge>BEM</StyledBadge>
                  <StyledBadge>Flexbox</StyledBadge>
                  <StyledBadge>CSS Grid</StyledBadge>
                  <StyledBadge>CSS3 Animations</StyledBadge>
                  <StyledBadge>Gulp</StyledBadge>
                  <StyledBadge>Webpack</StyledBadge>
                  <StyledBadge>React</StyledBadge>
                  <StyledBadge>Redux</StyledBadge>
                  <StyledBadge>React Pose</StyledBadge>
                  <StyledBadge>React Spring</StyledBadge>
                  <StyledBadge>Styled Components</StyledBadge>
                  <StyledBadge>GatsbyJS</StyledBadge>
                  <StyledBadge>GraphQL</StyledBadge>
                  <StyledBadge>REST APIs</StyledBadge>
                  <StyledBadge>AJAX</StyledBadge>
                  <StyledBadge>JSON</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>Back-End</Title>
                <div>
                  <StyledBadge>NodeJS</StyledBadge>
                  <StyledBadge>PHP</StyledBadge>
                  <StyledBadge>Laravel Blade</StyledBadge>
                  <StyledBadge>Express</StyledBadge>
                  <StyledBadge>REST API Creation</StyledBadge>
                  <StyledBadge>JWT</StyledBadge>
                  <StyledBadge>MongoDB</StyledBadge>
                  <StyledBadge>Mongoose</StyledBadge>
                  <StyledBadge>Wordpress Theme Development</StyledBadge>
                  <StyledBadge>Advanced Custom Fields</StyledBadge>
                  <StyledBadge>Custom Post Types</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>CI/CD</Title>
                <div>
                  <StyledBadge>Codeship</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>CMS</Title>
                <div>
                  <StyledBadge>WordPress</StyledBadge>
                  <StyledBadge>Contentful</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>Development Methodology</Title>
                <div>
                  <StyledBadge>Agile</StyledBadge>
                  <StyledBadge>Scrum</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>Version Control</Title>
                <div>
                  <StyledBadge>Git</StyledBadge>
                  <StyledBadge>BitBucket</StyledBadge>
                </div>
              </Skill>

              <Skill>
                <Title>Others</Title>
                <div>
                  <StyledBadge>Adobe Photoshop</StyledBadge>
                  <StyledBadge>Adobe Illustrator</StyledBadge>
                  <StyledBadge>Adobe xD</StyledBadge>
                  <StyledBadge>Sublime Text 3</StyledBadge>
                  <StyledBadge>Package Control</StyledBadge>
                  <StyledBadge>Emmet</StyledBadge>
                  <StyledBadge>Visual Studio Code</StyledBadge>
                  <StyledBadge>Heroku</StyledBadge>
                  <StyledBadge>Netlify</StyledBadge>
                  <StyledBadge>WPEngine</StyledBadge>
                  <StyledBadge>Headless CMS</StyledBadge>
                </div>
              </Skill>
            </Skills>

            <EducationSection>
              <SectionTitle>Education</SectionTitle>
              <Education>
                <Title>British Columbia Institute of Technology</Title>
                <Location>
                  Diploma - Digital Design and Development | 2012 - 2014
                </Location>
              </Education>
              <Education>
                <Title>University of Victoria</Title>
                <Location>Computer Science | 2010 - 2012</Location>
              </Education>
            </EducationSection>
          </Col>
        </Row>
      </Container>
    </Section>
  </Layout>
)

export default ResumePage
