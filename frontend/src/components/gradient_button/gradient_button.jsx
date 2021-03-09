import React from 'react';
import Button from '@material-ui/core/Button';
import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';
import { usePushingGutterStyles } from '@mui-treasury/styles/gutter/pushing';
import './gradient_button.scss';

const GradientBtn = () => {
  const styles = useGradientBtnStyles();
  const chubbyStyles = useGradientBtnStyles({ chubby: true });
  const gutterStyles = usePushingGutterStyles({ cssProp: 'marginBottom', space: 2 });
  return (
    <div className={gutterStyles.parent}>
      <div>
        <Button id="square-button" classes={styles}>Button first</Button>
      </div>
      <div>
        <Button id="round-button" classes={chubbyStyles}>Button Round</Button>
      </div>
    </div>
  );
};

export default GradientBtn;
