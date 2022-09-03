import { gql } from '@apollo/client';
export const GET_ROCKET_DETAILS = gql`
  query {
    launchesPast(limit: 30) {
      mission_name
      id
      details
      rocket {
        rocket_name
        rocket_type
        first_stage {
          cores {
            landing_vehicle
            landing_type
          }
        }
        rocket {
          cost_per_launch
          mass {
            kg
          }
        }
      }
    }
  }
`;
