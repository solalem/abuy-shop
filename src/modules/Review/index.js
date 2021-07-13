import ReviewIndex from './ReviewIndex';
import CreateReview from './CreateReview';
import ReviewDetails from './ReviewDetails';

const ReviewModule = {
  routeProps: [
    {
      path: '/reviews',
      exact: true,
      component: ReviewIndex
    },
    {
      path: '/reviews/new',
      exact: true,
      component: CreateReview
    },
    {
      path: '/reviews/:id',
      exact: true,
      component: ReviewDetails
    }
  ],
  navigation: {
    permission: [],
    label: 'Reviews',
    theme: 'reviews',
  },
  name: 'Reviews',
}
export default ReviewModule;
