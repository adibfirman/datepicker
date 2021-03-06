import React from 'react';
import { format } from 'date-fns';

import { Base } from './styles';
import { useData } from '../useGlobalData';
import { ArrowDown } from '../Arrow';
import { AnimateContent } from '../AnimateContent';

export function SelectedDate() {
  const { setMode, prevMode, currentDateObj, colors } = useData();

  return (
    <AnimateContent
      withTransitionWhen={Boolean(prevMode)}
      onClick={() => setMode('date')}
    >
      <Base txtColors={colors.textColor}>
        {format(currentDateObj, 'dd MMM yyyy')} <ArrowDown />
      </Base>
    </AnimateContent>
  );
}
