import gql from 'graphql-tag';


export const restaurantQuery = gql`
query getRestaurantsNearBy($nearby:GetNearByInput){
  getRestaurantsNearby(nearby:$nearby)
  {
    address
    description
    distance
    isactive
    latitude
    longitude
    logo
    name
    owner
    phone
    restaurant_id
    timeofoperation
    yelp_id
    rating
  }
}
`;


export const categoriesQuery = gql`
{
  kmeal_categories {
    title
    alias
  }
 }
`;