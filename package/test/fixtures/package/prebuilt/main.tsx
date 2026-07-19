import {createRoot} from 'react-dom/client';
import {Button} from 'tinywidgets/prebuilt';
import {colors} from 'tinywidgets/prebuilt/css';
import 'tinywidgets/prebuilt/styles.css';

const root = document.getElementById('root');
if (root == null) {
  throw new Error('Missing root element');
}

createRoot(root).render(
  <div style={{color: colors.accent}}>
    <Button title="Prebuilt" />
  </div>,
);
