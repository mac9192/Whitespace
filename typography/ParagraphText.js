import React from 'react';
import { ParagraphTextStyles } from '../typography/ParagraphTextStyles';

function ParagraphText({ children, ...props }) {
  return <ParagraphTextStyles {...props}>{children}</ParagraphTextStyles>;
}

export default ParagraphText;