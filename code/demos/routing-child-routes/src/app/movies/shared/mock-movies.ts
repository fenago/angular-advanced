import { Movie } from './movie.model';

export const MOVIES: Movie[] = [
  new Movie(
    1,
    ' Titanic',
    'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.'
  ),
  new Movie(
    2,
    ' E.T. the Extra-Terrestrial',
    'A troubled child summons the courage to help a friendly alien escape Earth and return to his home world.'
  ),
  new Movie(
    3,
    'The Wizard of Oz',
    // tslint:disable-next-line:max-line-length
    'Dorothy Gale is swept away from a farm in Kansas to a magical land of Oz in a tornado and embarks on a quest with her new friends to see the Wizard who can help her return home in Kansas and help her friends as well.'
  ),
  new Movie(
    4,
    'Star Wars: Episode IV - A New Hope ',
    // tslint:disable-next-line:max-line-length
    'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire/`s world-destroying battle-station while also attempting to rescue Princess Leia from the evil Darth Vader.'
  )
];
