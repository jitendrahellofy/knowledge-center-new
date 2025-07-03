import { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import logo from '../public/logo.png'
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: <Image src={logo} height={40} width={40} alt='hellofy'/>,
  },
};