import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { Component1 } from './Component1/Component1';
import { Component2 } from './Component2/Component2';
import { IconCancelIcon } from './IconCancelIcon';
import { IconCancelIcon2 } from './IconCancelIcon2';
import { IconCheckIcon } from './IconCheckIcon';
import { IconCheckIcon2 } from './IconCheckIcon2';
import { IconCheckIcon3 } from './IconCheckIcon3';
import classes from './Pricingcopy.module.css';

interface Props {
  className?: string;
}
/* @figmaId 60:34 */
export const Pricingcopy: FC<Props> = memo(function Pricingcopy(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.rectangle1}></div>
      <div className={classes.home}>Home</div>
      <div className={classes.features}>Features</div>
      <div className={classes.pricing}>Pricing</div>
      <div className={classes.aboutUs}>About us</div>
      <Component1 className={classes.component1} classes={{ logo1: classes.logo1 }} />
      <div className={classes.user}>User</div>
      <Component2 className={classes.component2} />
      <div className={classes.free_box}></div>
      <div className={classes.rectangle410}></div>
      <div className={classes.basic}>Basic</div>
      <div className={classes.rectangle411}></div>
      <div className={classes.standard}>Standard</div>
      <div className={classes.free}>Free</div>
      <div className={classes.rectangle412}></div>
      <div className={classes.IconCheck}>
        <IconCheckIcon className={classes.icon} />
      </div>
      <div className={classes.rectangle413}></div>
      <div className={classes._4MsgMonth}>4 Msg/Month</div>
      <div className={classes.rectangle418}></div>
      <div className={classes.ads}>Ads</div>
      <div className={classes.rectangle419}></div>
      <div className={classes.extraRequest}>Extra request</div>
      <div className={classes.rectangle420}></div>
      <div className={classes.cropPlan}>Crop Plan</div>
      <div className={classes.rectangle414}></div>
      <div className={classes._4MsgMonth2}>4 Msg/Month</div>
      <div className={classes.rectangle421}></div>
      <div className={classes.ads2}>Ads</div>
      <div className={classes.rectangle422}></div>
      <div className={classes.extraRequest2}>Extra request</div>
      <div className={classes.rectangle423}></div>
      <div className={classes.cropPlan2}>Crop Plan</div>
      <div className={classes._2MsgMonth}>2 Msg/Month</div>
      <div className={classes.rectangle415}></div>
      <div className={classes.rectangle416}></div>
      <div className={classes.extraRequest3}>Extra request</div>
      <div className={classes.rectangle417}></div>
      <div className={classes.cropPlan3}>Crop Plan</div>
      <div className={classes.ads3}>Ads</div>
      <div className={classes.IconCancel}>
        <IconCancelIcon className={classes.icon2} />
      </div>
      <div className={classes.IconCheck2}>
        <IconCheckIcon2 className={classes.icon3} />
      </div>
      <div className={classes.IconCheck3}>
        <IconCheckIcon3 className={classes.icon4} />
      </div>
      <div className={classes.IconCancel2}>
        <IconCancelIcon2 className={classes.icon5} />
      </div>
    </div>
  );
});
