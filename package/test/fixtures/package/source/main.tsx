import {createRoot} from 'react-dom/client';
import {Button} from 'tinywidgets/source';
import {colors} from 'tinywidgets/source/css';

const root = document.getElementById('root');
if (root == null) {
  throw new Error('Missing root element');
}

createRoot(root).render(
  <div style={{color: colors.accent}}>
    <Button title="Source" />
  </div>,
);
