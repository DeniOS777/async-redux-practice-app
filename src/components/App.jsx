import { Gallery } from './Gallery/Gallery';
import { SelectGenre } from './SelectGenre/SelectGenre';

export const App = () => {
  return (
    <div>
      <SelectGenre />
      <Gallery />
    </div>
  );
};
