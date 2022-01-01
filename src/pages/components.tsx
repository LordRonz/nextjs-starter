/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import Button from '@/components/buttons/Button';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import CustomLink from '@/components/links/CustomLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Seo from '@/components/Seo';

const Home: NextPage = () => {
  return (
    <>
      <Seo templateTitle='Components' description='Component collections' />
      <main>
        <section className='bg-black text-primary-50'>
          <div className='layout flex flex-col min-h-screen'>
            <h1 className='mt-10 mb-4'>Components</h1>
            <p className='mb-4'>
              <ArrowLink href='/' openNewTab={false} direction='left'>
                Back To Home
              </ArrowLink>
            </p>
            <ol className='space-y-10'>
              <li>
                <h2 className='my-4'>Buttons</h2>
                <Button variant='primary' className='mr-4'>
                  Button
                </Button>
                <Button variant='outline'>Button Outline</Button>
              </li>
              <li>
                <h2 className='my-4'>Links</h2>
                <ArrowLink variant='primary' href='#'>
                  ArrowLink
                </ArrowLink>
              </li>
              <li>
                <ButtonLink variant='primary' href='#'>
                  ButtonLink
                </ButtonLink>
              </li>
              <li>
                <CustomLink href='#'>CustomLink</CustomLink>
              </li>
              <li>
                <UnstyledLink href='#'>UnstyledLink</UnstyledLink>
              </li>
              <li>
                <h2 className='my-4'>404 Page</h2>
                <ArrowLink variant='primary' href='/404'>
                  ArrowLink
                </ArrowLink>
              </li>
            </ol>
          </div>
          <footer className='py-4 flex justify-center items-center'>© Aaron Christopher {new Date().getFullYear()}</footer>
        </section>
      </main>
    </>
  );
};

export default Home;
