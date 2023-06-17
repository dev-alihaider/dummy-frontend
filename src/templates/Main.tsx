// import Link from 'next/link';
import type { ReactNode } from 'react';
import { NavBar } from 'src/components/organisms/navbar';

import { SecondaryNavbar } from '@/components/organisms/SecondaryNavbar';

// import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div>
      <header>
        <div className="border-b border-gray-300">
          <NavBar />
        </div>
        <div className="border-b border-gray-300">
          <SecondaryNavbar />
        </div>
      </header>

      <main className="content">{props.children}</main>

      {/* <footer className="border-t border-gray-300 py-8 text-center text-sm"> */}
      {/*  <Pagination /> */}
      {/* </footer> */}
    </div>
  </div>
);

export { Main };
