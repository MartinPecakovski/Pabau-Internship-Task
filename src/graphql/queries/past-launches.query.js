import { gql } from '@apollo/client';

export const GET_PAST_LAUNCHES = gql`
  query {
    launchesPast(limit: 30) {
      id
      mission_name
      launch_date_local
      launch_site {
        site_name
      }
      links {
        article_link
        flickr_images
      }
    }
  }
`;
