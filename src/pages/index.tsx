// import { useRouter } from 'next/router';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  // const router = useRouter();

  return (
    <Main
      meta={
        <Meta
          title="Dummy frontend"
          description="Dummy frontend for mocking dummy API."
        />
      }
    >
      <div />
    </Main>
  );
};

export default Index;
