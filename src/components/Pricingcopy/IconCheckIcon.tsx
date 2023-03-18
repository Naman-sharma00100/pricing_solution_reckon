import { memo, SVGProps } from 'react';

const IconCheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 36 45' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 27L10.2857 45L36 0' stroke='black' strokeWidth={14.1538} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(IconCheckIcon);
export { Memo as IconCheckIcon };
