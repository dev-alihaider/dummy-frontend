// import Link from 'next/link';
import type { ReactNode } from 'react';
import { NavBar } from 'src/components/organisms/navbar';

// import { AppConfig } from '@/utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full text-gray-700 antialiased">
    {props.meta}

    <div>
      <header className="border-b border-gray-300">
        <NavBar />
      </header>

      <main className="content py-5 text-xl">{props.children}</main>

      <footer className="border-t border-gray-300 py-8 text-center text-sm" />
    </div>
  </div>
);

export { Main };
