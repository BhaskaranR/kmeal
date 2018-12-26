import gql from 'graphql-tag';


export const categoriesQuery = gql`
{
  kmeal_categories {
    title
    alias
  }
 }
`