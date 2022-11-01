import { duplicate } from './duplicate';
import { Gallery } from './Gallery/Gallery';
import { SelectGenre } from './SelectGenre/SelectGenre';

export const App = () => {
  console.log(duplicate([1, 1, 1, 2, 2, 5]));
  return (
    <div>
      <SelectGenre />
      <Gallery />
    </div>
  );
};
