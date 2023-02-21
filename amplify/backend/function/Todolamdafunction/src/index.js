import { default as fetch, Request } from 'node-fetch';
import { v4 as uuidv4 } from 'uuid';

const GRAPHQL_ENDPOINT = process.env.API_REACTAPP_GRAPHQLAPIENDPOINTOUTPUT
const GRAPHQL_API_KEY = process.env.API_REACTAPP_GRAPHQLAPIKEYOUTPUT

const query = /* GraphQL */ `
  mutation CREATE_TODO($input: CreateTodoInput!) {
    createTodo(input: $input) {
      id
      name
      description
      createdAt
    }
  }
`;



export const handler = async (event) => {
  console.log(`EVENT: ${JSON.stringify(event)}`);


  const input =event.arguments.input
  const variables = {
    input: {
        id: uuidv4(),
         name: input.name,
         description:input.description
    }

  };



  const options = {
    method: 'POST',
    headers: {
      'x-api-key': GRAPHQL_API_KEY
    },
    body: JSON.stringify({ query, variables })
  };

  const request = new Request(GRAPHQL_ENDPOINT, options);

  let statusCode = 200;
  let body;
  let response;

  try {
    response = await fetch(request);
    body = await response.json();

    if (body.errors) statusCode = 400;

  } catch (error) {
    statusCode = 400;
    body = {
      errors: [
        {
          status: response.status,
          message: error.message,
          stack: error.stack
        }
      ]
    };
  }

  console.log(body.data.createTodo)
  return body.data.createTodo
};