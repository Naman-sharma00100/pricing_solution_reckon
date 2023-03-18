import { memo, SVGProps } from 'react';

const IconCancelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 38 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 34L19.0001 17.0001M19.0001 17.0001L38 0M19.0001 17.0001L0 0M19.0001 17.0001L38 34'
      stroke='black'
      strokeWidth={17.4418}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconCancelIcon);
export { Memo as IconCancelIcon };
