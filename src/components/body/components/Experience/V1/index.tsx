import Stack from "src/utils/Stack";
import CompanyTemplate from "./CompanyTemplate";

const Experience = () => {
  const currentResponsibilities = [
    "Develop and ship highly interactive web applications for Incare which is one of the biggest revenue-generating products of Innovacccer.",
    "Develop and Contribute generic, most frequently used by customers components to their common libraries, those are used in their application.",
    "Worked with a variety of different languages, and frameworks such as TypeScript, ReactJS, Redux, Node.js, etc.",
    "Tested many functionalities via Jest (for unit-testing), Enzyme (for component testing), and Cypress (for end-to-end testing).",
    "Communicate & collaborate with various teams of engineers, and designers on a regular basis and recently attended many client calls.",
  ];

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        minHeight: "85vh",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div
        style={{
          width: "60%",
        }}
      >
        <div
          style={{
            width: "80%",
            margin: "auto",
          }}
        >
          <CompanyTemplate
            employee={{
              position: "Associate Software Engineer",
              type: "Frontend",
            }}
            employer={{
              name: "Innovaccer Analytics Private Ltd.",
              joined: "09/2021",
              leaved: "04/2023",
              location: "Noida, India",
              profileURL: "https://innovaccer.com/",
              description: `It is a health cloud company dedicated to accelerating innovation
              in healthcare to connect and curate the world's healthcare
              information.`,
            }}
            responsibilities={currentResponsibilities}
          />
        </div>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          padding: "0px 56px",
          flexDirection: "column",
          borderLeft: "1px solid white",
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <Stack margin={48} direction="column">
            <CompanyTemplate
              employee={{
                position: "Programmer Analyst Trainee",
                type: "Intern",
              }}
              employer={{
                name: "Cognizant Technology Solutions",
                joined: "01/2021",
                leaved: "05/2021",
                location: "Remote, India",
                profileURL: "https://www.cognizant.com/in/en",
                description: `Cognizant helps companies modernize technology, reimagine processes and transform experiences so they stay ahead in a fast-changing world. In this internship, I've used Java, Maven, JDBC, MVC, and Spring boot framework to build a full-stack web app.`,
              }}
            />
            <CompanyTemplate
              employee={{
                position: "Pre Education Program",
                type: "Intern",
                src: "https://drive.google.com/file/d/1_BHK3hS__amlRIk1SF_-FU_OjgyDXEKq/view",
              }}
              employer={{
                name: "EPAM Systems India Private Ltd.",
                joined: "01/2020",
                leaved: "06/2020",
                location: "Remote, India",
                profileURL: "https://www.epam.com/",
                description: `EPAM Systems Inc (EPAM Systems) is a technology company that offers software engineering services for software development and digital platforms. This PEP includes 13 online webinars covering SE best practices, Design principles with the intermediate level of Java concept.`,
              }}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Experience;
