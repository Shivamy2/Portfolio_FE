export const getCurrentEmployee = (code: string) => {
  return {
    query: `
    query GetAllData($code: String!) {
      getCurrectEmployeeData(code: $code) {
        _id
        details {
          userCode
          email
          mobile
          resumeLink
          about {
            title
            myIntroduction {
              values
              literals
            }
            knowMeDescription {
              values
              literals
            }
            skills
          }
          theme {
            primaryDark
            primaryLight
            onPrimary
            secondaryDark
            secondaryLight
            onSecondary
            hero
          }
          name
          introduction {
            values
            literals
          }
          home {
            typewriterText
            description {
              values
              literals
            }
            socialLinks {
              github
              linkedin
              twitter
              youtube
              reddit
              dev
              medium
              instagram
            }
          }
          dpUrl
          experience {
            title
            introduction
            totalExperience
            companies {
              employerName
              employerLocation
              position
              joiningDate
              endingDate
              overview {
                values
                literals
              }
              points {
                values
                literals
              }
              techStackLearned
              
            }
          }
          certification {
            title
            shortDescription {
              values
              literals
            }
            details {
              name
              overview {
                values
                literals
              }
              link
              date
              skills
            }
          }
          contact {
            title
            introduction {
              values
              literals
            }
            email
            name
            message
          }
          projects {
            title
            introduction {
              values
              literals
            }
            personalProjectsDetails {
              _id
              title
              shortDescription {
                literals
                values
              }
              longDescription {
                values
                literals
              }
              overview {
                values
                literals
              }
              points {
                values
                literals
              }
              stackUsed
              imageUrl
              pocUrl
              hostedUrl
            }
            professionalProjectsDetails {
              _id
              title
              shortDescription {
                values
                literals
              }
              longDescription {
                values
                literals
              }
              overview {
                values
                literals
              }
              points {
                values
                literals
              }
              stackUsed
              imageUrl
              pocUrl
              hostedUrl
            }
          }
        }
        headerOptions
      }
    }  
    `,
    variables: {
      code,
    },
  };
};

export const getProject = ({
  code,
  id,
  type,
}: {
  code: string;
  id: string;
  type: string;
}) => {
  return {
    query: `
    query GetProject($input: GetProjectInput!) {
      getProjects(input: $input){
        _id
        title
        shortDescription {
          literals
          values
        }
        longDescription {
          values
          literals
        }
        overview {
          values
          literals
        }
        points {
          values
          literals
        }
        stackUsed
        imageUrl
        pocUrl
        hostedUrl
      }
    }
    `,
    variables: {
      input: { code, id, type },
    },
  };
};

export const sendChatRequest = ({
  name,
  createdBy,
  createdFor,
  employeeId,
  message,
}: {
  name: string;
  createdFor: string;
  createdBy: string;
  employeeId: string;
  message: string;
}) => {
  return {
    query: `
      mutation Mutation($input: SendChat!) {
        sendChatRequest(input: $input) {
          _id
          participants
        }
      }
    `,
    variables: {
      input: { name, createdBy, createdFor, employeeId, message },
    },
  };
};

export const getChatData = (chatId: string) => {
  return {
    query: `
      mutation Mutation($chatId: String!) {
        getChattingData(chatId: $chatId) {
          _id
          participants
        }
      }
    `,
    variables: {
      chatId,
    },
  };
};
